import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#1976D2'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  iconRight: {
    paddingEnd: 20,
  },
  iconLeft: {
    paddingStart: 20,
  },
  input: {
    height: 40,
    width: Dimensions.get('screen').width-130,
    borderColor: '#808080',
    borderBottomWidth: 1,
    color:'white',
    fontSize: 18
  },
  item:{
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
})