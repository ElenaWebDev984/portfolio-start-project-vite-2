import styled from "styled-components";
import {Stack} from "./Stack.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <EmptyWrapper>
                    <FlexWrapper direction="column">
                        <AboutTitle>About Me</AboutTitle>
                        <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to
                            work as your future website. It helps you to combine slides, panels and other components and
                            export it as a set of static files: HTML/CSS/JS.</AboutText>

                        <AboutTitle>Work Experience</AboutTitle>
                        <Stack spanText={'Junior Web Developer'} smallText={'Full Time'}
                               calendarText={'Sep 2021 - Dec 2021'} cityLocText={'Dr. Rajkumar’s Learning App'}
                               locationText={'Bengaluru'}/>
                        <Stack spanText={'Web Development Intern'} smallText={'Internship'}
                               calendarText={'Sep 2021 - Dec 2021'} cityLocText={'IonPixelz Web Solutions'}
                               locationText={'Bengaluru'}/>
                        <Stack spanText={'SEO / SEM Specialist'} smallText={'Internship'}
                               calendarText={'Sep 2021 - Dec 2021'} cityLocText={'HAAPS'} locationText={'Bengaluru'}/>

                        <AboutTitle>Education</AboutTitle>
                        <Stack spanText={'Bachelor in Electronics & Communication'} smallText={'Full Time'}
                               calendarText={'Aug 2015 - Dec 2020'} cityLocText={'Bangalore Instutute of Technology'}
                               locationText={'Bengaluru'}/>
                    </FlexWrapper>
                    <EmptyDiv />
                </EmptyWrapper>
            </Container>
        </StyledAbout>
    );
};


const StyledAbout = styled.div`
    min-height: 100vh;
    text-align: left;

`


const AboutTitle = styled.h3`
    color: ${theme.colors.fonsPrimary.textH2H3};
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -0.4px;
`


const AboutText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
`


const EmptyWrapper = styled.div`
    display: flex;
    position: relative;
    gap: 90px;

    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        left: 979px;
        transform: rotate(-75deg);
        
        width: 300px;
        height: 300px;
        top: 200px;
        //width: 835px;
        //height: 835px;
        //top: 1535px;
        //left: 979px;
        //border-radius: 83px;
        border: 1px solid #00C0FD;
        //border-image: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) 1;
`

const EmptyDiv = styled.div`
    width: 835px;
    height: 835px;
    //background-color: red;
   
`