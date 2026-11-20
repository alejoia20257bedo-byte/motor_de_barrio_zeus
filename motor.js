// ==========================================
// PROYECTO: MOTOR DE LÓGICA - GIMNASIO
// ==========================================
const registros = [
  // DÍA 1 (Lunes)
  { persona: "Carlos Mendoza", categoria: "Mensualidad", dia: 1, valor: 85000, metodoPago: "Transferencia" },
  { persona: "Laura Gómez", categoria: "Suplementos", dia: 1, valor: 45000, metodoPago: "Efectivo" },
  { persona: "Andrés Felipe", categoria: "Entrenamiento Personalizado", dia: 1, valor: 60000, metodoPago: "Tarjeta" },
  { persona: "Sofía Castro", categoria: "Tiquetera", dia: 1, valor: 50000, metodoPago: "Transferencia" },

  // DÍA 2 (Martes)
  { persona: "Carlos Mendoza", categoria: "Bebidas y Snacks", dia: 2, valor: 12000, metodoPago: "Efectivo" },
  { persona: "Mateo Ríos", categoria: "Pase Diario", dia: 2, valor: 15000, metodoPago: "Efectivo" },
  { persona: "Valentina Ruiz", categoria: "Mensualidad", dia: 2, valor: 85000, metodoPago: "Tarjeta" },
  { persona: "Laura Gómez", categoria: "Bebidas y Snacks", dia: 2, valor: 8000, metodoPago: "Efectivo" },

  // DÍA 3 (Miércoles)
  { persona: "Julián Herrera", categoria: "Mensualidad", dia: 3, valor: 85000, metodoPago: "Transferencia" },
  { persona: "Sofía Castro", categoria: "Suplementos", dia: 3, valor: 110000, metodoPago: "Tarjeta" },
  { persona: "Camila Torres", categoria: "Pase Diario", dia: 3, valor: 15000, metodoPago: "Efectivo" },
  { persona: "Andrés Felipe", categoria: "Bebidas y Snacks", dia: 3, valor: 10000, metodoPago: "Efectivo" },

  // DÍA 4 (Jueves)
  { persona: "Carlos Mendoza", categoria: "Suplementos", dia: 4, valor: 35000, metodoPago: "Transferencia" },
  { persona: "Diego Vargas", categoria: "Tiquetera", dia: 4, valor: 50000, metodoPago: "Tarjeta" },
  { persona: "Valentina Ruiz", categoria: "Entrenamiento Personalizado", dia: 4, valor: 60000, metodoPago: "Transferencia" },

  // DÍA 5 (Viernes)
  { persona: "Laura Gómez", categoria: "Mensualidad", dia: 5, valor: 85000, metodoPago: "Tarjeta" },
  { persona: "Mateo Ríos", categoria: "Bebidas y Snacks", dia: 5, valor: 9000, metodoPago: "Efectivo" },
  { persona: "Natalia Peña", categoria: "Pase Diario", dia: 5, valor: 15000, metodoPago: "Efectivo" },
  { persona: "Sofía Castro", categoria: "Bebidas y Snacks", dia: 5, valor: 14000, metodoPago: "Efectivo" },

  // DÍA 6 (Sábado)
  { persona: "Andrés Felipe", categoria: "Mensualidad", dia: 6, valor: 85000, metodoPago: "Transferencia" },
  { persona: "Sebastián Ortiz", categoria: "Pase Diario", dia: 6, valor: 15000, metodoPago: "Efectivo" },
  { persona: "Valentina Ruiz", categoria: "Suplementos", dia: 6, valor: 75000, metodoPago: "Tarjeta" },
  { persona: "Carlos Mendoza", categoria: "Entrenamiento Personalizado", dia: 6, valor: 60000, metodoPago: "Transferencia" },

  // DÍA 7 (Domingo)
  { persona: "Mateo Ríos", categoria: "Pase Diario", dia: 7, valor: 15000, metodoPago: "Efectivo" },
  { persona: "Laura Gómez", categoria: "Tiquetera", dia: 7, valor: 50000, metodoPago: "Transferencia" }
];

// ==========================================
// NIVEL 1: VISUALIZACIÓN

// ---------- NIVEL 1 · Datos ----------

function mostrarRegistro(registro) {
  if (!registro) {
    return "Registro no válido";
  }
  return `Día ${registro.dia} · ${registro.persona} · ${registro.categoria} · $${registro.valor} (${registro.metodoPago})`;
}

function listarTodo(datos) {
  if (datos.length === 0) {
    return "No hay registros disponibles.";
  }

  let listado = "";

  for (let i = 0; i < datos.length; i++) {
    listado = listado + mostrarRegistro(datos[i]);
    if (i < datos.length - 1) {
      listado += "\n";
    }
  }

  return listado;
}
// ---------- ZONA DE PRUEBAS ----------
console.log("--- NIVEL 1 ---");
console.log(mostrarRegistro(registros[0]));
console.log(listarTodo(registros));
console.log(listarTodo([])); // Caso borde: arreglo vacío
// ==========================================

// Aquí implementaremos mostrarRegistro y listarTodo
function totalGeneral(datos) {
  let suma = 0
  for(let i = 0; i < datos.length;i++){
    suma = suma + datos[i].valor;
  }
  return suma;
}
function promedio(datos) {
  if (datos.length === 0) return 0
  let sumaTotal = totalGeneral(datos)
  let resultado = sumaTotal / datos.length
  return resultado
}
function registroMayor(datos) {
  if (datos.length === 0) return null
  let mayor = datos[0]
  for (let i = 1; i < datos.length; i++) {
    let actual = datos[i];
    if (actual && actual.valor > mayor.valor) {
      mayor = actual;
    }
  }
  return mayor;
}
function filtrarPorCategoria(datos, categoria) {
  let filtrados = []
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].categoria === categoria) {
      filtrados.push(datos[i])
    } 
  }
  return filtrados
}
function totalesPorCategoria(datos) {
  let resumen = {}
  for(let i = 0; i < datos.length; i++){
    let categoria = datos[i].categoria
    let monto = datos[i].valor
    if (resumen[categoria] === undefined) {
      resumen[categoria] = monto
    } else {
      resumen[categoria] += monto
    }
  }
  return resumen
}

// ---------- NIVEL 3 · Set y Map ----------

function personasUnicas(datos) {
  const unicos = new Set();
  for (let i = 0; i < datos.length; i++) {
    unicos.add(datos[i].persona);
  }
  const resultado = [];
  for (const persona of unicos) {
    resultado.push(persona);
  }
  return resultado;
}

function recurrentesLento(datos) {
  let pasos = 0;
  const recurrentes = [];
  const yaAgregados = new Set();

  for (let i = 0; i < datos.length; i++) {
    for (let j = 0; j < datos.length; j++) {
      pasos++;
      if (i !== j && datos[i].persona === datos[j].persona) {
        if (!yaAgregados.has(datos[i].persona)) {
          yaAgregados.add(datos[i].persona);
          recurrentes.push(datos[i].persona);
        }
      }
    }
  }
  return { recurrentes, pasos };
}

function recurrentesRapido(datos) {
  let pasos = 0;
  const conteo = new Map();
  const recurrentes = [];

  for (let i = 0; i < datos.length; i++) {
    pasos++;
    const persona = datos[i].persona;
    const actual = conteo.get(persona) || 0;
    conteo.set(persona, actual + 1);
  }
  for (const [persona, cantidad] of conteo) {
    pasos++;
    if (cantidad > 1) {
      recurrentes.push(persona);
    }
  }
  return { recurrentes, pasos };
}

function categoriaEstrella(datos) {
  if (datos.length === 0) return null;

  const acumulado = new Map();
  for (let i = 0; i < datos.length; i++) {
    const cat = datos[i].categoria;
    const totalActual = acumulado.get(cat) || 0;
    acumulado.set(cat, totalActual + datos[i].valor);
  }

  let mejorCategoria = null;
  let maxVenta = -Infinity;

  for (const [categoria, total] of acumulado) {
    if (total > maxVenta) {
      maxVenta = total;
      mejorCategoria = categoria;
    }
  }
  return mejorCategoria;
}

function parQueSuma(datos, objetivo) {
  const vistos = new Map();

  for (let i = 0; i < datos.length; i++) {
    const complemento = objetivo - datos[i].valor;
    if (vistos.has(complemento)) {
      return [vistos.get(complemento), datos[i]];
    }
    vistos.set(datos[i].valor, datos[i]);
  }
  return null;
}

// ==========================================
// ZONA DE PRUEBAS
console.log("--- NIVEL 2 ---");
console.log(totalGeneral(registros))
console.log(totalGeneral([]))
console.log(promedio(registros))
console.log(promedio([]))
console.log(registroMayor(registros))
console.log(registroMayor([]))
console.log(filtrarPorCategoria(registros, "Mensualidad"))
console.log(filtrarPorCategoria([], "Mensualidad"))
console.log(totalesPorCategoria(registros))
console.log(totalesPorCategoria([]))
// ==========================================
// console.log("Total de registros cargados:", registros.length);


