import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {IconIdWrapper} from "../../../../components/icon/IconIdWrapper.tsx";

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
            <IconIdWrapper gap={'105px'} width={'120px'} height={'120px'} >
                <Icon iconId={props.iconId} />
            </IconIdWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 13%;
    margin: 10px;
`


