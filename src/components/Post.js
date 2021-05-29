import React, { useState } from 'react';

function Post({postId, postTitle, onDelete}) {
    const [update, setUpdate] = useState(false);
    const [newTitle, setNewTitle] = useState(postTitle);

    const onToggle = () => {
        setUpdate(prev => !prev);
    }
    
    const onChange = e => {
        const {value} = e.target;
        setNewTitle(value);
    }
    
    return (
        <li>
            <button onClick={onToggle}>Update</button>
            <button onClick={()=>{onDelete(postId)}} >Delete</button>
            {update?
                <form>
                    <input type="text" value={newTitle} onChange={onChange}/>
                    <input type="file" />
                </form>:
                <div>
                    <h4>{postTitle}</h4>
                    <img src="http://placehold.it/580x400/cccccc/ffffff?text=demo" alt="demo"/>
                </div>
            }
        </li>
    );
}

export default Post;