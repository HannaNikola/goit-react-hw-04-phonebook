
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';




export const App =()=> {
  

  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);


  

  const addContact = (newContact) => {
    const name = newContact.name;

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} :you have this number in your Phone Book.`);
      return;
    }

    const contactWithId = { ...newContact, id:generateId() };
    setContacts(prevState => [...prevState, contactWithId]);
  }

  

  const generateId = () => {
    return nanoid();
  };

  const handleFilterChange = event => {
    setFilter(event.target.value.toLowerCase());
    
  }


  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
    
  }
 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );


    return (
      <>
        <Conteiner>
          <h1>Phonebook</h1>
          <ContactForm onAdd={addContact} />
          <h2>Contacts</h2>
          <Filter filter={filter} onFilterChange={handleFilterChange} />
          <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
        </Conteiner>
      </>
    )
  
}























