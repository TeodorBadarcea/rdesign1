import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectComponent } from "./portofolio/project/project.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { PortofolioComponent } from "./portofolio/portofolio.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsListComponent } from "./portofolio/projects-list/projects-list.component";
import { ContactPageComponent } from "./contact/contact-page/contact-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "services",
    component: ServicesComponent,
    title: "Services page",
  },
  {
    path: "portofolio",
    component: PortofolioComponent,
    title: "Portofolio page",
  },
  {
    path: "projects-list",
    component: ProjectsListComponent,
    title: "Projects List",
  },
  {
    path: "contact",
    component: ContactPageComponent,
    title: "Contact Us Page",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
