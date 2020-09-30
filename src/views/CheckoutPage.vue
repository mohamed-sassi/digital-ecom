<template>
    <div class="container">
        <v-stepper v-model="e1" dark>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" color="orange">Billing adress</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" color="orange">Payment</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" color="orange">Validation</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="container"
          color="#f0f8ff30"
          height="100%"
          width="50%"
          
        >
            <v-card-title>Billing Adress</v-card-title>
            <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row>
          <v-col cols="12">
           <v-text-field
            v-model="Adress"
            :rules="adressRules"
            label="Adress"
            required
          ></v-text-field>   
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="6">
            <v-select
          :items="items"
          label="Country"
        ></v-select>
          </v-col>
          <v-col cols="12" md="6">
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="State/Province/Region"
            required
          ></v-text-field> 
          </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="City"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="number"
            label="Zip Code"
            required
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
        </v-card>

        <v-btn
          color="orange"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
            <v-col cols="12" md="4">
             <v-card
                 
                 color="#f0f8ff30"
                 height="100%"
             >
             <v-card-title>Total</v-card-title>
             <v-divider></v-divider>
             <div class="container">
             <v-row>
                <v-col cols="12" md="9">Subtotal</v-col> 
                <v-col cols="12" md="3">80,00 $</v-col> 
             </v-row>
             </div>
             <v-divider></v-divider>
             <div class="container">
             <v-row>
                <v-col cols="12" md="9">Taxes</v-col> 
                <v-col cols="12" md="3">0,00 $</v-col> 
             </v-row>
             </div>
             <v-divider></v-divider>
             <div>
             <v-row>
                 <v-col cols="12" md="2"></v-col>
                 <v-col cols="12" md="8">
             <v-text-field label="Discount Code"></v-text-field>
                 </v-col>
             <v-col cols="12" md="2"></v-col>
             </v-row>
             <v-divider></v-divider>
            <v-row>
                 <v-col cols="12" md="2"></v-col>
                 <v-col cols="12" md="8">
                   <Checkout/>
                 </v-col>
             <v-col cols="12" md="2"></v-col>
             </v-row>
             
             
             </div>
              <v-divider></v-divider>
             


             </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card
                class="mb-12"
                 color="#f0f8ff30"
                 height="50%"
                 width="100%">
                    <v-card-title>
                        Billing Adress
                    </v-card-title>
                    <v-divider></v-divider>

                </v-card>
                <v-card
                class="mb-12"
                color="#f0f8ff30"
                height="50%"
                width="100%">
                    <v-card-title>
                        Shopping cart
                    </v-card-title>
                    <v-divider>
                      
                    </v-divider>
                     

                </v-card>
            </v-col>
        </v-row>
        
        <v-btn
          color="orange"
          @click="e1 = 3"
        >
          Continue
        </v-btn>
        <v-btn text>Cancel</v-btn>
        
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="#f0f8ff30"
          height="100%"
        ></v-card>

        <v-btn
          color="orange"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

    </div>
</template>

<script >
import Checkout from "@/components/Checkout/Checkout";
  export default {
    components:{
      Checkout,
    }, 
    data () {
      return {
        e1: 1,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    },
  }
</script>