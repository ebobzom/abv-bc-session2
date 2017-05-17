module.exports=function fizzBuzz(n){
					/*
					This function 'FizzBuzz' if argument passed is divisible by
					3 and 5, and Fizz or Buzz if divisible by only 3 or 5. It returns 
					the argument if it is not divisible by 3 or 5.
					*/
					if(n%3===0 && n%5===0){

						return 'FizzBuzz';

					}else if(n%3===0){

						return 'Fizz';

					}else if(n%5===0){

						return "Buzz";
					}
					else{

						return n;
					}
				}