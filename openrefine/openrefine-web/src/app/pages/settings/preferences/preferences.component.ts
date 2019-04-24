import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPreference} from './preference.model';
import { Subscription } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { PreferenceService } from './preferences.service';
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'gor-preferences',
  templateUrl: 'preferences.component.html',
  styleUrls: ['preferences.component.scss'],
})
export class PreferencesComponent implements OnInit, OnDestroy {


  preferences: IPreference[];

  eventSubscriber: Subscription;

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private preferenceService: PreferenceService
  ) {}

  loadAll() {
    this.preferenceService.query().subscribe(
      (res: HttpResponse<IPreference[]>) => {
        this.preferences = res.body;
        this.source.load(this.preferences);
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    console.log("PreferencesComponent:::ngOnInit");
    this.loadAll();
  }

  private onError(errorMessage: string) {

  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      value: {
        title: 'Value',
        type: 'string',
      }

    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
