import React, { useRef, useState } from "react";
import "./Front.css";
import face from "../images/face.svg";
import arrow from "../images/arrow.svg";
import mars from "../images/mars-symbol.svg";
import venus from "../images/venus-symbol.svg";
import cardWhite from "../images/card--white.svg";
import card from "../images/card.svg";
import calendar from "../images/calendar.svg";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Modal from "react-modal-slider";
import "react-modal-slider/lib/main.css";

export default function Front() {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const text =
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <a href="#" style={{margin: "auto"}}>View all</a> days eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.Donec non enim in turpis pulvinar facilisis.Ut felis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.Aliquam erat';
    const testRef = useRef(null);
    const scrollToElement = () => testRef.current.scrollIntoView();
  return (
    <div className="Main">
      <div className="LeftPanel">
        <img src={face} className="Face" alt="logo" />
        <header className="Front-header">Front-end challenge!</header>
        <text className="Front-text">
          This is a design that you will need to code up to impress us
        </text>
        <button className="greyBtn" onClick={() =>{ setIsPaneOpen(!isPaneOpen);
          scrollToElement()}}>
          <img
            src={arrow}
            className={isPaneOpen ? "Arrow back" : "Arrow"}
            alt="logo"
          />
        </button>
      </div>
      <div 
      ref={testRef} 
      className={isPaneOpen ? "RightPanel hide" : "RightPanel"}>
        <form>
          <div className="formrow">
            <label className="formLabel">Name</label>
            <input className="forminput" type="text" />
          </div>

          <div className="formrow">
            <label className="formLabel">Gender</label>
            <div className="formdiv">
              <div className="icondiv">
                <button className="genderbtn">
                  <img src={mars} className="icon" alt="logo" />
                </button>
                <text className="icontext">Male</text>
              </div>
              <div className="icondiv">
                <button className="genderbtn">
                  <img src={venus} className="icon" alt="logo" />
                </button>
                <text className="icontext">Female</text>{" "}
              </div>{" "}
            </div>
          </div>

          <div className="formrow">
            <label className="formLabel">Date of Birth</label>
            <div className="forminput2">
              <input
                className="dateinput"
                placeholder="01/02/1983"
                type="email"
              />
              <img src={calendar} className="icon" alt="logo" />
            </div>
          </div>

          <div className="formrow">
            <label className="formLabel">Email</label>
            <input
              className="forminput"
              placeholder="kendall@email.com"
              type="email"
            />
          </div>

          <div className="formrow">
            <label className="formLabel">Mobile</label>
            <input
              className="forminput"
              placeholder="+91 98765 43210"
              type="text"
            />
          </div>

          <div className="formrow">
            <label className="formLabel">Customer ID</label>
            <input
              className="forminput"
              placeholder="576802-ERD0348 45"
              type="text"
            />
          </div>

          <div className="formrow">
            <label className="formLabel">Membership</label>
            <div className="formdiv">
              <div className="icondiv">
                <button className="wcard">
                  <img src={cardWhite} className="icon" alt="logo" />
                </button>
                <text className="icontext">Classic</text>
              </div>
              <div className="icondiv">
                <button className="genderbtn">
                  <img src={card} className="icon" alt="logo" />
                </button>
                <text className="icontext">Silver</text>
              </div>
              <div className="icondiv">
                <button className="genderbtn">
                  <img src={card} className="icon" alt="logo" />
                </button>
                <text className="icontext">Gold</text>
              </div>
            </div>
          </div>
          <div className="btndiv">
            <button className="cancelbtn">Cancel</button>
            <button className="savebtn">Save</button>
          </div>
        </form>
      </div>
      <div
        key={Math.random()}
        className={isPaneOpen ? "RightPanel2 slideIn" : "RightPanel2 hide "}
      >
        <div className="Orange-body">
          <header className="Orange-header">My world today</header>
          <div className="Orange-text">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </div>
  );
}
