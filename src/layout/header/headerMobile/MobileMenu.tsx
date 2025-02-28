import styled, {css} from "styled-components";
import {LinkNav} from "../../../components/LinkNav.tsx";
import {theme} from "../../../styles/Theme.tsx";



export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`


const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: rgba(215,220,218,0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`


const BurgerButton  = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.secondaryBgc};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.secondaryBgc};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.secondaryBgc};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
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
