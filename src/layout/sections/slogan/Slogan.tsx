import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {IconIdWrapper} from "../../../components/icon/IconIdWrapper.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction="column" justifyContent={'center'} alignItems={'center'}>
                    <StyledSloganText>More projects I’ve worked on:</StyledSloganText>
                    <FlexWrapper alignItems={'center'} justifyContent={'center'} >
                        <IconIdWrapper >
                            <Icon iconId={'github-cont'} />
                        </IconIdWrapper>
                        <ContactSloganSpan>@john-doe on github</ContactSloganSpan>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
`


const StyledSloganText = styled.p`
    color: ${theme.colors.fonsPrimary.textSlogan};
`

const ContactSloganSpan = styled.span`
    background: ${theme.colors.linearGradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
    margin-top: 10px;
`

