import css from "./Contact.module.css";

function Contact({ contact }) {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button">Delete</button>
    </>
  );
}

export default Contact;
