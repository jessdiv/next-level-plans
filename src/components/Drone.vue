<template>
    <div>
        <!-- <HelloWorld /> -->
        <v-container class="text-center">
            <v-row>
                <v-col cols="12">
                    <h2 class="display-3 font-weight-thin mt-3 mb-3 black--text">Drone Photography</h2>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="4">
                    <v-card flat tile class="d-flex">
                        <v-img :src="image.src" class="grey lighten-2"></v-img>
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
    data: () => ({}),
    computed: {
        images() {
            return [
                {
                    src: require("@/assets/images/drone/aerials003.jpg")
                },
                {
                    src: require("@/assets/images/drone/aerials014.jpg")
                },
                {
                    src: require("@/assets/images/drone/aerials022.jpg")
                },
                {
                    src: require("@/assets/images/drone/birdseye-house.jpg")
                },
                {
                    src: require("@/assets/images/drone/bridge.jpg")
                },
                {
                    src: require("@/assets/images/drone/oval-edit.jpg")
                },
                {
                    src: require("@/assets/images/drone/water.jpg")
                },
                {
                    src: require("@/assets/images/drone/golf-course-top-view.jpg")
                }
            ];
        }
    }
};
</script>