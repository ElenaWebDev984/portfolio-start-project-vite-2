import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper >
                <Skill iconId={'js'} />
                <Skill iconId={'ts'} />
                <Skill iconId={'html'} />
                <Skill iconId={'css'} />
                <Skill iconId={'react'} />
                <Skill iconId={'redux'} />
                <Skill iconId={'styled-components'} />
                <Skill iconId={'sass'} />
                <Skill iconId={'less'} />
                <Skill iconId={'figma'} />
                <Skill iconId={'git'} />
                <Skill iconId={'github'} />
                <Skill iconId={'pnpm'} />
                <Skill iconId={'vite'} />
                <Skill iconId={'npm'} />
                <Skill iconId={'yarn'} />
                <Skill iconId={'nodejs'} />
                <Skill iconId={'powershell'} />
                <Skill iconId={'webstorm'} />
                <Skill iconId={'vscode'} />
                <Skill iconId={'bootstrap'} />
                <Skill iconId={'tailwind'} />
                <Skill iconId={'notion'} />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: aquamarine;
    min-height: 100vh;
`

