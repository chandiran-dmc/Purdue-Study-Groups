import * as React from 'react';
import { Text, View, StyleSheet, NavigatorIOS
 } from 'react-native';
import { Constants } from 'expo';
import { withNavigation } from 'react-navigation';

// You can import from local files
import Title from './Title';
import Icon from './Icon';
import CardHolder from './CardHolder';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

class FindGroupScreen extends React.Component {
  render() {
    return (
      //<Text style={styles.niceTitle}>MyGroups Screen</Text>
      <View style={styles.container}>
        <Title title='Study Groups'/>
        <CardHolder/>
      </View>
    );
  }
}


export default withNavigation(FindGroupScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  niceTitle: {
    backgroundColor: 'skyblue',

    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',

    alignItems: 'center',
    alignSelf: 'stretch',
  },
});



