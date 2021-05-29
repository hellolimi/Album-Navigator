import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Pagination({postsToView, totalPosts, paginate}) {

    const [pageNums, SetpageNums] = useState([]);

    useEffect(()=>{
        const setPagination = () => {
            for(let i = 1; i<=Math.ceil(totalPosts/postsToView);i++){
                SetpageNums(prev=> [...prev, i]);
            }
        }

        setPagination();
    }, [totalPosts, postsToView]);

    return (
        <ul>
            {pageNums.map(num => <li key={uuidv4()}><button onClick={()=>{paginate(num)}}>{num}</button></li>)}
        </ul>
    );
}

export default Pagination;