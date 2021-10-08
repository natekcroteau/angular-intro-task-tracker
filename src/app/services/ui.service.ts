import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();



  constructor() { }

  toggleAddTask(): void{                   //void = function not returning anything
    this.showAddTask = !this.showAddTask;   //set showAddTask variable to the opposite boolean of current
    this.subject.next(this.showAddTask);    //set the subject to the current boolean value of showAddTask
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }


}
