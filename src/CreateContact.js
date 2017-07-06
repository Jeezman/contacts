import React, { Component } from 'react';
import ImageInput from './ImageInput';
import { Link } from 'react-router-dom';

class CreateContact extends Component {
    render() {
        return (
            <div>
                <Link className="close-create-contact" to="/">Close</Link>
                <form className="create-contact-form" >
                    <ImageInput
                      className="create-contact-avatar-input"
                      name="avatarUrl"
                      maxHeight={64}
                    ></ImageInput>
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="email" placeholder="Email" />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div> 
        )
    }
}

export default CreateContact