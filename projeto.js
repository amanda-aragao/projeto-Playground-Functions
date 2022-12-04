/* Requisito 1- 

 const compareTrue = (option1,option2) => {
    let compareTrue = (option1 === true && option2 === true) ? true : false;

    return compareTrue;
}
const girafa = true;
const elefante = true;
const macaco = false; 
const cachorro = false;

console.log(compareTrue(macaco,cachorro)) 

const splitSentence = (phares) => {
 let pharesArray = phares.split(' ')
  return pharesArray;
}
const phares1= 'go Trybe'
const phares2 = 'vamo que vamo'
const phares3 = 'foguete'

console.log(splitSentence(phares3)) 

const concatName = (array) =>{
    let firstName = array[0];
    let lastName = '';
    
    for ( index= 0; index < array.length; index +=1) {
        
        if(array[index] != lastName){
            lastName = array[index]
        }
        
    }    
     
    return `${firstName}, ${lastName}`;
}
        
const arrayNames = ['Amanda', 'Danilo', 'Talita', 'Ivana', 'Arthur', 'Ailton', 'Henrique']

console.log(concatName(arrayNames)); 


footballPoints = (vitorias, empates) => {
    const wins = 3;
    const ties = 1;
    let partida = 0;

    if (partida != vitorias && partida != ties) {
        partida = (wins * vitorias)
            + (ties * empates);

    } else if (vitorias === 0 && empates === 0) {
        partida = 0;
    }
    return partida;

}
console.log(footballPoints(0, 0)); 


let arrayNumbers = [9, 1, 2, 3, 9, 5, 7, 9];
let arrayNumbers2= [0, 4, 4, 4, 9, 2, 1]
let arrayNumbers3= [0, 0, 0]

highestCount = (numbers) => {
    let biggerNumber = 0;
    let counter =0;
    let test = '';

    for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > biggerNumber) {
            biggerNumber = numbers[index];
        
        } 
    
         test = (biggerNumber === numbers[index]) ? counter+=1 : 1

    }
        
    return test;

}

console.log(highestCount(arrayNumbers1)); 

let  calcAreaT =0;
let calcAreaR = 0;

calcTriangleArea = (base,height) => {
    calcAreaT = (base * height) / 2;
    return calcAreaT; 
}

calcRectangleArea= (base,height) => {
    calcAreaR = base * height;
    return calcAreaR;
}

calcAllAreas= (base,height,form) => {
    if (form === 'triângulo'){

     let triangle = calcTriangleArea(base,height);
     console.log(`O valor da área do triângulo é de :${triangle}`);
    
    }else if(form === 'retângulo') {
    
        let retangle = calcRectangleArea(base,height);
        console.log(`O valor da área do retângulo é de :${retangle}`);
    }else{
        console.log(`Não foi possível fazer o cálculo, insira uma forma geométrica válida.`)
    }

}

console.log(calcTriangleArea(10,50));
console.log(calcRectangleArea(10,50));
 console.log();

calcAllAreas(10,50,'triângulo');
calcAllAreas(10,50,'retângulo');
calcAllAreas(10,50,'quadrado'); */

/*catAndMOuse = (mouse, cat1, cat2) => {    MODULOOOO 
    if () {
        
        return `cat1`;
    
    } else if (cat2 < cat1 && cat2 < mouse) {
        return`cat2`;
    }
    else if (cat1 === cat2 ) {
        return `os gatos trombram e o rato foge`;
    }

}
console.log(catAndMOuse(15, 10, 5)); 

/*
catAndMOuse = (mouse, cat1, cat2) => {
    if (cat1 < cat2 && cat1 < mouse) {
        
        return `cat1`;
    
    } else if (cat2 < cat1 && cat2 < mouse) {
        return`cat2`;
    }
    else if (cat1 === cat2 ) {
        return `os gatos trombram e o rato foge`;
    }

}
console.log(catAndMOuse(15, 10, 5)); */

/*fizzBuzz = (numbers) => {
    let resultTest = [];
    for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
            resultTest[index] = 'fizzBuzz'

        } else if (numbers[index] % 3 === 0) {
            resultTest[index] = 'fizz'


        } else if (numbers[index] % 5 === 0) {
            resultTest[index] = 'buzz'

        }
        else {
            resultTest[index] = 'bug!'
        }
    }
    return resultTest;
}

const numberFizzBuzz = [2, 15, 7, 9, 45]

console.log(fizzBuzz(numberFizzBuzz));*/


encode = (phares) => {

    let change = [];

    change = phares.split('');
    for (let index = 0; index < phares.length; index += 1) {
        if (change[index] === 'a'){
            change[index]= 1;
        }else if (change[index]=== 'e'){
            change[index] =2;
        }else if (change[index]=== 'i'){
            change[index] =3;
        }else if (change[index]=== 'o'){
            change[index] =4;
        }else if (change[index]=== 'u'){
            change[index] =5;
        }
    }
    
    return change.join('');
}

/*decode = (phares) => { 
    let change = [];

    change = phares.split('');
    for (let index = 0; index < phares.length; index += 1) {
        if (change[index] === '1'){
            change[index]= "a";
        }
        else if (change[index] === '2'){
            change[index] ='e';
        }
        else if (change[index] === '3'){
            change[index] ='i';
        }
        else if (change[index] === '4'){
            change[index] ='o';
        }
        else if (change[index] === '5'){
            change[index] ='u';
        }
    }
    
    return change.join('');
}


const phare1 = 'H3, th2r2!'
const phare2 = 'hello'
const phare3 = 'hello'

console.log(decode(encode(phare2)));
console.log(encode(phare2)); */




/*let arrayTechnology = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript', 'C#']
let myName = 'Amanda';
const arrayEmpty = [];
let object = '';
techList = (arrayTec, name) => {
    let arrayTotal = [];
    arrayTec.sort();
    for (let index = 0; index < arrayTec.length; index += 1) {
        if (arrayTec[index] != null) {
            arrayTotal.push({
                tech: arrayTec[index],
                name: name 
            });
        }
    }

    return arrayTotal;
}

console.log(techList(arrayTechnology, myName)); 

            EXERCICIO BÔNUSS 
*/


