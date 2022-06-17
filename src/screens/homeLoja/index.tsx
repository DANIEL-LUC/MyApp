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
import Vector from '../../assets/HomeLoja/Vector.png';
import sacola from '../../assets/HomeLoja/sacola.png';
import tamplatePromocao from '../../assets/HomeLoja/tamplatePromocao.png';
import { ButtonWhite } from '../../components/ButtonWhite';
import { BackgroundWhite } from '../../components/BackgroundWhite';
import { Background } from '../../components/Background';


export  function HomeLoja() {
  return (
  <BackgroundWhite>
    <View style={styles.container}>    
      <Text style={styles.title}>Home</Text>

      <View style={styles.content}>
        <Image source={sacola}/>
      </View>

    </View>

    <View style={styles.content_2}>
      <Image source={tamplatePromocao}/>
    </View>
  </BackgroundWhite>
  );
}