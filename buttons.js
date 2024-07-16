function myScriptureChanger () {
   
    let scripture;
    let time;

    scripture = prompt("Whats your favorite scripture that helps with your mental health crisis?");
    time = prompt("what is your favorite timr to pray?");
myScriptureChangerHeader.innerHTML = (`Hello accordingto you ${scripture} is your favorite buble verse!`);
myScriptureChsngerParagraph.innerHTML = (`${time} is what you picked as your favorite prayer time keep it up!`);
}

myScriptureChangerButton.onclick = myScriptureChanger;
