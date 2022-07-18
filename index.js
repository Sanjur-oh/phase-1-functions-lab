// Code your solution in this file!
const scubersLocation = 42;
const block = 264;


function distanceFromHqInBlocks(pickupLocation) {
    if(pickupLocation > scubersLocation) {
        return pickupLocation - scubersLocation;
    } else {
        return scubersLocation - pickupLocation;
    }
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * block;
}

function distanceTravelledInFeet(a, b) {
    if (b > a) {
        return (b-a)*264;
    }else if (a > b) {
        return(a-b)*264;
    }
    
}

function calculatesFarePrice(start, destination) {
    let n = distanceTravelledInFeet(start, destination);

    if (n <= 400) {
        return 0;
    } else if (n <= 2000) {
        return (n-400) * 0.02;
    } else if (n <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
// calculatesFarePrice(34,32) 
// calculatesFarePrice(50,58)
// calculatesFarePrice(34,24) 