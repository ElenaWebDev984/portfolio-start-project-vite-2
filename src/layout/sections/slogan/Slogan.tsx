import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StackDiv} from "../about/StackDiv.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <FlexWrapper direction="column" justifyContent={'center'} alignItems={'center'}>
                <StyledSloganText>More projects I’ve worked on</StyledSloganText>
                <StackDiv iconId={'github-cont'} text={'@john-doe on github'} />
            </FlexWrapper>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 100%;
    background-color: #eaeeec;
    border: 1px solid red;
`


const StyledSloganText = styled.p`

`

