# Proyecto-Tic-Tac-Toe

Vas a almacenar el tablero de juego como una matriz dentro de un objeto de tablero de juego, ¡así que empieza por ahí! Tus jugadores también van a estar almacenados en objetos, y probablemente vas a querer un objeto para controlar el flujo del juego en sí.

Su objetivo principal aquí es tener la menor cantidad de código global posible. Trata de meter todo lo que puedas dentro de las fábricas. Si solo necesita una única instancia de algo (por ejemplo, la placa de juego, el displayController, etc.), envuelva la fábrica dentro de un IIFE (patrón de módulo) para que no se pueda reutilizar para crear instancias adicionales.

En este proyecto, piense detenidamente dónde debe residir cada bit de lógica. Cada pequeña pieza de funcionalidad debe poder caber en el juego, el jugador o los objetos del tablero de juego. Tenga cuidado de ponerlos en lugares "lógicos". ¡Pasar un poco de tiempo haciendo una lluvia de ideas aquí puede hacer tu vida mucho más fácil más adelante!

Si tienes problemas, Construir una casa desde adentro hacia afuera es un gran artículo que presenta un ejemplo muy aplicable tanto de cómo podrías abordar este proyecto como de cómo podrías organizar y estructurar tu código.

Concéntrese primero en obtener un juego que funcione en la consola. 

¡Asegúrate de incluir una lógica que compruebe cuándo termina el juego! 

Deberías estar revisando todos los 3 seguidos ganadores y los empates. Trata de evitar pensar en el DOM y tu HTML/CSS hasta que tu juego esté funcionando.
Una vez que tengas un juego de consola que funcione, crea un objeto que maneje la lógica de la pantalla/DOM. Escriba una función que represente el contenido de la matriz del tablero de juego en la página web (por ahora, siempre puede llenar la matriz del tablero de juego con s y s solo para ver qué está pasando)."X""O"

Escriba las funciones que permiten a los jugadores agregar marcas a un lugar específico en el tablero interactuando con los elementos DOM apropiados (por ejemplo, permitir que los jugadores hagan clic en un cuadrado del tablero para colocar su marcador). ¡No olvides la lógica que impide que los jugadores jueguen en lugares que ya están ocupados!

Limpie la interfaz para permitir que los jugadores ingresen sus nombres, incluya un botón para iniciar / reiniciar el juego y agregue un elemento de visualización que muestre los resultados al final del juego.