import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';



const GameOverScreen = props => {
    return <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageConatiner}>
            {/* <Image source={require('../assets/success.png')} */}
            <Image
                fadeDuration={1000}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg' }}



                style={styles.image}
                resizeMode='cover'
            />
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>Your phone needed
                <Text style={styles.highlight}> {props.roundsNumber}
                </Text> rounds to guess the number
                <Text style={styles.highlight}> {props.userNumber}
                </Text>
            </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>
            NEW GAME
        </MainButton>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageConatiner: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',

    },
    resultContainer: {
        width: '80%',
        marginHorizontal: 40
    },
    resultText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20
    }
});

export default GameOverScreen;