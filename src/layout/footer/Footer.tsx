import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {StackDiv} from "../sections/about/StackDiv.tsx";


const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent={'space-between'}>
                <Logo />
                <FlexWrapper>
                    <StackDiv iconId={'whatsapp'} text={'+91 12345 09876'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                    <StackDiv iconId={'gmail'} text={'info@example.com'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                    <MenuContact />
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justifyContent={'space-between'}>
                <Menu menuItems={navItems} />
                <StyledFooterText>Designed and built by Elena with Love & Coffee</StyledFooterText>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: #eaeeec;
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    flex-direction: column;
`


const StyledFooterText = styled.p`

`