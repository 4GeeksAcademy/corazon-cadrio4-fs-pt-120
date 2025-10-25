/* 
Funciones a elaborar:

* printByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* printByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/


const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]




const printByLine = (ms) => {
    asciiHeart.forEach((element, i) => {
       setTimeout(() => {
        console.log(element)
    }, 3000 * i );
});
};

printByLine(3000);

const printByChart = (ms) => {
  let lineIndex = 0;
  let charIndex = 0;

  const printNextChar = () => {
    if (lineIndex >= asciiHeart.length) return;

    const line = asciiHeart[lineIndex];

    if (charIndex < line.length) {
      process.stdout.write(line[charIndex]);
      charIndex++;
      setTimeout(printNextChar, ms);
    } else {
      process.stdout.write('\n');
      lineIndex++;
      charIndex = 0;
      setTimeout(printNextChar, ms); 
    }
  };

  printNextChar();
};

printByChart(200);