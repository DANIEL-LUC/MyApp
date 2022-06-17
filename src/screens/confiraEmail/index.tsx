import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/Ilustration.png";
import EmailConfirmado from "../../assets/Email_Confirmado.png";


import logoSmall from "../../assets/LogoSmall.png";
import logoAppSmall from "../../assets/app-name-small.png";
import { ButtonWhite } from "../../components/ButtonWhite";
import { Button } from "../../components/Button";
import { BackgroundWhite } from "../../components/BackgroundWhite";
import { Background } from "../../components/Background";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function ConfiraEmail() {
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
          source={EmailConfirmado}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Confira seu e-mail 
          </Text>

          <Text style={styles.subtitle2}>
            Enviamos as instruções em sei e-mail{"\n"}
          </Text>

          <Button title="Continuar" onPress={handleNavigate} />
        </View>
        


      </View>
    </BackgroundWhite>
  );
}
