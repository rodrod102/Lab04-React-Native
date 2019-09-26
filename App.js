import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Weather from './Weather';
export default class App extends React.Component {
  render() {
    return (
        <Weather zipCode='83120' />
    );
  }
}
