<template>
    <div>
        <HelloWorld />
        <!-- <v-card>
            <v-card-text>At Next Level Plans our aim is to give you the big picture. Using stunning drone images to encapsulate your properties features combined with accurate floorplans you can rest assured your property has it’s best foot forward.</v-card-text>
        </v-card>-->
        <div>
            <v-row>
                <v-col cols="8">
                    <v-img
                        src="@/assets/images/drone/birdseye-house.jpg"
                        height="60vh"
                        class="mt-9"
                    ></v-img>
                </v-col>
                <v-col cols="4" class="display-1 font-weight-thin black--text" align-self="center">
                    <p>At Next Level Plans our aim is to give you the big picture. Using stunning drone images to encapsulate your properties features combined with accurate floorplans you can rest assured your property has it’s best foot forward.</p>
                    <div class="text-center">
                        <v-btn outlined x-large color="red" @click="goToServices">Services</v-btn>
                    </div>
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