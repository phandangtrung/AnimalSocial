import React from "react";
import "./style.scss";
import Ravatar from "../../mocks/images/myavar.jpg";
import { Requestdata } from "../../mocks/data/request_data";
function Rightbar() {
  return (
    <div className="rightbar__container">
      <div className="requests_container">
        <div className="requests_title">
          requests
          <div className="requests_tag">
            <div className="number">{Requestdata.length}</div>
          </div>
        </div>
        {Requestdata.map((request) => (
          <div className="requests_box">
            <div className="request_profile">
              <img className="profile_avatar" src={`${request.img}`} />
              <div className="profile_title">
                <p>
                  <strong>{request.name}</strong> wants to add you a friends
                </p>
              </div>
            </div>
            <div className="button_box">
              <div className="accept_button">Accept</div>
              <div className="decline_button">Decline</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
