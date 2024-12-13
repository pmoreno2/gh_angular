import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CharacterListComponent } from './character-list.component';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let rickAndMortyService: RickAndMortyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, CharacterListComponent],
      providers: [
        RickAndMortyService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ page: '1' }) // Simulación de queryParams
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    rickAndMortyService = TestBed.inject(RickAndMortyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    const characters = [{ id: 1, name: 'Rick Sanchez', image: 'url', status: 'Alive', species: 'Human', gender: 'Male' }];
    const info = { count: 1, pages: 1, next: null, prev: null };
    spyOn(rickAndMortyService, 'getCharacters').and.returnValue(of({ results: characters, info }));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.characters).toEqual(characters);
    expect(component.info).toEqual(info);
  });

  it('should navigate to the next page', () => {
    spyOn(component.router, 'navigate');
    component.info = { next: 'url' };
    component.currentPage = 1;

    component.goToPage(2);

    expect(component.router.navigate).toHaveBeenCalledWith([], {
      relativeTo: component.route,
      queryParams: { page: 2 },
      queryParamsHandling: 'merge'
    });
  });

  it('should disable previous button on first page', () => {
    component.info = { prev: null };
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector('.pagination button:first-child');
    expect(prevButton.disabled).toBeTruthy();
  });

  it('should enable next button if there is a next page', () => {
    component.info = { next: 'url' };
    fixture.detectChanges();

    const nextButton = fixture.nativeElement.querySelector('.pagination button:last-child');
    expect(nextButton.disabled).toBeFalsy();
  });
});