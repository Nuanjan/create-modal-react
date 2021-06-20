import React from 'react';
import styled from 'styled-components';
const ModalWrap = styled.section`
width: 50%;
display: flex;
flex-direction: column;
justifly-items: center;
border: solid 1px #ffb997;
margin: 0 auto;
`;
const ModalHeader = styled.section`
text-align: center;
background: #f67e7d;
padding: 1rem;
color: white;

`;
const ModalBody = styled.section`
padding: 4rem;
`;
const ModalButton = styled.button`
width: 50%;
color: #843b62;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #843b62;
align-self: center;
border-radius: 3px;
`;
const Modal = (props) => {
    return (
        <ModalWrap>
            <ModalHeader>Hello Modal!</ModalHeader>
            <ModalBody>Modal body</ModalBody>
            <ModalButton onClick={props.handleClose}>close</ModalButton>
        </ModalWrap>
    );
};

export default Modal;