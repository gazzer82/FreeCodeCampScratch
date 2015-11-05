var currentRound = 'user';
var valid3factory = [123,456,789,147,258,369,159,357];

var valid3 = [];
var valid2 = [];
var compSelection = [];
var userSelection = [];

var valid3Regex = valid3factory.reduce(function(store,object,index,array){
    if(index != 0 && index != array.length-1){
        store += '|';
    }
    return store += '(.*' + object.toString().split('').map(function(object,index){
        switch(index){
            case 0:
                return object + '+.*';
            case 1:
                return object + '+.*';
            case 2:
                return object;
        }
    }) + ')';
},'');

//calculate if this combination of number creates a valid 2 or 3 match move

var isValid3 = function(num){
    //if(currentRound = )
    //var combinations = 
    return 
};

var isValid2 = function(num){
    return
};

var calculateCombinations = function(array, length){
    return array.reduce(function(store,object,index,array){
        console.log('length is ' + length + ' with ' + object);
        if(length > 1){
            //store.push(calculateCombinations(array.slice(index+1),length-1));
            console.log(calculateCombinations(array.slice(index+1),length-1));
            store.push(calculateCombinations(array.slice(index+1),length-1).map(function(subObject){
                console.log('final number is ' + object.toString() + subObject.toString());
                return parseInt((object.toString() + subObject.toString()),10)}));
            return store;
        } else {
            return array;
        }
    },[]);
};

var startGame = function(){
    currentRound = 'computer';
    valid3 = valid3factory;
    valid2 = valid2factory;
}

var startNextRound = function(){
    if(currentRound === 'user'){
        //allow user to choose next move
        userMove();
    } else {
        //computers move
        calculateNextMove();
    }
}

var calculateNextMove = function(){
    //calculate next computer move
}

var userMove = function(){
    //Allow the user to make a move, for now we'll just make it random.
}

//Functions to reduce our array of valid moves at each round

var processRound = function(move){
    if(isValid3(move)){
        processWin();
    } else if ((compSelection.length + userSelection.length) == 9){
        processDraw();
    } else {
        if(currentRound === 'user'){
            userSelection.push(move);
            currentRound = 'computer';
        } else {
            compSelection.push(move);
            currentRound = 'user';
        }
        updateValidMoves(move);
        startNextRound();
    }
}

var updateValid3Moves = function (move){
    valid3 = valid3.filter(function(number){
        //var regFilter = new RegExp(move.toString());
        return !(new RegExp(move.toString()).test(number.toString()))
    })
}

var updateValid2Moves = function(move){
    valid2 = valid2.filter(function(number){
        return !(number[1] == move);
    })
}

var processWin = function(){
    if(currentRound === 'user'){
        console.log('user won');
    } else {
        console.log('computer won');
    }
    startGame();
}

var processWin = function(){
    console.log('draw!');
    startGame();
}

var testValidMoves = function(move){
    valid3 = valid3factory;
    valid2 = valid2factory;
    updateValid3Moves(move);
    updateValid2Moves(move);
    return([valid2,valid3])
}

//console.log(calculateCombinations([1,2,3,4,5,6,7,8,9], 3));
console.log(valid3Regex);