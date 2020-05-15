import styled from "styled-components";

export const CustomSelect = styled.div`
    position: relative;
    width: 350px;

    & select {
        position: relative;
        font-family: inherit;
        background-color: transparent;
        width: 350px;
        padding: 10px 10px 10px 0;
        font-size: 18px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    /* Remove focus */
    & select:focus {
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
    }

    /* Use custom arrow */
    &,
    & select {
        appearance: none;
        -webkit-appearance: none;
    }

    &:after {
        position: absolute;
        top: 18px;
        right: 10px;
        /* Styling the down arrow */
        width: 0;
        height: 0;
        padding: 0;
        content: "";
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.12);
        pointer-events: none;
    }

    /* LABEL ======================================= */
    & label {
        color: rgba(0, 0, 0, 0.26);
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 0;
        top: 10px;
        transition: 0.2s ease all;
    }

    /* active state */
    & select:focus ~ & label,
    & select:valid ~ & label {
        color: #2f80ed;
        top: -20px;
        transition: 0.2s ease all;
        font-size: 14px;
    }

    /* BOTTOM BARS ================================= */
    .select-bar {
        position: relative;
        display: block;
        width: 350px;
    }

    & .select-bar:before,
    & .select-bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #2f80ed;
        transition: 0.2s ease all;
    }

    & .select-bar:before {
        left: 50%;
    }

    & .select-bar:after {
        right: 50%;
    }

    /* active state */
    & select:focus ~ & .select-bar:before,
    & select:focus ~ & .select-bar:after {
        width: 50%;
    }

    /* HIGHLIGHTER ================================== */
    &.select-highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }
`;
