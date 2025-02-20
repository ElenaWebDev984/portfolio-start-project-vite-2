import styled from "styled-components";


export const MenuProject = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenuProject>
            <ul>
                {props.menuItems.map((item: string, index) => {
                    return <li key={index}>
                        <span>{item}</span>
                    </li>
                })}
            </ul>
        </StyledMenuProject>
    );
};


const StyledMenuProject = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
`