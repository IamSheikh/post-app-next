import styles from "../styles/Form.module.css";
import { useRef } from "react";

function Form({ handler }) {
  const nameInputRef = useRef();
  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      name: nameInputRef.current.value,
      title: titleInputRef.current.value,
      body: bodyInputRef.current.value,
    };
    handler(post);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_group}>
        <label className={styles.form_label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          id="name"
          ref={nameInputRef}
        />
      </div>
      <div className={styles.form_group}>
        <label className={styles.form_label} htmlFor="title">
          Title
        </label>
        <input
          className={styles.form_input}
          type="text"
          name="title"
          id="title"
          ref={titleInputRef}
        />
      </div>
      <label className={styles.form_label} htmlFor="body">
        Body
      </label>
      <div className={styles.form_group}>
        <textarea
          className={styles.form_input}
          name="body"
          id="body"
          ref={bodyInputRef}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Create Post
      </button>
    </form>
  );
}

export default Form;
