const TapeFilter = () => {
  return (
    <div className="w-full  px-6 py-5 bg-white rounded-[20px]">
      <h2 className="text-xl text-[#06082C] font-semibold">Фильтр ленты</h2>
      <div className="flex flex-col gap-3">
        <button className="w-full h-10 rounded-[10px] text-start text-sm font-semibold text-[#06082C] hover:bg-[#F1F3F7]">
          Все
        </button>
        <button className="w-full h-10 rounded-[10px] text-start text-sm font-semibold text-[#06082C] hover:bg-[#F1F3F7]">
          Все
        </button>
        <button className="w-full h-10 rounded-[10px] text-start text-sm font-semibold text-[#06082C] hover:bg-[#F1F3F7]">
          Все
        </button>
        <button className="w-full h-10 rounded-[10px] text-start text-sm font-semibold text-[#06082C] hover:bg-[#F1F3F7]">
          Все
        </button>
      </div>
    </div>
  );
};

export default TapeFilter;
