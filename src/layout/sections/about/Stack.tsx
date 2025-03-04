import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StackDiv} from "./StackDiv.tsx";
import {StackDivLocationWrapper} from "./StackDivLocationWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.ts";


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

            <FlexWrapper justifyContent={'space-between'} >
                <StackDiv iconId={'city-location'} text={props.cityLocText} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
                <StackDivLocationWrapper calendarText={props.calendarText} locationText={props.locationText} />
            </FlexWrapper>
        </StyledStack>
    );
};

const StyledStack = styled.div`
    //border: 1px solid blue;

    &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.fonsPrimary.textSection};
        opacity: 30%;
       margin-top: 20px;
    }

    @media ${theme.media.mobile} {
        flex-wrap: wrap;
    }
`

const AboutSpan = styled.span`
    ${font({weight: 400, Fmax: 20, Fmin: 16})};
    //font-weight: 400;
    //font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;

`

const AboutSmall = styled.small`
    ${font({weight: 600, Fmax: 9, Fmin: 6})};
    color: ${theme.colors.fonsPrimary.textAboutSmall};
    //font-weight: 600;
    //font-size: 9px;
    line-height: 26px;
    text-align: left;
    margin-right: 30px;
    
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        display: inline-block;
        min-width: 200%;
        //width: 84px;
        height: 24px;
        border-radius: 100px;
        background: ${theme.colors.smallAboutBgc};

        position: absolute;
        //top: -3px;
        bottom: 0;
        z-index: -1;
        left: 50%;
        transform: translateX(-50%);
    }
`

