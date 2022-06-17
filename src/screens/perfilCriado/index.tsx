import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/Ilustration.png";
import Cadastro_Confirmado from "../../assets/Cadastro_Confirmado.png";


import logoSmall from "../../assets/LogoSmall.png";
import logoAppSmall from "../../assets/app-name-small.png";
import { ButtonWhite } from "../../components/ButtonWhite";
import { Button } from "../../components/Button";
import { BackgroundWhite } from "../../components/BackgroundWhite";
import { Background } from "../../components/Background";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function PerfilCriado() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('SignIn');
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
        
        <Image
          source={Cadastro_Confirmado}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.subtitle}>
          Seu perfil foi criado com sucesso! 
          </Text>

          <Text style={styles.subtitle2}>
            Realize o login com as credenciais inseridades
          </Text>

          <Button title="Entrar" onPress={handleNavigate} />
        </View>
        


      </View>
    </BackgroundWhite>
  );
}
