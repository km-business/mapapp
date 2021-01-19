import React from 'react';
import DetailView from './DetailView';
import ListView from './ListView';
import {StyleSheet, ScrollView} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';

const SearchScreen = () => {
  return (
    <NativeRouter>
      <ScrollView style={styles.container}>
        <Route path="/" exact component={ListView} />
        <Route path="/detail/:id" component={DetailView} />
      </ScrollView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default SearchScreen;