const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

 // TODO 1: verifique se algum campo está vazio.
 // TODO 2: converta t1, t2 e t3 com Number().
 // TODO 3: valide as notas entre 0 e 10.
 // TODO 4: calcule a média.
 // TODO 5: use if/else para definir a situação.
 // TODO 6: mostre média e situação em saida.textContent.
});

const nota = 7;
if (nota >= 9) {
console.log("Excelente");
} else if (nota >= 6) {
console.log("Satisfatório");
} else {
console.log("Revisar conteúdos");
}

const media = (n1 + n2 + n3) / 3;
if (media >= 6) {
saida.textContent = "Aprovado";
} else {
saida.textContent = "Recuperação";
}
