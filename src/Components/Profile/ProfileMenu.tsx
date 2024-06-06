import React from "react";
import { NavLink } from "react-router-dom";
import {
  PiHeartStraightLight,
  PiShoppingCartSimpleLight,
  PiTruck,
} from "react-icons/pi";
import { RiKey2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

const ProfileMenu = () => {
  return (
    <ul className="flex items-center justify-center flex-col text-[#5C5F6A]">
      <li className="w-[212px] mb-4 ">
        <NavLink
          to="orders"
          className={({ isActive }) =>
            `flex items-center gap-[10px] py-2 px-6 rounded-lg ${
              isActive ? "bg-[#F6F6F6] text-[#0E1422]" : ""
            }`
          }
        >
          <PiShoppingCartSimpleLight />
          <p className="text-sm font-medium">Orders</p>
        </NavLink>
      </li>
      <li className="w-[212px] mb-4">
        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            `flex items-center gap-[10px] py-2 px-6 rounded-lg ${
              isActive ? "bg-[#F6F6F6] text-[#0E1422]" : ""
            }`
          }
        >
          <PiHeartStraightLight />
          <p className="text-sm font-medium">Wishlist</p>
        </NavLink>
      </li>
      <li className="w-[212px] mb-4">
        <NavLink
          to="address"
          className={({ isActive }) =>
            `flex items-center gap-[10px] py-2 px-6 rounded-lg ${
              isActive ? "bg-[#F6F6F6] text-[#0E1422]" : ""
            }`
          }
        >
          <PiTruck />
          <p className="text-sm font-medium">Address</p>
        </NavLink>
      </li>
      <li className="w-[212px] mb-4">
        <NavLink
          to="password"
          className={({ isActive }) =>
            `flex items-center gap-[10px] py-2 px-6 rounded-lg ${
              isActive ? "bg-[#F6F6F6] text-[#0E1422]" : ""
            }`
          }
        >
          <RiKey2Line />
          <p className="text-sm font-medium">Password</p>
        </NavLink>
      </li>
      <li className="w-[212px] mb-4">
        <NavLink
          to="account-detail"
          className={({ isActive }) =>
            `flex items-center gap-[10px] py-2 px-6 rounded-lg ${
              isActive ? "bg-[#F6F6F6] text-[#0E1422]" : ""
            }`
          }
        >
          <FaRegUser />
          <p className="text-sm font-medium">Account Detail</p>
        </NavLink>
      </li>
      <li className="w-[212px] mb-4">
        <NavLink
          to="logout"
          className={({ isActive }) =>
            `flex items-center gap-[10px] py-2 px-6 rounded-lg ${
              isActive ? "bg-[#F6F6F6] text-[#0E1422]" : ""
            }`
          }
        >
          <IoLogOutOutline />
          <p className="text-sm font-medium">Logout</p>
        </NavLink>
      </li>
      {/* <li className='w-[212px] mb-4'>
                <NavLink
                    to=""
                    className={({ isActive }) =>
                        `flex items-center gap-[10px] text-[#5C5F6A] py-2 px-6 ${isActive ? 'bg-[#F6F6F6]' : ''}`
                    }
                >
                    <IoLogOutOutline />
                    <p className='text-sm font-medium'>Logout</p>
                </NavLink>
            </li> */}
    </ul>
  );
};

export default ProfileMenu;
