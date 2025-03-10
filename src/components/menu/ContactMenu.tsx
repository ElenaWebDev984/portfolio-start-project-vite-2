import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const ContactMenu = () => {
    return (
        <StyledContactMenu>
            <li>
                <a href="">
                    <Icon iconId={'github-contacts'}  />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'twitter'}  />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'linkedin'}  />
                </a>
            </li>
        </StyledContactMenu>
    );
};

const StyledContactMenu = styled.ul`
    display: flex;
    gap: 20px;
`