import React from "react";
import user from "../Images/user.jpg";
const ContactCard = (props) => {
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{props.name}</div>
        <div>{props.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px" }}
              onClick={()=>{props.removeHandler(props.email)}}
      ></i>
    </div>
  );
};

export default ContactCard;
