// Importando pacotes necessários
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import calculator from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './Calculator';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { Text } from 'react-native-elements';

// Inicializando a calculadora
var store = createStore(calculator);

// Renderizando elementos/componentes da aplicação
export default function App(){
  return (
    <View style={styles.container}>
      <Text h4>Bem-vindo(a) à Calculadora Web!</Text>
      <Text>{"\n"}Agora disponível para celular.{"\n"}</Text>
      <Button
        onPress={() => Alert.alert('Feita por Vinícius Brito Bastos Antunes (COMP-22)')}
        title="Autoria"
      />
      <Text>{"\n"}</Text>
      <Provider store={store}>
        <Calculator />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

// CSS da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
