import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTitleComponent } from './components/display-title/display-title.component';
import { BookOpenLibraryComponent } from './components/book-open-library/book-open-library.component';

const routes: Routes = [
  {
    path: "",
    component: BookOpenLibraryComponent
  },
  {
    path: "title",
    component: DisplayTitleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }