import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-xmlviewer',
  templateUrl: './xmlviewer.component.html',
  styleUrls: ['./xmlviewer.component.css']
})
export class XMLviewerComponent implements OnInit {

  public xml: string

  constructor(private route: Router, private appService: AppService) { }

  ngOnInit(): void {    
    this.xml = this.appService.getXMl()
    
    if(this.xml == undefined)
      this.xml = 'Navigate to diagram page to create a workflow'
  }
  viewDiagram(){
    this.route.navigate(['']);
  }

}
