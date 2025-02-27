import styled from "styled-components";


type IconIdWrapper = {
    width?: string
    height?: string
    justifyContent?: string
    alignItems?: string
    gap?: string
}

export const IconIdWrapper = styled.div<IconIdWrapper>`
    display: flex;
    width: ${props => props.width  || '20px'};
    height: ${props => props.height  || '20px'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    gap: ${props => props.gap};
    text-align: center;
`

