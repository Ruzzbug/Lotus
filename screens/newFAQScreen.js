import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title:'How do I connect to a different Lotus?',
    content:'Navigate to your account page and press “leave lotus”',
  },
  {
    title:'What does the colour on the main \npage mean?',
    content:'This is the colour of the day chosen by another family member',
  },
  {
    title:'How do I choose the colour of the day?',
    content:'When it is your turn to choose, the dropper icon will appear on the top left corner of all screens. Press the dropper icon to be taken to the choose colour page.',
  },
  {
    title:'When do I choose the colour of the day?',
    content:'You will be notified when it is your turn and the main page will also let you know',
  },
  {
    title:'What do the icons on the pick \ncolour page mean?',
    content:'These icons are used to increase the accessibility of the app and cater to those who are colourblind',
  },
  {
    title:'How does the streak system work?',
    content:'You receive daily streaks on days you consecutively use/check the app',
  },
  {
    title:'I chose the wrong colour. How do I \nchange it?',
    content:'The chosen colour cannot be changed',
  },
];


export default class NewFAQScreen extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText, isActive ? styles.activeText : styles.headerText}>{section.title} </Text>
        <Text style={{color:"#F0466F", fontSize: 16}}>▼</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text  style={{fontSize: 16, paddingLeft: 4}}animation={isActive ? 'fadeIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>FAQ</Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    // textAlign: 'center',
    // fontSize: 22,
    // fontWeight: '300',
    // marginBottom: 20,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",

  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1, 
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000000"
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#fff',

  },
  inactive: {
    backgroundColor: '#fff',
  },
  activeText:{
    color: "#F0466F", 
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
  }
});