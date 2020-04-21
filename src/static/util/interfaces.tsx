export interface IBasicDojoInfo {
    id: number;
    title: string;
    description: string;
    url: string;
}

export interface IBasicUserInfo {
    userName: string;
    name: string;
    profilePicture: string;
    completedDojos: number[];
}
