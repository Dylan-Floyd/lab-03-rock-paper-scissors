import { didUserWin, getRandomObject } from '../utils.js';

const test = QUnit.test;

//didUserWin tests:
test('Paper beats rock', assert => {
    let expected = 'win';
    let actual = didUserWin('paper', 'rock');
    assert.equal(actual, expected);
});

test('Rock beats scissors', assert => {
    let expected = 'win';
    let actual = didUserWin('rock', 'scissors');
    assert.equal(actual, expected);
});

test('Scissors beats paper', assert => {
    let expected = 'win';
    let actual = didUserWin('scissors', 'paper');
    assert.equal(actual, expected);
});

test('Rock loses to paper', assert => {
    let expected = 'lose';
    let actual = didUserWin('rock', 'paper');
    assert.equal(actual, expected);
});

test('Paper loses to scissors', assert => {
    let expected = 'lose';
    let actual = didUserWin('paper', 'scissors');
    assert.equal(actual, expected);
});

test('Scissors loses to rock', assert => {
    let expected = 'lose';
    let actual = didUserWin('scissors', 'rock');
    assert.equal(actual, expected);
});

test('Paper draws to paper', assert => {
    let expected = 'draw';
    let actual = didUserWin('paper', 'paper');
    assert.equal(actual, expected);
});

test('Rock draws to rock', assert => {
    let expected = 'draw';
    let actual = didUserWin('rock', 'rock');
    assert.equal(actual, expected);
});

test('Scissors draws to scissors', assert => {
    let expected = 'draw';
    let actual = didUserWin('scissors', 'scissors');
    assert.equal(actual, expected);
});

//TODO: getRandomObject tests
test('3000 getRandomObject() calls returns roughly equal distribution of objectNames', assert => {
    let rockCount = 0;
    let paperCount = 0;
    let scissorsCount = 0;
    for (let i = 0; i < 3000; i++) {
        let result = getRandomObject();
        if (result === 'rock') {
            rockCount++;
        }
        if (result === 'paper') {
            paperCount++;
        }
        if (result === 'scissors') {
            scissorsCount++;
        }
    }
    let evenlyDistributed =
            rockCount > 900 &&
            rockCount < 1100 &&
            paperCount > 900 &&
            paperCount < 1100 &&
            scissorsCount > 900 &&
            scissorsCount < 1100;
    assert.equal(evenlyDistributed, true);
});

test('3000 getRandomObject() calls only returns "rock", "paper" or "scissors"', assert => {
    let wereInvalidValuesReturned = false;
    for (let i = 0; i < 3000; i++) {
        let randomObject = getRandomObject();
        if (randomObject !== 'rock' &&
                randomObject !== 'paper' &&
                randomObject !== 'scissors') {
            wereInvalidValuesReturned = true;
            break;
        }
    }
    assert.equal(wereInvalidValuesReturned, false);
});