import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.tsx";

type ProjectLinkDivPropsType = {
    iconId: string
    textLink: string
    href: string
    width?: string
    height?: string
    viewBox?: string
}

export const ProjectLinkDiv = (props: ProjectLinkDivPropsType) => {
    return (
        <StyledProjectLinkDiv>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            {/*TODO change chainImage*/}
            <ProjectLink href={props.href}>{props.textLink}</ProjectLink>
        </StyledProjectLinkDiv>
    );
};


const StyledProjectLinkDiv = styled.div`
    display: flex;
    border: 1px solid violet;
    gap: 10px;
`


const ProjectLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${theme.colors.fonsPrimary.textProjectTitle};

    position: relative;

    &::before {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.fonsPrimary.textAboutLink};
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 3px;
    }
`