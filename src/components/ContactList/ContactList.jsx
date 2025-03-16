import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map((cont) => (
        <li key={cont.id} className={s.item}>
          <Contact data={cont} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
