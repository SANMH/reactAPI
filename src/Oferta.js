import React from "react";
import Events from "./listasubasta";
import { Card, Input, Button, DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
let valor;

const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    
class Oferta extends React.Component{

    state = {
      
        date1: " ",
        date2: " ",
        pricio: " ",
        tasksEvent: []
    }
    fechaInicio;
    
    

    async handleClickEvent(initialState) {
        const tasks = await Events.getListasubasta();
        this.setState((initialState) => {
            return {
                tasksEvent: [
                    ...initialState.tasksEvent,
                    ...tasks
                ]
            }
        })
    }

    handleChangeDate1 = (e) => {
        this.setState({
            date1: e.target.value
        })
    }

    handleChangeDate2 = (e) => {
      this.setState({
          date2: e.target.value
      })
  }

    handleChangeInput = ($e, input) => {
        const newState = {};
        newState[input] = $e.target.value;
        this.setState(newState);
        valor= this.state.precio;
        console.log(valor);
    };

    

    evento = () => {
        var url = 'http://localhost:8000/api/subastas';
        var data = { 
                     fechaInicio: this.state.date1,
                     fechaFin: this.state.date2,
                     precio:valor*1
                    
                     };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
            }).then(res=> res.json())
            .catch(error =>
            console.error('Error:', error))

    }


    render() {

        const { tasksEvent, fechaInicio, fechaFin, precio } = this.state;


        return(
            

<form class="needs-validation" novalidate>


                <div class ="container">
                <button onClick={() => this.handleClickEvent(tasksEvent.id)}>subastas</button>
                <div class="form-row">
                <div>
                    <br/>
                    <label for="validationCustom01">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>  
                    </input>


                
                  <label htmlFor="fechaInicio">fecha Inicio</label>
                  <Input placeholder="fecha a realizarse" type="text" onChange={this.handleChangeDate1} /><br/> 
                
                    <label htmlFor="fechaFin">fecha Fin</label>
                    <Input placeholder="ubicacion del evento"  type="text" onChange={this.handleChangeDate2} /><br/>
        
                  <br/>
                    <label htmlFor="precio">Precio</label>
                    <Input placeholder="Precio" onChange={(e)=>this.handleChangeInput(e, 'precio')} /> <br/>
                    
                    

                  <br/>
                    <button  onClick={this.evento}>Crear Oferta</button>
              

                </div>
                </div>
                </div>

                {
                    tasksEvent.map((mostrar) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                                {mostrar.fechaFin}
                                <br/>
                            </Card>


                        </div>

                    )


                }
</form>

            
            
        );
    }
}

export default Oferta;