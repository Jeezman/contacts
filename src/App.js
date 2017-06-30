import React, { Component } from 'react';

import ListContacts from './ListContacts';
import './acc.css';



class App extends Component {

  state = {

    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]

  }

  removeContact = (contact) => {
    //using this pattern cos we are updating the new state
    //based on the current state
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
        />
      </div>
    )
  }
}

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   }
// }


class Accordion extends Component {
  
  render() {
    return (
      <div className="acc">
        <AccordionHeader 
          title='Section 1'
        />
        <AccordionBody>
          <p>Lorem ipsum meta sit amet</p>
          <p>Lorem ipsum meta sit amet</p>
        </AccordionBody>
      </div>
    )
  }
}

class AccordionHeader extends Component {

  state = {
    active: false
  }

  handlePanelShow = () => {
     console.log('hello world');
     const currentState = this.state.active;
     this.setState({
       active: !currentState
     })
     console.log(this.state.active)

  }
     

  render () {
    return (
      <button 
        className={`accordion  this.state.active ? 'active': null`}
        onClick={this.handlePanelShow}>
        {this.props.title}
      </button>
    )
  }
}

class AccordionBody extends Component {
  render () {
    return (
      <div className="panel" >
        {this.props.children}
      </div>
    )
  }
}



export default App;
