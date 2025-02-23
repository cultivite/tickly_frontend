import { Divide, Instagram } from "lucide-react";
import Collage from "../atoms/collage";

export const Social = () => {
  const images = [
    "https://images.squarespace-cdn.com/content/v1/55c17fb2e4b0a966b090f58e/1456551460822-6GCDVX3DV7BBQMU4R9VN/17_2015-07-16_iP6_353_850px.jpg",
    "https://jabarekspres.com/wp-content/uploads/2022/11/015188300_1644827981-260216941_621727195936861_1101852246083679105_n.jpg",
    "https://cdn.shopify.com/s/files/1/0246/8216/8400/files/femme-japonaise-kimono-eventail_1024x1024.jpg?v=1585472318",
    "https://odc.dance/sites/default/files/DDT-web-header.png",
    "https://cdn.fluidrausa.com/-/media/website-assets/zodiac-pool-blog/poolpartypeople_blp0046753_rf-copy.jpg?h=659&iar=0&w=755&rev=3ea95ebf3d634a6ab24b89fce9f35861",
    "https://img.freepik.com/free-photo/three-beautiful-smiling-girls-posing-holi-party_158538-16630.jpg",
    "https://preview.redd.it/holy-its-real-life-waguri-v0-ddp5ze1uq25e1.png?width=640&crop=smart&auto=webp&s=cf7c6a88b626cc1b1b5c5b3f1e2d99c73960d54a",
    "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2024/09/nama-jepang.jpg",
    "https://mall.theparksolo.com/cni-content/uploads/modules/posts/20190430100050.jpg",
    "https://media.istockphoto.com/id/186569659/photo/high-school-athlete-stretching-before-running-at-track-event.jpg?s=612x612&w=0&k=20&c=jdUOW7DrQHRY-y-KxzHgZfuZ0WEoRKUzx2FdOuM5Ev8=",
  ];

  return (
    <a className="flex relative hover:opacity-50 sm:w-3/4 m-auto justify-center items-center transition-all duration-700">
      <Collage images={images} />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-50 transition-all duration-1000">
          <Instagram size={200} className=""/>
      </div>
    </a>
  );
};
