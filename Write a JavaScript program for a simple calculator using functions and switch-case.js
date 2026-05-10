<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Creative Calculator</title>

<style>
body{
margin:0;
padding:0;
font-family:Arial, sans-serif;
background:linear-gradient(to right,#141e30,#243b55);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
}

.calculator{
background:white;
padding:35px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.4);
text-align:center;
width:380px;
}

h1{
color:#333;
margin-bottom:20px;
}

input,select,button{
width:90%;
padding:12px;
margin:8px 0;
border-radius:10px;
border:1px solid #ccc;
font-size:16px;
}

button{
background:#4facfe;
color:white;
border:none;
cursor:pointer;
font-weight:bold;
transition:0.3s;
}

button:hover{
background:#00c6ff;
transform:scale(1.05);
}

#result{
margin-top:20px;
color:#222;
background:#f1f1f1;
padding:12px;
border-radius:10px;
}
</style>

<script>
function calculate(){

var num1=parseFloat(document.getElementById("num1").value);
var num2=parseFloat(document.getElementById("num2").value);
var operator=document.getElementById("operator").value;
var result;

switch(operator){

case "+":
result=num1+num2;
break;

case "-":
result=num1-num2;
break;

case "*":
result=num1*num2;
break;

case "/":
if(num2!=0)
result=num1/num2;
else
result="Division by zero not allowed";
break;

case "%":
result=num1%num2;
break;

case "^":
result=num1**num2;
break;

default:
result="Invalid Operator";
}

document.getElementById("result").innerHTML="✨ Result: "+result;
}
</script>

</head>

<body>

<div class="calculator">

<h1>🧮 Smart Calculator</h1>

<input type="number" id="num1" placeholder="Enter First Number">

<input type="number" id="num2" placeholder="Enter Second Number">

<select id="operator">
<option value="+">Addition (+)</option>
<option value="-">Subtraction (-)</option>
<option value="*">Multiplication (*)</option>
<option value="/">Division (/)</option>
<option value="%">Modulus (%)</option>
<option value="^">Power (^)</option>
</select>

<button onclick="calculate()">Calculate</button>

<h2 id="result">Result will appear here</h2>

</div>

</body>
</html>
