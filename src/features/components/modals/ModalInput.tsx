import classes from './ModalInput.module.css';
import React from "react";

type ModalInputPropsType = {
    active: boolean
    setActive: (isTrueOrFalse: boolean) => void
}

const ModalInput: React.FC<ModalInputPropsType> = ({ active, setActive, children }) => {

    return (
        <div className={active ? `${classes.modal} ${classes.active}`: classes.modal} onClick={() => setActive(false)}>
            <div className={active ? `${classes.modalContent} ${classes.active}`: classes.modalContent} onClick={(e) => e.stopPropagation() }>
                {children}
            </div>
        </div>
    )
}

export default ModalInput;