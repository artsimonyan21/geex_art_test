const Comment = () => {
  return (
    <div className="flex gap-3">
      <img
        src="/commentImg.jpeg"
        alt=""
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-sm text-[#7B7EA5]">Вадим Давыдов</h3>
        <p className="text-sm text-[#06082C] font-medium">
          Наконец-то! Рад, что он вернулся в спорт
        </p>
        <div className="text-sm text-[#9395B8] font-medium flex items-center gap-1">
          15 минут назад
          <button className="text-[#353754] font-semibold mt-1">
            Ответить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
