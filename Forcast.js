import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
            <View  >
                <View style={stylefore.tegf}>
                    <Text style={stylefore.fontcolr}>{this.props.main}</Text>
                    <Text style={stylefore.fontcolr}>{this.props.description}</Text>
                </View>
                <View style={stylefore.tegf2}>
                    <Text style={stylefore.fontcolr}>{this.props.temp}</Text>
                    <Text style={stylefore.fontcolr}>°C</Text>
                </View>

            </View>
        );
    }
}
const stylefore = StyleSheet.create({
    tegf: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        color:'#fff',
        margin:20,

    },
    tegf2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        color:'#fff',
        margin:20,
    },
    fontcolr:{
        color:'#fff'
    }
})