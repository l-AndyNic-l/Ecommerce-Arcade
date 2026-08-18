# 🕹️ Retro-Manía

**Retro-Manía** es un sitio web inspirado en la estética de los videojuegos arcade clásicos. El proyecto presenta una interfaz con temática retro, navegación entre diferentes secciones y un diseño visual basado en colores y elementos característicos de los videojuegos.

## 📌 Descripción

El proyecto consiste en el desarrollo de una página web para una tienda/plataforma relacionada con videojuegos y productos de temática arcade.

Actualmente cuenta con una estructura HTML5 y estilos CSS que permiten navegar entre diferentes secciones del sitio:

* 🏠 Inicio
* 🎮 Productos
* 🛠️ Servicios
* 🛍️ Tienda
* 👥 Nosotros
* 📞 Contactos
* 🛒 Carrito
* ❤️ Favoritos
* 👤 Cuenta

## 🛠️ Tecnologías utilizadas

* **HTML5** — Estructura y contenido de las páginas.
* **CSS3** — Diseño, colores, distribución y animaciones.
* **Font Awesome** — Iconos utilizados en el menú de navegación.
* **Git / GitHub** — Control de versiones del proyecto.

## 📂 Estructura del proyecto

```text
Arcade/
│
├── index.html
├── styles.css
├── README.md
│
├── img/
│   └── logo-stacked.png
│
└── pestañas/
    ├── carrito.html
    ├── contactos.html
    ├── cuenta.html
    ├── favoritos.html
    ├── nosotros.html
    ├── productos.html
    ├── servicios.html
    └── tienda.html
```

## 🎨 Diseño

La interfaz utiliza una estética inspirada en los videojuegos arcade, destacando:

* Fondo en tonos claros.
* Barra de navegación de color morado.
* Tipografía con estilo arcade.
* Efectos `hover` en los enlaces.
* Subrayado animado para los elementos del menú.
* Indicador visual para identificar la sección activa.
* Iconos para carrito, favoritos y cuenta.
* Logo personalizado de Retro-Manía.

## 🧭 Navegación

La página principal contiene dos áreas de navegación.

### Menú principal

Permite acceder a:

```text
Inicio
Productos
Servicios
Tienda
Nosotros
Contactos
```

### Menú secundario

Incluye accesos a:

```text
🛒 Carrito
❤️ Favoritos
👤 Cuenta
```

Cada sección posee su propio archivo HTML y mantiene el mismo encabezado y estilo visual.

## ▶️ Ejecución

Este proyecto no requiere instalación de dependencias ni un servidor backend.

Para ejecutarlo localmente:

1. Clonar el repositorio.

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Entrar a la carpeta del proyecto.

```bash
cd Arcade
```

3. Abrir `index.html` en un navegador web.

También se puede utilizar **Visual Studio Code** junto con la extensión **Live Server** para ejecutar el proyecto.

## 📦 Dependencias externas

El proyecto utiliza **Font Awesome** mediante CDN para los iconos de navegación.

La conexión a Internet puede ser necesaria para cargar estos iconos cuando se ejecuta la página mediante el CDN utilizado en los archivos HTML.

## 🚧 Estado del proyecto

**En desarrollo.**

Actualmente se encuentra implementada la estructura base del sitio y la navegación entre sus principales secciones. Las funcionalidades dinámicas, como gestión real del carrito, favoritos, cuentas de usuario y productos, pueden incorporarse posteriormente.

## 🔮 Mejoras futuras

Entre las posibles mejoras se encuentran:

* [ ] Implementar catálogo dinámico de productos.
* [ ] Agregar sistema de carrito funcional.
* [ ] Implementar favoritos.
* [ ] Crear sistema de inicio de sesión y registro.
* [ ] Agregar buscador de productos.
* [ ] Implementar filtros y categorías.
* [ ] Agregar diseño responsive para dispositivos móviles.
* [ ] Incorporar un backend y base de datos.
* [ ] Implementar sistema de pagos.
* [ ] Mejorar las animaciones y efectos visuales.

## 👨‍💻 Autor

**Adrian Galo Lopez Ortega**

Proyecto académico — **Retro-Manía / Arcade**.
