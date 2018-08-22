// ES5 Switch statement function
function switchDoMath(x, op, y){
    var calc = null;

    switch(op){
        case '+':
            calc = function(){
                return x + y
            };
            break;
        case '-':
            calc = function () {
                return x - y
            };
            break;
        case '*':
            calc = function () {
                return x * y
            };
            break;
        case '/':
            calc = function () {
                if (y === 0) {
                    return "Can't divide by zero";
                }
                return x / y
            };
            break;
    }

    if(calc){
        return calc();
    }

    return 'Unknown operator';
}

// ES5 Object in place of Switch
function objectDoMath(x, op, y){
    var mathObj = {
        '+': function(){
            return x + y;
        },
        '-': function () {
            return x - y;
        },
        '*': function () {
            return x * y;
        },
        '/': function () {
            if(y === 0){
                return "Can't divide by zero";
            }
            return x / y;
        },
    }

    var calc = mathObj[op];

    if(calc){
        return calc();
    }

    return 'Unknown operator';
}

// ES6 slightly shorter example Object in place of Switch
function shortDoMath(x, op, y){
    const mathObj = {
        '+': () => x + y,
        '-': () => x - y,
        '*': () => x * y,
        '/': () => y === 0 ? "Can't divide by zero" : x / y
    }

    const calc = mathObj[op];

    return calc ? calc() : 'Unknown operator';
    
}

// ES6 Shorter version example Object in place of Switch
function shorterWithErrorDoMath(x, op, y) {
    try {
        return {
            '+': () => x + y,
            '-': () => x - y,
            '*': () => x * y,
            '/': () => y === 0 ? "Can't divide by zero" : x / y
        }[op]();
    } catch(err){
        return 'Unknown operator';
    }
}

// ES6 Shorter version example Object in place of Switch -- With less error handling
function shorterDoMath(x, op, y) {
    return {
        '+': () => x + y,
        '-': () => x - y,
        '*': () => x * y,
        '/': () => y === 0 ? "Can't divide by zero" : x / y
    }[op]();
}
