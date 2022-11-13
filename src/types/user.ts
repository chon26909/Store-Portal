export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    user_status: string;
}

export enum USER_STATUS {
    ENABLED = 'enabled',
    DISABLED = 'disabled',
    SUSPENDED = 'suspended'
}
