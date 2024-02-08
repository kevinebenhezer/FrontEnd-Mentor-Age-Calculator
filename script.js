// Get Form Data
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var form = document.getElementById("form");
var submit = document.getElementById("submit");

// Result Field
var yearsResult = document.getElementById("years-result");
var monthsResult = document.getElementById("months-result");
var daysResult = document.getElementById("days-result");

// Error div
var dayError = document.getElementById("day-error");
var monthError = document.getElementById("month-error");
var yearError = document.getElementById("year-error");

// Date
const date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

const totalMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// function
form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (day.value > currentDay) {
		currentDay = currentDay + totalMonth[currentMonth - 1];
		currentMonth = currentMonth - 1;
	}

	if (month.value > currentMonth) {
		currentMonth = currentMonth + 12;
		currentYear = currentYear - 1;
	}
	errors();

	yearsResult.innerHTML = currentYear - year.value;
	monthsResult.innerHTML = currentMonth - month.value;
	daysResult.innerHTML = currentDay - day.value;
});

var dayInput = document.getElementById("day-input");
var monthInput = document.getElementById("month-input");
var yearInput = document.getElementById("year-input");

function errors() {
	//Day error
	if (day.value == "") {
		dayError.innerHTML = "This field is required";
		day.style.borderColor = "hsl(0, 100%, 77%)";
		dayInput.style.color = "hsl(0, 100%, 67%)";
	} else if (day.value > 31) {
		dayError.innerHTML = "Must be a valid day";
		day.style.borderColor = "hsl(0, 100%, 77%)";
		dayInput.style.color = "hsl(0, 100%, 67%)";
	}

	//Month error
	if (month.value == "") {
		monthError.innerHTML = "This field is required";
		month.style.borderColor = "hsl(0, 100%, 77%)";
		monthInput.style.color = "hsl(0, 100%, 67%)";
	} else if (month.value > 12) {
		monthError.innerHTML = "Must be a valid month";
		month.style.borderColor = "hsl(0, 100%, 77%)";
		monthInput.style.color = "hsl(0, 100%, 67%)";
	}

	//Year error
	if (year.value == "") {
		yearError.innerHTML = "This field is required";
		year.style.borderColor = "hsl(0, 100%, 77%)";
		yearInput.style.color = "hsl(0, 100%, 67%)";
		e.preventDefault();
	} else if (year.value > currentYear) {
		yearError.innerHTML = "Must be in the past";
		year.style.borderColor = "hsl(0, 100%, 77%)";
		yearInput.style.color = "hsl(0, 100%, 67%)";
	}
}
