export interface ITodo {
    id: number|null,
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
