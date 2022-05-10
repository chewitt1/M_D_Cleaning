
let service = false;
let elem = document.getElementById('services-dropdown');
const bottom = document.querySelector('.main-header').offsetHeight;
var quizData = "";

function showServices(){
	if(service == false){
		console.log(bottom);
		elem.style.top =  bottom + "px";
		elem.style.transition = "all 0.3s";
		elem.style.display= "grid";
		elem.style.gridTemplateColumns = "50% 50%";
		elem.style.boxShadow= "0 4px 6px 0 rgba(34, 60, 80, .16)";

		service = true;
	}
	else if(service == true){
		console.log(bottom);
		elem.style.bottom = "0px";
		elem.style.display= "none";
		service = false;
	}
}


function page(){
	let zero = document.getElementById('page-zero');
	let one = document.getElementById('page-one');
	let two = document.getElementById('page-two');
	let three = document.getElementById('page-three');
	let four = document.getElementById('page-four');

	if(arguments[0] == 0){
		console.log("back");
		zero.style.display = "block"
		one.style.display = "none";
		two.style.display = "none";
		three.style.display = "none";
		four.style.display = "none";
	}

	else if(arguments[0] == 1){
		zero.style.display = "none";
		one.style.display = "block";
		two.style.display = "none";
		three.style.display = "none";
		four.style.display = "none";
	}
	else if(arguments[0] == 2){
		zero.style.display = "none";
		one.style.display = "none";
		two.style.display = "block";
		three.style.display = "none";
		four.style.display = "none";
	}
	else if(arguments[0] == 3){
		zero.style.display = "none";
		one.style.display = "none";
		two.style.display = "none";
		three.style.display = "block";
		four.style.display = "none";
	}

	else if(arguments[0] == 4){
		zero.style.display = "none";
		one.style.display = "none";
		two.style.display = "none";
		three.style.display = "none";
		four.style.display = "block";
	}
}

function quizClick(){
	let sbox1 = document.getElementById('service-type-box1');
	let sbox2 = document.getElementById('service-type-box2');
	if(arguments[0] == 1){ 
		if(arguments[1] == 1){
			sbox1.style.backgroundColor = "#82bab6";
			sbox1.style.borderColor = "#82bab6";
			sbox1.style.color = "white";
			sbox2.style.backgroundColor = "white";
			sbox2.style.borderColor = "#DFDEDC";
			sbox2.style.color = "black";
			sbox2.style.hover
		}
		else if (arguments[1] == 2){
			sbox2.style.backgroundColor = "#82bab6";
			sbox2.style.borderColor = "#82bab6";
			sbox2.style.color = "white";
			sbox1.style.backgroundColor = "white";
			sbox1.style.borderColor = "#DFDEDC";
			sbox1.style.color = "black";
		}
	}
}
function quiz(){
	quizClick.apply(null, arguments);
	if(arguments[0] == 1){
		if(arguments[1] == 1){
			quizData = "Service: Residential Clean";
		}
		else if(arguments[1] == 2){
			quizData = "Service: Commercial Clean";
		}
		console.log(quizData);
	}
}