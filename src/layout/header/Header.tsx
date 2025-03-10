import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {ContactMenu} from "../../components/menu/ContactMenu.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <ContactMenu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
`

