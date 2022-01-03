import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(usuarioActions.cargarUsuario),
      //Unir Observable a la solicitud anterior
      mergeMap((action) =>
        this.usuarioService.getUserById(action.id).pipe(
          //Disparar la acción
          map((user) => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(usuarioActions.cargarUsuarioError({ payload: err }))
          )
        )
      )
    )
  );
}
