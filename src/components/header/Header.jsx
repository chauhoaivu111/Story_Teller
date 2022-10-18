import React, { useRef } from "react";
import "./Header.scss";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const ClickActiveMenu = (content_Ref, toggle_Ref) => {
    document.addEventListener("mousedown", (e) => {
      if (toggle_Ref.current && toggle_Ref.current.contains(e.target)) {
        content_Ref.current.classList.toggle("active_drawer");
      } else {
        if (content_Ref.current && !content_Ref.current.contains(e.target)) {
          content_Ref.current.classList.remove("active_drawer");
        }
      }
    });
  };

  const header_menu = [
    {
      Title: "Home",
      Route: "/",
    },
    {
      Title: "Porfolio",
      Route: "/Porfolio",
    },
    {
      Title: "Story",
      Route: "/Story",
    },

    {
      Title: "Blog",
      Route: "/Blog",
    },
  ];

  const { pathname } = useLocation();

  const active = header_menu.findIndex((item) => item.Route === pathname);

  //------------------------------------------------------------------------------

  const menu_ref = useRef();
  const menu_toggle_ref = useRef();

  ClickActiveMenu(menu_ref, menu_toggle_ref);

  //-----------------------------------------------------------------------------

  const setActiveClick = () => menu_ref.current.classList.add("active_drawer");

  const setCloseClick = () =>
    menu_ref.current.classList.remove("active_drawer");

  return (
    <div className="headers">
      <div className="headers__container">
        <div className="headers__container__logo">
          <div className="headers__container__logo__mainlogo">
            <img src={logo} alt="" />
          </div>
        </div>

        <div classname="headers__container__menu">
          <div className="headers__container__menu__each">
            {header_menu.map((item, index) => (
              <li
                key={index}
                className={` ${index === active ? "active" : ""}`}
              >
                <Link to={item.Route}>{item.Title}</Link>
              </li>
            ))}
          </div>
          <div className="headers__container__menu__mobiles">
            <div ref={menu_toggle_ref}>
              <MenuIcon
                style={{ fontSize: "2rem", color: "gray" }}
                onClick={() => setActiveClick()}
              />
            </div>

            <div
              className="headers__container__menu__mobiles__main_drawer"
              ref={menu_ref}
            >
              <div className="button_close">
                <button
                  ref={menu_ref}
                  onClick={() => setCloseClick()}
                  className
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="content_moblie">
                {header_menu.map((item, index) => (
                  <div className="frame_title_moblie">
                    <Link to={item.Route} key={index}>
                      <p onClick={() => setCloseClick()}>{item.Title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
