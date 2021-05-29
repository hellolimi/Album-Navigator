import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const CreateForm = styled.form`
    display:flex; justify-content:center; align-items: center; border-bottom:1px solid #FF9E9E;
    margin-bottom:1rem; padding:2rem 0;
    > * { height:3rem; }
    input{ width:50%; margin-right:1rem; padding:0 0.5rem ; border:1px solid #ededed; }
    button{ width:15%; background-color:#FF9E9E; border:none; border-radius:0.5rem; }
`;

function Create({onCreate}) {
    const [title, setTitle] = useState('');
    const titleInput = useRef();

    const onChange = useCallback(e => {
        const {value} = e.target;
        setTitle(value);
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        if(title){
            onCreate(title);
            setTitle('');
        }
    }

    return <CreateForm onSubmit={onSubmit}>
        <input type="text" value={title} required placeholder="Title..." ref={titleInput} onChange={onChange}/>
        <button type="submit">Share</button>
    </CreateForm>
}

export default Create;