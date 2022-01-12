import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  open=false
  showCloseButton=true
  email:string;
  color="white"
  
  constructor(private router: Router){}
   ngOnInit() {}

   btnClick= function () {
    this.router.navigateByUrl('/unity');
   }
}