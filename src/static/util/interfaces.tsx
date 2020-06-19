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
    id: string;
    nickName: string;
    preferredLanguage: string;
    preferredEditorTheme: string;
    avatarUrl: string;
}

export interface IDojoSolution {
    id: number;
    userId: number;
    dojoId: number;
    code: string;
    language: string;
    submissionDate: any;
}

export interface IUserStatistics {
    firstName: string;
    lastName: string;
    email: string;
    completedDojoIds: number[];
    score: number;
    lastCompleted: any;
    userId: string;
    numOfCompletedDojos: number;
}

export interface IDojoStatistics {
    id: number;
    name: string;
    difficulty: number;
    solvedUserIds: string[];
    numOfUsersSolved: number;
    mostFrequentlySolvedInLanguage: { [key: string]: number };
    leastFrequentlySolvedInLanguage: { [key: string]: number };
}
