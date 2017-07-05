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

    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    UpdateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render () {

        const { contacts, onDeleteContact } = this.props;
        const { query } = this.state;

        //will be the contact which match a specific pattern
        let showingContacts;

        if (query){
            //escapeRegExp escapes any special xters in query
            const match = new RegExp(escapeRegExp(query), 'i');
            //filters for where the contact name matches our specific regular expression
            showingContacts = contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = contacts
        }

        showingContacts.sort(sortBy('name'));

        return (
            <div className='list-contacts' >
                {/*{JSON.stringify(query)}*/}
                <div className="list-contacts-top">
                    <input className="search-contacts" 
                           type="text" 
                           placeholder="Search Contacts"
                           value={query}
                           onChange={(event) => this.UpdateQuery(event.target.value)}
                    />
                    <a 
                      href="#create"
                      onClick={this.props.onNavigate}
                      className="add-contact"
                    >Add Contact</a>
                </div>

                { showingContacts.length !== contacts.length && (
                    <div className="showing-contacts" >
                        <span>Now showing {showingContacts.length} of {contacts.length} </span>
                        <button onClick={this.clearQuery} >Show All</button>
                    </div>
                )}

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
                                onClick={() => onDeleteContact(contact)}
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