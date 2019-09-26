import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Button } from 'react-native';
import Forecast from './Forcast'
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '', description: '', temp: 0,
            }
            
        }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    componentDidMount = () => this.fetchData()

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../wt-app/bg.jpeg')} style={styles.backdrop} >
                    <View style={styles.backclor}>
                        <Text style={styles.teg}>ZipCode is {this.props.zipCode}</Text>
                        <Forecast {...this.state.forecast} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",

    },
    backdrop: {
        width: '100%',
        height: '100%',
    },
    teg: {
        marginTop: 30,
        textAlign: 'center',
        color: '#fff'
    },
    backclor: {
        height: '40%',
        backgroundColor: '#929191',
        opacity: 0.2
    },
    btn:{
        borderBottomColor:'#5a595f'
    }
});

