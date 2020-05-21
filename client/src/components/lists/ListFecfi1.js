import React, { Component } from 'react';
import axios from 'axios';
import './list.css';
import { url } from '../../constants/Url';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import 'moment/locale/es'

export default class ListFecfi1 extends Component {

    state = {
        fecfi1s: []
    }

    getRegisters = async () => {
        const res = await axios.get(`${url}/fecfi1s`);
        this.setState({ fecfi1s: res.data })
        console.log(res.data);
    }

    deleteRegister = async (id) => {
        if (window.confirm('¿Estas seguro de querer eliminar el registro?')) {
            await axios.delete(`${url}/fecfi1s/${id}`);
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
                    this.state.fecfi1s.reverse().map(fecfi1 => (

                        <li key={fecfi1._id} className="list-group-item list-group-item-action">
                            <div className="d-flex flex-row flex-wrap">
                                <div className='col-md-4'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Tanque</h5>
                                            <div className="col-md-12">Estado: {fecfi1.state}</div>
                                            <div className="col-md-12">ST: {fecfi1.st}</div>
                                            <div className="col-md-12">Lote: {fecfi1.lot}</div>
                                            <div className="col-md-12">Etapa: {fecfi1.phase}</div>
                                            <div className="col-md-12">Tamaño Particulas: {fecfi1.particule}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Usuario</h5>
                                            <div className="col-md-12">{fecfi1.author}</div>
                                            <div className="col-md-12">Fecha Creación: {moment(fecfi1.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-12 text-right"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => this.deleteRegister(fecfi1._id)}><DeleteIcon />
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
