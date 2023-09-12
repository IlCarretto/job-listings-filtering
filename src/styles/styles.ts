import styled from 'styled-components';
import "../styles/_variables.scss";

export const theme = {
    primary: "hsl(180, 29%, 50%)",
    main: "hsl(180, 31%, 95%)",
    secondary: "hsl(180, 14%, 20%)"
}

export const Header = styled.header`
    height: 15vh;
    background-image: url(bg-header-mobile.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.theme.primary};

    @media (min-width: 1440px) {
        background-image: url(bg-header-desktop.svg);
    }
`
export const Main = styled.main`
    padding: 3rem 0;
    height: 85vh;
    background-color: ${props => props.theme.main};
`
export const Container = styled.div`
    width: 80vw;
    max-width: 1200px;
    margin: 0 auto;
`
export const Card = styled.div`
    padding: 2rem 1rem;
    background: #fff;
    position: relative;
    border-radius: 10px;
    border-left: 4px solid ${props => props.theme.primary};
    margin-bottom: 2.6rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    img {
        position: absolute;
        top: -25px;
        left: 15px;
        width: 50px;
        height: 50px;
    }

    .card-top {

        .title {
            display: flex;
            align-items: center;

            h4 {
                color: ${props => props.theme.primary}
            }
            
            span {
                padding: .2rem .4rem;
                border-radius: 16px;
                text-transform: uppercase;
                color: #fff;
                font-size: 12px;
                font-weight: 500;
    
                &.new {
                    background: ${props => props.theme.primary};
                }
    
                &.featured {
                    background: ${props => props.theme.secondary};
                }
            }
            *:not(:first-child) {
                margin-left: 8px;
            }
        }

        ul {
            display: flex;
        }

        > h4 {
            margin-top: 10px;
        }
    }
`