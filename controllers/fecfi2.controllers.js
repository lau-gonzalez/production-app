const fecfi2Ctrl = {};

const Fecfi2 = require('../models/Fecfi2');

fecfi2Ctrl.getFhs = async (req,res) => {
    const fecfi2s = await Fecfi2.find();
    res.json(fecfi2s)
};

fecfi2Ctrl.createFh = async (req,res) => {
    const {
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        } = req.body;

    const newFecfi2 = new Fecfi2({
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        });
    await newFecfi2.save();
    console.log(newFecfi2);    
    res.json({messages: 'Registro Creado'})
};

fecfi2Ctrl.getFh = async (req,res) => {
    const fecfi2 = await Fecfi2.findById(req.params.id);
    res.json(fecfi2)
};

fecfi2Ctrl.updateFh = async (req,res) => {
    const {
        plant,
        state, 
        st,
        lot,
        phase,
        particule,
        author
    } = req.body;


    await Fecfi2.findOneAndUpdate({_id: req.params.id},
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
fecfi2Ctrl.deleteFh = async (req,res) => {
    const fecfi2 = await Fecfi2.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};


module.exports = fecfi2Ctrl;