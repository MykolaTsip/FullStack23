export enum USER_SEX {
    MALE = 'man',
    FEMALE = 'wooman'
}

export interface INavbar {
    name: string;
    ref: string;
    addText?: string;
}

export interface ILocalUser {
    name: string,
    phoneNumber: string | number,
    city: string,
    country: string,
    avatar: string,
    alt: string,
    sex: USER_SEX
}