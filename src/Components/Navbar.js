import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
const Navbar = () => {
    const { exitUser, themeHandler } = useGlobalContext();
    return (
        <Wrapper>
            <header className="nav-center">
                <h1>Heroes APP</h1>
                <div className="btn-navbar">
                    <Link to="/login" onClick={exitUser}>
                        Log Out
                    </Link>
                    <button className="btn-theme" onClick={themeHandler}>
                        Theme
                    </button>
                </div>
            </header>
        </Wrapper>
    );
};

export default Navbar;

const Wrapper = styled.nav`
    height: 5rem;
    margin:0:
    padding:0;
    background: var(--clr-primary);
    color:var(--clr-white);
    box-shadow:var(--dark-shadow);
    
    .nav-center{
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:5rem;
        width:90%;
        margin:0 auto
    };

    
    .btn-navbar{
        transform:translateY(5px);
        display:flex;
        heigth:5rem;
        width:50%;
        justify-content:flex-end;
        align-items:center;
        gap:10px;
    }

    .nav-center a{
        text-decoration:none;
        display:block; 
        color:var(--clr-white);
        font-size:16px

    }
    .btn-theme{
        font-size:14px;
        background:var(--clr-white);
        border:none;
        color:var(--clr-primary);
        border-radius:5px;
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
        border-bottom:1px solid var(--clr-white)
    } 

    .btn-navbar{
        transform:translateY(5px);
        display:flex;
        heigth:5rem;
        width:40%;
        justify-content:flex-end;
        align-items:center;
        gap:30px;
    }

    .btn-theme{
        font-size:16px;
        background:var(--clr-white);
        border:none;
        color:var(--clr-primary);
        border-radius:5px;
        padding:5px 10px;
        cursor:pointer;
    }
    .btn-theme:hover{
        background:var(--clr-white-darker);  
    }
}
`;
