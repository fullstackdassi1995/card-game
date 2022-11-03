const game_data = { }

initGame()


function initGame() {
    game_data.computer = 0;
    game_data.sachkan1 = 0;
    document.getElementById("cardC").src = `opp.jpg`
    document.getElementById("cardP").src = `opp.jpg`
    document.getElementById("scorC").innerHTML = '0'
    document.getElementById("scoreP").innerHTML = '0'
    document.getElementById("won").innerHTML = ''
}

function startGame() {
    initGame()
    document.getElementById('play').disabled = false
}

function drawCard(elem, number) {
    switch (number) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            document.getElementById(elem).src = `${number}.png`
            break;
        case 11:
            document.getElementById(elem).src = "j.png"
            break;
        case 12:
            document.getElementById(elem).src = "Q.png"
            break;
        case 13:
            document.getElementById(elem).src = "K.png"
            break;
        case 14:
            document.getElementById(elem).src = "A.png"
            break;
    }
}

function getCard(){

    let x = Math.floor(Math.random()*10+2)
    let y = Math.floor(Math.random()*10+2)
 
    drawCard("cardC", x);
    drawCard("cardP", y);
    
    if (x !== y) {    
        if (x > y){
            game_data.computer++
            document.getElementById("won").innerHTML = "computer wom!!!"
        }
        else {
            game_data.sachkan1++
            document.getElementById("won").innerHTML = "you wom!!!"
        }
    }
    else { document.getElementById("won").innerHTML = "There are no winners"}

    document.getElementById("scorC").innerHTML = game_data.computer
    document.getElementById("scoreP").innerHTML = game_data.sachkan1

    if (game_data.sachkan1 == 5 || game_data.computer == 5){
        document.getElementById('play').disabled = true
        if (x > y) { return document.getElementById("won").innerHTML = "The game is over and the computer won!!!"
        
        }
        else { return document.getElementById("won").innerHTML = "The game is over and the player won!!!"
        }
        
    }     
         
}

