import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    UpdateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render () {
        //will be the contact which match a specific pattern
        let showingContacts;

        if (this.state.query){
            //escapeRegExp escapes any special xters in query
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            //filters for where the contact name matches our specific regular expression
            showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = this.props.contacts
        }

        showingContacts.sort(sortBy('name'));

        return (
            <div className='list-contacts' >
                {JSON.stringify(this.state.query)}
                <div className="list-contacts-top">
                    <input className="search-contacts" 
                           type="text" 
                           placeholder="Search Contacts"
                           value={this.state.query}
                           onChange={(event) => this.UpdateQuery(event.target.value)}
                    />
                </div>

                <ol className="contact-list">
                    {showingContacts.map((contact) =>
                        <li key={contact.id} className="contact-list-item" >
                            <div className="contact-avatar" style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }} />
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button 
                                onClick={() => this.props.onDeleteContact(contact)}
                                className="contact-remove">
                                Remove
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        )
    }

}

export default ListContacts;