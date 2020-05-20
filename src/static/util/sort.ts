export const sortAscByValue = (value: any) => (a: any, b: any) =>
    a[value] === b[value] ? 0 : a[value] < b[value] ? -1 : 1;

export const sortDescByValue = (value: any) => (a: any, b: any) =>
    a[value] === b[value] ? 0 : a[value] < b[value] ? 1 : -1;
