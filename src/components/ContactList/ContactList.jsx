import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
