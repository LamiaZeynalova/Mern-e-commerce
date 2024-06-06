import React from "react";

const NotificationBar = () => {
  return (
    <div className="bg-[#0E1422] py-4 text-white text-sm flex items-center justify-center gap-2">
      <p>Get 25% OFF on your first order.</p>
      <a href="#" className="font-medium underline">
        Order now
      </a>
    </div>
  );
};

export default NotificationBar;
