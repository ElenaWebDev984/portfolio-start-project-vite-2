import styled from "styled-components";
import {LinkNav} from "../LinkNav.tsx";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index) => {
                    return <ListItem key={index}>
                        <LinkNav href="">{item}</LinkNav>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        
    }
`

const ListItem = styled.li`

`
