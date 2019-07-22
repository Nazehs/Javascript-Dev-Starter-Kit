import '../style.css';

import numeral from 'numeral'
const value = numeral(1000).format('$0,0.00');
//debugger;//

console.log(`payment ${value} for the course!!`); //eslint-disable-line no-console