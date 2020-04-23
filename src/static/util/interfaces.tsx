export interface IBasicDojoInfo {
    id: number;
    title: string;
    description: string;
    difficulty: number;
    url: string;
    isDone: boolean;
}

export interface IBasicUserInfo {
    email: string;
    firstName: string;
    lastName: string;
    id: number;
    rank: number;
}

export interface IDojoSolution {
    userId: number;
    dojoId: number;
    code: string;
    language: string;
}
