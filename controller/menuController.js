const menuModel=require('../models/menuModel')
const saveData = async (req, res) => {
    const newData = new menuModel(req.body);
    const result = await newData.save();
    res.send(result);
  };
  const getData = async (req, res) => {
    const newData1 = await menuModel.find();
    res.send(newData1);
  };
  const delData = async (req, res) => {
    const newData2 = await menuModel.deleteOne(req.params);
    res.send(newData2);
  };
  const upData = async (req, res) => {
    const newData3 = await menuModel.updateOne(req.params, { $set: req.body });
    res.send(newData3);
  };
  
  module.exports = { saveData, getData, delData, upData };