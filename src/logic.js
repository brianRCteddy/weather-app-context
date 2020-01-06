const now = '2020-01-03 12:00:00';

//const transformedDateTime = [ transformedDate, time ].join(' ');

const first = toJSDate(now, 1);
const second = toJSDate(now, 2);
const third = toJSDate(now, 3);
const fourth = toJSDate(now, 4);
const fifth = toJSDate(now, 5);

//

const addDays = (date, days) => {
	const copy = new Date(Number(date));

	copy.setDate(date.getDate() + days);

	return copy;
};
const now = new Date();
const newDate = addDays(now, 10);

const getDateOnly = (date) => {
	const dateTime = date.split(' ');
	const dateSplit = dateTime[0];
	return dateSplit;
};

toggleClickHandler = (index) => {
	const { fullData } = this.state;
	const hourly = fullData.filter((reading) => reading);
	let tempArray = [];
	const groupOfArray = [];
	let i = 0;
	let j = 0;
	const chunk = 8;

	for (i = 5, j = fullData.length; i < j; i += chunk) {
		tempArray = fullData.slice(i, i + chunk);
		groupOfArray.push(tempArray);
	}
	const finalArray = groupOfArray[index];

	this.setState({ showHourly: !this.state.showHourly, hourlyData: finalArray });
};

/////////////////////////////////

const dateNow = new Date();
const addDays = (date, days) => {
	const copy = new Date(Number(dateNow));
	copy.setDate(dateNow.getDate() + days);
	return copy;
};

const getDateOnly = (date) => {
	const dateTime = date.split(' ');
	const dateSplit = dateTime[0];
	return dateSplit;
};

const newDate = addDays(dateNow, 4);
const formatDate = moment(newDate).format('YYYY-MM-DD h:mm:ss');

const dateOnly = getDateOnly(formatDate);
console.log(dateOnly);
const hourlyData = data.list.filter((reading) => reading.dt_txt.includes(dateOnly));

toggleClickHandler = (index) => {
	const { fullData } = this.state;
	const dateNow = new Date();
	const addDays = (date, days) => {
		const copy = new Date(Number(dateNow));
		copy.setDate(dateNow.getDate() + days);
		return copy;
	};

	const getDateOnly = (date) => {
		const dateTime = date.split(' ');
		const dateSplit = dateTime[0];
		return dateSplit;
	};
	const newDate = addDays(dateNow, index + 1);
	const formatDate = moment(newDate).format('YYYY-MM-DD h:mm:ss');

	const dateOnly = getDateOnly(formatDate);

	const hourly = fullData.filter((reading) => reading.dt_txt.includes(dateOnly));

	this.setState({ showHourly: !this.state.showHourly, hourlyData: hourly });
};
