const VALOR_HORA = 51000;
const DESCUENTO = 0.08;
const HORAS_MAX_SEMANA = 19;
const HORAS_MAX_MES = 76;

function calcularNomina() {
    const nombre = document.getElementById('nombre').value;
    const horas = parseInt(document.getElementById('horas').value, 10);

    if (!nombre) {
        alert("Por favor, ingrese el nombre.");
        return;
    }

    if (horas < 0 || horas > HORAS_MAX_MES) {
        alert(`El número de horas trabajadas debe estar entre 0 y ${HORAS_MAX_MES} horas al mes.`);
        return;
    }

    if (horas > HORAS_MAX_SEMANA * 4) {
        alert(`El número de horas trabajadas no debe superar ${HORAS_MAX_SEMANA} horas por semana.`);
        return;
    }

    const salarioBruto = VALOR_HORA * horas;
    const descuento = salarioBruto * DESCUENTO;
    const salarioNeto = salarioBruto - descuento;

    document.getElementById('resultado').innerHTML = `Hola ${nombre}, tu salario es $${salarioNeto.toFixed(2)}`;
}
