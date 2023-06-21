function writeCards(namesArray, eventName) {
 const messages = [];
for (let i = 0; i < namesArray.length; i++) {
    messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
}
return messages;

}

const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "birthday";
const result = writeCards(names, eventName);
console.log(result);

function countDown(num) {
for (let i = num; i >= 0; i--) {
    console.log(i);
}
}

