/**
 * archive.md
 */

// Toggle Display (none <-> block)
var x = document.getElementsByClassName("Text");
var y = document.getElementsByClassName("Selection");
var z = document.getElementsByClassName("Single-Container");

for (var i = 0, len = x.length; i < len; i++)
{
    (function(index){
        z[i].onclick = function(){

            if (x[index].style.display === "none")
            {
                x[index].style.display = "flex";
                y[index].style.display = "none";
            }

            else
            {
                x[index].style.display = "none";
                y[index].style.display = "flex";
            }

        }

    })(i);

}