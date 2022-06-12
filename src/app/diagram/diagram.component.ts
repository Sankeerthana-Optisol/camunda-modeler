import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import minimapModule from 'diagram-js-minimap';
import BpmnColorPickerModule from 'bpmn-js-color-picker';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  private bpmnJS: BpmnJS

  private diagram: any

  @ViewChild('ref', { static: true }) private el: ElementRef;

  constructor(private route: Router, private appService: AppService){
    this.bpmnJS = new BpmnJS({
      additionalModules: [
        minimapModule,
        BpmnColorPickerModule
      ]
    })
  }

  ngOnInit(): void{
    fetch('../assets/template.bpmn')
      .then(response => response.text()) 
      .then(xml => {
          this.bpmnJS.importXML(xml)
      });
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  viewXML(){    
    this.bpmnJS.saveXML().then(xml=>{      
     this.appService.setXML(xml.xml)
    })  
    this.route.navigate(['/xmlViewer']);
  }

  zoomIn() {
    this.bpmnJS.get('zoomScroll').stepZoom(1);
  }

  zoomOut() {
    this.bpmnJS.get('zoomScroll').stepZoom(-1);
  }

}
