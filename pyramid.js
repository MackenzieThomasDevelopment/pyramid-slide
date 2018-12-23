
drawPyramid(8);// so the page starts at height of 8


var range = document.getElementById("height");
range.addEventListener("change", function(event) {
  displayRange();
  determineHeightAndThenDrawPyramid();
});

var selection = document.getElementById("char");
  selection.addEventListener("change", function(event) {
  determineHeightAndThenDrawPyramid();
});

function displayRange() {
    var para = document.getElementById("current");
    para.innerHTML = document.getElementById("height").value;
  }


function determineHeightAndThenDrawPyramid() {

    heightStr = document.getElementById("height").value;
    height = parseInt(heightStr);
    drawPyramid(height);
}



let slider = document.getElementsByTagName("input")[0];
slider.addEventListener("input", determineHeightAndThenDrawPyramid);




        




/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = ""

     function charChange(){
        if(document.getElementById("char").value == "#"){
            rowStr += "#"
        }
        else if(document.getElementById("char").value == "@"){
            rowStr += "@"
        }
        else if(document.getElementById("char").value == "X"){
            rowStr += "X"
        }
        else if(document.getElementById("char").value == "$"){
            rowStr += "$"
        }
    }

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
         }
         for (var i = 0; i < numBricks; i++) {
            charChange();
         }



        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
