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

const groupedUsers = (users, index) => {
	let { i, j } = 0;
	let tempArray = [];
	let finalArray = [];
	const chunk = 3;

	for (i = 0, j = users.length; i < j; i += chunk) {
		tempArray = users.slice(i, i + chunk);
		finalArray.push(tempArray);
	}
	return finalArray[index];
};

groupedUsers(users, 1);
