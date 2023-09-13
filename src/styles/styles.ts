import styled from 'styled-components';
import "../styles/_variables.scss";

export const theme = {
    primary: "hsl(180, 29%, 50%)",
    main: "hsl(180, 31%, 95%)",
    secondary: "hsl(180, 14%, 20%)",
    gray: "hsl(180, 8%, 52%)"
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
    min-height: 85vh;
    background-color: ${props => props.theme.main};
    position: relative;
`
export const Container = styled.div`
    width: 80vw;
    max-width: 1200px;
    margin: 0 auto;
`
export const Card = styled.div`
    padding: 2rem 1rem 1rem;
    background: #fff;
    position: relative;
    border-radius: 10px;
    border-left: 4px solid ${props => props.theme.primary};
    margin-bottom: 2.6rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (min-width: 1440px) {
        padding: 1.4rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        position: absolute;
        top: -25px;
        left: 15px;
        width: 50px;
        height: 50px;
    
        @media (min-width: 1440px) {
            position: static;
            width: 80px;
            height: 80px;
        }
    }

    .card-top {
        padding-bottom: 1rem;
        border-bottom: 1px solid lightgray;

        @media (min-width: 1440px) {
            border: none;
            padding-bottom: 0;
            display: flex;
        }

        .title {
            display: flex;
            align-items: center;

            h4 {
                color: ${props => props.theme.primary};
            }
            
            span {
                padding:.3rem;
                height: 18px;
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

            li:not(:first-child) {
                list-style: disc;
                margin-left: 1.6rem;

                @media (min-width: 1440px) {
                    font-size: 16px;
                }
            }

            li {
                color: ${props => props.theme.gray};
                font-size: 14px;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            @media (min-width: 1440px) {
                margin-left: 2rem;
            }

            h4:nth-child(2) {
                margin: 10px 0;
                font-size: 14px;

                &:hover {
                    color: ${props => props.theme.primary};
                    cursor: pointer;
                }

                @media (min-width: 1440px) {
                    font-size: 20px;
                }
            }
        }
    }

    .card-bottom {
        margin-top: 1rem;
        display: flex;

        @media (min-width: 1440px) {
            margin-top: 0;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            align-self: flex-end;

            li {
                background: ${props => props.theme.main};
                color: ${props => props.theme.primary};
                font-size: 14px;
                padding: 6px;
                font-weight: 600;
                border-radius: 2px;
                flex: 0;
                text-align: center;
                margin: 8px 12px 8px 0;

                &:hover {
                    background-color: ${props => props.theme.primary};
                    color: ${props => props.theme.main};
                }
            }
        }
    }
`
export const FilterBox = styled.div`
    padding: 1rem 2rem;
    background: #fff;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    position: absolute;
    border-radius: 8px;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    ul {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        align-self: flex-end;

        li {
            display: flex;
            align-items: center;
            margin: 8px 12px 8px 0; 
            font-size: 14px;
                       
            div {
                background: ${props => props.theme.main};
                color: ${props => props.theme.primary};
                padding: 6px;
                font-weight: 600;
                flex: 0;
                text-align: center;
                border-radius: 3px 0 0 3px;
                height: 28px;
                display: flex;
                align-items: center;
            }

            button {
                display: flex;
                align-items: center;
                padding: 7px 6px;
                border-radius: 0 3px 3px 0;
                background-color: ${props => props.theme.primary};

                &:hover {
                    background-color: ${props => props.theme.secondary};
                }
            }
        }
    }
`

export const ClearButton = styled.button`
    color: ${props => props.theme.gray};
    font-weight: 700;
    font-size: 14px;

    &:hover {
        color: ${props => props.theme.primary};
        text-decoration: underline ${props => props.theme.primary};
    }
`