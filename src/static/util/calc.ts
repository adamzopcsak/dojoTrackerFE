export const convertRatioToPercent = (number: number): number => {
    return roundFloat(number * 100);
};

export const capitalize = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const roundFloat = (number: number) => {
    return Math.round((number + Number.EPSILON) * 10) / 10;
};
