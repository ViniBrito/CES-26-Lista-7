import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function mapState(state){
	return{
		expr: state.expr
	};
}

const CalcBut = ({onPress, title}) => (
	<TouchableOpacity onPress={onPress} style={styles.CalcBut}>
    	<Text style={{textAlign: 'center'}}>{title}</Text>
  	</TouchableOpacity>
)

var n0 = {type: "n0"},
	n1 = {type: "n1"},
	n2 = {type: "n2"},
	n3 = {type: "n3"},
	n4 = {type: "n4"},
	n5 = {type: "n5"},
	n6 = {type: "n6"},
	n7 = {type: "n7"},
	n8 = {type: "n8"},
	n9 = {type: "n9"},
	sum = {type: "sum"},
	sub = {type: "sub"},
	mul = {type: "mul"},
	div = {type: "div"},
	res = {type: "res"},
	par1 = {type: "par1"},
	par2 = {type: "par2"},
	del = {type: "del"},
	clr = {type: "clr"};

function mapDispatch(dispatch){
	return{
		num0: () => dispatch(n0),
		num1: () => dispatch(n1),
		num2: () => dispatch(n2),
		num3: () => dispatch(n3),
		num4: () => dispatch(n4),
		num5: () => dispatch(n5),
		num6: () => dispatch(n6),
		num7: () => dispatch(n7),
		num8: () => dispatch(n8),
		num9: () => dispatch(n9),
		sum: () => dispatch(sum),
		sub: () => dispatch(sub),
		mul: () => dispatch(mul),
		div: () => dispatch(div),
		p1: () => dispatch(par1),
		p2: () => dispatch(par2),
		res: () => dispatch(res),
		del: () => dispatch(del),
		clr: () => dispatch(clr),
	}
}

class Calculator extends Component{
	render(){
		return(
			<View style={styles.calculator}>
				<View style={styles.display}>
					<Text>{this.props.expr.slice(-21)}</Text>
				</View>
				<Text>{'\n'}</Text>
				<View style={{flexDirection: 'row'}}>
					<CalcBut
						title="1"
						onPress = {() => this.props.num1()}
					/>
					<CalcBut
						title="2"
						onPress = {() => this.props.num2()}
					/>
					<CalcBut
						title="3"
						onPress = {() => this.props.num3()}
					/>
					<CalcBut
						title="+"
						onPress = {() => this.props.sum()}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<CalcBut
						title="4"
						onPress = {() => this.props.num4()}
					/>
					<CalcBut
						title="5"
						onPress = {() => this.props.num5()}
					/>
					<CalcBut
						title="6"
						onPress = {() => this.props.num6()}
					/>
					<CalcBut
						title="-"
						onPress = {() => this.props.sub()}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<CalcBut
						title="7"
						onPress = {() => this.props.num7()}
					/>
					<CalcBut
						title="8"
						onPress = {() => this.props.num8()}
					/>
					<CalcBut
						title="9"
						onPress = {() => this.props.num9()}
					/>
					<CalcBut
						title="*"
						onPress = {() => this.props.mul()}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<CalcBut
						title="0"
						onPress = {() => this.props.num0()}
					/>
					<CalcBut
						title="("
						onPress = {() => this.props.p1()}
					/>
					<CalcBut
						title=")"
						onPress = {() => this.props.p2()}
					/>
					<CalcBut
						title="/"
						onPress = {() => this.props.div()}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<CalcBut
						title="="
						onPress = {() => this.props.res()}
					/>
					<CalcBut
						charset="utf-8"
						onPress = {() => this.props.del()}
						title="⏎"
					/>
					<View style = {{width: '49.2%'}}>
						<CalcBut
							title="Limpar"
							onPress = {() => this.props.clr()}
						/>
					</View>
				</View>
			</View>
		);
	}
}

var connected = connect(
	mapState,
	mapDispatch,
)(Calculator);

export default connected;

const styles = StyleSheet.create({
  calculator: {
    width: '58%',
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 7,
  },
  display: {
    width: '95%',
    minHeight: 18,
    backgroundColor: '#85c1e9',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 2,
  },
  CalcBut: {
  	minWidth: '24.5%',
  	backgroundColor: '#99a3a4',
  	borderColor: 'grey',
  	borderWidth: 1,
  	borderRadius: 2,
  },
});