import React, { useState } from "react";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import Postbox from "../../components/Postbox";

import Myavatar from "../../mocks/images/myavar.jpg";
import { Storydata } from "../../mocks/data/request_data";

function HomePage() {
  const [ismodal, setismodal] = useState(false);
  return (
    <div className={`home__container${!ismodal ? "" : "_blur"}`}>
      <div className="home_body">
        <div className="stories_container">
          <div className="add_story">
            <img src="https://i.pinimg.com/564x/43/4e/f8/434ef855bf4775182ab47914b91bceca.jpg" />
            <div className="add_box">
              <div className="add_button_border">
                <div className="add_button">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
              <div className="add_title">Add Story</div>
            </div>
          </div>
          {Storydata.map((story) => (
            <div className="people_story">
              <img src={story.img} />
              <div className="story_avatar_border">
                <img src={story.pimg} />
              </div>
              <div className="story_title">{story.name}</div>
            </div>
          ))}
        </div>
        <div className="post_bar">
          <div className="post_profile">
            <img className="post_avatar" src={Myavatar} />
            <div className="post_title">What's new, Trung Phan?</div>
          </div>
          <div onClick={() => setismodal(true)} className="post_button">
            <FontAwesomeIcon icon={faLink} />
            <div>Post It!</div>
          </div>
        </div>
        <div className={`post_modal ${ismodal ? "show" : ""} `}>
          <div className="modal_header">
            <div className="modal_title">Create Post</div>
            <div className="modal_cancel" onClick={() => setismodal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="modal_body"></div>
          <div className="modal_button">Post Now</div>
        </div>
        <Postbox />
      </div>
    </div>
  );
}

export default HomePage;
