import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQiDZtTj6DkdYAZqQ7Yst1zA6d8FDwm0ck-6kr6Go5tvxbPtjixZiNCUm0-ylG-~A3Oe8V6ZMzcX88C0z1l7pn1ebWZfnHv-rw284D6UieFkqhjJwJjzsVNos1Bpn61x3mQs1UUVCE2c0bIznZLD3rJ~uz39OBX0ZKI2Rc~fqON6Ne~ADhZWVq8caz-mqu~lJmeanM5JCPLD10jLOf9TXyePfiwcwAg8qyXRPScCphH4VSllA1npQLRMl1aHlv4R-xeNUk99pYy05sfbEdQG0Cjil7XdBIVngSU2AcqnEvNm0-xy4B7F95S-CyZaf1b~LFNI67Z47DbztVoRtk6rZg__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQiDZtTj6DkdYAZqQ7Yst1zA6d8FDwm0ck-6kr6Go5tvxbPtjixZiNCUm0-ylG-~A3Oe8V6ZMzcX88C0z1l7pn1ebWZfnHv-rw284D6UieFkqhjJwJjzsVNos1Bpn61x3mQs1UUVCE2c0bIznZLD3rJ~uz39OBX0ZKI2Rc~fqON6Ne~ADhZWVq8caz-mqu~lJmeanM5JCPLD10jLOf9TXyePfiwcwAg8qyXRPScCphH4VSllA1npQLRMl1aHlv4R-xeNUk99pYy05sfbEdQG0Cjil7XdBIVngSU2AcqnEvNm0-xy4B7F95S-CyZaf1b~LFNI67Z47DbztVoRtk6rZg__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQiDZtTj6DkdYAZqQ7Yst1zA6d8FDwm0ck-6kr6Go5tvxbPtjixZiNCUm0-ylG-~A3Oe8V6ZMzcX88C0z1l7pn1ebWZfnHv-rw284D6UieFkqhjJwJjzsVNos1Bpn61x3mQs1UUVCE2c0bIznZLD3rJ~uz39OBX0ZKI2Rc~fqON6Ne~ADhZWVq8caz-mqu~lJmeanM5JCPLD10jLOf9TXyePfiwcwAg8qyXRPScCphH4VSllA1npQLRMl1aHlv4R-xeNUk99pYy05sfbEdQG0Cjil7XdBIVngSU2AcqnEvNm0-xy4B7F95S-CyZaf1b~LFNI67Z47DbztVoRtk6rZg__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>

      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQiDZtTj6DkdYAZqQ7Yst1zA6d8FDwm0ck-6kr6Go5tvxbPtjixZiNCUm0-ylG-~A3Oe8V6ZMzcX88C0z1l7pn1ebWZfnHv-rw284D6UieFkqhjJwJjzsVNos1Bpn61x3mQs1UUVCE2c0bIznZLD3rJ~uz39OBX0ZKI2Rc~fqON6Ne~ADhZWVq8caz-mqu~lJmeanM5JCPLD10jLOf9TXyePfiwcwAg8qyXRPScCphH4VSllA1npQLRMl1aHlv4R-xeNUk99pYy05sfbEdQG0Cjil7XdBIVngSU2AcqnEvNm0-xy4B7F95S-CyZaf1b~LFNI67Z47DbztVoRtk6rZg__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
