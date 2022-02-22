var highscores = [{"date": "2021/03/02", "duration": "2:51"},{"date": "2021/04/02", "duration": "2:52"},{"date": "2021/05/02", "duration": "2:53"}]
generateHighscores();
function generateHighscores(){
    var tablearea = document.getElementById('highscore'),
    table = document.createElement('table');
    var tr = document.createElement('tr')
    var td = document.createElement('td');
    td.id = "scoreTitle";
    td.innerHTML = "Date"
    tr.appendChild(td)
    var td = document.createElement('td');
    td.id = "scoreTitle2";
    td.innerHTML = "Duration"
    tr.appendChild(td)
    table.appendChild(tr)
    for (var i = 0; i <= 3; i++) {
        var tr = document.createElement('tr')
        for (var j = 0; j <= 1; j++) {
            td = document.createElement('td');
            td.id = "score" + i + j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tablearea.appendChild(table);
   
    for (var i = 0; i <= 2; i++) {
        for(var j = 0; j <= 1; j++){
                var td1 = document.getElementById('score'+i+j);
                if(j == 0){
                    var text = document.createTextNode(highscores[i].date);
                }
                else{
                    var text = document.createTextNode(highscores[i].duration); 
                }               
                td1.appendChild(text);

        }
    }
}