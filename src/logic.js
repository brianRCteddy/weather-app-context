const now = '2020-01-03 12:00:00';

//const transformedDate = date.split('-')

const toJSDate = (dT) => {
	const dateTime = dT.split(' ');
	const date = dateTime[0].split('-');

	const year = date[0];
	const month = date[1];
	const day = Number(date[2]) + 1;
	let newDay = '' + day.toString();

	if (newDay.length < 2) {
		newDay = '0' + newDay;
	}

	const transformedDate = [ year, month, newDay ].join('-');

	return transformedDate;
};

toJSDate(now);

//--------------------------------------------------------------------

const now = '2020-01-03 12:00:00';

//const transformedDate = date.split('-')

const toJSDate = (dateTime) => {
	const transformedDate = '';
	var dateTime = dateTime.split(' ');

	var date = dateTime[0].split('-').map(Number);
	date[2] += 1;

	var time = dateTime[1].split(':');

	return new Date(date[0], date[1], date[2], time[0], time[1], time[2], 0);
};

const now = '2020-01-03 12:00:00';

const dateTime = now.split(' ');
const date = dateTime[0].split('-');
const time = dateTime[1];
const year = date[0];
const month = date[1];
const day = Number(date[2]) + 1;
let newDay = '' + day.toString();

if (newDay.length < 2) {
	newDay = '0' + newDay;
}

const transformedDate = [ year, month, newDay ].join('-');

//const transformedDateTime = [ transformedDate, time ].join(' ');
