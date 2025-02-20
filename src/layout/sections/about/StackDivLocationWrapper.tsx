import {StackDiv} from "./StackDiv.tsx";
import styled from "styled-components";

type StackDivLocationWrapperPropsType = {
    cityLocText: string
    locationText: string
}


export const StackDivLocationWrapper = (props: StackDivLocationWrapperPropsType) => {
    return (
        <StyledStackDivLocation>
            <StackDiv iconId={'city-location'} text={props.cityLocText} />
            <StackDiv iconId={'location'} text={props.locationText} />
        </StyledStackDivLocation>
    );
};


const StyledStackDivLocation = styled.div`
    display: flex;
    border: 2px solid green;
`