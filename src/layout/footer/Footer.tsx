import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {StackDiv} from "../sections/about/StackDiv.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.tsx";


const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justifyContent={'space-between'}>
                    <Logo />
                    <FlexWrapper justifyContent={'flex-end'} gap={'60px'}>
                        <StackDiv iconId={'whatsapp'} text={'+91 12345 09876'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                        <StackDiv iconId={'gmail'} text={'info@example.com'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                        {/*TODO change sizes for icons*/}
                        <MenuContact />
                    </FlexWrapper>
                </FlexWrapper>
                <DivPseudoWrapper />
                <FlexWrapper justifyContent={'space-between'}>
                    <Menu menuItems={navItems} />
                    {/*TODO change sizes, color, etc. for links by PROPS*/}
                    <StyledFooterText>© 2025 Designed and built by <span>Elena</span> with <span>Love</span> & <span>Coffee</span></StyledFooterText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    padding: 60px 0;
`


const StyledFooterText = styled.p`
    font-weight: 400;
    font-size: 18px;


    span {
        background: ${theme.colors.linearGradientText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
    }
`

const DivPseudoWrapper = styled.div`
    &::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.fonsPrimary.textSection};
        opacity: 30%;
        margin: 45px 0;
    }
`