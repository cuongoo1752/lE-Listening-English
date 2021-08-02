import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Slider,
} from "react-native";
import { Audio } from "expo-av";
import { Icon } from "react-native-material-ui";
import { audioUrl } from "./data/const";

export default class AudioPlay1 extends Component {
  state = {
    isPause: false,
    isRepeatOne: false,
  };

  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    });
    this.sound = new Audio.Sound();

    const status = {
      shouldPlay: true,
      progressUpdateIntervalMillis: 50,
    };
    // ../assets/audio/Test1.mp3
    //../assets/audio/Horses.mp3
    //../assets/audio/Tellmeabout.mp3
    //
    console.log(audioUrl[this.props.keyAudioUrl]);
    let string = audioUrl[0];
    this.sound
      .loadAsync(require("../assets/audio/Tellmeabout.mp3"), status, false)
      .then((data) => {
        console.log(data);
      });
    

    // var a;
    // setInterval(async () => {
    //     a = await this.sound.getStatusAsync();
    //     console.log(a);
    // }, 3000);

    this.sound.unloadAsync();
  }


  async playSound() {
    if (this.state.isPause) {
      await this.sound.playAsync();
      this.setState({ isPause: false });
    }
    else {
      await this.sound.pauseAsync();
      this.setState({ isPause: true });
    }
    
  }

  async replaySound() {
    await this.sound.replayAsync();
  }

  async replay10sSound() {
    await this.sound.getStatusAsync().then((data) => {
      let pos = data.positionMillis - 10000;
      if (pos < 0) {
        pos = 0;
      }
      this.sound.setStatusAsync({ positionMillis: pos });
    });
  }

  async next10sSound() {
    await this.sound.getStatusAsync().then((data) => {
      let pos = data.positionMillis + 10000;
      if (pos > data.playableDurationMillis) {
        pos = data.playableDurationMillis;
      }
      this.sound.setStatusAsync({ positionMillis: pos });
    });
  }

  async handleRepeatOne() {
    if (this.state.isRepeatOne) {
      this.setState({ isRepeatOne: false });
      this.sound.setIsLoopingAsync(false);
    }
    else {
      this.setState({ isRepeatOne: true });
      this.sound.setIsLoopingAsync(true);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.time}>
            <View style={styles.currentTime}>
              <Text style={styles.textTime}>00:00</Text>
            </View>
            <View style={styles.remainTime}>
              <Text style={styles.textTime}>01:11</Text>
            </View>
          </View> */}
        {/* <Slider
            style={styles.slider}
            maximumValue={100}
            minimumValue={0}
            disabled={false}
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
            thumbTintColor="blue"
            minimumTrackTintColor="black"
          /> */}
        <View style={styles.containIcon}>
          <TouchableOpacity onPress={this.replaySound.bind(this)}>
            <Icon style={styles.icon} name="replay" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.replay10sSound.bind(this)}>
            <Icon style={styles.icon} name="fast-rewind" size={36} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.playSound.bind(this)}>
            {this.state.isPause ? (
              <Icon Icon style={styles.icon} name="play-arrow" size={36} />
              
            ) : (
              <Icon style={styles.icon} name="pause" size={36} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next10sSound.bind(this)}>
            <Icon style={styles.icon} name="fast-forward" size={36} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleRepeatOne.bind(this)}>
            {this.state.isRepeatOne ? (<Icon style={styles.icon} name="repeat-one" size={32} />) : (<Icon style={styles.icon} name="repeat" size={32} />)}
            
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // Container
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 6,
  },

  // Time Audio
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal: 14,
    padding: 0,
    margin: 0,
  },
  currentTime: {
    padding: 0,
    margin: 0,
  },
  textTime: {
    fontWeight: "bold",
  },

  // Slider Audio
  slider: {
    paddingTop: 0,
    marginTop: 0,
    borderColor: "black",
    borderWidth: 1,
    paddingBottom: 16,
    height: 1,
  },
  track: {
    height: 1,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 1,
    borderRadius: 5,
    backgroundColor: "black",
  },

  // Icon
  containIcon: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    color: "black",
  },
});
