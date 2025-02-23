import styled from "styled-components";


type LinkNavPropsType = {
    fontWeight?: string
    fontSize?: string
}

export const LinkNav = styled.a<LinkNavPropsType>`
    font-family: 'DM Sans', sans-serif;
    font-weight: ${props => props.fontWeight || '500'};
    font-size: ${props => props.fontSize || '20px'};
    //line-height: 26px;
    text-align: center;
`