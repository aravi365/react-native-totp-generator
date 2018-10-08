const { width, height } = Dimensions.get('screen')
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import React, { Component } from 'react'
import { AsyncStorage, DeviceEventEmitter, StyleSheet, Alert, ScrollView, View, PushNotificationIOS, Text, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, StatusBar, Modal, Animated, Platform} from 'react-native'
class TotpCard extends Component {
    render() {

        return (
        <Card
        delayLongPress={3800}
        onLongPress={()=>console.log('Hai')}
       style={{marginTop:20,backgroundColor:'#fff',height:height*0.15}}
        >
            <Card.Content>
                <Title>123456</Title>
            </Card.Content>
        </Card>
        );
    }
}

export default TotpCard;