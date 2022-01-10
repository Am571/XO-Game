let title =document.querySelector('.title');
let turn = 'x';
let squares = [];
function winner()
{
    for(let i = 1; i<10;i+++)
    {
        squares[i] = document.getElementById('item + i')
    }
    if(squares[1] == squares[2] && squares[2] == squares[3])
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
} 