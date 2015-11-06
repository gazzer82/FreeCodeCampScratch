var computerMoves = ['21','01'];
var userMoves = ['00'];
var currentMove = true;
var validRows = [
            ['00','10','20'],
            ['01','11','21'],
            ['02','12','21'],
            ['00','01','02'],
            ['10','11','12'],
            ['20','21','22'],
            ['00','11','22'],
            ['20','11','02']
        ];
var validSquaresFactory = ['00','10','20','01','11','21','02','12','22'];
var validSquares = validSquaresFactory;

function evaluateMove(move,attacker,defender,attack){
    //Create some new variables so we don't mess with the global ones
    var tempAttack = attacker.slice(0);
    var tempDefend = defender.slice(0);
    //Now add our new move to the correct place
    if(attack){
        tempAttack.push(move);
    } else {
        tempDefend.push(move);
    }
    //Now let's calculate the values for all valid rows.
    return validRows.reduce(function(store,array){
        //Push this rows score to the store array
        store.push(array.reduce(function(score,square,index){
            //See if it's square 1,2,3
            switch(index){
                //Square 1, so only two values need setting (0 is already the default)
                case 0:
                    //console.log('checking for ' + square + ' in ' + moves1);
                    if(tempAttack.indexOf(square) !== -1){
                        //Ok it's attackers square, so +1
                        score = 1;
                    } else if(tempDefend.indexOf(square) !== -1){
                        //Defenders square, -1
                        score = -1;
                    }
                    //console.log('round 1 - ' + score);
                    break;
                case 1:
                    //Square 2, so let's look at who's square it is
                    if(tempAttack.indexOf(square) !== -1){
                        //Attachers square, evaluate previous square to work out value
                        if(score === 1){
                            //second attackers square so 10
                            score = 10;
                        } else if (score === -1){
                            //Blocking move so 0
                            score = 0;
                        } else if(score === 0){
                            //Previous empty, so still valid row
                            score = 1;
                        }
                    } else if (tempDefend.indexOf(square) !== -1){
                        //Defender square, evaluate previous square to work out value
                        if(score === 1){
                            //Blocking move so 0
                            score = 0;
                        } else if (score === -1){
                            //Second in row for defender!!
                            score = -10;
                        } else if (score === 0){
                            //Previous empty, so still valid row
                            score = -1;
                        }
                    }
                    //console.log('round 2 - ' + score);
                    break;
                case 2:
                    //Square 3, so let's look at who's square it is
                    if(tempAttack.indexOf(square) !== -1){
                        //Attachers square, evaluate previous square to work out value
                        if(score === 1){
                            //Empty first square, attacker second square, 2 in a row
                            score = 10;
                        } else if (score === -1){
                            //Empty first square, defender second square, invlaid row.
                            score = 0;
                        } else if (score === 10){
                            //Previous 2 rows attackers, so winning move
                            score = 100;
                        } else if (score === -10){
                            //Previous two square defenders, so nullifying move
                            score = 0;
                        } else {
                            //First two squares empty so one to the attacker
                            score = 1;
                        }
                    } else if (tempDefend.indexOf(square) !== -1){
                        //Defender square, evaluate previous square to work out value
                        if(score === 1){
                            //Empty first square, attacker second square, so blocked row
                            score = 0;
                        } else if (score === -1){
                            //Emmpty first square, defender second square, so 2 in a row
                            score = -10;
                        } else if (score === 10){
                            //Attacker first row, draw
                            score = 0;
                        } else if (score === -10){
                            //Previous two square defenders, so potential loosing move
                            score = -100;
                        } else {
                            //First two squares empty, so one to the defender
                            score = -1;
                        }
                    }
                    //console.log('Score: ' + score);
                    break;
                }
            return score;
        },0));
        return store;
    },[]).reduce(function(store,value,index,array){
        //Now let's distill this down to the lowest or biggest number depedning on out mode and send it back
        switch(attack){
            case(true):
                return (value > store) ? value : store;
            case(false):
                return (value < store) ? value : store;
        }
    });
}

function generateMove(attack,attackerArray,defenderArray){
    var takenMoves = computerMoves.concat(userMoves);
    validSquares = validSquaresFactory.filter(function(object){
        return takenMoves.indexOf(object) === -1;
    });
    console.log(validSquares);
    var squareScores = validSquares.reduce(function(store,square,index,array){
        store.push([square,evaluateMove(square,computerMoves,userMoves,currentMove)]);
        return store;
    },[]);
    console.log(squareScores);
}

function evaluateRound(attack,attackerArray,defenderArray,remainingValid){
    if(remainingValid.length > 1){
        //remainingValid.reduce()
        return evaluateMove(remainingValid[0],attackerArray,defenderArray,!attack);
    }else{
        return evaluateMove(remainingValid[0],attackerArray,defenderArray,!attack);
    }

}

//console.log(evaluateMove('10',['21','01'],['00'],true));
console.log(generateMove());