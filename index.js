var katzDeliLine = [];

function takeANumber(newArr, newPersonName) {
  newArr.push(newPersonName);
  for (var  x = 0; x <= newArr.length; x++) {
    if (newArr[x] === newPersonName) {
      var personNumber = x + 1;
      return "Welcome, " + newPersonName + ". You are number " + personNumber + " in line.";
    }

}
}

function nowServing(newArr) {
  if (newArr.length === 0) {
      return 'There is nobody waiting to be served!';
    }
  else {
    	var first = newArr.shift();
      	return "Currently serving " + first + ".";
    }
    newArr;
}

function currentLine(newArr) {
  if (newArr.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for(x = 0; x<= newArr.length; x++){
      var numb = x + 1;
      return 'The line is currently: '+ numb + newArr[x];
    }
  }
}

console.log(takeANumber(katzDeliLine,"ako"));
console.log(takeANumber(katzDeliLine,"me"));
console.log(takeANumber(katzDeliLine,"kier"));

console.log(currentLine(katzDeliLine));
