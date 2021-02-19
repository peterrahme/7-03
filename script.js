// connects "Age check" button to "checking" function
document.getElementById('button').addEventListener('click', checking)
let userAge = 0

function checking () {
  // Get userAge and convert it to an integer
  userAge = document.getElementById('input').value
  userAge = parseInt(userAge)

  // Checking the user age rating for movies
  if (userAge >= 17) {
    document.getElementById('answer').innerHTML = 'You can watch an R rated movie alone'
  } else if (userAge >= 13) {
    document.getElementById('answer').innerHTML = 'You can see an PG-13 movie alone'
  } else if (userAge >= 5) {
    document.getElementById('answer').innerHTML = 'You can see a G rated movie alone'
  } else {
    document.getElementById('answer').innerHTML = 'Too young for movies'
  }
}
