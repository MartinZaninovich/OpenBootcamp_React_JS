import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import ComponentB from "./component_b";

function ComponentA({ contact }) {
    return (
        <div>
            <h2>First Name: {contact.firstName}</h2>
            <h3>Last Name: {contact.lastName}</h3>
            <h3>E-Mail: {contact.eMail}</h3>
            <ComponentB state={true}/>
        </div>
    );
}

ComponentA.propTypes = {
    contacto: PropTypes.instanceOf(Contact),
};

export default ComponentA;
