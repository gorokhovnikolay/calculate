import styles from './App.module.css';
import { useState } from 'react';
import { getButtons } from './get-buttons';

const buttons = getButtons();

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
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
						{buttons.map(({ id, label, group, handle }) =>
							group === 'left' ? (
								<button
									key={id}
									onClick={handle(state)}
									className={styles.calcBtn}
									value={label}
									label={label}
								>
									{label}
								</button>
							) : null,
						)}
					</div>
					<div className={styles.buttonsAction}>
						{buttons.map(({ id, label, group, handle }) =>
							group === 'right' ? (
								<button
									key={id}
									onClick={handle(state)}
									className={styles.actionBtn}
									value={label}
								>
									{label}
								</button>
							) : null,
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
