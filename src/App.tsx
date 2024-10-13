import React, { useState } from 'react';
import { Upload, FileVideo, FileAudio, Subtitles, Download } from 'lucide-react';
import VideoUploader from './components/VideoUploader';
import TranscriptionStatus from './components/TranscriptionStatus';
import SubtitlePreview from './components/SubtitlePreview';

function App() {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'processing' | 'completed' | 'error'>('idle');
  const [transcription, setTranscription] = useState<string>('');

  const handleUpload = async (file: File) => {
    setUploadStatus('uploading');
    // Simulating upload and processing
    setTimeout(() => {
      setUploadStatus('processing');
      setTimeout(() => {
        setUploadStatus('completed');
        setTranscription('यह एक नमूना पाठ है जो हिंदी में प्रतिलेखित किया गया है।');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">HindSub</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <div className="flex justify-around mb-8">
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-indigo-500 mb-2" />
            <span className="text-sm">Upload</span>
          </div>
          <div className="flex flex-col items-center">
            <FileAudio className="w-12 h-12 text-indigo-500 mb-2" />
            <span className="text-sm">Extract Audio</span>
          </div>
          <div className="flex flex-col items-center">
            <Subtitles className="w-12 h-12 text-indigo-500 mb-2" />
            <span className="text-sm">Transcribe</span>
          </div>
          <div className="flex flex-col items-center">
            <Download className="w-12 h-12 text-indigo-500 mb-2" />
            <span className="text-sm">Download SRT</span>
          </div>
        </div>
        
        {uploadStatus === 'idle' && <VideoUploader onUpload={handleUpload} />}
        {(uploadStatus === 'uploading' || uploadStatus === 'processing') && (
          <TranscriptionStatus status={uploadStatus} />
        )}
        {uploadStatus === 'completed' && <SubtitlePreview transcription={transcription} />}
      </div>
    </div>
  );
}

export default App;