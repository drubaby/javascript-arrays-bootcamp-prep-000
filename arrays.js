var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
  function addElementToBeginningOfArray(theArray, newElement){
    var theArray = [newElement ,...theArray];
    return theArray
  }
  
  function destructivelyAddElementToBeginningOfArray(theArray, newElement){
    theArray.unshift(newElement)
    return theArray
  }
  
function addElementToEndOfArray(theArray, newElement){
  var theArray = [...theArray, newElement];
  return theArray
}

function destructivelyAddElementToEndOfArray(theArray, newElement){
  theArray.push(newElement)
  return theArray
}