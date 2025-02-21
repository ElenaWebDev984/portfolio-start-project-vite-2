import styled from "styled-components";
import {MenuProject} from "./MenuProject.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {ProjectLinkDiv} from "./ProjectLinkDiv.tsx";


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
            <Image src={props.src} alt={props.alt} />
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <FlexWrapper>
                <span>Tech stack :</span>
                <MenuProject menuItems={projectItems} />
            </FlexWrapper>
            <FlexWrapper gap={'20px'}>
                <ProjectLinkDiv iconId={'proj-chain'} textLink={'Live Preview'} href={'#'} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
                <ProjectLinkDiv iconId={'proj-github'} textLink={'View Code'} href={'#'} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
            </FlexWrapper>
        </StyledWork>
    );
};


const StyledWork = styled.div`
    background-color: #FFFFFF;
    max-width: 375px;
    width: 100%;
`


const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`


const WorkTitle = styled.h3`

`


const WorkText = styled.p`

`

