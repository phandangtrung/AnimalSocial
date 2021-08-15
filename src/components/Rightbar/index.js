import React, { useState } from "react";
import "./style.scss";
import Myavatar from "../../mocks/images/myavar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faImage,
  faNewspaper,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
function Rightbar() {
  const [menucheck, setMenucheck] = useState([
    { tab: "Home", status: false },
    { tab: "People", status: false },
    { tab: "Photos", status: false },
    { tab: "News Feed", status: false },
    { tab: "Profile", status: false },
    { tab: "Settings", status: false },
  ]);
  return (
    <div className="rightbar__container">
      <div className="infor_box">
        <div
          className="my_avatar"
          style={{ backgroundImage: `url(${Myavatar})` }}
        ></div>
        <div className="user_infor">
          <div className="my_name">Trung Phan</div>
          <div className="my_tag">@trungphan</div>
        </div>
      </div>
      <div className="menu">
        <div className="menu__element">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div className="tab__name">Home</div>
            </div>
            <div className="element__nofi"></div>
          </div>
        </div>
        <div className="menu__element">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </div>
              <div className="tab__name">People</div>
            </div>
            <div className="element__nofi">
              <div className="nofi__number">
                <div className="number">8</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu__element">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="tab__name">Photos</div>
            </div>
            <div className="element__nofi"></div>
          </div>
        </div>
        <div className="menu__element">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <div className="tab__name">News Feed</div>
            </div>
            <div className="element__nofi"></div>
          </div>
        </div>
        <div className="menu__element">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="tab__name">Profile</div>
            </div>
            <div className="element__nofi"></div>
          </div>
        </div>
        <div className="menu__element">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <div className="tab__name">Settings</div>
            </div>
            <div className="element__nofi"></div>
          </div>
        </div>
        <div className="menu__element_active">
          <div className="menu__element_child ">
            <div className="element__tab">
              <div className="tab__icon">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <div className="tab__name">Settings</div>
            </div>
            <div className="element__nofi"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
