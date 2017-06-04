import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ChangeLogComponent } from '../change-log/change-log.component';
import { PageComponent } from '../page/page.component';
import { AboutComponent } from '../about/about.component';
import { CreditsComponent } from '../credits/credits.component';
import { SectionComponent } from '../section/section.component';

const routes : Routes = [
  { path: "",                     component: LandingPageComponent },
  { path: "about",                component: AboutComponent       },
  { path: "changelog",            component: ChangeLogComponent   },
  { path: "credits",              component: CreditsComponent     },
  { path: "page/:pageName",       component: PageComponent        },
  { path: "section/:sectionName", component: SectionComponent     }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }