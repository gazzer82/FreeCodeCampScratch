var computerMoves = [];
var userMoves = [];
var currentMove = 0;
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

function evaluateMove(move,attacker,defender){
    //build the array with the potenital move added to the attacker, and loop through it to see where we are at.
    attacker.push(move);
    return validRows.reduce(function(store,array){
        //Push this rows score to the store array
        store.push(array.reduce(function(score,square,index){
            //See if it's square 1,2,3
            switch(index){
                //Square 1, so only two values need setting (0 is already the default)
                case 0:
                    //console.log('checking for ' + square + ' in ' + moves1);
                    if(attacker.indexOf(square) !== -1){
                        //Ok it's attackers square, so +1
                        score = 1;
                    } else if(defender.indexOf(square) !== -1){
                        //Defenders square, -1
                        score = -1;
                    }
                    //console.log('round 1 - ' + score);
                    break;
                case 1:
                    //Square 2, so let's look at who's square it is
                    if(attacker.indexOf(square) !== -1){
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
                    } else if (defender.indexOf(square) !== -1){
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
                    if(attacker.indexOf(square) !== -1){
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
                    } else if (defender.indexOf(square) !== -1){
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
                    //console.log(score);
                    break;
                }
            return score;
        },0));
        return store;
    },[]).reduce(function(store,value,index,array){
        return (value > store) ? value : store;
    });
}

console.log(evaluateMove('',['00','10','20'],['']));