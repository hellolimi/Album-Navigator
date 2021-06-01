import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from '../components/List';
import Pagination from '../components/Pagination';
import Create from '../components/Create';
import Header from '../components/Header';

const MainHome = styled.div`
    padding-top:5rem;
`;

function Home(props) {
    const [data, setData] = useState([]);
    const [currentPg, setCurrentPg] = useState(1);
    const newUser = 11;
    const postsToView = 5;
    const [refreshBtn, setRefreshBtn] = useState(false);

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

    const onUpdate = (postData, postId) => {
        let index = data.findIndex(obj => obj.id === postId);
        setData(prev => [...prev, data[index].title = postData]);
    }

    const onCreate = text => {
        const {id} = data[data.length -1]
        const newData = {
            userid: newUser,
            id: id + 1,
            title: text
        }
        setData(prev => [newData, ...prev]);
        setCurrentPg(1);
        setRefreshBtn(true);
    }

    const onDelete = postId => {
        let yesDelete = window.confirm(`Do you really want to delete this post?\nCannot recover it once it's deleted!`);
        yesDelete&&setData(prev => prev.filter(el => el.id !== postId));
        
    }

    return <MainHome>   
        <Header />
        <Create onCreate={onCreate} />
        <List data={getPosts(data)} onDelete={onDelete} onCreate={onCreate} onUpdate={onUpdate} />
        <Pagination postsToView={postsToView} totalPosts={data.length} page={[currentPg, setCurrentPg]} buttonState={[refreshBtn, setRefreshBtn]}/>
    </MainHome>
}

export default React.memo(Home);