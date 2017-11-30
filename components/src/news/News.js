import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Noti1 from '../../assets/img/Info.jpg'
import Noti2 from '../../assets/img/info2.jpg'
export default class CardImageExample extends Component {
  render() {
    return (

      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>ENTREGA DE TARJETAS</Text>
                  <Text note>A todos los estudaintes</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Noti1} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
        </Card>
        <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Ven a Festejar con nosotros</Text>
                  <Text note>festeja la navidad</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Noti2} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
