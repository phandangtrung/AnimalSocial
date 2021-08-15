import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Groupimage from "../../mocks/images/dogimg.jpg";
import "./style.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Myavatar from "../../mocks/images/myavar.jpg";

import { MenuItem, Default_Tab } from "./menu";

function Rightbar() {
  const [tabsfocus, settabsfocus] = useState();
  const { active_tab } = useParams();
  const history = useHistory();
  useEffect(() => {
    console.log(active_tab);
    if (!active_tab) {
      history.push(Default_Tab);
      settabsfocus(Default_Tab);
    } else settabsfocus(`/${active_tab}`);
  }, []);

  const toogleTab = (route) => {
    settabsfocus(route);
    if (active_tab !== route) {
      history.push(route);
    }
  };
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
        {MenuItem.map((item) => (
          <div
            className={`menu__element${
              tabsfocus === item.route ? "_active" : ""
            }`}
            key={item.tabname}
            onClick={() => toogleTab(item.route)}
          >
            <div className="menu__element_child ">
              <div className="element__tab">
                <div className="tab__icon">{item.icon}</div>
                <div className="tab__name">{item.tabname}</div>
              </div>
              <div className="element__nofi"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="invite_title">
        invitions
        <div className="invite_tag">
          <div className="number">4</div>
        </div>
      </div>
      <div className="invite_box ">
        <img src={Groupimage} />
        <div className="accept_box">
          <div className="accept__button">Accept Invitation</div>
          <div className="cancle__button">
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
