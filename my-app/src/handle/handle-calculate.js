export function handleCalculate({
	operand1,
	operand2,
	operator,
	setOperand1,
	setIsResult,
	setOperand2,
	setOperator,
}) {
	return () => {
		switch (operator) {
			case '+':
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				break;
			case '-':
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				break;
			case '*':
				setOperand1(Number(operand1) * Number(operand2));
				setOperand2('');
				setOperator('');
				break;
			case '/':
				setOperand1(Number(operand1) / Number(operand2));
				setOperand2('');
				setOperator('');
				break;
			case '%':
				setOperand1(Number(operand1) % Number(operand2));
				setOperand2('');
				setOperator('');
				break;
			default:
				break;
		}
		setIsResult(true);
	};
}
