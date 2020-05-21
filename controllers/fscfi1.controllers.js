const fscfi1Ctrl = {};

const Fscfi1 = require('../models/Fscfi1');

fscfi1Ctrl.getFscs = async (req,res) => {
    const fscfi1s = await Fscfi1.find();
    res.json(fscfi1s)
};

fscfi1Ctrl.createFsc = async (req,res) => {
    const {
            plant,
            tk_state,
            tk_st,
            tk_lot, 
            tk_phase,
            m1_state,
            m1_st,
            m1_lot, 
            m1_phase,
            m1_particule,
            m1_temperature,
            m1_bomb,
            m2_state,
            m2_st,
            m2_lot, 
            m2_phase,
            m2_particule,
            m2_temperature,
            m2_bomb,
            tk3_st,
            tk3_lot,
            tk3_state,
            author,
            date
        } = req.body;

    const newFscfi1 = new Fscfi1({
            plant,
            tk_state,
            tk_st,
            tk_lot, 
            tk_phase,
            m1_state,
            m1_st,
            m1_lot, 
            m1_phase,
            m1_particule,
            m1_temperature,
            m1_bomb,
            m2_state,
            m2_st,
            m2_lot, 
            m2_phase,
            m2_particule,
            m2_temperature,
            m2_bomb,
            tk3_st,
            tk3_lot,
            tk3_state,
            author,
            date
        });
    await newFscfi1.save();
    console.log(newFscfi1);    
    res.json({messages: 'Registro Creado'})
};

fscfi1Ctrl.getFsc = async (req,res) => {
    const fscfi1 = await Fscfi1.findById(req.params.id);
    res.json(fscfi1)
};

fscfi1Ctrl.updateFsc = async (req,res) => {
    const {
        plant,
        tk_state,
        tk_st,
        tk_lot, 
        tk_phase,
        m1_state,
        m1_st,
        m1_lot, 
        m1_phase,
        m1_particule,
        m1_temperature,
        m1_bomb,
        m2_state,
        m2_st,
        m2_lot, 
        m2_phase,
        m2_particule,
        m2_temperature,
        m2_bomb,
        tk3_st,
        tk3_lot,
        tk3_state,
        author,
        date
    } = req.body;


    await Fscfi1.findOneAndUpdate({_id: req.params.id},
        {   plant,
            tk_state,
            tk_st,
            tk_lot, 
            tk_phase,
            m1_state,
            m1_st,
            m1_lot, 
            m1_phase,
            m1_particule,
            m1_temperature,
            m1_bomb,
            m2_state,
            m2_st,
            m2_lot, 
            m2_phase,
            m2_particule,
            m2_temperature,
            m2_bomb,
            tk3_st,
            tk3_lot,
            tk3_state,
            author,
            date
        });

    res.json({messages: 'Registro acutalizado'})
};
fscfi1Ctrl.deleteFsc = async (req,res) => {
    const fscfi1 = await Fscfi1.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};

module.exports = fscfi1Ctrl;