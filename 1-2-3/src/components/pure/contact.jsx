import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                First Name: { contact.firstName }
            </h2>
            <h3>
                Last Name: { contact.lastName }
            </h3>
            <h4>
                E-Mail: { contact.eMail }
            </h4>
            <h5>
                State: { contact.isConnected ? "Online Contact" : "Contact Not Available" }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
