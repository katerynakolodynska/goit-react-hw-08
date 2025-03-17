import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
// import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
