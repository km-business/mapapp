import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Link} from 'react-router-native';
import {data} from './Productindex';

const deviceWidth = Dimensions.get('window').width;

const ListView = () => {
  const imgList = data.map(item => (
    <TouchableOpacity style={styles.row} key={item.id} activeOpacity={0.75}>
      <Link to={`/detail/${item.id}`}>
      <View style={styles.elem}>
        <Image
            key={item.id}
            source={item.imgSrc}
            resizeMode="cover"
            style={styles.image}
        />
        <Text style={styles.namestyle}>{item.name}</Text>
      </View>
      </Link>
    </TouchableOpacity>
  ));

  return <View style={styles.container}>{imgList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  row: {
    backgroundColor: 'white',
    height: 70,
    marginBottom: 2,
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 20,

  },
  namestyle: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default ListView;