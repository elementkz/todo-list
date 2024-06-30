function note_template(id, content, timestamp) {
	this.id = id;
	this.content = content;
	this.timestamp = timestamp;
}
let locale = 'en-us'
let list = [];

let id = 1;
function get_id() {
	let temp = id;
	id++;
	return temp;
}

function add_item() {
	let input = document.getElementById("new-todo").value;
	if (input != "") {
		let id = get_id()
		let note  = new note_template(id, input, Date.now());
		
		list.push(note);
		document.getElementById("new-todo").value = "";

		let nt = document.createElement('div');

		let nt_date = document.createElement('p');
		nt_date.appendChild(document.createTextNode(new Date(note.timestamp).toLocaleString(locale)));

		let nt_content = document.createElement('p');
		nt_content.appendChild(document.createTextNode(note.content));

		nt.append(nt_date, nt_content);
		document.querySelector('.body .notes').appendChild(nt);
		nt.setAttribute('id', note.id);
		// document.querySelector('notes').appendChild(nt);
	}

}
