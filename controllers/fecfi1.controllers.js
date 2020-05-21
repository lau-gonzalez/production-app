const fecfi1Ctrl = {};

const Fecfi1 = require('../models/Fecfi1');

fecfi1Ctrl.getFhs = async (req,res) => {
    const fecfi1s = await Fecfi1.find();
    res.json(fecfi1s)
};

fecfi1Ctrl.createFh = async (req,res) => {
    const {
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        } = req.body;

    const newFecfi1 = new Fecfi1({
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        });
    await newFecfi1.save();
    console.log(newFecfi1);    
    res.json({messages: 'Registro Creado'})
};

fecfi1Ctrl.getFh = async (req,res) => {
    const fecfi1 = await Fecfi1.findById(req.params.id);
    res.json(fecfi1)
};

fecfi1Ctrl.updateFh = async (req,res) => {
    const {
        plant,
        state, 
        st,
        lot,
        phase,
        particule,
        author
    } = req.body;


    await Fecfi1.findOneAndUpdate({_id: req.params.id},
        {   plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        });

    res.json({messages: 'Registro acutalizado'})
};
fecfi1Ctrl.deleteFh = async (req,res) => {
    const fecfi1 = await Fecfi1.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};


module.exports = fecfi1Ctrl;