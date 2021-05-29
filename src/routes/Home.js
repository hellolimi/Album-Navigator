import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from '../components/List';
import Pagination from '../components/Pagination';
import Create from '../components/Create';

const MainHome = styled.div`
    padding-top:4.5rem;
`;

function Home(props) {
    const [data, setData] = useState([]);
    const [currentPg, setCurrentPg] = useState(1);
    const postsToView = 5;

    useEffect(()=>{
        const fetchData = async () => {
            let dataUrl = "https://jsonplaceholder.typicode.com/albums";
            try{
                const response = await axios.get(dataUrl);
                let rawData = response.data;
                setData(rawData.reverse());
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

    const onCreate = text => {
        const {userid, id} = data[data.length -1]
        const newData = {
            userid: userid + 1,
            id: id + 1,
            title: text
        }
        setData(prev => [newData, ...prev]);
    }

    const onDelete = postId => {
        setData(prev => prev.filter(el => el.id !== postId));
    }

    return <MainHome>   
        <Create onCreate={onCreate} />
        <List data={getPosts(data)} onDelete={onDelete} onCreate={onCreate} />
        <Pagination postsToView={postsToView} totalPosts={data.length} paginate={setCurrentPg} />
    </MainHome>
}

export default Home;