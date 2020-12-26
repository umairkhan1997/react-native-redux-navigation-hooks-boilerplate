import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Inputs from '../components/inputs'

const Contact = (props) => {

  const [inpVal, setInpVal] = useState('');

    const onChangeValueHandler = (e, stat) => {
      console.log(e.nativeEvent.text);
setInpVal(e.nativeEvent.text)
    };
    return (
    
    <View>
    <Inputs     value={inpVal} onChangeValue={(e) =>
                    onChangeValueHandler(e, "setInpVal")
                  }/>
    </View>
    
  );
};

const styles = StyleSheet.create({
 
});

export default Contact;
