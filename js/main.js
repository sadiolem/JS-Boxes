// Создание переменных
var button = document.querySelector('button');
var boxes = document.querySelectorAll('.box');
var textarea = document.querySelector('textarea');

// Слушатель события click на кнопку Start, запускает функцию Action
button.addEventListener('click', Action);

function Action() {
	// Убирает слушатель события click на кнопку Start
	button.removeEventListener('click', Action);

	// Меняет текст кнопки Start на "in progress", начинает список с сообщения "PROGRESS START"
	button.textContent = "in progress...";
	textarea.textContent = "--PROGRESS START--" +'\n';

	// Переключает класс каждому box; создает список событий start/end
	boxes.forEach(function(box, index) {
		// Переключение класса с задержкой
		setTimeout(function() {	
			box.classList.toggle('box-down');
		}, index * 500);

		// Формирование списка
		box.addEventListener("transitionstart", function() {
 			textarea.textContent += "Box " + [index+1] + " animation start" +'\n';
 		});
 		box.addEventListener("transitionend", function() {
 			textarea.textContent += "Box " + [index+1] + " animation end" +'\n';
 		});
	});

	// Время для setTimeOut относительно количества элементов box
	var time1 = boxes.length * 650;
	var time2 = time1 + 600;

	// Заканчивает список сообщением "PROGRESS END"
	setTimeout(function() {
 		textarea.textContent += "--PROGRESS END--";
 	}, time1);

	// Показывает alert, возвращает button и box в исходное состояние, очищает текстовое поле и обновляет страницу
 	setTimeout(function() {
		alert('Success!');

		button.textContent = "Start";
		
		boxes.forEach(function(box) {
			box.classList.toggle('box-down');
		});

		textarea.textContent = "";

		button.addEventListener('click', Action);

		location.reload();
	}, time2);
};