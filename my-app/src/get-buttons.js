import { handleButtons, handleOperand, handleReset, handleCalculate } from './handle';

export const getButtons = () => {
	return [
		{ id: '1', label: '1', group: 'left', handle: handleButtons },
		{ id: '2', label: '2', group: 'left', handle: handleButtons },
		{ id: '3', label: '3', group: 'left', handle: handleButtons },
		{ id: '4', label: '4', group: 'left', handle: handleButtons },
		{ id: '5', label: '5', group: 'left', handle: handleButtons },
		{ id: '6', label: '6', group: 'left', handle: handleButtons },
		{ id: '7', label: '7', group: 'left', handle: handleButtons },
		{ id: '8', label: '8', group: 'left', handle: handleButtons },
		{ id: '9', label: '9', group: 'left', handle: handleButtons },
		{ id: '0', label: '0', group: 'left', handle: handleButtons },
		{ id: 'C', label: 'C', group: 'right', handle: handleReset },
		{ id: '+', label: '+', group: 'right', handle: handleOperand },
		{ id: '-', label: '-', group: 'right', handle: handleOperand },
		{ id: '*', label: '*', group: 'right', handle: handleOperand },
		{ id: '/', label: '/', group: 'right', handle: handleOperand },
		{ id: '%', label: '%', group: 'right', handle: handleOperand },
		{ id: '=', label: '=', group: 'right', handle: handleCalculate },
	];
};
