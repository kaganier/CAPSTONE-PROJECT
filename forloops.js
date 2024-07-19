function displayNumbers() {
    let output = ''; 
    for (let i = 1; i <= 5; i++) {
        output += i + '<br>'; 
    }
    document.getElementById('output').innerHTML = output; 
}