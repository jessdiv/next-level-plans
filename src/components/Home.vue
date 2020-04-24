<template>
    <div>
        <HelloWorld />
        <div>
            <v-row>
                <v-col cols="8">
                    <v-img src="@/assets/images/drone/birdseye-house.jpg" width="90%" class="ma-9"></v-img>
                </v-col>
                <v-col cols="4" class="display-1 font-weight-thin black--text" align-self="center">
                    <v-row class="heading ma-4 mt-7 text-center font-weight-thin">
                        <p>At Next Level Plans our aim is to give you the big picture.</p>
                        <p>Using stunning drone images and accurate floorplans, you can rest assured your property has it’s best foot forward.</p>
                    </v-row>
                    <v-row justify="center">
                        <v-btn outlined x-large color="#2f3030" to="/services">Services</v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
import HelloWorld from "./HelloWorld";
export default {
    components: {
        HelloWorld
    },
    data: () => ({}),
    methods: {
        goToServices() {
            console.log("go to services");
        }
    }
};
</script>