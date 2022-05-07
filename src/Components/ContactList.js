import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => (
      <ContactCard key={contact.id} name={contact.name} email={contact.email} removeHandler={ props.removeHandler}/>
  )); // render funtion

  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;
