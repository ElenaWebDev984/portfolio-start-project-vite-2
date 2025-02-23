import styled from "styled-components";
import photo from '../../../assets/images/foto2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
                    <FlexWrapper direction={'column'} justifyContent={'center'}>
                        <SmallText>Hi there! 👋</SmallText>
                        <Name>I'm <span>Elena</span>,</Name>
                        <MainTitle>a <span>web developer</span></MainTitle>
                        <MainText>I craft responsive websites where technologies meet creativity</MainText>
                        <Button type={'submit'}>Contact me!!!</Button>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt="foto"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    color: ${theme.colors.fonsPrimary.textH2H3};
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    display: flex;

    background-color: #eaeeec;
    //TODO delete bgc
`


const PhotoWrapper = styled.div`
  position: relative;
  width: 350px; /* Ширина контейнера */
  height: 350px; /* Высота контейнера */
  border-radius: 50%; /* Делаем контейнер круглым */
  background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%); /* Градиентный фон */
  padding: 9px; /* Толщина "бордера" */
  box-sizing: border-box; /* Учитываем padding в размерах */
`;

const Photo = styled.img`
  width: 100%; /* Занимает всю ширину контейнера */
  height: 100%; /* Занимает всю высоту контейнера */
  border-radius: 50%; /* Делаем изображение круглым */
  object-fit: cover; /* Чтобы изображение заполнило круг */
`;


const MainTitle = styled.h1`
    font-size: 58px;
    
    span {
        background: ${theme.colors.linearGradientText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
    }
`


const Name = styled.h2`
    font-size: 58px;

    span {
        background: ${theme.colors.linearGradientText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block; 
    }
`;


const SmallText = styled.span`

`


const MainText = styled.p`
    color: ${theme.colors.fonsPrimary.textSlogan};
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -0.4px;

`


// PHOTO !!!

// <picture>
//     <source srcset='../../../assets/images/foto2.webp' type='image/webp'>
//     <source srcset='../../../assets/images/foto2.jpg' type='image/jpg'>
//     < img src = '../../../assets/images/foto2.jpg' type='image/jpg' alt = 'foto' >
// </picture>