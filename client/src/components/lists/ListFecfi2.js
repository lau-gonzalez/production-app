import React, { Component } from 'react';
import axios from 'axios';
import './list.css';
import { url } from '../../constants/Url';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import 'moment/locale/es'

export default class ListFecfi2 extends Component {

    state = {
        fecfi2s: []
    }

    getRegisters = async () => {
        const res = await axios.get(`${url}/fecfi2s`);
        this.setState({ fecfi2s: res.data })
        console.log(res.data);
    }

    deleteRegister = async (id) => {
        if (window.confirm('¿Estas seguro de querer eliminar el registro?')) {
            await axios.delete(`${url}/fecfi2s/${id}`);
            this.getRegisters();
        }
    }

    async componentDidMount() {
        this.getRegisters();
    }

    render() {
        return (
        <div>
            <button className='btn btn-primary  margin_btn' onClick={() => this.getRegisters()}>Recargar Lista</button>

            <ul className="list-group">
                {
                    this.state.fecfi2s.reverse().map(fecfi2 => (

                        <li key={fecfi2._id} className="list-group-item list-group-item-action">
                            <div className="d-flex flex-row flex-wrap">                               
                                <div className='col-md-4'>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <h5>Tanque</h5>
                                            <div className="col-md-12">Estado: {fecfi2.state}</div>
                                            <div className="col-md-12">ST: {fecfi2.st}</div>
                                            <div className="col-md-12">Lote: {fecfi2.lot}</div>
                                            <div className="col-md-12">Etapa: {fecfi2.phase}</div>
                                            <div className="col-md-12">Tamaño Particulas: {fecfi2.particule}</div>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className='col-md-4'>
                                    <div className="row">
                                        <div className="form-group col-md-12">                                          
                                            <h5>Usuario</h5>
                                            <div className="col-md-12">{fecfi2.author}</div>
                                            <div className="col-md-12">Fecha Creación: {moment(fecfi2.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-12 text-right"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => this.deleteRegister(fecfi2._id)}><DeleteIcon />
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
