import React from 'react';
import ModalContainer from "./ModalContainer";

const ModalsPage: React.FC = () => {

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{height: '40vh'}}/>

            <ModalContainer/>
            {/*<ModalInputContainer/>*/}

            <div style={{height: '300vh'}}/>
        </div>
    );
};

export default ModalsPage;

