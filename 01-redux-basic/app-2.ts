import { multiplicadorAction, incrementadorAction, decrementadorAction, divisorAction, resetAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

console.log(contadorReducer(2, incrementadorAction));
console.log(contadorReducer(2, decrementadorAction));
console.log(contadorReducer(2, multiplicadorAction));
console.log(contadorReducer(2, divisorAction));
console.log(contadorReducer(2, resetAction));
