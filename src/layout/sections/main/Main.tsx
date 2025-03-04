import styled from "styled-components";
import photo from '../../../assets/images/foto2_1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'space-between'} wrap={'wrap'} >
                    <FlexWrapper direction={'column'} justifyContent={'center'} >
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

const StyledMain = styled.section`
    ${font({weight: 700, Fmax: 58, Fmin: 36})}
    min-height: 100vh;
    color: ${theme.colors.fonsPrimary.textH2H3};
    //font-weight: 700;
    //font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    display: flex;

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-wrap: wrap;
           
        }
    }
`


const PhotoWrapper = styled.div`
  //position: relative;
    width: 350px;
    height: 350px;
    //border: 9px solid ;
    border-radius: 50%;
    background: ${theme.colors.linearGradientPic};
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.mobile} {
        width: 315px;
        height: 315px;
    }

    // &::before {
    //     content: '';
    //     width: 350px;
    //     height: 350px;
    //     border: 9px solid ${theme.colors.linearGradientPic};
    //     border-radius: 50%;
    //     position: absolute;
        
        // background: ${theme.colors.linearGradientPic};
        //overflow: hidden; /* Обрезаем всё, что выходит за пределы круга */
        //border-image: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) 1;
        ////-webkit-background-clip: border-box;
`;

const Photo = styled.img`
    //width: 350px;
    //height: 350px;
    width: 335px;
    height: 335px;
    border-radius: 50%;
    object-fit: cover; /* Чтобы изображение заполнило круг */
    
    @media ${theme.media.mobile} {
        width: 300px;
        height: 300px;
    }
`;


const MainTitle = styled.h1`
    ${font({Fmax: 58, Fmin: 36})}
    //font-size: 58px;
    color: ${theme.colors.fonsPrimary.textH2H3};
    
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
    ${font({Fmax: 58, Fmin: 36})}
    //font-size: 58px;
    color: ${theme.colors.fonsPrimary.textH2H3};

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
    ${font({family: "'DM Sans', sans-serif", weight: 500, Fmax: 42, Fmin: 20})}
    color: ${theme.colors.fonsPrimary.textSlogan};
    //font-family: 'DM Sans', sans-serif;
    //font-weight: 500;
    //font-size: 42px;
    line-height: 52px;
    letter-spacing: -0.4px;
    margin: 35px 0;
`


// PHOTO !!!

// <picture>
//     <source srcset='../../../assets/images/foto2.webp' type='image/webp'>
//     <source srcset='../../../assets/images/foto2.jpg' type='image/jpg'>
//     < img src = '../../../assets/images/foto2.jpg' type='image/jpg' alt = 'foto' >
// </picture>