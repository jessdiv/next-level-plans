<template>
    <v-app>
        <v-app-bar app color="#FFDD00" dark>
            <v-tabs v-model="activeTab" background-color="#2f3030" centered>
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.id"
                    :id="tab.name"
                    :to="tab.route"
                    exact
                >{{tab.name}}</v-tab>
                <v-tab-item
                    v-for="tab in tabs"
                    :key="tab.id"
                    :value="tab.route"
                    :transition="false"
                    :reverse-transition="false"
                >
                    <v-container>
                        <router-view></router-view>
                    </v-container>
                </v-tab-item>
            </v-tabs>
        </v-app-bar>
        <v-footer fixed absolute left="0" bottom="0" color="white">
            <v-row justify="center" class="text-center overline" no-gutters>
                <v-col></v-col>
                <v-col>
                    <v-icon>mdi-cellphone-basic</v-icon>
                    <span class="ml-3">0455 774 125</span>
                </v-col>
                <v-col>
                    <v-icon>mdi-email</v-icon>
                    <span class="ml-3">plansbyant@gmail.com</span>
                </v-col>
                <!-- <v-col>
                    <v-icon>mdi-file-document-outline</v-icon>
                    <span class="ml-3">ABN: 345325266</span>
                </v-col>-->
                <v-col></v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
// import Home from "./components/Home";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Plans from "./components/Plans";
// import Drone from "./components/Drone";

export default {
    name: "App",

    components: {
        // Services,
        // Home,
        // Contact,
        // Plans,
        // Drone
    },

    data: () => ({
        scrollTo: null,
        activeTab: "/",
        tabs: [
            {
                id: 1,
                name: "Home",
                route: "/"
            },
            {
                id: 2,
                name: "Services",
                route: "/services"
            },
            {
                id: 3,
                name: "Plans",
                route: "/plans"
            },
            {
                id: 4,
                name: "Drone",
                route: "/drone"
            },
            {
                id: 5,
                name: "Contact",
                route: "/contact"
            }
        ]
    }),
    methods: {}
};
</script>
