// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  let distance
  if (someValue > 42) {
    distance = (someValue-42)
  } else {
    distance = (42 - someValue)
  }
  return distance
}

function distanceFromHqInFeet (someValue) {
  let distance = distanceFromHqInBlocks(someValue)
  return distance * 264
}

function distanceTravelledInFeet (start, end) {
  let distance
  if (start > end) {
    distance = (start - end) * 264
  } else {
    distance = (end - start) * 264
  }

  return distance
}

function calculatesFarePrice (start, end) {
  let fare
  if (distanceTravelledInFeet(start, end) < 400) {
    fare = 0
  } else if (distanceTravelledInFeet(start, end) < 2000 && distanceTravelledInFeet(start, end) > 400) {
    fare = (distanceTravelledInFeet(start, end) - 400) * .02
  } else if (distanceTravelledInFeet(start, end) < 2500 && distanceTravelledInFeet(start, end) > 2000) {
    fare = 25
  } else {
    fare = "cannot travel that far"
  }
  return fare

}
