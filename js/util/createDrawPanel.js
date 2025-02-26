import { toolbarData } from './toolbarData.js';


const drawingPanel = document.querySelector('.drawing-toolbar');

createTool(toolbarData)

export default function drawingPanelAddTools() {
	toolbarData.forEach(el => {
		let nodeElem = createTool(el);
		drawingPanel.appendChild(nodeElem)
		// drawingPanel.appendChildren(nodeElem);
	})
}

function createTool(obj) {
	let innerObj = {...obj.type};
	const nodeName = innerObj.elemname;
	const dataName = (Object.keys(innerObj)[1]);
	const dataFild = innerObj[dataName];
	let elem = document.createElement(nodeName);
	elem.dataset[dataName] = dataFild;
	elem.textContent = `${obj.name} ${dataFild}`
	return elem;
}