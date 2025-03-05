import styled from "styled-components";
import {font} from "../styles/Common.ts";

export const SectionText = styled.p`
    ${font({weight: 400, Fmax: 32, Fmin: 24})};
    //font-weight: 400;
    //font-size: 32px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 110px;
`