import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Header/header/header.component";
import { TechImageComponent } from "./Body/tech-image/tech-image.component";
import { FooterComponent } from "./Footer/footer/footer.component";
import { TechIconsComponent } from "./Body/tech-icons/tech-icons.component";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,FormsModule,HttpClientModule, RouterOutlet, HeaderComponent, TechImageComponent, FooterComponent, TechIconsComponent]
})
export class AppComponent {
  title = 'DSC';
}
