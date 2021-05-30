import React, { useCallback, useState } from 'react';
import styled from "styled-components";

const PostBlock = styled.li`
    position: relative; 
    padding:2.5rem 0; border-bottom:1px solid #FF9E9E;
    .editBox { position:absolute; top:2.5rem; right:0; width:4rem;
        > button { float:right; margin-bottom:0.5rem; border:none; background-color:transparent; color:#FF9E9E; font-size:0.875rem; }
        > div{ float:right; display:flex; flex-direction:column; background-color:#FF9E9E;
            button{ padding:1rem; border:none; background-color:transparent; color:#fff; font-weight:400; }
        }
    }
    h4{ width:100%; margin-bottom:1.25rem; text-align:center; font-size:2rem; font-weight:300; }
    img{ margin:0 auto; }

    form{ text-align:center;  
        fieldset{ margin-bottom:1rem; > * { height:3rem; }
            input{ width:40%; margin-right:1rem; padding:0 0.5rem ; border:1px solid #ededed; }
            button{ width:15%; background-color:#FF9E9E; border:none; border-radius:0.5rem; color:#fff; }
        }
    }
`;

function Post({postId, postTitle, onDelete, onUpdate}) {
    const [update, setUpdate] = useState(false);
    const [newTitle, setNewTitle] = useState(postTitle);
    const [edit, setEdit] = useState(false);

    const onToggle = e => {
        const {name} = e.target;
        console.log(name);
        if(name === "edit"){
            setEdit(prev => !prev);
        }else{
            setUpdate(prev => !prev);
        }
    }
    
    const onChange = useCallback(e => {
        const {value} = e.target;
        setNewTitle(value);
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        if(newTitle !== ''){
            onUpdate(newTitle, postId);
            setUpdate(false);
            setEdit(false);
        }
    }
    
    return (
        <PostBlock>
            <div className="editBox">
                <button type="button" name="edit" onClick={onToggle}>● ● ●</button>
                {edit&&
                    <div>
                        <button type="button" name="update" onClick={onToggle}>Update</button>
                        <button type="button" onClick={()=>{onDelete(postId)}} >Delete</button>
                    </div>}
            </div>
            {update?
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <input type="text" value={newTitle} onChange={onChange}/>
                        <button type="submit">Update!</button>
                    </fieldset>
                    <img src="https://via.placeholder.com/580x400.png?text=Demo" alt="demo" />
                </form>:
                <div>
                    <h4>{postTitle}</h4>
                    <img src="https://via.placeholder.com/580x400.png?text=Demo" alt="demo" />
                </div>
            }
            
        </PostBlock>
    );
}

export default React.memo(Post);