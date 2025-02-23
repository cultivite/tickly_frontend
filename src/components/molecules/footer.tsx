import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-black mt-10 pb-10 px-4">
      <div className="border-b-[1px] border-main p-10 sm:px-28">
          <div className="text-3xl font-bold mb-5">TICKLY</div>
          <div className="flex justify-between">
            {/* Follow Us Section */}
            <div className="w-1/3">
              <div className="font-bold text-lg mb-1 cursor-default text-center sm:text-left">
                Follow Us
              </div>
              <div className="flex gap-4 sm:translate-x-2 flex-col items-center sm:flex-row">
                <a
                  href=""
                  className="hover:scale-125 transition-all duration-300 hover:text-pink-700"
                >
                  <Instagram size={36} />
                </a>
                <a
                  href=""
                  className="text-xl hover:scale-125 transition-all duration-300 hover:text-blue-800"
                >
                  <Facebook size={36} />
                </a>
                <a
                  href=""
                  className="text-xl hover:scale-125 transition-all duration-300 hover:text-blue-400"
                >
                  <Twitter size={36} />
                </a>
                <a
                  href="#"
                  className="hover:scale-125 transition-all duration-300 hover:text-gray-900"
                >
                  <FaTiktok size={36} />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between sm:flex-row sm:w-1/3 gap-2">
              {/* Company Section */}
              <div>
                <div className="font-bold text-lg mb-1 -translate-x-2 cursor-default">
                  Company
                </div>
                <div className="flex flex-col">
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">About</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Discover More</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Support</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                </div>
              </div>
              {/* Legal Section */}
              <div>
                <div className="font-bold text-lg mb-1 -translate-x-2 cursor-default">
                  Legal
                </div>
                <div className="flex flex-col">
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Cookie Policy</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Manage Cookies</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Privacy Policy</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                  <a
                    href=""
                    className="relative hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Terms</span>
                    <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-blue-700 transition-all duration-300 group-hover:h-full"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
