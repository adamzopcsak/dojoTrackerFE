export const normalizeDate = (date: string): Date | null => {
    return date === null ? null : new Date(Date.parse(date));
};

export const stringifiedDate = (date: Date): string => {
    return date === null
        ? "None"
        : date.getFullYear() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getUTCDate() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes();
};
