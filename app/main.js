import ImagesController from "./Controllers/ImagesController.js";
import QoutesController from "./Controllers/QoutesController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  todosController = new TodosController();
  imagesController = new ImagesController()
  qoutesController = new QoutesController()

}

window["app"] = new App();
