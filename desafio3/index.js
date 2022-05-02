// gera um valor aleatorio para o cumputador
function computerPlay() {
    let random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            return 'pedra';
        case 1:
            return 'papel';
        case 2:
            return 'tesoura'
    }
}

// verificação de quem ganha e quem perde
function round(playSelector, computerSelection) {
    playSelector = 'papel';
    computerSelection = computerPlay()

    if (computerSelection === 'pedra' && playSelector === 'pedra') {
        console.log('empate');
    }
    else if (computerSelection === 'pedra' && playSelector === 'papel') {
        console.log('vitoria');
    }
    else if (computerSelection === 'pedra' && playSelector === 'tesoura') {
        console.log('derrota');
    }
    else if (computerSelection === 'papel' && playSelector === 'pedra') {
        console.log('derrota');
    }
    else if (computerSelection === 'papel' && playSelector === 'papel') {
        console.log('empate');
    }
    else if (computerSelection === 'papel' && playSelector === 'tesoura') {
        console.log('vitoria');
    }
    else if (computerSelection === 'tesoura' && playSelector === 'pedra') {
        console.log('vitoria');
    }
    else if (computerSelection === 'tesoura' && playSelector === 'papel') {
        console.log('derrota');
    }
    else if (computerSelection === 'tesoura' && playSelector === 'tesoura') {
        console.log('empate');
    }
}

console.log(round())
