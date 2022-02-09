export interface IPropsUser {
    id?: number|undefined;
    name: string;
    color?: string;
    pantone_value?: string;
    year: number|null
}
export interface IUser extends IPropsUser{
    id: number
}
export interface IStateUser {
    users: IUser[],
    nextPage: boolean
}
