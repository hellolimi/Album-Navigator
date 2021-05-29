import React, { useCallback, useRef, useState } from 'react';

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

    return <form onSubmit={onSubmit}>
        <input type="text" value={title} required placeholder="Title..." ref={titleInput} onChange={onChange}/>
        <button type="submit">Share</button>
    </form>
}

export default Create;