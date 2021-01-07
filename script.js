document.getElementById('btn').addEventListener('click', myFunction)
function myFunction () {
  let age = 15
  let guess = document.getElementById('box').value
  age = parseInt(age)
  guess = parseInt(guess)
  while(age > guess || age < guess) {
    if age = guess {
      alert("You got it right")
    } if else age > guess {
      alert('That number was to low')
    } if else age < guess {
      alert('that number was to high')
    } else {
      alert('Error. Make sure you guess a number. Ex: 1')
    }  
  } 
} 