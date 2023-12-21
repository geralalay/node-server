

let tasks = [];

function mostrarTareas() {
  console.log(tasks);
  };


function addTask(description) {
 return new Promise((resolve,reject)=>{
  const task = {
    id: tasks.length + 1,
    description:description,
    completed:false

  };
  tasks.push(task);
  console.log(`Tarea añadida: [No completada] ${description}`);
  resolve(task)
 })
}

function deleteTask(index) {
  return new Promise ((resolve,reject)=>{
    if (index >= 0 && index < tasks.length) {
      const deletedTask = tasks.splice(index, 1);
      console.log(`Tarea eliminada: [${deletedTask[0].completed ? 'Completada' : 'No completada'}] ${deletedTask[0].description}`);
      resolve(deletedtask)
    } else {
      console.log('Índice inválido. La tarea no se pudo eliminar.');
      reject("tarea no encontrada")

    }
  })
}

function completeTask(index) {
 return new Promise((resolve,reject)=>{
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log(`Tarea completada: [Completada] ${tasks[index].description}`);
    resolve(completedtask)
  } else {
    console.log('Índice inválido. La tarea no se pudo completar.');
    reject("tarea no completada")
  }
 })
}

completeTask("1")
  .then(resultado => {
    console.log('Tarea completada:', resultado);
  })
  .catch(error => {
    console.error(error);
  });

async function comandos(){
  await addTask("Sacar al perro");
    await addTask("Pagar la luz");
    await addTask("bailar mucho");
    mostrarTareas();
  
    try {    
      await deleteTask("2");
      mostrarTareas();
    } catch (error) {
      console.error(error);
    }
}
  comandos();