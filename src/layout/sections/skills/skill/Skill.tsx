import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
`