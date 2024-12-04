import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BurgerMenu, Plus, Dropdown} from '../../../Icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text style={styles.username}>username</Text>
        <Dropdown />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          marginRight: 15,
        }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
});
