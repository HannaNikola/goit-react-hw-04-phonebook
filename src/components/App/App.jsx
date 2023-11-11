
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';




export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  }

  componentDidMount() {
    
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
    this.setState({contacts: JSON.parse(savedContacts)})
  }


  }
  componentDidUpdate( prevProps, prevState) {
    console.log('prevstate', prevState);
    console.log(this.state);

   if (prevState.contacts !== this.state.contacts) { 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {

    const { contacts } = this.state;
    const name = newContact.name;

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} :you have this number in your Phone Book.`);
      return;
    }

    const contactWithId = { ...newContact, id: this.generateId() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactWithId]
    }));
  }

  generateId() {
    return nanoid();
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  }


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }


  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );



    return (
      <>
        <Conteiner>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.addContact} />
          <h2>Contacts</h2>
          <Filter filter={filter} onFilterChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </Conteiner>
      </>
    )
  }
}






