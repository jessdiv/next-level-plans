<template>
    <div>
        <!-- <HelloWorld /> -->
        <v-container class="text-center">
            <v-row class="mb-9">
                <v-col cols="12">
                    <h2 class="display-3 font-weight-thin mt-3 mb-3 black--text">Services</h2>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
            <v-row class="my-8">
                <v-col v-for="(service, i) in services" :key="i" cols="12" md="4">
                    <v-card class="py-12 px-4" color="grey lighten-5" flat>
                        <v-theme-provider dark>
                            <div>
                                <v-avatar color="#FFDD00" size="88">
                                    <v-icon large>{{service.icon}}</v-icon>
                                </v-avatar>
                            </div>
                        </v-theme-provider>

                        <v-card-title
                            class="justify-center font-weight-black text-uppercase"
                            v-text="title"
                        ></v-card-title>

                        <v-card-text class="subtitle-1">{{service.text}}</v-card-text>

                        <v-btn
                            outlined
                            x-large
                            color="#2f3030"
                            :to="service.buttonLink"
                            class="mt-5"
                        >{{service.buttonText}}</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
// import HelloWorld from "./HelloWorld";

export default {
    components: {
        // HelloWorld
    },
    data: () => ({
        services: [
            {
                icon: "mdi-pencil-ruler",
                title: "Measure & Sketch",
                text:
                    "We can draft up plans for just about any property, residential, apartments, houses, commercial spaces and building sites.",
                buttonText: "See floor plans",
                buttonLink: "/plans"
            },
            {
                icon: "mdi-pencil",
                title: "Drafting",
                text:
                    "Our team can draw up beautiful looking plans with a quick turnaround so you can get your listing up as soon as possible.",
                buttonText: "See floor plans",
                buttonLink: "/plans"
            },
            {
                icon: "mdi-camera",
                title: "Drone Photography",
                text:
                    "Drone photography gives context to your property ans really shows the big picture.",
                buttonText: "See drone work",
                buttonLink: "/drone"
            }
        ]
    })
};
</script>