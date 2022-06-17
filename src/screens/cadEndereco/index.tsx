import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';

import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function CadEndereco() {
 
  const navigation = useNavigation<any>();
  
  const handleNavigate = () => {

    navigation.navigate('CadDadosPessoais');
    // navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image
        source={logoSmall}
        style={styles.imageLogo}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
         Para começar, insira seu endereço {'\n'}
        </Text>

        <TextInput style={styles.input} placeholder=
        "Insira seu e-mail"
          //keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>

        <Text style={styles.label}>
          CEP * 
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu e-mail"
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>
        
        <Text style={styles.label}>
          Endereço * 
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu nome de usuário"
         // keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>

        <Text style={styles.label}>
          Número * 
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu nome de usuário"
         // keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>

        <Text style={styles.label}>
          Complemento  
        </Text>
        <TextInput style={styles.input} placeholder="Insira sua senha novamente"
         // keyboardType='email-address'
          placeholderTextColor={theme.colors.secondary100}
          maxLength={20}>
        </TextInput>

        <View style={styles.content}>

          <Button title="Continuar" onPress={handleNavigate} />
          
        </View>

       
      </View>
    </View>

  );
}