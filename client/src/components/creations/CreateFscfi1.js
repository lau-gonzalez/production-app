import React, { Component } from 'react'
import './create.css';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { url } from '../../constants/Url';
import ListFscfi1 from '../lists/ListFscfi1';
import plant from '../../img/svg_plant_fs.svg';


export default class CreateFscfi1 extends Component {    

    state = {
        users: [],
        plant: "",
        tk_state: "",
        tk_st: "",
        tk_lot: "",
        tk_phase: "",
        m1_state: "",
        m1_st: "",
        m1_lot: "",
        m1_phase: "",
        m1_particule: "",
        m1_temperature: "",
        m1_bomb: "",
        m2_state: "",
        m2_st: "",
        m2_lot: "",
        m2_phase: "",
        m2_particule: "",
        m2_temperature: "",
        m2_bomb: "",
        tk3_st: "",
        tk3_lot: "",
        tk3_state: "",
        author: ""
    }

    getRegisters = async () => {
        const res = await axios.get(`${url}/fscfi1s`);
        this.setState({ fscfi1s: res.data });        
    }

    resetState = () => {
        this.setState({
            plant: "",
            tk_state: "",
            tk_st: "",
            tk_lot: "",
            tk_phase: "",
            m1_state: "",
            m1_st: "",
            m1_lot: "",
            m1_phase: "",
            m1_particule: "",
            m1_temperature: "",
            m1_bomb: "",
            m2_state: "",
            m2_st: "",
            m2_lot: "",
            m2_phase: "",
            m2_particule: "",
            m2_temperature: "",
            m2_bomb: "",
            tk3_st: "",
            tk3_lot: "",
            tk3_state: "",
            author: ""
        })
    }

    onSubmit = async (e) => {  
        e.preventDefault();            
        const newFscfi1 = {
            plant: "PLANT 1",
            tk_state: this.state.tk_state,
            tk_st: this.state.tk_st,
            tk_lot: this.state.tk_lot,
            tk_phase: this.state.tk_phase,
            m1_state: this.state.m1_state,
            m1_st: this.state.m1_st,
            m1_lot: this.state.m1_lot,
            m1_phase: this.state.m1_phase,
            m1_particule: this.state.m1_particule,
            m1_temperature: this.state.m1_temperature,
            m1_bomb: this.state.m1_bomb,
            m2_state: this.state.m2_state,
            m2_st: this.state.m2_st,
            m2_lot: this.state.m2_lot,
            m2_phase: this.state.m2_phase,
            m2_particule: this.state.m2_particule,
            m2_temperature: this.state.m2_temperature,
            m2_bomb: this.state.m2_bomb,
            tk3_st: this.state.tk3_st,
            tk3_lot: this.state.tk3_lot,
            tk3_state: this.state.tk3_state,
            author: this.props.usuario
        }
        console.log(newFscfi1)              
        await axios.post(`${url}/fscfi1s`, newFscfi1);
        alert('Registro Guardado')        
        this.resetState();
    }

    onClick = async (e) => {
        e.preventDefault();
        document.getElementById('form_div').classList.toggle("form_visible");
    }


    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {       
        return (
        <div>
            <div className="container column">                            
                <div className="div_row_margin">
                    <div className="col-md-12 card card-body">
                        <h3>FSCFI 1</h3>
                        <div className="row div_row">
                            <div className="col-md-9 border_div_h">
                                <div className="div_row">
                                    <img src={plant} alt="planta"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 align-self-end div_button">
                                <button onClick={this.onClick} className="btn btn-secondary font_button">
                                    Añadir estado <AddIcon fontSize="large" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <form id='form_div' className="div_row_margin" onSubmit={this.onSubmit}>
                    <div className='col-md-3 card card-body'>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <h5 className='color_h5'>Dispersor</h5>
                                <input value={this.state.tk_state} onChange={this.onInputChange} className='form-control' name='tk_state' type="text" required placeholder='Estado Dispersor' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.tk_st} onChange={this.onInputChange} className='form-control' name='tk_st' type="text" required placeholder='Descripcion ST' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.tk_lot} onChange={this.onInputChange} className='form-control' name='tk_lot' type="number" required placeholder='Numero de lote' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.tk_phase} onChange={this.onInputChange} className='form-control' name='tk_phase' type="number" required placeholder='Etapa Nro °' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 card card-body">
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <h5 className='color_h5'>Molino 1</h5>
                                <input value={this.state.m1_state} onChange={this.onInputChange} className='form-control' name='m1_state' type="text" required placeholder='Estado Molino 1' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m1_st} onChange={this.onInputChange} className='form-control' name='m1_st' type="text" required placeholder='Descripcion ST' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m1_lot} onChange={this.onInputChange} className='form-control' name='m1_lot' type="number" placeholder='Numero de lote' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m1_phase} onChange={this.onInputChange} className='form-control' name='m1_phase' type="number" required placeholder='Etapa Nro °' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m1_particule} onChange={this.onInputChange} className='form-control' name='m1_particule' type="number" step="0.01" required placeholder='Tamaño Particulas' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m1_temperature} onChange={this.onInputChange} className='form-control' name='m1_temperature' type="number" step="0.01" required placeholder='Temperatura' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m1_bomb} onChange={this.onInputChange} className='form-control' name='m1_bomb' type="number" required step="0.01" placeholder='Porcentaje Bomba' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 card card-body">
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <h5 className='color_h5'>Molino 2</h5>
                                <input value={this.state.m2_state} onChange={this.onInputChange} className='form-control' name='m2_state' type="text" required placeholder='Estado Molino 2' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m2_st} onChange={this.onInputChange} className='form-control' name='m2_st' type="text" required placeholder='Descripcion ST' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m2_lot} onChange={this.onInputChange} className='form-control' name='m2_lot' type="number" required placeholder='Numero de lote' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m2_phase} onChange={this.onInputChange} className='form-control' name='m2_phase' type="number" required placeholder='Etapa Nro °' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m2_particule} onChange={this.onInputChange} className='form-control' name='m2_particule' type="number" step="0.01" required placeholder='Tamaño Particulas' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m2_temperature} onChange={this.onInputChange} className='form-control' name='m2_temperature' type="number" step="0.01" required placeholder='Temperatura' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.m2_bomb} onChange={this.onInputChange} className='form-control' name='m2_bomb' type="number" step="0.01" required placeholder='Porcentaje Bomba' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 card card-body">
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <h5 className='color_h5'>Tanque 3</h5>
                                <input value={this.state.tk3_state} onChange={this.onInputChange} className='form-control' name='tk3_state' type="text" required placeholder='Estado Tanque 3' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.tk3_st} onChange={this.onInputChange} className='form-control' name='tk3_st' type="text" required placeholder='Descripcion ST' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.tk3_lot} onChange={this.onInputChange} className='form-control' name='tk3_lot' type="number" required placeholder='Numero de lote' />
                            </div>
                        </div>                        
                        <button type="submit" className='btn btn-secondary'>
                            Guardar
                        </button>
                    </div>
                </form>
                <div className="column">
                    <ListFscfi1 />
                </div>
            </div>
        </div>
        )
    }
}
