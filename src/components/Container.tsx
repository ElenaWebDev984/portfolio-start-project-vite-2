import styled from "styled-components";


type ContainerPropsType = {
    display?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1230px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    outline: 1px solid red;
`