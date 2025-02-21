import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

type StackDivPropsType = {
    iconId: string
    text: string
    width?: string
    height?: string
    viewBox?: string
}

export const StackDiv = (props: StackDivPropsType) => {
    return (
        <StyledStackDiv>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <AboutIconSpan>{props.text}</AboutIconSpan>
        </StyledStackDiv>
    );
};


const StyledStackDiv = styled.div`
    display: flex;
    text-align: center;
    border: 1px solid orange;
`


const AboutIconSpan = styled.span`
    
`