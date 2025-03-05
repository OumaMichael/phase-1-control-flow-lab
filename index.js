/*
scuberGreetingForFeet(distance)

When called with a distance of 199, it should return:
"This one is on me!"
Additional tests will check for other distance ranges.
A common specification (from similar labs) is:
If distance ≤ 400: return "This one is on me!"
If distance > 400 and ≤ 2000: return "That will be twenty bucks."
If distance > 2000 and ≤ 2500: return "I will gladly take your thirty bucks."
If distance > 2500: return "No can do."
ternaryCheckCity(city)

Use a ternary operator to return a response based on the city.
If the city is "NYC", return "Ok, sounds good."
Otherwise, return "No go."
switchOnCharmFromTip(tip)

Use a switch statement to return a response based on the tip.
If tip is "generous", return "Thank you so much."
If tip is "not as generous", return "Thank you."
For any other tip value, return "Bye."
*/
function scuberGreetingForFeet(distance){
if (distance <= 400){
  return "This one is on me!";
} else if (distance > 400 && distance <= 2000){
  return "That will be twenty bucks.";
} else if (distance > 2000 && distance <= 2500){
  return "I will gladly take your thirty bucks.";
}
else {  return "No can do.";
  }
};   

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";   
};

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  } 
};

module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharm
};