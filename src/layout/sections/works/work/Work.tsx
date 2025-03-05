import styled from "styled-components";
import {MenuProject} from "./MenuProject.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {ProjectLinkDiv} from "./ProjectLinkDiv.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/Button.tsx";


const projectItems = ['HTML, ', 'JavaScript, ', 'SASS, ', 'React' ,]

type WorkPropsType = {
    title: string
    text: string
    src: string
    alt: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt={props.alt} />
                <Button>View Project</Button>
            </ImageWrapper>
            <FlexWrapper direction={'column'} margin={'30px 30px 25px'}>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkText>{props.text}</WorkText>
                <FlexWrapper height={'auto'} margin={'0 0 30px 0'}>
                    <StackSpan>Tech stack :  </StackSpan>
                    <MenuProject menuItems={projectItems} />
                </FlexWrapper>
                <FlexWrapper gap={'20px'} height={'auto'} justifyContent={'space-between'} >
                    <ProjectLinkDiv iconId={'proj-chain'} textLink={'Live Preview'} href={'#'} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
                    <ProjectLinkDiv iconId={'proj-github'} textLink={'View Code'} href={'#'} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
                </FlexWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};


const StyledWork = styled.div`
    background-color: #FFFFFF;
    max-width: 375px;
    width: 100%;
    line-height: 26px;
    //flex-grow: 1;
`


const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.projectBgc};
    //TODO remove cornersBGC
`


const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4);
        opacity: 0;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }
        
        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    }
    
`


const WorkTitle = styled.h3`
    color: ${theme.colors.fonsPrimary.textProjectTitle};
    font-weight: 500;
    font-size: 28px;
    
`


const WorkText = styled.p`
    font-weight: 300;
    font-size: 18px;
    margin: 17px 0 12px;
`


const StackSpan = styled.span`
    font-weight: 400;
    font-size: 16px;


`

