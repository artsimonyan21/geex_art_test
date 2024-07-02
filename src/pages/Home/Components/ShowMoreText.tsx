import { FC, useState } from "react";

interface ShowMoreTextProps {
  text: string | undefined;
}

const ShowMoreText: FC<ShowMoreTextProps> = ({ text }) => {
  const [showText, setShowText] = useState<boolean>(false);
  const toggle = () => {
    setShowText((prev) => !prev);
  };
  return (
    <div className="w-full">
      {text!.length < 210 ? (
        <p className="text-[#7B7EA5] text-sm">{text}</p>
      ) : (
        <div className="text-[#7B7EA5] text-sm">
          {showText ? text : text!.substring(0, 210)}
          <button onClick={toggle} className="text-[#353754] font-medium ml-1">
            {showText ? (
              <span>Close</span>
            ) : (
              <span className="text-nowrap">... Читать больше</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowMoreText;
