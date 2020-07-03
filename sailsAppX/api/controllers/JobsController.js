const PartsModel = require("../models/Parts");

/**
 * CloudjobsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getParts: function (req566, res566) {
    Jobs.find().exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      }
      return res566.json(succ566);
    });
  },

  getPartsById: function (req566, res566) {
    let id = req566.params.id;
    let partId = req566.params.partId;
    sails.log(id, partId);
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      }
      return res566.json(succ566);
    });
  },

  postParts: function (req566, res566) {
    let id = req566.body.jobName;
    let partId = req566.body.partId;
    let qty = parseInt(req566.body.qty, 0);
    sails.log(id, partId, qty);
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      } else if (succ566.length > 0) {
        return res566.json("Id already exists");
      } else {
        Jobs.create({ id, partId, qty }).exec(function (err, succ) {
          if (err) {
            return res566.json(err);
          } else {
            return res566.json("successfully inserted..");
          }
        });
      }
    });
  },

  putParts: function (req566, res566) {
    let id = req566.body.jobName;
    let partId = req566.body.partId;
    let qty = parseInt(req566.body.qty, 0);
    sails.log(id, partId, qty);
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      } else if (succ566.length > 0) {
        Jobs.update({ id, partId })
          .set({ qty })
          .exec(function (err, succ) {
            if (err) {
              return res566.json(err);
            } else {
              return res566.json("successfully updated..");
            }
          });
      } else {
        return res566.json("Id does not exists");
      }
    });
  },

  deleteParts: function (req566, res566) {
    let id = req566.body.jobName;
    let partId = req566.body.partId;
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      } else if (succ566.length > 0) {
        Jobs.destroy({ id, partId }).exec(function (err, succ) {
          if (err) {
            return res566.json(err);
          } else {
            return res566.json("successfully deleted..");
          }
        });
      } else {
        return res566.json("Id does not exists");
      }
    });
  },

  //view data
  getPartsView566: function (req566, res566) {
    let options = "";
    Jobs.query("select partId from `Project-G14`.parts", function (err, succ) {
      sails.log(succ);
      options = succ["rows"];
    });
    Jobs.find().exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      }
      // return res566.json(succ566);
      res566.view("pages/viewjobs", { parts: succ566, options: options });
    });
  },

  getPartsViewForUpdate566: function (req566, res566) {
    let options = "";
    Jobs.query("select partId from `Project-G14`.parts", function (err, succ) {
      sails.log(succ);
      options = succ["rows"];
    });
    Jobs.find().exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      }
      // return res566.json(succ566);
      sails.log(options);
      res566.view("pages/updatejobs", { parts: succ566, options: options });
    });
  },

  postPartsView566: function (req566, res566) {
    let id = req566.body.id;
    let partId = req566.body.PartId566;
    let qty = parseInt(req566.body.Quantity566, 0);
    let isUpdate = parseInt(req566.body.isUpdate, 0);
    sails.log(id, partId, qty);
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      } else if (succ566.length > 0) {
        return res566.json("Id already exists..Please try with different Ids");
      } else {
        Jobs.create({ id, partId, qty }).exec(function (err, succ) {
          if (err) {
            return res566.json(err);
          } else {
            //return res566.json("successfully inserted..");
            if (isUpdate === 1) {
              res566.redirect("/getPartsViewForUpdate566");
            }
            res566.redirect("/getPartsView566");
          }
        });
      }
    });
  },

  deletePartsView566: function (req566, res566) {
    let id = req566.body.jobId566;
    let partId = req566.body.PartId566;
    sails.log(id, partId);
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      } else if (succ566.length > 0) {
        Jobs.destroy({ id, partId }).exec(function (err, succ) {
          if (err) {
            return res566.json(err);
          } else {
            //return res566.json("successfully deleted..");
            res566.redirect("/getPartsView566");
          }
        });
      } else {
        return res566.json("Id does not exists");
      }
    });
  },

  getJobsParts: function (req566, res566) {
    let options = "";
    Partorders.query(
      "SELECT jobName, GROUP_CONCAT(DISTINCT partId SEPARATOR ', ') As parts FROM `Project-G14`.jobs GROUP BY jobName",
      function (err566, succ566) {
        if (err566) {
          return res566.json(err566);
        }
        //return res566.json(succ566);
        options = succ566["rows"];
        sails.log(options);
        res566.json(options);
      }
    );
  },

  putPartsView566: function (req566, res566) {
    let id = req566.body.jobId566;
    let partId = req566.body.partId566;
    let qty = parseInt(req566.body.quantity566, 0);
    sails.log(id, partId, qty);
    Jobs.find({ id, partId }).exec(function (err566, succ566) {
      if (err566) {
        return res566.json(err566);
      } else if (succ566.length > 0) {
        Jobs.update({ id, partId })
          .set({ qty })
          .exec(function (err, succ) {
            if (err) {
              return res566.json(err);
            } else {
              //return res566.json("successfully updated..");
              res566.redirect("/getPartsViewForUpdate566");
            }
          });
      } else {
        return res566.json("Id does not exists");
      }
    });
  },
};
