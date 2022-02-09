export interface ITodo {
    id: number,
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
