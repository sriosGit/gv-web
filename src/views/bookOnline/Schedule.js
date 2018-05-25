import React, {Component} from 'react'
import moment from 'moment'
import 'moment/locale/es'
//import 'moment/locale/zh-cn';
import Scheduler, {SchedulerData, ViewTypes, DemoData} from 'react-big-scheduler'
import { FormattedDate, FormattedTime } from 'react-intl';
import withDragDropContext from './withDnDContext'
import DatePicker from 'react-datepicker';
import 'react-big-scheduler/lib/css/style.css'
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/App.css';
require('datejs')

class Schedule extends Component{
    constructor(props){
        super(props);
        moment.locale('es')
        let schedulerData = new SchedulerData(new moment(), ViewTypes.Week, false, false, {
            checkConflict: true,
            resourceName: 'Día/Mes',
            startResizable: false,
            endResizable: false,
            movable: false,
        }, undefined, moment);
        let resources = [
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
                    },
                    {
                       id: '18',
                       name: '18:00 - 19:00'
                    }
                ];
        schedulerData.setResources(resources);
        schedulerData.setEvents(DemoData.events);
        this.state = {
            viewModel: schedulerData,
            isOpen: false,
            isMobile: this.props.isMobile,
            startDate:  moment(new Date()).add(1,'days'),
            available: [],
            hour: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this)
    }
    componentWillMount(){
      this.parseEventsToSchedule()
      this.getAvailable()
    }
    parseEventsToSchedule(){
      const {viewModel} = this.state
      const parsedEvents = []
      this.props.events.map((event, i) => {
        var startDate = Date.parse(event.start.dateTime)
        var newEvent = {
          id: i,
          start: event.start.dateTime ,
          end: event.end.dateTime,
          resourceId: startDate.getHours().toString(),
          title: 'Reservado',
          bgColor: '#D9D9D9'
        }
        parsedEvents.push(newEvent)
      });
      viewModel.setEvents(parsedEvents)
    }
    handleChange (date) {
        this.setState({startDate: date}, () => {
            this.getAvailable()
        })
        this.toggleCalendar()
    }

    toggleCalendar (e) {
        e && e.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
    }
    selectHour(e){
        const start = e.target.value
        const end = Date.parse(start).add(1).hours().toString()
        this.props.setDate(start, end)
        this.setState({hour: Date.parse(start).getHours()})

    }
    getAvailable(){
        const allHours = [9, 10, 11, 12 ,13 ,14 ,15 ,16, 17, 18]
        const available = []
        const startDate = this.state.startDate._d     
        this.props.events.map((event, i) => { 
            const start = Date.parse(event.start.dateTime)
            if (start.getFullYear() === startDate.getFullYear() &&
                start.getMonth() === startDate.getMonth() &&
                start.getDate() === startDate.getDate()){
                
                var index = allHours.indexOf(start.getHours());
                if (index > -1) {
                    allHours.splice(index, 1);
                }       
            }
        });

        allHours.map((hour, i) => {
            available.push(Date.parse(startDate).set({hour: hour, minute: 0, second: 0}))
        })
        this.setState({available: available})
    }
    isSelectedHour(i){
       return  i === this.state.hour ? "hour-btn-active" : "hour-btn" 
    }
    renderMobile(){
        const {startDate, available} = this.state

        return(
            <div>
                <div style={{margin: 30}}>
                1. Selecciona el día: <button
                    className="example-custom-input"
                    onClick={this.toggleCalendar}>
                    {startDate.format("DD-MM-YYYY")}
                </button>
                {
                    this.state.isOpen && (
                        <DatePicker
                            selected={startDate}
                            onChange={this.handleChange}
                            withPortal
                            inline />
                    )
                }
                </div> 
                2. Selecciona la hora: 
                <div>         
                {
                    available.length > 0 ? available.map((event, i) => {
                        const parsedEvent = Date.parse(event)
                        return <button value={event} key={i} onClick={this.selectHour.bind(this)} className={this.isSelectedHour(parsedEvent.getHours())}>{parsedEvent.getHours()}:00</button>
                    }) : null
                }
                </div>
            </div>
            )
    }
    render(){
        const {viewModel, isMobile, available} = this.state;
        return (
            <div>
                <div>
                    <center style={{textAlign: 'left', fontWeight: 300, margin: 15}} className="form-title black full-width container">
                        <span style={{}} className="strong">RESERVE </span>SU CONSULTA
                    </center>
                    <center>
                    {!isMobile ? <Scheduler schedulerData={viewModel}
                               prevClick={this.prevClick}
                               nextClick={this.nextClick}
                               onSelectDate={this.onSelectDate}
                               eventItemClick={this.eventClicked}
                               onViewChange={this.onViewChange}
                               newEvent={this.newEvent}
                               conflictOccurred={this.conflictOccurred}
                               startResizable={false}
                    /> : this.renderMobile()}
                    </center>
                </div>
            </div>
        )
    }
    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        this.parseEventsToSchedule();
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
        this.parseEventsToSchedule();
        this.setState({
            viewModel: schedulerData
        })
    }


    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        this.parseEventsToSchedule();
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
    };

    conflictOccurred(){
        alert('Lo sentimos, este horario ya esta reservado, pruebe con otro por favor.')
    }

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        var startDate = Date.parse(start)
        if(Date.compare(Date.parse('tomorrow'), startDate)>0 || startDate.is().saturday() || startDate.is().sunday()){
            alert("Por favor, escoja una fecha valida");
        }else if(window.confirm(`¿Desea separar una cita en el siguiente horario? (${slotName} ${Date.parse(start).toString('d')})`)){
            let newFreshId = 9999;
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
            this.parseEventsToSchedule()
            schedulerData.addEvent(newEvent);
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