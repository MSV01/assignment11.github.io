function  sq (){
    var square =document.getElementById("square")
    console.log(square);
    square.style.height = '200px'
    square.style.width = '400px'
}
function cl (){
    var circle = document.getElementById("circle")
    console.log(circle);
    circle.style.borderRadius = '50%';
}
function tri(){
    var triangle = document.getElementById("triangle")
    console.log(triangle)
    triangle.style.width ='0px';
    triangle.style.height ='0px';
    triangle.style.backgroundColor ='burlywood'; 
    triangle.style.borderLeft ='150px solid transparent';
    triangle.style.borderRight ='150px solid transparent';
    triangle.style.borderBottom ='250px solid #000';
}