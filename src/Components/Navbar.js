import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
const Navbar = () => {
    const { exitUser } = useGlobalContext();
    return (
        <Wrapper>
            <header className="nav-center">
                <h1>Heroes APP</h1>
                <Link to="/login" onClick={exitUser}>
                    Log Out
                </Link>
            </header>
        </Wrapper>
    );
};

export default Navbar;

const Wrapper = styled.nav`
    height: 5rem;
    margin:0:
    padding:0;
    background: #D0192D;
    color:var(--clr-primary-10);
    box-shadow:var(--dark-shadow);
    
    .nav-center{
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:5rem;
        width:90%;
        margin:0 auto
    };

    .nav-center h1{
    };
    .nav-center a{
        transform:translateY(5px);
        text-decoration:none;
        display:block; 
        color:#fff;
        text-align:end;
        font-size:18px

    }
    

    @media (min-width:800px){
        .nav-center{
        display:flex;
        align-items:center;
        height:5rem;
        width:70%;
        margin:0 auto
    };
    .nav-center h1{
        padding-bottom:2px;
    };

    .nav-center a{
        font-size:24px
    } 
    .nav-center a:hover{
        margin-bottom:-1px;
        border-bottom:1px solid #fff
    } 

}
`;
