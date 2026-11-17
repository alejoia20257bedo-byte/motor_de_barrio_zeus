# 🏋️ Motor de Lógica - Gimnasio "Iron Pulse"

Proyecto desarrollado en JavaScript puro (Node.js) para la gestión y análisis de operaciones semanales de un gimnasio de barrio, aplicando estructuras de datos tradicionales, programación imperativa (ciclos manuales) y análisis de complejidad algorítmica.

## 👥 Equipo (Célula)
* **Integrante 1:** Laura Ramírez
* **Integrante 2:** Santiago Moreno
* **Integrante 3:** Ayder Arrieta
* **Integrante 4:** Alejandro Bedoya

---

## 📋 Descripción del Negocio y Datos
El sistema administra los ingresos semanales (días 1 al 7, de lunes a domingo) del gimnasio. Cada registro representa una transacción comercial y contiene la siguiente estructura:

* `persona` *(String)*: Nombre del cliente o socio.
* `categoria` *(String)*: Tipo de servicio o producto adquirido (`Mensualidad`, `Pase Diario`, `Tiquetera`, `Suplementos`, `Bebidas y Snacks`, `Entrenamiento Personalizado`).
* `dia` *(Number)*: Día de la semana en que se realizó el pago (`1` = Lunes a `7` = Domingo).
* `valor` *(Number)*: Monto de la transacción en pesos.
* `metodoPago` *(String - Propiedad extra)*: Medio utilizado para pagar (`Efectivo`, `Transferencia`, `Tarjeta`).

---

## 🚀 Cómo ejecutar el proyecto
Asegúrate de tener **Node.js** instalado en tu equipo. Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
node motor.js
```

---

## 📊 Tabla de Análisis de Costos (Big O)
*(Se irá completando a medida que avancemos en los niveles del proyecto)*

| Función | Nivel | Estructura / Técnica | Complejidad Temporal | Explicación breve |
| :--- | :---: | :--- | :---: | :--- |
| `mostrarRegistro` | 1 | Acceso directo | $O(1)$ | Pendiente por implementar |
| `listarTodo` | 1 | Ciclo `for` simple | $O(n)$ | Pendiente por implementar |
| `totalGeneral` | 2 | Acumulador | $O(n)$ | Pendiente por implementar |
| `promedio` | 2 | Acumulador | $O(n)$ | Pendiente por implementar |
| `registroMayor` | 2 | Búsqueda lineal | $O(n)$ | Pendiente por implementar |
| `filtrarPorCategoria` | 2 | Filtro manual | $O(n)$ | Pendiente por implementar |
| `totalesPorCategoria` | 2 | Agrupación en objeto | $O(n)$ | Pendiente por implementar |
| `personasUnicas` | 3 | `Set` | $O(n)$ | Pendiente por implementar |
| `recurrentesLento` | 3 | Ciclos anidados | $O(n^2)$ | Pendiente por implementar |
| `recurrentesRapido` | 3 | `Map` / `Set` | $O(n)$ | Pendiente por implementar |
| `categoriaEstrella` | 3 | `Map` | $O(n)$ | Pendiente por implementar |
| `parQueSuma` | 3 | `Set` de complementos | $O(n)$ | Pendiente por implementar |
| `llegar` / `atender` | 4 | Cola (FIFO) | $O(1)$ / $O(n)$ | Pendiente por implementar |
| `agregarRegistro` / `deshacer` | 4 | Pila (LIFO) | $O(1)$ | Pendiente por implementar |