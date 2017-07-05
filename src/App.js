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

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts 
            contacts={this.state.contacts} 
            onDeleteContact={this.removeContact}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    )
  }
}


// class Accordion extends Component {

//   state = {
//     active: false,
//     title: '',
//     sections: [
//       { name: 'Applicants', 
//         section:[
//           {name: 'All'},
//           {name: 'Pending'}
//       ]},
//       {name: 'Settings', section: [
//         {name: 'Settings'}
//       ]},
//       {name: 'API', section: [
//         {name: 'API'}
//       ]},
//       {name: 'Help', section: [
//         {name: 'Help'}
//       ]},
//       {name: 'Shared Results', section: [
//         {name: 'Shared Results'}
//       ]}
//   ]
//   }

//   handlePanelShow = () => {
//      console.log('hello world');
//      const currentState = this.state.active;
//      this.setState({
//        active: !currentState
//      })
//      console.log(this.state.active)
//   }
  
//   render() {
//     return (
//       <div className="accordion__wrap">
        
//         <AccordionHeader 
//           title={this.props.title}
//           toggle={this.state.active}
//           panelShow={this.handlePanelShow}
//         />

//         <AccordionBody togglePanel={this.state.active} >
//           <p style={{background: 'skyblue', margin: 0}}>Tosin</p>
//           <p style={{background: 'coralwhite', margin: 0}}>Felix</p>
//           <p style={{background: 'skyblue', margin: 0}}>Lorem</p>
//           <p style={{background: 'coralwhite', margin: 0}}>Lorem ipsum </p>
//           <p style={{background: 'skyblue', margin: 0}}>Faith</p>
//           <p style={{background: 'coralwhite', margin: 0}}>Dropdown</p>
//           <p style={{background: 'green', margin: 0}}>Famous</p>
//           <p style={{background: 'lime', margin: 0}}>Gbenga</p>
//           <p style={{background: 'green', margin: 0}}>Suru</p>
//           <p style={{background: 'lime', margin: 0}}>Mosunmola</p>
//         </AccordionBody>

//         {
//           this.props.section.map(menu => {
            
//           })
//         }
//       </div>
//     )
//   }
// }

// class AccordionHeader extends Component {
     
//   render () {
//     return (
//       <button 
//         className={!this.props.toggle ? 'accordion' : 'accordion-active' }
//         onClick={this.props.panelShow}>
//         {this.props.title}
//       </button>
//     )
//   }
// }

// class AccordionBody extends Component {
//   render () {
//     return (
//       <div ref='divScroll' className={!this.props.togglePanel ? 'panel' : 'panel-toggle'} >
//         {this.props.children}
//       </div>
//     )
//   }
// }

// class Boss extends Component {

//   state = {
//     active: false,
//     title: '',
//     sections: [
//       { name: 'Applicants', 
//         section:[
//           {name: 'All'},
//           {name: 'Pending'}
//       ]},
//       {name: 'Settings', section: [
//         {name: 'Settings'}
//       ]},
//       {name: 'API', section: [
//         {name: 'API'}
//       ]},
//       {name: 'Help', section: [
//         {name: 'Help'}
//       ]},
//       {name: 'Shared Results', section: [
//         {name: 'Shared Results'}
//       ]}
//   ]
//   }
//   render () {
//     return (
//       <div>
//         {this.state.sections.map((value) =>
//           <Accordion key={value.name} title={value.name} section={this.state.sections} />
//         )}
//       </div>
//     )
//   }
// }


export default App;

// var sections = [
//     { name: 'Applicants', 
//       section:[
//         {name: 'All'},
//         {name: 'Pending'}
//     ]},
//     {name: 'Settings', section: [
//       {name: 'Settings'}
//     ]},
//     {name: 'API', section: [
//       {name: 'API'}
//     ]},
//     {name: 'Help', section: [
//       {name: 'Help'}
//     ]},
//     {name: 'Shared Results', section: [
//       {name: 'Shared Results'}
//     ]}
// ];

// var sections_applicants = [
//   {name: 'All'},
//   {name: 'Pending'},
//   {name: 'Awaiting Action'},
//   {name: 'In Progress'},
//   {name: 'Complete'},
//   {name: 'Cancelled'},
//   {name: 'Withdrawn'}
// ]