import React from 'react';
import Post from './Post';

function List({data, onDelete}) {

    return <div>
        <ul>
            {data.map(post => <Post key={post.id} postId={post.id} postTitle={post.title} onDelete={onDelete} />)}
        </ul>
    </div>
}

export default List;