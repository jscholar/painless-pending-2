import React from 'react';

/**
 * An auxilliary class to bypass React's one parent element
 * restriction on components. Wrap multiple elements with the Aux class.
 */ 
const Aux = (props) => (
    props.children
);

export default Aux;
