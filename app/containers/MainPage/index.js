import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet,StatusBar } from 'react-native';
import { Button, Container, Header, Item, Label, Input, Form, Content, Left, Right, CardItem, Card, Fab, Icon } from 'native-base'

export default class MyComponent extends React.Component {
  render() {
    return (
      <Container>
        
        <Appbar.Header
        dark
        
        >
        <Appbar.Content
          title="TOTP Authenticator"
        />
        
        <Appbar.Action icon="more-vert" onPress={this._onMore} />
      </Appbar.Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
