function generateChessboard() {
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);
    
    var chessboardHtml = "<table class="+ "chessTable" +">";

    for (var i = 0; i < rows; i++) {
        chessboardHtml += "<tr>";
        for (var j = 0; j < columns; j++) {
            var cellClass = (i + j) % 2;
            if(cellClass == 0){
                cellClass = "white";
            }
            if(cellClass == 1){
                cellClass = "black";
            }
            chessboardHtml += "<td class=" + cellClass + "></td>";
        }
        chessboardHtml += "</tr>";
    }

    chessboardHtml += "</table>";
    
    document.getElementById("chessboardContainer").innerHTML = chessboardHtml;
}