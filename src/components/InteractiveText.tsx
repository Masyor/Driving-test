import React from "react";
import { useVocabulary } from "../context/VocabularyContext";

interface InteractiveTextProps {
  text: string;
  className?: string;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({ text, className = "" }) => {
  const { openWordDefinition, allVocabulary } = useVocabulary();

  // Guard against empty strings
  if (!text) return null;

  // Build the dynamic Regex to match all vocabulary words/phrases
  const vocabularyWords = allVocabulary.map((v) => v.word);

  const getRegexPattern = (words: string[]) => {
    const escapes = words.map((w) => {
      const cleanWord = w.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      
      // Explicit adjustments for plurals / tenses / spacing
      if (cleanWord === "speed limit") return "speed\\s+limits?";
      if (cleanWord === "give way") return "give\\s+ways?";
      if (cleanWord === "dual carriageway") return "dual\\s+carriageways?";
      if (cleanWord === "zebra crossing") return "zebra\\s+crossings?";
      if (cleanWord === "pelican crossing") return "pelican\\s+crossings?";
      if (cleanWord === "level crossing") return "level\\s+crossings?";
      if (cleanWord === "blind spot") return "blind\\s+spots?";
      if (cleanWord === "hard shoulder") return "hard\\s+shoulders?";
      if (cleanWord === "slip road") return "slip\\s+roads?";
      if (cleanWord === "built-up area") return "built-up\\s+areas?";
      if (cleanWord === "braking distance") return "braking\\s+distances?";
      if (cleanWord === "stopping distance") return "stopping\\s+distances?";
      
      if (cleanWord === "skidding") return "skid(?:s|ding|ded)?";
      if (cleanWord === "overtake") return "overtak(?:e|es|ing|en|ed)";
      if (cleanWord === "junction") return "junctions?";
      if (cleanWord === "pedestrian") return "pedestrians?";
      if (cleanWord === "vehicle") return "vehicles?";
      if (cleanWord === "priority") return "priorities|priority";
      if (cleanWord === "indicator") return "indicators?";
      if (cleanWord === "barrier") return "barriers?";
      if (cleanWord === "windscreen") return "windscreens?";
      if (cleanWord === "tread") return "treads?";
      if (cleanWord === "horn") return "horns?";
      if (cleanWord === "emergency") return "emergencies|emergency";
      
      return `${cleanWord}s?`;
    });

    // Sort by length descending so that multi-word phrases match before single-word subsets
    escapes.sort((a, b) => b.length - a.length);

    // Return global, case-insensitive regex with word boundary tracking
    return new RegExp(`\\b(${escapes.join("|")})\\b`, "gi");
  };

  const regex = getRegexPattern(vocabularyWords);

  // Split text by the pattern capturing matches in the result array
  const parts = text.split(regex);

  return (
    <span className={`inline-wrap ${className}`} id="interactive-text-span">
      {parts.map((part, index) => {
        // Since split with capturing group alternates results:
        // Every matched part will be at an ODD index, while plain-text is at EVEN indices.
        const isMatch = index % 2 === 1;

        if (isMatch) {
          return (
            <button
              key={index}
              id={`vocab-word-btn-${index}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openWordDefinition(part);
              }}
              className="inline-block px-1 mx-0.5 rounded-sm font-semibold border-b-2 border-[#2563EB] text-[#1F2937] bg-[#EFF6FF] hover:bg-blue-100 transition-all duration-200 cursor-help text-left"
              title="Click for provided definition"
            >
              {part}
            </button>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
