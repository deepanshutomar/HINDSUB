
# **HindSub App**

This web application allows users to upload video files, automatically extract audio, transcribe spoken content into Hindi, and generate synchronized subtitles in the SRT format. It uses advanced AI models, such as Whisper, to ensure accurate transcription and efficient subtitle generation. The app is designed for anyone looking to make their video content accessible to Hindi-speaking audiences.

## **Features**

- **User-Friendly Interface**: A clean and intuitive UI that makes it easy for users to upload video files and monitor the progress of audio extraction and transcription.
- **Automatic Audio Extraction**: The app uses the `moviepy` library to extract audio from the uploaded video files and saves it in WAV format for further processing.
- **AI-Powered Transcription**: Employs OpenAI’s Whisper model to transcribe audio content into Hindi accurately. The app supports various model sizes (tiny, small, medium, large) based on speed and accuracy needs.
- **SRT Subtitle Generation**: Automatically generates SRT subtitle files based on the transcribed text with proper timestamp formatting (`HH:MM:SS,mmm`).
- **Multiple Language Support**: The app is primarily designed for Hindi transcription but can be configured to support additional languages.
- **Real-Time Feedback**: Provides users with a progress indicator and status updates during the transcription and subtitle generation process.
- **Downloadable SRT Files**: Users can preview and download the generated SRT file for their videos directly from the app.

## **Project Structure**

The project contains the following main files and configurations:

- **`src`**: Source files for the application.
- **`index.html`**: Main HTML file for the frontend.
- **`vite.config.ts`**: Configuration file for Vite bundler.
- **`tailwind.config.js`**: Configuration for Tailwind CSS.
- **`tsconfig.json`**: TypeScript configuration file for project setup.
- **`postcss.config.js`**: Configuration for PostCSS processing.
- **`.bolt`, `.gitignore`**: Configuration files for Git and other tools.

## **Technologies Used**

- **Frontend**: HTML, CSS (Tailwind), TypeScript
- **Bundler**: Vite for fast development and build setup
- **AI Libraries**: OpenAI Whisper, MoviePy, Torch, and Transformers for audio transcription and processing.
- **Styling**: Tailwind CSS for responsive and consistent design.
- **Backend**: Vite and TypeScript configuration files for streamlined development.

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn (package manager)
- Python (if AI processing is integrated separately)

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/hindi-subtitle-generator.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd hindi-subtitle-generator
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### **Running the Application**

1. **Start the development server:**
   ```bash
   npm run dev
   ```
2. **Access the application** in your browser at `http://localhost:3000`.

### **Building for Production**

To build the app for production deployment:
```bash
npm run build
```
The output will be in the `dist` directory.

## **Using the App**

1. **Upload Video**: Drag and drop or upload a video file in the supported formats (MP4, AVI, MKV).
2. **Audio Extraction**: The app will automatically extract the audio and save it for transcription.
3. **Transcription Process**: The AI model processes the audio and transcribes the content into Hindi. Users can choose between different model sizes (tiny, small, medium, large) based on their needs.
4. **Generate Subtitles**: Once the transcription is complete, the app generates an SRT file with properly formatted timestamps.
5. **Download Subtitles**: Users can preview and download the SRT file for use with their video.

## **Configuration**

- **Tailwind CSS**: Configured in `tailwind.config.js` for custom styling.
- **TypeScript**: Managed via `tsconfig.json`.
- **Environment Variables**: Store sensitive data in a `.env` file (not included in the repository). Provide an example configuration in `.env.example` to help other developers set up their environment.

## **Contributing**

We welcome contributions! Follow the steps below:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes and commit**:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature-branch
   ```
5. **Open a Pull Request**.

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## **Support**

If you encounter any issues or have questions, feel free to open an issue in the repository or contact us at support@example.com.

## **Acknowledgments**

- **OpenAI Whisper**: For providing the powerful transcription model.
- **MoviePy**: For its efficient video and audio processing capabilities.
- **Librosa and Torch**: For audio processing and model support.
- **Vite and Tailwind CSS**: For enabling a fast and modern development environment.

