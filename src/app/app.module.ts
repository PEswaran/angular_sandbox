import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { PeevesContentComponent } from './peeves-content/peeves-content.component';
import { SocialContentComponent } from './social-content/social-content.component';
import { TechNewsContentComponent } from './tech-news-content/tech-news-content.component';
import { NewsService } from './Services/news.service';

@NgModule({
  declarations: [
    AppComponent,    
    SidebarContentComponent,
    ProjectsContentComponent,
    ContactContentComponent,
    PeevesContentComponent,
    SocialContentComponent,
    TechNewsContentComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
