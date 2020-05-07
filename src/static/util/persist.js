export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("dta-login-state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState).isLoggedIn;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify({ isLoggedIn: state });
        localStorage.setItem("dta-login-state", serializedState);
    } catch (err) {
        console.log(err);
    }
};
