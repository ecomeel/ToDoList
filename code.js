let gameModel = {
	uploadData () {
		let keys = Object.keys(localStorage);
		for (let i = 0; i < keys.length; i++) {
			let title = keys[i];
			let insertDiv = document.getElementById('tasksList');
			insertDiv.appendChild(view.createDiv(title));
			localStorage.removeItem(keys[i]);
		}
	},

	handelTask () {
		let title = document.getElementById('inputBox__title');
		let note = document.getElementById('inputBox__note');
		view.enterWindow.hideWin();
		let insertDiv = document.getElementById('tasksList');
		insertDiv.appendChild(view.createDiv(title.value, note.value));
		(function(){
			localStorage.setItem(title.value, note.value);
		})();
		title.value = '';
		note.value = '';
	},
}

//	DISPLAY VIEW
let view = {

	enterWindow:  {
		showWin () {
			let wind = document.getElementById('inputBox');
			wind.style = 'z-index: 10';
		},
		hideWin () {
			let wind = document.getElementById('inputBox');
			wind.style = 'z-index: -1';

		}
	},

	createDiv (ttl, nt) {
		let divBox = document.createElement('div');
		let divTitle = document.createElement('div');
		let divNote = document.createElement('div');
		divBox.setAttribute('class', 'TaskBox');
		divNote.setAttribute('class', 'TaskNote');
		divTitle.setAttribute('class', 'TaskTitle');
		divTitle.innerHTML = ttl;
		divNote.innerHTML = nt;
		divBox.appendChild(divNote);
		divBox.appendChild(divTitle);
		return divBox
	}
}

function handleKeyPress (eventObj) {
	let btnSave = document.getElementById('inputBtnNote');
	if (eventObj.keyCode === 13) {
		btnSave.click();
		return false;
	}
}

function init() {
	gameModel.uploadData();
	let addTask = document.getElementById('addTask');
	addTask.onclick = view.enterWindow.showWin;
	let btnSave = document.getElementById('inputBtnSave');
	btnSave.onclick = gameModel.handelTask;
	let btnCancel = document.getElementById('inputBtnCancel');
	btnCancel.onclick = view.enterWindow.hideWin;
	let inputNote = document.getElementById('inputBox__note');
	inputTitle.onkeypress = handleKeyPress;
}

window.onload = init;