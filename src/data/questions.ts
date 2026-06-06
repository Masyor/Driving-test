import { Question } from "../types";

export const roadQuestions: Question[] = [
  {
    id: "q1",
    category: "Road Signs",
    question: "What must you do when you see a Stop sign at a junction?",
    options: [
      "Slow down and check if it is safe.",
      "Stop completely behind the line, wait until it is safe, then proceed.",
      "Drive through quickly if no cars are coming.",
      "Keep driving at your current speed."
    ],
    correctIndex: 1,
    b1Explanation: "A Stop sign means you must make a complete stop. You cannot just slow down or slip past. Only go when there are no other vehicles or pedestrians coming.",
    signType: "stop"
  },
  {
    id: "q2",
    category: "Speed Limits",
    question: "What is the national speed limit for cars on a dual carriageway in the UK unless a sign shows a different limit?",
    options: [
      "30 mph",
      "50 mph",
      "60 mph",
      "70 mph"
    ],
    correctIndex: 3,
    b1Explanation: "If there are no speed limit signs, the speed limit for cars on a dual carriageway is 70 mph. On a single carriageway, it is 60 mph.",
    signType: "speed_60"
  },
  {
    id: "q3",
    category: "Road Signs",
    question: "What does this round, white sign with a black diagonal stripe mean?",
    options: [
      "No speed limit is active on this road.",
      "Free parking area ahead.",
      "The national speed limit applies here.",
      "Drive as fast as you want."
    ],
    correctIndex: 2,
    b1Explanation: "This sign shows that the national speed limit applies. For cars on single carriageway roads, this is 60 mph. On dual carriageways and motorways, it is 70 mph.",
    signType: "national_speed"
  },
  {
    id: "q4",
    category: "Safety & Hazards",
    question: "What should you do as you approach a zebra crossing and see a pedestrian waiting to cross?",
    options: [
      "Sound your horn to tell them to stay back.",
      "Drive past quickly before they step onto the road.",
      "Slow down and prepare to stop to let them cross.",
      "Wave your hand to tell them to cross the road."
    ],
    correctIndex: 2,
    b1Explanation: "When someone is waiting at a zebra crossing, you should slow down and stop safely behind the lines. Let them cross completely. Do not wave them across, because other vehicles might not stop.",
    signType: "zebra_crossing"
  },
  {
    id: "q5",
    category: "Safety & Hazards",
    question: "What is a main danger of driving too close to the vehicle in front of you (tailgating)?",
    options: [
      "Your engine will get too hot from the exhaust ahead.",
      "You cannot see the road signs on the left side.",
      "You will crash if the vehicle in front stops suddenly.",
      "Your headlights will shine too brightly."
    ],
    correctIndex: 2,
    b1Explanation: "Driving too close is called tailgating. It is very dangerous because you do not have enough braking distance if the vehicle in front brakes suddenly."
  },
  {
    id: "q6",
    category: "Road Signs",
    question: "What does a triangle-shaped sign pointing downwards tell you to do?",
    options: [
      "You have priority to go first.",
      "You must give way to other vehicles.",
      "Do not stop under any conditions.",
      "Accelerate and join the road ahead."
    ],
    correctIndex: 1,
    b1Explanation: "A downward pointing triangle is a give way sign. It tells you to stop or slow down to let other vehicles go first at junctions.",
    signType: "give_way"
  },
  {
    id: "q7",
    category: "Safety & Hazards",
    question: "On a motorway, when should you drive in the right-hand lanes?",
    options: [
      "When you want to drive at the maximum allowed speed.",
      "When you are overtaking slower vehicles.",
      "When you want to enjoy a better view.",
      "When your vehicle has large and heavy cargo."
    ],
    correctIndex: 1,
    b1Explanation: "The left lane is your normal driving lane on a motorway. The middle and right lanes are only for overtaking. Once you finish overtaking, you must safely move back to the left lane."
  },
  {
    id: "q8",
    category: "Safety & Hazards",
    question: "How does wet weather affect your vehicle's braking distance?",
    options: [
      "It reduces the stopping distance by half.",
      "It makes the braking distance twice as long (double).",
      "It has no effect on your stopping distance.",
      "It makes your brakes work faster."
    ],
    correctIndex: 1,
    b1Explanation: "When the road is wet, tyres have less grip. Your braking distance will be twice as long (double) as on dry roads. You must keep a larger gap from the vehicle ahead."
  },
  {
    id: "q9",
    category: "Safety & Hazards",
    question: "What is the 'two-second rule' used for on dry, clear roads?",
    options: [
      "The time you have to change gears when turning.",
      "The time you must wait after the traffic light turns green.",
      "The safe time gap you should keep from the vehicle in front.",
      "The maximum time you can look at your dashboard."
    ],
    correctIndex: 2,
    b1Explanation: "The two-second rule helps you keep a safe gap from the vehicle in front. It gives you enough time to react and stop safely if they brake suddenly."
  },
  {
    id: "q10",
    category: "Safety & Hazards",
    question: "You want to go straight ahead (second exit) at a roundabout. When should you turn on your left indicator?",
    options: [
      "As you enter the roundabout.",
      "Just after you pass the exit before the one you want.",
      "Keep it on during the entire roundabout journey.",
      "You do not need to indicate at all."
    ],
    correctIndex: 1,
    b1Explanation: "When going straight, do not signal as you enter. Put your left indicator on just after you pass the exit before the one you want (usually the first exit)."
  },
  {
    id: "q11",
    category: "Safety & Hazards",
    question: "What should you do if the red lights start flashing at a railway level crossing?",
    options: [
      "Speed up to cross the tracks before the barrier starts to move down.",
      "Drive around the barrier if it is only halfway down.",
      "Stop safely behind the white line and wait.",
      "Sound your horn to alert the train driver."
    ],
    correctIndex: 2,
    b1Explanation: "Flashing red lights mean you must stop. A train is coming. Wait behind the stop line and barrier until the lights go off and the barrier lifts."
  },
  {
    id: "q12",
    category: "Safety & Hazards",
    question: "When are you allowed to hold a handheld smartphone while driving a vehicle?",
    options: [
      "Only when you are stopped at red traffic lights.",
      "Only in a genuine, life-threatening emergency to call 999 where stopping is unsafe.",
      "Whenever you are driving with a hands-free headset.",
      "When you are driving slow on a slip road."
    ],
    correctIndex: 1,
    b1Explanation: "It is illegal to hold a mobile phone while driving. You can only do this in a real emergency if you cannot safely stop your vehicle first."
  },
  {
    id: "q13",
    category: "Safety & Hazards",
    question: "What is a 'blind spot' when you are sitting in the driver's seat of a vehicle?",
    options: [
      "An area covered by rain water on your windscreen.",
      "An area around your vehicle that you cannot see in your mirrors.",
      "A dangerous junction with no stop signs.",
      "A part of the passenger seat where luggage blocks your view."
    ],
    correctIndex: 1,
    b1Explanation: "A blind spot is an area you cannot see in your mirrors. You must look over your shoulders to check these spots before turning or changing lanes."
  },
  {
    id: "q14",
    category: "Pedestrians",
    question: "What does a flashing amber light mean at a pelican crossing?",
    options: [
      "Stop and wait for the light to show red.",
      "You must give way to pedestrians who are still crossing the road.",
      "Speed up and drive across before the light changes.",
      "Pedestrians are not allowed to step onto the crossing."
    ],
    correctIndex: 1,
    b1Explanation: "At a pelican crossing, the flashing amber light means you must let any pedestrian finish crossing. If there are no pedestrians on the crossing, you can drive through slowly."
  },
  {
    id: "q15",
    category: "Speed Limits",
    question: "There are street lights on a road but no speed limit signs. What is the usual speed limit here for a car?",
    options: [
      "30 mph",
      "40 mph",
      "55 mph",
      "60 mph"
    ],
    correctIndex: 0,
    b1Explanation: "In the UK, if there are street lights but no speed limit signs, the speed limit is usually 30 mph. This normally means you are driving in a built-up area (town or city).",
    signType: "speed_30"
  },
  {
    id: "q16",
    category: "Safety & Hazards",
    question: "How much longer does your stopping distance become when driving in icy or freezing conditions?",
    options: [
      "Twice as long (double)",
      "Three times as long",
      "Five times as long",
      "Up to ten times as long"
    ],
    correctIndex: 3,
    b1Explanation: "Icy roads are extremely slippery. Your tyres have very little grip, so it can take up to ten times longer to stop your vehicle compared to dry roads. Always drive extremely slowly in ice."
  },
  {
    id: "q17",
    category: "Safety & Hazards",
    question: "What is the main purpose of a slip road when you are joining a motorway?",
    options: [
      "To allow you to overtake slow vehicles on the left.",
      "To build up your speed to match the speed of motorway traffic.",
      "To give you space to check your text messages.",
      "To allow you to park your car safely."
    ],
    correctIndex: 1,
    b1Explanation: "A slip road is used to build up your speed so you can join the motorway smoothly. Try to match the speed of the traffic already on the motorway before merging."
  },
  {
    id: "q18",
    category: "Safety & Hazards",
    question: "Who has priority (the legal right to go first) at an unmarked crossroads?",
    options: [
      "The driver travelling on the wider road.",
      "No one has priority; you must proceed with extreme caution.",
      "The larger vehicle.",
      "The driver who is turning right."
    ],
    correctIndex: 1,
    b1Explanation: "At an unmarked crossroads, no specific road or vehicle has priority. Drivers from all directions must slow down, look carefully, and only go when they are completely sure it is safe."
  },
  {
    id: "q19",
    category: "Safety & Hazards",
    question: "On a UK motorway, what do red reflective studs (cat's eyes) show you?",
    options: [
      "The boundary between the left lane and the hard shoulder.",
      "The lane markings between the main traffic lanes.",
      "The safety gap from the vehicle in front of you.",
      "The border with the central reservation on the far right."
    ],
    correctIndex: 0,
    b1Explanation: "Red reflective studs are placed on the left side of the motorway. They mark the edge of the running lane next to the hard shoulder, helping you see the boundary in fog or dark conditions."
  },
  {
    id: "q20",
    category: "Safety & Hazards",
    question: "On a motorway, what do amber reflective studs show you?",
    options: [
      "The dividing line between normal running lanes.",
      "The boundary next to the slip road exits.",
      "The edge next to the central reservation on the far right.",
      "The lane indicator for construction zones."
    ],
    correctIndex: 2,
    b1Explanation: "Amber studs are on the right-hand edge of the motorway, marking the boundary line next to the central preservation barrier."
  },
  {
    id: "q21",
    category: "Safety & Hazards",
    question: "When are you allowed to sound your horn in a built-up area in the UK?",
    options: [
      "At any time, to complain about other bad drivers.",
      "Only to warn other road users of danger or of your presence.",
      "Only between 11:30 PM and 7:00 AM.",
      "To let your friends know you have arrived outside their house."
    ],
    correctIndex: 1,
    b1Explanation: "You should only sound your horn to warn others of danger or to make them aware of your presence. It is illegal to use your horn in built-up areas between 11:30 PM and 7:00 AM unless another vehicle poses an active threat."
  },
  {
    id: "q22",
    category: "Safety & Hazards",
    question: "What should you do if a doctor prescribes medicine that makes you feel sleepy?",
    options: [
      "Drive only if you are accompanied by an adult.",
      "You should not drive a car while taking it.",
      "Limit your driving to short journeys close to home.",
      "Drink coffee before driving to counteract the sleepiness."
    ],
    correctIndex: 1,
    b1Explanation: "If medicine makes you feel drowsy or sleepy, it is highly dangerous to drive. Your reaction times will be extremely slow. You must not get behind the wheel."
  },
  {
    id: "q23",
    category: "Safety & Hazards",
    question: "If your vehicle breaks down on a motorway and you must walk to find an emergency telephone, which way should you go?",
    options: [
      "In the direction shown by the arrows on the roadside posts.",
      "Walk back to the closest service station on foot.",
      "Walk directly across the lanes to the other side.",
      "Walk in the opposite direction of the traffic."
    ],
    correctIndex: 0,
    b1Explanation: "Emergency telephone posts are located at the back of the hard shoulder. There are small posts close by with arrows pointing in the direction of the nearest telephone."
  },
  {
    id: "q24",
    category: "Road Signs",
    question: "What does a sign with a red circle outline generally mean?",
    options: [
      "An information warning about upcoming hazards.",
      "An order or prohibition that you must obey.",
      "A recommended route for heavy motor lorries.",
      "A scenic tourist destination ahead."
    ],
    correctIndex: 1,
    b1Explanation: "Circle signs with red borders give orders. They tell you things you must not do, such as exceeding speed limits or entering blocked roads."
  },
  {
    id: "q25",
    category: "Safety & Hazards",
    question: "What should you do when you are following a large lorry in wet weather?",
    options: [
      "Drive very close behind it to stay in its wind shelter.",
      "Stay well back out of the water spray to see clearly.",
      "Try to overtake it immediately on the inside lane.",
      "Turn on your high-beam headlights to pierce the mist."
    ],
    correctIndex: 1,
    b1Explanation: "Large vehicles kick up a lot of water spray on wet roads, which completely blocks your view. Clear driving visibility is preserved by keeping a large gap behind them."
  },
  {
    id: "q26",
    category: "Safety & Hazards",
    question: "What does a hatched yellow box junction (box junction) mean on the road?",
    options: [
      "You must always stop inside the box before moving.",
      "You can enter it at any time to wait for a green light.",
      "You must not enter it unless your exit road is clear.",
      "It is a parking zone for emergency vehicles only."
    ],
    correctIndex: 2,
    b1Explanation: "A yellow box junction has diagonal yellow lines. You must keep it clear of stationary traffic. Only enter if your exit road is clear, or if you are turning right and waiting for oncoming traffic to pass."
  },
  {
    id: "q27",
    category: "Safety & Hazards",
    question: "When are you allowed to pass a vehicle on its left (undertake) on a multi-lane road?",
    options: [
      "Whenever you want to drive faster than the vehicle on your right.",
      "When the vehicle ahead is signaling to turn right or traffic is moving in slow queues.",
      "During early morning hours when roads are empty.",
      "Only when driving on a single-lane country path."
    ],
    correctIndex: 1,
    b1Explanation: "In the UK, you should normally overtake on the right. You can only pass on the left if the vehicle in front is waiting to turn right, or if cars in the right-hand lane are moving slower than you in congested queues."
  },
  {
    id: "q28",
    category: "Safety & Hazards",
    question: "What should you do if you are driving on a motorway and begin to feel very tired or sleepy?",
    options: [
      "Increase your speed to reach your destination faster.",
      "Leave at the next exit or find a service area to stop and rest safely.",
      "Open your window wider and turn up the radio very loud.",
      "Drive on the hard shoulder to avoid other cars."
    ],
    correctIndex: 1,
    b1Explanation: "Never ignore sleepiness while driving. Leave the motorway at the next exit, pull over in a safe parking space, drink some coffee, and rest until you feel alert again."
  },
  {
    id: "q29",
    category: "Pedestrians",
    question: "How should you drive past a horse and its rider on a narrow country road?",
    options: [
      "Drive past quickly to get out of their way.",
      "Drive slowly, leave a wide gap, and keep your engine quiet.",
      "Tap your horn lightly to warn the horse of your presence.",
      "Flash your headlights so the rider looks at you."
    ],
    correctIndex: 1,
    b1Explanation: "Horses are very sensitive animals and can easily get scared by loud noises or fast cars. Slow down to a crawl, leave a gap of at least 2 metres, and do not make loud engine sounds."
  },
  {
    id: "q30",
    category: "Safety & Hazards",
    question: "On a dual carriageway, what does a solid white line painted along the left side of the road mark?",
    options: [
      "A boundary showing the edge of the hard shoulder or carriageway.",
      "An area where parking is allowed for up to 2 hours.",
      "A pedestrian footpath zone.",
      "A hazard warning line that you cannot cross."
    ],
    correctIndex: 0,
    b1Explanation: "A solid white line along the edge of the road is called the edge line. It shows you where the main carriageway ends and the shoulder starts, which is very helpful in dark or bad weather."
  },
  {
    id: "q31",
    category: "Pedestrians",
    question: "At a pedestrian crossing, what does a flashing green man signal mean for pedestrians?",
    options: [
      "They can start to cross the road now.",
      "If they are already crossing they should continue; if on the pavement, they should not start to cross.",
      "They must run as fast as they can.",
      "Motorists have the green light to drive."
    ],
    correctIndex: 1,
    b1Explanation: "The flashing green man is a warning period. Pedestrians already crossing have priority to finish. People still waiting on the pavement must not step onto the road yet."
  },
  {
    id: "q32",
    category: "Safety & Hazards",
    question: "What should you do if you miss your scheduled exit on a busy motorway?",
    options: [
      "Put your car in reverse on the hard shoulder.",
      "Continue driving to the next exit and leave there.",
      "Do a three-point turn immediately across the lanes.",
      "Stop in the right-hand lane and wait for a gap to reverse."
    ],
    correctIndex: 1,
    b1Explanation: "It is illegal and extremely dangerous to reverse, do a U-turn, or stop on a motorway. If you miss your exit, you must keep driving normally until the next junction."
  },
  {
    id: "q33",
    category: "Safety & Hazards",
    question: "What is the main danger of driving through deep puddles of water at high speeds?",
    options: [
      "Your tyres could lose contact with the road completely (aquaplaning).",
      "The water will enter your fuel tank and stall the engine.",
      "Your car paint will be damaged by mud.",
      "Your dashboard lights will display errors."
    ],
    correctIndex: 0,
    b1Explanation: "Driving fast on deep water can cause aquaplaning. Your tyres float on top of a thin layer of water, meaning you lose all steering and braking control. Slow down before reaching puddles."
  },
  {
    id: "q34",
    category: "Road Signs",
    question: "What does a circular blue sign with a white arrow pointing right mean?",
    options: [
      "No vehicles are allowed to turn right.",
      "Mandatory turn ahead in the direction of the arrow.",
      "Look for oncoming traffic on the right.",
      "A car park is located on the right."
    ],
    correctIndex: 1,
    b1Explanation: "A blue circle tells you a mandatory instruction. An arrow pointing right means you must turn right or follow that path direction."
  },
  {
    id: "q35",
    category: "Safety & Hazards",
    question: "When are you allowed to use the hard shoulder on a motorway?",
    options: [
      "To park your car for a short sleep or rest.",
      "In an emergency or if your vehicle breaks down.",
      "To overtake slower vehicles of heavy cargo.",
      "To check your mobile phone maps."
    ],
    correctIndex: 1,
    b1Explanation: "The hard shoulder is only for real emergencies and breakdown conditions. It is extremely dangerous to stop on it unless your car is broken and you cannot drive further."
  },
  {
    id: "q36",
    category: "Pedestrians",
    question: "What is the main difference between a Toucan crossing and a Pelican crossing?",
    options: [
      "Toucan crossings are controlled by police officers.",
      "Toucan crossings can be used by both pedestrians and cyclists.",
      "Toucan crossings do not have any flashing lights.",
      "Toucan crossings are only found on motorways."
    ],
    correctIndex: 1,
    b1Explanation: "A Toucan crossing allows cyclists to ride across alongside pedestrians. Pelican crossings are designed for pedestrians only."
  },
  {
    id: "q37",
    category: "Safety & Hazards",
    question: "What type of crossing uses special sensors to detect if pedestrians are still on the crossing?",
    options: [
      "A Zebra crossing",
      "A Pelican crossing",
      "A Puffin crossing",
      "A Level crossing"
    ],
    correctIndex: 2,
    b1Explanation: "Puffin crossings have smart overhead sensors. They keep the traffic light red until the pedestrians have safely finished crossing the road."
  },
  {
    id: "q38",
    category: "Safety & Hazards",
    question: "What is the legal minimum tread depth of automobile tyres for cars in the UK?",
    options: [
      "1.0 mm",
      "1.6 mm",
      "2.5 mm",
      "4.0 mm"
    ],
    correctIndex: 1,
    b1Explanation: "In the UK, car tyres must have a minimum tread depth of 1.6 mm across the central three-quarters of the tyre and around the entire circumference."
  },
  {
    id: "q39",
    category: "Safety & Hazards",
    question: "When must you notify the DVLA of any changes regarding your health?",
    options: [
      "Only when your driving instructor advises it.",
      "When you develop any medical condition that could affect your ability to drive safely.",
      "Only after you are involved in a traffic collision.",
      "Whenever you visit the doctor for a common cold."
    ],
    correctIndex: 1,
    b1Explanation: "You are legally required to report any medical conditions to the DVLA that could affect your driving safety, such as epilepsy, severe diabetes, or serious eyesight problems."
  },
  {
    id: "q40",
    category: "Safety & Hazards",
    question: "Which document must you have before you can drive legally on public roads in the UK?",
    options: [
      "A valid vehicle handbook.",
      "An active vehicle logbook (V5C).",
      "A valid driving licence and valid third-party insurance cover.",
      "A certificate of vehicle manufacturing."
    ],
    correctIndex: 2,
    b1Explanation: "At a minimum, you must hold a valid driving licence and have at least third-party insurance to drive on the road legally in the UK."
  },
  {
    id: "q41",
    category: "Safety & Hazards",
    question: "What is a cover note in relation to motor insurance?",
    options: [
      "A note from your doctor allowing you to drive.",
      "A temporary document showing you have active insurance before your long-term certificate arrives.",
      "An explanation of your insurance renewal costs.",
      "A letter detailing a previous accident claim."
    ],
    correctIndex: 1,
    b1Explanation: "A cover note is a temporary document that provides legal proof of third-party or comprehensive insurance cover while you wait for the full policy documents to be processed and issued."
  },
  {
    id: "q42",
    category: "Safety & Hazards",
    question: "When is it acceptable to drive a car without a valid MOT certificate?",
    options: [
      "When you are only driving to close local shops.",
      "When driving directly to a pre-booked MOT test appointment.",
      "If you are a newly qualified learner driver.",
      "When the vehicle is less than five years old."
    ],
    correctIndex: 1,
    b1Explanation: "In the UK, you can only drive a car without an MOT if you are travelling directly to a pre-booked MOT test center for an appointment."
  },
  {
    id: "q43",
    category: "Safety & Hazards",
    question: "What is the typical stopping distance (thinking + braking) of a car travelling at 30 mph on a dry road?",
    options: [
      "12 metres (40 feet)",
      "23 metres (75 feet)",
      "36 metres (120 feet)",
      "53 metres (175 feet)"
    ],
    correctIndex: 1,
    b1Explanation: "At 30 mph, the typical overall stopping distance is 23 metres (approx 75 feet). This is comprised of 9 metres of thinking distance and 14 metres of braking distance."
  },
  {
    id: "q44",
    category: "Safety & Hazards",
    question: "What is the typical overall stopping distance of a car travelling at 70 mph on a dry road?",
    options: [
      "53 metres",
      "75 metres",
      "96 metres (315 feet)",
      "120 metres"
    ],
    correctIndex: 2,
    b1Explanation: "At 70 mph on a dry road, a standard car takes about 96 metres (approx 315 feet) to come to a complete stop, which is roughly the length of a football pitch."
  },
  {
    id: "q45",
    category: "Safety & Hazards",
    question: "What should you do before starting a journey in snowy weather conditions?",
    options: [
      "Turn on your fog lights immediately.",
      "Clear any snow from all windows, mirrors, lights, and your vehicle's roof.",
      "Overinflate your tyres to get better grip.",
      "Drive faster to keep your engine warm."
    ],
    correctIndex: 1,
    b1Explanation: "You must ensure snow is cleared from your lights, mirrors, and windows for clear vision. You must also clear snow from the roof so it does not slide down onto your windscreen during braking or fly off onto other cars."
  },
  {
    id: "q46",
    category: "Safety & Hazards",
    question: "What should you do if your anti-lock brakes (ABS) warning light stays lit while you are driving?",
    options: [
      "Stop immediately and call for a tow vehicle.",
      "Drive extra close to other cars so you can use them to help stop.",
      "Have the brakes checked by a professional mechanic as soon as possible.",
      "Ignore it; it is just a common electrical error."
    ],
    correctIndex: 2,
    b1Explanation: "If the ABS light stays on, your main brakes will still work, but the anti-lock assist control might fail in an emergency. You should get it inspected by a garage quickly."
  },
  {
    id: "q47",
    category: "Safety & Hazards",
    question: "How should you use your headlights in dense daytime fog where visibility is under 100 metres?",
    options: [
      "Turn on your high-beam headlights to see through the fog.",
      "Keep only your side lights turned on.",
      "Turn on your dipped headlights and rear fog lights.",
      "Do not use any lights during the day."
    ],
    correctIndex: 2,
    b1Explanation: "In dense fog, you must turn on dipped headlights and fog lights. High beams will reflect back off the fog and blind you, making it harder to see. Turn off fog lights once visibility improves."
  },
  {
    id: "q48",
    category: "Safety & Hazards",
    question: "Who is legally responsible for ensuring a child under 14 years old wears a seatbelt in a passenger car?",
    options: [
      "The child's parents, regardless of where they are.",
      "The driver of the vehicle.",
      "The front-seat passenger.",
      "The child themselves."
    ],
    correctIndex: 1,
    b1Explanation: "The driver is legally responsible for ensuring that all passengers under 14 years old are properly secured with a seat belt or appropriate child constraint."
  },
  {
    id: "q49",
    category: "Safety & Hazards",
    question: "When are you allowed to park on double yellow lines in the UK?",
    options: [
      "To quickly run into a shop for less than 5 minutes.",
      "Normally never, unless you hold a Blue Badge and are unloading without causing an obstruction.",
      "At any time during bank holidays.",
      "When there are no other cars parked nearby."
    ],
    correctIndex: 1,
    b1Explanation: "Double yellow lines indicate a strict parking prohibition. You must not park on them at any time unless you have a Blue Badge (disabled driver permit) and are not causing a traffic hazard."
  },
  {
    id: "q50",
    category: "Safety & Hazards",
    question: "How should you warn drivers behind you that there is a sudden hazard or stationary traffic ahead on a motorway?",
    options: [
      "Turn on your high-beam headlights.",
      "Briefly switch on your hazard warning lights.",
      "Tap your brakes repeatedly to flash your brake lights.",
      "Wave your arm out of the window."
    ],
    correctIndex: 1,
    b1Explanation: "Hazard warning lights should be used briefly on motorways or dual carriageways to warn drivers behind of a sudden obstruction or slowed traffic ahead."
  },
  {
    id: "q51",
    category: "Safety & Hazards",
    question: "What is the main purpose of catalytic converters fitted on vehicle exhaust systems?",
    options: [
      "To reduce the noise made by the car engine.",
      "To filter and reduce harmful exhaust emissions.",
      "To increase the fuel efficiency of the car.",
      "To help clear carbon from the radiator."
    ],
    correctIndex: 1,
    b1Explanation: "Catalytic converters are designed to convert toxic gases in engine emissions into less harmful substances before they escape through the exhaust pipe."
  },
  {
    id: "q52",
    category: "Safety & Hazards",
    question: "How should you drive when passing through an area with strong side winds?",
    options: [
      "Accelerate to pass through the windy area quickly.",
      "Hold the steering wheel firmly and be prepared for sudden gusts.",
      "Drive extremely close to high-sided vehicles for protection.",
      "Activate your hazard lights while continuing normally."
    ],
    correctIndex: 1,
    b1Explanation: "Strong winds can push vehicles off course, especially high-sided trucks or cyclists. Hold your steering wheel firmly and leave plenty of room when overtaking them."
  },
  {
    id: "q53",
    category: "Speed Limits",
    question: "What is the national speed limit for cars towing a caravan on a single carriageway road?",
    options: [
      "40 mph",
      "50 mph",
      "60 mph",
      "70 mph"
    ],
    correctIndex: 1,
    b1Explanation: "The national speed limit on a single carriageway is 60 mph for a standard car, but it is reduced to 50 mph if you are towing a caravan or trailer."
  },
  {
    id: "q54",
    category: "Safety & Hazards",
    question: "What does a green flashing light on a vehicle in front of you indicate?",
    options: [
      "A slow-moving highway maintenance truck.",
      "A doctor responding to an active medical emergency call.",
      "An unmarked police response vehicle.",
      "A wide-load cargo transport truck."
    ],
    correctIndex: 1,
    b1Explanation: "A flashing green beacon on a vehicle is used by doctors responding to an active emergency call. Be prepared to let them pass safely."
  },
  {
    id: "q55",
    category: "Safety & Hazards",
    question: "What should you do if your car begins to skid when braking on a wet road?",
    options: [
      "Pump your foot brake hard and quickly.",
      "Release the brake pedal, and steer gently into the direction of the skid.",
      "Pull the handbrake up immediately.",
      "Turn your steering wheel sharply in the opposite direction of the skid."
    ],
    correctIndex: 1,
    b1Explanation: "If your car skids, release the brake immediately to let the wheels spin and regain grip. Steer gently into the direction of the skid to straighten out."
  },
  {
    id: "q56",
    category: "Safety & Hazards",
    question: "What does a single yellow line painted along the side of a road mean?",
    options: [
      "No waiting or parking during the hours shown on the nearby sign.",
      "You are allowed to park here at any time of the day.",
      "Only motorbikes and bicycles are allowed to park.",
      "You are in a high-speed loading zone."
    ],
    correctIndex: 0,
    b1Explanation: "A single yellow line indicates waiting restrictions at certain times of the day. Always check the nearby street signs to see what hours these rules are active."
  },
  {
    id: "q57",
    category: "Road Signs",
    question: "What does a triangular road sign with a red border containing an arrow pointing to the left indicate?",
    options: [
      "A mandatory left turn is ahead.",
      "A curve or bend in the road to the left is ahead.",
      "The road splits into two separate lanes ahead.",
      "One-way traffic system on the left."
    ],
    correctIndex: 1,
    b1Explanation: "Triangular road signs are warning signs. An arrow curling to the left warns you of a sharp bend in the road ahead, telling you to slow down before reaching it."
  },
  {
    id: "q58",
    category: "Safety & Hazards",
    question: "What should you do before moving off from a parked position at the roadside?",
    options: [
      "Sound your horn and put your indicator on.",
      "Look all around and check your blind spots to make sure it is safe.",
      "Flash your headlights to let other drivers know you are moving.",
      "Move out quickly before any other vehicles approach."
    ],
    correctIndex: 1,
    b1Explanation: "Always look thoroughly in all directions, check both side mirrors and rear-view mirror, and look over your shoulder to check your blind spots before pulling out into traffic."
  },
  {
    id: "q59",
    category: "Safety & Hazards",
    question: "At a crossroads or junction, who has priority when turning right across oncoming traffic?",
    options: [
      "The driver who is turning right.",
      "The oncoming vehicles going straight ahead.",
      "The longest vehicle in the intersection.",
      "The driver who signals first."
    ],
    correctIndex: 1,
    b1Explanation: "Oncoming traffic going straight ahead has priority. You must wait for a safe gap in the oncoming flow before completing your right turn."
  },
  {
    id: "q60",
    category: "Road Signs",
    question: "What does a round sign with a red border and a blank white centre mean?",
    options: [
      "No vehicles allowed except as directed.",
      "No speed limit in force on this stretch of road.",
      "An upcoming checkpoint or customs stop.",
      "All motor vehicles must stop and wait."
    ],
    correctIndex: 0,
    b1Explanation: "A circular sign with a red border and blank white centre indicates that all vehicles are prohibited from entering that road, except as specifically listed on attached plates."
  },
  {
    id: "q61",
    category: "Speed Limits",
    question: "What is the typical speed limit in of a designated 'home zone' or 'residential street block' in the UK?",
    options: [
      "10 mph",
      "20 mph",
      "30 mph",
      "40 mph"
    ],
    correctIndex: 1,
    b1Explanation: "In designated home zones or quiet residential blocks, speed limits are lowered to 20 mph to protect children, pedestrians, and cyclists."
  },
  {
    id: "q62",
    category: "Speed Limits",
    question: "What is the national speed limit for a heavy freight lorry (over 7.5 tonnes) on a single carriageway in England?",
    options: [
      "40 mph",
      "50 mph",
      "60 mph",
      "70 mph"
    ],
    correctIndex: 1,
    b1Explanation: "In England and Wales, the national speed limit for heavy goods vehicles (HGVs) over 7.5 tonnes on a single carriageway is 50 mph."
  },
  {
    id: "q63",
    category: "Speed Limits",
    question: "What is the maximum legal speed limit for a powered invalid carriage (mobility scooter) when driven on a pavement?",
    options: [
      "4 mph",
      "8 mph",
      "12 mph",
      "15 mph"
    ],
    correctIndex: 0,
    b1Explanation: "Powered wheelchairs or mobility scooters are limited to a maximum speed of 4 mph on pavements to ensure pedestrian safety."
  },
  {
    id: "q64",
    category: "Speed Limits",
    question: "What are the variable speed limit signs on smart motorways called?",
    options: [
      "Mandatory speed limit signs that you must obey.",
      "Advisory speed limits that you should try to follow.",
      "Temporary guidelines for lorries only.",
      "Unrestricted speed limit zones."
    ],
    correctIndex: 0,
    b1Explanation: "The speed limit signs displayed on overhead electronic gantries on smart motorways are mandatory speed limits. When they are displayed inside a red circle, they are legally binding order signs."
  },
  {
    id: "q65",
    category: "Speed Limits",
    question: "What is the national speed limit for cars towing a caravan or trailer on a dual carriageway in the UK?",
    options: [
      "50 mph",
      "60 mph",
      "70 mph",
      "80 mph"
    ],
    correctIndex: 1,
    b1Explanation: "When towing a caravan or trailer, your national speed limit is reduced from 70 mph to 60 mph on dual carriageways and motorways."
  },
  {
    id: "q66",
    category: "Pedestrians",
    question: "At a pelican crossing, what does it mean when the amber light is flashing?",
    options: [
      "You must stop and wait for a green signal.",
      "Give way to any pedestrians on the crossing; if clear, you can go ahead.",
      "The crossing is broken; drive past with caution.",
      "Pedestrians must run across the road."
    ],
    correctIndex: 1,
    b1Explanation: "Flashing amber at a pelican crossing means you must give way to any pedestrians still on the crossing. If the crossing is completely clear and safe, you may proceed."
  },
  {
    id: "q67",
    category: "Pedestrians",
    question: "What should you do when you see a school crossing patrol warden holding up a 'Stop for Children' sign?",
    options: [
      "Slow down and weave around them carefully.",
      "Stop completely and wait until they have returned to the pavement.",
      "Drive through slowly if no children are directly on your side of the road.",
      "Tap your horn to warn the warden you are going to pass."
    ],
    correctIndex: 1,
    b1Explanation: "You are legally required to stop when a school crossing patrol officer signals. Stay fully stopped until all children have safely crossed and the warden has cleared the road."
  },
  {
    id: "q68",
    category: "Pedestrians",
    question: "A pedestrian carrying a white stick with a red band or stripe indicates what?",
    options: [
      "The pedestrian is blind only.",
      "The pedestrian is deaf only.",
      "The pedestrian is deaf and blind.",
      "The pedestrian is an off-duty railway worker."
    ],
    correctIndex: 2,
    b1Explanation: "A white cane with a red band or reflective stripe indicates that the pedestrian has both hearing and visual impairments (deaf-blind). Leave plenty of space and extra time."
  },
  {
    id: "q69",
    category: "Pedestrians",
    question: "If a pedestrian is walking with a guide dog wearing a red dog harness, what does this tell you?",
    options: [
      "The dog is in training to be a normal guide dog.",
      "The pedestrian is deaf and blind.",
      "The dog is a standard police tracking dog.",
      "The pedestrian has mobility restrictions only."
    ],
    correctIndex: 1,
    b1Explanation: "A red jacket or harness on a guide dog or assistance dog indicates that the owner is deaf-blind. Take extra care as they may not hear or see your vehicle."
  },
  {
    id: "q70",
    category: "Pedestrians",
    question: "When walking on a country road without a pavement, which side of the road should pedestrians walk on?",
    options: [
      "The left-hand side, so they walk with the flow of traffic.",
      "The right-hand side, so they face the oncoming traffic.",
      "In the middle of the road where it is flat.",
      "It does not matter, whichever side is quieter."
    ],
    correctIndex: 1,
    b1Explanation: "Pedestrians should walk on the right-hand side of roads without pavements so they face oncoming traffic. This makes it easier for them to see vehicles and take safety actions."
  },
  {
    id: "q71",
    category: "Pedestrians",
    question: "How should you overtake a cyclist on a road in dark or wet conditions?",
    options: [
      "Overtake quickly, passing them as closely as possible.",
      "Leave them at least as much room as you would when overtaking a car.",
      "Tap your horn constantly while passing them.",
      "Overtake only if there are streetlights turned on."
    ],
    correctIndex: 1,
    b1Explanation: "You must give cyclists at least 1.5 metres of space (the width of a standard car) when overtaking. In dark or rainy conditions, give them even more room as they may swathes or skid on wet patches."
  },
  {
    id: "q72",
    category: "Safety & Hazards",
    question: "At a level crossing, what does a steady amber light mean when it follows a green light?",
    options: [
      "A train has already passed and it is safe.",
      "You must stop unless it is unsafe to do so.",
      "Accelerate to clear the crossing quickly.",
      "The barriers are climbing up again."
    ],
    correctIndex: 1,
    b1Explanation: "A steady amber light means stop. You must stop behind the stop line unless you have already crossed it or are so close that stopping suddenly would cause an accident."
  },
  {
    id: "q73",
    category: "Safety & Hazards",
    question: "Why should you avoid following an emergency vehicle (like an ambulance or fire engine) too closely?",
    options: [
      "Their exhaust gas is hazardous to inhale.",
      "They may stop or turn suddenly to respond to an incident.",
      "Their loud sirens will damage your car's stereo speakers.",
      "Your car battery will be drained by their light flashing."
    ],
    correctIndex: 1,
    b1Explanation: "Emergency vehicles often have to brake abruptly, change lanes, or turn sharply without warning. Keeping a safe distance gives you enough time to react."
  },
  {
    id: "q74",
    category: "Safety & Hazards",
    question: "What is a main hazard of 'coasting' (driving in neutral or with the clutch held down) down a steep hill?",
    options: [
      "Your fuel consumption will increase dramatically.",
      "You will lose engine braking control and your brakes could overheat.",
      "Your vehicle's gearbox will snap.",
      "Your high-beam headlights will turn off."
    ],
    correctIndex: 1,
    b1Explanation: "Coasting means the engine is disconnected from the wheels. This means you lose engine braking. Your car will quickly gather speed, forcing you to use the brakes heavily, which can overheat them and cause them to fail."
  },
  {
    id: "q75",
    category: "Safety & Hazards",
    question: "What is a major benefit of 'engine braking' when descending steep hills?",
    options: [
      "It recharges your battery at double rate.",
      "It prevents your brakes from overheating and failing.",
      "It increases your engine oil pressure.",
      "It silences your engine exhaust sound completely."
    ],
    correctIndex: 1,
    b1Explanation: "By shifting into a lower gear, the engine's resistance slows the vehicle. This is called engine braking. It stops your foot brakes from getting too hot and failing on long steep descents."
  },
  {
    id: "q76",
    category: "Safety & Hazards",
    question: "What could a sudden dropdown in the brake fluid reservoir level indicate?",
    options: [
      "Your engine oil is leaking into the pistons.",
      "A leak in the brake line system or severely worn brake pads.",
      "That your tyres have too much pressure.",
      "Normal fluid evaporation during warm summer days."
    ],
    correctIndex: 1,
    b1Explanation: "A low brake fluid level is highly dangerous. It could mean there is a leak in your hydraulic system, or that your brake pads are worn down to a critical limit. Have it inspected immediately."
  },
  {
    id: "q77",
    category: "Safety & Hazards",
    question: "When should you check your tyre pressures to ensure an accurate reading?",
    options: [
      "Immediately after a long journey at high speeds.",
      "When the tyres are cold, before driving more than a couple of miles.",
      "Only when the vehicle is loaded with heavy luggage.",
      "Every time you stop to wash your car."
    ],
    correctIndex: 1,
    b1Explanation: "Tyre pressure readings are only accurate when the tyres are cold. Driving heats up the air inside, which raises the pressure and yields an incorrect high reading if checked hot."
  },
  {
    id: "q78",
    category: "Safety & Hazards",
    question: "What does a double solid white line painted down the middle of a road mean?",
    options: [
      "You are on a one-way street.",
      "You must not cross or straddle these lines except in very specific circumstances.",
      "Overtaking is allowed for cars driving over 50 mph.",
      "Parking is freely allowed on either side of the road."
    ],
    correctIndex: 1,
    b1Explanation: "Double solid white lines mean you must not cross or straddle them to overtake, unless you are turning into a side road/property, or overtaking a stationary vehicle, road work machine, or horse moving under 10 mph."
  },
  {
    id: "q79",
    category: "Safety & Hazards",
    question: "What is indicated by broken white lines in the centre of the road where the lines are long and the gaps are short?",
    options: [
      "The lane is a dedicated bus lane.",
      "A hazard warning line, showing that a hazard is ahead (such as a bend or junction).",
      "An upcoming high-speed racetrack zone.",
      "Temporary lines that can be ignored in dry weather."
    ],
    correctIndex: 1,
    b1Explanation: "A line with long white stripes and short gaps is a hazard warning line. It warns you that there is danger ahead (e.g., a bend, junction, or hill). Be extra careful if overtaking."
  },
  {
    id: "q80",
    category: "Road Signs",
    question: "What is indicated by an orange or yellow rectangular sign showing a picture of a bus inside a dedicated lane with arrows?",
    options: [
      "A tourist route for coaches only.",
      "A contraflow bus lane where buses travel in the opposite direction to the main traffic traffic.",
      "A parking area for public school buses.",
      "A warning of dynamic bridge height clearance ahead."
    ],
    correctIndex: 1,
    b1Explanation: "Such signs indicate a contraflow bus lane. Buses, and sometimes taxis or cyclists, are travelling in the opposite direction to the main traffic flow. Watch out when turning or pulling out."
  },
  {
    id: "q81",
    category: "Road Signs",
    question: "What does a blue rectangular sign with a white arrow pointing straight up indicate?",
    options: [
      "A diversion route going uphill.",
      "One-way traffic system on this stretch of road.",
      "Overtaking is strictly prohibited here.",
      "A motorway entrance ahead."
    ],
    correctIndex: 1,
    b1Explanation: "A blue rectangular sign with a vertical white arrow indicates a one-way street. Vehicles must only travel in the direction of the arrow.",
    signType: "one_way"
  },
  {
    id: "q82",
    category: "Safety & Hazards",
    question: "On a UK motorway, what do green reflective studs (cat's eyes) indicate?",
    options: [
      "The boundary next to the central reservation barrier.",
      "The edge of slip roads, lay-bys, and junctions.",
      "Work zones and active lane switches.",
      "The dividing line between normal running lanes."
    ],
    correctIndex: 1,
    b1Explanation: "Green studs are placed on the left side of running lanes to mark the exits and entries of slip roads, junctions, and rest areas (lay-bys)."
  },
  {
    id: "q83",
    category: "Safety & Hazards",
    question: "What does the minimum legal insurance policy ('third-party' cover) protect you against?",
    options: [
      "Damage to your own vehicle and personal injury to you.",
      "Damage or injury caused by you to other people and their property.",
      "Theft of your vehicle or loss of luggage.",
      "Full mechanical breakdown cover on motorways."
    ],
    correctIndex: 1,
    b1Explanation: "Third-party insurance is the absolute minimum legal requirement. It does not cover damage to your car or you; it only pays for the damage or injury you inflict on others (third parties)."
  },
  {
    id: "q84",
    category: "Safety & Hazards",
    question: "What is a main result of driving with severely under-inflated tyres?",
    options: [
      "Your fuel consumption will decrease significantly.",
      "Your tyres will wear out much faster on the edges and your steering will feel heavy.",
      "Your speedometer will display a higher speed than normal.",
      "Your indicator lights will blink faster."
    ],
    correctIndex: 1,
    b1Explanation: "Under-infated tyres increase rolling resistance, making your car burn more fuel. They also wear out rapidly on the outer edges and make your steering feel heavy and unresponsive."
  },
  {
    id: "q85",
    category: "Safety & Hazards",
    question: "What is usually the very first symptom or effect of drinking even small amounts of alcohol?",
    options: [
      "A loss of steering control.",
      "An increase in self-confidence and a reduction in fast hazard reaction time.",
      "An immediate headache.",
      "Your vision becomes completely blurred."
    ],
    correctIndex: 1,
    b1Explanation: "Even small amounts of alcohol affect your judgment. It makes you feel more self-confident and willing to take risks, while slowing your reaction times and hazard perception."
  },
  {
    id: "q86",
    category: "Safety & Hazards",
    question: "What does a yellow zig-zag line painted on the road outside a school entrance mean?",
    options: [
      "You can park here for up to 10 minutes to drop off children.",
      "You must not park, stop, or wait here at any time during active hours.",
      "A high-speed pick up lane for parent vehicles.",
      "An area reserved for school staff parking only."
    ],
    correctIndex: 1,
    b1Explanation: "Yellow zig-zag lines outside school entrances mean you must not stop or park there. This rule is designed to keep the view clear for children crossing the road."
  },
  {
    id: "q87",
    category: "Safety & Hazards",
    question: "What is the primary function of head restraints in a car seat?",
    options: [
      "To let you rest your head while sitting in traffic.",
      "To protect your neck against whiplash injuries if you are hit from behind.",
      "To prevent you from falling asleep while driving long journeys.",
      "To make the passenger seats feel more comfortable."
    ],
    correctIndex: 1,
    b1Explanation: "Head restraints must be adjusted properly to support your head. They are safety devices that protect your neck against severe whiplash injuries in rear-end collisions."
  },
  {
    id: "q88",
    category: "Safety & Hazards",
    question: "On a motorway, what do red flashing lights displayed on an overhead gantry above your lane mean?",
    options: [
      "You are approaching a toll booth lane.",
      "You must not drive in that lane; it is closed.",
      "The national speed limit is active in that lane.",
      "You should speed up to clear the lane quickly."
    ],
    correctIndex: 1,
    b1Explanation: "Red flashing lights (sometimes with a red 'X' symbol) mean the lane below is completely closed. You must move out of that lane safely as soon as possible."
  },
  {
    id: "q89",
    category: "Safety & Hazards",
    question: "What does a green filter arrow shown at a traffic light mean?",
    options: [
      "You can turn in that direction only if no other cars are moving.",
      "You can turn in that direction regardless of other traffic signals; your path is clear.",
      "All other directions have been closed due to an emergency.",
      "You must wait for a solid green light before turning."
    ],
    correctIndex: 1,
    b1Explanation: "A green filter arrow means you have priority to turn in that direction. Any oncoming traffic or pedestrians have been stopped by red lights to let you pass."
  },
  {
    id: "q90",
    category: "Safety & Hazards",
    question: "Under the UK Highway Code, what is the official meaning of flashing your headlights at another driver?",
    options: [
      "You are waving them through or giving them priority.",
      "You are warning them of your presence.",
      "You are angry or complaining about their driving.",
      "To show them that their high beams are on."
    ],
    correctIndex: 1,
    b1Explanation: "Official guidelines state that you should only flash your headlights to let other road users know you are there. Never use it to signal priority or invite them to pull out, as this can lead to accidents."
  },
  {
    id: "q91",
    category: "Safety & Hazards",
    question: "In London and many major cities in the UK, what is the default rule regarding parking on a pavement (sidewalk)?",
    options: [
      "It is allowed as long as you leave space for wheelchairs.",
      "It is prohibited unless signs specifically say otherwise.",
      "It is permitted during night hours (8 PM to 7 AM).",
      "It is allowed for all vehicles under 3.5 tonnes."
    ],
    correctIndex: 1,
    b1Explanation: "In London and an increasing number of cities, pavement parking is illegal unless signs explicitly permit it. It obstructs and endangers vulnerable pedestrians like wheelchair users or parents with prams."
  },
  {
    id: "q92",
    category: "Safety & Hazards",
    question: "What is the correct hand signal for showing you intend to slow down or stop?",
    options: [
      "Extend your arm out of the window and wave it in a circular motion.",
      "Extend your right arm straight and move it up and down slowly.",
      "Extend your arm straight and hold it completely still.",
      "Point your index finger up towards the sky."
    ],
    correctIndex: 1,
    b1Explanation: "The slowing-down hand signal is performed by extending your right arm out of the window with your palm facing down, and waving it up and down from the shoulder."
  },
  {
    id: "q93",
    category: "Safety & Hazards",
    question: "What should you do if you are waiting at a railway level crossing and the red barrier stays down long after a train passes?",
    options: [
      "Reverse your car and drive away in the wrong direction.",
      "Stay stopped and wait; do not attempt to drive around the barriers or lift them.",
      "Get out of your car and manually push the barriers up.",
      "Drive through slowly if no other trains can be seen."
    ],
    correctIndex: 1,
    b1Explanation: "Never attempt to cross or drive around level crossing barriers. Another train could be approaching from the opposite direction. Always wait until the barriers lift and the lights turn off completely."
  },
  {
    id: "q94",
    category: "Speed Limits",
    question: "What is indicated by a round speed limit sign on an overhead motorway display surrounded by a flashing red circle?",
    options: [
      "An advisory speed limit showing a recommended speed.",
      "A legally binding mandatory speed limit.",
      "A speed limit that you must follow only during wet weather.",
      "A target speed for automated driving vehicles."
    ],
    correctIndex: 1,
    b1Explanation: "Any speed limit shown inside a red ring or circle on motorway gantries is a mandatory speed limit. It is legally binding and monitored by speed cameras."
  },
  {
    id: "q95",
    category: "Safety & Hazards",
    question: "In foggy conditions, what is the minimum gap or distance you should leave from the vehicle ahead?",
    options: [
      "Stay close so you can follow their tail lights clearly.",
      "Leave a gap of at least 4 seconds.",
      "A standard gap of exactly 2 seconds is always sufficient.",
      "Overtake them immediately so they are behind you."
    ],
    correctIndex: 1,
    b1Explanation: "In fog, your visibility is greatly reduced and roads may be damp. You should double the standard dry-weather gap to at least 4 seconds to give yourself enough time to react and stop."
  },
  {
    id: "q96",
    category: "Pedestrians",
    question: "At a roundabout, why should you give extra room and stay behind cyclists?",
    options: [
      "They are legally allowed to ride on the pavement.",
      "They may need to stay in the left-hand lane even if they are turning right.",
      "Their bicycles are wider than standard motorcycles.",
      "So they can hear your engine noises clearly."
    ],
    correctIndex: 1,
    b1Explanation: "Cyclists are vulnerable at roundabouts. They may stay in the left lane even if they are turning all the way around the roundabout (turning right). Always stay well back and let them navigate safely."
  },
  {
    id: "q97",
    category: "Safety & Hazards",
    question: "What should you do before overtaking a slow-moving tractor on a winding country road?",
    options: [
      "Stay close behind it and flash your high beams constantly.",
      "Wait patiently behind it until you reach a straight section where you have a clear, safe view ahead.",
      "Sound your horn to make the driver pull into the grass hedge.",
      "Overtake immediately on a sharp bend of the road."
    ],
    correctIndex: 1,
    b1Explanation: "Country roads are narrow and have blind spots (bends and hills). Stay back so you can see. Only overtake when you have a long, clear view ahead and are sure it is safe."
  },
  {
    id: "q98",
    category: "Safety & Hazards",
    question: "How should you start off smoothly on a steep uphill incline?",
    options: [
      "Press the accelerator fully and release the clutch immediately.",
      "Apply the handbrake, find the clutch biting point with a little gas, and release the handbrake smoothly as the car pulls.",
      "Let the car slide back a little into the vehicle behind to rest.",
      "Turn your hazard lights on and start slowly in second gear."
    ],
    correctIndex: 1,
    b1Explanation: "To prevent your car from rolling back on hills, use your handbrake. Find the clutch biting point, apply gentle gas, and smoothly release the handbrake as the car moves forward."
  },
  {
    id: "q99",
    category: "Safety & Hazards",
    question: "On a UK motorway, what colour are the reflective studs that mark the boundary between the slip road exits and the running lanes?",
    options: [
      "Red reflective studs.",
      "Green reflective studs.",
      "Amber reflective studs.",
      "White reflective studs."
    ],
    correctIndex: 1,
    b1Explanation: "Green studs mark the edge of running lanes at motorway junctions, exits, lay-bys, and entry slip roads."
  },
  {
    id: "q100",
    category: "Road Signs",
    question: "What is the primary function of triangular road signs with red borders?",
    options: [
      "To give you positive instructions that you must obey.",
      "To warn you of upcoming hazards or changes in the road.",
      "To provide general directions and local tourist information.",
      "To indicate temporary parking or loading exceptions."
    ],
    correctIndex: 1,
    b1Explanation: "Triangular road signs are warning signs. They alert you to upcoming hazards, such as junctions, bends, children crossing, or road narrows, allowing you to slow down in time."
  }
];
