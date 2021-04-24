import React ,{useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import database from '@react-native-firebase/database';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const del = async (id) => {
  await database()
  .ref('/SanPham/' + id).remove();

}
const Item = ({ navigation, item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.title}>{item.hinh}</Text>
    <Text style={styles.title}>{item.price}</Text>

    <Button
      title="Update"
      onPress={() => navigation.navigate('Update',{
        id: item.id,
        name: item.name,
        hinh: item.hinh,
        price: item.price,
      })}    
      />
      <Button
        title="Delete"
        onPress={() => del (item.id)}
      />
  </View>
);

const Home = ({navigation}) => {

  const [data, setData] = useState([]);
  const Load = () => {
    database()
    .ref('/SanPham/')
    .on('value', snapshot => {
      if(snapshot.val() != null){
        setData(Object.values(snapshot.val()))
      }else{
        setData(null);
      }
    });

  } 
  useEffect(() => {
    Load();
  },[]
  );
  const renderItem = ({ item }) => (
    <Item item={item} 
      navigation = {navigation}
    />
   
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;