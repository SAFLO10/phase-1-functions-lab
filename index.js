function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
}
function distanceFromHqInFeet(pickupLocation) {
    const hqLocation = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(start,destination){
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
return distanceInFeet;
}
function calculatesFarePrice(start, destination){
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;

    if (distanceInFeet > 2500)
    return "cannot travel that far"

    if (distanceInFeet <= 400) {
        return 0
    }
    else if (distanceInFeet <= 400) {
        return 0 
    }
    else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * .02;
    }
    else {
        return 25;
    }
}