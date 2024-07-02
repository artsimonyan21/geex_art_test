import Img1 from "/articleImg1.png";
import Img2 from "/articleImg2.png";
import Img3 from "/articleImg3.png";
import Img4 from "/articleImg4.png";
import Img5 from "/articleImg5.png";
import Img6 from "/articleImg6.png";
import EyeIcon from "@/assets/icons/eye.svg?react";

const ArticleGalery = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  return (
    <div className="py-5 border-b border-b-[#F1F3F7]">
      <div className="grid grid-cols-12 gap-[10px]">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="article image"
            className="w-[232px] h-[200px] object-cover rounded-[14px] md:col-span-6 lg:col-span-4"
          />
        ))}
      </div>
      <div className="flex items-center gap-[6px]">
        <EyeIcon className="w-4 h-3" />
        <p className="text-sm text-[#7B7EA5]">4.1K</p>
      </div>
    </div>
  );
};

export default ArticleGalery;
