import React from "react";
import "./Sidebar.css";
import profile from "../../assets/Images/profile.jpg";
import {
  MdBusinessCenter,
  MdHome,
  MdLanguage,
  MdMail,
  MdPhone,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Progress } from "antd";

function Sidebar() {
  return (
    <div className="main-container">
      <img src={profile} alt="profile.jpg" className="profile" />
      <div className="after">
        <h2>Prabal Thulung Rai</h2>
      </div>
      <div className="Information">
        <p className="icon-desc">
          <MdBusinessCenter className="icons" />
          React / React-Native Developer
        </p>
        <p className="icon-desc">
          <MdHome className="icons" />
          Baneshwor, Kathmandu
        </p>
        <p className="icon-desc">
          <MdMail className="icons" />
          Prabalrai17@gmail.com
        </p>
        <p className="icon-desc">
          <MdPhone className="icons" />
          +977 9818158171
        </p>
        <hr />
      </div>
      <div className="skills">
        <h4>
          <GiSkills className="icons" />
          Skills
        </h4>
        <div className="skill-set">
          <p>React / React-native</p>
          <Progress
            strokeColor={{
              "0%": "brown",
              "100%": "black",
            }}
            percent={59.9}
            className="progress"
          />
          <p>Vanilla JavaScript</p>
          <Progress
            strokeColor={{
              "0%": "brown",
              "100%": "black",
            }}
            percent={69.9}
          />
          <p>HTML</p>
          <Progress
            strokeColor={{
              "0%": "brown",
              "100%": "black",
            }}
            percent={79.9}
          />
          <p>CSS</p>
          <Progress
            strokeColor={{
              "0%": "brown",
              "100%": "black",
            }}
            percent={79.9}
          />
        </div>
      </div>
      <div className="languages">
        <h4>
          <MdLanguage className="icons" />
          Languages
        </h4>
        <div className="language-set">
          <p>English</p>
          <Progress
            strokeColor={{
              "0%": "brown",
              "100%": "black",
            }}
            percent={79.9}
          />
          <p>Nepali</p>
          <Progress
            strokeColor={{
              "0%": "brown",
              "100%": "black",
            }}
            percent={99.9}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
