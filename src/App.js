import React, { Component } from 'react';

import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import './acc.css';



class App extends Component {

  state = {
    screen: 'list', //list, create
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({
        contacts: contacts
      })
    })
  }

  removeContact = (contact) => {
    //using this pattern cos we are updating the new state
    //based on the current state
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    //removes contact from database
    ContactsAPI.remove(contact);
  }

  navigateToContact = () => {
    this.setState({
      screen: 'create'
    })
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts 
            contacts={this.state.contacts} 
            onDeleteContact={this.removeContact}
            onNavigate={this.navigateToContact}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    )
  }
}

export default App;
