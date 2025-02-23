import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StackDiv} from "./StackDiv.tsx";
import {StackDivLocationWrapper} from "./StackDivLocationWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";


type StackPropsType = {
    spanText: string
    smallText: string
    calendarText: string
    cityLocText: string
    locationText: string
}


export const Stack = (props: StackPropsType) => {
    return (
        <StyledStack>
            <FlexWrapper justifyContent={'space-between'}>
                <AboutSpan>{props.spanText}</AboutSpan>
                <AboutSmall>{props.smallText}</AboutSmall>
            </FlexWrapper>

            <FlexWrapper justifyContent={'space-between'}>
                <StackDivLocationWrapper cityLocText={props.cityLocText} locationText={props.locationText} />
                <StackDiv iconId={'calendar'} text={props.calendarText} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
            </FlexWrapper>
        </StyledStack>
    );
};

const StyledStack = styled.div`
    border: 1px solid blue;
`

const AboutSpan = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;

`

const AboutSmall = styled.small`
    color: ${theme.colors.fonsPrimary.textAboutSmall};
    font-weight: 600;
    font-size: 9px;
    line-height: 26px;
    text-align: center;
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        display: inline-block;
        min-width: 100%;
        //width: 84px;
        height: 24px;
        border-radius: 100px;
        background: ${theme.colors.smallAboutBgc};

        position: absolute;
        //top: -3px;
        //left: 612px;
        bottom: 0;
        z-index: -1;
        //right: 50%;
        //left: 50%;
    }
`

