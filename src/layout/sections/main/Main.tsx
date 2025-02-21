import styled from "styled-components";
import photo from '../../../assets/images/foto2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'space-around'}>
                    <div>
                        <span>Hi there!</span>
                        <br/>
                        <span>I'm</span>
                        <Name>Elena</Name>
                        <MainTitle>a web developer</MainTitle>
                        <p>I craft responsive websites where technologies meet creativity</p>
                        <Button type={'submit'}>Contact me!!!</Button>
                    </div>
                    <Photo src={photo} alt="foto"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #eaeeec;
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


// PHOTO !!!

// <picture>
//     <source srcset='../../../assets/images/foto2.webp' type='image/webp'>
//     <source srcset='../../../assets/images/foto2.jpg' type='image/jpg'>
//     < img src = '../../../assets/images/foto2.jpg' type='image/jpg' alt = 'foto' >
// </picture>