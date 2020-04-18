<template>
    <v-app>
        <v-app-bar app color="#FFDD00" dark>
            <v-tabs background-color="#2f3030" centered>
                <v-tab id="home" color="#2f3030">Home</v-tab>
                <v-tab id="services" color="#2f3030">Services</v-tab>
                <v-tab id="plans" color="#2f3030">Floor plans</v-tab>
                <v-tab id="drone" color="#2f3030">Drone</v-tab>
                <v-tab id="contact" color="#2f3030">Contact</v-tab>

                <v-tab-item key="home" :transition="false" :reverse-transition="false">
                    <v-container>
                        <Home />
                    </v-container>
                </v-tab-item>
                <v-tab-item key="services" :transition="false" :reverse-transition="false">
                    <v-container>
                        <Services />
                    </v-container>-->
                </v-tab-item>
                <v-tab-item key="plans" :transition="false" :reverse-transition="false">
                    <v-container>
                        <Plans />
                    </v-container>
                </v-tab-item>
                <v-tab-item key="drone" :transition="false" :reverse-transition="false">
                    <v-container>
                        <Drone />
                    </v-container>
                </v-tab-item>
                <v-tab-item key="contact" :transition="false" :reverse-transition="false">
                    <v-container>
                        <Contact />
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
                <v-col>
                    <v-icon>mdi-file-document-outline</v-icon>
                    <span class="ml-3">ABN: 345325266</span>
                </v-col>
                <v-col></v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Drone from "./components/Drone";

export default {
    name: "App",

    components: {
        Services,
        Home,
        Contact,
        Plans,
        Drone
    },

    data: () => ({
        scrollTo: null
    }),
    methods: {}
};
</script>
