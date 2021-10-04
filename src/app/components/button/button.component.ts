import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //Bring Input in to access 'props', Output for customized output of reusable components, EventEmitter for custom events

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: string; //accessing the 'prop' of text

  @Input()
  color!: string; //accessing the 'prop' of color

  @Output()
  btnClick = new EventEmitter() //custom output for reusable components, accessed in the html file as a 'prop'

  constructor() { }

  ngOnInit(): void { }

  onClick(){            //The onClick function assigned in the button.component.html file
    this.btnClick.emit()
  }

}
