import {StackDiv} from "./StackDiv.tsx";
import styled from "styled-components";

type StackDivLocationWrapperPropsType = {
    cityLocText: string
    locationText: string
}


export const StackDivLocationWrapper = (props: StackDivLocationWrapperPropsType) => {
    return (
        <StyledStackDivLocation>
            <StackDiv iconId={'city-location'} text={props.cityLocText} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
            <StackDiv iconId={'location'} text={props.locationText} width={'20'} height={'20'} viewBox={'0 0 20 20'} />
        </StyledStackDivLocation>
    );
};


const StyledStackDivLocation = styled.div`
    display: flex;
    border: 2px solid green;
`