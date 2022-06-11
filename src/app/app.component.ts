import { Component, ElementRef, ViewChild } from '@angular/core';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import minimapModule from 'diagram-js-minimap';
import BpmnColorPickerModule from 'bpmn-js-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'camunda-modeler';

  private bpmnJS: BpmnJS

  private diagram: any

  @ViewChild('ref', { static: true }) private el: ElementRef;
  constructor(){
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

  zoomIn() {
    this.bpmnJS.get('zoomScroll').stepZoom(1);
  }

  zoomOut() {
    this.bpmnJS.get('zoomScroll').stepZoom(-1);
  }
}
