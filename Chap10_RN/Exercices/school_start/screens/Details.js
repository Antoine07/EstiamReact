import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';

import { SchoolContext } from '../store/SchoolProvider';

const DetailsScreen = ({ navigation }) => {

    const [state, dispatch ] = useContext(SchoolContext);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
  
        <Button title="Go back..." onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  export default DetailsScreen;