import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechImageComponent } from "../tech-image/tech-image.component";
import { TechIconsComponent } from "../tech-icons/tech-icons.component";

@Component({
    selector: 'app-dashoard',
    standalone: true,
    templateUrl: './dashoard.component.html',
    styleUrl: './dashoard.component.css',
    imports: [CommonModule, TechImageComponent, TechIconsComponent]
})
export class DashoardComponent {

}
