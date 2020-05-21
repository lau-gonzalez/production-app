const fscfi2Ctrl = {};

const Fscfi2 = require('../models/Fscfi2');

fscfi2Ctrl.getFscs = async (req,res) => {
    const fscfi2s = await Fscfi2.find();
    res.json(fscfi2s)
};

fscfi2Ctrl.createFsc = async (req,res) => {
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

    const newFscfi2 = new Fscfi2({
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
    await newFscfi2.save();
    console.log(newFscfi2);    
    res.json({messages: 'Registro Creado'})
};

fscfi2Ctrl.getFsc = async (req,res) => {
    const fscfi2 = await Fscfi2.findById(req.params.id);
    res.json(fscfi2)
};

fscfi2Ctrl.updateFsc = async (req,res) => {
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


    await Fscfi2.findOneAndUpdate({_id: req.params.id},
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
fscfi2Ctrl.deleteFsc = async (req,res) => {
    const fsc = await Fscfi2.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};

module.exports = fscfi2Ctrl;