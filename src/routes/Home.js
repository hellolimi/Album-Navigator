import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../components/List';
import Pagination from '../components/Pagination';

function Home(props) {
    const [data, setData] = useState([]);
    const [currentPg, setCurrentPg] = useState(1);
    const [postsToView, setpostsToView] = useState(5);

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

    const getPosts = viewData => {
        const lastIndex = currentPg * postsToView;
        const firstIndex = lastIndex - postsToView;
        
        let currentPost = viewData.slice(firstIndex, lastIndex);
        return currentPost;
    }

    const onDelete = postId => {
        setData(prev => prev.filter(el => el.id !== postId));
    } 


    return <div>
        <List data={getPosts(data)} onDelete={onDelete} />
        <Pagination postsToView={postsToView} totalPosts={data.length} paginate={setCurrentPg} />
    </div>
}

export default Home;