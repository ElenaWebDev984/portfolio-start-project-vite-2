import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.ts";

export const Button = styled.button`
    width: 150px;
    height: 40px;
    ${font({weight: 600, Fmax: 20, Fmin: 12})}
    //font-weight: 600;
    //font-size: 20px;
    cursor: pointer;
    background-image: ${theme.colors.linearGradientPic};
    color: ${theme.colors.fonsPrimary.textSlogan};
    
`