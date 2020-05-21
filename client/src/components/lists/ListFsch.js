import React, { Component } from 'react';
import axios from 'axios';
import './list.css';
import { url } from '../../constants/Url';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import 'moment/locale/es'

export default class ListFsch extends Component {

    state = {
        fschs: []
    }

    getRegisters = async () => {
        const res = await axios.get(`${url}/fschs`);
        this.setState({ fschs: res.data })
        console.log(res.data);
    }

    deleteRegister = async (id) => {
        if (window.confirm('¿Estas seguro de querer eliminar el registro?')) {
            await axios.delete(`${url}/fschs/${id}`);
            this.getRegisters();
        }
    }

    async componentDidMount() {
        this.getRegisters();
    }

    render() {
        return (
        <div>
            <button className='btn btn-primary margin_btn' onClick={() => this.getRegisters()}>Recargar Lista</button>

            <ul className="list-group">
                {
                    this.state.fschs.reverse().map(fsch => (

                        <li key={fsch._id} className="list-group-item list-group-item-action">
                            <div className="d-flex flex-row flex-wrap">
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Dispersor</h5>
                                            <div className="col-md-12">Planta: {fsch.plant}</div>
                                            <div className="col-md-12">Estado: {fsch.tk_state}</div>
                                            <div className="col-md-12">ST: {fsch.tk_st}</div>
                                            <div className="col-md-12">Lote: {fsch.tk_lot}</div>
                                            <div className="col-md-12">Etapa: {fsch.tk_phase}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Molino 1</h5>
                                            <div className="col-md-12">Estado: {fsch.m1_state}</div>
                                            <div className="col-md-12">ST: {fsch.m1_st}</div>
                                            <div className="col-md-12">Lote: {fsch.m1_lot}</div>
                                            <div className="col-md-12">Etapa: {fsch.m1_phase}</div>
                                            <div className="col-md-12">Tamaño Particulas: {fsch.m1_particule}</div>
                                            <div className="col-md-12">Temperatura: {fsch.m1_temperature}</div>
                                            <div className="col-md-12">Bomba (%): {fsch.m1_bomb}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Molino 2</h5>
                                            <div className="col-md-12">Estado: {fsch.m2_state}</div>
                                            <div className="col-md-12">ST: {fsch.m2_st}</div>
                                            <div className="col-md-12">Lote: {fsch.m2_lot}</div>
                                            <div className="col-md-12">Etapa: {fsch.m2_phase}</div>
                                            <div className="col-md-12">Tamaño Particulas: {fsch.m2_particule}</div>
                                            <div className="col-md-12">Temperatura: {fsch.m2_temperature}</div>
                                            <div className="col-md-12">Bomba (%): {fsch.m2_bomb}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Tanque 3</h5>
                                            <div className="col-md-12">Estado: {fsch.tk3_state}</div>
                                            <div className="col-md-12">ST: {fsch.tk3_st}</div>
                                            <div className="col-md-12">Lote: {fsch.tk3_lot}</div>
                                            <h5>Usuario</h5>
                                            <div className="col-md-12">{fsch.author}</div>
                                            <div className="col-md-12">Fecha Creación: {moment(fsch.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                            <div className="col-md-12 text-right"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => this.deleteRegister(fsch._id)}><DeleteIcon /></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>

        )
    }
}
