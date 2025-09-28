const players = [
  {
    id: "player1",
    name: "Anjana",
    symbol: "X",
  },
  {
    id: "player2",
    name: "Marc",
    symbol: "O",
  },
];
document.getElementById('p1-symbol').innerText = players[0].symbol
document.getElementById('p2-symbol').innerText = players[1].symbol
document.getElementById('p1-name').innerText = players[0].name
document.getElementById('p2-name').innerText = players[1].name

box1 = document.getElementById('box1')
box1.addEventListener("click", function () {
  box1.innerText  = 'X';
})

box2 = document.getElementById('box2')
box2.addEventListener("click", function () {
  box2.innerText  = 'O';
})

box3 = document.getElementById('box3')
box3.addEventListener("click", function () {
  box3.innerText  = 'X';
})

box4 = document.getElementById('box4')
box4.addEventListener("click", function () {
  box4.innerText  = 'O';
})

box5 = document.getElementById('box5')
box5.addEventListener("click", function () {
  box5.innerText  = 'X';
})

box6 = document.getElementById('box6')
box6.addEventListener("click", function () {
  box6.innerText  = 'O';
})

box9 = document.getElementById('box9')
box9.addEventListener("click", function () {
  box9.innerText  = 'X';
})