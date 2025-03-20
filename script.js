$(document).ready(function () {
  $(".phone_with_ddd").mask("(00) 00000-0000");
  $("#cep").mask("00000-000");
});
document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (lkm) {
    if (!this.checkValidity()) {
      lkm.preventDefault();
      alert("Preencha todos os dados");
    } else {
      lkm.preventDefault();
      window.location.href = "bagulho.html";
    }
  });
