var div = document.createElement('div');
var parent = document.querySelector('#gridContainer')

var styleAttributes = "border:5px solid red;display:grid"

setGridSize(50,50)
createSquare(10);


function createSquare(n){
    parent.setAttribute("style",parent.getAttribute('style')+styleAttributes)
    for (n= 2*n; n >= 0 ;n--) {
        let square = document.createElement('div');
        square.setAttribute("class", "square");
        square.textContent = n;
        parent.appendChild(square);
    }
}




function setGridSize(x,y) {
    parent.setAttribute("style","width:" +x+"em;height:"+y+"em")
}
