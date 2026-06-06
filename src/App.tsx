import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  HelpCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Home,
  CheckCircle2,
  XCircle,
  Clock,
  Play,
  ArrowRight,
  AlertTriangle,
  Bookmark,
  Sparkles,
  History,
  GraduationCap
} from "lucide-react";

import { useVocabulary, VocabularyProvider } from "./context/VocabularyContext";
import { roadQuestions } from "./data/questions";
import { InteractiveText } from "./components/InteractiveText";
import { TrafficSignRenderer } from "./components/TrafficSignRenderer";
import { RoadSignsGuide } from "./components/RoadSignsGuide";
import { StudyHub } from "./components/StudyHub";
import { ScoreHistory } from "./components/ScoreHistory";
import { VocabularyModal } from "./components/VocabularyModal";
import { Question, QuizState } from "./types";

function MainAppContent() {
  const {
    starredWords,
    addTestAttempt
  } = useVocabulary();

  // Navigation tab states
  const [activeTab, setActiveTab] = useState<"home" | "signs" | "study">("home");
  
  // Test/Session states
  const [quizActive, setQuizActive] = useState(false);
  const [quizMode, setQuizMode] = useState<"mock" | "category" | "quick" | "mock_full">("mock");
  const [quizCategory, setQuizCategory] = useState<string | null>(null);
  const [feedbackMode, setFeedbackMode] = useState<"practice" | "exam">("practice");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  
  // Quiz Machine state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: string]: number }>({});
  const [checkedQuestions, setCheckedQuestions] = useState<{ [questionId: string]: boolean }>({}); // only for practice mode
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  // Timer states
  const [timerSeconds, setTimerSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto scroll top on question transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIdx, activeTab]);

  // Handle active test timer
  useEffect(() => {
    if (quizActive && !quizSubmitted) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [quizActive, quizSubmitted]);

  // Shuffle & setup questions
  const startNewTest = (mode: "mock" | "category" | "quick" | "mock_full", categoryName: string | null = null) => {
    setQuizMode(mode);
    setQuizCategory(categoryName);
    
    let filtered = [...roadQuestions];
    if (mode === "category" && categoryName) {
      filtered = filtered.filter(q => q.category === categoryName);
    }

    // Shuffle the filtered list of questions
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    
    // Choose count based on mode
    let selectCount = 15;
    if (mode === "quick") {
      selectCount = 5;
    } else if (mode === "category") {
      selectCount = Math.min(10, shuffled.length);
    } else if (mode === "mock_full") {
      selectCount = Math.min(50, shuffled.length);
    }
    const finalSelection = shuffled.slice(0, selectCount);

    setActiveQuestions(finalSelection);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setQuizSubmitted(false);
    setTimerSeconds(0);
    setQuizActive(true);
  };

  // Safe quit test handler
  const handleQuitTest = (confirm: boolean) => {
    if (confirm) {
      setQuizActive(false);
      setShowQuitConfirm(false);
    } else {
      setShowQuitConfirm(false);
    }
  };

  // Submit test and record locally
  const handleSubmitTest = () => {
    // Calculate final scores
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const isPass = correctCount / activeQuestions.length >= 0.8; // 80% to pass UK standard

    // Save in History
    addTestAttempt({
      score: correctCount,
      totalQuestions: activeQuestions.length,
      mode: quizMode === "category" ? `${quizCategory}` : quizMode === "quick" ? "Quick Short" : quizMode === "mock_full" ? "Real Exam (50 Qs)" : "Standard Mock",
      category: quizCategory || undefined,
      passed: isPass
    });

    setQuizSubmitted(true);
  };

  // Helpers for formatting timers
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center py-4 px-3 sm:px-6 md:py-8 font-sans transition-colors duration-300" id="highway-app-body">
      
      {/* Outer Shell Wrapper (Mobile App style Frame) */}
      <div className="w-full max-w-xl bg-white border border-[#E4E5E6] shadow-2xl overflow-hidden flex flex-col justify-between" id="app-viewport-card">
        
        {/* Banner Driving Header */}
        <header className="bg-[#1F2937] px-6 py-5 shrink-0 text-white flex justify-between items-center relative select-none">
          {/* Visual premium accent line on top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2563EB]" />
          
          <div className="flex items-center gap-2.5">
            <div className="border border-white/20 bg-black/40 p-1.5 text-white shrink-0">
              <GraduationCap className="h-5 w-5 stroke-[2] text-[#2563EB]" />
            </div>
            <div>
              <h1 className="text-md sm:text-lg font-bold tracking-tight flex items-center gap-2">
                Highway Code <span className="text-[9px] bg-[#2563EB] text-white px-1.5 py-0.5 uppercase tracking-widest font-extrabold font-mono">Guide</span>
              </h1>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Learner Handbook & Vocabulary</p>
            </div>
          </div>
        </header>

        {/* Dynamic viewport contents area */}
        <main className="flex-1 p-5 sm:p-6 overflow-y-auto min-h-[500px]" id="app-main-view">
          <AnimatePresence mode="wait">
            
            {/* 1. WELCOME HUB DASHBOARD */}
            {!quizActive && activeTab === "home" && (
              <motion.div
                key="welcome-hub"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.18 }}
                className="space-y-6"
              >
                {/* Welcome Card Banner */}
                <div className="bg-[#1F2937] text-white p-5 space-y-4 select-none relative overflow-hidden border border-[#E4E5E6]/40" id="welcome-message-panel">
                  {/* Visual lane stripes decor */}
                  <div className="absolute right-[-20px] bottom-[-25px] w-32 h-32 opacity-5 border-[16px] border-dashed border-white rounded-full pointer-events-none" />
                  
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#2563EB] block">
                      Welcome to your companion handbook
                    </span>
                    <h2 className="text-xl font-bold tracking-tight">
                      Learn the Highway Code with Simple Definitions
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-[90%]">
                      Specifically designed to support you with clear explanations. Learn crucial driving regulations, road signs, and essential vocabulary step-by-step.
                    </p>
                  </div>
                </div>

                {/* Practice Modes Selection */}
                <div className="space-y-3" id="navigation-quiz-modes">
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">
                    Select practice options
                  </h3>

                  <div className="grid gap-3" id="modes-cards">
                    {/* Mode card 0: Full 50-Question Exam Simulation */}
                    <button
                      id="mode-exam-full"
                      onClick={() => {
                        setFeedbackMode("exam");
                        startNewTest("mock_full");
                      }}
                      className="w-full text-left p-4 border border-[#E4E5E6] bg-white hover:border-[#2563EB] transition duration-200 flex items-start gap-4 select-none group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-[8px] font-bold font-mono uppercase tracking-widest px-2 py-0.5">
                        Real Limit
                      </div>
                      <div className="border border-[#E4E5E6] bg-[#1F2937] text-white p-3 shrink-0">
                        <Clock className="h-5 w-5 text-[#2563EB]" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#1F2937]">
                            Full Exam Simulation (50 Qs)
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                          50 questions selected randomly under realistic test conditions. No hints, immediate feedbacks, or definitions until you hand in your exam.
                        </p>
                      </div>
                    </button>

                    {/* Mode card 1: Practice exam */}
                    <button
                      id="mode-practice-standard"
                      onClick={() => {
                        setFeedbackMode("practice");
                        startNewTest("mock");
                      }}
                      className="w-full text-left p-4 border border-[#E4E5E6] bg-white hover:border-[#2563EB] transition duration-200 flex items-start gap-4 select-none group cursor-pointer"
                    >
                      <div className="border border-[#E4E5E6] bg-[#F8F9FA] text-[#2563EB] p-3 shrink-0">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#1F2937]">
                            Standard Mock (15 Qs)
                          </span>
                          <span className="bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]/30 text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 scale-90">
                            Practice
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                          15 shuffled questions. View basic explanations and definitions instantly after each answer selection. Great for studying!
                        </p>
                      </div>
                    </button>

                    {/* Mode card 3: Quick Short */}
                    <button
                      id="mode-practice-quick"
                      onClick={() => {
                        setFeedbackMode("practice");
                        startNewTest("quick");
                      }}
                      className="w-full text-left p-4 border border-[#E4E5E6] bg-white hover:border-[#2563EB] transition duration-200 flex items-start gap-4 select-none group cursor-pointer"
                    >
                      <div className="border border-[#E4E5E6] bg-white text-gray-650 p-3 shrink-0">
                        <Play className="h-5 w-5 text-gray-800" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#1F2937]">
                            Quick Short (5 Qs)
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                          A fast, lightweight 5-question review. Excellent for when you have only a few minutes to spare.
                        </p>
                      </div>
                    </button>

                    {/* Mini categories/sub lists inline selector */}
                    <div className="p-4 border border-[#E4E5E6] bg-[#F8F9FA] space-y-3" id="categories-mini-selector">
                      <div className="flex justify-between items-center select-none">
                        <h4 className="font-bold text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                          Practice by road topic
                        </h4>
                        <span className="text-[10px] font-mono text-gray-400">10 Questions each</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2" id="topic-grid">
                        {["Road Signs", "Speed Limits", "Safety & Hazards", "Pedestrians"].map((cat) => (
                           <button
                             key={cat}
                             id={`topic-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                             onClick={() => {
                               setFeedbackMode("practice");
                               startNewTest("category", cat);
                             }}
                             className="bg-white border border-[#E4E5E6] hover:border-[#2563EB] py-2.5 px-3 text-left transition text-xs font-bold text-[#1F2937] flex items-center justify-between cursor-pointer"
                           >
                             <span>{cat}</span>
                             <ArrowRight className="h-3.5 w-3.5 text-[#2563EB]" />
                           </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scores History log block */}
                <div className="space-y-2" id="welcome-attempts-block">
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">
                    My progress & scores history
                  </h3>
                  <ScoreHistory />
                </div>
              </motion.div>
            )}

            {/* 2. ROAD SIGNS DICTIONARY TAB */}
            {!quizActive && activeTab === "signs" && (
              <motion.div
                key="signs-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.18 }}
              >
                <RoadSignsGuide />
              </motion.div>
            )}

            {/* 3. STUDY HUB VOCABULARY TAB */}
            {!quizActive && activeTab === "study" && (
              <motion.div
                key="study-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.18 }}
              >
                <StudyHub />
              </motion.div>
            )}

            {/* 4. ACTIVE QUIZ ENGINE VIEWPORT */}
            {quizActive && activeQuestions.length > 0 && (
              <motion.div
                key="quiz-block"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
              >
                {/* Active Question Top Bar Info */}
                <div className="flex justify-between items-center bg-[#F8F9FA] p-3 border border-[#E4E5E6] select-none" id="quiz-header-bar">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest block">
                      {quizMode === "category" ? `${quizCategory} Topic` : quizMode === "quick" ? "Quick Short practice" : "Standard Mock Test"} ({feedbackMode === "practice" ? "Practice" : "Exam"} Mode)
                    </span>
                    <span className="text-xs font-bold text-[#1F2937] block">
                      Question {currentIdx + 1} of {activeQuestions.length}
                    </span>
                  </div>

                  {/* Visual Clock tracking */}
                  <div className="flex items-center gap-1.5 bg-[#1F2937] text-white px-3 py-1.5 text-xs font-mono font-bold border border-[#E4E5E6]/40 shadow-xs">
                    <Clock className="h-3.5 w-3.5 text-[#2563EB]" />
                    <span className="font-mono text-white">{formatTime(timerSeconds)}</span>
                  </div>
                </div>

                {/* Progress dot row */}
                <div className="flex gap-1" id="quiz-progress-dots">
                  {activeQuestions.map((_, idx) => {
                    const qId = activeQuestions[idx].id;
                    const isAnswered = selectedAnswers[qId] !== undefined;
                    const isCurrent = idx === currentIdx;
                    
                    let bg = "bg-gray-200";
                    if (isCurrent) {
                      bg = "bg-black border border-[#2563EB]";
                    } else if (isAnswered) {
                      bg = "bg-[#2563EB]";
                    }
                    if (quizSubmitted) {
                      const isCorrect = selectedAnswers[qId] === activeQuestions[idx].correctIndex;
                      bg = isCorrect ? "bg-green-600" : "bg-red-500";
                    }

                    return (
                      <div
                        key={idx}
                        className={`h-1.5 flex-1 transition-all duration-200 ${bg}`}
                      />
                    );
                  })}
                </div>

                {/* Question Body Card */}
                <div className="border border-[#E4E5E6] p-5 space-y-4 relative bg-white" id="active-question-card">
                  {/* Traffic Sign component (conditional) */}
                  {activeQuestions[currentIdx].signType && (
                    <div className="mx-auto flex justify-center py-2.5 bg-[#F8F9FA] border border-[#E4E5E6] w-32 shadow-xs">
                      <TrafficSignRenderer type={activeQuestions[currentIdx].signType} size={90} />
                    </div>
                  )}

                  {/* Text Question */}
                  <div className="flex gap-3 items-start">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#2563EB] block mb-1">
                        Question (Click underlined words for key terms)
                      </span>
                      <h3 className="text-base sm:text-md font-bold text-[#1F2937] leading-relaxed">
                        <InteractiveText text={activeQuestions[currentIdx].question} />
                      </h3>
                    </div>
                  </div>

                  <hr className="border-[#E4E5E6]" />

                  {/* Answers multiple choices clickable list */}
                  <div className="space-y-2.5" id="options-interactive-group">
                    {activeQuestions[currentIdx].options.map((opt, optIdx) => {
                      const qId = activeQuestions[currentIdx].id;
                      const isSelected = selectedAnswers[qId] === optIdx;
                      const isCorrect = activeQuestions[currentIdx].correctIndex === optIdx;
                      const isPracticeChecked = checkedQuestions[qId] === true;
                      
                      // Calculate interactive dynamic classes
                      let borderClass = "border-[#E4E5E6]";
                      let bgClass = "bg-white hover:bg-gray-50 hover:border-black";
                      let textClass = "text-slate-850";
                      let indicatorColor = "border-gray-300";

                      if (isSelected) {
                        borderClass = "border-black ring-1 ring-black";
                        bgClass = "bg-[#F8F9FA]";
                        indicatorColor = "border-black bg-black";
                      }

                      // Visual decoration overlays if answer evaluated
                      if ((quizSubmitted) || (feedbackMode === "practice" && isPracticeChecked)) {
                        if (isCorrect) {
                          borderClass = "border-green-600 ring-1 ring-green-600";
                          bgClass = "bg-green-50";
                          textClass = "text-green-900 font-bold";
                          indicatorColor = "border-green-600 bg-green-600";
                        } else if (isSelected) {
                          borderClass = "border-red-550 ring-1 ring-red-300";
                          bgClass = "bg-red-50/70";
                          textClass = "text-red-900";
                          indicatorColor = "border-red-550 bg-red-400";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          id={`option-btn-${optIdx}`}
                          disabled={quizSubmitted || (feedbackMode === "practice" && isPracticeChecked)}
                          onClick={() => {
                            setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
                          }}
                          className={`w-full text-left p-3.5 border ${borderClass} ${bgClass} transition flex gap-3 items-center group cursor-pointer`}
                        >
                          {/* Inner custom visual bullet */}
                          <div className={`w-4 h-4 border flex items-center justify-center shrink-0 ${indicatorColor} text-white text-[9px] font-bold`}>
                            {((quizSubmitted) || (feedbackMode === "practice" && isPracticeChecked)) && (
                              isCorrect ? "✓" : isSelected ? "✗" : ""
                            )}
                          </div>
                          
                          <div className="flex-1 flex justify-between items-center gap-1.5">
                            <span className={`text-xs font-medium leading-relaxed ${textClass}`}>
                              {opt}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Explanation drawer (only practice mode when checked) */}
                  {feedbackMode === "practice" && checkedQuestions[activeQuestions[currentIdx].id] && (
                    <motion.div
                      id="practice-explanation-drawer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-[#E4E5E6] bg-[#EFF6FF] p-4 space-y-2"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold tracking-widest text-[#2563EB] uppercase font-mono block">
                          Explanation
                        </span>
                        <p className="text-xs text-[#1F2937] leading-relaxed pr-1">
                          <InteractiveText text={activeQuestions[currentIdx].b1Explanation} />
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Question Control row */}
                <div className="flex justify-between items-center" id="quiz-navigation-bar">
                  {/* Back button */}
                  <button
                    id="quiz-nav-back-btn"
                    onClick={() => {
                      setCurrentIdx((p) => Math.max(0, p - 1));
                    }}
                    disabled={currentIdx === 0}
                    className="p-2 py-1.5 border border-[#E4E5E6] text-gray-500 hover:text-black hover:border-black flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer font-mono text-[10px] uppercase tracking-wider bg-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>

                  {/* Check action / Next trigger */}
                  <div className="flex items-center gap-2">
                    {/* Practice check button */}
                    {feedbackMode === "practice" && !checkedQuestions[activeQuestions[currentIdx].id] ? (
                      <button
                        id="practice-check-btn"
                        disabled={selectedAnswers[activeQuestions[currentIdx].id] === undefined}
                        onClick={() => {
                          const qId = activeQuestions[currentIdx].id;
                          setCheckedQuestions((p) => ({ ...p, [qId]: true }));
                        }}
                        className="bg-[#2563EB] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest cursor-pointer flex items-center gap-1.5"
                      >
                        Check Answer
                      </button>
                    ) : (
                      // Next/Navigate logic
                      currentIdx < activeQuestions.length - 1 ? (
                        <button
                          id="quiz-nav-next-btn"
                          disabled={selectedAnswers[activeQuestions[currentIdx].id] === undefined && feedbackMode === "exam"}
                          onClick={() => {
                            setCurrentIdx((p) => p + 1);
                          }}
                          className="bg-black hover:bg-black/90 text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Next</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      ) : (
                        // Submit logic if last question
                        !quizSubmitted && (
                          <button
                            id="quiz-submit-btn"
                            disabled={selectedAnswers[activeQuestions[currentIdx].id] === undefined && feedbackMode === "exam"}
                            onClick={handleSubmitTest}
                            className="bg-[#1F2937] hover:bg-[#2563EB] text-white px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest cursor-pointer"
                          >
                            Finish Test
                          </button>
                        )
                      )
                    )}
                  </div>
                </div>

                {/* Quit Exam overlay safety */}
                <div className="flex justify-center select-none pt-2">
                  <button
                    id="trigger-quit-confirm-btn"
                    onClick={() => setShowQuitConfirm(true)}
                    className="text-[10px] text-gray-400 hover:text-red-700 transition font-bold uppercase tracking-widest font-mono cursor-pointer"
                  >
                    Quit Practice Session
                  </button>
                </div>
              </motion.div>
            )}

            {/* 5. SUMMARY RESULTS SECTION */}
            {quizActive && quizSubmitted && (
              <motion.div
                key="quiz-results"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
                id="results-viewpoint"
              >
                {/* Score card banner */}
                {(() => {
                  const scoreCount = activeQuestions.filter(
                    (q) => selectedAnswers[q.id] === q.correctIndex
                  ).length;
                  const scorePercent = Math.round((scoreCount / activeQuestions.length) * 100);
                  const isPass = scorePercent >= 80;

                  return (
                    <div className="space-y-6">
                      <div className="bg-[#1F2937] text-white p-6 text-center space-y-4 border border-[#E4E5E6]/30 animate-fade-in" id="final-stats-hero">
                        
                        <div className="space-y-1 select-none">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2563EB]">
                            Test Complete
                          </span>
                          <h3 className="text-2xl font-bold tracking-tight text-white">
                            {isPass ? "🎉 Congratulations! You Passed!" : "👍 Keep going! Great Practice!"}
                          </h3>
                        </div>

                        {/* Accuracy box */}
                        <div className="relative inline-flex items-center justify-center p-1 bg-white/5 select-none" id="accuracy-circular-stats">
                          <div className={`w-32 h-32 flex flex-col justify-center items-center border-[6px] ${
                            isPass ? "border-[#2563EB]" : "border-gray-500"
                          } bg-black/45`}>
                            <p className="text-3xl font-bold text-white">{scorePercent}%</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Accuracy</p>
                          </div>
                        </div>

                        <div className="space-y-1 flex flex-col items-center">
                          <p className="text-sm font-medium text-gray-200">
                            You scored <strong className="text-blue-400 font-bold">{scoreCount}</strong> out of <strong className="font-semibold text-white">{activeQuestions.length}</strong>
                          </p>
                          <span className="text-[10px] text-gray-400 block font-mono uppercase tracking-wider">
                            Pass Mark is 80% or above (equivalent to UK standards)
                          </span>
                        </div>

                        <div className="flex gap-2.5 justify-center pt-2">
                          <button
                            id="results-restart"
                            onClick={() => startNewTest(quizMode, quizCategory)}
                            className="bg-[#2563EB] hover:bg-blue-700 text-white py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-widest transition cursor-pointer shadow-xs"
                          >
                            <RotateCw className="h-4 w-4" /> Try Again
                          </button>
                          <button
                            id="results-home-exit"
                            onClick={() => {
                              setQuizActive(false);
                            }}
                            className="bg-black hover:bg-zinc-800 text-slate-200 py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-widest border border-[#E4E5E6]/30 transition cursor-pointer shadow-xs"
                          >
                            Return Home
                          </button>
                        </div>
                      </div>

                      {/* Detail list review */}
                      <div className="space-y-4" id="results-review-list">
                        <h4 className="text-[10px] font-bold text-gray-400 font-mono uppercase tracking-widest">
                          Question Review List
                        </h4>

                        <div className="space-y-3" id="detailed-results-accordion">
                          {activeQuestions.map((q, qIndex) => {
                            const isCorrect = selectedAnswers[q.id] === q.correctIndex;
                            return (
                              <div
                                key={q.id}
                                id={`review-item-${q.id}`}
                                className={`p-4 border ${
                                  isCorrect ? "border-[#E4E5E6] bg-white" : "border-[#E4E5E6] bg-[#F8F9FA]"
                                } space-y-3`}
                              >
                                <div className="flex justify-between items-start gap-3">
                                  <div className="flex items-start gap-2.5">
                                    <div className="mt-1">
                                      {isCorrect ? (
                                        <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                                      ) : (
                                        <XCircle className="h-4 w-4 text-gray-400" />
                                      )}
                                    </div>
                                    <div className="space-y-1">
                                      <span className="text-[10px] font-mono text-gray-450 uppercase tracking-wider block">
                                        Question {qIndex + 1} ({q.category})
                                      </span>
                                      <p className="text-xs font-bold text-slate-800 leading-normal">
                                        <InteractiveText text={q.question} />
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-white p-3 text-xs border border-[#E4E5E6] space-y-2">
                                  {/* Wrong answer callout if any */}
                                  {!isCorrect && selectedAnswers[q.id] !== undefined && (
                                    <p className="text-red-700 font-medium font-sans">
                                      You chose: <span className="italic font-semibold">"{q.options[selectedAnswers[q.id]]}"</span>
                                    </p>
                                  )}
                                  <p className="text-[#2563EB] font-bold">
                                    Correct: <span className="italic font-semibold">"{q.options[q.correctIndex]}"</span>
                                  </p>
                                  <hr className="border-[#E4E5E6]" />
                                  
                                  {/* Explanation */}
                                  <div className="flex justify-between items-start gap-2 pt-1">
                                    <div>
                                      <span className="text-[9px] uppercase font-bold text-gray-400 font-mono block mb-0.5">
                                        Explanation
                                      </span>
                                      <p className="text-[#1F2937] leading-relaxed">
                                        <InteractiveText text={q.b1Explanation} />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}

          </AnimatePresence>
        </main>

        {/* Outer navigation tab block (sticky layout, disabled during full test) */}
        {!quizActive && (
          <footer className="border-t border-[#E4E5E6] bg-[#F8F9FA] flex py-2 shrink-0 select-none" id="app-viewport-footer">
            <button
               id="footer-tab-home"
               onClick={() => {
                 setActiveTab("home");
               }}
               className={`flex-1 flex flex-col items-center gap-1 py-1 text-center transition cursor-pointer ${
                 activeTab === "home" ? "text-slate-900 font-extrabold" : "text-gray-400 hover:text-black"
               }`}
            >
              <Home className={`h-5 w-5 ${activeTab === "home" ? "text-[#2563EB]" : ""}`} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Practice</span>
            </button>
            <button
               id="footer-tab-signs"
               onClick={() => {
                 setActiveTab("signs");
               }}
               className={`flex-1 flex flex-col items-center gap-1 py-1 text-center transition cursor-pointer ${
                 activeTab === "signs" ? "text-slate-900 font-extrabold" : "text-gray-400 hover:text-black"
               }`}
            >
              <BookOpen className={`h-5 w-5 ${activeTab === "signs" ? "text-[#2563EB]" : ""}`} />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Signs Guide</span>
            </button>
            <button
               id="footer-tab-study"
               onClick={() => {
                 setActiveTab("study");
               }}
               className={`flex-1 flex flex-col items-center gap-1 py-1 text-center transition cursor-pointer ${
                 activeTab === "study" ? "text-slate-900 font-extrabold" : "text-gray-400 hover:text-black"
               }`}
            >
              <div className="relative">
                <Bookmark className={`h-5 w-5 ${activeTab === "study" ? "text-[#2563EB]" : ""}`} />
                {starredWords.length > 0 && (
                  <span className="absolute -top-1 -right-2 leading-none text-[8px] bg-[#2563EB] text-white font-mono font-bold px-1 py-0.5 border border-white">
                    {starredWords.length}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Study Hub</span>
            </button>
          </footer>
        )}
      </div>

      {/* Safety popup confirm before quitting mid-test */}
      <AnimatePresence>
        {showQuitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs" id="confirm-quit-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-6 border border-[#E4E5E6] rounded-xl max-w-sm w-full space-y-4 text-center select-none shadow-2xl"
              id="confirm-quit-card"
            >
              <div className="mx-auto w-12 h-12 border border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center rounded-lg">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-black text-md">Quit Active Practice Run?</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  Your active correct counts and active timer statistics on this mock test will not be saved. Are you sure you want to exit?
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  id="confirm-quit-yes"
                  onClick={() => handleQuitTest(true)}
                  className="flex-1 bg-white border border-[#E4E5E6] text-red-600 hover:text-red-750 hover:border-black py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition cursor-pointer"
                >
                  Yes, Quit
                </button>
                <button
                  id="confirm-quit-no"
                  onClick={() => handleQuitTest(false)}
                  className="flex-1 bg-[#1F2937] text-white hover:bg-[#2563EB] py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition cursor-pointer"
                >
                  Keep Going
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-Up Bottom Drawer for Vocabulary dictionary */}
      <VocabularyModal />
    </div>
  );
}

// Global App wrapper with providers
export default function App() {
  return (
    <VocabularyProvider>
      <MainAppContent />
    </VocabularyProvider>
  );
}
