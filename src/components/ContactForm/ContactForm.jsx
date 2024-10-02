import css from "./ContactForm.module.css";

import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm({ getContact }) {
  const userNameId = useId();
  const userTelId = useId();

  function handleSubmit(values, actions) {
    const newContactWithId = { ...values, id: nanoid() };
    getContact(newContactWithId);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={userNameId}>Name</label>
        <Field type="text" name="name" id={userNameId}></Field>
        <ErrorMessage name="name" component="span" />
        <label htmlFor={userTelId}>Number</label>
        <Field type="tel" name="number" id={userTelId}></Field>
        <ErrorMessage name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
