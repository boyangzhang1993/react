const [userInput, setUserInput] = useState({
	enteredTitle: '',
	enteredAmount: '',
	enteredDate: '',
});


setUserInput(
(prevState) => {

return {...prevState, 
				enteredTitel: event.target.value};

}
)
