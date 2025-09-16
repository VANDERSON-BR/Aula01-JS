const numero = 24;
const cnh = false;

if( numero >= 18 && cnh){
    console.log("Maior de idade e pode digir");
}else if( numero >= 18 && !cnh){
    console.log("Maior de idade, mas não possui CNH");
}else{
    console.log("Menor de idade");
}