import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <FlexWrapper>
                <Menu />
                <MenuContact />
            </FlexWrapper>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #228787;
    display: flex;
    justify-content: space-between;
`

