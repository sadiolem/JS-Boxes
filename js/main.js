const startButton = document.querySelector('.start-btn');
const boxes = document.querySelectorAll('.box');
const textarea = document.querySelector('textarea');

const animateBoxes = () => {
	startButton.removeEventListener('click', animateBoxes);

	startButton.textContent = "in progress...";
	textarea.textContent = "--PROGRESS START--" +'\n';

	boxes.forEach((box, index) => {
		setTimeout(() => {	
			box.classList.toggle('box-down');
		}, index * 500);
		
		box.addEventListener("transitionstart", () => {
 			textarea.textContent += `Box ${index+1} animation start +'\n'`;
 		});
		
 		box.addEventListener("transitionend", () => {
 			textarea.textContent += `Box ${index+1} animation end +'\n'`;
 		});
	});

	let time1 = boxes.length * 650;
	let time2 = time1 + 600;

	setTimeout(() => {
 		textarea.textContent += "--PROGRESS END--";
 	}, time1);

 	setTimeout(() => {
		alert('Success!');
		location.reload();
	}, time2);
}

startButton.addEventListener('click', animateBoxes);
