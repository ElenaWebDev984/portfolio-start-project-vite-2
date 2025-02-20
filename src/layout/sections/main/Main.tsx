import styled from "styled-components";
import photo from '../../../assets/images/foto2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";

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
                    <Button type={'submit'}>Contact me!!!</Button>
                </div>
                <Photo src={photo} alt="foto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #eaeeec;
    border: 1px solid red;
`

const Photo = styled.img`
    width: 450px;
    height: 380px;
    object-fit: contain;
`

const MainTitle = styled.h1`
    color: #42446E;
;
`

const Name = styled.h2`
    color: #42446E;
`


