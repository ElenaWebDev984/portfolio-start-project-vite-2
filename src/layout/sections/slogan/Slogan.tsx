import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StackDiv} from "../about/StackDiv.tsx";
import {Container} from "../../../components/Container.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction="column" justifyContent={'center'} alignItems={'center'}>
                    <StyledSloganText>More projects I’ve worked on</StyledSloganText>
                    <StackDiv iconId={'github-cont'} text={'@john-doe on github'} />
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 100%;
`


const StyledSloganText = styled.p`

`

