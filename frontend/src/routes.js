/* eslint-disable no-undef */
import { AddCourse, EditCourse } from "./components";

export default [
  { path: "/addCourse", name: "Pizzas", Component: AddCourse },
  { path: "/editCourse", name: "Edit Pizza", Component: EditCourse },
  {
    path: "/pizza/:pizzaId/toppings",
    name: "Pizza Toppings",
    Component: Toppings,
  },
];
