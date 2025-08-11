function editcel(){
    let cel= parseFloat(document.getElementById("cel").value);
    let fehren = (cel * 9/5) + 32;
    let kelvin = cel + 273.15;
    console.log(cel, fehren, kelvin);
    document.getElementById("fehren").value = fehren;
    document.getElementById("kelvin").value = kelvin;
}

document.getElementById("cel").addEventListener("change", editcel);


    
function editfehren(){
    let fehren = parseFloat(document.getElementById("fehren").value);
    let cel= (fehren-32) * 5/9;
    let kelvin = fehren + 459.67 * 5/9;
    console.log(cel, fehren, kelvin);
    document.getElementById("cel").value = cel;
    document.getElementById("kelvin").value = kelvin;
}

document.getElementById("fehren").addEventListener("change", editfehren);


function editkelvin(){
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let cel= kelvin - 273.15;
    let fehren = (kelvin - 273.15) * 9/5 + 32;
    console.log(cel, fehren, kelvin);
    document.getElementById("fehren").value = fehren;
    document.getElementById("cel").value = cel;
}

document.getElementById("kelvin").addEventListener("change", editkelvin);

