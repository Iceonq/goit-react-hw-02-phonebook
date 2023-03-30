import React, { Component } from 'react';

import '../styles.css';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleContactCreator = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <Section
          title={'Phonebook'}
          object={
            <Form
              contacts={this.state.contacts}
              onContactCreate={this.handleContactCreator}
            />
          }
        />
        <Section
          title="Contacts"
          object={
            <Contacts
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          }
        />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  filter: PropTypes.string,
};
