const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function printTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`${index + 1}. [${status}] ${task.description}`);
  });
}

function addTask(description) {
  const task = {
    id: tasks.length + 1,
    description,
    completed: false
  };
  tasks.push(task);
  console.log(`Tarea añadida: [No completada] ${description}`);
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    const deletedTask = tasks.splice(index, 1);
    console.log(`Tarea eliminada: [${deletedTask[0].completed ? 'Completada' : 'No completada'}] ${deletedTask[0].description}`);
  } else {
    console.log('Índice inválido. La tarea no se pudo eliminar.');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log(`Tarea completada: [Completada] ${tasks[index].description}`);
  } else {
    console.log('Índice inválido. La tarea no se pudo completar.');
  }
}

rl.question('¡Bienvenido al administrador de tareas! \nElija una opción:\n1. Añadir tarea\n2. Eliminar tarea\n3. Completar tarea\n', (option) => {
  if (option === '1') {
    rl.question('Ingrese la descripción de la tarea: ', (description) => {
      addTask(description);
      printTasks();
      rl.close();
    });
  } else if (option === '2') {
    rl.question('Ingrese el índice de la tarea a eliminar: ', (index) => {
      deleteTask(index - 1);
      printTasks();
      rl.close();
    });
  } else if (option === '3') {
    rl.question('Ingrese el índice de la tarea a completar: ', (index) => {
      completeTask(index - 1);
      printTasks();
      rl.close();
    });
  } else {
    console.log('Opción inválida. Por favor, elija una opción válida.');
    rl.close();
  }
});
