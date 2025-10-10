# Proyecto-final-DSII

Repositorio Angular (Proyecto final) que contiene una pequeña aplicación de búsqueda y visualización de comidas y bebidas.

## Propósito y alcance

Este proyecto es una aplicación de ejemplo desarrollada con Angular que permite buscar recetas y bebidas, ver resultados en listas, y manejar un carrito de compras (shopping cart) simple. Está orientada a un proyecto académico/portafolio y sirve como demostración de organización de componentes, servicios y rutas en Angular.

## Estructura del proyecto

La estructura principal del repositorio es la siguiente (resumen):

- `src/`
  - `index.html`, `main.ts`, `styles.css` — entrada de la aplicación y estilos globales.
  - `app/` — código de la aplicación:
    - `app.ts`, `app.routes.ts`, `app.config.ts`, `app.html`, `app.css` — configuración y root component.
    - `meal/` — módulo o conjunto relacionado con la funcionalidad principal:
      - `components/` — componentes reutilizables:
        - `counter/` — contador (HTML + TS)
        - `meal-list/` — lista de comidas y `meal-list-item/`
        - `shopping-car/` — carrito de compras
        - `side-menu/` — menú lateral y subcomponentes (header, options)
      - `interfaces/` — `giphy.interfaces.ts` (interfaces/ tipos usados)
      - `mapper/` — mapeadores para transformar respuestas (`drink.mapper.ts`, `meal.mapper.ts`)
      - `pages/` — páginas/ vistas:
        - `dasboard-page/`, `search-category/`, `search-drink/`, `search-meal/`
      - `services/` — servicios que obtienen datos (por letra, por nombre, por categoría) y `shopping-cart.ts`.
  - `environments/` — archivos de configuración de entornos (`environment.ts`, `environment.development.ts`).

## Funcionalidades principales

- Búsqueda de comidas por letra o por nombre.
- Búsqueda de bebidas (drinks) por letra.
- Filtrado por categoría.
- Listado de resultados con componentes reutilizables.
- Carrito de compras simple para agregar/eliminar items.
- Organización modular con mappers y servicios separados.

## Dependencias

Las dependencias están en `package.json`. Resumen principal:

- Angular 20 (core, router, forms, etc.)
- RxJS
- TailwindCSS y PostCSS para estilos
- Zone.js

DevDependencies:

- Angular CLI y herramientas de compilación (`@angular/cli`, `@angular/build`)
- TypeScript
- Karma/Jasmine para tests

Puedes ver la lista completa en `package.json`.

## Requisitos previos

- Node.js (recomendado 18+)
- npm (v9+ recomendable) o yarn
- Git (si quieres clonar el repo)

## Instalación y ejecución (Windows / PowerShell)

1. Clonar el repositorio (si no lo has hecho):

```powershell
Set-Location -Path 'C:\Users\jdrey\OneDrive\Desktop\p_final'
git clone https://github.com/FerDaniel01/Proyecto-final-DSII.git
Set-Location -Path 'C:\Users\jdrey\OneDrive\Desktop\p_final\Proyecto-final-DSII'
```

2. Instalar dependencias:

```powershell
npm install
```

3. Ejecutar la aplicación en modo desarrollo:

```powershell
npm start
# o usando ng directamente si tienes @angular/cli global:
ng serve
```

La app quedará disponible típicamente en `http://localhost:4200`.

4. Compilar para producción:

```powershell
npm run build
```

5. Ejecutar tests (si aplica):

```powershell
npm test
```

## Notas sobre autenticación de APIs y claves

Si los servicios (`meal/services/*` o `drink/*`) consumen APIs externas que requieren claves (API keys), revisa `src/environments` para configurar las variables necesarias. No incluyas tus claves en el repositorio público.

## Sugerencias y mejoras futuras

- Añadir un README más detallado por componente y por servicio.
- Agregar scripts para linting y formateo.
- Añadir CI (GitHub Actions) para build y tests.
- Documentar las rutas principales y ejemplos de uso (cadenas de búsqueda, payloads esperados).

## Contacto

Si tienes preguntas sobre el proyecto, abre un issue en el repositorio o contacta al autor.

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.3.

## Servidor de desarrollo

Para iniciar un servidor local de desarrollo, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

## Generar código (scaffolding)

El Angular CLI incluye potentes herramientas para generar código. Para crear un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para obtener la lista completa de esquemas disponibles (por ejemplo, `componentes`, `directivas` o `pipes`), ejecuta:

```bash
ng generate --help
```

## Compilación

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y guardará los artefactos de la compilación en el directorio `dist/`. Por defecto, la compilación de producción optimiza la aplicación para rendimiento y tamaño.
