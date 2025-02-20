import styled from "styled-components";
import {Stack} from "./Stack.tsx";



export const About = () => {
    return (
        <StyledAbout>
            <AboutTitle>About Me</AboutTitle>
            <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>

            <AboutTitle>Work Experience</AboutTitle>
            <Stack spanText={'Junior Web Developer'} smallText={'Full Time'} calendarText={'Sep 2021 - Dec 2021'} cityLocText={'Dr. Rajkumar’s Learning App'} locationText={'Bengaluru'} />
            <Stack spanText={'Web Development Intern'} smallText={'Internship'} calendarText={'Sep 2021 - Dec 2021'} cityLocText={'IonPixelz Web Solutions'} locationText={'Bengaluru'} />
            <Stack spanText={'SEO / SEM Specialist'} smallText={'Internship'} calendarText={'Sep 2021 - Dec 2021'} cityLocText={'HAAPS'} locationText={'Bengaluru'} />

            <AboutTitle>Education</AboutTitle>
            <Stack spanText={'Bachelor in Electronics & Communication'} smallText={'Full Time'} calendarText={'Aug 2015 - Dec 2020'} cityLocText={'Bangalore Instutute of Technology'} locationText={'Bengaluru'} />
        </StyledAbout>
    );
};


const StyledAbout = styled.div`
    min-height: 70vh;
    background-color: #eaeeec;
    border: 1px solid red;
`


const AboutTitle = styled.h3`
    color: #42446E;
    text-align: center;

`