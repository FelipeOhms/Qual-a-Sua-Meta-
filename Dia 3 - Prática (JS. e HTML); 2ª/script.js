function mostrarMensagem() {
   let meta = document.getElementById("Meta").value;
   let tempo = document.getElementById("Tempo").value;

   let mensagem = "Olá, minha meta é " + meta +
       " e o tempo que eu tenho para cumprir essa meta é de " + tempo +
       " Meses. Espero que eu consiga entender, mas pra isso, preciso estudar muito!!!";

   console.log(mensagem);
}
