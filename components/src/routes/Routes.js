import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from '../bienvenida/Bienvenida';
import Mapa from '../mapa/VistaMapa';
import News from '../news/VistaNews';
import Login from '../login/Login';
import Log from '../login/Log';
import Registro from '../registro/Registro';
import Recupera from '../recuperar/Recuperar';
import Perfil from '../perfil/VistaPerfil';
import MapaV from '../visitante/mapa/VistaMapaV'
import Info from '../visitante/info/VistaInfo'


const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Bienvenida" header={null} component={Bienvenida}/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Log" header={null} component={Log} initial/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Mapa" header={null} component={Mapa} />
        <Scene key="News" header={null} component={News}  />
        <Scene key="Perfil" header={null} component={Perfil}  />
        <Scene key="Recupera" header={null} component={Recupera} />
        <Scene key="Info" header={null} component={Info} />
        <Scene key="MapaV" header={null} component={MapaV} />


      </Scene>
    </Router>
    </Root>
  );
}
export default Routes;
