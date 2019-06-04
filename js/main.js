const button = document.querySelector('button');
const boxes = document.querySelectorAll('.box');
const textarea = document.querySelector('textarea');

button.addEventListener('click', Action);

function Action() {
	button.removeEventListener('click', Action);

	button.textContent = "in progress...";
	textarea.textContent = "--PROGRESS START--" +'\n';

	boxes.forEach(function(box, index) {
		setTimeout(function() {	
			box.classList.toggle('box-down');
		}, index * 500);
		box.addEventListener("transitionstart", function() {
 			textarea.textContent += "Box " + [index+1] + " animation start" +'\n';
 		});
 		box.addEventListener("transitionend", function() {
 			textarea.textContent += "Box " + [index+1] + " animation end" +'\n';
 		});
	});

	let time1 = boxes.length * 650;
	let time2 = time1 + 600;

	setTimeout(function() {
 		textarea.textContent += "--PROGRESS END--";
 	}, time1);

 	setTimeout(function() {
		alert('Success!');
		location.reload();
	}, time2);
};
