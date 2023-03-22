import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../styles.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = (event, name) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNumberChange = event => {
    this.setState({
      number: event.target.value,
    });
  };

  contactsFiltering = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleContactCreator = () => {
    const { name, contacts, number } = this.state;
    const newContact = { name, number };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState({
        contacts: [...contacts, newContact],
      });
    }
  };

  handleFiltering = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  nameFiltering = () => {
    const { filter } = this.state;
    this.state.name.filter(filter);
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <label class="label">
          <h3 class="label-title">Name</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
          />
          <h3 class="label-title">Number</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleNumberChange}
          />
          <button onClick={this.handleContactCreator}>Add contact</button>
        </label>
        <h1>Contacts</h1>
        <p>Find contacts name</p>
        <input value={this.state.filter} onChange={this.handleFiltering} />
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li name="contact" id={nanoid()}>
                  <p>
                    {contact.name}: {contact.number}
                    <button onClick={() => this.deleteContact(contact.id)}>
                      Delete
                    </button>
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
