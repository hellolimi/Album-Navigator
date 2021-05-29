import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

function List() {
    const [data, setData] = useState([]);
    const [view, setView] = useState(5);

    const viewmore = () => {
        setView(prev => prev += 5);
    }
   
    const onDelete = postId => {
        setData(prev => prev.filter(el => el.id !== postId));
        setView(prev => prev += 1);
    }

    useEffect(()=>{
        const fetchData = async () => {
            let dataUrl = "https://jsonplaceholder.typicode.com/albums";
            try{
                const response = await axios.get(dataUrl);
                setData(response.data);
            }catch (e){
                throw Error(e);
            }
        }
        fetchData();
    }, []);

    return <div>
        <ul>
            {data.map(post => post.id<=view&&<Post key={post.id} postId={post.id} postTitle={post.title} onDelete={onDelete} />)}
        </ul>
        <button type="button" onClick={viewmore}>VIEW MORE</button>
    </div>
}

export default List;