export interface IBasicDojoInfo {
    id: number;
    title: string;
    description: string;
    difficulty: number;
    url: string;
    isDone: boolean;
}

export interface IBasicUserInfo {
    userName: string;
    name: string;
    profilePicture: string;
    completedDojos: number[];
}
