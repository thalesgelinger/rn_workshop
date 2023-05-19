import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {storeOLD} from '../redux/storeOLD';
import {getEquipments} from '../redux/actions/player.actions';
import {connect} from 'react-redux';

type FilterTypes = 'all' | 'defense' | 'attack' | '';

type Equipment = {
  id: string;
  value: number;
  name: string;
  affected_amount: number;
  affected_attribute: 'atk' | 'def';
};

function Equipments(): JSX.Element {
  const [filter, setFilter] = useState<FilterTypes>('all');
  const {app, player} = storeOLD.getState();
  const {equipments} = player;
  const {loading, error} = app;

  const updateFilter = (newFilter: FilterTypes) => () => {
    setFilter(newFilter);
  };

  useEffect(() => {
    storeOLD.dispatch(getEquipments());
  }, []);

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
        {!loading && filter !== '' && <EquipmentList equipments={equipments} />}
        {error && <Text style={styles.label}>{error}</Text>}
      </View>
    </SafeAreaView>
  );
}

type EquipmentsProps = {
  equipments: Equipment[];
};

const EquipmentList = ({equipments}: EquipmentsProps) => {
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

const mapStateToProps = (state) => ({
  player: state.player,
  app: state.app,
});

export default connect(mapStateToProps, {getEquipments})(Equipments);
