function produceDrivingRange(range){
  return function(start, end){
    let distance = Math.abs(parseInt(end) - parseInt(start))
    let difference = range - distance 
    return range > distance ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range` 
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  let driverId = 0 
  return class {
    constructor(name){
      this.id = ++driverId 
      this.name = name 
    }
  }
}