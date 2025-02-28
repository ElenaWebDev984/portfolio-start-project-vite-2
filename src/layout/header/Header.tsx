import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {MobileMenu} from "./headerMobile/MobileMenu.tsx";
import {theme} from "../../styles/Theme.tsx";


const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]


export const Header = () => {
    return (
        <StyledHeader>
            <Container display={'flex'}>
                <FlexWrapper justifyContent='space-between' alignItems={'center'}>
                    <Logo />
                    <FlexWrapper grow={1} justifyContent={'flex-end'} gap={'50px'} alignItems={'center'} >
                        <Menu menuItems={navItems} />
                        <MobileMenu menuItems={navItems} />
                        <MenuContact />
                        {/*TODO add change languages (en, es, ru)*/}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 40px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    display: block;

    @media ${theme.media.tablet} {
        display: none;
    }
`

