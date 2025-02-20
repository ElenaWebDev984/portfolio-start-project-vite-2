import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    overflow?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 13%;
    //background-color: beige;
    margin: 10px;
    //position: relative;
`