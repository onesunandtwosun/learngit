var board = new Array();
var score = 0;

$(document).ready(function() {
    newgame();
});

function newgame() {
    //初始化盘格
    init();
    //在随机两个格子生成数字
}

function init() {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {

            var gridCell = $("#grid-cell-"+i+"-"+j);
            gridCell.css('top', getPosTop(i, j));
            gridCell.css('left', getPosLeft(i, j));
        }

        for (var i = 0; i < 4; ++i) {
            board[i] = new Array();
            for (var j = 0; j < 4; ++j)
                board[i][j] = 0;
        }

        updateBoardView();

}

function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var theNumbercell = $('#number-cell-'+i+'-'+j);
        }

        if (board[i][j] == 0){
            theNumbercell.css('width', '0px');
            theNumbercell.css('height', '0px');
            theNumbercell.css('top', getPosTop(i,j) + 50);
            theNumbercell.css('left', getPosLeft(i,j) + 50);
        }
        else{
            theNumbercell.css('width', '100px');
            theNumbercell.css('height', '100px');
            theNumbercell.css('top', getPosTop(i,j) + 50);
            theNumbercell.css('left', getPosLeft(i,j) + 50);
            theNumbercell.css('background-color', getNumberBackgroundColor(board[i][j]));
            theNumbercell.css('color',getNumberColor(board[i][j]));
            theNumbercell.text(board[i][j]);
        }
}

function generateOneNumber() {

    if ( nospace (board))
        return false;
    
    //随机位置
    var randx = parseINt(Math.floor(Math.random() * 4) );
    var randy = parseINt(Math.floor(Math.random() * 4) );

    while( ture ) {
        if (board[randx][randy] == 0)
            break;
        randx = parseINt(Math.floor(Math.random() * 4) );
        randy = parseINt(Math.floor(Math.random() * 4) );
    }

    //随机一个数字
    var randNumber = Math.random() < 0.5 ? 2 :4;

    //随机位置显示随机数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);
    

    return true;
}