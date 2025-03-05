import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {IconIdWrapper} from "../../../../components/icon/IconIdWrapper.tsx";
import {theme} from "../../../../styles/Theme.tsx";

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
            <IconIdWrapper gap={'105px'} width={'120px'} height={'120px'} justifyContent={'space-between'}>
                <Icon iconId={props.iconId} />
            </IconIdWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 13%;
    margin: 10px;
    flex-grow: 1;

    @media ${theme.media.tablet} {
       width: 18%;
       
    }

    @media ${theme.media.mobile} {
        width: 20%;
    }
`


