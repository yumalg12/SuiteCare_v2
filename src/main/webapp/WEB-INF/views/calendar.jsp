<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@6.1.9/index.global.min.js'></script>
    <script>

    document.addEventListener('DOMContentLoaded', function() {
    	  var calendarEl = document.getElementById('calendar');

    	  var calendar = new FullCalendar.Calendar(calendarEl, {
    	  initialView: 'listWeek',
			editable: true,
			selectable: true,
			headerToolbar: {
			  center: 'title',
			  left: 'dayGridMonth,listWeek',
			},
		    locale: 'ko',
          events: [
        	  {"title":"첫 번째 이벤트","start":"2023-11-01","end":"2023-11-07","status":"done"},
        	  {"title":"환자 예약","start":"2023-11-02T12:00:00+00:00","end":"2023-11-05T06:00:00+00:00"},
        	  {"title":"event 5","start":"2023-10-26T10:00:00+00:00","end":"2023-11-02T15:00:00+00:00"},
        	  {"title":"event 2","start":"2023-11-02T09:00:00+00:00","end":"2023-11-02T14:00:00+00:00"}
        	  ],
    	  eventDidMount: function(info) {
    	    if (info.event.extendedProps.status === 'done') {
    	      info.el.style.backgroundColor = '#ccc';

    	      // Change color of dot marker
    	      var dotEl = info.el.getElementsByClassName('fc-event-dot')[0];
    	      if (dotEl) {
    	        dotEl.style.backgroundColor = 'white';
    	      }
    	    }
    	  }

    	});

    	  calendar.render();
    	});

    </script>
  </head>
  <body>
    <div id='calendar'></div>
  </body>
</html>