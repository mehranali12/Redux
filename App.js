import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Getlist } from './src/Store/Actions/MyActions';


const App = (props) => {

  useEffect(() => {
    props.Getlist()
  },[])
  alert(props.Redux.DATA)
 
return (
    <View>
      <TouchableOpacity>
        <Text>Show Me !</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({ Redux }) => ({
  Redux
});

export default connect(mapStateToProps, {
  Getlist
})(App);

const styles = StyleSheet.create({
});


