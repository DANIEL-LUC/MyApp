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
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ButtonWhite2 } from '../../components/ButtonWhite2';
import ImagemPerfil from "../../assets/ImagemPerfil.png";
import { BackgroundWhite } from "../../components/BackgroundWhite";
import logoAppSmall from "../../assets/app-name-small.png";
import EmailConfirmado from "../../assets/Email_Confirmado.png";


export function CadFotoPerfil() {
 
  const navigation = useNavigation<any>();
  
  const handleNavigate = () => {

    navigation.navigate('PerfilCriado');
    // navigation.goBack();
  }

  return (
    <BackgroundWhite>
      <View style={styles.container}>

        
        <Image
          source={logoAppSmall}
          style={styles.imageLogo}
          resizeMode="stretch"
        />
        
        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Para finalizar, insira uma foto de perfil
          </Text>
        </View>

        <Image
          source={ImagemPerfil}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content_2}>
          <Button title="Pular esta etapa" onPress={handleNavigate} />
        </View>

        <View style={styles.content_2}>
          <Button title="Continuar" onPress={handleNavigate} />
        </View>


      </View>
    </BackgroundWhite>
  );
}