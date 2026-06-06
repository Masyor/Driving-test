import React from "react";
import { useVocabulary } from "../context/VocabularyContext";
import { Trash2, Calendar } from "lucide-react";

export const ScoreHistory: React.FC = () => {
  const { scoreHistory, clearHistory } = useVocabulary();

  if (scoreHistory.length === 0) {
    return (
      <div className="text-center py-8 px-4 border border-[#E4E5E6] bg-white" id="empty-history">
        <p className="text-sm text-gray-500 italic">No tests completed yet. Your mock exam scores will appear here!</p>
      </div>
    );
  }

  // Calculate statistics
  const totalTests = scoreHistory.length;
  const passedTests = scoreHistory.filter((item) => item.passed).length;
  const passRatePercentage = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;
  
  const totalQuestions = scoreHistory.reduce((sum, item) => sum + item.totalQuestions, 0);
  const totalCorrect = scoreHistory.reduce((sum, item) => sum + item.score, 0);
  const averageAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="space-y-4 font-sans" id="score-history-container">
      {/* Stats Cards Dashboard */}
      <div className="grid grid-cols-3 gap-3" id="stats-dashboard">
        <div className="bg-[#F8F9FA] border border-[#E4E5E6] p-3 text-center space-y-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">
            Total Exams
          </span>
          <p className="text-2xl text-[#1F2937] font-bold">{totalTests}</p>
        </div>

        <div className="bg-[#EFF6FF] border border-[#2563EB]/40 p-3 text-center space-y-1">
          <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest block font-mono">
            Pass Rate
          </span>
          <p className="text-2xl text-[#2563EB] font-bold">{passRatePercentage}%</p>
        </div>

        <div className="bg-white border border-[#E4E5E6] p-3 text-center space-y-1">
          <span className="text-[10px] font-bold text-black uppercase tracking-widest block font-mono">
            Accuracy
          </span>
          <p className="text-2xl text-black font-bold">{averageAccuracy}%</p>
        </div>
      </div>

      {/* History table list */}
      <div className="space-y-2 max-h-60 overflow-y-auto pr-1" id="score-history-scroll">
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-mono mb-3">
          Past Test Runs
        </h4>

        {scoreHistory.map((attempt) => (
          <div
            key={attempt.id}
            id={`attempt-row-${attempt.id}`}
            className="flex items-center justify-between p-3 border border-[#E4E5E6] bg-white hover:border-[#2563EB] transition"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 ${
                  attempt.passed ? "bg-[#2563EB]" : "bg-gray-400"
                }`}
                title={attempt.passed ? "Passed" : "Not yet passed"}
              />
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-gray-700 capitalize">
                    {attempt.mode} Mode
                  </span>
                  {attempt.category && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 border border-[#E4E5E6] bg-[#F8F9FA] text-gray-600 scale-90 uppercase tracking-widest">
                      {attempt.category}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-mono">
                  <Calendar className="h-3 w-3" />
                  <span>{attempt.date}</span>
                </div>
              </div>
            </div>

            {/* Score pill */}
            <div className="text-right">
              <span
                className={`inline-block px-2.5 py-1 text-xs font-mono font-bold border ${
                  attempt.passed
                    ? "bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]/45"
                    : "bg-[#F8F9FA] text-gray-600 border-[#E4E5E6]"
                }`}
              >
                {attempt.score} / {attempt.totalQuestions}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reset button bar */}
      <div className="flex justify-end pt-1">
        <button
          id="clear-logs-btn"
          onClick={() => {
            if (confirm("Are you sure you want to delete all score records?")) {
              clearHistory();
            }
          }}
          className="text-xs text-red-600 hover:text-red-750 font-bold uppercase tracking-widest font-mono flex items-center gap-1 transition cursor-pointer"
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Clear History</span>
        </button>
      </div>
    </div>
  );
};
