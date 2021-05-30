import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const FormWrap = styled.div`
    display: flex; flex-direction:column; text-align:center;
    position: absolute; top:50%; left:50%; transform:translate(-50%, -50%);
    h1 { margin-bottom:1rem; border-bottom:1px solid #FF9E9E; font-size:3.5rem; color:#666; line-height:7rem; font-weight:600; }
    form{ display:flex; flex-direction:column; align-items: center;
        > * { margin-bottom 1rem; height:3rem; width:380px; }
        input{ padding:0 0.5rem; border:1px solid #ededed; }
        button{ margin-bottom:0; background-color:#FF9E9E; border:none; border-radius:0.5rem; }
        span{ height:1.25rem; line-height:1.25rem; font-size:0.975rem; color:#A50000; }
    }
`;

function Auth(){
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const {email, password} = inputs;
    const [typeErr, setTypeErr] = useState(false);

    const onChange = useCallback(e => {
        const {name, value} = e.target;

        setInputs(prev => ({...prev, [name]:value}));
    }, [])

    const onEmailBlur = useCallback(() => {
        let regxep = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(!regxep.test(email)){
            setTypeErr(true);
        }else{
            setTypeErr(false);
        }
    }, [email])

    const onSubmit = () => {
        if(email !== ''){
            if(password !== ''){
                let token = '1welcomeToAlbumNavigator1'
                localStorage.setItem('token', token);
            }else{
                alert('Please enter your password!');
            }
        }else{
            alert('Please enter your email address!');
        }
    }

    return (
        <FormWrap>
        <h1>Album Navigator</h1>
        <form onSubmit={onSubmit}>
            <input type="email" required name="email" placeholder="Email" onChange={onChange} onBlur={onEmailBlur} />
            {typeErr&&<span>Please enter a valid email address.</span>}
            <input type="password" required name="password" placeholder="Password" onChange={onChange} />
            <button type="submit">Sign In</button>
        </form>
    </FormWrap>
    );
}

export default React.memo(Auth);