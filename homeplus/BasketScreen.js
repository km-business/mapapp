import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import styles from './styles';
import User from './User';

export default class BasketScreen extends Component{

  constructor(props) {
      super(props);
      this.state = {
        textMessage: '',
        messageList: [],
        name: User.name,
        cost: User.cost,
      };
  }
  UNSAFE_componentWillMount() {
      firebase
        .database()
        .ref('messages')
        .child(User.phone)
        .on('child_added', value => {
          this.setState(prevState => {
            return {
              messageList: [...prevState.messageList, value.val()],
            };
          });
        });
    };
    renderRow = ({item}) => {
        return (

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 60,
              alignSelf: 'flex-start',
              //backgroundColor: 'indianred',
              borderColor:'#eee',
              alignItems: 'center',
              marginBottom: 4,
            }}>
            <Text style={{color: 'black', padding: 7, fontSize: 16, borderWidth: 1.5, borderColor: 'red', width: '100%', textAlign: 'center',}}>
              {item.name}, {item.cost}원
            </Text>
          </View>

        );
      };





    render() {
    let {height, width} = Dimensions.get('window');
    let totalPrice = 0;
    this.state.messageList.forEach((item) => {
        totalPrice += item.cost;
    })

    return (

    <SafeAreaView style={backstyle.container}>
        <Text style={backstyle.headtext}> 반갑습니다! {User.phone}님! </Text>
        <FlatList
            style={{padding: 20, height: height * 0.8}}
            data={this.state.messageList}
            renderItem={this.renderRow}
            keyExtractor={(item, index) => index.toString()}
        />
        <Text style={backstyle.total}> 합계 = {totalPrice}원 </Text>

    </SafeAreaView>
  );
    }
}

const backstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
    },
    total: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    },
    headtext: {
        fontSize: 30,
    }
});