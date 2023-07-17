import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactsList } from "components/ContactsList/ContactsList";
import { ContactEditor } from "components/ContactEditor/ContactEditor";
import { selectLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your Contacts</title>

      <ContactEditor />
      <Filter />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactsList />
    </>
  );
}
