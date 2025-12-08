import { NavLink } from "react-router-dom";
import Logo from "./Logo";
function Header() {
  return (
    <nav
      className="flex items-center justify-between py-2 px-6
     bg-[#e7f5ff] rounded-xl mx-12 my-6"
    >
      <Logo />
      <ul className="flex items-center gap-4 text-stone-800 list-none font-small">
        <li className="text-[1.1rem] hover:text-[#1971c2] transition-all delay-75">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-[1.1rem] hover:text-[#1971c2] transition-all delay-75">
          <NavLink to={"/quizzes"}>Quizzes</NavLink>
        </li>
        <li className="text-[1.1rem] hover:text-[#1971c2] transition-all delay-75">
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
