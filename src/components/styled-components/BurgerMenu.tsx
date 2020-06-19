import styled from "styled-components";

const BurgerMenu = styled.div`
    position: relative;

    & i {
        display: inline-block;
        vertical-align: middle;
        box-sizing: content-box;
        cursor: pointer;
        margin: 0;
        padding: 0;
        border: 0;
        text-align: right;
        color: #333;

        &::before {
            font-size: 0.6rem;
            font-weight: bold;
            font-style: normal;
            line-height: 1rem;
            display: inline-block;
            padding-right: 0.4rem;
            content: attr(data-text);
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            color: #333;
        }
    }

    & .burger {
        position: relative;
        margin: 7px 0;
        display: inline-block;
        vertical-align: middle;
    }

    & .burger,
    & .burger::after,
    & .burger::before {
        content: "";
        background-color: #333;
        width: 1.5rem;
        height: 0.15rem;
        transition: transform 0.5s, opacity 0.5s, background-color 0.5s;
    }

    & .burger::before,
    & .burger::after {
        position: absolute;
        display: block;
    }

    & .burger::before {
        top: -7px;
    }

    & .burger::after {
        bottom: -7px;
    }

    & i.is-opened {
        z-index: 950;
    }

    & i.is-opened .burger {
        background-color: white !important;

        &::before {
            transform: translateY(7px) translateX(0) rotate(45deg);
        }
        &::after {
            transform: translateY(-7px) translateX(0) rotate(-45deg);
        }
    }

    @media (min-width: 1280px) {
        display: none;
    }
`;

export default BurgerMenu;
