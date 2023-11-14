import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit  {

  ngOnInit(): void {
   console.log(this.user());
  }

  private authServices = inject ( AuthService );


  public user = computed(() =>{
    this.authServices.currentUser();
  } );

  onLogout() {
    
    this.authServices.logout();
    }
  

  // get user(){
  //   return this.authServices.currentUser();
  // }

}
