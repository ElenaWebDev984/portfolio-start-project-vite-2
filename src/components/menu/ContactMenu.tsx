import styled from "styled-components";


export const ContactMenu = () => {
    return (
        <StyledContactMenu>
            <li>
                <a href="">
                    <img src="" alt=""/>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt=""/>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt=""/>
                </a>
            </li>
        </StyledContactMenu>
    );
};

const StyledContactMenu = styled.ul`
    display: flex;
    gap: 20px;
`