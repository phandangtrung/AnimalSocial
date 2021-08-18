import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import Ravatar from "../../mocks/images/myavar.jpg";
import { Requestdata, Contactsdata } from "../../mocks/data/request_data";
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
          <div key={request.id} className="requests_box">
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
      <div className="contacts_container">
        <div className="contacts_title">
          contacts
          <div className="contacts_tag">
            <div className="number">68</div>
          </div>
        </div>
        <div className="contacts_box">
          {Contactsdata.map((contact) => (
            <div key={contact.id} className="contacts_element">
              <img className="element_avatar" src={contact.img} />
              <div className="element_name">{contact.name}</div>
              <div className="element_tools">
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
