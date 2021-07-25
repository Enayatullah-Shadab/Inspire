// import ClocksController from "./Controllers/ClocksController.js";
import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
// import WeatherController from "./Controllers/WeatherController.js";

class App {
  todosController = new TodosController()
  imagesController = new ImagesController()
  quotesController = new QuotesController()
  // weatherContller = new WeatherController()
  // clocksController = new ClocksController()
}

window["app"] = new App();
