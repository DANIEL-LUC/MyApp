import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 30, 
    marginBottom:-100     
  },
  container_2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20
        
  },
  image: {
    width: '100%',
    height: 360,    
  },
  imageLogo: {
   marginTop:20,
   marginBottom:10 
  },
  content: {    
    marginTop: -40,    
    paddingHorizontal: 300
  },
  content_2: {  
    marginBottom:500,  
    marginTop: 10,    
    paddingHorizontal: 2
  },
  title: {
    justifyContent: 'center',
    color: theme.colors.black,
    textAlign: 'left',
    fontWeight:'bold',
    fontSize: 40,
    marginBottom: -20,   
    fontFamily: theme.fonts.title700,
    lineHeight: 125 
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
});