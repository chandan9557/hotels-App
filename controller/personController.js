const personModel = require("../models/personModel");
const saveData = async (req, res) => {
  const newData = new personModel(req.body);
  const result = await newData.save();
  res.send(result);
};
const getData = async (req, res) => {
  const newData1 = await personModel.find();
  res.send(newData1);
};
const delData = async (req, res) => {
  const newData2 = await personModel.deleteOne(req.params);
  res.send(newData2);
};
const upData = async (req, res) => {
  const newData3 = await personModel.updateOne(req.params, { $set: req.body });
  res.send(newData3);
};

module.exports = { saveData, getData, delData, upData };
