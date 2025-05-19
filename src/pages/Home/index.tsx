import React from 'react';
import Layout from '@/components/Layout';
import { FlatList } from 'react-native';
import CardAI from '@/components/CardAI';
import useDownloads from '@/hooks/downloads/Consumer';

export default function HomePage() {
  const { models } = useDownloads();
  return (
    <Layout asView>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 50 }}
        data={Object.entries(models)}
        numColumns={2}
        renderItem={({ item }) => <CardAI title={item[0]} downloaded={item[1].downloaded} />}
      />
    </Layout>
  );
}
