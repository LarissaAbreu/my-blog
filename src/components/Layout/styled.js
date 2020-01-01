import styled from 'styled-components'

export const LayoutWrapper = styled.section`
    display: flex;
`

export const LayoutMain = styled.main`
    background-color: var(--background);
    min-height: 100vh;
    padding: 0 3.65rem 0 20rem;
    width: 100%;

    body#grid & {
        grid-template-areas: 
        "posts" 
        "pagination";
        
    }

`

