//Ivesti skaiciu, seka, kurios pabaiga zymima 0. Isvesti nariu, kurie prasideda 1, skaiciu.


	let arr = []

	const readline = require('readline').createInterface({
  		input: process.stdin,
  		output: process.stdout
	});
	var uzdaviniai = function(){
		console.log('***********************************************************************************************************************');
		console.log('1 uzdavinys:\n');
		console.log('Ivesti skaiciu seka, kurios pabaiga zymima skaiciumi 0. Isvesti nariu, kurie prasideda 1netu, skaiciu.\n');
		console.log('2 uzdavinys:\n');
		console.log('Ivesti sveiku skaiciu seka, kurios pabaiga zymima skaiciumi 0. Isvesti nariu, kuriu skaitmenu suma lygine, skaiciu.\n');
		console.log('3 uzdavinys:\n');
		console.log('Ivesti sveiku skaiciu seka, kurios pabaiga zymima skaiciumi 0. Isvesti nariu, kuriu skaitmenu suma nelygine, skaiciu.\n');
		console.log('4 uzdavinys:\n');
		console.log('Įvesti sveikų skaičių seką, kurios pabaiga žymima skaičiumi 0. Išvesti lyginių narių (antro, ketvirto ir t.t.), kurie yra teigiami skaičiai, skaičių.\n');
		console.log('5 uzdavinys:\n');
		console.log('Įvesti sveikų skaičių seką, kurios pabaiga žymima skaičiumi 0. Išvesti nelyginių narių(pirmo, trečio ir t.t.), kurie yra neigiami skaičiai, skaičių\n');
		console.log('6 uzdavinys:\n');
		console.log('Įvesti sveikų skaičių seką, kurios pabaiga žymima dviem vienodais skaičiais. Išvesti\
		visų įvestų narių skaičių, neigiamų, teigiamų ir nulinių narių skaičių. \n');
		console.log('7 uzdavinys:\n');
		console.log('Įvesti sveiką skaičių A. Įvedinėti sveikų skaičių seką tol, kol vienas po kito įvestų\
		skaičių skirtumo modulis bus mažesnis už A. Išvesti didžiausią ir mažiausią sekos narius.\n')
		console.log('8 uzdavinys:\n');
		console.log('9 uzdavinys:\n');
		console.log('10 uzdavinys:\n');
		console.log('11 uzdavinys:\n');
		console.log('12 uzdavinys:\n');
		console.log('13 uzdavinys:\n');
		console.log('14 uzdavinys:\n');
		console.log('\n');
	}

	var pick = function(){
		uzdaviniai();
		readline.question('Iveskite skaiciu (END uzdaro programa): ', function(sk){
			if (sk !== 'END' && sk !== 'end' && sk == 1){
				console.log('Uzdavinys 1');
				
				var aQuestion =	 function(){ 
					readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
					if (sk != 0){
						arr.push(sk);
						console.log(arr);
						aQuestion();
			}else{ 
				arr.map (function(number){
					if(number.toString().charAt(0) == 1){
						console.log(number);
						}
					});
					pick();
				}	
			});
		    }
		  aQuestion();
		}
		else if (sk == 2){ 
			console.log('2 Uzdavinys:');
			var aQuestion =	 function(){ 
				readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
						if (sk != 0){
							arr.push(sk);
							console.log(arr);
							aQuestion();
						}else{ 
							arr.map (function(number){
								if (number % 2 == 0){
									console.log(number);
								}
							});
							pick();
							}	
						});
		  		  	}
			aQuestion();
		}
		else if (sk == 3){ 
			console.log('3 Uzdavinys:');
			var aQuestion =	 function(){ 
				readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
						if (sk != 0){
							arr.push(sk);
							console.log(arr);
							aQuestion();
						}else{ 
							arr.map (function(number){
								if (number % 2 !== 0){
									console.log(number);
								}
							});
							pick();
							}	
						});
		  		  	}
			aQuestion();
		}
		else if (sk == 4){
			console.log('4 Uzdavinys:');
			var aQuestion =	 function(){ 
				readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
						if (sk != 0){
							arr.push(sk);
							console.log(arr);
							aQuestion();
						}else{ 
							arr.map (function(number){
								if (number % 2 == 0 && number == Math.abs(number)){
									console.log(number);
								}
							});
							pick();
							}	
						});
		  		  	}
			aQuestion();
		}

		else if (sk == 5){
			console.log('5 Uzdavinys:');
			var aQuestion =	 function(){ 
				readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
						if (sk != 0){
							arr.push(sk);
							console.log(arr);
							aQuestion();
						}else{ 
							arr.map (function(number){
								if (number % 2 !== 0 && number != Math.abs(number)){
									console.log(number);
								}
							});
							pick();
							}	
						});
		  		  	}
			aQuestion();
		}

		else if (sk == 6){
			console.log('6 Uzdavinys:');
			var aQuestion =	 function(){ 
				readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
						if (sk != 0 || !(sk == 0 && sk.length == 1)){
							arr.push(sk);
							console.log(arr);
							aQuestion();
						}else{ 
							arr.map (function(number){
								if (number.length >= 2 && number[number.length-1] == number[number.length-2]){
									console.log(number);
								}
							});
							pick();
							}	
						});
		  		  	}
			aQuestion();
		}

		else if (sk == 7){
			console.log('7 Uzdavinys:');
			var aQuestion =	 function(){ 
				readline.question('Iveskite skaiciu [Ivestas 0 baigia sk. seka]: ', function(sk){
						if (sk != 0){

							arr.push(sk);
							while (arr[0] != abs(arr[sk.length]-[arr[sk]])){
									arrsk++
							}
							console.log(arr);
							aQuestion();
						}else{ 
							arr.map (function(number){
								if (number.length >= 2 && number[number.length-1] == number[number.length-2]){
									console.log(number);
								}
							});
							pick();
							}	
						});
		  		  	}
			aQuestion();
		}

		else{
			return readline.close();
		}
	});
	}
   pick();
