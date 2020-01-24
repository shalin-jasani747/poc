/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg';

const CreateVideo = () => RNFFmpeg.executeWithArguments(["-i", "/Users/shalin.jasani/Documents/AudioVideoMixinPOC/longVideo.mp4", "-i", "/Users/shalin.jasani/Documents/AudioVideoMixinPOC/audio.mp4", "-c", "copy", "-map", "0:v:0", "-map", "1:a:0", "/Users/shalin.jasani/Documents/AudioVideoMixinPOC/assets/simpleVideo.mp4"]).then(result => console.log("FFmpeg process exited with rc " + result.rc));

const CreateLoopVideo = () => RNFFmpeg.execute("-stream_loop 2 -i /Users/shalin.jasani/Documents/AudioVideoMixinPOC/video.mp4 -i /Users/shalin.jasani/Documents/AudioVideoMixinPOC/audio.mp4 -c copy -map 0:v:0 -map 1:a:0 /Users/shalin.jasani/Documents/AudioVideoMixinPOC/assets/loopVideo.mp4").then(result => console.log("FFmpeg process exited with rc " + result.rc));

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Button title="Create Video" onPress={() => CreateVideo()} />
      <Button title="Create Loop Video" onPress={() => CreateLoopVideo()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
