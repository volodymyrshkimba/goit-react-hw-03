import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import { useState } from "react";

const contactsArr = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(contactsArr);
  const [searchKey, setSearchKey] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchKey.toLowerCase());
  });

  function getContact(newContact) {
    setContacts((currentContacts) => {
      return [...currentContacts, newContact];
    });
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm getContact={getContact} />
      <SearchBox searchKey={searchKey} setSearchKey={setSearchKey} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
