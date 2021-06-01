import React from 'react';
import styled from 'styled-components';

const Gnb = styled.header`
    position:fixed; top:0; left:0; z-index:1000;
    width:100%; max-width:100%; height:5rem; 
    background-color:#FFEEEE; border-bottom:1px solid #FF9E9E;
    .wrap{ position:relative; 
        h1{ line-height:5rem; text-align:center; color:#666; font-size:2.5rem; font-weight:600; }
        button{ 
            position:absolute; top:0; right:0; height:5rem; 
            border:none; background-color:transparent; 
            font-size:1.25rem; font-weight:600; color:#FF9E9E; 
        }
    }
    @media screen and (max-width: 1024px){
        padding:0 1rem;
    }
    @media screen and (max-width: 474px){
        h1{ float:left; font-size:2rem !important; }
    }
    @media screen and (max-width: 474px){
        h1{ font-size:1.5rem !important; }
    }
  
`;

function Header(props) {
    const onLogOut = () => {
        const confirm = window.confirm('Do you really want to leave Album Navigator?');
        console.log(confirm);
        if(confirm){
            localStorage.removeItem('token');
            window.location.reload();
        }
    }

    return (
        <Gnb>
            <div className="wrap">
                <h1>Album Navigator</h1>
                <button type="button" onClick={onLogOut}>Log Out ⇒</button>
            </div>
        </Gnb>
    );
}

export default React.memo(Header);