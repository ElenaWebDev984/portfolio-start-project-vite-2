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
                <FlexWrapper  wrap={'wrap'} justifyContent={'space-between'} >
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'js'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'ts'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'react'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'redux'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'html'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'css'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'styledComponents'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'sass'} />
                    {/*<Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'less'} />*/}
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'figma'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'git'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'github'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'pnpm'} />
                    {/*<Skill width={'120'} height={'120'} viewBox={'0 0 120 120'}  iconId={'vite'} />*/}
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'npm'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'yarn'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'nodejs'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'powershell'} />
                    {/*<Skill width={'120} height={'120} viewBox={'0 0 120 120} iconId={'webstorm'} />*/}
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'vscode'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'bootstrap'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'tailwind'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'notion'} />
                    <Skill width={'120'} height={'120'} viewBox={'0 0 120 120'} iconId={'babel'} />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #eaeeec;
    min-height: 80vh;
`

