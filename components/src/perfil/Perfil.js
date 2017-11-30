import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Form, Label, List, ListItem, Container, Content, Text, Item, Input, Icon, Left} from 'native-base';
import fondo from '../../assets/img/fondo1.jpeg';


class Perfil extends Component {


  render() {
    return (


        <View>
          <View style={styles.view}>
            <Image style={styles.img}
            source={fondo}/>
          </View>

          <List>
            <ListItem itemDivider>
              <Text>Info</Text>
            </ListItem>

            <ListItem last style={styles.tamaño} >
            <Left>
             <Text>Nombre</Text>
           </Left>
              <Input style={styles.texto} disabled placeholder='Dylan Torres'/>
            </ListItem>

            <ListItem last style={styles.tamaño}>
             <Left>
                <Text>correo</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='dylan@prueba.com'/>
            </ListItem>

            <ListItem last style={styles.tamaño}>
             <Left>
                <Text>No control</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='14200197'/>
            </ListItem>

            <ListItem last style={styles.tamaño}>
             <Left>
                <Text>Carrera</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='Tics'/>
            </ListItem>
            <ListItem last style={styles.tamaño}>
             <Left>
                <Text>Semestre</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='10°'/>
            </ListItem>

          </List>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.6
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  texto:{
    textAlign:'right'
  },
  tamaño:{
    height:47,
  }
})

export default Perfil;
