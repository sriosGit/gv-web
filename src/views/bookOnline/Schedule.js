import React, {Component} from 'react'
import {PropTypes} from 'prop-types' 
import moment from 'moment'
//import 'moment/locale/zh-cn';
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'
import 'react-big-scheduler/lib/css/style.css'
require('datejs')

class Schedule extends Component{
    constructor(props){
        super(props);

        //let schedulerData = new SchedulerData(new moment("2017-12-18").format(DATE_FORMAT), ViewTypes.Week);
        let schedulerData = new SchedulerData(moment(), ViewTypes.Week, false, false);
        schedulerData.localeMoment.locale('zh-cn');
        let resources = [
                    {
                       id: '7',
                       name: '7:00 - 8:00'
                    },
                    {
                       id: '8',
                       name: '8:00 - 9:00'
                    },
                    {
                       id: '9',
                       name: '9:00 - 10:00'
                    },
                    {
                       id: '10',
                       name: '10:00 - 11:00'
                    },
                    {
                       id: '11',
                       name: '11:00 - 12:00'
                    },
                    {
                       id: '12',
                       name: '12:00 - 13:00'
                    },
                    {
                       id: '13',
                       name: '13:00 - 14:00'
                    },
                    {
                       id: '14',
                       name: '14:00 - 15:00'
                    },
                    {
                       id: '15',
                       name: '15:00 - 16:00'
                    },
                    {
                       id: '16',
                       name: '16:00 - 17:00'
                    },
                    {
                       id: '17',
                       name: '17:00 - 18:00'
                    }
                ];
        schedulerData.setResources(resources);
        schedulerData.setEvents(DemoData.events);
        this.state = {
            viewModel: schedulerData
        }
    }

    render(){
        const {viewModel} = this.state;
        return (
            <div>
                <div>
                    <h3 style={{textAlign: 'center'}}>Escoja una fecha disponible</h3>
                    <center>
                    <Scheduler schedulerData={viewModel}
                               prevClick={this.prevClick}
                               nextClick={this.nextClick}
                               onSelectDate={this.onSelectDate}
                               eventItemClick={this.eventClicked}
                               onViewChange={this.onViewChange}
                               newEvent={this.newEvent}
                    />
                    </center>
                </div>
            </div>
        )
    }
    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }
    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }


    onSelectDate = (schedulerData, date) => {
        //console.log(date)
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        if(window.confirm(`¿Desea separar una cita en el siguiente horario? (${slotName} ${Date.parse(start).toString('d')})`)){
            let newFreshId = 0;
            schedulerData.events.forEach((item) => {
                if(item.id >= newFreshId)
                    newFreshId = item.id;
            });
            const newStart = Date.parse(start).add(parseInt(slotId)).hours().toString()
            const newEnd = Date.parse(newStart).add(1).hours().toString()
            let newEvent = {
                id: newFreshId,
                title: this.props.service,
                start: newStart,
                end: newEnd,
                resourceId: slotId,
                bgColor: 'purple'
            }
            schedulerData.addEvent(newEvent);
            schedulerData.events.splice(newFreshId, 1)
            this.props.setDate(newStart, newEnd)
            this.setState({
                viewModel: schedulerData
            })
        }
    }
    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        if(window.confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
            schedulerData.moveEvent(event, slotId, slotName, start, end);
            this.setState({
                viewModel: schedulerData
            })
        }
    }
}

export default withDragDropContext(Schedule)