/**
 * Partorders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {  
  attributes: {
    id: {
      type: 'number',
      columnName: 'partId',
      required: true
    },
    userId: {
      type: 'number'
    },
    jobName: {
      type: 'string'
    },
    qty: {
      type: 'number'
    }
  },
};

