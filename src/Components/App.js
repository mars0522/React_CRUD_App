import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";


function App() {
  const [contacts, setcontacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log("first useEffect chala");
    if (details) {
      setcontacts(details);
    }
  }, []);

  const removeHandler = (email) => {
    
    const new_list = contacts.filter(contact => contact.email !== email);
    setcontacts(new_list);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(new_list));
  }
  const addDetails = (contact) => {
    contact.id = uuidv4();
    const new_list = [contact, ...contacts];
    setcontacts([...new_list]);

    // console.log(contact);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(new_list));
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact addDetails={addDetails} />
      <ContactList contacts={contacts} removeHandler={ removeHandler}/>
    </div>
  );
}

export default App;
