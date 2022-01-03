import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  id: string;
  user: Usuario | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(actions.cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),
  on(actions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      massage: payload.message,
    },
  }))
);

export function usuarioReducer(
  state: UsuarioState | undefined,
  action: Action
) {
  return _usuarioReducer(state, action);
}
