import React from 'react';
import Post from './Post';
import { v4 as uuidv4 } from 'uuid';

function List({data, onDelete, onUpdate}) {
    
    return <div>
        <ul>
            {data.map(post => <Post key={uuidv4()} postId={post.id} postTitle={post.title} onDelete={onDelete} onUpdate={onUpdate} />)}
        </ul>
    </div>
}

export default React.memo(List);