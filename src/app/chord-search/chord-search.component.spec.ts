import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { ChordSearchComponent } from './chord-search.component';

describe(`ChordSearch`, () => {
  let comp: ChordSearchComponent;
  let fixture: ComponentFixture<ChordSearchComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChordSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        AppState,
      ]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ChordSearchComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should have a title', () => {
    expect(comp.title).toEqual('Chord Search');
  });

});
