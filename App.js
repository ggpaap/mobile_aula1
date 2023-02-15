import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4'];
  return (
    <View style={styles.container}>
      <Header />
        <View>
          FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    backgroundColor: '#aeced2',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
