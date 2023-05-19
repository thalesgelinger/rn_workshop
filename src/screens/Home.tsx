import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {storeOLD} from '../redux/storeOLD';
import {incrementLevel} from '../redux/actions/player.actions';
import {getPlayerLevel} from '../redux/selectors';

function Home(): JSX.Element {
  const navigation = useNavigation();
  const navigateToEquipments = () => {
    navigation.navigate('Equipments');
  };
  const level = getPlayerLevel();

  const updateUser = () => {
    storeOLD.dispatch(incrementLevel(1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.label}>{`Player level: ${level}`}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={updateUser}>
            <Text style={styles.label}>Level up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToEquipments}>
            <Text style={styles.label}>Equipments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11081A',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  contentContainer: {
    padding: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  button: {
    borderWidth: 1,
    borderColor: '#2E2635',
    borderRadius: 5,
    padding: 20,
  },
  label: {
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Home);
