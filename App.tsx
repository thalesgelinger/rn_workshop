import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type FilterTypes = 'all' | 'defense' | 'attack';

function App(): JSX.Element {
  const [filter, setFilter] = useState<FilterTypes>('all');

  const updateFilter = (newFilter: FilterTypes) => () => {
    setFilter(newFilter);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Equipments</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={updateFilter('all')}>
            <Text style={styles.label}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={updateFilter('defense')}>
            <Text style={styles.label}>Defense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={updateFilter('attack')}>
            <Text style={styles.label}>Attack</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
          }}>
          <Text style={{color: 'white', fontSize: 40}}>{filter}</Text>
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
    height: 27,
    width: 86,
    borderWidth: 1,
    borderColor: '#2E2635',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    color: 'white',
  },
});

export default App;
