

function Create16Grid() {
    //let $container = document.querySelector('#container')
    console.log("oi")
    let $container = $('#container');
    DrawArea =  '<div class="DrawArea" id="DrawArea"></div>';
    $container.append(DrawArea);
    let $containerDrawArea = $('#DrawArea');
    for (i = 0; i < 16; i++) 
{
    var row = '<div>';

    for (j = 0; j < 16; j++)
        row += '<div class="square" onmouseover="Draw(this)">' + '</div>';

    row += '</div>';

    $containerDrawArea.append(row);
}
    
}
function clearSketch() {
    //pega todos que tem a class square e remove eventListneer Draw
    let sketchs = Array.from(document.querySelectorAll('.square'));
    console.log("alagoinha?")
    sketchs.forEach((div)=>{
        //div.removeEventListener("mouseover",Draw(this));
        if (div.classList.contains('Draw')) {
            div.classList.remove('Draw');
        }
    })
}
//
//add efeito hover em todos as div criadas
function Draw(element) {
    //console.log(element)
    $(element).addClass("Draw")
}
let buttonClear = document.querySelector(".ClearSketch");
buttonClear.addEventListener("click",clearSketch)
console.log(buttonClear)

Create16Grid()