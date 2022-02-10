import { UsersService } from '../../core/servises/myUsers.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailPage implements OnInit {
  id?: number;
  email?: number;
  userName?:string;
  constructor(private route: ActivatedRoute,@Inject('myUsers') private myUsers:UsersService) {
    route.params.subscribe(params => this.id = Number(params['userId']));
    route.queryParams.subscribe(params => this.email = params['email']);
  }
  ngOnInit() {
    if(this.id){
      this.myUsers.getById(this.id)
        .then(data=>{
          this.userName = data.fullname.last;
        })
    }
  }
}
