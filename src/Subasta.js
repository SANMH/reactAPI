import React from "react";
import Events from "./listasubasta";
import { Card, Input, Button, DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
let valor;

const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    
class Subasta extends React.Component{



  

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
            <div>
          <Button onClick={() => this.handleClickEvent(tasksEvent.id)}>subastas</Button>


            
</div>

            
            
        );
    }
}

export default Subasta;