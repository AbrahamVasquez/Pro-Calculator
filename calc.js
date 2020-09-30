const numberButton = document.getElementsByName( 'data-number' );
const operatorButton = document.getElementsByName( 'data-operator' );
const resultButton = document.getElementsByName( 'data-result' )[0];
const deleteButton = document.getElementsByName( 'data-delete' )[0];

let result = document.getElementById( 'result' );
let currentOper = '';
let previousOper = '';
let operation = undefined;

numberButton.forEach(function(button) { 
    button.addEventListener( 'click', function() {
        addingNumber(button.innerText);
        
    } )
});

operatorButton.forEach( function (button) {
    button.addEventListener( 'click', function() {
        selectOperation(button.innerText);
    })
});

resultButton.addEventListener( 'click', function() {
    calculate();
    displayUpdate();
});
 
deleteButton.addEventListener( 'click', function() {
    clear();
    displayUpdate();
});

function selectOperation(op) {
    if (currentOper === '') return;
    if (currentOper !== '') {
        calculate()
    }
    operation = op.toString();
    previousOper = currentOper;
    currentOper = '';
}

function calculate() {
    let calcu;
    const previous = parseFloat(previousOper);
    const actual = parseFloat(currentOper);
    if (isNaN(previous) || isNaN(actual)) return;
    switch(operation) {
        case '+':
            calcu = previous + actual;
            break;
        case '-':
            calcu = previous - actual;
            break;
        case 'x':
            calcu = previous * actual;
            break;
        case '/':
            calcu = previous / actual;
            break; 
        default:
            return;
    }
    currentOper = calcu;
    operation = undefined;
    previousOper = '';
}
function addingNumber(num) {
    currentOper = currentOper.toString() + num.toString();
    displayUpdate();
}

function clear() {
    currentOper = '';
    previousOper = '';
    operation = undefined;
}

function displayUpdate() {
    result.value = currentOper;
}

clear();