# CamundaModeler in Angular

The project includes the following features,
* BPMN editor
* Minimap to loacte the BPMN diagram in the canva
* color picker for BPMN components

## Install the following packages

`npm i bpmn-js`
`npm i diagram-js-minimap`
`npm i bpmn-js-color-picker`

## Add the below list of stylesheets and scripts to index.html

 Stylesheets and scripts for modeler<br>
 <link rel="stylesheet" href="https://unpkg.com/bpmn-js@9.0.3/dist/assets/bpmn-js.css"><br>
 <link rel="stylesheet" href="https://unpkg.com/bpmn-js@9.0.3/dist/assets/diagram-js.css"><br>
 <link rel="stylesheet" href="https://unpkg.com/bpmn-js@9.0.3/dist/assets/bpmn-font/css/bpmn.css"><br>
 <script src="https://unpkg.com/bpmn-js@9.0.3/dist/bpmn-modeler.development.js"></script><br>
 <script src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>

  Stylesheets of color picker  
  <link rel="stylesheet" href="https://unpkg.com/bpmn-js/dist/assets/diagram-js.css" />
  <link rel="stylesheet" href="https://unpkg.com/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css" />
  <link rel="stylesheet" href="https://unpkg.com/bpmn-js-color-picker/colors/color-picker.css" />
  
### Add the stylings to style.css file for minimap

.djs-minimap {
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 999;
	overflow: hidden;
	background-color: rgba(255, 255, 255, 0.9);
	border: solid 1px #1a1a1a;
	border-radius: 10px;
	box-sizing: border-box;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
}
.djs-minimap:not(.open) {
	overflow: hidden;
}
.djs-minimap:not(.open) .toggle {
	padding: 5px;
	text-align: center;
}
.djs-minimap:not(.open) .viewport-dom {
	display: none;
}
.djs-minimap .map {
	display: none;
	width: 320px;
	height: 180px;
	cursor: crosshair;
}
.djs-minimap.open .map {
	display: block;
}
.djs-minimap.open .toggle {
	position: absolute;
	right: 0;
	padding: 6px;
	z-index: 1;
}
.djs-minimap.open .overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(255, 255, 255, 0.2);
	pointer-events: none;
}
.djs-minimap .toggle:before {
	content: attr(title);
}
.djs-minimap .viewport {
	fill: none;
	stroke: none;
}
.djs-minimap .viewport-dom {
	position: absolute;
	border: solid 2px orange;
	border-radius: 2px;
	box-sizing: border-box;
	cursor: move;
}
.djs-minimap .cursor-crosshair {
	cursor: crosshair;
}
.djs-minimap .cursor-move {
	cursor: move;
}
