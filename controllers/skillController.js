const asyncHandler = require('express-async-handler');
const Skill = require("../models/skillModels");

const getSkills = asyncHandler( async (req, res, next) => {
    let skills;
    skills = await Skill.find()
    res.skills = skills
    next();
})

const createSkill = asyncHandler( async (req, res, next) => {
    let skill;
    const {name, percentage} = req.body;
    skill = await Skill.create({
        name: name,
        percentage: percentage
    })
    res.skill = skill
    next();
})

const getSkill = asyncHandler( async (req, res, next) => {
    let skill
    skill = await Skill.findById(req.params.id)
    if (skill === null) {
        res.status(404).json({message: 'Cannot find skill'});
    }
    res.skill = skill;
    next();
})

module.exports = {
    getSkills,
    createSkill,
    getSkill
};