

///**********LOGIC FUNCTION************* */
    function logicCheck(){
        var side1 = parseInt(document.getElementById("plot1").value);
        var side2 =parseInt(document.getElementById("plot2").value);
        var side3 = parseInt(document.getElementById("plot3").value);
        
    if(side1==side2 && side2==side3) 
    {
        /* If all sides are equal */
       alert("Equilateral triangle.");
    }
    else if(side1==side2 || side1==side3 || side2==side3) 
    {
        /* If any two sides are equal */
      alert("Isosceles triangle.");
    }
    else 
    {
        /* If none sides are equal */
       alert("Scalene triangle.");
    }
}
/////////**************ADD NAME FUNCTION****************** */
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Hello " + array[x]);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Nickname " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("next").innerHTML = e;
}
