// useTypewriter.js
import { useState, useEffect } from 'react';

const useTypewriter = (texts, typingSpeed = 100, pauseDuration = 1000, deletingSpeed = 50) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // Can be 'typing', 'pause', or 'deleting'

  useEffect(() => {
    const currentText = texts[index];
    let timer;

    switch (phase) {
      case 'typing':
        timer = setTimeout(() => {
          setText(prev => currentText.slice(0, prev.length + 1));
          if (text === currentText) {
            setPhase('pause');
          }
        }, typingSpeed);
        break;
      case 'pause':
        timer = setTimeout(() => {
          setPhase('deleting');
        }, pauseDuration);
        break;
      case 'deleting':
        timer = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
          if (text === '') {
            setPhase('typing');
            setIndex((index + 1) % texts.length);
          }
        }, deletingSpeed);
        break;
      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, texts, typingSpeed, pauseDuration, deletingSpeed]);

  return text;
};

export default useTypewriter;
