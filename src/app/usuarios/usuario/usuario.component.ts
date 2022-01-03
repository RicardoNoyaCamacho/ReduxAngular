import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as usuarioActions from '../../store/actions';
import { Usuario } from '../../models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuario!: Usuario | null;
  loading: boolean = false;
  error: any;

  usuarioSubs?: Subscription;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.usuarioSubs = this.store
      .select('usuario')
      .subscribe(({ user, loading, error }) => {
        this.usuario = user;
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(usuarioActions.cargarUsuario({ id }));
    });
  }

  ngOnDestroy(): void {
    this.usuarioSubs?.unsubscribe();
  }
}
