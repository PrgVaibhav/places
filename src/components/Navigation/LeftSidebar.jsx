import { NavLink } from "react-router-dom";
import { FaUserSecret, FaSearchengin, FaUserCircle } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { SiFusionauth } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import {
  MdOutlineToggleOff,
  MdToggleOn,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { generateRandomId } from "../../utils/idGenerator";
import { useState } from "react";

export const LeftSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false); // Initially set to false for expanded view

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const login = true;

  const SidebarLinks = [
    {
      id: generateRandomId(),
      name: "Home",
      path: "/",
      icon: <MdPlace className={`${isResponsive ? "text-3xl" : "text-lg"}`} />,
    },
    {
      id: generateRandomId(),
      name: "Users",
      path: "/users",
      icon: (
        <FaUserSecret className={`${isResponsive ? "text-3xl" : "text-lg"}`} />
      ),
    },

    {
      id: generateRandomId(),
      name: "Search",
      path: "/search",
      icon: (
        <FaSearchengin className={`${isResponsive ? "text-3xl" : "text-lg"}`} />
      ),
    },
    ...(!login
      ? [
          {
            id: generateRandomId(),
            name: "Login/Register",
            path: "/auth",
            icon: (
              <SiFusionauth
                className={`${isResponsive ? "text-3xl" : "text-lg"}`}
              />
            ),
          },
        ]
      : []),
    {
      id: generateRandomId(),
      name: "Profile",
      path: "/profile",
      icon: (
        <FaUserCircle className={`${isResponsive ? "text-3xl" : "text-lg"}`} />
      ),
    },
    {
      id: generateRandomId(),
      name: "Add Place",
      path: "/places/new",
      icon: <IoMdAdd className={`${isResponsive ? "text-3xl" : "text-lg"}`} />,
    },
    {
      id: generateRandomId(),
      name: isDarkMode ? "Dark Mode" : "Light Mode",
      icon: isDarkMode ? (
        <MdToggleOn className={`${isResponsive ? "text-3xl" : "text-lg"}`} />
      ) : (
        <MdOutlineToggleOff
          className={`${isResponsive ? "text-3xl" : "text-lg"}`}
        />
      ),
      toggleHandler: toggleDarkMode,
    },
  ];

  const toggleSidebar = () => {
    setIsResponsive((prev) => !prev); // Toggle the responsive state
  };

  return (
    <aside
      className={`${
        isResponsive ? "w-[60px]" : "w-[350px]"
      } p-4 shadow-lg h-auto sticky top-0 left-0 flex flex-col justify-between bg-[#111111] text-white transition-all duration-300`}
    >
      <nav className="flex flex-col gap-8 justify-around">
        <div className="flex justify-between items-center">
          {!isResponsive && (
            <div className="logo">
              <h1 className="text-xl">ExploreMate</h1>
            </div>
          )}
          <div>
            <span>
              {isResponsive ? (
                <MdClose
                  className="text-xl cursor-pointer "
                  onClick={toggleSidebar}
                />
              ) : (
                <MdMenu
                  className="text-xl cursor-pointer "
                  onClick={toggleSidebar}
                />
              )}
            </span>
          </div>
        </div>
        <div
          className={`user-info flex flex-col justify-center items-center gap-2 bg-[#1b1b1b] py-4 px-4 ${
            isResponsive ? "rounded-[50%]" : " rounded-lg"
          }`}
        >
          <div
            className={`user-img ${
              isResponsive ? "w-[30px] h-[30px]" : "w-[100px] h-[100px]"
            }`}
          >
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="object-cover w-full rounded-full"
            />
          </div>
          {!isResponsive && ( // Show username only when sidebar is expanded
            <div className="user-name flex flex-col items-center">
              <h2 className="text-xl">John Doe</h2>
              <span className="text-sm text-gray-500">@johnDoe</span>
            </div>
          )}
        </div>
        <ul className="flex flex-col">
          {SidebarLinks.map((link) => (
            <li className="mb-4 w-full" key={link.id} id={link.id}>
              <NavLink
                to={link?.path ? link?.path : " "}
                className={({ isActive }) =>
                  `flex items-center justify-start gap-2 px-2 py-3 rounded-xl text-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#1b1b1b] text-white shadow-lg"
                      : "hover:bg-[#29292934] hover:text-white"
                  } active:scale-90`
                }
                onClick={link?.toggleHandler}
              >
                {link.icon} {!isResponsive && link.name}{" "}
                {/* Show name only when expanded */}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-500">Copyright 2024</p>
      </div>
    </aside>
  );
};
