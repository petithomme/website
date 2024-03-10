import { createWebHistory, createRouter } from "vue-router";
import ContactComponent from "@/components/ContactComponent";
import CertificationsComponent from "@/components/CertificationsComponent";
import ProjectsComponent from "@/components/ProjectsComponent";
import ProfessionalsComponent from "@/components/ProfessionalsComponent";

const routes = [
    {
        path: "/",
        name: "Home",
        component: ContactComponent,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactComponent,
    },
    {
        path: "/certifications",
        name: "Certifications",
        component: CertificationsComponent,
    },
    {
        path: "/projects",
        name: "Projects",
        component: ProjectsComponent,
    },
    {
        path: "/professionals",
        name: "Professionals",
        component: ProfessionalsComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
