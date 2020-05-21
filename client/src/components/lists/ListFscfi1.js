import React, { Component } from 'react';
import axios from 'axios';
import './list.css';
import { url } from '../../constants/Url';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import 'moment/locale/es'

export default class ListFscfi1 extends Component {

    state = {
        fscfi1s: []
    }

    getRegisters = async () => {
        const res = await axios.get(`${url}/fscfi1s`);
        this.setState({ fscfi1s: res.data })
        console.log(res.data);
    }

    deleteRegister = async (id) => {
        if (window.confirm('¿Estas seguro de querer eliminar el registro?')) {
            await axios.delete(`${url}/fscfi1s/${id}`);
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
                    this.state.fscfi1s.reverse().map(fscfi1 => (

                        <li key={fscfi1._id} className="list-group-item list-group-item-action">
                            <div className="d-flex flex-row flex-wrap">
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Dispersor</h5>
                                            <div className="col-md-12">Planta: {fscfi1.plant}</div>
                                            <div className="col-md-12">Estado: {fscfi1.tk_state}</div>
                                            <div className="col-md-12">ST: {fscfi1.tk_st}</div>
                                            <div className="col-md-12">Lote: {fscfi1.tk_lot}</div>
                                            <div className="col-md-12">Etapa: {fscfi1.tk_phase}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Molino 1</h5>
                                            <div className="col-md-12">Estado: {fscfi1.m1_state}</div>
                                            <div className="col-md-12">ST: {fscfi1.m1_st}</div>
                                            <div className="col-md-12">Lote: {fscfi1.m1_lot}</div>
                                            <div className="col-md-12">Etapa: {fscfi1.m1_phase}</div>
                                            <div className="col-md-12">Tamaño Particulas: {fscfi1.m1_particule}</div>
                                            <div className="col-md-12">Temperatura: {fscfi1.m1_temperature}</div>
                                            <div className="col-md-12">Bomba (%): {fscfi1.m1_bomb}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Molino 2</h5>
                                            <div className="col-md-12">Estado: {fscfi1.m2_state}</div>
                                            <div className="col-md-12">ST: {fscfi1.m2_st}</div>
                                            <div className="col-md-12">Lote: {fscfi1.m2_lot}</div>
                                            <div className="col-md-12">Etapa: {fscfi1.m2_phase}</div>
                                            <div className="col-md-12">Tamaño Particulas: {fscfi1.m2_particule}</div>
                                            <div className="col-md-12">Temperatura: {fscfi1.m2_temperature}</div>
                                            <div className="col-md-12">Bomba (%): {fscfi1.m2_bomb}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Tanque 3</h5>
                                            <div className="col-md-12">Estado: {fscfi1.tk3_state}</div>
                                            <div className="col-md-12">ST: {fscfi1.tk3_st}</div>
                                            <div className="col-md-12">Lote: {fscfi1.tk3_lot}</div>
                                            <h5>Usuario</h5>
                                            <div className="col-md-12">{fscfi1.author}</div>
                                            <div className="col-md-12">Fecha Creación: {moment(fscfi1.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                            <div className="col-md-12 text-right"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => this.deleteRegister(fscfi1._id)}><DeleteIcon /></div>

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
