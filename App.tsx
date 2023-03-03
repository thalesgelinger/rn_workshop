import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {useFetch} from './useFetch';

type FilterTypes = 'all' | 'defense' | 'attack' | '';

const URL =
  'https://dws-bug-hunters-k58ck9b2z-thalesgelinger.vercel.app/api/equipment';

type Equipment = {
  id: string;
  value: number;
  name: string;
  affected_amount: number;
  affected_attribute: 'atk' | 'def';
};

function App(): JSX.Element {
  const [filter, setFilter] = useState<FilterTypes>('all');
  const {data: equipments, loading, error} = useFetch<Equipment[]>(URL);

  const updateFilter = (newFilter: FilterTypes) => () => {
    setFilter(newFilter);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
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
          <TouchableOpacity style={styles.button} onPress={updateFilter('')}>
            <Text style={styles.label}>clear</Text>
          </TouchableOpacity>
        </View>

        {loading && <ActivityIndicator />}
        {!loading && filter !== '' && <Equipments equipments={equipments} />}
        {error && <Text style={styles.label}>{JSON.stringify(error)}</Text>}
      </View>
    </SafeAreaView>
  );
}

type EquipmentsProps = {
  equipments: Equipment[];
};

const Equipments = ({equipments}: EquipmentsProps) => {
  return (
    <View style={styles.content}>
      <FlatList
        data={equipments}
        renderItem={({item}) => <Text style={styles.label}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

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
