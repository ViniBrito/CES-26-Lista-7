import { evaluate } from 'mathjs';
import { Alert } from 'react-native';

function calculator(state, action){
	if(state == undefined) return {expr: ''};
	var expr = state.expr;
	switch(action.type){
		case "n0":
			return { expr: expr+'0'};
		case "n1":
			return { expr: expr+'1'};
		case "n2":
			return { expr: expr+'2'};
		case "n3":
			return { expr: expr+'3'};
		case "n4":
			return { expr: expr+'4'};
		case "n5":
			return { expr: expr+'5'};
		case "n6":
			return { expr: expr+'6'};
		case "n7":
			return { expr: expr+'7'};
		case "n8":
			return { expr: expr+'8'};
		case "n9":
			return { expr: expr+'9'};
		case "sum":
			return { expr: expr+'+'};
		case "sub":
			return { expr: expr+'-'};
		case "mul":
			return { expr: expr+'*'};
		case "div":
			return { expr: expr+'/'};
		case "par1":
			return { expr: expr+'('};
		case "par2":
			return { expr: expr+')'};
		case "res":
			return { expr: evaluate(expr).toString()};
		case "del":
			return { expr: expr.slice(0, -1)};
		case "clr":
			return { expr: ''};
		default:
			return state;
	}
}

export default calculator;