function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}




const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})






const filename = document.getElementById('filename');

function fileHandle(value) {
	if(value === 'new') {
		content.innerHTML = '';
		filename.value = 'untitled';
	} else if(value === 'txt') {
		const blob = new Blob([content.innerText])
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a');
		link.href = url;
		link.download = `${filename.value}.txt`;
		link.click();
	} else if(value === 'pdf') {
		html2pdf(content).save(filename.value);
	}
}

function clearContent() {
    document.getElementById('content').innerHTML = ""; // Clear the content of the editable div
  }

function importImage(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        var img = document.createElement('img');
        img.src = reader.result;
        document.getElementById('content').appendChild(img);
    };
    reader.readAsDataURL(file);
  }
  
function convert(content){
    const parser = new DOMParser();
    const html = parser.parseFromString(content, 'text/html');
    return html.body;
}
console.log(body);

