var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  }


// function currentLine(katzDeliLine) {
//   for (var i = 0; i < katzDeliLine.length; i++) {
//     if (katzDeliLine.length < 1) {
//       return "The line is currently empty."
//     } else {
//     return ("The line is currently: " + (i + 1) + ". " + katzDeliLine[i])
//   }
//  }
// }
