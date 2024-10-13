import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileVideo } from 'lucide-react';

interface VideoUploaderProps {
  onUpload: (file: File) => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.avi', '.mkv']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-500'
      }`}
    >
      <input {...getInputProps()} />
      <FileVideo className="mx-auto h-12 w-12 text-indigo-500 mb-4" />
      {isDragActive ? (
        <p className="text-indigo-500">Drop the video here ...</p>
      ) : (
        <p className="text-gray-600">Drag 'n' drop a video file here, or click to select a file</p>
      )}
      <p className="text-sm text-gray-500 mt-2">Supported formats: MP4, AVI, MKV</p>
    </div>
  );
};

export default VideoUploader;