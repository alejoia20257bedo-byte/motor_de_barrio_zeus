// PROYECTO: MOTOR DE LÓGICA - GIMNASIO

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

// Convierte un registro en una línea de texto para mostrar sus datos de forma legible.
function mostrarRegistro(registro) {
  if (!registro) {
    return "Registro no válido";
  }
  return `Día ${registro.dia} · ${registro.persona} · ${registro.categoria} · $${registro.valor} (${registro.metodoPago})`;
}

// Reúne todos los registros en un listado con una línea por registro para facilitar su lectura.
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

// ---------- NIVEL 2 ----------------
// Suma el valor de todos los registros para saber cuánto dinero ingresó.
function totalGeneral(datos) {
  let suma = 0
  for (let i = 0; i < datos.length; i++) {
    suma = suma + datos[i].valor;
  }
  return suma;
}

// Divide el total entre la cantidad de registros para saber cuánto se pagó en promedio.
function promedio(datos) {
  if (datos.length === 0) return 0
  let sumaTotal = totalGeneral(datos)
  let resultado = sumaTotal / datos.length
  return resultado
}

// Devuelve el registro con el valor más alto para identificar el pago más grande.
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

// Selecciona los registros de la categoría indicada para consultar sus pagos.
function filtrarPorCategoria(datos, categoria) {
  let filtrados = []
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].categoria === categoria) {
      filtrados.push(datos[i])
    }
  }
  return filtrados
}

// Suma los valores por categoría para mostrar cuánto dinero ingresó en cada una.
function totalesPorCategoria(datos) {
  let resumen = {}
  for (let i = 0; i < datos.length; i++) {
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

// Usa un Set para listar una sola vez a cada persona que aparece en los registros.
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

// Compara cada registro con todos los demás para encontrar personas con dos o más registros.
// Cuenta las comparaciones para medir el trabajo de este método.
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

// Usa un Map para contar los registros por persona e identificar quién aparece dos o más veces.
// Cuenta los pasos para comparar el trabajo con el método de los recorridos anidados.
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

// Suma los ingresos de cada categoría y devuelve la que más dinero generó.
function categoriaEstrella(datos) {
  if (datos.length === 0) return null;

  const acumulado = new Map();
  for (let i = 0; i < datos.length; i++) {
    const cat = datos[i].categoria;
    const totalActual = acumulado.get(cat) || 0;
    acumulado.set(cat, totalActual + datos[i].valor);
  }

  let mejorCategoria = null;
  // -Infinity es menor que cualquier número finito, así que el primer total
  // se convierte en el máximo inicial aunque sea cero o negativo.
  let maxVenta = -Infinity;

  for (const [categoria, total] of acumulado) {
    if (total > maxVenta) {
      maxVenta = total;
      mejorCategoria = categoria;
    }
  }
  return mejorCategoria;
}

// Busca dos registros distintos cuyos valores sumen el monto objetivo.
// Usa un Map para consultar los valores ya vistos sin recorrer la lista otra vez.
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


// ---------- NIVEL 4 · Cola y pila ----------

const colaDeAtencion = [];

// Agrega a la persona al final de la fila y le informa cuántos turnos quedan en espera.
function llegar(persona) {
  if (!persona) {
    return "Debe ingresar un nombre válido.";
  }
  colaDeAtencion.push(persona);
  return `${persona} ingresó a la fila. Turnos en espera: ${colaDeAtencion.length}`;
}

// Retira de la fila a la primera persona para atenderla por orden de llegada.
function atender() {
  if (colaDeAtencion.length === 0) {
    return "No hay personas en la fila.";
  }
  // shift() quita y devuelve a la primera persona de la fila para atenderla.
  const atendido = colaDeAtencion.shift();
  return `Atendiendo a: ${atendido}`;
}

const historial = [];

// Añade el registro a la lista y lo guarda en el historial para poder deshacer la operación.
function agregarRegistro(datos, registro) {
  if (!registro) {
    return "Registro no válido.";
  }
  datos.push(registro);
  historial.push(registro);
  return `Registro agregado: ${registro.persona} ($${registro.valor})`;
}

// Retira el último registro agregado y lo saca del historial para deshacer esa operación.
function deshacer(datos) {
  if (historial.length === 0) {
    return "No hay acciones recientes para deshacer.";
  }
  // pop() quita y devuelve el último registro del historial para mostrar cuál se deshizo.
  const ultimo = historial.pop();
  // pop() quita el último registro de la lista de pagos para deshacer la incorporación.
  datos.pop();
  return `Se deshizo el registro de ${ultimo.persona} ($${ultimo.valor})`;
}




// ---------- ZONA DE PRUEBAS ----------

console.log("=== NIVEL 1: DATOS ===");
console.log("Primer registro:", mostrarRegistro(registros[0]));
console.log("Listado completo:\n" + listarTodo(registros));
console.log("Caso borde vacío:", listarTodo([]));

console.log("\n=== NIVEL 2: REPORTES ===");
console.log("Total general:", totalGeneral(registros));
console.log("Total vacío:", totalGeneral([]));
console.log("Promedio:", promedio(registros));
console.log("Promedio vacío:", promedio([]));
console.log("Registro mayor:", registroMayor(registros));
console.log("Registro mayor vacío:", registroMayor([]));
console.log("Filtrar 'Mensualidad':", filtrarPorCategoria(registros, "Mensualidad"));
console.log("Filtrar vacío:", filtrarPorCategoria([], "Mensualidad"));
console.log("Totales por categoría:", totalesPorCategoria(registros));
console.log("Totales por categoría vacío:", totalesPorCategoria([]));

console.log("\n=== NIVEL 3: SET Y MAP ===");
console.log("Personas únicas:", personasUnicas(registros));
console.log("Personas únicas vacío:", personasUnicas([]));
console.log("Recurrentes Lento (O(n²)):", recurrentesLento(registros));
console.log("Recurrentes Rápido (O(n)):", recurrentesRapido(registros));
console.log("Categoría estrella:", categoriaEstrella(registros));
console.log("Categoría estrella vacío:", categoriaEstrella([]));
console.log("Par que suma $140.000:", parQueSuma(registros, 140000));
console.log("Par que suma vacío:", parQueSuma([], 140000));

console.log("\n=== NIVEL 4: COLA Y PILA ===");
console.log(llegar("Carlos Mendoza"));
console.log(llegar("Laura Gómez"));
console.log(atender());
console.log(atender());
console.log("Caso borde fila vacía:", atender());

const nuevoIngreso = {
  persona: "Elena Díaz",
  categoria: "Clases Grupales",
  dia: 7,
  valor: 30000,
  metodoPago: "Efectivo"
};
console.log(agregarRegistro(registros, nuevoIngreso));
console.log("Total tras agregar:", registros.length);
console.log(deshacer(registros));
console.log("Total tras deshacer:", registros.length);
console.log("Caso borde historial vacío:", deshacer(registros));
