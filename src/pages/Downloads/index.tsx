import React from 'react';
import Layout from '@/components/Layout';
import DownloadCard from '@/components/DownloadCard';
import { LLM } from '@/interfaces/Downloads';
import useDownloads from '@/hooks/downloads/Consumer';

export default function DownloadsPage() {
  const { models, deleteModel, downloadModel } = useDownloads();
  return (
    <Layout>
      {Object.entries(models).map(([area, model]: [string, LLM], idx: number) => (
        <DownloadCard key={idx} area={area} model={model} onDownload={downloadModel} onDelete={deleteModel} />
      ))}
    </Layout>
  );
}
