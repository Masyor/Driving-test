import React, { createContext, useContext, useState, useEffect } from "react";
import { Vocabulary, TestAttempt } from "../types";
import { vocabularyDatabase } from "../data/vocabulary";

interface VocabularyContextType {
  starredWords: string[];
  starWord: (word: string) => void;
  unstarWord: (word: string) => void;
  isWordStarred: (word: string) => boolean;
  activeVocab: Vocabulary | null;
  setActiveVocab: (vocab: Vocabulary | null) => void;
  openWordDefinition: (wordText: string) => void;
  allVocabulary: Vocabulary[];
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  isPlayingSpeech: boolean;
  scoreHistory: TestAttempt[];
  addTestAttempt: (attempt: Omit<TestAttempt, 'id' | 'date'>) => void;
  clearHistory: () => void;
}

const VocabularyContext = createContext<VocabularyContextType | undefined>(undefined);

export const VocabularyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Starred Words state
  const [starredWords, setStarredWords] = useState<string[]>(() => {
    const saved = localStorage.getItem("starred_words");
    return saved ? JSON.parse(saved) : [];
  });

  // Score History state
  const [scoreHistory, setScoreHistory] = useState<TestAttempt[]>(() => {
    const saved = localStorage.getItem("highway_test_history");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeVocab, setActiveVocab] = useState<Vocabulary | null>(null);
  
  // Speech Rate state (0.75 is perfect for B1 slow, 1.0 is normal)
  const [speechRate, setSpeechRate] = useState<number>(() => {
    const saved = localStorage.getItem("speech_rate");
    return saved ? parseFloat(saved) : 0.85;
  });

  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);

  useEffect(() => {
    localStorage.setItem("starred_words", JSON.stringify(starredWords));
  }, [starredWords]);

  useEffect(() => {
    localStorage.setItem("highway_test_history", JSON.stringify(scoreHistory));
  }, [scoreHistory]);

  useEffect(() => {
    localStorage.setItem("speech_rate", speechRate.toString());
  }, [speechRate]);

  const starWord = (word: string) => {
    const lowerWord = word.toLowerCase().trim();
    if (!starredWords.includes(lowerWord)) {
      setStarredWords((prev) => [...prev, lowerWord]);
    }
  };

  const unstarWord = (word: string) => {
    const lowerWord = word.toLowerCase().trim();
    setStarredWords((prev) => prev.filter((w) => w !== lowerWord));
  };

  const isWordStarred = (word: string) => {
    return starredWords.includes(word.toLowerCase().trim());
  };

  // Automated smart lookup for clicked word terms
  const openWordDefinition = (wordText: string) => {
    // 1. Clean the clicked text (lowercase, remove punctuation)
    let cleaned = wordText.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "").trim();
    
    // Helper to find a vocab item by word string
    const findVocab = (str: string): Vocabulary | undefined => {
      return vocabularyDatabase.find(item => item.word.toLowerCase() === str);
    };

    // 2. Try exact match
    let match = findVocab(cleaned);

    // 3. Try matching common singulars if it ends with 's' or 'es'
    if (!match) {
      if (cleaned.endsWith("ies")) {
        match = findVocab(cleaned.slice(0, -3) + "y"); // e.g. accessories -> accessory
      } else if (cleaned.endsWith("es")) {
        match = findVocab(cleaned.slice(0, -2)); // e.g. crosses -> cross
      } else if (cleaned.endsWith("s") && !cleaned.endsWith("ss")) {
        match = findVocab(cleaned.slice(0, -1)); // e.g. junctions -> junction
      }
    }

    // 4. Try parsing verbal nouns ending in 'ing' or 'ed'
    if (!match) {
      if (cleaned.endsWith("ing")) {
        match = findVocab(cleaned.slice(0, -3)); // e.g. overtaking -> overtake
        if (!match) {
          match = findVocab(cleaned.slice(0, -3) + "e"); // e.g. tailgating -> tailgate
        }
      } else if (cleaned.endsWith("ed")) {
        match = findVocab(cleaned.slice(0, -2)); // e.g. crossed -> cross
        if (!match) {
          match = findVocab(cleaned.slice(0, -1)); // e.g. accelerated -> accelerate
        }
      }
    }

    // 5. Check if the text matches as a sub-word (e.g. "motorway slips" matches "slip road" or "motorway")
    if (!match) {
      match = vocabularyDatabase.find(item => {
        const itemWord = item.word.toLowerCase();
        return itemWord.includes(cleaned) || cleaned.includes(itemWord);
      });
    }

    if (match) {
      setActiveVocab(match);
    } else {
      console.warn("No match found in vocabulary database for:", wordText);
    }
  };

  // Native Speech Synthesis Integration (Disabled/Silent/No-op per user request)
  const speakText = (text: string) => {
    // No-op: Speech features removed to prevent distractions
  };

  const stopSpeaking = () => {
    // No-op: Speech features removed to prevent distractions
  };

  // Add a history item
  const addTestAttempt = (attempt: Omit<TestAttempt, 'id' | 'date'>) => {
    const newAttempt: TestAttempt = {
      ...attempt,
      id: "attempt_" + Date.now(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setScoreHistory((prev) => [newAttempt, ...prev]);
  };

  const clearHistory = () => {
    setScoreHistory([]);
    localStorage.removeItem("highway_test_history");
  };

  return (
    <VocabularyContext.Provider
      value={{
        starredWords,
        starWord,
        unstarWord,
        isWordStarred,
        activeVocab,
        setActiveVocab,
        openWordDefinition,
        allVocabulary: vocabularyDatabase,
        speechRate,
        setSpeechRate,
        speakText,
        stopSpeaking,
        isPlayingSpeech,
        scoreHistory,
        addTestAttempt,
        clearHistory,
      }}
    >
      {children}
    </VocabularyContext.Provider>
  );
};

export const useVocabulary = () => {
  const context = useContext(VocabularyContext);
  if (context === undefined) {
    throw new Error("useVocabulary must be used within a VocabularyProvider");
  }
  return context;
};
