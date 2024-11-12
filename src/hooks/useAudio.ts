export const useAudio = () => {
  const speak = (text: string, language: string, isFemaleVoice: boolean = true) => {
    // Initialize voices if needed
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        speakText(text, language, isFemaleVoice);
      };
    } else {
      speakText(text, language, isFemaleVoice);
    }
  };

  const speakText = (text: string, language: string, isFemaleVoice: boolean) => {
    const languageMap: { [key: string]: string } = {
      french: 'fr-FR',
      spanish: 'es-ES',
      japanese: 'ja-JP',
      chinese: 'zh-CN',
      arabic: 'ar-SA',
    };

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMap[language] || 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = isFemaleVoice ? 1.2 : 0.8;

    const voices = window.speechSynthesis.getVoices();
    const languageVoices = voices.filter(voice => 
      voice.lang.startsWith(languageMap[language].split('-')[0])
    );
    
    if (languageVoices.length > 0) {
      utterance.voice = languageVoices[0];
    }

    window.speechSynthesis.speak(utterance);
  };

  return { speak };
};