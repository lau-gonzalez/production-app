const { Schema, model } = require('mongoose');


const fecfi2Schema = new Schema({
    plant: { type: String, required: true},
    state: { type: String, required: true},
    st: { type: String, required: true},
    lot: { type: Number, required: true},
    phase: { type: Number, required: true},
    particule: { type: Number, required: true},
    author: { type: String, required: true}
},{
    timestamps: true
});

module.exports = model('Fecfi2', fecfi2Schema);

