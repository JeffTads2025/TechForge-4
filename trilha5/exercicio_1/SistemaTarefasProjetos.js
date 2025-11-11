class TaskManager {
    constructor() {
        this.tasks = [];
    }
}
class Project extends TaskManager {
    constructor(projectName) {
        super();
        this.projectName = projectName;
    }
    addTask(task) {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
            console.log(`[Projeto ${this.projectName}] Tarefa adicionada: "${task}"`);
        }
        else {
            console.log(`[Projeto ${this.projectName}] A tarefa "${task}" já existe.`);
        }
    }
    listTasks() {
        console.log(`\n--- Tarefas do Projeto: ${this.projectName} ---`);
        return this.tasks;
    }
}
class DailyTasks extends TaskManager {
    addTask(task) {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
            console.log(`[Diárias] Tarefa adicionada: "${task}"`);
        }
        else {
            console.log(`[Diárias] A tarefa "${task}" já existe.`);
        }
    }
    listTasks() {
        console.log("\n--- Tarefas Diárias ---");
        return this.tasks;
    }
}
const projetoWeb = new Project("Lançamento Site");
const tarefasDeCasa = new DailyTasks();
projetoWeb.addTask("Definir paleta de cores");
projetoWeb.addTask("Criar banco de dados");
projetoWeb.addTask("Definir paleta de cores");
tarefasDeCasa.addTask("Pagar contas");
tarefasDeCasa.addTask("Revisar código");
tarefasDeCasa.addTask("Revisar código");
console.log(projetoWeb.listTasks());
console.log(tarefasDeCasa.listTasks());
