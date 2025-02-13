import React from "react";

// Components
import NotificationBar from "./NotificationBar.tsx";
import Navigation from "./Navigation.tsx";
import NavActions from "./NavActions.tsx";

// Icons
import Logo from "../../Icons/Logo.tsx";

const Header = () => {
  return (
    <header>
      <NotificationBar />
      <div className="container mx-auto py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#0E1422] flex items-center justify-center font-manrope">
            <Logo />
          </div>
          <span className="font-extrabold text-xl">Ecommerce</span>
        </div>
        {/* Navigation */}
        <Navigation />
        {/* Navigation Actions*/}
        <NavActions />
      </div>
    </header>
  );
};

export default Header;
