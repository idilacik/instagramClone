import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BurgerMenu, Dropdown, Plus} from '../../Icons';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import posts from '../../data/posts';
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
const renderProps = ({item}) => (
  <TouchableOpacity>
    <Image
      source={{uri: item.image}}
      style={{width: imageSize, height: imageSize, margin: 1}}
    />
  </TouchableOpacity>
);
export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileBio />
        <ProfileStory />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          data={posts}
          renderItem={renderProps}
          contentContainerStyle={styles.photoGrid}
          style={{marginTop: 15}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    // flex: 1,
  },
  photoGrid: {
    paddingHorizontal: 5,
  },
});
