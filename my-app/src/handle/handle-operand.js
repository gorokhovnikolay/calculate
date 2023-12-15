export function handleOperand({ setOperator, setIsResult }) {
	return (e) => {
		const { value } = e.target;
		setOperator(value);
		setIsResult(false);
	};
}
