import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles  } from './styles';
import IllustrationImg from '../../assets/Ilustration.png';
import logoSmall from '../../assets/LogoSmall.png';
import { ButtonWhite } from '../../components/ButtonWhite';
import { Background } from '../../components/Background';


export  function HomeLoja() {
  return (
    <Background>
       <View style={styles.container}>
        Home
       </View>
    
    </Background>
  );
}