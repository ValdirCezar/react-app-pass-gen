import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'aAbBcCdDeEfFgGhHiIjJkKlLmMoNpOqPrQsRtSuTvwxyz123456789/;.,´~][+_)(&¨%$#%¨&*()*-+';

export default function App () {

  const [password, setPassword] = useState('');
  const [size, setSize] = useState(13);

  function gerarPass () {
    let pass = '';
    for (i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass)
  }

  function copyPass () {
    Clipboard.setString(password)
    alert('Senha copiada para área de tranferência')
  }

  return (
    <View style={styles.container}>
        source={require('./src/assets/img/logo.png')}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={5}
          maximumValue={21}
          minimumTrackTintColor="#FF251B"
          maximumTrackTintColor="#00FF31"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarPass}>
        <Text style={styles.texButton}>
          Gerar senha
        </Text>
      </TouchableOpacity>

      {password != '' && (
        <TouchableOpacity onLongPress={copyPass} style={styles.textPass}>
          <Text style={styles.texButton}>
            {password}
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 25
  },
  area: {
    height: 20,
    backgroundColor: '#FFF',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
    backgroundColor: '#FFA200',
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  textPass: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  texButton: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
