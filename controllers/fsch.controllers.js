const fschCtrl = {};

const Fsch = require('../models/Fsch');

fschCtrl.getFscs = async (req,res) => {
    const fschs = await Fsch.find();
    res.json(fschs)
};

fschCtrl.createFsc = async (req,res) => {
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

    const newFsch = new Fsch({
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
    await newFsch.save();
    console.log(newFsch);    
    res.json({messages: 'Registro Creado'})
};

fschCtrl.getFsc = async (req,res) => {
    const fsch = await Fsch.findById(req.params.id);
    res.json(fsch)
};

fschCtrl.updateFsc = async (req,res) => {
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


    await Fsch.findOneAndUpdate({_id: req.params.id},
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
fschCtrl.deleteFsc = async (req,res) => {
    const fsch = await Fsch.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};

module.exports = fschCtrl;