import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionText} from "../../../components/SectionText.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap="wrap" gap={'105px'}>
                <Icon iconId={'html'} viewBox={'0 0 120 120'} />
                <Icon iconId={'css'} viewBox={'0 0 120 120'} />
                <Icon iconId={'js'} viewBox={'0 0 140 140'} />
                <Icon iconId={'ts'} viewBox={'0 0 140 140'} />
                <Icon iconId={'react'} viewBox={'0 0 120 120'} />
                <Icon iconId={'redux'} viewBox={'0 0 120 120'} />
                <Icon iconId={'sass'} viewBox={'0 0 120 120'} />
                <Icon iconId={'tailwind'} viewBox={'0 0 120 120'} />
                <Icon iconId={'styledComponents'} viewBox={'0 0 140 140'} />
                <Icon iconId={'babel'} viewBox={'0 0 140 140'} />
                <Icon iconId={'vite'} viewBox={'0 0 260 260'} />
                <Icon iconId={'bootstrap'} viewBox={'0 0 120 120'} />
                <Icon iconId={'github-white'} viewBox={'0 0 110 110'} />
                <Icon iconId={'git'} viewBox={'0 0 120 120'} />
                <Icon iconId={'pnpm'} viewBox={'0 0 140 140'} />
                <Icon iconId={'npm'} viewBox={'0 0 120 120'} />
                <Icon iconId={'yarn'} viewBox={'0 0 120 120'} />
                <Icon iconId={'figma'} viewBox={'0 0 130 130'} />
                <Icon iconId={'nodejs'} viewBox={'0 0 120 120'} />
                <Icon iconId={'powershell'} viewBox={'0 0 140 140'} />
                <Icon iconId={'webstorm'} viewBox={'0 0 210 210'} />
                <Icon iconId={'vscode'} viewBox={'0 0 120 120'} />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #e7cae7;
    min-height: 100vh;
`

