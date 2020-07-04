/**
 * PartordersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getPartorders: function (req566, res566) {
        Partordersy.find().exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            return res566.json(succ566);
        })
    },
    
    postPartorders: function (req566, res566) {
        let id = req566.body.partId;
        let userId = req566.body.userId;
        let jobName = req566.body.jobName;
        let qty = parseInt(req566.body.qty, 0);
        sails.log(id, userId, jobName,qty)
        Partordersy.create({ id, userId, jobName,qty }).exec(function (err, succ) {
            if (err) {
                return res566.json(err)
            }
            else {
                return res566.json("successfully inserted..");
            }
        })
    },


    getPartordersView: function (req566, res566) {
        let options = '';
        Partordersy.query('SELECT distinct jobName FROM `Project-G14`.partordersy', function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            //return res566.json(succ566);
            options = succ566['rows'];
            sails.log(options)
        })

        Partordersy.find().sort([{ jobName: 'ASC' },{ userId: 'ASC' },{ qty: 'ASC' }]).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            //return res566.json(succ566);
            res566.view('pages/partordersView', {parts:succ566,options:options})
        })
    },

    searchPartOrders: function (req566, res566) {
        let jobName = req566.body.jobName;
        sails.log(jobName)
        let options = '';

        Partordersy.query('SELECT distinct jobName FROM `Project-G14`.partordersy', function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            //return res566.json(succ566);
            options = succ566['rows'];
            sails.log(options)
        })

        Partordersy.find({ jobName }).sort([{ jobName: 'ASC' },{ userId: 'ASC' },{ qty: 'ASC' }]).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            //return res566.json(succ566);
            res566.view('pages/partordersView', {parts:succ566,options:options})
        })
    },

};

