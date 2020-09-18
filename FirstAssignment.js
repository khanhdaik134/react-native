import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Constants from "expo-constants"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const data = {
  avatar: '',
  name: '',
  description: '',
  photos: 100,
  follower: 100,
  following: 100,
  images: [
    'https://images.unsplash.com/photo-1573084615714-fd555dcc785e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1595053863749-b953401e1b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1595053863958-f966040f6eed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1517171771326-cbc7f641008a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80'
  ]
}

const styles = {
  container: {
    height: '100%',
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 30,
  },
  navbar: {

  }
};
const CustomImage = (props) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    Image.getSize(props.source, (w, h) => {
      setHeight(h - 700);
    });
  }, []);
  return (
    <View style={{
      flexBasis: '50%',
      padding: 5
    }}>
      <Image source={{
        uri: props.source
      }} style={{
        borderRadius: 5,
        width: null,
        height: height,
      }} resizeMode="cover" />
    </View>
  )
};
const FirstAssignment = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <AntDesign name="arrowleft" size={24} color="#747FA6" />
          <Entypo name="dots-three-horizontal" size={24} color="#747FA6" />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 30,
          alignItems: 'center'
        }}>
          <View style={{
            flex: 1,
            paddingRight: 60
          }}>
            <Image source={{
              uri: 'https://images.unsplash.com/photo-1589195731142-604fe7f3e915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'
            }} style={{
              width: 120,
              height: 120,
              borderRadius: 100,
            }} />
          </View>
          <View style={{
            flex: 2,
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20
            }}>Khanh Nguyen</Text>
            <Text style={{
              color: '#c1c4d5',
              marginVertical: 15,
              fontSize: 17
            }}>
              Developer
            </Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}>
              <TouchableOpacity style={{
                backgroundColor: '#3b73ff',
                borderRadius: 20,
                paddingHorizontal: 30,
                paddingVertical: 2,
                marginRight: 10,
                justifyContent: 'center',
                display: 'flex'
              }}>
                <Text style={{
                  color: '#fff'
                }}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor: '#56d8ff',
                borderRadius: 20,
                paddingHorizontal: 15,
                paddingVertical: 2,
                justifyContent: 'center',
                display: 'flex'
              }}>
                <Feather name="send" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20
        }}>
          <View style={{
            alignItems: 'center',
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 19,
              marginBottom: 10
            }}>210</Text>
            <Text style={{ color: '#bbbed0' }}>Photos</Text>
          </View>
          <View style={{
            alignItems: 'center'
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 19,
              marginBottom: 10
            }}>15k</Text>
            <Text style={{ color: '#bbbed0' }}>Followers</Text>
          </View>
          <View style={{
            alignItems: 'center'
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 19,
              marginBottom: 10
            }}>605</Text>
            <Text style={{ color: '#bbbed0' }}>Following</Text>
          </View>
        </View>
        <View style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'auto',
        }}>
          {data.images.map((item, i) => {
            return (
              <CustomImage source={item} key={i + 1} />
            )
          })}
        </View>
      </View>
    </ScrollView>
  );
};
// Image.resolveAssetSource(item.imgSource).height
export default FirstAssignment;
