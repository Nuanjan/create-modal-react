import React, { useState } from 'react';
import Modal from './model/Modal';
import styled from 'styled-components';

const ShowButton = styled.button`
color: #843b62;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #843b62;
border-radius: 3px;
`

const App = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <ShowButton onClick={() => setShow(true)}>Show Modal</ShowButton>
            {show && <Modal handleClose={() => setShow(false)} show={show}/> }
        </div>
    );
};

export default App;