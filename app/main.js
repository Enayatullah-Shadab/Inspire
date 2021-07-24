import ImagesController from "./Controllers/ImagesController.js";
import QoutesController from "./Controllers/QoutesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  todosController = new TodosController()
  imagesController = new ImagesController()
  qoutesController = new QoutesController()
  weatherContller = new WeatherController()

}

window["app"] = new App();
