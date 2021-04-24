import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';

const Update = ({navigation, route}) => {
  const {id, name, hinh, price} = route.params;
  const [names, setName] = useState(name);
  const [hinhs, setHinh] = useState(hinh);
  const [prices, setPrice] = useState(price);
  const update = (id, name, hinh, price) => {
    database()
      .ref('/SanPham/' + id)
      .update({
        name: name,
        hinh: hinh,
        price: price,
      })
      .then(() => navigation.navigate('Home'))
      .catch(() => console.log('Thất bại'));
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Chỉnh sửa dữ liệu
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Tên sản phẩm..."
          placeholderTextColor="#fafafa"
          value={names}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Hinh ảnh..."
          placeholderTextColor="#fafafa"
          value={hinhs}
          onChangeText={(text) => setHinh(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Giá..."
          placeholderTextColor="#fafafa"
          value={prices}
          onChangeText={(text) => setPrice(text)}
        />
      </View>

      <TouchableOpacity
        onPress={() => update(id, names, prices)}
        style={styles.btnClick}>
        <Text>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '75%',
    backgroundColor: 'black',
    borderRadius: 25,
    height: 10,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  btnClick: {
    width: '20%',
    backgroundColor: '#dadb9a',
    borderRadius: 25,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
