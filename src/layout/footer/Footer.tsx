import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {StackDiv} from "../sections/about/StackDiv.tsx";
import {Container} from "../../components/Container.tsx";


const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justifyContent={'space-between'}>
                    <Logo />
                    <FlexWrapper>
                        <StackDiv iconId={'whatsapp'} text={'+91 12345 09876'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                        <StackDiv iconId={'gmail'} text={'info@example.com'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                        {/*TODO change sizes for icons*/}
                        <MenuContact />
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justifyContent={'space-between'}>
                    <Menu menuItems={navItems} />
                    {/*TODO change sizes, color, etc. for links by PROPS*/}
                    <StyledFooterText>Designed and built by Elena with Love & Coffee</StyledFooterText>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    
`


const StyledFooterText = styled.p`

`