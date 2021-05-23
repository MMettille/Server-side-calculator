$(document).ready(readyNow)

function readyNow(){
    // checking to see that jQuery has been loaded and it is safe to manipulate the DOM
    console.log('in readyNow function')
    getHistory();
    // buttons
    $(  '#plusBtn' ).on('click', addition);
    $( '#subtractBtn' ).on('click', subtract);
    $( '#multiplyBtn' ).on('click', multiply);
    $( '#divideBtn' ).on('click', divide);
    $( '#equalsBtn' ).on('click', mathTime);
    $( '#clearBtn' ).on('click', clear)
}

let operator;
// button functionality
function addition(){
    // checking to see that the function is being called
    console.log('in addition function');
}

function subtract(){
    // checking to see that the function is being called
    console.log('in subtract function');
}

function multiply(){
    // checking to see that the function is being called
    console.log('in multiply function');
}

function divide(){
    // checking to see that the function is being called
    console.log('in divide function');
}

function mathTime(){
    // checking to see that the function is being called
    console.log('in mathTime function');
}

function clear(){
    // checking to see that the function is being called
    console.log('in clear function');
}

function getHistory(){
    // checking to see that the function is being called
    console.log('in getHistory function');
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function(response){
        // will grab the history array and append it to the DOM
        appendHistory(response);
    }).catch(function(error){
        alert('error in getHistory function');
    })
} // end getHistory function

function appendHistory(array){
    // checking to see that the function is being called
    console.log('in appendHistory function')
    // empty the history section of the DOM
    $( '#answerList' ).empty();
    // loop through our history array and append to the DOM
    for(let math of array){
        $( '#answerList' ).append(`
            <li>${math.numberOne} ${math.operator} ${math.numberTwo} = ${math.answer}</li>
        `) //these parts will show up on the server side. Declaring them now so I don't forget.
    }
} // end appendHistory function