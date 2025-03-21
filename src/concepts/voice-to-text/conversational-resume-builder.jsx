import { useState, useEffect, useRef } from 'react';
import './conversational-resume.css'; // Import CSS for styling

const fields = [
  { id: 'name', question: 'What is your full name?', placeholder: 'Full Name', type: 'text' },
  { id: 'experience', question: 'How many years of experience do you have?', placeholder: 'Years of Experience', type: 'number' },
  { id: 'email', question: 'What is your email address?', placeholder: 'Email Address', type: 'email' }
];

const ResumeChatBot = () => {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [isListening, setIsListening] = useState(false);
  const [isRecognitionSupported, setIsRecognitionSupported] = useState(false);
  const [isSpeechSynthesisSupported, setIsSpeechSynthesisSupported] = useState(false);
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);

  useEffect(() => {
    const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    const isSpeechSynthesisSupported = 'speechSynthesis' in window;
    setIsRecognitionSupported(isSupported);
    setIsSpeechSynthesisSupported(isSpeechSynthesisSupported);
    // if(isSpeechSynthesisSupported){
    //   speakQuestion(fields[currentFieldIndex].question);
    // }
  }, []);

  useEffect(() => {
    // if (isSpeechSynthesisSupported) {
    speakQuestion(fields[currentFieldIndex].question);
    // }
  }, [currentFieldIndex, isSpeechSynthesisSupported]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [fields[currentFieldIndex].id]: event.target.value });
  };

  const startListening = () => {
    if (!isRecognitionSupported) return;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false; // default
    recognition.interimResults = false; // default
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setFormData({ ...formData, [fields[currentFieldIndex].id]: transcript });
      setTimeout(() => { goToNextQuestion(); }, 1000);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
    recognition.start();
  };

  const speakQuestion = (question) => {
    if (!isSpeechSynthesisSupported || mutedRef.current) return;

    const utterance = new SpeechSynthesisUtterance(question);
    // Event triggered when the speech synthesis is finished
    utterance.onend = () => {
      console.log('Speech synthesis completed.');
      // Perform any action after the audio is spoken
      // For example, automatically start listening for the user's response
      startListening();
    };

    // Speak the question
    window.speechSynthesis.speak(utterance);
  };

  const goToNextQuestion = () => {
    if (currentFieldIndex < fields.length - 1) {
      setCurrentFieldIndex((prev) => prev + 1);
    }
  };

  const goToPreviousState = () => {
    setCurrentFieldIndex((prev) => prev - 1);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    alert('Final Resume Data: ' + JSON.stringify(formData));
  };

  const toggleAudio = () => {
    if (mutedRef.current) {
      setMuted(false);
      mutedRef.current = false;
      speakQuestion(fields[currentFieldIndex].question);
    }
    else {
      setMuted(true);
      mutedRef.current = true;
    }
  };

  return (
    <>

      <div className="chatbot-container">
        <h2>Conversational Resume Builder</h2>
        <div className="chat-box">
          <div className="audio-control">
            <button onClick={toggleAudio} className="start-button">
              {muted ? 'Start Voice Input' : 'Stop Voice Input'}
            </button>
            <label>
              {muted ? '🔇 (Muted)' : '🔈 (UnMuted)'}
            </label></div>

          <div>
            <p className="question">{fields[currentFieldIndex].question}</p>

            <input
              type="email"
              value={formData[fields[currentFieldIndex].id] || ''}
              onChange={handleInputChange}
              placeholder={fields[currentFieldIndex].placeholder}
            />
          </div>

          {currentFieldIndex > 0 && <button className="btn" onClick={goToPreviousState}>Previous</button>}

          {isRecognitionSupported && (
            <button className={`mic-button ${isListening ? 'listening' : ''}`} onClick={startListening}>
              🎤 {isListening ? 'Listening...' : 'Speak'}
            </button>
          )}

          {currentFieldIndex < fields.length - 1 ? (
            <button className="btn" onClick={goToNextQuestion}>Next</button>
          ) : (
            <button className="btn" onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
      {/* Display Collected Data */}
      <h3>Collected Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  );
};

export default ResumeChatBot;
