import { Action, ActionCreator, createReducer, on, ReducerTypes } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';
import { AppState } from '../app.reducer';
import { TypedAction } from '@ngrx/store/src/models';
 
export const initialState: filtrosValidos = 'todos';
 
const _filtroReducer = createReducer(
  on(setFiltro, (state, {filtro}) => filtro),
);
 
export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}