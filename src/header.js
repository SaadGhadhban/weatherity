import React from "react";
import { links } from "./data";
import Search from "./search";
import { useGlobalContext } from "./context";
import Logo from "./img/Logo2.png";

const Header = () => {
  const { temp, cond, userCity } = useGlobalContext();

  return (
    <div className="main-header">
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={Logo}></img>
        </div>

        <h4 className="user-temp">
          The current Weather in {userCity}:
          <div>
            {temp}
            <i>°C </i> {cond}
          </div>{" "}
        </h4>
      </div>
      <div className="second-header">
        <Search />
      </div>

      <div className="links-container">
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <a href={url} className="links" key={id}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
