function BoxInfo({ children, placeholder, title, type = null }) {
  const base =
    "text-sm capitalize py-1 px-2 font-medium rounded-md tracking-wide ";
  const styles = {
    easy: base + "text-green-600 bg-green-100",
    hard: base + "text-red-600 bg-red-100",
    medium: base + "text-orange-600 bg-yellow-100",
  };
  return (
    <div className="bg-[#f1f3f5] p-5 rounded-xl flex items-center justify-center flex-col w-1/4">
      <div className="w-15 h-15 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 w-9 h-9 stroke-sky-600"
        >
          {children}
        </svg>
      </div>
      <span className="text-sm text-gray-400 my-1 block">{title}</span>
      <span
        className={`${styles[type]} text-[1rem] font-medium block text-gray-600 capitalize`}
      >
        {placeholder}
      </span>
    </div>
  );
}

export default BoxInfo;
