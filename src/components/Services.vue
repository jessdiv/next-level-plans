<template>
    <div id="services">
        <!-- <HelloWorld /> -->
        <v-container class="text-center">
            <v-row>
                <v-col cols="12">
                    <h2 class="display-3 font-weight-thin mt-3 mb-3 black--text">Services</h2>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
                    <v-card class="py-12 px-4" color="grey lighten-5" flat>
                        <v-theme-provider dark>
                            <div>
                                <v-avatar color="#FFDD00" size="88">
                                    <v-icon large v-text="icon"></v-icon>
                                </v-avatar>
                            </div>
                        </v-theme-provider>

                        <v-card-title
                            class="justify-center font-weight-black text-uppercase"
                            v-text="title"
                        ></v-card-title>

                        <v-card-text class="subtitle-1" v-text="text"></v-card-text>
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
        features: [
            {
                icon: "mdi-pencil-ruler",
                title: "Measure & Sketch",
                text:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
            },
            {
                icon: "mdi-pencil",
                title: "Drafting",
                text:
                    "Our team can draw up beautiful looking plans with a quick turnaround. "
            },
            {
                icon: "mdi-camera",
                title: "Drone Photography",
                text: "Our drone photography"
            }
        ]
    })
};
</script>