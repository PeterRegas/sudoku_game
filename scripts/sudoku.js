generateBoard();
var selectedNum = null;
var selectedSpace = null;
var movelist = [];

window.onload = function() {
    document.getElementById("undo").addEventListener("click", function() {
        undo();
    });
    for (var i=1;i<=9;i++){
        document.getElementById(i).addEventListener("click", function() {
            for(var j=1;j<=9;j++){
                document.getElementById(j.toString()).classList.remove("selectedNum");
            }
            this.classList.add("selectedNum");
            selectedNum = this.innerHTML;
            makeMove();
        });
    }
    for (var i=0;i<=8;i++){
        for (var j=0;j<=8;j++){
            document.getElementById("cell"+i+j).addEventListener("click", function() {
                for (var i=0;i<=8;i++){
                    for (var j=0;j<=8;j++){
                    document.getElementById("cell"+i+j).classList.remove("selected");
                }
            }
                this.classList.add("selected");
                selectedSpace = this;
                makeMove();
            });
        }
    }
};
function checkMove(space,num){


    x = space.id.charAt(4);
    y = space.id.charAt(5);
    var check = false;
    oldnum = space.innerHTML;
    if(space.classList.contains("error")){
        var errorcheck = true;
    }
    else{
        var errorcheck = false;
    }
    
    for (var i=0;i<=8;i++){
        if((document.getElementById("cell"+x+i).innerHTML == num.innerHTML || document.getElementById("cell"+i+y).innerHTML == num.innerHTML) && (document.getElementById("cell"+x+i) != space || document.getElementById("cell"+i+y) != space)){
            space.classList.remove("selected");
            space.classList.add("error");
            check = true;
        }
    }
    for (var i=0;i<=2;i++){
        for (var j=0;j<=2;j++){
            var row = Math.floor(x/3)*3;
            var col = Math.floor(y/3)*3;
            if(document.getElementById("cell"+(row+i)+(col+j)).innerHTML == num.innerHTML && document.getElementById("cell"+(row+i)+(col+j)) != space){
                space.classList.remove("selected");
                space.classList.add("error");
                check = true;
            }
        }
    }
    if(check == false){
        space.classList.remove("error");
    }
    movelist.push([x,y,oldnum,errorcheck]);
    space.innerHTML = selectedNum;
    num.classList.remove("selectedNum");
    space.classList.remove("selected");
    




}
function undo(){
    var undo = movelist.pop();
    var undonum = undo[2];
    space = document.getElementById("cell"+undo[0]+undo[1])
    space.innerHTML = undonum;
    if(undo[3] == true){
        space.classList.add("error");
    }
    else{
        space.classList.remove("error");
    }
    

}

function makeMove(){
    for (var i=1;i<=9;i++){
        var num = document.getElementById(i);
        for (var j=0;j<=8;j++){
            for (var k=0;k<=8;k++){
              var space = document.getElementById("cell"+j+k);
              if(num.classList.contains("selectedNum") && space.classList.contains("selected")){
                  checkMove(space,num);
              }
            }
        }
    }
}
function generateBoard(){
    var tablearea = document.getElementById('board'),
    table = document.createElement('table');

    for (var i = 0; i <= 8; i++) {
        var tr = document.createElement('tr')
        for (var j = 0; j <= 8; j++) {
            td = document.createElement('td');
            td.id = "cell" + i + j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tablearea.appendChild(table);
    const gamesetup = [[8,-1,-1,-1,6,5,-1,2,9],[-1,4,9,-1,2,-1,-1,6,8],[2,-1,5,4,8,-1,-1,-1,-1,-1],[-1,8,7,9,3,-1,2,5,1],[-1,1,-1,-1,7,-1,9,4,-1],[4,9,-1,-1,-1,-1,7,-1,6],[7,-1,4,-1,9,6,-1,-1,2],[1,-1,6,-1,4,7,-1,-1,-1],[-1,2,-1,-1,5,-1,6,-1,4]]

    for (var i = 0; i <= 8; i++) {
        for(var j = 0; j <= 8; j++){
            if (gamesetup[i][j] != -1){
                var td1 = document.getElementById('cell'+i+j);
                var text = document.createTextNode(gamesetup[i][j]);
                td1.appendChild(text);
            }

        }
    }
}





