export function didUserWin(userObjectName, computerObjectName) {
    if (typeof userObjectName !== 'string' ||
        typeof computerObjectName !== 'string') {
        throw 'didUserWin requires two string arguments';
    }
    if (userObjectName === 'rock') {
        if (computerObjectName === 'rock') {
            return 'draw';
        } else if (computerObjectName === 'paper') {
            return 'lose';
        } else if (computerObjectName === 'scissors') {
            return 'win';
        }
    } else if (userObjectName === 'paper') {
        if (computerObjectName === 'rock') {
            return 'win';
        } else if (computerObjectName === 'paper') {
            return 'draw';
        } else if (computerObjectName === 'scissors') {
            return 'lose';
        }
    } else if (userObjectName === 'scissors') {
        if (computerObjectName === 'rock') {
            return 'lose';
        } else if (computerObjectName === 'paper') {
            return 'win';
        } else if (computerObjectName === 'scissors') {
            return 'draw';
        }
    }
    throw 'Unable to determine result, ensure inputs are the strings "rock", "paper" or "scissors"';
}

export function getRandomObject() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'rock';
    }
    if (num === 1) {
        return 'paper';
    }
    return 'scissors';
}