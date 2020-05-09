// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
	let distanceBlocks 
	distanceBlocks = Math.abs(someValue-42)
	return distanceBlocks
}

function distanceFromHqInFeet(someValue) {
	let distanceBlocks = distanceFromHqInBlocks(someValue)
	let distanceFeet 
	distanceFeet = distanceBlocks * 264 
	return distanceFeet

}

function distanceTravelledInFeet(begin, destination) {
	let blocks = Math.abs(destination - begin)
	let distanceFeet = blocks * 264 
	return distanceFeet

}

function calculatesFarePrice(begin, destination) {
	let distance = distanceTravelledInFeet(begin, destination)
	let fare
	if (distance <= 400) {
		fare = 0
	} else if (distance > 400 && distance <= 2000) {
		fare = (distance - 400) * 0.02
	} else if (distance <= 2500) {
		fare = 25
	} else {
		return 'cannot travel that far'
	}
	return fare 

}