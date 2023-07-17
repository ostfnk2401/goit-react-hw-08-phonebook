import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactsList.module.css";
import { selectAllContacts, selectFilter } from "redux/contacts/selectors";

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const handleFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = handleFilteredContacts();
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, number, name }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
