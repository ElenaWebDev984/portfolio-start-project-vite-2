import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const MenuContact = () => {
    return (
        <StyledMenuContact>
            <ul>
                <li>
                    <a href="">
                        <Icon iconId={'github-cont'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'twitter-cont'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'linkedin-cont'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
                    </a>
                </li>
            </ul>
        </StyledMenuContact>
    );
};

const StyledMenuContact = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
`