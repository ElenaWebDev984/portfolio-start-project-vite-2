import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {SectionText} from "../../../components/SectionText.tsx";
import {Container} from "../../../components/Container.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <FlexWrapper  wrap={'wrap'} alignItems={'baseline'} textAlign={'center'} >
                    <Skill iconId={'js'} />
                    <Skill iconId={'ts'} />
                    <Skill iconId={'react'} />
                    <Skill iconId={'redux'} />
                    <Skill iconId={'html'} />
                    <Skill iconId={'css'} />
                    <Skill iconId={'styledComponents'} />
                    <Skill iconId={'sass'} />
                    {/*<Skill iconId={'less'} />*/}
                    <Skill iconId={'figma'} />
                    <Skill iconId={'git'} />
                    <Skill iconId={'github'} />
                    <Skill iconId={'pnpm'} />
                    {/*<Skill iconId={'vite'} />*/}
                    <Skill iconId={'npm'} />
                    <Skill iconId={'yarn'} />
                    <Skill iconId={'nodejs'} />
                    <Skill iconId={'powershell'} />
                    {/*<Skill iconId={'webstorm'} />*/}
                    <Skill iconId={'vscode'} />
                    <Skill iconId={'bootstrap'} />
                    {/*<Skill iconId={'tailwind'} />*/}
                    {/*<Skill iconId={'notion'} />*/}
                    {/*<Skill iconId={'babel'} />*/}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
   
`

