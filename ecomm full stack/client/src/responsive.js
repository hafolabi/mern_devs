import { css } from "styled-components"

export const mobile = (props) => {
    return css `
        @media only screen and (max-width:750px){
            ${props}
        }
    `

};

export const tablet = (props) => {
    return css `
        @media only screen and (min-width:751px) and (max-width:1024px){
            ${props}
        }
    `

}