import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";
import sharp from "sharp";
import chalk from "chalk";

// Imagenes originales
let inputFolder = "src";
// Imagenes resultantes
let outputFolder = "opt";
// Ancho a redimensionar
let targetWidth = 1920;

// Lo haremos en una función asincorna para acelerar el proceso de optimización al optimzar varias imagenes al mismo tiempo
// En Node, cuando trabajamos con una función asincrona podemos trabajar con try/catch para obtener los errores
const processImg = async () => {
  try {
    // Con fse obtenemos el directorio de las imagenes de entrada
    const files = await fse.readdir(inputFolder);
    console.log(files);
    for (const file of files) {
      // Declaramos las referencias de entrada y de salida
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${outputFolder}/${file}`;

      // Haciendo uso de sharp podemos redimensionarla y asignarla en el nuevo directorio
      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      // Pasamos la imagen por los procesos de imagemin
      await imagemin([outputPath], {
        destination: outputFolder,
        plugins: [
          imageminJpegtran({ quality: 80 }), // Comprimir imagen JPG con calidad del 80%
          imageminPngquant(), // Comprimir imagen PNG
          imageminSvgo(), // Comprimir imagen SVG
          imageminWebp({ quality: 80 }), // Comprimir imagen WebP con calidad del 80%
          imageminGifsicle(), // Comprimir imagen GIF
        ],
      });
      console.log(chalk.green(`Se ha optimizado la imagen ${file}`));
    }
    console.log(
      chalk.bgGreenBright.bold(
        "Ha terminado con éxito el proceso de optimizar tus imagenes"
      )
    );
  } catch (error) {
    console.error(error);
  }
};

processImg();
