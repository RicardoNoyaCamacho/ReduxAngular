import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, toggle } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Robar escudo del Cap'),
  new Todo('Comprar traje de Ironman'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id))
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
