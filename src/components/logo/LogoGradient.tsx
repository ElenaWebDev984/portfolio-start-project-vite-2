import styled from "styled-components";
// import {Icon} from "../icon/Icon.tsx";



export const MyGradientSVG = () => (
    <GradientSVG xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="japanese-cat" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#E70FAA', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00C0FD', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <rect width="50" height="50" fill="url(#japanese-cat)" />
    </GradientSVG>
);


const GradientSVG = styled.svg`
  width: 50px;
  height: 50px;
`;

// import {Icon} from "../icon/Icon.tsx";
//
//
// export const Logo = () => {
//     return (
//         <a href="">
//             <Icon iconId={'japanese-cat'}/>
//         </a>
//     );
// };