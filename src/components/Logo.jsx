function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-200 p-[0.2rem] flex items-center justify-center rounded-md">
        <svg width="50" height="50">
          <use href="/icons.svg#idea"></use>
        </svg>
      </div>
      <h1 className="text-[1.8rem] font-bold capitalize">Quizora</h1>
    </div>
  );
}

export default Logo;
