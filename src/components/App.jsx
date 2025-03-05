import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Error from './Error/Error';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, getError, getIsLoading } from '../redux/contactsSlice';
import { RiContactsBook2Line } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";

import './App.module.css';

export const App = () => {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className='container'>
      <h1 className='phonebook'>Phonebook <RiContactsBook2Line/></h1>
      <ContactForm />
      <h2>Contacts <IoIosContacts /></h2>
      <Filter  />
      {isLoading ? <Loader /> : error ? <Error /> : <ContactList />}
    </div>
  );
};

export default App;
