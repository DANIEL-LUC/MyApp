import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Start } from '../screens/start';
import { SignIn } from '../screens/signin';
import { EsqueceuSenha } from '../screens/esqueceuSenha';
import { ConfiraEmail } from '../screens/confiraEmail';
import { NovaConta } from '../screens/NovaConta';
import { CadDadosPessoais } from '../screens/cadDadosPessoais';
import { CadEndereco } from '../screens/cadEndereco';
import { CadFotoPerfil } from '../screens/cadFotoPerfil';
import { PerfilCriado } from '../screens/perfilCriado';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha}/>
      <Stack.Screen name="ConfiraEmail" component={ConfiraEmail} />
      <Stack.Screen name="NovaConta" component={NovaConta} />
      <Stack.Screen name="CadDadosPessoais" component={CadDadosPessoais} />
      <Stack.Screen name="CadEndereco" component={CadEndereco} />
      <Stack.Screen name="CadFotoPerfil" component={CadFotoPerfil} />
      <Stack.Screen name="PerfilCriado" component={PerfilCriado} />
      
      
      
      
    </Stack.Navigator>
  );
}