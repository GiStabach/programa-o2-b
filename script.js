function mostrarProjeto(id) {

    const detalhes =
        document.getElementById(id);

    if (detalhes.style.display === "block") {

        detalhes.style.display = "none";

    } else {

        detalhes.style.display = "block";

    }
}