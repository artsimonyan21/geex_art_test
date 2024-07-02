import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent, useState } from "react";

const sports = [
  { value: "Велоспорт", image: "/velosport.png", label: "Велоспорт" },
  { value: "Гандбол", image: "/handbol.png", label: "Гандбол" },
  {
    value: "Конькобежный спорт",
    image: "/skating.png",
    label: "Конькобежный спорт",
  },
  { value: "Самбо", image: "/sambo.png", label: "Самбо" },
  {
    value: "Спортивная борьба",
    image: "/barba.png",
    label: "Спортивная борьба",
  },
  { value: "Тяжелая атлетик", image: "/shtanga.png", label: "Тяжелая атлетик" },
];

const SelectSport = ({ next }: { next: (sports: string[]) => void }) => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormat = (
    _event: MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      className="flex flex-wrap justify-center items-center sm:gap-4 gap-[10px]"
    >
      {sports.map((sport) => (
        <div
          key={sport.value}
          className={`relative sm:w-56 sm:h-52 w-[158px] h-52 flex justify-center items-center rounded-[16px] overflow-hidden ${
            formats.includes(sport.value) ? "selected" : ""
          }`}
        >
          <div
            className={`absolute w-full h-full top-0 left-0 ${
              formats.includes(sport.value) ? "selected z-40" : "bg-transparent"
            }`}
          ></div>
          <img
            src={sport.image}
            alt={sport.label}
            className={`w-full h-full object-cover ${
              formats.includes(sport.value) ? "selected" : ""
            }`}
          />
          <ToggleButton
            value={sport.value}
            aria-label={sport.label}
            className={`w-fit !absolute bottom-2 !bg-white !text-black !rounded-3xl !z-50 ${
              formats.includes(sport.value) ? "!text-black/20" : ""
            }`}
          >
            {sport.label}
          </ToggleButton>
        </div>
      ))}
      <div className="w-full flex sm:flex-row flex-col gap-2 justify-between items-center mt-8">
        <Button
          className="!bg-[#F1F3F7] !text-[#06082C] !text-sm w-fit max-w-[370px] !rounded-xl !px-6"
          type="submit"
        >
          Пропустить
        </Button>
        <Button
          className="!bg-[#06082C] !text-white !text-sm w-fit max-w-[370px] !rounded-xl !px-6"
          onClick={() => next(formats)}
        >
          Подтвердить
        </Button>
      </div>
    </ToggleButtonGroup>
  );
};

export default SelectSport;
