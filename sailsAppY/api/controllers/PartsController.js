/**
 * PartsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getParts: function (req566, res566) {
        Parts.find().exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            return res566.json(succ566);
        })
    },

    getPartsById: function (req566, res566) {
        let id = req566.params.id;
        sails.log(id)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            return res566.json(succ566);
        })
    },

    
    postParts: function (req566, res566) {
        let id = req566.body.partId;
        let partName = req566.body.partName;
        let qoh = parseInt(req566.body.qoh, 0);
        sails.log(id, partName, qoh)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            else if (succ566.length > 0) {
                return res566.json("Id already exists");
            }
            else {
                Parts.create({ id, partName, qoh }).exec(function (err, succ) {
                    if (err) {
                        return res566.json(err)
                    }
                    else {
                        return res566.json("successfully inserted..");
                    }
                })
            }
        })
    },

    putParts: function (req566, res566) {
        let id = req566.body.partId;
        let qoh = parseInt(req566.body.qoh, 0);
        
        sails.log(id, qoh)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            else if (succ566.length > 0) {
                Parts.update({ id }).set({ qoh }).exec(function (err, succ) {
                    if (err) {
                        return res566.json(err)
                    }
                    else {
                        return res566.json("successfully updated..");
                    }
                }) 
            }
            else {
                return res566.json("Id does not exists");
            }
        })
    },

    deleteParts: function (req566, res566) {
        let id = req566.body.partId;
        sails.log(id)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            else if (succ566.length > 0) {
                Parts.destroy({ id }).exec(function (err, succ) {
                    if (err) {
                        return res566.json(err)
                    }
                    else {
                        return res566.json("successfully deleted..");
                    }
                }) 
            }
            else {
                return res566.json("Id does not exists");
            }
        })
    },

    //view data
    getPartsView566: function (req566, res566) {
        Parts.find().exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            // return res566.json(succ566);
            res566.view("pages/viewjobs", {parts:succ566})
        })
    },

    getPartsViewForUpdate566: function (req566, res566) {
        Parts.find().exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            // return res566.json(succ566);
            res566.view('pages/updatejobs', {parts:succ566})
        })
    },


    postPartsView566: function (req566, res566) {
        let id = req566.body.partId;
        let partName = req566.body.partName;
        let qoh = parseInt(req566.body.qoh, 0);
        let isUpdate = parseInt(req566.body.isUpdate, 0);
        sails.log(id, partName, qoh)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            else if (succ566.length > 0) {
                return res566.json("Id already exists..Please try with different Ids");
            }
            else {
                Parts.create({ id, partName, qoh }).exec(function (err, succ) {
                    if (err) {
                        return res566.json(err)
                    }
                    else {
                        //return res566.json("successfully inserted..");
                        if (isUpdate === 1) {
                            res566.redirect("/getPartsViewForUpdate566")
                        }
                        res566.redirect("/getPartsView566")
                    }
                })
            }
        })
    },

    deletePartsView566: function (req566, res566) {
        let id = req566.body.jobId;
        sails.log(id)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            else if (succ566.length > 0) {
                Parts.destroy({ id }).exec(function (err, succ) {
                    if (err) {
                        return res566.json(err)
                    }
                    else {
                        //return res566.json("successfully deleted..");
                        res566.redirect("/getPartsView566")
                    }
                }) 
            }
            else {
                return res566.json("Id does not exists");
            }
        })
    },

    putPartsView566: function (req566, res566) {
        let id = req566.body.partId;
        let partsnameOld = req566.body.partsnameOld;
        let quantityOld = parseInt(req566.body.quantityOld, 0);
        let partsname = req566.body.partsname;
        let quantity = parseInt(req566.body.quantity, 0);

        qoh = isNaN(quantity) ? quantityOld : quantity;
        partName = partsname == '' ? partsnameOld : partsname;

        sails.log('id:',id, 'partsnameNew:',partsname, 'quantityNew',quantity,'partsname:',partsnameOld, 'quantity',quantityOld)
        Parts.find({ id }).exec(function (err566, succ566) {
            if (err566) {
                return res566.json(err566)
            }
            else if (succ566.length > 0) {
                Parts.update({ id }).set({ qoh,partName }).exec(function (err, succ) {
                    if (err) {
                        return res566.json(err)
                    }
                    else {
                        //return res566.json("successfully updated..");
                        res566.redirect("/getPartsViewForUpdate566")
                    }
                }) 
            }
            else {
                return res566.json("Id does not exists");
            }
        })
    },
};

