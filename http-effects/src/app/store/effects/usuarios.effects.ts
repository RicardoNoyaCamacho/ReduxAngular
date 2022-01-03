import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(usuariosActions.cargarUsuarios),
      //Unir Observable a la solicitud anterior
      mergeMap(() =>
        this.usuarioService.getUsers().pipe(
          //Disparar la acción
          map((users) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(usuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    )
  );

  
}
