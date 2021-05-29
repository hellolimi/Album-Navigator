import React, { useState } from 'react';

function Post({postId, postTitle, onDelete, onUpdate}) {
    const [update, setUpdate] = useState(false);
    const [newTitle, setNewTitle] = useState(postTitle);

    const onToggle = () => {
        setUpdate(prev => !prev);
    }
    
    const onChange = e => {
        const {value} = e.target;
        setNewTitle(value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if(newTitle !== ''){
            onUpdate(newTitle, postId);
            setUpdate(false);
        }
    }
    
    return (
        <li>
            <button onClick={onToggle}>Update</button>
            <button onClick={()=>{onDelete(postId)}} >Delete</button>
            {update?
                <form onSubmit={onSubmit}>
                    <input type="text" value={newTitle} onChange={onChange}/>
                    <button type="submit">Submit</button>
                </form>:
                <div>
                    <h4>{postTitle}</h4>
                    <img src="http://placehold.it/580x400/cccccc/ffffff?text=demo-image" alt="demo" />
                </div>
            }
            
        </li>
    );
}

export default Post;