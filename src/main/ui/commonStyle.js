import styled from 'styled-components';
import React from "react";

export const BlockWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;
export const FlexRowCenter = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
export const ContainerWrapper = styled(FlexRowCenter)`
    margin: 0 auto;
    width: 1024px;
`;
const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);
export const Button = styled.button`
    font-family: 'Arial';
    font-size: 15px;
    padding: 13px 25px 9px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    
    background: ${props => props.color==="yellow" ? "white" : "blue"};
    color: ${props => props.color==="yellow" ? "#32cdff" : "#000"};
    text-transform: ${props => props.color==="yellow" ? "uppercase" : "normal"};
    
    &:hover {
        filter: brightness(65%);
    }
    &:focus {
        outline: none;
    }
`;
