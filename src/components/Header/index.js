import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import styled from 'styled-components'

const StyledLI = styled.li`
    color:white;
    background-color:black;
    padding: 14px 20px;
    display: inline-block;
    text-decoration:none;
`;

const StyledLink = styled(Link)`
    color:white;
    text-decoration:none;
`;

const Header = () => (
    <header>
        <nav>
            <ul>
                <StyledLI><StyledLink to='/calculator'>Calculator</StyledLink></StyledLI>
                <StyledLI><StyledLink to='/dog'>Dogs</StyledLink></StyledLI>
                <StyledLI><StyledLink to='/dnd'>Drag And Drop</StyledLink></StyledLI>
                <StyledLI><StyledLink to='/drag'>Drag Around</StyledLink></StyledLI>
            </ul>
        </nav>
    </header>
)

export default Header;
