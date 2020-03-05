import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent (shallow test)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        const hero = fixture.componentInstance.hero = { id: 1, name: 'Batman', strength: 8 };

        expect(hero.name).toEqual('Batman');
    });

    it('should render the name in an anchor tag', () => {
        const hero = fixture.componentInstance.hero = { id: 1, name: 'Batman', strength: 8 };
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Batman');
        // expect(fixture.nativeElement.querySelector('a').textContent).toContain('Batman');
    });
});
