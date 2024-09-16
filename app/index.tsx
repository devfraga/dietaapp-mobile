import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors'
import { Link } from 'expo-router'

export default function Index(){
  return(
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
      />

      <Text style={styles.title}>
        Dieta<Text style={{ color: colors.white }}>.AI</Text>
      </Text>

      <Text style={styles.text}>
        Sua dieta personalizada com inteligência artificial
      </Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.green
  },
  text:{
    fontSize: 16, 
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  button:{
    backgroundColor: colors.blue,
    width: '100%',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  buttonText:{
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})