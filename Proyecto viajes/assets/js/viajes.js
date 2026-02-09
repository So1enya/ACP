// para las paginas de las tarjetas

const tarjetas = document.querySelectorAll('.tarjeta');
const tarjetasPorPagina = 3;

function cambiarPagina(pagina) {
    const inicio = (pagina - 1) * tarjetasPorPagina;
    const fin = inicio + tarjetasPorPagina;

    tarjetas.forEach((tarjeta, index) => {
        if (index >= inicio && index < fin) {
            tarjeta.style.display = 'flex';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}


cambiarPagina(1);




document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-toggle");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {

            const tarjeta = boton.closest(".tarjeta");
            const lugares = tarjeta.querySelector(".tarjeta-lugares");
            const abierta = tarjeta.classList.contains("abierta");

            // Cerrar todas
            document.querySelectorAll(".tarjeta").forEach(t => {
                t.classList.remove("abierta");
                const l = t.querySelector(".tarjeta-lugares");
                if (l) l.style.display = "none";
            });

            document.querySelectorAll(".btn-toggle").forEach(b => {
                b.textContent = "Ver lugares";
            });

            // Abrir la actual si estaba cerrada
            if (!abierta) {
                tarjeta.classList.add("abierta");
                lugares.style.display = "flex";
                boton.textContent = "Ocultar lugares";
            }
        });
    });
});
