import { contadorReducer } from "./contador/contador.reducer";
import {
  incrementadorAction,
  decrementadorAction,
  multiplicarAction,
  dividirAction,
  resetAction,
} from "./contador/contador.actions";

console.log(contadorReducer(10, incrementadorAction)); // 11
console.log(contadorReducer(10, decrementadorAction)); // 9
console.log(contadorReducer(10, multiplicarAction)); // 20
console.log(contadorReducer(10, dividirAction)); // 5
console.log(contadorReducer(10, resetAction)); // 0
