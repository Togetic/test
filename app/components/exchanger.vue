<template>
  <v-layout>
    <v-container>
      <slot name="title"/>
      <span>Choose what you want to do with {{amount}} {{currencyType ? currencyType.base_ccy : ''}}</span>
      <v-form @submit.prevent="send" class="mb-1">
        <v-switch
                v-model="actionType"
                :label="type"
                hide-details
        ></v-switch>
        <v-radio-group
                class="mb-2"
                v-model="currencyType"
                data-vv-name="currencyType"
                data-vv-as="type"
                v-validate="'required'"
                :error-messages="errors.collect('currencyType')"
        >
          <v-radio
                  v-for="(item, key) in rates"
                  :key="key"
                  :value="item"
                  return-object
          >
            <span slot="label">{{item.base_ccy}} to {{item.ccy}}</span>
          </v-radio>
        </v-radio-group>
        <v-btn type="submit" :loading="loading">Send</v-btn>
        <v-btn @click="goBack">go back</v-btn>
      </v-form>
    </v-container>
  </v-layout>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "exchanger",
    props: {
      amount: {
        required: true
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      ...mapActions({
        changeActionType: 'changeActionType',
        changeCurrencyType: 'changeCurrencyType',
        sendToServer: 'sendToServerForCalculate',
        callAlert: 'alert/callAlert',
        changeAmount: 'persist/changeAmount',
        addResult: 'persist/addResult',
      }),
      async send () {
        this.errors.clear();
        const result = await this.$validator.validateAll();
        if (!result) {
          return
        }
        this.loading = true;
        try {
          const data = await this.sendToServer();
          // this.addResult(data)
          this.addResult({
            value: this.total,
            currency: this.currencyType.base_ccy,
            id: Date.now(),
          });
          this.callAlert('Good');
          this.$router.push({ name: 'result' })
        } catch (e) {
          this.serverValidation(e)
        } finally {
          this.loading = false;
        }
      },
      goBack () {
        this.changeAmount(null);
        this.$router.push('/')
      }
    },
    beforeDestroy(){
      this.changeCurrencyType(null)
    },
    computed: {
      ...mapState({
        rates: state => state.rates,
        type: state => state.actionType,
        currency: state => state.currencyType,
      }),
      actionType: {
        get () {
          return this.type === 'sale'
        },
        set (val) {
          this.changeActionType(val ? 'sale' : 'buy')
        }
      },
      currencyType: {
        get () {
          return this.currency
        },
        set (val) {
          this.changeCurrencyType(val)
        }
      },
      total () {
        if (this.currencyType) {
          return this.amount / Number(this.currencyType[ this.type ]).toFixed(2)
        }
        return false
      }
    }
  }
</script>