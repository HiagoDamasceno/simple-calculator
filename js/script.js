const calcular = (n1, n2) => {
    n1 = parseFloat(document.getElementById('n1').value);

    n2 = parseFloat(document.getElementById('n2').value);

    selector = document.getElementById("selector").value;

    switch(selector){
        case '+': 
            calculo = n1 + n2;
            document.getElementById('resultado').innerHTML = parseFloat(calculo);
            break;
        case '-': 
            calculo = n1 - n2;
            document.getElementById('resultado').innerHTML = parseFloat(calculo);
            break;
       case '*': 
            calculo = n1 * n2;
            document.getElementById('resultado').innerHTML = parseFloat(calculo);
            break;
        case '/': 
            if (n2 === 0) {
                document.getElementById("resultado").innerHTML = "Proibido dividir por zero";
            } else {
                calculo = n1 / n2;
                document.getElementById('resultado').innerHTML = parseFloat(calculo);
            }
            break;
        default:
         document.getElementById("resultado").innerHTML = "Operação inválida";
                
    }
}

const clearInput = () => {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").innerHTML = "";

};
