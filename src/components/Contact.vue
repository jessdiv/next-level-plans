<template>
    <div>
        <HelloWorld />
        <v-container class="text-center">
            <v-row>
                <v-col cols="12">
                    <h2 class="display-3 font-weight-thin mt-8 mb-3 black--text">Contact</h2>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="black--text headline">
                    <v-row justify="center">
                        <v-icon class="mr-3" large>mdi-account</v-icon>
                        <span>Anthony Romeo</span>
                    </v-row>
                    <v-row justify="center">
                        <v-icon class="mr-3" large>mdi-cellphone-basic</v-icon>
                        <span>0455 774 125</span>
                    </v-row>
                    <v-row justify="center">
                        <v-icon class="mr-3" large>mdi-email</v-icon>
                        <span>plansbyant@gmail.com</span>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-img src="@/assets/images/sketching.jpeg" height="350"></v-img>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import HelloWorld from "./HelloWorld";
export default {
    components: {
        HelloWorld
    }
};
</script>
