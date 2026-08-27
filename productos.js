
function filtrar(categoria) {

    let filtro = document.getElementById(categoria);
    
    document.querySelectorAll(`[class="activo_filtro"]`).forEach(el => {
        el.classList.remove("activo_filtro");
    });

    filtro.classList.add("activo_filtro");

    if (categoria == "todo") {

        document.querySelectorAll(`[class="producto"]`).forEach(el => {
            el.style.display = 'flex';
        });

        return;

    } else {
            
        document.querySelectorAll(`[class="producto"]`).forEach(el => {
            el.style.display = 'none';
        });

        document.querySelectorAll(`[id="${categoria}"]`).forEach(el => {
            el.style.display = 'flex';
        });
    };

};