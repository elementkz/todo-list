function note_template(id, content, timestamp) {
	this.id = id;
	this.content = content;
	this.timestamp = timestamp;
}

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
		list.push(new note_template(get_id(), input, Date.now()));
		document.getElementById("new-todo").value = "";
	}

	console.log(list);
}
