import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useVocabulary } from "../context/VocabularyContext";
import {
  Star,
  Trash2,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Award,
  Activity
} from "lucide-react";

export const StudyHub: React.FC = () => {
  const {
    starredWords,
    unstarWord,
    allVocabulary,
  } = useVocabulary();

  const [studyMode, setStudyMode] = useState<"list" | "flashcard">("list");
  
  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [scoreLearned, setScoreLearned] = useState(0);

  // Filter vocabulary database to find matching starred items
  const savedVocabList = allVocabulary.filter((v) =>
    starredWords.includes(v.word.toLowerCase())
  );

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % savedVocabList.length);
    }, 150);
  };

  const handleLearnedWord = (word: string) => {
    setScoreLearned((prev) => prev + 1);
    setIsFlipped(false);
    setTimeout(() => {
      unstarWord(word);
      // If we are at the last card, adjust index back
      if (currentCardIndex >= savedVocabList.length - 1) {
        setCurrentCardIndex(0);
      }
    }, 200);
  };

  const resetPractice = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setScoreLearned(0);
  };

  return (
    <div className="space-y-6" id="study-hub-main">
      {/* Tab Select Header */}
      <div className="flex bg-[#F8F9FA] p-1 border border-[#E4E5E6]" id="study-tab-select">
        <button
          id="study-list-tab-btn"
          onClick={() => {
            setStudyMode("list");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer ${
            studyMode === "list"
              ? "bg-white text-black font-bold border border-[#E4E5E6] shadow-xs"
              : "text-gray-400 hover:text-black hover:bg-white/40"
          }`}
        >
          <BookOpen className="h-3.5 w-3.5 text-[#2563EB]" />
          <span>My Saved Terms ({savedVocabList.length})</span>
        </button>
        <button
          id="study-flash-tab-btn"
          disabled={savedVocabList.length === 0}
          onClick={() => {
            setStudyMode("flashcard");
            resetPractice();
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer ${
            savedVocabList.length === 0
              ? "opacity-50 cursor-not-allowed text-gray-400"
              : studyMode === "flashcard"
              ? "bg-white text-black font-bold border border-[#E4E5E6] shadow-xs"
              : "text-gray-400 hover:text-black hover:bg-white/40"
          }`}
          title={savedVocabList.length === 0 ? "Save words first to use Trainer!" : ""}
        >
          <Activity className="h-3.5 w-3.5 text-[#2563EB]" />
          <span>Flashcard Trainer</span>
        </button>
      </div>

      {/* RENDER STUDY LIST */}
      {studyMode === "list" && (
        <CardListMode
          savedVocabList={savedVocabList}
          allVocabulary={allVocabulary}
          unstarWord={unstarWord}
          setStudyMode={setStudyMode}
          resetPractice={resetPractice}
        />
      )}

      {/* RENDER FLASHCARD TRAINING */}
      {studyMode === "flashcard" && savedVocabList.length > 0 && (
        <div className="space-y-6" id="flashcard-trainer-container">
          <div className="flex justify-between items-center bg-[#F8F9FA] border border-[#E4E5E6] p-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 font-mono">
              Card {currentCardIndex + 1} of {savedVocabList.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 border border-[#E4E5E6] flex items-center gap-1">
                <Award className="h-3.5 w-3.5" /> Checked Off: {scoreLearned}
              </span>
              <button
                id="reset-flash-btn"
                onClick={resetPractice}
                className="text-[10px] uppercase tracking-widest font-bold text-black bg-white border border-black hover:bg-gray-50 px-2.5 py-1 flex items-center gap-1 transition cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" /> Reset
              </button>
            </div>
          </div>

          <div className="perspective-1000 min-h-[240px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={SavedCardKey(currentCardIndex, isFlipped, savedVocabList)}
                initial={{ opacity: 0, rotateY: isFlipped ? -90 : 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: isFlipped ? 90 : -90 }}
                transition={{ duration: 0.25 }}
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full max-w-sm border p-6 flex flex-col justify-between cursor-pointer h-56 text-center select-none relative ${
                  isFlipped
                    ? "bg-[#1F2937] border-black text-[#F8F9FA]"
                    : "bg-white border-[#E4E5E6] text-[#1F2937]"
                }`}
              >
                {/* Back label toggle indicator */}
                <span className={`absolute top-4 right-4 text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 border ${
                  isFlipped ? "bg-[#374151] border-gray-600 text-white" : "bg-[#F8F9FA] border-[#E4E5E6] text-gray-500"
                }`}>
                  {isFlipped ? "Definition" : "Word Card"}
                </span>

                <div className="flex-1 flex flex-col justify-center items-center py-4 space-y-4">
                  {!isFlipped ? (
                    <h4 className="text-3xl font-bold tracking-tight capitalize text-black">
                      {savedVocabList[currentCardIndex].word}
                    </h4>
                  ) : (
                    <div className="space-y-4 px-2 text-left">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase font-mono block">
                          Definition
                        </span>
                        <p className="text-sm leading-relaxed">
                          {savedVocabList[currentCardIndex].definition}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end items-center border-t border-[#E4E5E6]/20 pt-4" onClick={(e) => e.stopPropagation()}>
                  <button
                    id="flashcard-flip-btn"
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="py-2 px-3 bg-[#2563EB] text-white hover:bg-blue-700 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" /> Flip Card
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Row */}
          <div className="flex gap-3 justify-center max-w-sm mx-auto" id="flashcard-controls">
            <button
              id="flashcard-remove-learned-btn"
              onClick={() => handleLearnedWord(savedVocabList[currentCardIndex].word)}
              className="flex-1 bg-white text-[#2563EB] border border-black hover:bg-[#EFF6FF] py-3 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Checked Off!</span>
            </button>
            <button
              id="flashcard-next-btn"
              onClick={handleNextCard}
              className="flex-1 bg-black text-white hover:bg-gray-800 py-3 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Next Card</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Unique key computation for flashcard animations
function SavedCardKey(index: number, isFlipped: boolean, list: any[]) {
  if (list.length === 0) return "empty";
  return `${list[index]?.word || ""}_${isFlipped ? "back" : "front"}`;
}

// Sub-Component Card List
const CardListMode: React.FC<{
  savedVocabList: any[];
  allVocabulary: any[];
  unstarWord: (word: string) => void;
  setStudyMode: (mode: "list" | "flashcard") => void;
  resetPractice: () => void;
}> = ({ savedVocabList, allVocabulary, unstarWord, setStudyMode, resetPractice }) => {
  if (savedVocabList.length === 0) {
    return (
      <div className="text-center py-10 px-6 border border-[#E4E5E6] bg-white max-w-md mx-auto space-y-4" id="empty-hub">
        <div className="mx-auto w-10 h-10 border border-[#E4E5E6] bg-[#F8F9FA] text-[#2563EB] flex items-center justify-center">
          <Star className="h-5 w-5 stroke-[1.5]" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-slate-900 text-lg font-bold">My Saved List is Empty</h4>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
            While going through the practice tests, you can click on words with a <span className="border-b-2 border-[#2563EB] bg-[#EFF6FF] px-0.5 font-semibold text-black">blue underline</span> and click the Star icon to save them here!
          </p>
        </div>
        
        <div className="pt-2 border-t border-[#E4E5E6]">
          <h5 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-mono mb-3">
            Essential Highway Code terms:
          </h5>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {["junction", "pedestrian", "give way", "dual carriageway", "tailgating"].map((word) => {
              return (
                <button
                  key={word}
                  id={`suggest-item-btn-${word}`}
                  onClick={() => {
                    const saved = localStorage.getItem("starred_words");
                    const current = saved ? JSON.parse(saved) : [];
                    if (!current.includes(word)) {
                      current.push(word);
                      localStorage.setItem("starred_words", JSON.stringify(current));
                      // Refresh page to load stars
                      window.location.reload();
                    }
                  }}
                  className="px-2.5 py-1 border border-[#E4E5E6] bg-[#F8F9FA] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition font-mono text-[9px] text-[#1F2937] font-semibold uppercase tracking-wider capitalize cursor-pointer"
                >
                  + {word}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4" id="vocab-cards-list">
      {/* Intro tip to trigger flashcards */}
      <div className="flex items-center justify-between bg-[#EFF6FF] p-4 border border-[#E4E5E6]">
        <div className="space-y-0.5 max-w-[70%]">
          <h4 className="text-sm font-bold text-[#1F2937]">
            Study Your Road Safety Words
          </h4>
          <p className="text-xs text-gray-650">
            Practice these {savedVocabList.length} custom flagged road terms in trainer cards mode.
          </p>
        </div>
        <button
          id="trigger-flash-button-body"
          onClick={() => {
            setStudyMode("flashcard");
            resetPractice();
          }}
          className="bg-black hover:bg-gray-800 text-[#EFF6FF] py-2 px-3 text-xs uppercase tracking-wider font-extrabold flex items-center gap-1.5 transition cursor-pointer"
        >
          <span>Train Now</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="grid gap-3" id="study-hub-word-cards">
        {savedVocabList.map((vocab) => (
          <div
            key={vocab.word}
            id={`study-item-${vocab.word}`}
            className="border border-[#E4E5E6] bg-white p-4 space-y-3 relative"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-[#1F2937] text-base capitalize">
                    {vocab.word}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 pr-1">
                  {vocab.definition}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  id={`unstar-vocab-${vocab.word}`}
                  onClick={() => unstarWord(vocab.word)}
                  className="p-1.5 border border-red-200 bg-red-50 text-red-650 hover:bg-red-500 hover:text-white transition cursor-pointer"
                  title="Remove from Study Hub"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
