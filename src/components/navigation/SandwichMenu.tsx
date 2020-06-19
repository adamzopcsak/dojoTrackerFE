import React from "react";
import BurgerMenu from "../styled-components/BurgerMenu";

interface Props {}

const SandwichMenu = (props: Props) => {
    const toggleMenu = () => {
        document.querySelector(".burger-menu")?.classList.toggle("is-opened");
        document.querySelector(".mobile-nav")?.classList.toggle("is-visible");
    };

    return (
        <BurgerMenu>
            <i className="burger-menu" data-text="Menu" onClick={() => toggleMenu()} id={"burger-menu"}>
                <span className="burger"></span>
            </i>
        </BurgerMenu>
    );
};

export default SandwichMenu;
