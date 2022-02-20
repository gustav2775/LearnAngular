import { environment } from '../../../environments/environment';
import { BaseApi } from './myBaseApi.service';
import { Inject, Injectable } from '@angular/core';
import { IUser, IStateUser, IPropsUser } from '../../interfaces/IUser';

const ENV_USER_URL: string = environment.ENV.localhost + '/api/user/';

@Injectable({ providedIn: 'root' })
export class UsersService {
    private pagination_number: number = 1;
    private page_size: number = 6;
    private state: IStateUser = {
        users: [],
        nextPage: false,
    }
    get getUsers(): IStateUser {
        return this.state;
    }
    get nextPage(): IStateUser {
        this.pagination_number++;
        this.init();
        return this.state;
    }
    constructor(@Inject('myBaseApi') private api: BaseApi) { }
    getById = async (id: number): Promise<IUser> => {
        const user = this.state.users.find(user => user.id === id);
        if (user) {
            return user;
        } else {
            return await this.api.get(ENV_USER_URL, { id: id })
                .then(data => data.result);
        }
    }
    init = (): void => {
        this.api.get(ENV_USER_URL, { page_size: this.page_size, page: this.pagination_number })
            .then(data => {
                this.state.users = [...this.state.users, ...data.results];
                this.state.nextPage = data.next_page;
            })
    }
    add = async (props: IPropsUser) => {
        return await this.api.post(ENV_USER_URL, props)
            .then(data => {
                if (data) {
                    const user = data.result as IUser
                    this.state.users = [...this.state.users, user];
                }
            })
            .catch(err => new Error(err));
    }
    delete = async (user: IUser) => {
        await this.api.delete(ENV_USER_URL, { id: user.id })
            .then(() => {
                const index = this.state.users.indexOf(user);
                this.state.users.splice(index, 1);
            });
    }
    update = async (user: IUser, values: any) => {
        await this.api.put(ENV_USER_URL, { id: user.id, values: values })
            .then((data) => {
                const index = this.state.users.indexOf(user);
                this.state.users.splice(index, 1, data.result);
            })
            .catch(err => new Error(err));
    }
}
