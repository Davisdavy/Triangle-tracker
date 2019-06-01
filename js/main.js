


    function logicCheck(){
        var side1 = parseInt(document.getElementById("plot1").value);
        var side2 =parseInt(document.getElementById("plot2").value);
        var side3 = parseInt(document.getElementById("plot3").value);
        
    if(side1==side2 && side2==side3) 
    {
        /* If all sides are equal */
       var element = document.getElementById("Result");
       element.innerHTML="Equilateral triangle.";
    }
    else if(side1==side2 || side1==side3 || side2==side3) 
    {
        /* If any two sides are equal */
       var element= document.getElementById("Result");
       element.innerHTML="Isosceles triangle.";
    }
    else 
    {
        /* If none sides are equal */
       var element= document.getElementById("Result");
       element.innerHTML="Scalene triangle.";
    }
}