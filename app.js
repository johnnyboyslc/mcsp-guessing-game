// Global variables

const players = {}
let name = prompt("Enter your name: ")

function guessingGame() {
	////////////// GUESSING GAME ////////////////

	let magicNum = Math.floor(Math.random() * 10) + 1

	// track number of guesses & history
	let count = 1
	let history = []

	//Input (number) from the user using prompt(), and name

	if (!name) name = "Random User"
	let guess = Number(prompt(`Hi, ${name} Guess a number between 1 - 10`))

	//validate input
	while (!Number.isInteger(guess)) {
		if (guess === null || guess === 0) return
		guess = Number(prompt("Oops, try again, please enter a whole number: "))
	}

	// Compare guess to magic number as long higher or lower

	while (Number(guess) !== magicNum) {
		if (guess === 0) return

		history.push(guess)
		if (guess < magicNum) {
			console.log(history.join(", "))
			guess = Number(prompt(`Sorry ${name}, Guess Higher: `))
		} else {
			guess = Number(prompt(`Sorry ${name}, Guess Lower: `))
		}
		count++
	}

	// record number of guesses for each unique name/player
	let didBetterMsg = ""

	if (!players[name]) {
		players[name] = history.length
	} else {
		if (players[name] > history.length) {
			console.log("You did bettttttter!!!!!")
			didBetterMsg = `You did better in your last game by ${
				players[name] - history.length
			} fewer tries!`
		}
	}
	console.log(players)
	// Alert user they won

	let msg1 = `You got it in ${count} ${
		count > 1 ? "guesses!" : "guess!"
	}. Your previous guesses were ${history.join(", ")}`
	let msg2 = ``

	console.log("Msg2: ", msg2)

	alert(`That's Correct ${name}! ${didBetterMsg ? didBetterMsg : msg1} `)

	//reset history for next game
	history = []

	// Play game again if user wants
	let playAgain = prompt(`Do you want to play again? 'Yes' or 'no'`)

	if (playAgain === "Yes" || playAgain === "yes") {
		guessingGame()
	}
}
guessingGame()
