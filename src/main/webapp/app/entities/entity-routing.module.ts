import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        data: { pageTitle: 'blogApp.blog.home.title' },
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'entry',
        data: { pageTitle: 'blogApp.entry.home.title' },
        loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule),
      },
      {
        path: 'tag',
        data: { pageTitle: 'blogApp.tag.home.title' },
        loadChildren: () => import('./tag/tag.module').then(m => m.TagModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
