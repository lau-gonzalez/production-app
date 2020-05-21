const fh1Ctrl = {};

const Fh1 = require('../models/Fh1');

fh1Ctrl.getFhs = async (req,res) => {
    const fh1s = await Fh1.find();
    res.json(fh1s)
};

fh1Ctrl.createFh = async (req,res) => {
    const {
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        } = req.body;

    const newFh1 = new Fh1({
            plant,
            state, 
            st,
            lot,
            phase,
            particule,
            author
        });
    await newFh1.save();
    console.log(newFh1);    
    res.json({messages: 'Registro Creado'})
};

fh1Ctrl.getFh = async (req,res) => {
    const fh1 = await Fh1.findById(req.params.id);
    res.json(fh1)
};

fh1Ctrl.updateFh = async (req,res) => {
    const {
        plant,
        state, 
        st,
        lot,
        phase,
        particule,
        author
    } = req.body;


    await Fh1.findOneAndUpdate({_id: req.params.id},
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
fh1Ctrl.deleteFh = async (req,res) => {
    const fh1 = await Fh1.findByIdAndDelete(req.params.id);
    res.json({messages: 'Registro eliminado'})
};


module.exports = fh1Ctrl;