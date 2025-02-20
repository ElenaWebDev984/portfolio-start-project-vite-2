import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StackDiv} from "./StackDiv.tsx";
import {StackDivLocationWrapper} from "./StackDivLocationWrapper.tsx";


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
                <StackDiv iconId={'calendar'} text={props.calendarText} />
            </FlexWrapper>
        </StyledStack>
    );
};

const StyledStack = styled.div`
    border: 1px solid blue;
`

const AboutSpan = styled.span`

`

const AboutSmall = styled.small`

`

