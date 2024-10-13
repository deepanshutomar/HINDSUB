import React from 'react';

interface SubtitlePreviewProps {
  transcription: string;
}

const SubtitlePreview: React.FC<SubtitlePreviewProps> = ({ transcription }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Transcription Complete!</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4 max-h-60 overflow-y-auto">
        <p className="text-left whitespace-pre-wrap">{transcription}</p>
      </div>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
        onClick={() => {
          // Implement SRT download logic here
          alert('SRT download functionality to be implemented');
        }}
      >
        Download SRT
      </button>
    </div>
  );
};

export default SubtitlePreview;