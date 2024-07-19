function myScriptureChanger() {
  let scripture;
  let time;

  scripture = prompt(
    "Whats your favorite scripture that helps with your mental health crisis?"
  );
  time = prompt("what is your favorite time to pray?");
  myScriptureChangerHeader.innerHTML = `Hello according to you ${scripture} is your favorite bible verse and ${time} is your preferred time to pray!`;
  myScriptureChangerParagraph.innerHTML = `Thanks for answering!`;
}

myScriptureChangerButton.onclick = myScriptureChanger;

function myMentalHelperChanger() {
  let coping;
  let styles;

  coping = prompt("How often do you utilize mental health coping mechanisms");
  styles = prompt("What are some of your coping styles?");

  myMentalHelperChangerHeader.innerHTML = `Looks like you chose ${coping} this many times a day to help you manage mental stress`;
  myMentalHelperChangerParagraph.innerHTML = `Excellent! ${styles} is a great way to keep calm in stressful situations!`;
}

myMentalHelperChangerButton.onclick = myMentalHelperChanger;
