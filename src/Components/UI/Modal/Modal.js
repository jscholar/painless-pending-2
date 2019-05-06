import React from 'react';

import Aux from '../../../hoc/Auxilliary/Auxilliary';

import classes from './Modal.module.css'

const Modal = (props) => (
    <Aux>
        <div onClick={props.closeModal} className={classes.Backdrop}></div>
        <div className={classes.Modal}>
            {props.children}
        </div>
    </Aux>

);

export default Modal;
