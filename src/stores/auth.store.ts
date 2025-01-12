import { login } from "@/services/auth-api";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { ILoginState, IUserFromToken } from "./types/auth.types";
import { persist } from "zustand/middleware";

const initialState = {
  token: null,
  user: null,
  error: undefined,
  isAuthenticated: false,
};

export const useAuthStore = create<ILoginState>()(
  persist(
    (set) => ({
      ...initialState,

      login: async (username, password) => {
        try {
          const response = await login(username, password);
          const userData = jwtDecode(response?.token) as IUserFromToken;

          set({
            error: null,
            token: response?.token,
            user: userData,
            isAuthenticated: true,
          });
        } catch (error) {
          const errorMessage =
            (
              error as {
                response?: {
                  data?: {
                    message?: string;
                  };
                };
              }
            ).response?.data?.message || "Login failed";
          set({
            error: errorMessage,
            token: null,
            user: null,
            isAuthenticated: false,
          });

          console.log(errorMessage);
        }
      },
      logout: () => {
        set({ ...initialState });
      },
    }),
    {
      name: "auth",
      partialize: (state) => ({
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
