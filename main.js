let head = document.createElement("h2");
head.innerText = "Checking number is armstrong or not";
document.body.appendChild(head);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("placeholder", "Enter any number");
document.body.appendChild(input);
input.style = "padding:10px;"

let btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.setAttribute("onclick", "check()")
btn.innerText = "Check";
document.body.appendChild(btn);
btn.style = "padding:10px; margin-left:12px;"

let div = document.createElement("div");
div.setAttribute("id", "result");
document.body.appendChild(div);
div.style = "padding:20px; font-size:23px; color:green";

function check(){
let numbers = document.getElementById("input").value;
let result = document.getElementById("result");
let temp = numbers;
let temp2 = numbers;
let sum=0;
let i=0;

while(temp2 > 0){
    temp2 = parseInt(temp2/10);
	i++;
}

while(temp > 0){
      n = temp%10;
      sum+=n**i;
      temp = parseInt(temp/10);
}
	  
if(numbers == sum){
     result.innerText = `${numbers} is an armstrong number`;
}
else{
     	 
	 result.innerText = `${numbers} is not an armstrong number`; 
}
};