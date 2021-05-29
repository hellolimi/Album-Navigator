import React from 'react';
import styled from 'styled-components';

const Gnb = styled.header`
    position:fixed; top:0; left:0; width:100%; height:5rem; border-bottom:1px solid #FF9E9E;
    .wrap{ position:relative; 
        h1{ line-height:5rem; text-align:center; color:#666; font-size:2.5rem; }
        button{ 
            position:absolute; top:0; right:0; height:5rem; 
            border:none; background-color:transparent; 
            font-size:1.125rem; color:#666; 
        }
    }
`;

function Header(props) {
    const onLogOut = () => {
        const confirm = window.confirm('Do you really want to leave Albul Navigator?');
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
                <button type="button" onClick={onLogOut}>Log Out</button>
            </div>
        </Gnb>
    );
}

export default Header;