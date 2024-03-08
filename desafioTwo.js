const n = 1000;
stopCalc = false;

function pertenceASequeciaFibonacci(n) { 
    let num = n; 
    let n1 = 0;
    let n2 = 1;
    
    if (num === n1 || num === n2) return console.log(`O número ${num} pertence a sequência de Fibonacci`);
    
    while (stopCalc === false) {
        let n3 = n1 + n2;
        if (num === n3) return console.log(`O número ${num} pertence a sequência de Fibonacci`);
        n1 = n2;
        n2 = n3;
        if (n3 > num) stopCalc = true; 
        
    }

    return console.log(`O número ${num} não pertence a sequência de Fibonacci`);
}; 

pertenceASequeciaFibonacci(n);

