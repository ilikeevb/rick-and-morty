import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Character from "../views/Character.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/character/:characterId",
        name: "Character",
        component: Character,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
