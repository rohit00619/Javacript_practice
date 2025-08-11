/*var inputcolor1=document.getElementById("inputcolor").name;

console.log("inputcolor1")
*/
 function changecolorfn1(){
    document.getElementById ('div1').style.backgroundColor="purple";
 }
/*
 function changecolorfn(){
    var inp=document.getElementById("inputcolor");
    console.log(inp);
 }


var inpc= document.getElementById('inputcolor');
var btn1= document.getElementById('changecolorbtn');
var out1= document.getElementById('output');

function updatep(){
    console.log(inpc);

}

btn1.addEventListener('input',updatep());


function change_color(){
    console.log(this.id)
}

document.getElementsByTagName('h1').addEventListener('click',change_color());
*/

function updatetip(){
    const bill1=parseFloat(document.getElementById('bill').value);
    const tipp1=parseFloat(document.getElementById('tipp').value);

    let totbill=bill1+(bill1*tipp1/100)
    document.getElementById("demo").innerText="Hi You have to pay" + totbill + "Amount.";
}

document.getElementById("subbtn").addEventListener('click',updatetip);

/*
document.getElementById("subbtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
  */