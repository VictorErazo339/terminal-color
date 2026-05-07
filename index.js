// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// Función básica
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// 🔵 Equipo A
function mostrarEstado() {
  console.log(chalk.blue("🚀 Iniciando programa..."));
  console.info(chalk.cyan("🔄 Proceso en ejecución..."));
  console.warn(chalk.yellow("⚠️ Casi listo..."));
  console.error(chalk.red("❌ Simulación de error leve (todo bien)"));
  console.log(chalk.green("✅ Programa finalizado correctamente"));
}

// 🔴 Equipo B
function simularError() {
  console.warn(chalk.yellow("⚠️ Advertencia: algo podría fallar..."));
  console.error(chalk.red("❌ Error: algo falló!"));
  console.log(chalk.green("✅ Recuperación exitosa, todo vuelve a la normalidad"));
}

// Ejecución
saludar("Equipo JS");
mostrarEstado();
simularError();