import React from 'react';
import { StyleSheet, View } from 'react-native';
import MenuTop from "./src/components/menuCompos/menuTop";
import MenuLeft from "./src/components/menuCompos/menuLeft";
import OtherThing from "./src/components/menuCompos/otherThing";
import Input from "./src/components/editCompos/input";
import Frame596 from "./src/components/editCompos/frame596";
import Tool from "./src/components/editCompos/tool";
import SmallEditor from "./src/components/editCompos/smallEditor";
import BigEditor from "./src/components/editCompos/bigEditor";
import DesignList from "./src/components/listCompos/projectList";
import PromptInput from './src/components/aiInput/PromptInput';
import Vector from './src/components/AutoLayoutHorizontal/Vector';
import DottedSquare from './src/components/AutoLayoutHorizontal/DottedSquare';
import RoundedDashedSquare from './src/components/AutoLayoutHorizontal/RoundedDashedSquare';
import SquareWithCircles from './src/components/AutoLayoutHorizontal/SquareWithCircles';
import ImageCarousel from './src/components/aiInput/ImageCarousel';
import Model from './src/components/aiTool/Model'
import AiImage from './src/components/aiTool/aiImage'; 

export default function App() {
  return (
    <View style={styles.container}>
      <AiImage  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
