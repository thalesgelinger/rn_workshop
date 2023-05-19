import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {getPlayerLevel} from '../redux/selectors';
import {connect} from 'react-redux';

function Arena(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Arena</Text>
        <Text style={styles.label}>Player Level {getPlayerLevel()}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11081A',
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Arena);
