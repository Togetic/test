import Vue from 'vue'
import _ from 'lodash'

import {mapActions} from 'vuex'

Vue.mixin({
  methods: {
    ...mapActions({
      callAlert: 'callAlert',
    }),
    serverValidation (e, scope = '') {
      console.warn(e);
      if (_.get(e, 'errors', false)) {
        let serverErrors = e.errors;
        let currentValidatedFields = _.map(this.$validator.fields.itemsById, function (field) {
          return field.name
        });
        let withoutFieldErrors = [];
        _.forEach(serverErrors, (item, key) => {
          if (_.includes(currentValidatedFields, `${scope}${scope.length ? '.' : ''}${key}`)) {
            this.errors.add({
              field: `${scope}${scope.length ? '.' : ''}${key}`,
              msg: item.join(' ')
            });
          } else {
            withoutFieldErrors.push(item)
          }
        });
        if (!_.isEmpty(withoutFieldErrors)) {
          this.callAlert({
            type: 'error',
            text: withoutFieldErrors.join(' '),
            time: 10000
          });
        }
      } else {
        this.callAlert({
          type: 'error',
          text: e,
          time: 10000
        });
      }
    },
  }
});