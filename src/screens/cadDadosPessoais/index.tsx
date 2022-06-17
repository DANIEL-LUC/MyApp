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

export function CadDadosPessoais() {
 
  const navigation = useNavigation<any>();
  
  const handleNavigate = () => {

    navigation.navigate('NovaConta');
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
          Insira os dados da seus dados pessoas {'\n'}
        </Text>

        <Text style={styles.label}>
          Nome * 
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu e-mail"
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>
        
        <Text style={styles.label}>
          Sobrenome * 
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu nome de usuário"
         // keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>

        <Text style={styles.label}>
          Celular * 
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu nome de usuário"
         // keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}>
        </TextInput>

        <Text style={styles.label}>
          Telefone * 
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