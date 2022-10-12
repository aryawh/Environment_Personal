//Nilai 1 - 30 : D
// Nilai 31 - 59: C
// Nilai 60 - 79 : B
// Nilai 80 - 100 : A 

// validasi 1 => jika nilai lebih dari 100 makan invalid number
// validasi 2 => jika nilai ada berhubungan negatif invalid number (-1)

let score = 100;


if(score > 100){
    console.log('Invalid');
}else if(score >= 80){
    console.log('A');
}else if(score >= 60){
    console.log('B');
}else if(score >= 31){
    console.log('C');
}else if(score >= 1){
    console.log('D');
}else if(score < 0){
     console.log('Negatif Invalid Kaka');
}