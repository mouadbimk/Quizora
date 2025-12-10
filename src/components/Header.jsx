import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <nav
      className="flex items-center justify-between py-2 px-6 relative
     bg-[#e7f5ff] rounded-xl mx-12 my-6"
    >
      <Logo />
      <button
        className="text-2xl cursor-pointer sm:hidden"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <ul
        className={`items-center gap-4 text-stone-800 list-none font-small sm:flex sm:flex-row transition-all duration-300 ${
          isOpen
            ? "flex flex-col absolute top-full left-0 right-0 mt-2 bg-[#e7f5ff] rounded-xl p-4 shadow"
            : "hidden "
        }`}
      >
        <li className="text-[1.1rem] hover:text-[#1971c2] transition-all delay-75">
          <NavLink to={"/"} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="text-[1.1rem] hover:text-[#1971c2] transition-all delay-75">
          <NavLink to={"/quizzes"} onClick={closeMenu}>
            Quizzes
          </NavLink>
        </li>
        <li className="text-[1.1rem] hover:text-[#1971c2] transition-all delay-75">
          <NavLink to={"/about"} onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
