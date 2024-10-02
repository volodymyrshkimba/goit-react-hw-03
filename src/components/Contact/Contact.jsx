import css from "./Contact.module.css";

function Contact({ contact, deleteContact }) {
  function handleClick() {
    deleteContact(contact.id);
  }

  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </>
  );
}

export default Contact;
