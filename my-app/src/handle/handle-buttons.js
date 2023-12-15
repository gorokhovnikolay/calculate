export function handleButtons({
	operator,
	operand1,
	operand2,
	setOperand1,
	setOperand2,
	setIsResult,
}) {
	return (e) => {
		const { value } = e.target;
		if (operator === '') {
			if (operand1 === '0') {
				setOperand1(value);
			} else {
				setOperand1(operand1 + value);
			}
		} else {
			setOperand2(operand2 + value);
		}
		setIsResult(false);
	};
}
