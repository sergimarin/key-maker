# 🔐 key-maker

Generador de contraseñas seguras y aleatorias.

## 📋 Características

- Dos modos: **Caracteres** y **Frase de paso** (palabras en español)
- Generación con `crypto.getRandomValues` (aleatoriedad criptográfica, sin sesgo de módulo)
- Modo caracteres:
  - Longitud personalizable (de 4 a 32)
  - Mayúsculas, minúsculas, números y símbolos (siempre incluye al menos uno de cada tipo marcado)
  - Opción para evitar caracteres ambiguos (`O 0 l 1 I`)
- Modo frase de paso:
  - De 3 a 10 palabras de un diccionario en español (sin tildes ni ñ, fácil de teclear)
  - Separador configurable (guion, punto, guion bajo, espacio o ninguno)
  - Primera letra en mayúscula y número final opcionales
- Indicador de seguridad (Débil, Normal, Fuerte, Muy segura) con entropía en bits y tiempo estimado para romperla
- Colores distintos para letras, números y símbolos
- Atajos de teclado: `Espacio` o `R` para regenerar, `C` para copiar
- Copia al portapapeles con un clic
- Diseño de dos columnas, responsive (PC, móvil y tablet)

## ⚙️ Instalación

Clona el proyecto:
```bash
git clone https://github.com/sergimarin/key-maker.git
cd key-maker
```

Instala las dependencias:
```bash
pnpm install
```

Ejecuta el servidor de desarrollo:
```bash
pnpm dev
```

Compila para producción:
```bash
pnpm build
```

## ⭐️ Licencia

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
