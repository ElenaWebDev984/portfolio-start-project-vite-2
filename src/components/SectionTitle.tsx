import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    ${font({weight: 700, Fmax: 48, Fmin: 32})};
    color: ${theme.colors.fonsPrimary.textH2H3};
    //font-weight: 700;
    //font-size: 48px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 50px;
`