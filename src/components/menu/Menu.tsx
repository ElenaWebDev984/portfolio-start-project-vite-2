import styled from "styled-components";
import {LinkNav} from "../LinkNav.tsx";
import {theme} from "../../styles/Theme.tsx";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index) => {
                    return <ListItem key={index}>
                        <LinkNav href="" >
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </LinkNav>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`


const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`


const ListItem = styled.li`
    position: relative;

    ${LinkNav} {
        color: ${theme.colors.fonsPrimary.textSection}
    }


    &:hover {
        ${LinkNav} {
            color: transparent;
        }

        ${Mask} {
            color: ${theme.colors.accentText};
            //TODO how to change color for linearGradientText???
            transform: skewX(12deg) translateX(5px);

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

        &::before {
            content: '';
            display: inline-block;
            height: 2px;
            background-color: ${theme.colors.accentText2};

            position: absolute;
            top: 50%;
            left: -10px;
            right: -10px;
            z-index: 1;
        }
    }
`
