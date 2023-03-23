// 1. Area of a triangle
function triaArea(base, height){
    return (base * height)/2;
}
var area = triaArea(3,2);
console.log("The area of the given triangle is" ,area)


// 2. Return Something to me!
function quote(a) {
    c = "Something" + " " + a;
    console.log(c);
    return c;
}
quote("something happens, you won't understand.")


// 3. Basketball points
function points(a,b) {
    return (a*2) + (b*3); // a is for two pointers and b is for 3 pointers
}
var p = points(2,2);
console.log("The total points scored by the team is",p);


// 4. Less than 100?
function lessThan100(a,b) {
    c = a + b;
    if (c < 100) {
        return true;
    } else {
        return false;
    }
}
console.log("The sum of two number is less than 100." + " " + lessThan100(25,35));
console.log("The sum of two number is less than 100." + " " + lessThan100(76,67));


// 5. Add up the numbers from a single number
function addup(a) {
    var count = 0;
    if (a <= 1000){
        for(let i = 1; i <= a; i++) {
            count += i;

        }
        console.log("The sum of all the numbers from 1 to the entered number is " + count);
        return count;
    } else {
        console.log("The entered value should be less than 1000.")
    }
}
addup(4);
addup(1001);


// 6. Oddish vs Evenish
function oddishOrEvenish(a) {
    c = 0;
    b = a.toString();
    for(let i = 0; i < b.length; i++) {
        d = parseInt(b[i]);
        c += d;
    }
    if (c%2 == 0) {
        console.log("Evenish");
    } else {
        console.log("Oddish");
    }
}
oddishOrEvenish(42); // 4+2=6(even)
oddishOrEvenish(32); // 3+2=5(odd)
oddishOrEvenish(65); // 6+5=11(odd)


// 7. Any Prime number in Range
function primeInRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        let isPrime = true;
        if (i < 2) {
            isPrime = false;
        }
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}
primeInRange(12, 18); // prime numbers in range: 13, 17
primeInRange(24, 28); // no prime numbers in range


// 8. Left Shift by Powers of Two
function shiftToLeft(x, y) {
    if (y >= 0) {
        c = x*(2**y);
        console.log(c);
    } else {
        console.log("y cannot be negative")
    }
}
shiftToLeft(5,3); // 5*(2^3)
shiftToLeft(15, 3); // 15*(2^3)
shiftToLeft(11, 0); // 11*(2^0)
shiftToLeft(17, -15); // y cannot be negative


// 9. Convert a number to Base-2
function binary(a) {
    if (a == "0") {
        console.log("0");
        return "0";
    }
    result = "";
    let c = parseInt(a);
    if (c<1024) {
        while(c>0) {
            let d = c%2;
            result = d.toString() + result;
            c = Math.floor(c/2);
        }
        console.log(result);
    } else {
        console.log("The number should be less than 1024.");
    }
}
binary(0);
binary(11);
binary(1023);
binary(1024);
binary(1025);