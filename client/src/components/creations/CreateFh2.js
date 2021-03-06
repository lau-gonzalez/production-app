import React, { Component } from 'react'
import './create.css';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { url } from '../../constants/Url';
import ListFh2 from '../lists/ListFh2';
import plant from '../../img/svg_plant_fh.svg';


export default class CreateFh2 extends Component {    

    state = {
            plant:'',
            state:'', 
            st:'',
            lot:'',
            phase:'',
            particule:'',
            author:''
        }

    getRegisters = async () => {
        const res = await axios.get(`${url}/fh2s`);
        this.setState({ fh2s: res.data });        
    }

    resetState = () => {
        this.setState({
            plant:'',
            state:'', 
            st:'',
            lot:'',
            phase:'',
            particule:'',
            author:''
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();        
        const newFh2 = {
            plant: "PLANT 7",
            state: this.state.state, 
            st: this.state.st,
            lot: this.state.lot,
            phase: this.state.phase,
            particule: this.state.particule,
            author: this.props.usuario
        }
        console.log(newFh2)        
        await axios.post(`${url}/fh2s`, newFh2);
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
                        <h3>FH 2</h3>
                        <div className="row div_row">
                            <div className="col-md-9 border_div_h">
                                <div className="div_row">
                                    <img className='img_fh' src={plant} alt="planta"/>
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
                    <div className="col-md-6 card card-body">
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <h5 className='color_h5'>TANQUE</h5>
                                <input value={this.state.state} onChange={this.onInputChange} className='form-control' name='state' type="text" required placeholder='Estado Tanque 1' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.st} onChange={this.onInputChange} className='form-control' name='st' type="text" required placeholder='Descripcion ST' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.lot} onChange={this.onInputChange} className='form-control' name='lot' type="number" placeholder='Numero de lote' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.phase} onChange={this.onInputChange} className='form-control' name='phase' type="number" required placeholder='Etapa Nro °' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-12'>
                                <input value={this.state.particule} onChange={this.onInputChange} className='form-control' name='particule' type="number" step="0.01" required placeholder='Tamaño Particulas' />
                            </div>
                        </div>
                        <div>                
                        <button type="submit" className='btn btn-secondary'>
                            Guardar
                        </button>
                    </div>
                    </div>                       
                    
                </form>
                <div className="column">
                    <ListFh2 />
                </div>
            </div>
        </div>
        )
    }
}
