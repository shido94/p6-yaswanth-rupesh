// WEEK5:JS:Exercise5.1:Using Async/Await and Generators, create separate functions and achieve the same functionality.
// Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()

function doTask1() {
	return new Promise((resolve) => {
		console.log('task one fetched');
		resolve(1);
	});
}

function doTask2() {
	return new Promise((resolve) => {
		console.log('task two fetched');
		resolve(2);
	});
}

function doTask3() {
	return new Promise((resolve) => {
		console.log('task three fetched');
		resolve(3);
	});
}

async function* fetchUsers() {
	yield await doTask1();
	yield await doTask2();
	yield await doTask3();
}

let totalSum = 0;
(async () => {
	for await (let pro of fetchUsers()) {
		totalSum += pro;
	}

	console.log(totalSum);
})();
