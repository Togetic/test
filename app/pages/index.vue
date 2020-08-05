<template>
  <main>
    <div style="width: 50%;">{{text}}</div>
    
    <v-container>
      <v-row class="justify-center align-center">
        <v-col cols="3">
          <v-form @submit.prevent="goNext">
            <v-text-field
                    v-model.trim="amount"
                    label="How much money do you have?"
                    type="text"
                    v-validate="{regex: /^[0-9.,]+$/}"
                    :error-messages="errors.collect('number')"
                    data-vv-name="number"
                    data-vv-as="amount"
                    clearable
            ></v-text-field>
            <v-btn type="submit" :disabled="!amountMoney || errors.any()">Calculate</v-btn>
            <v-btn @click="clear" :disabled="!amountMoney">Clear</v-btn>
          </v-form>
        </v-col>
        <v-col cols="1">
          or
        </v-col>
        <v-col cols="3">
          <v-text-field
                  v-model.trim="amount"
                  label="How much money do you have?"
                  type="text"
                  v-validate="{regex: /^[0-9.,]+$/}"
                  :error-messages="errors.collect('number')"
                  data-vv-name="number"
                  data-vv-as="amount"
                  clearable
          ></v-text-field>
          <v-btn :disabled="!amountMoney || errors.any()"
                 :to="{name: 'choose2-amount', params: {amount: amountMoney}}">Calculate
          </v-btn>
          <v-btn :disabled="!amountMoney" @click="clear">Clear</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        text: 'Написать приложение на Vue.js с использованием роутера с помощью библиотеки vue-router, и стейт менеджмента с помощью библиотеки Vuex, и запросов с помощью axios.\n' +
          'Приложение должно быть разбито на глупые и умные компоненты и страницы. Все данные и асинхронные операции и их результаты должны быть только в store. В компонентах должна отсутствовать бизнес логика.\n' +
          '\n' +
          'Задание\n' +
          '\n' +
          'Напишите приложение конвертер валют используя API Приват банка - https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11\n' +
          '\n' +
          'Первая страница - инпут для ввода количества денег, кнопка посчитать. Возле инпута нужна кнопка очистить, которая стирает ввод. При нажатии на кнопку Посчитать перенаправить на страницу с выбором обмена (USD to UAH).\n' +
          '\n' +
          'Страница с выбором пар - Отобразите список инпутов радио с парами валют, кнопку Обмен, при нажатии на которую перебрасывать на страницу с результатом. На странице должна быть кнопка отмены операции, которая возвращает в начало.\n' +
          '\n' +
          'Страница с результатом - отобразить результат конвертации. Подставьте нужный символ валюты.\n' +
          'Должна быть кнопка с возвратом на начало.\n' +
          '\n' +
          'Плюсом будет добавить независимый от роута блок с историей конвертаций. Также плюсом будет добавить возможность сохранения выбранной валюты и истории конвертаций с помощью local storage.'
      }
    },
    methods: {
      ...mapActions({
        changeAmount: 'persist/changeAmount',
      }),
      goNext () {
        if (this.amountMoney) {
          this.$router.push({ name: 'choose1' })
        }
      },
      clear () {
        this.changeAmount(null)
      }
    },
    computed: {
      ...mapState({
        amountMoney: state => state.persist.amount
      }),
      amount: {
        get () {
          return this.amountMoney
        },
        set (val) {
          this.changeAmount(val)
        }
      }
    }
  }

</script>

<style lang="scss">

</style>


