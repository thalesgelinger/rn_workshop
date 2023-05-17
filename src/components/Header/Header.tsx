import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
    Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface HeaderParams {
  title: string;
}

function Header({title}: HeaderParams): JSX.Element {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const handleClose = () => {
    Alert.alert('Close button called');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.label}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClose}>
        <Text style={styles.label}>{'x'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11081A',
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
  },
});

export default Header;
