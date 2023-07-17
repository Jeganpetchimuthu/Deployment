const express = require("express");
const mongoose = require("mongoose");

const studentdata = require("../models/studentdata.js");

const router = express.Router();

const createStudent = async (req, res) => {
  console.log(req.body);
  const newStudent = new studentdata({
    name: req.body.name,
    roll: req.body.roll,
    available: req.body.available,
    registered_on: req.body.registered_on,
    subjects: req.body.subjects,
    gender: req.body.gender,
    contact_no: req.body.contact_no,
  });

  try {
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.createStudent = createStudent;
