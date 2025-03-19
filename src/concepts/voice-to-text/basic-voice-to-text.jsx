
import { useState, useEffect, useRef } from 'react';
import './VoiceInputForm.css'; // Import CSS for styling

const VoiceInputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    bio: '',
  });

  const [isSpeaking, setIsSpeaking] = useState(false); // Track speech synthesis status
  const [listeningField, setListeningField] = useState(null); // Track which field is being listened to
  const [isRecognitionSupported, setIsRecognitionSupported] = useState(false);
  const [isSpeechSynthesisSupported, setIsSpeechSynthesisSupported] = useState(false);

  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    setIsRecognitionSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
    setIsSpeechSynthesisSupported('speechSynthesis' in window);
  }, []);

  // Function to start speech recognition for a specific field
  const startListening = (field) => {
    if (!isRecognitionSupported) return;

    const RecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new RecognitionAPI();
    recognition.continuous = false; // default
    recognition.interimResults = false; // default
    recognition.lang = 'en-US';

    recognitionRef.current = recognition;

    recognition.onstart = () => setListeningField(field);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setFormData((prev) => ({ ...prev, [field]: text }));
    };

    recognition.onerror = (event) => console.error('Speech recognition error:', event.error);

    recognition.onend = () => setListeningField(null);

    recognition.start();
  };

  // Function to read out loud the heading
  const readHeading = () => {
    if (!isSpeechSynthesisSupported) return;

    const utterance = new SpeechSynthesisUtterance('Resume Form with Voice Input');
    utterance.lang = 'en-US';

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h2 className="heading">
        Resume Form with Voice Input
        {isSpeechSynthesisSupported && (
          <button className={`icon-btn ${isSpeaking ? 'active' : ''}`} onClick={readHeading}>
            🔊
          </button>
        )}
      </h2>

      {/* Name Input */}
      <label>Name:</label>
      <div className="input-group">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {isRecognitionSupported && (
          <button
            className={`icon-btn ${listeningField === 'name' ? 'active' : ''}`}
            onClick={() => startListening('name')}
          >
            🎤
          </button>
        )}
      </div>

      {/* Email Input */}
      <label>Email:</label>
      <div className="input-group">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {isRecognitionSupported && (
          <button
            className={`icon-btn ${listeningField === 'email' ? 'active' : ''}`}
            onClick={() => startListening('email')}
          >
            🎤
          </button>
        )}
      </div>

      {/* Experience Input */}
      <label>Experience (Years):</label>
      <div className="input-group">
        <input
          type="number"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
        />
        {isRecognitionSupported && (
          <button
            className={`icon-btn ${listeningField === 'experience' ? 'active' : ''}`}
            onClick={() => startListening('experience')}
          >
            🎤
          </button>
        )}
      </div>

      {/* Bio (ContentEditable) */}
      <label>Bio:</label>
      <div className="input-group">
        <div
          contentEditable
          className="editable-box"
          onInput={(e) => setFormData({ ...formData, bio: e.currentTarget.textContent })}
        >
          {formData.bio}
        </div>
        {isRecognitionSupported && (
          <button
            className={`icon-btn ${listeningField === 'bio' ? 'active' : ''}`}
            onClick={() => startListening('bio')}
          >
            🎤
          </button>
        )}
      </div>

      {/* Display Collected Data */}
      <h3>Collected Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default VoiceInputForm;
