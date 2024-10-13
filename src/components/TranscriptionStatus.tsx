import React from 'react';

interface TranscriptionStatusProps {
  status: 'uploading' | 'processing';
}

const TranscriptionStatus: React.FC<TranscriptionStatusProps> = ({ status }) => {
  return (
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto mb-4"></div>
      <p className="text-lg font-semibold text-indigo-600">
        {status === 'uploading' ? 'Uploading video...' : 'Transcribing audio...'}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        This may take a few minutes depending on the video length.
      </p>
    </div>
  );
};

export default TranscriptionStatus;