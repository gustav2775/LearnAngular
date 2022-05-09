export interface ITodo extends IValuesNewTodo{
    id: number|null|string,
    title: string,
    description: string,
    date?: Date,
    status: boolean
}
export interface IValuesNewTodo {
    title?:string;
    description?:string;
    status?: boolean
  }
