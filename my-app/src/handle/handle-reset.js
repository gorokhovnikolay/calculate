export function handleReset({ setOperand1, setOperand2, setOperator, setIsResult }) {
	return () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
		setIsResult(false);
	};
}
