import React from "react";

// Icons
import ChevronDown from "../../Icons/ChevronDown.tsx";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex text-[#5C5F6A] gap-8 text-sm font-medium">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="" className="flex gap-2 items-center">
            <span>Categories</span>
            <ChevronDown />
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
