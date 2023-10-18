const express = require('express');
const { getSkills, createSkill, getSkill } = require('../controllers/skillController');

const router = express.Router();

router.get('/', getSkills, async (req, res) => {
    res.status(200).json({skills: res.skills})
});

router.get('/:id', getSkill, async (req, res) => {
    try {
        res.status(200).json({skill: res.skill});
    } catch (err) {
        res.status(404).json({err: err.message});
        throw new Error(err.message)
    }
});

router.post('/', createSkill, async (req, res) => {
    try {
        res.status(200).json({skill: res.skill});
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
});

router.patch('/:id', getSkill, async (req, res) => {
    if (req.body != null) {
        if (req.body.name) {
            res.skill.name = req.body.name;
        }
        if (req.body.percentage) {
            res.skill.percentage = req.body.percentage;
        }
        try {
            const updatedSkill = await res.skill.save();
            res.status(200).json({ message: "Skill successfully updated", skill: updatedSkill });
        } catch (err) {
            res.status(400).json({ message: "Error updating the person", error: err.message });
        }
    } else {
        res.status(500).json({ message: "Invalid request body" });
    }
});

router.delete('/:id', getSkill, async (req, res) => {
    try {
        await res.skill.deleteOne();
        res.status(200).json({ message: "Skill removed" });
    } catch (err) {
        res.status(500)
        throw new Error(err.message);
    }
});


module.exports = router;
