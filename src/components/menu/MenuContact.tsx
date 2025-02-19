import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const MenuContact = () => {
    return (
        <StyledMenuContact>
            <ul>
                <li>
                    <a href="">
                        <Icon iconId={'github-cont'} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'twitter-cont'} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'linkedin-cont'} />
                    </a>
                </li>
            </ul>
        </StyledMenuContact>
    );
};

const StyledMenuContact = styled.nav`
    ul {
        display: flex;
        //list-style: none;
    }
`