display = document.getElementById("display");
contador = "";
operador = "";

const press = (num) => {
  contador += num;
  con = contador.split(" ");
  //   if (con.length == 3) {
  //     calculate();
  //   }
  actualizar();
};

const clr = () => {
  contador = "";
  operador = "";
  display.innerHTML = 0;
};

const setOP = (op) => {
  if (operador !== "" && contador !== "") {
    calculate();
  }
  operador = op;
  contador += " " + op + " ";
  actualizar();
};

const calculate = () => {
  // divido la entrada actual en partes (número, operador, número)
  calculo = contador.split(" ");
  n1 = parseFloat(calculo[0]);
  n2 = parseFloat(calculo[2]);
  resultado = 0;
  //uso el switch para ver que opcion es el operador
  switch (calculo[1]) {
    case "+":
      resultado = n1 + n2;
      break;
    case "-":
      resultado = n1 - n2;
      break;
    case "/":
      resultado = n1 / n2;
      break;
    case "*":
      resultado = n1 * n2;
      break;
    default:
      return;
  }
  contador = String(resultado);
  operador = "";
  actualizar();
};

const actualizar = () => {
  document.getElementById("display").innerHTML = contador;
};
