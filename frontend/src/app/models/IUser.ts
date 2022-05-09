export interface IPropsUser {
    id?: number | undefined;
    fullname: { first: string, last: string }
    email: string
}
export interface IUser extends IPropsUser {
    id: number
}
export interface IStateUser {
    users: IUser[],
    nextPage: boolean
}
