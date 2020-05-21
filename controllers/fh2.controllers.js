const fh2Ctrl = {};

const Fh2 = require('../models/Fh2');

fh2Ctrl.getFhs = async (req,res) => {
    const fh2s = await Fh2.find();
    res.json(fh2s)
};

fh2Ctrl.createFh = async (req,res) => {
    const {
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        } = req.body;

    const newFh2 = new Fh2({
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        });
    await newFh2.save();
    console.log(newFh2);    
    res.json({messages: 'Registro Creado'})
};

fh2Ctrl.getFh = async (req,res) => {
    const fh2 = await Fh2.findById(req.params.id);
    res.json(fh2)
};

fh2Ctrl.updateFh = async (req,res) => {
    const {
        plant,
        state, 
        st,
        lot,
        phase,
        particule,
        author
    } = req.body;


    await Fh2.findOneAndUpdate({_id: req.params.id},
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
fh2Ctrl.deleteFh = async (req,res) => {
    const fh2 = await Fh2.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};


module.exports = fh2Ctrl;