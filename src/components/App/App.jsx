import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import css from "./App.module.css";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  // const [contacts, setContacts] = useState(() => {
  //   const savedNumbers = window.localStorage.getItem("saved-contact");
  //   if (savedNumbers !== null) {
  //     return JSON.parse(savedNumbers);
  //   }
  //   return contact;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  // }, [contacts]);

  // const [filter, setFilter] = useState("");

  // const updateContactList = (update) => {
  //   setContacts((prevContacts) => [...prevContacts, update]);
  // };

  // const filteredContacts = contacts.filter(
  //   (contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.includes(filter)
  // );

  // const deleteContacts = (id) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== id)
  //   );
  // };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
