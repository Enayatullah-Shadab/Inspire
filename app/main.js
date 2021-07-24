import ImagesController from "./Controllers/ImagesController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  todosController = new TodosController();
  imagesController = new ImagesController()

}

window["app"] = new App();
