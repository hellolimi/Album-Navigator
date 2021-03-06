import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const PaginationBlock = styled.div`
    * { color:#FF9E9E; font-weight:bold; font-size:1.5rem; }
    display:flex; justify-content:center; padding:2rem;
    ul{ position:relative; top:3px; display:flex; 
        li{ width:2.5rem; height:2.5rem; 
            button { width:100%; height:100%; border:none; background-color:transparent; 
                &.active{ background-color:#FF9E9E; border-radius:50%; color:#fff; } 
            }
        }
    }
    > button { width:2.5rem; height:2.5rem; border:none; background-color:transparent;  }  
`;


function Pagination({postsToView, totalPosts, page, buttonState}) {
    const [pageNums, SetpageNums] = useState([]);
    const [currentBtn, setCurrentBtn] = useState({
        start: 1,
        end: 5
    });
    const [refreshBtn, setRefreshBtn] = buttonState;
    const [currentPg, setCurrentPg] = page;

    const prevNextBtn = e => {
        const {name} = e.target;
        const {start, end} = currentBtn;
        const lastPage = Math.ceil(totalPosts/postsToView);
        if(name === "next"){
            if(end < lastPage){
                setCurrentBtn({start:currentBtn.start+=1, end:currentBtn.end+=1});
            }
        }else{
            if(start > 1){
                setCurrentBtn({start:currentBtn.start-=1, end:currentBtn.end-=1});
            }
        }
        setRefreshBtn(false);
    }

    useEffect(()=>{
        const setPagination = () => {
            const {start, end} = currentBtn;
            let numArray = [];
            for(let i = start; i<=end;i++){
                numArray.push(i);
            }
            SetpageNums(numArray);
        }
        setPagination();

        const refreshButtons = () => {
            setCurrentBtn({
                start: 1,
                end: 5
            });
        }
        refreshBtn&&refreshButtons();

        return () => {
            setRefreshBtn(false);
        }
    }, [totalPosts, postsToView, currentBtn, refreshBtn, setRefreshBtn]);

    return (
        <PaginationBlock currentPg={currentPg}>
            <button type="button" name="prev" onClick={prevNextBtn}>???</button>
            <ul>
                {pageNums.map(num => <li key={uuidv4()}>
                    <button className={currentPg===num?'active':''} onClick={()=>{setCurrentPg(num);}}>
                        {num}
                    </button>
                    </li>)}
            </ul>
            <button type="button" name="next" onClick={prevNextBtn}>???</button>
        </PaginationBlock>
    );
}

export default React.memo(Pagination);