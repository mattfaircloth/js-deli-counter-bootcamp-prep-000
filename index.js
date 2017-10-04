var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  }


function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        return ("The line is currently: " + (i + 1) + ". " + katzDeliLine[i])
   }
  }
}
