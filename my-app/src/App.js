import styles from './App.module.css';
import { useState } from 'react';

const btnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '=', 'C'];
const btnValues = btnArray.filter((type) => !isNaN(type));
const btnActions = btnArray.filter((type) => isNaN(type));

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const calculateValues = (e) => {
		const { value } = e.target;
		if (!isNaN(value) && operator === '') {
			setIsResult(false);
			setOperand1(operand1 + value);
		} else if (!isNaN(value) && operator !== '') {
			setIsResult(false);
			setOperand2(operand2 + value);
		} else {
			switch (value) {
				case '+':
					setOperator(value);
					setIsResult(false);
					break;
				case '-':
					setOperator(value);
					setIsResult(false);
					break;
				case 'C':
					setOperand1('');
					setOperand2('');
					setOperator('');
					setIsResult(false);
					break;
				case '=':
					if (operand2 !== '') {
						if (operator === '+') {
							setOperand1(Number(operand1) + Number(operand2));
							setOperand2('');
							setOperator('');
							setIsResult(true);
						} else {
							setOperand1(Number(operand1) - Number(operand2));
							setOperand2('');
							setOperator('');
							setIsResult(true);
						}
					}
					break;
				default:
					break;
			}
		}
	};

	const Button = ({ value }) => {
		return (
			<button
				onClick={calculateValues}
				className={!isNaN(value) ? styles.calcBtn : styles.actionBtn}
				value={value}
			>
				{value}
			</button>
		);
	};

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h2>Калькулятор</h2>
			</header>
			<div className={styles.calculate}>
				<div
					className={styles.display}
					style={isResult ? { backgroundColor: 'rgb(9 255 0)' } : {}}
				>
					<span className={isResult ? styles.isResult : ''}>
						{operand1 + operator + operand2}
					</span>
				</div>
				<div className={styles.buttons}>
					<div className={styles.buttonsValue}>
						{btnValues.map((value) => (
							<Button key={value} value={value} />
						))}
					</div>
					<div className={styles.buttonsAction}>
						{btnActions.map((value) => (
							<Button key={value} value={value} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
