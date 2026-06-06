import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Star, Bookmark } from "lucide-react";
import { useVocabulary } from "../context/VocabularyContext";

export const VocabularyModal: React.FC = () => {
  const {
    activeVocab,
    setActiveVocab,
    isWordStarred,
    starWord,
    unstarWord,
  } = useVocabulary();

  if (!activeVocab) return null;

  const isStarred = isWordStarred(activeVocab.word);

  const handleToggleStar = () => {
    if (isStarred) {
      unstarWord(activeVocab.word);
    } else {
      starWord(activeVocab.word);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-[1px]" id="vocab-overlay">
        {/* Backdrop cover click handler */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setActiveVocab(null);
          }}
          className="absolute inset-0 cursor-pointer"
          id="vocab-backdrop"
        />

        {/* Sliding Bottom Drawer */}
        <motion.div
          initial={{ y: "100%", opacity: 0.9 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative w-full max-w-lg bg-white p-6 shadow-2xl border border-[#E5E1D8] pb-8 select-none"
          id="vocab-drawer-container"
        >
          {/* Aesthetic drag handlebar */}
          <div className="mx-auto -mt-2 mb-4 h-1 w-12 bg-[#E5E1D8]" />

          {/* Header Row */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-2xl font-bold tracking-tight text-[#111827] capitalize">
                  {activeVocab.word}
                </h3>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-mono">Click anywhere outside to dismiss</p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                id="vocab-star-btn"
                onClick={handleToggleStar}
                className={`p-2 rounded-lg border border-[#E5E1D8] transition-all duration-200 cursor-pointer ${
                  isStarred
                    ? "bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]"
                    : "bg-[#F9F7F2] hover:bg-black hover:text-white text-[#1A1A1A]"
                }`}
                title={isStarred ? "Saved term" : "Save term to review list"}
              >
                <Star className={`h-4 w-4 ${isStarred ? "fill-[#2563EB] text-[#2563EB]" : ""}`} />
              </button>

              <button
                id="vocab-close-btn"
                onClick={() => {
                  setActiveVocab(null);
                }}
                className="p-2 rounded-lg border border-gray-300 bg-white text-gray-750 hover:bg-gray-100 transition-all cursor-pointer"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <hr className="my-4 border-[#E5E1D8]" />

          {/* Simple Explanation Content */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-[10px] font-bold tracking-widest text-[#2563EB] uppercase font-mono">
                Definition
              </h4>
              <p className="text-base text-[#1F2937] leading-relaxed">
                {activeVocab.definition}
              </p>
            </div>
            
            {/* Quick Star Tip */}
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
              <Bookmark className="h-4 w-4 text-[#2563EB]" />
              <span>
                {isStarred ? (
                   <span className="text-[#2563EB] font-medium text-xs">Added to Study Hub! You can review or quiz yourself on this word.</span>
                ) : (
                  <span className="text-xs">Save this word to your personalized study list for later.</span>
                )}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
