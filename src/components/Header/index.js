import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Myavarta from "../../mocks/images/myavar.jpg";
function Header() {
  return (
    <div className="header__md">
      <div className="logo__sc">
        <div className="logo"></div>
        <div className="title">Pet Social</div>
      </div>
      <div className="search_profile">
        <div className="search_bar">
          <div className="search_logo">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input placeholder="Search" className="focus-visible-only" />
        </div>
        <div className="profile">
          <div className="create__button">
            <div className="icon">
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
            <div>Create</div>
          </div>
          <div
            className="myavarta"
            style={{ backgroundImage: `url(${Myavarta})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
