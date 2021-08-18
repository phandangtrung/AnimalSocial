import React from "react";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function Postbox() {
  return (
    <div className="post_container">
      <div className="post_header">
        <div className="profile">
          <div className="avatar">
            <img src="https://i.pinimg.com/564x/10/32/6a/10326a8a27941449babe965e60cc388c.jpg" />
          </div>
          <div className="name_time">
            <div className="name">Laura Fisher</div>
            <div className="time">12 hours ago</div>
          </div>
        </div>
        <div className="tools">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <div className="status_box">
        Nobody can fully understand the meaning of love unless he's owned a dog.
        A dog can show you more honest affection with a flick of his tail than a
        man can gather through a lifetime of hand shakes.
      </div>
      <div className="img_box">
        <img src="https://i.pinimg.com/564x/4a/35/03/4a350313e6625a5a0f6c43e502397c19.jpg" />
      </div>
    </div>
  );
}

export default Postbox;
