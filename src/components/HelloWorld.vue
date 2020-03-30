<template>
    <v-container>
        <v-row class="text-center">
            <v-img src="../assets/images/EMAILBANNERNICE.jpg"></v-img>
            <v-img src="../assets/images/photo-1503387837-b154d5074bd2.jpeg"></v-img>
            <section id="features">
                <v-container class="text-center">
                    <h2 class="display-2 font-weight-bold mb-3">Services</h2>

                    <v-responsive class="mx-auto mb-12" width="56">
                        <v-divider class="mb-1"></v-divider>
                    </v-responsive>

                    <v-row>
                        <v-col
                            v-for="({ icon, title, text }, i) in features"
                            :key="i"
                            cols="12"
                            md="4"
                        >
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

                <div class="py-12"></div>
            </section>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "HelloWorld",

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
                    "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
            },
            {
                icon: "mdi-camera",
                title: "Drone Photography",
                text:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
            }
        ],
        items: [
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            }
        ]
    })
};
</script>
