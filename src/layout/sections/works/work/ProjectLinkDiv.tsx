import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

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
            <ProjectLink href={props.href}>{props.textLink}</ProjectLink>
        </StyledProjectLinkDiv>
    );
};


const StyledProjectLinkDiv = styled.div`
    display: flex;
    border: 1px solid violet;
`


const ProjectLink = styled.a`

`