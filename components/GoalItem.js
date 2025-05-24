import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
  return (
      <View style={styles.listItems}>
        <Pressable android_ripple={{ color: 'dddddd' }} onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
          <Text style={styles.listText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}


export default GoalItem;

const styles = StyleSheet.create({
  listItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor:"#E5B71F",
  },
  listText: {
    color: "#1C244F",
    padding: 8
  },
  pressedItem: {
    opacity: 0.5
  }
});