import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { MyTestCompComponent } from './my-test-comp/my-test-comp.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { PeevesContentComponent } from './peeves-content/peeves-content.component';
import { SocialContentComponent } from './social-content/social-content.component';
import { TechNewsContentComponent } from './tech-news-content/tech-news-content.component';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    MyTestCompComponent,
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
  providers: [PeopleService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
