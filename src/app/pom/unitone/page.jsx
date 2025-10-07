"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Unit1CompleteGuide() {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate sections
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            onEnter: () => setActiveSection(section.id),
          },
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    });

    // Progress bar
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrolled / total) * 100);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 px-6 text-center shadow-2xl  top-0 z-40"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
          📚 Unit 1: Complete Study Guide
        </h1>
        <p className="text-2xl md:text-3xl mb-3 font-light">
          Introduction to Management
        </p>
        <p className="text-xl opacity-90">
          MBA Cybersecurity Management - NFSU | Everything You Need to Know
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur">
            ✅ All Definitions
          </span>
          <span className="bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur">
            ✅ All Theories
          </span>
          <span className="bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur">
            ✅ Exam Ready
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12  top-28 z-30">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-4xl mr-3">📑</span>
            Complete Contents
          </h2>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            {[
              "Management Definitions",
              "Evolution of Management",
              "Scientific Management",
              "Fayol's 14 Principles",
              "Human Relations School",
              "Maslow's Hierarchy",
              "Theory X & Theory Y",
              "Operational Approach",
              "System Approach",
              "Contingency Approach",
              "Schools of Management",
              "Planning Process",
            ].map((topic, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-200"
              >
                <span className="font-semibold text-gray-800">
                  {idx + 1}. {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 1: MANAGEMENT DEFINITIONS */}
        <section
          id="management-definitions"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-blue-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🎯</span>
            <div>
              <h2 className="text-5xl font-bold text-blue-600">
                What is Management?
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Complete Definitions & Understanding
              </p>
            </div>
          </div>

          {/* Traditional Definitions */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">📖</span>
              Traditional Definitions
            </h3>
            <div className="space-y-6">
              {[
                {
                  author: "C.S. George",
                  definition:
                    "Management consists of getting things done through others. A manager is one who accomplishes objectives by directing efforts of others.",
                  color: "blue",
                },
                {
                  author: "Follett",
                  definition:
                    "Management is the art of getting things done through others.",
                  color: "green",
                },
              ].map((def, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r from-${def.color}-50 to-${def.color}-100 p-6 rounded-xl border-l-4 border-${def.color}-500`}
                >
                  <p className="text-lg text-gray-800 mb-3">
                    <strong className={`text-${def.color}-700`}>
                      {def.author}:
                    </strong>
                  </p>
                  <p className="text-gray-700 italic text-lg">"{def.definition}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Definitions */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🚀</span>
              Modern Definitions
            </h3>
            <div className="space-y-6">
              {[
                {
                  author: "Koontz and Donnell",
                  definition:
                    "Management is the creation of an internal environment where individuals working in a group can perform effectively and efficiently for the achievement of organisational goals.",
                  color: "purple",
                },
                {
                  author: "Trewelly and Newport",
                  definition:
                    "Management is defined as the process of planning, organising, actuating, and controlling of an organisation's operations in order to achieve coordination of the human and material resources essential in the effective and efficient attainment of objectives.",
                  color: "indigo",
                },
                {
                  author: "Kreitner",
                  definition:
                    "Management is the process of working with and through others to effectively achieve organisational objectives by efficiently using limited resources in the changing environment.",
                  color: "pink",
                },
              ].map((def, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r from-${def.color}-50 to-${def.color}-100 p-6 rounded-xl border-l-4 border-${def.color}-500`}
                >
                  <p className="text-lg text-gray-800 mb-3">
                    <strong className={`text-${def.color}-700`}>
                      {def.author}:
                    </strong>
                  </p>
                  <p className="text-gray-700 italic text-lg">"{def.definition}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Definition */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-xl border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              ✨ Simple Definition for You
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong>Management</strong> is the process of{" "}
              <strong className="text-orange-600">planning, organizing, leading, and controlling</strong>{" "}
              resources (human, financial, physical, technological) efficiently and
              effectively to achieve organizational goals.
            </p>
            <div className="bg-white p-5 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>In your Quantafile startup:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  <strong>Planning:</strong> Deciding what features to build
                </li>
                <li>
                  <strong>Organizing:</strong> Assigning tasks to your team
                </li>
                <li>
                  <strong>Leading:</strong> Motivating your co-founders
                </li>
                <li>
                  <strong>Controlling:</strong> Checking if deadlines are met
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: EVOLUTION OF MANAGEMENT */}
        <section
          id="evolution"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🔄</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                Evolution of Management Theories
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                From Classical to Modern Approaches
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-indigo-600">
            <p className="text-lg text-gray-800 leading-relaxed">
              Management theories have evolved in response to{" "}
              <strong>technological, economic, and social changes</strong>.
              Understanding this evolution helps managers apply the right approach
              in different situations.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              📅 Historical Timeline
            </h3>
            <div className="space-y-6">
              {[
                {
                  period: "Pre-Scientific Era",
                  year: "Before 1900s",
                  approach: "Trial and error, no systematic approach",
                  contributors: "Adam Smith, Charles Babbage",
                  key: "Specialization and efficiency ideas",
                  color: "gray",
                },
                {
                  period: "Classical Theories",
                  year: "Late 1800s - Early 1900s",
                  approach: "Scientific Management, Administrative, Bureaucratic",
                  contributors: "Frederick Taylor, Henri Fayol, Max Weber",
                  key: "Efficiency, productivity, formal structure",
                  color: "blue",
                },
                {
                  period: "Human Relations Movement",
                  year: "1920s - 1940s",
                  approach: "Focus on human and social factors",
                  contributors: "Elton Mayo, Mary Parker Follett",
                  key: "Employee motivation, group dynamics",
                  color: "green",
                },
                {
                  period: "Behavioral Theories",
                  year: "Mid-20th Century",
                  approach: "Human behavior and psychology",
                  contributors: "Abraham Maslow, Douglas McGregor",
                  key: "Motivation theories, leadership styles",
                  color: "purple",
                },
                {
                  period: "Quantitative & Systems",
                  year: "1950s - 1970s",
                  approach: "Mathematical models and systems thinking",
                  contributors: "Ludwig von Bertalanffy",
                  key: "Operations research, systems view",
                  color: "orange",
                },
                {
                  period: "Contingency Approach",
                  year: "1960s - Present",
                  approach: "Situational management",
                  contributors: "Fred Fiedler",
                  key: "No universal best practice",
                  color: "red",
                },
                {
                  period: "Modern Theories",
                  year: "1980s - Present",
                  approach: "TQM, Lean, Agile, AI-Driven",
                  contributors: "Various",
                  key: "Continuous improvement, innovation, technology",
                  color: "indigo",
                },
              ].map((era, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r from-${era.color}-50 to-${era.color}-100 p-6 rounded-xl border-l-4 border-${era.color}-500`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-2xl font-bold text-gray-800">
                      {era.period}
                    </h4>
                    <span className="bg-white px-4 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {era.year}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Approach:</strong> {era.approach}
                    </p>
                    <p>
                      <strong>Key Contributors:</strong> {era.contributors}
                    </p>
                    <p>
                      <strong>Key Focus:</strong> {era.key}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: SCIENTIFIC MANAGEMENT */}
        <section
          id="scientific-management"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🔬</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Scientific Management Theory
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Frederick Winslow Taylor (1911)
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              📖 Introduction
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-3">
              <strong>Founder:</strong> Frederick Winslow Taylor (1856–1915), an
              American mechanical engineer
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-3">
              <strong>Book:</strong> Principles of Scientific Management (1911)
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-3">
              <strong>Core Idea:</strong> Apply science, observation, and
              experimentation to management problems instead of trial-and-error or
              traditional methods.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Goal:</strong> Improve efficiency, productivity, and
              labor-management relations.
            </p>
          </div>

          {/* Taylor's Four Principles */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              Taylor's Four Principles of Scientific Management
            </h3>
            <div className="space-y-6">
              {[
                {
                  principle: "1. Science, Not Rule of Thumb",
                  desc: "Replace old trial-and-error methods with scientific study. Use time studies, motion studies, and work studies to determine the best way to do a task.",
                  healthcareEx:
                    "Using time-motion studies to design how nurses should administer injections quickly but safely.",
                  cyberEx:
                    "Measuring average response time for threat detection and scientifically optimizing workflow to reduce downtime.",
                  color: "blue",
                },
                {
                  principle: "2. Harmony, Not Discord",
                  desc: "There should be cooperation between workers and managers, not conflicts. Managers must create a win-win environment.",
                  healthcareEx:
                    "Doctors and hospital administrators work together for patient safety instead of blaming each other for delays.",
                  cyberEx:
                    "IT and Security teams collaborate instead of blaming each other during a data breach.",
                  color: "green",
                },
                {
                  principle: "3. Cooperation, Not Individualism",
                  desc: "Management and workers should see themselves as partners. Managers provide training and incentives; workers give efficiency and loyalty.",
                  healthcareEx:
                    "Hospital staff trained in infection control with incentives for reducing hospital-acquired infections.",
                  cyberEx:
                    "Ethical hackers and management work together during bug bounty programs.",
                  color: "purple",
                },
                {
                  principle: "4. Development of Workers to Their Full Potential",
                  desc: "Right person for the right job + continuous training. Focus on selection, training, and career development.",
                  healthcareEx:
                    "Specialized training for nurses in ICU/OT to handle emergencies.",
                  cyberEx:
                    "Providing certifications (CEH, CISSP, etc.) to analysts for skill enhancement.",
                  color: "orange",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border-l-4 border-${item.color}-500`}
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.principle}
                  </h4>
                  <p className="text-gray-700 mb-4">{item.desc}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        🏥 Healthcare Example:
                      </p>
                      <p className="text-sm text-gray-700">{item.healthcareEx}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        🔒 Cybersecurity Example:
                      </p>
                      <p className="text-sm text-gray-700">{item.cyberEx}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🛠️ Techniques of Scientific Management
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  technique: "Time Study",
                  desc: "Analyzing the time taken for each motion/task to set a standard time.",
                  example:
                    "Time taken to perform an X-ray vs. optimize process to reduce waiting time.",
                  icon: "⏱️",
                },
                {
                  technique: "Motion Study",
                  desc: "Breaking work into motions and eliminating unnecessary ones.",
                  example:
                    "Rearranging surgical tools to save time during operations.",
                  icon: "🎬",
                },
                {
                  technique: "Standardization",
                  desc: "Ensuring uniform tools, methods, and working conditions.",
                  example:
                    "Using standardized security protocols across all servers.",
                  icon: "📏",
                },
                {
                  technique: "Differential Piece-Rate System",
                  desc: "Workers are paid higher if they produce more than standard; lower if less.",
                  example:
                    "Paying cyber security bug hunters more for finding critical vulnerabilities.",
                  icon: "💰",
                },
                {
                  technique: "Functional Foremanship",
                  desc: "Instead of one supervisor, workers have multiple specialized supervisors.",
                  example:
                    "In hospitals, a doctor (clinical guidance), head nurse (discipline), and administrator (resources) all guide staff.",
                  icon: "👥",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-xl font-bold text-indigo-700">
                      {item.technique}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm">{item.desc}</p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-600">
                      <strong>Example:</strong> {item.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: FAYOL'S 14 PRINCIPLES */}
        <section
          id="fayol-principles"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-green-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">📊</span>
            <div>
              <h2 className="text-5xl font-bold text-green-600">
                Henri Fayol's 14 Principles of Management
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Administrative Theory (1916)
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl mb-8 border-l-4 border-green-600">
            <p className="text-lg text-gray-800 leading-relaxed mb-3">
              <strong>Pioneer:</strong> Henri Fayol (1916)
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Core Idea:</strong> Focus on management functions and
              administrative efficiency through universal principles applicable to
              all organizations.
            </p>
          </div>

          {/* All 14 Principles */}
          <div className="space-y-6">
            {[
              {
                num: "1",
                principle: "Division of Work",
                desc: "Specialization leads to efficiency. Work should be divided into smaller tasks, and employees should specialize in those tasks.",
                healthcare:
                  "A hospital divides work among doctors (diagnosis), nurses (patient care), pharmacists (medication), and lab technicians (tests).",
                cyber:
                  "One team monitors network traffic, another manages incident response, and another handles compliance.",
                color: "blue",
              },
              {
                num: "2",
                principle: "Authority and Responsibility",
                desc: "Managers must have authority to give orders, but with it comes responsibility. Authority = right to command. Responsibility = accountability for results.",
                healthcare:
                  "A Chief Medical Officer can make critical treatment decisions but is also accountable for patient outcomes.",
                cyber:
                  "A SOC (Security Operations Center) head can issue directives to block suspicious traffic but is accountable for system downtime.",
                color: "green",
              },
              {
                num: "3",
                principle: "Discipline",
                desc: "Employees must respect rules, agreements, and norms. Discipline ensures smooth operations. Requires good leadership, clear rules, and fair penalties.",
                healthcare: "Nurses must strictly follow medication schedules.",
                cyber:
                  "Employees must adhere to password and access control policies.",
                color: "purple",
              },
              {
                num: "4",
                principle: "Unity of Command",
                desc: "An employee should receive orders from only one superior. Prevents confusion and conflict.",
                healthcare:
                  "A nurse should report to the head nurse, not multiple doctors giving conflicting instructions.",
                cyber:
                  "A cybersecurity analyst should take directions from the SOC manager, not both IT head and compliance head simultaneously.",
                color: "orange",
              },
              {
                num: "5",
                principle: "Unity of Direction",
                desc: "One head and one plan for a group of activities with the same objective. Ensures coordination and avoids duplication of work.",
                healthcare:
                  "All departments (ICU, Surgery, Pharmacy) work under the hospital's patient safety plan.",
                cyber:
                  "A cyber resilience strategy aligns all IT and security teams under one framework.",
                color: "red",
              },
              {
                num: "6",
                principle: "Subordination of Individual Interest to General Interest",
                desc: "Organization's interest should prevail over individual interest. Personal goals must not conflict with organizational goals.",
                healthcare:
                  "A doctor shouldn't prioritize personal research over patient care.",
                cyber:
                  "An employee shouldn't disable security protocols for convenience.",
                color: "indigo",
              },
              {
                num: "7",
                principle: "Remuneration",
                desc: "Fair pay for work done. Motivates employees and ensures loyalty. Can be financial or non-financial rewards.",
                healthcare: "Incentives for nurses working in emergency shifts.",
                cyber:
                  "Bonus for ethical hackers who identify major vulnerabilities.",
                color: "pink",
              },
              {
                num: "8",
                principle: "Centralization and Decentralization",
                desc: "Balance of decision-making authority. Centralization = top management makes decisions. Decentralization = authority shared with lower levels.",
                healthcare:
                  "A hospital may centralize policy decisions but decentralize patient treatment decisions to doctors.",
                cyber:
                  "A cybersecurity policy is centralized, but incident response decisions are decentralized to on-duty teams.",
                color: "teal",
              },
              {
                num: "9",
                principle: "Scalar Chain (Line of Authority)",
                desc: "Clear chain of command from top to bottom. Ensures order and clarity. Fayol also suggested a 'gang plank' for quick communication (cross communication in urgent cases).",
                healthcare:
                  "A nurse communicates to the head nurse → ward in-charge → hospital admin.",
                cyber: "Security analyst → SOC lead → CISO → CEO.",
                color: "cyan",
              },
              {
                num: "10",
                principle: "Order",
                desc: "Right person in the right place; proper arrangement of resources. Material order: equipment in proper place. Social order: people in proper roles.",
                healthcare:
                  "Medicines stored systematically in a pharmacy for quick access.",
                cyber:
                  "Properly documented data storage with access levels for each employee.",
                color: "lime",
              },
              {
                num: "11",
                principle: "Equity",
                desc: "Fairness, kindness, and justice from managers. Builds loyalty and devotion.",
                healthcare:
                  "Equal opportunities for male and female nurses for promotion.",
                cyber:
                  "Equal treatment of employees regardless of gender or background in training opportunities.",
                color: "amber",
              },
              {
                num: "12",
                principle: "Stability of Tenure of Personnel",
                desc: "High employee turnover is inefficient. Employees need job security to perform well.",
                healthcare:
                  "Retaining skilled surgeons reduces recruitment and training costs.",
                cyber:
                  "Frequent job changes of security analysts lead to knowledge gaps and higher risk.",
                color: "rose",
              },
              {
                num: "13",
                principle: "Initiative",
                desc: "Encourage employees to take initiative and contribute ideas. Managers should foster creativity and innovation.",
                healthcare:
                  "Allowing nurses to suggest improvements in patient care procedures.",
                cyber:
                  "Encouraging security analysts to propose new threat detection methods.",
                color: "violet",
              },
              {
                num: "14",
                principle: "Esprit de Corps (Team Spirit)",
                desc: "'Unity is strength.' Promote teamwork and harmony. Builds morale and reduces conflicts.",
                healthcare:
                  "Doctors, nurses, and technicians work as one team during surgeries.",
                cyber:
                  "Incident response teams collaborate quickly during a ransomware attack.",
                color: "fuchsia",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border-l-4 border-${item.color}-500`}
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold text-gray-700">
                    {item.num}
                  </span>
                  {item.principle}
                </h4>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      🏥 Healthcare:
                    </p>
                    <p className="text-sm text-gray-700">{item.healthcare}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      🔒 Cybersecurity:
                    </p>
                    <p className="text-sm text-gray-700">{item.cyber}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: HUMAN RELATIONS SCHOOL */}
        <section
          id="human-relations"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-pink-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">❤️</span>
            <div>
              <h2 className="text-5xl font-bold text-pink-600">
                Human Relations School
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Elton Mayo & The Hawthorne Studies
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-pink-100 to-red-100 p-6 rounded-xl mb-8 border-l-4 border-pink-600">
            <h3 className="text-2xl font-bold text-pink-800 mb-4">
              📖 Origin and Background
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              The Human Relations School emerged in the early 20th century as a{" "}
              <strong>response and critique to the Classical School's mechanistic view</strong>{" "}
              of workers. It focuses on the human and social aspects of work.
            </p>
            <div className="bg-white p-5 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>The Hawthorne Studies (1924-1932):</strong>
              </p>
              <p className="text-gray-700 mb-3">
                Conducted at Western Electric Company's Hawthorne plant by{" "}
                <strong>Elton Mayo</strong>. Discovered that workers' productivity
                increased when they felt observed, valued, and part of a supportive
                group.
              </p>
              <p className="text-gray-800 font-semibold">
                This phenomenon is known as the "Hawthorne Effect."
              </p>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              💡 Core Philosophy
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Unlike the Classical School that viewed workers as{" "}
              <strong>parts of a machine</strong>, the Human Relations School{" "}
              <strong>treats workers as human beings</strong> with emotions, social
              needs, and the desire to belong. It highlights the importance of
              creating a friendly and cooperative work environment.
            </p>
          </div>

          {/* Key Principles */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🎯 Key Principles of Human Relations School
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  principle: "Recognition of Human Needs Beyond Financial Gains",
                  desc: "Employees are not motivated solely by money; they also seek recognition, appreciation, and a sense of belonging.",
                  icon: "🌟",
                },
                {
                  principle: "Workers are Human Beings with Emotions",
                  desc: "Employees should be treated with dignity and respect. Managers should understand and consider their feelings.",
                  icon: "😊",
                },
                {
                  principle: "Importance of Informal Relationships",
                  desc: "Organizations function not only through formal hierarchical structures but also through informal social relationships.",
                  icon: "🤝",
                },
                {
                  principle: "Job Security and Job Satisfaction",
                  desc: "Providing a secure job environment and ensuring job satisfaction are essential for maintaining motivation.",
                  icon: "🛡️",
                },
                {
                  principle: "Effective Communication",
                  desc: "Open and effective communication between managers and employees fosters trust and cooperation.",
                  icon: "💬",
                },
                {
                  principle: "Minimizing Conflicts and Misunderstandings",
                  desc: "Managers should actively work to reduce conflicts and encourage harmonious interactions.",
                  icon: "🕊️",
                },
                {
                  principle: "Freedom and Reduced Supervision",
                  desc: "Employees desire a reasonable degree of freedom and autonomy rather than strict supervision.",
                  icon: "🦅",
                },
                {
                  principle: "Participation in Decision-Making",
                  desc: "Involving employees in decisions that affect their work enhances their commitment and satisfaction.",
                  icon: "🗳️",
                },
                {
                  principle: "Emphasis on Social and Psychological Factors",
                  desc: "Motivation and performance are influenced by social needs and psychological well-being more than just economic incentives.",
                  icon: "🧠",
                },
                {
                  principle: "Leadership through Support and Empathy",
                  desc: "Managers are encouraged to adopt supportive and empathetic leadership styles, acting as coaches and mentors.",
                  icon: "👨‍🏫",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-lg font-bold text-gray-800">
                      {item.principle}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-Life Example */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              💼 Application in Your Life
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">
                  🚀 At Quantafile:
                </p>
                <p className="text-gray-700">
                  Instead of just paying your team, you also recognize their
                  efforts, celebrate small wins, create a friendly work culture,
                  and involve them in decision-making. This keeps them motivated
                  beyond just salary!
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">🎓 At NFSU:</p>
                <p className="text-gray-700">
                  When professors create a supportive environment, encourage
                  discussion, and value student input, you feel more motivated to
                  learn and participate actively in class.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: MASLOW'S HIERARCHY */}
        <section
          id="maslow"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-orange-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🏔️</span>
            <div>
              <h2 className="text-5xl font-bold text-orange-600">
                Maslow's Hierarchy of Needs
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Abraham Maslow - Understanding Human Motivation
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl mb-8 border-l-4 border-orange-600">
            <p className="text-lg text-gray-800 leading-relaxed mb-3">
              <strong>Pioneer:</strong> Abraham Maslow
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Core Idea:</strong> Human motivation is based on a{" "}
              <strong>hierarchy of needs</strong>. People are motivated to fulfill
              basic needs before moving on to higher-level needs.
            </p>
          </div>

          {/* The Pyramid */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🔺 The 5 Levels of Maslow's Hierarchy
            </h3>
            <div className="space-y-6">
              {[
                {
                  level: "5. Self-Actualization Needs",
                  desc: "The highest level involves realizing personal potential, creativity, and self-fulfillment.",
                  workplace:
                    "Employees achieve this when given opportunities for advancement, creativity, and meaningful work aligned with their values.",
                  quantafile:
                    "Working on innovative projects that align with your passion for tech and cybersecurity.",
                  color: "purple",
                  width: "100%",
                },
                {
                  level: "4. Esteem Needs",
                  desc: "Self-respect, confidence, recognition, and achievement form the fourth tier.",
                  workplace:
                    "Managers enhance esteem through rewards, feedback, responsibilities, and opportunities for personal growth.",
                  quantafile:
                    "Getting recognized for your coding skills, being trusted with important decisions.",
                  color: "blue",
                  width: "80%",
                },
                {
                  level: "3. Love and Belonging Needs",
                  desc: "Social relationships, sense of belonging, and connection with others come third.",
                  workplace:
                    "Fostering teamwork, providing social activities, and encouraging positive work culture.",
                  quantafile:
                    "Having a supportive co-founder team, celebrating milestones together.",
                  color: "green",
                  width: "60%",
                },
                {
                  level: "2. Safety Needs",
                  desc: "Stability, security (job and personal), and freedom from fear are next.",
                  workplace:
                    "Employers address these with job security, safe working conditions, health benefits, and transparent policies.",
                  quantafile:
                    "Having consistent income, clear contracts, secure work environment.",
                  color: "yellow",
                  width: "40%",
                },
                {
                  level: "1. Physiological Needs",
                  desc: "The most essential needs—food, water, shelter, rest—form the base of the pyramid.",
                  workplace:
                    "Providing fair wages, a comfortable environment, adequate breaks, and necessary facilities.",
                  quantafile:
                    "Earning enough to afford food, rent, and basic necessities.",
                  color: "red",
                  width: "20%",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border-l-4 border-${item.color}-500 transition-all duration-300 hover:scale-105`}
                  style={{ marginLeft: `${100 - parseInt(item.width)}px` }}
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.level}
                  </h4>
                  <p className="text-gray-700 mb-4">{item.desc}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        💼 In the Workplace:
                      </p>
                      <p className="text-sm text-gray-700">{item.workplace}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        🚀 For Quantafile:
                      </p>
                      <p className="text-sm text-gray-700">{item.quantafile}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">
              💡 Impact in the Workplace
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <span>
                  Motivation increases as employees progress through each level,
                  starting with basic needs and moving upward.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">⚠️</span>
                <span>
                  Failure to meet lower levels (like physiological or safety
                  needs) can prevent employees from reaching higher levels such as
                  self-actualization, hampering performance and satisfaction.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎯</span>
                <span>
                  Managers can use this theory to create environments that address
                  all needs, improving engagement, productivity, and retention
                  rates.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 7: THEORY X & THEORY Y */}
        <section
          id="theory-x-y"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-red-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">⚖️</span>
            <div>
              <h2 className="text-5xl font-bold text-red-600">
                Theory X and Theory Y
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Douglas McGregor - Two Views of Human Nature
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl mb-8 border-l-4 border-red-600">
            <p className="text-lg text-gray-800 leading-relaxed">
              Theory X and Theory Y are two contrasting management theories
              proposed by <strong>Douglas McGregor in the 1960s</strong> that
              explain different assumptions managers make about employee motivation
              and behavior at work.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Theory X */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-xl border-4 border-gray-400">
              <h3 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">
                <span className="mr-2">❌</span>
                Theory X
              </h3>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Assumptions:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-5">
                  <li>Employees inherently dislike work and will avoid it</li>
                  <li>Workers lack ambition and avoid responsibility</li>
                  <li>Prefer to be directed and controlled</li>
                  <li>Need external motivation (rewards/punishments)</li>
                  <li>Money and job security are primary motivators</li>
                </ul>
              </div>
              <div className="bg-red-50 p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Management Style:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-5">
                  <li>Authoritarian and directive</li>
                  <li>Close supervision and micromanagement</li>
                  <li>Strict rules and control</li>
                  <li>Top-down decision making</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  📝 Example:
                </p>
                <p className="text-sm text-gray-700">
                  A manager who constantly monitors employees, doesn't trust them,
                  and uses threats or rewards to force productivity.
                </p>
              </div>
            </div>

            {/* Theory Y */}
            <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-xl border-4 border-green-400">
              <h3 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
                <span className="mr-2">✅</span>
                Theory Y
              </h3>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Assumptions:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-5">
                  <li>Work is as natural as play and rest</li>
                  <li>Employees are self-motivated and capable of self-direction</li>
                  <li>Workers seek responsibility and enjoy contributing</li>
                  <li>Intrinsic motivation drives performance</li>
                  <li>Aligns with higher-level needs (esteem, self-actualization)</li>
                </ul>
              </div>
              <div className="bg-green-100 p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Management Style:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-5">
                  <li>Democratic and participative</li>
                  <li>Empower employees with autonomy</li>
                  <li>Supportive environment for creativity</li>
                  <li>Collaborative decision making</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  📝 Example:
                </p>
                <p className="text-sm text-gray-700">
                  A manager who trusts employees, gives them freedom to innovate,
                  involves them in decisions, and focuses on personal growth.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="mb-8 overflow-x-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              📊 Detailed Comparison
            </h3>
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-red-600 to-green-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">Aspect</th>
                  <th className="border border-gray-300 p-4 text-left">
                    Theory X
                  </th>
                  <th className="border border-gray-300 p-4 text-left">
                    Theory Y
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: "Assumptions about Employees",
                    x: "Employees dislike work, avoid responsibility, lack ambition, and need close supervision.",
                    y: "Employees find work natural, are self-motivated, seek responsibility, and can self-direct.",
                  },
                  {
                    aspect: "Motivation",
                    x: "Employees are motivated primarily by external rewards (money, bonuses) and fear of punishment.",
                    y: "Motivation is mostly intrinsic—personal growth, achievement, and fulfillment drive employees.",
                  },
                  {
                    aspect: "Management Style",
                    x: "Authoritarian, controlling, top-down direction with strict rules and close supervision.",
                    y: "Participative, empowering, democratic management with trust and autonomy.",
                  },
                  {
                    aspect: "Employee Involvement",
                    x: "Minimal; decisions are made by management with little input from employees.",
                    y: "High; employees are involved in decision-making and encouraged to share ideas.",
                  },
                  {
                    aspect: "Communication",
                    x: "One-way; managers give orders, employees follow.",
                    y: "Two-way; open and collaborative communication between managers and employees.",
                  },
                  {
                    aspect: "Work Environment",
                    x: "Rigid, hierarchical, emphasizes control and discipline.",
                    y: "Flexible, collaborative, emphasizes creativity and empowerment.",
                  },
                  {
                    aspect: "Ideal Job Type",
                    x: "Routine, repetitive, manual labor or new employees needing direction.",
                    y: "Creative, knowledge-based, complex tasks requiring initiative and innovation.",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 p-4 font-semibold text-purple-700">
                      {row.aspect}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      {row.x}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      {row.y}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Your Application */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              💡 Which Should You Use at Quantafile?
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">
                  🎯 Most Effective: Theory Y
                </p>
                <p className="text-gray-700 mb-3">
                  For tech startups and creative work like software development,{" "}
                  <strong>Theory Y works best</strong>. Your developers are
                  skilled, self-motivated, and work best with autonomy.
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                  <li>Trust your team to deliver quality code</li>
                  <li>Involve them in product decisions</li>
                  <li>Give them freedom to innovate</li>
                  <li>Focus on mentoring, not micromanaging</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">
                  ⚠️ When Theory X Might Be Needed:
                </p>
                <p className="text-gray-700 text-sm">
                  For critical security tasks with strict protocols (like SOC
                  operations following exact procedures), some structured
                  supervision might be necessary - but still balance it with
                  respect and trust!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: MODERN APPROACHES */}
        <section
          id="modern-approaches"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🚀</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                Modern Management Approaches
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                System, Contingency & Operational Approaches
              </p>
            </div>
          </div>

          {/* System Approach */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🔗 System Approach to Management
            </h3>
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">
                Definition:
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                The System Approach views an organization as a{" "}
                <strong>unified, purposeful system</strong> composed of interrelated
                and interdependent parts. It emphasizes that the organization is not
                just a collection of separate parts but a whole entity where each
                part affects and is affected by other parts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-700 mb-4">
                  Key Concepts:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔹</span>
                    <div>
                      <strong>Sub-Systems:</strong> Production, marketing, finance,
                      HR, etc., work together
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔹</span>
                    <div>
                      <strong>Synergy:</strong> Collective output greater than sum
                      of individual parts
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔹</span>
                    <div>
                      <strong>Open System:</strong> Organizations interact with
                      external environment
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔹</span>
                    <div>
                      <strong>Feedback Mechanism:</strong> Continuous monitoring and
                      adjustment
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                <h4 className="text-xl font-bold text-blue-700 mb-4">
                  🔒 Cybersecurity Example:
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Input:</strong> Threat detection (Input)
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Process:</strong> Response (Process)
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Output:</strong> System protection (Output)
                </p>
                <p className="text-gray-700">
                  <strong>Feedback:</strong> Threat review (Feedback)
                </p>
              </div>
            </div>
          </div>

          {/* Contingency Approach */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🎭 Contingency Approach to Management
            </h3>
            <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl mb-6 border-l-4 border-green-600">
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                Definition:
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                The Contingency Approach asserts that{" "}
                <strong>there is no one best way to manage or organize</strong>.
                Effective management depends on the specific circumstances or context
                ("contingencies") an organization faces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-700 mb-4">
                  Key Concepts:
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔸</span>
                    <div>
                      Management practices should be <strong>tailored to fit the
                      situation</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔸</span>
                    <div>
                      Different environments require different management styles
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔸</span>
                    <div>Emphasizes flexibility and situational diagnosis</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔸</span>
                    <div>Encourages customized solutions</div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h4 className="text-xl font-bold text-green-700 mb-4">
                  🔒 Cybersecurity Example:
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>During normal operations:</strong> Use decentralized
                  decision-making for faster response
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>During a major breach:</strong> Switch to centralized
                  command for coordinated response
                </p>
                <p className="text-gray-800 font-semibold mt-4">
                  The approach depends on the situation!
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              📊 System vs Contingency Approach
            </h3>
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">Aspect</th>
                  <th className="border border-gray-300 p-4 text-left">
                    System Approach
                  </th>
                  <th className="border border-gray-300 p-4 text-left">
                    Contingency Approach
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: "View of Organization",
                    system: "A unified system of interrelated parts",
                    contingency: "Management depends on situational factors",
                  },
                  {
                    aspect: "Key Focus",
                    system: "Integration and coordination",
                    contingency: "Flexibility and adaptability",
                  },
                  {
                    aspect: "Decision Making",
                    system: "Holistic and cross-functional",
                    contingency: "Situationally dependent",
                  },
                  {
                    aspect: "Emphasis",
                    system: "Interdependence of sub-systems",
                    contingency: "No universal best practice",
                  },
                  {
                    aspect: "Environment",
                    system: "Open system interacting with external environment",
                    contingency:
                      "Management varies with external/internal contingencies",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 p-4 font-semibold text-purple-700">
                      {row.aspect}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      {row.system}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      {row.contingency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 9: PLANNING PROCESS */}
        <section
          id="planning-process"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">📋</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Planning Process
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Complete 10-Step Framework
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              📖 What is Planning?
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong>Planning</strong> is the process of deciding in advance{" "}
              <strong>what is to be done, how, when, and by whom</strong>. It is a
              mental exercise involving foresight, imagination, and sound judgment.
            </p>
            <p className="text-gray-700">
              It acts as a blueprint or roadmap for future actions to achieve
              predetermined goals. Planning bridges the gap from the present state
              to a desired future state.
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🎯 Objectives of Planning
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  objective: "Set Clear Goals",
                  desc: "To set clear and specific goals or objectives for the organization",
                  icon: "🎯",
                },
                {
                  objective: "Provide Direction",
                  desc: "To provide direction by deciding the future course of action",
                  icon: "🧭",
                },
                {
                  objective: "Reduce Uncertainty",
                  desc: "To reduce uncertainty and anticipate future risks or opportunities",
                  icon: "🔮",
                },
                {
                  objective: "Coordinate Activities",
                  desc: "To coordinate activities smoothly and avoid overlapping or wastage",
                  icon: "🤝",
                },
                {
                  objective: "Facilitate Decision-Making",
                  desc: "To facilitate decision-making by evaluating alternatives",
                  icon: "💭",
                },
                {
                  objective: "Establish Standards",
                  desc: "To establish standards for performance evaluation and control",
                  icon: "📊",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border-2 border-purple-200"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-lg font-bold text-purple-700">
                      {item.objective}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10 Steps */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              🔟 The 10-Step Planning Process
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Identifying the Need for Action",
                  desc: "Recognize the need for planning due to opportunities or problems. Assess the current situation using tools like SWOT analysis.",
                  example:
                    "Quantafile realizes the need to expand to a new market segment.",
                  color: "blue",
                },
                {
                  step: "2",
                  title: "Setting Objectives",
                  desc: "Establish clear and specific objectives that define what you want to achieve. Objectives should be realistic, measurable, and aligned with the mission.",
                  example:
                    "Objective: Acquire 50 new B2B clients in 6 months.",
                  color: "green",
                },
                {
                  step: "3",
                  title: "Developing Planning Premises",
                  desc: "Establish assumptions about future conditions (market demand, tech changes, policies). These must be realistic and updated.",
                  example:
                    "Assumption: Cloud adoption will increase by 30% next year.",
                  color: "purple",
                },
                {
                  step: "4",
                  title: "Identifying Alternatives",
                  desc: "Identify multiple courses of action that could achieve the set objectives. Encourage looking at different strategies.",
                  example:
                    "Options: (1) Cold emailing, (2) LinkedIn outreach, (3) Partner with agencies.",
                  color: "orange",
                },
                {
                  step: "5",
                  title: "Evaluating Alternatives",
                  desc: "Assess each alternative in terms of feasibility, costs, benefits, risks, and alignment with objectives.",
                  example:
                    "Compare cost, time, and success rate of each option.",
                  color: "red",
                },
                {
                  step: "6",
                  title: "Selecting the Best Alternative",
                  desc: "Based on evaluation, choose the most suitable alternative that optimizes resources and maximizes objective achievement.",
                  example:
                    "Decision: Focus on LinkedIn outreach + partner with 2 agencies.",
                  color: "indigo",
                },
                {
                  step: "7",
                  title: "Formulating Derivative Plans",
                  desc: "Create secondary plans or detailed action plans for different departments to support the overall plan.",
                  example:
                    "Marketing team creates content plan, Sales team prepares pitch deck.",
                  color: "pink",
                },
                {
                  step: "8",
                  title: "Securing Participation and Cooperation",
                  desc: "Successful implementation requires cooperation of all stakeholders. Communicate the plan and involve people.",
                  example:
                    "Hold team meeting to explain strategy and get buy-in from co-founders.",
                  color: "teal",
                },
                {
                  step: "9",
                  title: "Implementing the Plan",
                  desc: "Put the chosen plan into action. Allocate resources, follow schedules, and assign responsibilities.",
                  example:
                    "Start LinkedIn campaign, schedule agency meetings, track progress weekly.",
                  color: "cyan",
                },
                {
                  step: "10",
                  title: "Monitoring and Follow-up",
                  desc: "Monitor progress regularly and compare actual performance with planned targets. Revise plans based on changes.",
                  example:
                    "Weekly review of leads generated, adjust strategy if needed.",
                  color: "lime",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border-l-4 border-${item.color}-500`}
                >
                  <div className="flex items-center mb-3">
                    <span className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-2xl text-gray-700 shadow-md">
                      {item.step}
                    </span>
                    <h4 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">{item.desc}</p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      🚀 Quantafile Example:
                    </p>
                    <p className="text-sm text-gray-700">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXAM PREPARATION */}
        <section
          ref={addToRefs}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-10 text-black mb-12"
        >
          <h2 className="text-5xl font-bold mb-8 text-center">
            🎯 Complete Exam Preparation Guide
          </h2>

          {/* Sample Questions */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur mb-8">
            <h3 className="text-3xl font-bold mb-6">📄 Sample Exam Questions</h3>
            <div className="space-y-4 text-sm">
              {[
                "1. Define management. Explain the evolution of management thought from classical to modern theories. (10 marks)",
                "2. Discuss Taylor's Scientific Management Theory with principles and techniques. (10 marks)",
                "3. Explain Fayol's 14 Principles of Management with examples. (10 marks)",
                "4. Compare and contrast Theory X and Theory Y. Which is more effective in modern organizations? (7 marks)",
                "5. Explain Maslow's Hierarchy of Needs and its application in the workplace. (7 marks)",
                "6. Describe the System Approach and Contingency Approach to management. (7 marks)",
                "7. Explain the planning process with all steps in detail. (10 marks)",
                "8. Write short notes on: (a) Human Relations School (b) Hawthorne Studies (c) Operational Approach (15 marks)",
              ].map((q, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur"
                >
                  <p className="font-bold">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur">
            <h3 className="text-3xl font-bold mb-6">🔑 Must-Know Topics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Management Definitions",
                "Scientific Management",
                "Fayol's 14 Principles",
                "Human Relations School",
                "Maslow's Hierarchy",
                "Theory X & Theory Y",
                "System Approach",
                "Contingency Approach",
                "Planning Process (10 Steps)",
                "Hawthorne Studies",
                "Evolution Timeline",
                "All Management Schools",
              ].map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur"
                >
                  <p className="font-semibold">⭐ {topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <div className="text-center pb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <p className="text-4xl font-bold mb-4">
              🎉 Unit-1 Complete - You're Ready!
            </p>
            <p className="text-xl mb-4">
              100% PDF content covered with real-life examples
            </p>
            <div className="flex justify-center gap-6 flex-wrap mt-6">
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ All Theories
              </span>
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ All Definitions
              </span>
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ All Examples
              </span>
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ Exam Ready
              </span>
            </div>
            <p className="text-2xl font-bold mt-8 text-yellow-300">
              Study smart, stay confident, and ACE IT! 💪🔥
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
