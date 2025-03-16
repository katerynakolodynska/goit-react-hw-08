import s from "./Contact.module.css";
import { IoMdCall } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className={s.list}>
        <li className={s.info}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={s.info}>
          <IoMdCall />
          <p>{number}</p>
        </li>
      </ul>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
