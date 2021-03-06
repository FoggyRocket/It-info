import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Video from 'react-native-video';
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import video from '../../assets/video/videotec.mp4';

class Bienvenida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: '',
    };
  }

repetir=()=>{
  this.setState({
    repeat:true
  })
}

componentWillMount(){
  this.repetir()
}


  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
        {/*Aqui usamos el video de fondo*/}
        <Video
          source={video}
          rate={1.0}
          muted={true}
          resizeMode={"cover"}
          repeat={this.state.repeat}
          style={styles.video}/>
        {/*Aqui acaba el video*/}

        <View style={styles.content}>

          <Text style={styles.text}>"Esto sera una leyenda"</Text>
          <Button rounded block style={styles.buttonIngreso} onPress={() => Actions.Login()}>
            <Text style={styles.TextoBoton}>EMPECEMOS</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    marginTop: 200,
    color: 'white'
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    top: 5,
    backgroundColor:'#2980b9'
  },
  TextoBoton: {
    color: 'white',
    fontWeight: 'bold'
  },
});

export default Bienvenida;
