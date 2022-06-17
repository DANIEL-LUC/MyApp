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
import { BackgroundWhite } from '../../components/BackgroundWhite';


export  function HomeLoja() {
  return (
  <BackgroundWhite>
    <View style={styles.container}>    
    <Text style={styles.title}>Home</Text>
     
    </View>
  </BackgroundWhite>
  );
}