export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("dta-user-state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("dta-user-state", serializedState);
    } catch (err) {
        console.log(err);
    }
};
