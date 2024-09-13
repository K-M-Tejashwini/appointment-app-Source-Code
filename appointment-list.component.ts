import { Component } from '@angular/core';
import{Appointment} from '../models/appointment'
import { OnInit } from '@angular/core';

@Component ({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  ngOnInit(): void {
    let saveAppointments = localStorage.getItem("appointments")

    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : []
  }

  // Two way binding 
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date ;
  appointments : Appointment[] = [];

   addAppointment(){
    // alert(this.newAppointmentTitle + " " + this.newAppointmentDate)- For Testing
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id : Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment)

      this.newAppointmentTitle = " ";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
   }
     // Removing the Appointments
    deletAppointment(index : number){
      this.appointments.splice(index,1)
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }

}
