import React from "react";
import { TrafficSignRenderer } from "./TrafficSignRenderer";
import { BookOpen, HelpCircle } from "lucide-react";
import { InteractiveText } from "./InteractiveText";

interface SignItem {
  id: string;
  type: 'speed_30' | 'speed_60' | 'no_entry' | 'give_way' | 'one_way' | 'national_speed' | 'zebra_crossing' | 'stop';
  name: string;
  meaning: string;
  category: string;
}

const signDatabase: SignItem[] = [
  {
    id: "s1",
    type: "stop",
    name: "Stop Sign",
    meaning: "You must stop completely behind the line. Look both ways and only drive when it is safe.",
    category: "Regulatory"
  },
  {
    id: "s2",
    type: "give_way",
    name: "Give Way",
    meaning: "You must let other vehicles go first. Slow down and check traffic before moving forward.",
    category: "Regulatory"
  },
  {
    id: "s3",
    type: "no_entry",
    name: "No Entry",
    meaning: "You must not drive past this sign. Cars are blocked from driving into this road.",
    category: "Prohibitive"
  },
  {
    id: "s4",
    type: "speed_30",
    name: "30 mph Speed Limit",
    meaning: "The maximum speed limit is 30 miles per hour. This is normal in towns and cities with street lights.",
    category: "Speed Limits"
  },
  {
    id: "s5",
    type: "speed_60",
    name: "60 mph Speed Limit",
    meaning: "The maximum speed limit is 60 miles per hour. Often used on single country roads.",
    category: "Speed Limits"
  },
  {
    id: "s6",
    type: "national_speed",
    name: "National Speed Limit Applies",
    meaning: "The national speed limit applies here. This means 60 mph on single roads and 70 mph on dual carriageways.",
    category: "Speed Limits"
  },
  {
    id: "s7",
    type: "one_way",
    name: "One Way",
    meaning: "You must only drive in the direction of the arrow. All vehicles go in the same direction.",
    category: "Information"
  },
  {
    id: "s8",
    type: "zebra_crossing",
    name: "Zebra Crossing",
    meaning: "A safe place marked on the road where pedestrians have priority. Prepare to stop.",
    category: "Pedestrian Safety"
  }
];

export const RoadSignsGuide: React.FC = () => {
  return (
    <div className="space-y-6" id="signs-guide-container">
      {/* Intro Header */}
      <div className="bg-white p-6 border border-[#E4E5E6]" id="signs-intro">
        <div className="flex items-start gap-4">
          <div className="border border-black p-2 text-black shrink-0 bg-[#F8F9FA]">
            <BookOpen className="h-5 w-5 text-[#2563EB]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#1F2937]">UK Road Signs Visual Guide</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              In the UK, road sign shapes tell you what to expect. 
              <strong className="text-black font-semibold"> Circle signs</strong> give orders/rules, 
              <strong className="text-[#2563EB] font-semibold"> Triangle signs</strong> warn of hazards/dangers, and 
              <strong className="text-gray-700 font-semibold"> Square signs</strong> provide information.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Signs */}
      <div className="grid gap-4 sm:grid-cols-2" id="signs-interactive-grid">
        {signDatabase.map((sign) => (
          <div
            key={sign.id}
            id={`sign-card-${sign.id}`}
            className="flex items-center gap-4 border border-[#E4E5E6] bg-white p-4 hover:border-[#2563EB] transition-all duration-200"
          >
            {/* Visual Sign Component */}
            <div className="bg-[#F8F9FA] p-2 border border-[#E4E5E6] flex items-center justify-center shrink-0">
              <TrafficSignRenderer type={sign.type} size={80} />
            </div>

            {/* Informative description */}
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-bold text-sm text-[#1F2937] tracking-tight capitalize">
                  {sign.name}
                </h4>
                <span className="bg-[#EFF6FF] border border-[#2563EB]/40 text-[9px] uppercase tracking-wider font-semibold text-[#2563EB] px-1.5 py-0.5">
                  {sign.category}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pr-1 font-sans">
                <InteractiveText text={sign.meaning} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Tip */}
      <div className="flex items-center gap-3 bg-[#EFF6FF] p-4 border border-[#E4E5E6]" id="signs-interactive-tip">
        <div className="text-[#2563EB]">
          <HelpCircle className="h-4 w-4" />
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-bold text-[#1F2937]">Provided definition Tip:</span> Words with <span className="border-b-2 border-[#2563EB] bg-[#EFF6FF] font-semibold text-[#1F2937] px-0.5">blue underlines</span> can be clicked to read provided definitions anytime!
        </p>
      </div>
    </div>
  );
};
