function myScriptureChanger() {
  let scripture;
  let time;

  scripture = prompt(
    "Whats your favorite scripture that helps with your mental health crisis?"
  );
  time = prompt("what is your favorite time to pray?");
  myScriptureChangerHeader.innerHTML = `Hello according to you ${scripture} is your favorite buble verse!`;
  myScriptureChsngerParagraph.innerHTML = `${time} is what you picked as your favorite prayer time keep it up!`;
}

myScriptureChangerButton.onclick = myScriptureChanger;

function myMentalHelperChanger() {
  let coping;
  let syles;

  coping = prompt("How often do you utilize mental health coping mechanisms");
  styles = prompt("What are some of your coping styles?");

  myMentalHelperChangerButton.onClick = myMentalHelperChanger;

}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
