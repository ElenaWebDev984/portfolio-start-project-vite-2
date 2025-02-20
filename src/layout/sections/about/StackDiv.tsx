import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

type StackDivPropsType = {
    iconId: string
    text: string
}

export const StackDiv = (props: StackDivPropsType) => {
    return (
        <StyledStackDiv>
            <Icon iconId={props.iconId} />
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