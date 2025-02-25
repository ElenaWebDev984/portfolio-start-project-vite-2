import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import projectImg1 from './../../../assets/images/proj1.webp';
import projectImg2 from './../../../assets/images/proj2.webp';
import projectImg3 from './../../../assets/images/proj3.webp';
import projectImg4 from './../../../assets/images/proj4.webp';
import projectImg5 from './../../../assets/images/proj5.webp';
import projectImg6 from './../../../assets/images/proj6.webp';
import {Container} from "../../../components/Container.tsx";


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper justifyContent={'space-around'} wrap={'wrap'} gap={'34px'} >
                    <Work title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg1} alt={'project1'} />
                    <Work title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg2} alt={'project2'} />
                    <Work title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg3} alt={'project3'} />
                    <Work title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg4} alt={'project4'} />
                    <Work title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg5} alt={'project5'} />
                    <Work title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} src={projectImg6} alt={'project6'} />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
   
`

