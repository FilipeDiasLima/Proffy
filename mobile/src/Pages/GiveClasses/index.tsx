import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackground from '../../assets/images/give-classes-background.png'

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={giveClassesBackground}
        style={styles.content}
      >

        <Text style={styles.title}>Quer ser {'\n'}um Proffy?</Text>

        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como um professor na plataforma web
        </Text>

      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>
          Tudo bem
          </Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses;