import styled from "styled-components";
import photo from '../../../assets/images/foto1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={'center'} justifyContent={'space-around'}>
                <div>
                    <span>Hi there!</span>
                    <br/>
                    <span>I'm</span>
                    <Name>Elena</Name>
                    <span>a</span>
                    <MainTitle>web developer</MainTitle>
                    <p>I craft responsive websites where technologies meet creativity</p>
                    <button>Contact me!!</button>
                </div>
                <Photo src={photo} alt="foto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: aquamarine;
`

const Photo = styled.img`
    width: 450px;
    height: 380px;
    object-fit: contain;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`


