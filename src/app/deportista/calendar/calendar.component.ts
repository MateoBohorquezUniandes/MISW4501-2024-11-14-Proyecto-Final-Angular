import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventosService } from './eventos.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  events: Array<any> = [];
  constructor(private eventosService: EventosService) {}

  calendarOptions: CalendarOptions = {};

  currentEvents: EventApi[] = [];

  ngOnInit() {
    this.getEventosFuturos();
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridWeek',
      weekends: true,
    };
  }

  getEventosFuturos(): void {
    this.eventosService.getAsociatedEvents(1).subscribe((eventos) => {
      let myEvents: Array<any> = [];

      eventos.forEach((item) => {
        const newRow = {
          title: item.nombre,
          start: item.fecha,
        };
        myEvents.push(newRow);
      });
      console.log(myEvents);
      this.calendarOptions.events = myEvents;
      console.log(this.calendarOptions.events);
    });
  }
}
