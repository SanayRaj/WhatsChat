import {FlatList, View} from 'dripsy';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {IconButton} from '../../Components';
import ReelItem from '../../Components/ReelItem';
import useFetchState from '../../Utils/hooks/useFetchState';
import {Supabase} from '../../Utils/supabase.config';

export type VideoProps = {
  title: string;
  discription: string;
  video_url: string;
  created_at: string;
  id: number;
  likes: number;
};

export default function ReelsScreen() {
  const [reels, setReels] = useState<VideoProps[]>();
  const [fetchState, dispatch] = useFetchState();

  useEffect(() => {
    const fetchReels = async () => {
      dispatch({type: 'FETCH_START'});
      let {data, error} = await Supabase.from('reels').select('*');
      if (error) {
        dispatch({type: 'FETCH_ERROR', payload: error.message});
        console.log('Error loading Reels: ' + error);
        return false;
      }
      setReels(data);
      dispatch({type: 'FETCH_SUCCESS'});
    };

    fetchReels();
  }, []);

  return (
    <View sx={{flex: 1, bg: '$black'}}>
      <StatusBar backgroundColor={'black'} />
      <View
        sx={{
          position: 'absolute',
          width: '100%',
          alignItems: 'flex-start',
          zIndex: 20,
        }}>
        <IconButton icon="camera" color={'white'} />
      </View>
      {!fetchState.loading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          pagingEnabled
          data={reels}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ReelItem {...item} />}
        />
      )}
    </View>
  );
}
