import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";
import {MobileMenu} from "./MobileMenu.tsx";
import {theme} from "../../../styles/Theme.tsx";



const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]


export const HeaderMobile = () => {
    return (
        <StyledHeaderMobile>
            <Container display={'flex'}>
                <FlexWrapper justifyContent='space-between' alignItems={'center'}>
                    <Logo/>
                    <MobileMenu menuItems={navItems}/>
                    {/*TODO add change languages (en, es, ru)*/}
                </FlexWrapper>
            </Container>
        </StyledHeaderMobile>
    );
};


const StyledHeaderMobile = styled.header`
    padding: 40px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

