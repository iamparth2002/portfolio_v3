import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  speed: number; // Speed of typing in milliseconds
  onComplete: () => void; // Callback to trigger when typing completes
}

const TypewriterEffect = ({ text, speed, onComplete }: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(typingInterval);
        onComplete(); // Trigger onComplete when typing finishes
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, onComplete]);

  return <h1>{displayedText}</h1>;
};

export default TypewriterEffect;
