<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='utf-8' />
<script
	src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js'></script>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		var calendarEl = document.getElementById('calendar');
		var calendar = new FullCalendar.Calendar(calendarEl,
				{
					timeZone : 'UTC',
					headerToolbar : {
						left : 'prev today next',
						center : 'title',
						right : 'dayGridMonth,listWeek'
					},
					initialView : 'dayGridMonth',
					aspectRatio : 1.5,
					views : {
						resourceTimelineTenDay : {
							type : 'resourceTimeline',
							duration : {
								days : 10
							}
						}
					},
					editable : true,
					resourceAreaHeaderContent : '환자',
					resources : [ {
						id : "hong",
						title : "홍길동"
					}, {
						id : "lee",
						title : "이재선"
					} ],
					events : [ {
						resourceId : "hong",
						title : "첫 번째 이벤트",
						start : "2023-11-01",
						end : "2023-11-07"
					}, {
						resourceId : "lee",
						title : "환자 예약",
						start : "2023-11-02T12:00:00+00:00",
						end : "2023-11-05T06:00:00+00:00"
					}, {
						resourceId : "hong",
						title : "event 5",
						start : "2023-11-02T10:00:00+00:00",
						end : "2023-11-02T15:00:00+00:00",
						extendedProps : {
							status : 'done'
						}
					}, {
						resourceId : "lee",
						title : "event 2",
						start : "2023-11-02T09:00:00+00:00",
						end : "2023-11-02T14:00:00+00:00",
						extendedProps : {
							status : 'done'
						}
					}],
					eventClick : function(info) {
						alert('Event: ' + info.event.title);
					},
					eventDidMount : function(info) {
						if (info.event.extendedProps.status === 'done') {
							info.el.style.backgroundColor = "#EEEEEE";

							// Change color of dot marker
							var dotEl = info.el
									.getElementsByClassName('fc-event-dot')[0];
							if (dotEl) {
								dotEl.style.backgroundColor = 'white';
							}
						}
					},
					locale: "ko"
				});
		calendar.render();
	});
</script>
</head>
<body>
	<div id='calendar'></div>
</body>
</html>

<style>
html, body {
	margin: 0;
	padding: 0;
	font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
	font-size: 20	px;
}

#calendar {
	max-width: 1100px;
	margin: 40px auto;
}
</style>