import React, {useState, useEffect} from 'react';
import {View, Alert, Text} from 'react-native';
import InstaStory from 'react-native-insta-story';
import axios from 'axios';

const InstaStorys = () => {
  const [instaStory, setInstaStory] = useState([]);

  useEffect(() => {
    handlePress();
  }, []);

  const handlePress = async () => {
    try {
      const response = await axios.get('http://192.168.1.33:3030/api/stories', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 && response.data) {
        const formattedData = response.data.map(item => ({
          user_id: item.id,
          user_image: item.resim,
          user_name: item.paylasiciAdi,
          stories: [
            {
              story_id: item.id,
              story_image: item.resim,
              swipeText: item.aciklama,
              onPress: () => console.log(`Story ${item.id} viewed`),
            },
          ],
        }));

        console.log('Formatted Data:', formattedData);
        setInstaStory(formattedData);
      } else {
        console.error('Unexpected response data:', response.data);
      }
    } catch (error) {
      console.error('Haber verisi çekilirken bir hata oluştu', error);
      Alert.alert(
        'Hata',
        `Haber verisi çekilirken bir hata oluştu: ${error.message}`,
      );
    }
  };

  const data = [
    {
      user_id: 1,
      user_image: 'https://example.com/user1.jpg',
      user_name: 'User 1',
      stories: [
        {
          story_id: 1,
          story_image: 'https://example.com/story1.jpg',
          swipeText: 'Swipe up to see more',
          onPress: () => console.log('Story 1 viewed'),
        },
      ],
    },
    // Add more users and their stories
  ];

  return (
    <View
      style={{flex: 1, width: '95%', marginLeft: 'auto', marginRight: 'auto', marginTop:20}}>
      {instaStory.length > 0 ? (
        <InstaStory
          data={instaStory}
          duration={10}
          unPressedBorderColor="blue"
          pressedBorderColor="red"
          avatarSize={70}
          showAvatarText={false}
        />
      ) : (
        <Text style={{color: '#000', textAlign: 'center'}}>
          Veri Bulunamadı
        </Text>
      )}
    </View>
  );
};

export default InstaStorys;
