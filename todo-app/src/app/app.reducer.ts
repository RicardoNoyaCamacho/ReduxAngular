import { ActionCreator, ActionReducerMap, ReducerTypes } from '@ngrx/store';
import { filtroReducer } from './filtro/fiiltro.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { TypedAction } from '@ngrx/store/src/models';

export interface AppState {
  todos: Todo[];
  filtro:
    | ReducerTypes<
        unknown,
        [
          ActionCreator<
            '[Filtro] Set Filtro',
            (props: {
              filtro: filtrosValidos;
            }) => {
              filtro: filtrosValidos;
            } & TypedAction<'[Filtro] Set Filtro'>
          >
        ]
      >;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
