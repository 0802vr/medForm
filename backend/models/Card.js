const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    otdel: {
      type: String,
      required: true,
    },
    postF: {
      clapan: { type: Number, required: true },
      capel: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
      dren: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
      mat: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
    },
    postS: {
      clapan: { type: Number },
      capel: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
      dren: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
      mat: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
    },
    postT: {
      clapan: { type: Number },
      capel: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
      dren: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
      mat: {
        vh: { type: Number, required: true },
        Ec: { type: Number, required: true },
        pH: { type: Number, required: true },
      },
    },
  },
);

module.exports = mongoose.model('Card', cardSchema);
