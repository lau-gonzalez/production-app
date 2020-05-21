const { Schema, model } = require('mongoose');


const fscfi1Schema = new Schema({
    plant: { type: String, required: true},
    tk_state: { type: String, required: true},
    tk_st: { type: String, required: true},
    tk_lot: { type: Number, required: true},
    tk_phase: { type: Number, required: true},
    m1_state: { type: String, required: true},
    m1_st: { type: String, required: true},
    m1_lot: { type: Number, required: true},
    m1_phase: { type: Number, required: true},
    m1_particule: { type: Number, required: true},
    m1_temperature: { type: Number, required: true},
    m1_bomb: { type: Number, required: true},
    m2_state: { type: String, required: true},
    m2_st: { type: String, required: true},
    m2_lot: { type: Number, required: true},
    m2_phase: { type: Number, required: true},
    m2_particule: { type: Number, required: true},
    m2_temperature: { type: Number, required: true},
    m2_bomb: { type: Number, required: true},
    tk3_st: { type: String, required: true},
    tk3_lot: { type: Number, required: true},
    tk3_state: { type: String},
    author: { type: String, required: true},    
},{
    timestamps: true
});

module.exports = model('Fscfi1', fscfi1Schema);