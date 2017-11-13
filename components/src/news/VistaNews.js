import React, { Component } from 'react';
import {StyleSheet, StatusBar} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title } from 'native-base';
import News from './components/src/news/News';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.colorH}>
        <Body>
           <Title style={styles.texto}>Noticias</Title>
         </Body>
        </Header>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <News />
        <Footer >
          <FooterTab style={styles.colorH} >
            <Button vertical>
              <Icon name="apps" style={styles.texto} />
              <Text style={styles.texto}>News</Text>
            </Button>
            <Button vertical >
              <Icon name="camera" style={styles.texto} />
              <Text style={styles.texto}>QR</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" style={styles.texto} />
              <Text style={styles.texto}>Map</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={styles.texto} />
              <Text style={styles.texto}>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    color:'black'
  },
  colorH:{

    backgroundColor:'#DCFFD8'

  },

});