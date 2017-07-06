import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';




class App extends Component {

  state = {
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

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
            <ListContacts 
              contacts={this.state.contacts} 
              onDeleteContact={this.removeContact}
            />
          )}
         /> 
        <Route path="/create" component={CreateContact}/>
      </div>
    )
  }
}

export default App;
