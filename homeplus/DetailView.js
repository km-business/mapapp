import React from 'react';
import {View,
        StyleSheet,
        Text,
        Button,
        Image,
        Dimensions,
        TouchableOpacity,
        Alert,
        } from 'react-native';
import {data} from './Productindex';
import firebase from 'firebase';
import User from './User';

const deviceWidth = Dimensions.get('window').width;

const DetailView = ({match, history}) => {

  uploadBasket = async () => {
    let updates = {};
    let message = {
      name: name,
      cost: cost,
      x: x,
      y: y,
    };
    updates[
       'messages/' + User.phone + '/' + id
    ] = message;

    firebase
      .database()
      .ref()
      .update(updates);
};

const goAlert = () =>{
    Alert.alert(
        "장바구니에 담으시겠습니까?",
        "",
        [
            {text: "네", onPress: uploadBasket,},
            {text: '아니요', onPress: handleBack,},
        ],
        { cancelable: true}

    )
 };



  const handleBack = () => {
    history.goBack();
  };
  const id = match.params.id;
  const detail = data[id - 1];
  const {name, manu, cost, viewcost, imgSrc, x, y} = detail;
  return (
    <>
      <View>

        <TouchableOpacity
            onPress={handleBack}
            style={styles.buttonstyle}
        >
            <Text style={styles.txt}>뒤로가기</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
        <Text style={styles.subheading}>{name}</Text>
        <Text style={styles.subheading}>{manu}</Text>
        <View style={styles.subheading}>
            <Text>가격: {viewcost}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
            onPress={goAlert}
            style={styles.buttonstyle}
        >
            <Text style={styles.txt}>장바구니담기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
  },
  img: {
    marginTop: 20,
    marginBottom: 20,
    height: (deviceWidth * 2) / 3,
    width: (deviceWidth * 2) / 3,
    borderRadius: 20,
  },
  buttonstyle: {
       flex: 1,
       marginLeft: 145,
       alignItems: 'center',
       justifyContent: 'center',
       width: 80,
       height: 60,
       backgroundColor: `#ff7f50`,
       borderRadius: 20,
  },
  txt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

  }
});
export default DetailView;