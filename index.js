
/**
 * 01) Escreva uma função que retorne o resultado da soma de todos os números pares entre 1 e 100;
*/
function sumNumbersPair() {
    let sun = 0;
    let cont = 1;
    while (cont <= 100) {
        if (cont % 2 == 0){
            sun += cont
        }
        cont++
    }
    return sun;
}

/**
 * 02) Escreva uma função que retorne o resultado da soma de todos os números impares entre 101 e 200;
*/
function sumNumbersOdd() {
    let sun = 0;
    let cont = 101;
    while (cont <= 200) {
        if (cont % 2 != 0){
            sun += cont
        }
        cont++
    }
    return sun;
}

/**
 * 03) Escreva uma função que receba como parâmetros dois números distintos, 
 * a função deve validar que o primeiro número é menor que o segundo número 
 * e que os números estão entre o valor 1 e o valor 30, 
 * caso verdadeiro a função deve retornar a soma de todos números entre os números informados. 
 * Caso falso deve retornar 0.
 */
function sunIntervalNumbers(number1, number2){
    let sun = 0;
    if (number1 < number2) {
        if ((number1 >= 1 && number1 < 30) && (number2 >= 1 && number2 < 30)){
            let cont = 1;
            while(cont <= number2){
                sun += number1+cont;
                cont++;
            }
        }
    }
    return sun;

}

/**
 * 04) Escreva uma função que receba como parâmetro um número entre 1 e 10 e em seguida
 *  retorner o valor do fatorial do número informado. Caso o número informado esteja fora 
 * do range (1-10) a função deve retornar uma mensagem indicando que o número informado é inválido.
 */
function sunRangeNumber(number){
    if(number >= 1 && number <= 10){
        let fatorial = 1;
        let cont = 1;
        while(cont <= number){
            fatorial *= cont;
            cont++;    
        }
        return fatorial;
    }   
    return "Número informado é inválido!." 
}

/**
 * 05)Escreva uma função que receba como parâmetro um número entre 1 e 12 e 
 * em seguira retorne o nome do mês correspondente ao número informado. 
 * Caso o número informado esteja fora do range(1-12) a função deve retornar 
 * uma mensagem indicado que o número informado é inválido 
 * Ex: número informado: 3, retorno da função: "Março". (Utilize o switch/case )
 */
function searchMonth(numberMes){
    let month = "";
    if (numberMes >= 1 && numberMes <= 12){
        switch (numberMes){
            case 1:
                month = "Janeiro";
                break;
            case 2:
                month = "Fevereiro";
                break;   
            case 3:
                month = "Março";
                break;
            case 4:
                month = "Abril";
                break; 
            case 5:
                month = "Maio";
                break;
            case 6:
                month = "Junho";
                break;   
            case 7:
                month = "Julho";
                break;
            case 8:
                month = "Agosto";
                break;  
            case 9:
                month = "Setembro";
                break;
            case 10:
                month = "Outubro";
                break;   
            case 11:
                month = "Novembro";
                break;
            case 12:
                month = "Dezembro";
                break;  
            default:
                month = "Número informado é inválido";        
        }
    }
    return month; 
}

/**
 * 06)Escreva uma função que receba como parâmetro o código de acesso e retorne uma mensagem de acordo com a tabela abaixo:
    código      mensagem
    xpto        "Bem vindo convidado"
    alfa15      "preparando lançamento"
    tango       "foguete lançado"
   Caso o código informado seja um valor diverente do definido da tabela, a função deve retornar uma mensaagem indicando código inválido.  (Utilize o switch/case )
 */
function message(acessCode){
    let message = "";
    switch (acessCode){
        case "xpto":
            message = "Bem vindo convidado";
            break;
        case "alfa15":
            message = "preparando lançamento";
            break;   
        case "tango":
            message = "foguete lançado";
            break;
        default:
            message = "código inválido";        
    }
    return message; 
}

/**
 * 07) Escreva uma função que receba como parâmetro um número entre 1 e 4 e retorne uma mensagem de acordo com a tabela abaixo
    número    mensagem
        1       "Sacar"
        2       "depositar"
        3       "Verificar Saldo"
        4       "Saír"   
    Caso o código informado seja um valor diverente do definido da tabela, a função deve retornar uma mensaagem indicando código inválido.  (Utilize o switch/case )
 */
function menu(opcao){
    let message = "";
    if(opcao >= 1 && opcao <= 4){
        switch (opcao){
            case 1:
                message = "Sacar";
                break;
            case 2:
                message = "depositar";
                break;   
            case 3:
                message = "Verificar Saldo";
                break;
            default:
                message = "Sair";
                break;      
        }
    } else {
        message = "código inválido!.";
    }
    return message; 
}


console.log("|=========== EX 01 ====================|")
console.log("\n")
console.log(sumNumbersPair());
console.log("\n")


console.log("|=========== EX 02 ====================|")
console.log("\n")
console.log(sumNumbersOdd());
console.log("\n")


console.log("|=========== EX 03 ====================|")
console.log("\n")
console.log(sunIntervalNumbers(1, 5));
console.log(sunIntervalNumbers(50, 5));
console.log("\n")


console.log("|=========== EX 04 ====================|")
console.log("\n")
console.log(sunRangeNumber(5));
console.log(sunRangeNumber(3));
console.log(sunRangeNumber(20));
console.log("\n")


console.log("|=========== EX 05 ====================|")
console.log("\n")
console.log(searchMonth(3));
console.log(searchMonth(13));
console.log("\n")


console.log("|=========== EX 06 ====================|")
console.log("\n")
console.log(message("xpto"));
console.log(message("alfa15"));
console.log(message("tango"));
console.log(message("acesso"));
console.log("\n")

console.log("|=========== EX 07 ====================|")
console.log("\n")
console.log(menu(1));
console.log(menu(2));
console.log(menu(3));
console.log(menu(4));
console.log(menu(5));
console.log("\n")
