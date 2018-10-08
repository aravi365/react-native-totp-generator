import * as React from 'react';
import { Appbar, FAB } from 'react-native-paper';
import { Button, Container, Header, Item, Label, Input, Form, Content, Left, Right, CardItem, Card, Fab, Icon } from 'native-base'
import TotpCard from './TotpCard'
import { AsyncStorage, DeviceEventEmitter, StyleSheet, Alert, ScrollView, Platform,StatusBar} from 'react-native'
export default class MyComponent extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#f5f5f5' }}>
                <StatusBar 
                backgroundColor={'#2979FF'}
                />
                <Appbar.Header
                    dark
                    style={{backgroundColor:'#448AFF'}}
                >
                    <Appbar.Content
                        title="TOTP Authenticator"
                    />

                    <Appbar.Action icon="more-vert" onPress={this._onMore} />
                </Appbar.Header>
                <TotpCard />
                <TotpCard />
                <FAB
                    style={styles.fab}
                    small={false}
                    color={'#fff'}
                    icon="add"
                    onPress={() => console.log('Pressed')}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor:'red'
    },
  })