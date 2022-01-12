import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-story',
  templateUrl: './modal-story.component.html',
  styleUrls: ['./modal-story.component.scss']
})
export class ModalStoryComponent implements OnInit {
  showCloseButton=true
  modalText="hello,world!"
  constructor() { }

  ngOnInit(): void {
  }

}
