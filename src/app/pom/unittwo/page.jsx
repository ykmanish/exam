"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Unit2CompleteGuide() {
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

    // Animate sections on scroll
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 px-6 text-center shadow-2xl  z-40"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
          📚 Unit 2: Complete Study Guide
        </h1>
        <p className="text-2xl md:text-3xl mb-3 font-light">
          Planning & Organizing
        </p>
        <p className="text-xl opacity-90">
          MBA Cybersecurity Management - NFSU | Everything You Need to Know
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur">
            ✅ All Definitions
          </span>
          <span className="bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur">
            ✅ All Examples
          </span>
          <span className="bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur">
            ✅ Exam Ready
          </span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12  z-30">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-4xl mr-3">📑</span>
            Complete Contents
          </h2>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            {[
              "Planning Premises",
              "Types of Plans",
              "Strategic Planning",
              "Tactical & Operational Plans",
              "Contingency Planning",
              "Organizing Process",
              "Organization Structure",
              "Responsibility & Authority",
              "Span of Control",
              "Delegation of Authority",
              "Centralization vs Decentralization",
              "Line & Staff Relations",
              "Types of Organizations",
              "Formal & Informal Groups",
              "Matrix Organization",
            ].map((topic, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer border border-purple-200"
              >
                <span className="font-semibold text-gray-800">
                  {idx + 1}. {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 1: PLANNING PREMISES */}
        <section
          id="planning-premises"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🎯</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Planning Premises
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                The Foundation of All Planning
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="mr-2">📖</span>
              Definition
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong>Planning premises</strong> are the{" "}
              <strong>assumptions, forecasts, and conditions</strong> on which
              plans are based. They form the background or environment in which
              planning is done.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700 italic">
                <strong>Key Point:</strong> Without premises, planning becomes
                guesswork!
              </p>
            </div>
          </div>

          {/* Real-Life Example */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-2xl text-blue-800 mb-4 flex items-center">
              <span className="mr-2">💼</span>
              Cybersecurity Manager Example
            </h4>
            <p className="text-gray-700 mb-4">
              If a cybersecurity manager is planning a data protection strategy,
              they must assume certain things:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Expected increase in cyberattacks</li>
              <li>Budget available for security tools</li>
              <li>Laws that will apply in the next few years</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-4">
              These assumptions are planning premises.
            </p>
          </div>

          {/* Importance of Planning Premises */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">⭐</span>
              Importance of Planning Premises
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Reduce Uncertainty",
                  desc: "By identifying assumptions, managers are better prepared.",
                  example:
                    "A bank assumes RBI will enforce stricter cybersecurity compliance.",
                  icon: "🔍",
                  color: "blue",
                },
                {
                  title: "Coordination",
                  desc: "Different departments use the same assumptions → better alignment.",
                  example:
                    "Both IT and HR assume that all employees will need cybersecurity training.",
                  icon: "🤝",
                  color: "green",
                },
                {
                  title: "Efficient Resource Use",
                  desc: "Plans based on realistic conditions avoid waste.",
                  example:
                    "Investing in cloud security only after confirming cloud migration plans.",
                  icon: "💰",
                  color: "yellow",
                },
                {
                  title: "Basis for Contingency Plans",
                  desc: "Knowing possible external shocks helps build backup strategies.",
                  example:
                    "Knowing about cyberwarfare and ransomware threats helps create disaster recovery plans.",
                  icon: "🛡️",
                  color: "red",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-${item.color}-50 p-6 rounded-xl border-2 border-${item.color}-200 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-3">{item.desc}</p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> {item.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Types of Planning Premises */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🔢</span>
              Types of Planning Premises
            </h3>

            {/* A. Internal vs External */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-purple-700 mb-4">
                A. Internal vs. External Premises
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Internal */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-300">
                  <h5 className="text-xl font-bold text-green-700 mb-3">
                    Internal Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Conditions within the
                    organization.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                      <li>Policies</li>
                      <li>Organizational culture</li>
                      <li>Financial resources</li>
                      <li>IT infrastructure</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Availability of SOC (Security Operations Center), skilled
                      analysts, or company's BYOD (Bring Your Own Device) policy.
                    </p>
                  </div>
                </div>

                {/* External */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
                  <h5 className="text-xl font-bold text-orange-700 mb-3">
                    External Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Conditions outside the
                    organization but influencing planning.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                      <li>Government regulations</li>
                      <li>Competitors</li>
                      <li>Economic climate</li>
                      <li>Customer behavior</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      GDPR (Europe), Digital Personal Data Protection Act
                      (India), increase in global ransomware attacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* B. Tangible vs Intangible */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-purple-700 mb-4">
                B. Tangible vs. Intangible Premises
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Tangible */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
                  <h5 className="text-xl font-bold text-blue-700 mb-3">
                    Tangible Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Measurable or quantifiable
                    assumptions.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                      <li>Manpower</li>
                      <li>Money</li>
                      <li>Equipment</li>
                      <li>Number of servers</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Annual budget of ₹1 crore allocated to security upgrades.
                    </p>
                  </div>
                </div>

                {/* Intangible */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
                  <h5 className="text-xl font-bold text-purple-700 mb-3">
                    Intangible Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Non-measurable, qualitative
                    assumptions.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                      <li>Brand reputation</li>
                      <li>Goodwill</li>
                      <li>Employee morale</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Assuming employees will genuinely adopt cyber hygiene
                      practices after training.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* C. Controllable vs Uncontrollable */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-purple-700 mb-4">
                C. Controllable vs. Uncontrollable Premises
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Controllable */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                  <h5 className="text-xl font-bold text-green-700 mb-3">
                    Controllable Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Those under management's
                    influence.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                      <li>Internal policies</li>
                      <li>Vendor selection</li>
                      <li>Training schedules</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Choosing to implement endpoint detection software or MFA
                      (multi-factor authentication).
                    </p>
                  </div>
                </div>

                {/* Uncontrollable */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-300">
                  <h5 className="text-xl font-bold text-red-700 mb-3">
                    Uncontrollable Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Beyond management's control.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                      <li>Natural disasters</li>
                      <li>Wars</li>
                      <li>Government laws</li>
                      <li>Sudden economic crises</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      A global ransomware outbreak (like WannaCry) or new data
                      localization law.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* D. Known vs Unknown */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-purple-700 mb-4">
                D. Known vs. Unknown Premises
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Known */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-300">
                  <h5 className="text-xl font-bold text-indigo-700 mb-3">
                    Known Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Established facts and
                    certainties.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Example:
                    </p>
                    <p className="text-sm text-gray-700">
                      Company policy mandates yearly penetration testing.
                    </p>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      IT department knows that firewall licenses must be renewed
                      in 2026.
                    </p>
                  </div>
                </div>

                {/* Unknown */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border-2 border-gray-300">
                  <h5 className="text-xl font-bold text-gray-700 mb-3">
                    Unknown Premises
                  </h5>
                  <p className="text-gray-700 mb-4">
                    <strong>Definition:</strong> Future uncertainties that are
                    hard to predict.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Example:
                    </p>
                    <p className="text-sm text-gray-700">
                      Sudden geopolitical conflict affecting data centers abroad.
                    </p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🔒 Cybersecurity Example:</strong>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      A new type of AI-driven cyberattack emerging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sector-Wise Examples */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🏢</span>
              Sector-Wise Examples of Planning Premises
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  sector: "Banking & Finance (BFSI)",
                  icon: "🏦",
                  internal: "Availability of a cybersecurity audit team",
                  external: "RBI cybersecurity compliance guidelines",
                  tangible: "₹2 crore budget for digital fraud prevention tools",
                  intangible: "Trust of customers in digital banking security",
                },
                {
                  sector: "Healthcare",
                  icon: "🏥",
                  internal: "Hospital's IT infrastructure readiness",
                  external: "HIPAA/DPDP Act regulations",
                  tangible: "500 secure devices needed for staff",
                  intangible:
                    "Doctors' willingness to adapt to digital health records securely",
                },
                {
                  sector: "Education",
                  icon: "🎓",
                  internal: "University's online learning platform",
                  external: "AI-based plagiarism detection regulations",
                  tangible: "Availability of licensed anti-virus tools for student labs",
                  intangible:
                    "Students' seriousness in following safe digital practices",
                },
                {
                  sector: "E-commerce",
                  icon: "🛒",
                  internal: "Secure payment gateway integration",
                  external: "PCI-DSS compliance requirement",
                  tangible: "Server infrastructure for festive season traffic",
                  intangible: "Customer trust in website's data protection",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-xl font-bold text-purple-700">
                      {item.sector}
                    </h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong className="text-green-700">Internal:</strong>{" "}
                        {item.internal}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong className="text-orange-700">External:</strong>{" "}
                        {item.external}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong className="text-blue-700">Tangible:</strong>{" "}
                        {item.tangible}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-gray-800">
                        <strong className="text-purple-700">Intangible:</strong>{" "}
                        {item.intangible}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: TYPES OF PLANS */}
        <section
          id="types-of-plans"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">📋</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">Types of Plans</h2>
              <p className="text-gray-600 text-lg mt-2">
                Complete Classification and Definitions
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-indigo-600">
            <p className="text-lg text-gray-800 leading-relaxed">
              Plans can be classified into several distinct types based on their{" "}
              <strong>purpose, scope, time horizon, and frequency of use</strong>.
              The major types include strategic, tactical, operational, and
              contingency plans, along with several specialized plans for specific
              functions or projects.
            </p>
          </div>

          {/* Comprehensive Table */}
          <div className="mb-8 overflow-x-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Complete Types of Plans - Summary Table
            </h3>
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">Type</th>
                  <th className="border border-gray-300 p-4 text-left">
                    Definition
                  </th>
                  <th className="border border-gray-300 p-4 text-left">
                    General Example
                  </th>
                  <th className="border border-gray-300 p-4 text-left">
                    Cybersecurity Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Strategic Plan",
                    definition: "Long-term, org-wide",
                    general: "Expanding globally",
                    cyber: "Zero-Trust model in 7 years",
                  },
                  {
                    type: "Tactical Plan",
                    definition: "Medium-term, departmental",
                    general: "Increase market share",
                    cyber: "Deploy EDR in 3 years",
                  },
                  {
                    type: "Operational Plan",
                    definition: "Short-term, daily execution",
                    general: "Daily production schedule",
                    cyber: "Weekly patch updates",
                  },
                  {
                    type: "Standing Plan",
                    definition: "Ongoing recurring activities",
                    general: "HR leave policy",
                    cyber: "MFA requirement policy",
                  },
                  {
                    type: "Single-Use Plan",
                    definition: "One-time activity",
                    general: "Launch new product",
                    cyber: "Cloud migration security plan",
                  },
                  {
                    type: "Contingency Plan",
                    definition: "Backup for uncertainty",
                    general: "Alternative suppliers",
                    cyber: "Disaster recovery plan",
                  },
                  {
                    type: "Policy",
                    definition: "Broad guideline",
                    general: "Promotion policy",
                    cyber: "BYOD policy",
                  },
                  {
                    type: "Procedure",
                    definition: "Step-by-step method",
                    general: "Onboarding process",
                    cyber: "Malware incident response",
                  },
                  {
                    type: "Rule",
                    definition: 'Specific "must/must not"',
                    general: "No smoking",
                    cyber: "No personal USB use",
                  },
                  {
                    type: "Programme",
                    definition: "Set of projects",
                    general: "Training programme",
                    cyber: "Cyber Awareness Week",
                  },
                  {
                    type: "Budget",
                    definition: "Financial allocation",
                    general: "Marketing ₹5 crore",
                    cyber: "Cybersecurity ₹1.5 crore",
                  },
                ].map((plan, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 p-4 font-semibold text-indigo-700">
                      {plan.type}
                    </td>
                    <td className="border border-gray-300 p-4">{plan.definition}</td>
                    <td className="border border-gray-300 p-4">{plan.general}</td>
                    <td className="border border-gray-300 p-4">{plan.cyber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed Explanations */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Detailed Explanation of Each Type
            </h3>

            {/* Strategic Plan */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl mb-6 border-l-4 border-purple-600">
              <h4 className="text-2xl font-bold text-purple-700 mb-4">
                1. Strategic Plan
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Purpose:</strong> Provides a long-term vision and
                  overall direction for an organization.
                </p>
                <p>
                  <strong>Focus:</strong> Setting mission, vision, goals, and
                  broad strategies.
                </p>
                <p>
                  <strong>Duration:</strong> Usually covers 3 to 5 years or more.
                </p>
                <p>
                  <strong>Use:</strong> Guides top-level management decisions and
                  resource allocation.
                </p>
                <div className="bg-white p-4 rounded-lg mt-3">
                  <p className="font-semibold text-purple-800 mb-2">
                    Example:
                  </p>
                  <p>
                    A cybersecurity firm setting its expansion into new markets
                    over 5 years.
                  </p>
                </div>
              </div>
            </div>

            {/* Operational Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">
                3. Operational Plan
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Purpose:</strong> Deals with day-to-day activities and
                  processes.
                </p>
                <p>
                  <strong>Focus:</strong> Specific tasks, schedules, resource
                  allocation, and responsibilities.
                </p>
                <p>
                  <strong>Duration:</strong> Short-term, often monthly or yearly.
                </p>
                <p>
                  <strong>Use:</strong> Guides lower-level management and staff
                  execution.
                </p>
                <div className="bg-white p-4 rounded-lg mt-3">
                  <p className="font-semibold text-blue-800 mb-2">Example:</p>
                  <p>
                    Scheduling cybersecurity team shifts and daily monitoring
                    tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Contingency Plan */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl mb-6 border-l-4 border-red-600">
              <h4 className="text-2xl font-bold text-red-700 mb-4">
                4. Contingency Plan
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Purpose:</strong> Prepares for unexpected events or
                  crises.
                </p>
                <p>
                  <strong>Focus:</strong> Risk assessment and backup strategies.
                </p>
                <p>
                  <strong>Duration:</strong> Activated as needed.
                </p>
                <p>
                  <strong>Use:</strong> Ensures business continuity and quick
                  response.
                </p>
                <div className="bg-white p-4 rounded-lg mt-3">
                  <p className="font-semibold text-red-800 mb-2">Example:</p>
                  <p>
                    Hospital's emergency response plan for IT system failures or
                    cyberattacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STRATEGIC PLANNING */}
        <section
          id="strategic-planning"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🎯</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Strategic Planning
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Complete Framework & Components
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              📖 What is Strategic Planning?
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              The strategic plan is a <strong>long-term, high-level roadmap</strong>{" "}
              defining where an organization wants to go and how it intends to get
              there, guiding decision-making across all levels. It aligns the
              organization's vision, mission, values, and goals with strategies and
              tactical actions.
            </p>
          </div>

          {/* Key Components */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🔑</span>
              Key Components of a Strategic Plan
            </h3>

            <div className="space-y-6">
              {/* 1. Vision */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold text-blue-700 mb-3">
                  1. Vision
                </h4>
                <p className="text-gray-700 mb-3">
                  Defines the aspirational, long-term goal of the organization—what
                  it wants to achieve in the future. This acts like a guiding star
                  for all efforts and motivates employees and stakeholders.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Example Question:
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    "What do we aspire to achieve in the long term?"
                  </p>
                </div>
              </div>

              {/* 2. Mission */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="text-2xl font-bold text-green-700 mb-3">
                  2. Mission
                </h4>
                <p className="text-gray-700 mb-3">
                  The purpose and reason for the organization's existence. It
                  explains who the organization serves and how it creates value.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Example Question:
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    "Why do we exist and what do we do to fulfill our vision?"
                  </p>
                </div>
              </div>

              {/* 3. Core Values */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="text-2xl font-bold text-purple-700 mb-3">
                  3. Core Values
                </h4>
                <p className="text-gray-700 mb-3">
                  Fundamental beliefs and principles that shape behavior and
                  decision-making within the organization, providing a cultural and
                  ethical framework.
                </p>
              </div>

              {/* 4. Environmental Scan */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="text-2xl font-bold text-orange-700 mb-3">
                  4. Environmental Scan (Situational Analysis)
                </h4>
                <p className="text-gray-700 mb-3">
                  An assessment of internal strengths and weaknesses, as well as
                  external opportunities and threats (SWOT analysis), to understand
                  the current landscape and inform strategic choices.
                </p>
              </div>

              {/* 5. Strategic Goals & Objectives */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="text-2xl font-bold text-red-700 mb-3">
                  5. Strategic Goals and Objectives
                </h4>
                <p className="text-gray-700 mb-3">
                  Clear, measurable targets aligned with the vision and mission to
                  guide efforts and evaluate progress. These goals strike a balance
                  between aspirational and achievable.
                </p>
              </div>

              {/* 6. Strategy & Approach */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-500">
                <h4 className="text-2xl font-bold text-indigo-700 mb-3">
                  6. Strategy and Approach
                </h4>
                <p className="text-gray-700 mb-3">
                  The broad plan for achieving goals, including key initiatives,
                  resource allocation, and competitive positioning. This articulates
                  the "how" in terms of focus areas and priorities.
                </p>
              </div>

              {/* 7. Tactics & Action Plans */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-500">
                <h4 className="text-2xl font-bold text-teal-700 mb-3">
                  7. Tactics and Action Plans
                </h4>
                <p className="text-gray-700 mb-3">
                  Specific short-term programs, activities, and steps that implement
                  the strategy. This includes timelines, responsibilities, and
                  resource deployment details.
                </p>
              </div>

              {/* 8. Monitoring & Evaluation */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border-l-4 border-gray-500">
                <h4 className="text-2xl font-bold text-gray-700 mb-3">
                  8. Monitoring and Evaluation
                </h4>
                <p className="text-gray-700 mb-3">
                  Systems to track progress, measure success, and enable course
                  correction. The strategic plan is a living document that is
                  regularly reviewed and updated as needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ORGANIZING */}
        <section
          id="organizing"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🏗️</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">Organizing</h2>
              <p className="text-gray-600 text-lg mt-2">
                Process, Importance & Structure
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">
              📖 What is Organizing?
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong>Organizing</strong> is the process of arranging and
              coordinating resources (human, financial, physical, and
              technological) to achieve organizational goals effectively.
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>It involves:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li>Identifying activities</li>
                <li>Grouping them into departments</li>
                <li>Assigning responsibilities</li>
                <li>Establishing authority relationships</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-gray-800 font-semibold">
                In simple words: Organizing converts a plan into an actionable
                structure by defining "Who will do what, how, and under whose
                authority."
              </p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-2xl text-blue-800 mb-4">
              🔒 Cybersecurity Example
            </h4>
            <p className="text-gray-700 mb-3">
              A company has a goal to strengthen its cyber defense system.
            </p>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Activities identified:</strong> Network monitoring, threat
                detection, employee training, compliance.
              </p>
              <p>
                <strong>Grouping:</strong> Create departments (SOC team,
                Compliance team, Training team).
              </p>
              <p>
                <strong>Assignment:</strong> SOC analysts handle real-time
                monitoring; IT compliance ensures regulatory checks.
              </p>
              <p>
                <strong>Authority:</strong> SOC Head reports to CISO (Chief
                Information Security Officer).
              </p>
            </div>
            <p className="text-gray-800 font-semibold mt-4">
              Thus, organizing ensures: right people + right tasks + right
              authority = goal achievement.
            </p>
          </div>

          {/* Importance */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">⭐</span>
              Importance of Organizing
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "a) Facilitates Specialization",
                  desc: "Work is divided into small, defined tasks → leads to expertise.",
                  example:
                    "One team focuses on penetration testing, another on risk compliance, another on incident response.",
                  icon: "🎯",
                  color: "purple",
                },
                {
                  title: "b) Clarifies Authority and Responsibility",
                  desc: "Everyone knows their role and reporting relationships. Prevents duplication and confusion.",
                  example:
                    "SOC analysts report to SOC Manager; compliance auditors report to CISO.",
                  icon: "👔",
                  color: "blue",
                },
                {
                  title: "c) Optimum Utilization of Resources",
                  desc: "Organizing ensures manpower, money, and technology are used efficiently.",
                  example:
                    "Instead of multiple departments buying different tools, organizing centralizes procurement of firewalls, SIEM, and anti-malware tools.",
                  icon: "💰",
                  color: "green",
                },
                {
                  title: "d) Coordination",
                  desc: "Harmonizes efforts of different departments.",
                  example:
                    "IT team, HR, and Legal work together in a cyber breach investigation through a well-organized structure.",
                  icon: "🤝",
                  color: "orange",
                },
                {
                  title: "e) Adaptability to Change",
                  desc: "A good organizational structure can absorb technological, regulatory, or environmental changes.",
                  example:
                    'When AI-based threats rise, the organization can quickly create a new "AI Threat Response Unit."',
                  icon: "🔄",
                  color: "teal",
                },
                {
                  title: "f) Growth and Expansion",
                  desc: "With clear roles and structure, organizations can scale easily.",
                  example:
                    "A cybersecurity consulting firm expanding globally can replicate its SOC structure in different countries.",
                  icon: "📈",
                  color: "red",
                },
                {
                  title: "g) Basis for Effective Management",
                  desc: "Organizing sets the foundation for other functions: planning, staffing, directing, and controlling.",
                  example:
                    "Without an organized structure, even the best cyber strategy (plan) fails in execution.",
                  icon: "🎪",
                  color: "indigo",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border-2 border-${item.color}-200 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm">{item.desc}</p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-600">
                      <strong>🔒 Cyber Example:</strong> {item.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organization Structure */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🏛️</span>
              Organization Structure
            </h3>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-6 border-l-4 border-purple-600">
              <h4 className="text-2xl font-bold text-purple-800 mb-3">
                Definition
              </h4>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Organization Structure</strong> is the formal framework of
                authority, responsibility, and communication within an organization.
                It shows who reports to whom, who makes decisions, and how
                different activities are coordinated.
              </p>
              <p className="text-gray-700 italic">
                It is like the "skeleton" of the organization on which the "flesh"
                of operations is built.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
              <p className="text-gray-700 mb-3">
                <strong>Example (Cybersecurity):</strong>
              </p>
              <p className="text-gray-700 mb-2">In a cybersecurity firm:</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                  The CISO (Chief Information Security Officer) leads,
                </li>
                <li>
                  Under them → SOC Manager, Risk & Compliance Head, Security
                  Engineers, Analysts.
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-3">
                This structure ensures clarity and accountability.
              </p>
            </div>

            {/* Importance of Structure */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl mb-6">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Importance of Organization Structure
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Clarity of Roles – avoids confusion about duties",
                  "Efficient Decision Making – clear authority levels",
                  "Coordination & Communication – smoother flow of work",
                  "Accountability – everyone knows who is responsible",
                  "Scalability – supports growth and expansion",
                  "Specialization – allows expertise in different areas",
                  "Control & Supervision – easier to monitor performance",
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-lg border border-green-200"
                  >
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Structure - Brief */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-indigo-800 mb-4">
                Types of Organization Structure
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Line Structure",
                    desc: "Authority flows directly from top to bottom.",
                    best: "Small startups",
                  },
                  {
                    name: "Functional Structure",
                    desc: "Work divided based on functions/specializations.",
                    best: "Medium/large organizations",
                  },
                  {
                    name: "Line and Staff Structure",
                    desc: "Line managers decide, staff specialists advise.",
                    best: "Organizations needing expert advice",
                  },
                ].map((type, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg border border-indigo-200"
                  >
                    <h5 className="font-bold text-indigo-700 mb-2">{type.name}</h5>
                    <p className="text-sm text-gray-700 mb-2">{type.desc}</p>
                    <p className="text-xs text-gray-600">
                      <strong>Best for:</strong> {type.best}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: RESPONSIBILITY & AUTHORITY */}
        <section
          id="responsibility-authority"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">⚖️</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Responsibility & Authority
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Understanding the Balance
              </p>
            </div>
          </div>

          {/* Definitions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Responsibility */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-4 border-blue-300">
              <h3 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="mr-2">📋</span>
                Responsibility
              </h3>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  The <strong>obligation</strong> of an individual/manager to
                  perform assigned tasks effectively. It cannot be delegated;
                  accountability always remains.
                </p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Characteristics:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Arises from assigned duties</li>
                  <li>Always flows upward (manager holds employees accountable)</li>
                  <li>Cannot be completely delegated</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Example:
                </p>
                <p className="text-sm text-gray-700">
                  A SOC analyst is responsible for monitoring threats.
                </p>
              </div>
            </div>

            {/* Authority */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-4 border-green-300">
              <h3 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
                <span className="mr-2">👑</span>
                Authority
              </h3>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  The <strong>right</strong> to give orders, make decisions, and
                  allocate resources to accomplish organizational goals.
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Characteristics:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Legally or organizationally granted power</li>
                  <li>Flows downward from top management</li>
                  <li>Comes with decision-making rights and use of resources</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Example:
                </p>
                <p className="text-sm text-gray-700">
                  A CISO has authority to enforce security policies.
                </p>
              </div>
            </div>
          </div>

          {/* Relationship */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Relationship Between Responsibility & Authority
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              They must be <strong>balanced</strong>: Responsibility without
              authority leads to frustration; authority without responsibility
              leads to misuse of power.
            </p>
            <div className="bg-white p-5 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>In cybersecurity:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  If a network admin is responsible for patching vulnerabilities
                  but has no authority to schedule downtime → delays & risks.
                </li>
                <li>
                  If a manager has authority to buy security tools but no
                  responsibility for their effectiveness → waste of resources.
                </li>
              </ul>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              Principles for Effective Balance
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  principle: "Unity of Command",
                  desc: "Each employee should report to only one superior for clarity.",
                },
                {
                  principle: "Delegation of Authority",
                  desc: "Superiors must delegate enough power to enable performance.",
                },
                {
                  principle: "Accountability",
                  desc: "Even if tasks are delegated, managers remain accountable.",
                },
                {
                  principle: "Clear Role Definition",
                  desc: "In cybersecurity, roles like incident response, data protection, network security must be well-defined.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg border-2 border-orange-200"
                >
                  <h4 className="font-bold text-orange-700 mb-2">
                    {item.principle}
                  </h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problems */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ What Happens When They're Unbalanced?
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-2 border-red-200">
                <p className="font-bold text-red-700 mb-2 text-lg">
                  Responsibility WITHOUT Authority = Frustration 😤
                </p>
                <p className="text-gray-700">
                  <strong>Example:</strong> Network admin is responsible for
                  patching vulnerabilities but has NO authority to schedule
                  downtime → System stays vulnerable!
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border-2 border-red-200">
                <p className="font-bold text-red-700 mb-2 text-lg">
                  Authority WITHOUT Responsibility = Misuse of Power 😈
                </p>
                <p className="text-gray-700">
                  <strong>Example:</strong> Manager has authority to buy expensive
                  security tools but no responsibility for results → Waste of
                  money!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SPAN OF CONTROL */}
        <section
          id="span-of-control"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">👥</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                Span of Control
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                How Many People Can One Manager Supervise?
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">
              📖 Definition
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong>Span of Control</strong> refers to the number of
              subordinates a manager or supervisor can effectively direct and
              control.
            </p>
            <p className="text-gray-700">
              It determines the structure of an organization – whether it is{" "}
              <strong>flat (wide span)</strong> or <strong>tall (narrow span)</strong>.
            </p>
            <div className="bg-white p-4 rounded-lg mt-4">
              <p className="text-gray-700">
                In cybersecurity management, deciding span of control is crucial
                because teams handle sensitive tasks like incident response,
                compliance, and monitoring where both efficiency and accuracy
                matter.
              </p>
            </div>
          </div>

          {/* Types */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Types of Span of Control
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Wide Span */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-4 border-blue-300">
                <h4 className="text-2xl font-bold text-blue-700 mb-4">
                  1. Wide Span of Control (Flat Structure) 📏➡️
                </h4>
                <p className="text-gray-700 mb-4">
                  One manager supervises <strong>MANY</strong> subordinates
                  (15-25+). Results in fewer levels of management.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-4 border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-3">
                    ✅ Advantages:
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700 list-disc ml-4">
                    <li>Faster communication and decision-making</li>
                    <li>Cost-effective (fewer managers)</li>
                    <li>Promotes independence and responsibility</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-4 border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-3">
                    ❌ Disadvantages:
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700 list-disc ml-4">
                    <li>Overburden on managers</li>
                    <li>Risk of miscommunication</li>
                    <li>Difficult to monitor specialized tasks</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    🔒 Cybersecurity Example:
                  </p>
                  <p className="text-sm text-gray-700">
                    A SOC (Security Operations Center) Manager supervising 25
                    analysts across different shifts. Faster alerts are managed,
                    but detailed mentoring becomes difficult.
                  </p>
                </div>
              </div>

              {/* Narrow Span */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-4 border-purple-300">
                <h4 className="text-2xl font-bold text-purple-700 mb-4">
                  2. Narrow Span of Control (Tall Structure) 📏⬇️
                </h4>
                <p className="text-gray-700 mb-4">
                  One manager supervises <strong>FEW</strong> subordinates (3-6).
                  Creates more levels of hierarchy.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-4 border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-3">
                    ✅ Advantages:
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700 list-disc ml-4">
                    <li>Better supervision and control</li>
                    <li>Close guidance and monitoring</li>
                    <li>Easier to manage complex or specialized tasks</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-4 border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-3">
                    ❌ Disadvantages:
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700 list-disc ml-4">
                    <li>Slow decision-making</li>
                    <li>Higher administrative costs</li>
                    <li>Can create bureaucracy</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    🔒 Cybersecurity Example:
                  </p>
                  <p className="text-sm text-gray-700">
                    A CISO supervising 4 specialized leads (Network Security,
                    Cloud Security, Compliance, Incident Response) - each gets
                    close attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Factors Affecting */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Factors Affecting Span of Control
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  factor: "1. Nature of Work",
                  points: [
                    "Routine/simple tasks → Wide span possible",
                    "Complex/sensitive tasks → Narrow span better",
                    "Example: Monitoring firewall alerts (wide) vs. Digital Forensics (narrow)",
                  ],
                  icon: "🎯",
                },
                {
                  factor: "2. Manager's Competence",
                  points: [
                    "Experienced managers can handle a wider span",
                    "Example: Seasoned cyber leader managing multiple SOC shifts",
                  ],
                  icon: "👨‍💼",
                },
                {
                  factor: "3. Employee Competence",
                  points: [
                    "Skilled employees need less supervision → Wider span",
                    "Example: Certified ethical hackers working independently",
                  ],
                  icon: "🎓",
                },
                {
                  factor: "4. Technology Support",
                  points: [
                    "AI tools and dashboards allow one manager to handle more people",
                    "Example: Using SIEM tools (Splunk, QRadar)",
                  ],
                  icon: "💻",
                },
                {
                  factor: "5. Geographical Spread",
                  points: [
                    "Teams across locations need narrow span",
                    "Example: Cyber teams in India, USA, Europe need structured reporting",
                  ],
                  icon: "🌍",
                },
                {
                  factor: "6. Risk and Sensitivity",
                  points: [
                    "High-risk tasks need close monitoring → Narrow span",
                    "Example: Handling ransomware negotiations",
                  ],
                  icon: "⚠️",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{item.icon}</span>
                    <h4 className="text-lg font-bold text-indigo-700">
                      {item.factor}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {item.points.map((point, pidx) => (
                      <li key={pidx} className="bg-white p-2 rounded">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Importance */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Importance of Span of Control in Cybersecurity
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Impacts incident response speed",
                "Determines quality of supervision",
                "Influences training and mentoring",
                "Balances cost and efficiency",
                "Affects employee satisfaction and burnout levels",
              ].map((point, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 7: DELEGATION OF AUTHORITY */}
        <section
          id="delegation"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🎁</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Delegation of Authority
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Empowering Others While Maintaining Accountability
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              📖 What is Delegation of Authority?
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              In management, <strong>Delegation of Authority</strong> means
              transferring part of decision-making power and responsibility from a
              manager to a subordinate.
            </p>
            <p className="text-gray-700 mb-4">
              It allows top leaders to focus on strategic goals while empowering
              lower levels to handle routine or specialized tasks.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 font-semibold">
                Delegation of Authority is the process of assigning responsibility
                and granting authority to others to carry out specific tasks,
                while the ultimate accountability remains with the superior.
              </p>
            </div>
          </div>

          {/* Importance in Cyber */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <p className="text-lg text-gray-800 mb-3">
              In cybersecurity organizations, delegation is critical because{" "}
              <strong>quick decisions during incidents can save millions</strong>.
            </p>
          </div>

          {/* Key Elements */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Key Elements of Delegation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  element: "1. Assignment of Responsibility",
                  desc: "Define the task clearly.",
                  example: "SOC Analyst responsible for monitoring SIEM alerts.",
                  color: "blue",
                },
                {
                  element: "2. Granting Authority",
                  desc: "Give power to make decisions and use resources.",
                  example:
                    "Incident Response Manager authorized to isolate infected servers.",
                  color: "green",
                },
                {
                  element: "3. Accountability",
                  desc: "Superior remains answerable for results.",
                  example:
                    "CISO accountable for overall data breach outcomes.",
                  color: "red",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border-2 border-${item.color}-200`}
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {item.element}
                  </h4>
                  <p className="text-gray-700 mb-3">{item.desc}</p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> {item.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Principles of Effective Delegation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  principle: "1. Clarity of Tasks",
                  desc: "Tasks should be specific, measurable, and time-bound.",
                },
                {
                  principle: "2. Matching Authority with Responsibility",
                  desc: "If someone is responsible, they must have authority.",
                },
                {
                  principle: "3. Unity of Command",
                  desc: "One person should report to one manager.",
                },
                {
                  principle: "4. Right Person for the Right Task",
                  desc: "Delegation should consider skills and experience.",
                },
                {
                  principle: "5. Adequate Controls & Feedback",
                  desc: "Regular reporting, monitoring tools, and audits.",
                },
                {
                  principle: "6. Trust but Verify",
                  desc: "Empower employees but keep checks.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border-2 border-indigo-200"
                >
                  <h4 className="text-lg font-bold text-indigo-700 mb-2">
                    {item.principle}
                  </h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Benefits of Delegation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  for: "For Managers",
                  benefits: [
                    "Frees time for strategic planning",
                    "Reduces overload",
                  ],
                },
                {
                  for: "For Employees",
                  benefits: [
                    "Builds confidence",
                    "Enhances decision-making skills",
                  ],
                },
                {
                  for: "For Organization",
                  benefits: [
                    "Faster decisions",
                    "Better productivity",
                    "Leadership development",
                  ],
                },
                {
                  for: "For Cybersecurity",
                  benefits: [
                    "Quick containment of threats",
                    "Stronger resilience",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-3">{item.for}:</h4>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-center text-sm text-gray-700">
                        <span className="text-xl mr-2">✅</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Barriers */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Barriers to Delegation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-red-700 mb-3">
                  From Manager's Side:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
                  <li>Fear of losing control</li>
                  <li>Belief that "I can do it better myself"</li>
                  <li>Lack of trust in subordinates</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-red-700 mb-3">
                  From Subordinate's Side:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
                  <li>Fear of failure</li>
                  <li>Lack of confidence</li>
                  <li>Insufficient training/resources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: CENTRALIZATION VS DECENTRALIZATION */}
        <section
          id="centralization-decentralization"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🏛️</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                Centralization vs Decentralization
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Where Should Decision-Making Power Lie?
              </p>
            </div>
          </div>

          {/* Definitions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Centralization */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-4 border-red-300">
              <h3 className="text-3xl font-bold text-red-700 mb-4 flex items-center">
                <span className="mr-2">🏰</span>
                Centralization
              </h3>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  Decision-making authority is <strong>concentrated at the top levels</strong>{" "}
                  of management. The power flows downward, and lower managers act
                  mainly as executors.
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                <ul className="text-sm space-y-1 text-gray-700 list-disc ml-4">
                  <li>Uniform standards</li>
                  <li>Easy to monitor</li>
                  <li>Fast crisis response</li>
                  <li>Consistent policies</li>
                </ul>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                <ul className="text-sm space-y-1 text-gray-700 list-disc ml-4">
                  <li>Slow local decisions</li>
                  <li>Demotivates local teams</li>
                  <li>May miss local threats</li>
                  <li>Overburdened top management</li>
                </ul>
              </div>
            </div>

            {/* Decentralization */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-4 border-green-300">
              <h3 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
                <span className="mr-2">🌐</span>
                Decentralization
              </h3>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  Decision-making authority is <strong>dispersed throughout different levels</strong>{" "}
                  of the organization, allowing middle and lower managers to make
                  important decisions.
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                <ul className="text-sm space-y-1 text-gray-700 list-disc ml-4">
                  <li>Fast local response</li>
                  <li>Encourages innovation</li>
                  <li>Motivates employees</li>
                  <li>Reduces top management burden</li>
                </ul>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                <ul className="text-sm space-y-1 text-gray-700 list-disc ml-4">
                  <li>Inconsistent standards</li>
                  <li>Coordination challenges</li>
                  <li>Higher costs</li>
                  <li>Risk of duplication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Dimensions of Centralization vs. Decentralization
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  dimension: "Decision-making Power",
                  central:
                    "Only top managers make strategic and operational calls",
                  decentral: "Local managers can take decisions",
                },
                {
                  dimension: "Information Flow",
                  central: "Top-down flow",
                  decentral:
                    "Two-way flow (feedback + decision-making at all levels)",
                },
                {
                  dimension: "Control",
                  central: "Tight control",
                  decentral: "Shared control and accountability",
                },
                {
                  dimension: "Flexibility",
                  central: "Uniform policies, less flexibility",
                  decentral: "Adaptability to local conditions",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border-2 border-purple-200"
                >
                  <h4 className="text-lg font-bold text-purple-700 mb-3">
                    {item.dimension}
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-800">
                        <strong className="text-red-600">Centralization:</strong>{" "}
                        {item.central}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-800">
                        <strong className="text-green-600">
                          Decentralization:
                        </strong>{" "}
                        {item.decentral}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cybersecurity Applications */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Cybersecurity Applications
            </h3>

            {/* Centralization in Cyber */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-6 border-l-4 border-red-500">
              <h4 className="text-2xl font-bold text-red-700 mb-4">
                Centralization in Cybersecurity
              </h4>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-xl mr-2">🔐</span>
                  <div>
                    <strong>Policy Formation:</strong> All data protection,
                    firewall settings, and encryption rules are decided centrally.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">🚨</span>
                  <div>
                    <strong>Incident Response:</strong> Only the central Security
                    Operations Center (SOC) can decide how to handle
                    malware/ransomware.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">🔑</span>
                  <div>
                    <strong>User Access Control:</strong> Headquarters decides who
                    gets access to sensitive databases.
                  </div>
                </li>
              </ul>
              <div className="bg-white p-5 rounded-lg">
                <p className="text-gray-800 font-semibold mb-3">Example:</p>
                <p className="text-gray-700">
                  In a national bank, the central IT security team enforces
                  uniform login protocols, multifactor authentication, and backup
                  schedules for every branch.
                </p>
              </div>
            </div>

            {/* Decentralization in Cyber */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="text-2xl font-bold text-green-700 mb-4">
                Decentralization in Cybersecurity
              </h4>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-xl mr-2">🌍</span>
                  <div>
                    <strong>Autonomy for Local Teams:</strong> Departmental IT
                    managers can adapt defenses to specific threats in their
                    region.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">⚡</span>
                  <div>
                    <strong>Speed in Crisis:</strong> Local incident response
                    teams can isolate compromised systems without waiting for HQ
                    approval.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">🛠️</span>
                  <div>
                    <strong>Custom Solutions:</strong> Each division can implement
                    tools that best fit their tech stack.
                  </div>
                </li>
              </ul>
              <div className="bg-white p-5 rounded-lg">
                <p className="text-gray-800 font-semibold mb-3">Example:</p>
                <p className="text-gray-700">
                  A global tech company lets each country office choose their own
                  cloud vendors (AWS in US, Azure in Europe), while maintaining
                  core cybersecurity principles centrally.
                </p>
              </div>
            </div>
          </div>

          {/* Balanced Approach */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              💡 Balanced Approach (Hybrid Model)
            </h3>
            <p className="text-gray-700 mb-4">
              Most modern organizations use a <strong>hybrid model</strong>:
            </p>
            <div className="bg-white p-5 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-xl mr-2">🔒</span>
                  <div>
                    <strong>Centralized:</strong> Core security policies,
                    compliance, strategic direction
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">🌐</span>
                  <div>
                    <strong>Decentralized:</strong> Day-to-day operations,
                    tactical decisions, local threat response
                  </div>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                This ensures both consistency AND flexibility!
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: TYPES OF ORGANIZATIONS */}
        <section
          id="types-of-organizations"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-purple-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">🏢</span>
            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                Types of Organization Structures
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Complete Classification with Examples
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl mb-8 border-l-4 border-purple-600">
            <p className="text-lg text-gray-800 leading-relaxed">
              Organization structure determines how tasks are divided, authority
              is distributed, and coordination happens. Different structures suit
              different business needs, sizes, and industries.
            </p>
          </div>

          {/* All Types */}
          <div className="space-y-8">
            {/* 1. Line Organization */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">📏</span>
                <h3 className="text-3xl font-bold text-blue-700">
                  1. Line Organization
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  The simplest and oldest form where authority flows directly from
                  top to bottom in a straight line. Each person has one boss
                  (unity of command).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Simple and easy to understand</li>
                    <li>Clear authority and responsibility</li>
                    <li>Quick decisions</li>
                    <li>Good for small organizations</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Lack of specialization</li>
                    <li>Manager overload</li>
                    <li>Rigid and inflexible</li>
                    <li>No expert advice</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-100 p-5 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">
                  📊 Structure:
                </p>
                <p className="text-gray-700 mb-3">Owner → Manager → Supervisor → Workers</p>
                <p className="font-semibold text-blue-800 mb-2">
                  🔒 Cybersecurity Example:
                </p>
                <p className="text-gray-700">
                  A small cybersecurity startup: Founder → 3 Security Engineers.
                  Direct reporting, no complexity.
                </p>
              </div>
            </div>

            {/* 2. Functional Organization */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🎯</span>
                <h3 className="text-3xl font-bold text-green-700">
                  2. Functional Organization
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  Work is divided based on specialized functions (like marketing,
                  finance, HR, operations). Each department has experts in that
                  area.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Specialization and expertise</li>
                    <li>Better efficiency</li>
                    <li>Reduced workload on managers</li>
                    <li>Skill development</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Multiple bosses (confusion)</li>
                    <li>Coordination issues</li>
                    <li>Conflict between departments</li>
                    <li>Difficult to pinpoint accountability</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 p-5 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">
                  📊 Structure:
                </p>
                <p className="text-gray-700 mb-3">
                  CEO → Functional Departments (HR, Finance, IT, Marketing, Operations)
                </p>
                <p className="font-semibold text-green-800 mb-2">
                  🔒 Cybersecurity Example:
                </p>
                <p className="text-gray-700">
                  Quantafile structure: Development Team | Sales Team | Support
                  Team | Marketing Team - each specialized in their function.
                </p>
              </div>
            </div>

            {/* 3. Line & Staff Organization */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">👔</span>
                <h3 className="text-3xl font-bold text-purple-700">
                  3. Line and Staff Organization
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Definition:
                </p>
                <p className="text-gray-700 mb-3">
                  Combines line organization with staff advisors/specialists.{" "}
                  <strong>Line managers</strong> have authority to make decisions;{" "}
                  <strong>Staff</strong> provide expert advice and support.
                </p>
                <div className="bg-purple-50 p-4 rounded mt-3">
                  <p className="text-gray-800">
                    <strong>Line:</strong> Production, Sales (make decisions)
                  </p>
                  <p className="text-gray-800">
                    <strong>Staff:</strong> HR, Legal, IT Support (advise)
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Expert advice available</li>
                    <li>Better decisions</li>
                    <li>Reduced burden on line managers</li>
                    <li>Specialization + authority combined</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Conflict between line and staff</li>
                    <li>Staff advice may be ignored</li>
                    <li>Confusion over authority</li>
                    <li>Higher costs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-100 p-5 rounded-lg">
                <p className="font-semibold text-purple-800 mb-2">
                  🔒 Cybersecurity Example:
                </p>
                <p className="text-gray-700">
                  <strong>Line:</strong> SOC Manager (makes operational decisions
                  about threat response)
                  <br />
                  <strong>Staff:</strong> Security Consultant (provides expert
                  advice on zero-trust architecture but doesn't command SOC team)
                </p>
              </div>
            </div>

            {/* 4. Matrix Organization */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">📊</span>
                <h3 className="text-3xl font-bold text-indigo-700">
                  4. Matrix Organization
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  Employees report to <strong>TWO bosses</strong>: one functional
                  manager and one project/product manager. Creates a grid-like
                  structure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Flexibility in resource allocation</li>
                    <li>Better collaboration</li>
                    <li>Employees learn multiple skills</li>
                    <li>Good for complex projects</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Confusion over authority</li>
                    <li>Power struggles</li>
                    <li>Stress from dual reporting</li>
                    <li>Complex communication</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-100 p-5 rounded-lg">
                <p className="font-semibold text-indigo-800 mb-2">
                  🔒 Cybersecurity Example:
                </p>
                <p className="text-gray-700">
                  A penetration tester reports to:
                  <br />
                  <strong>1. Functional Boss:</strong> Head of Security Testing
                  (provides training, certifications)
                  <br />
                  <strong>2. Project Boss:</strong> Client Engagement Manager
                  (assigns to bank penetration test project)
                </p>
              </div>
            </div>

            {/* 5. Divisional Organization */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🌍</span>
                <h3 className="text-3xl font-bold text-orange-700">
                  5. Divisional Organization
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Definition:
                </p>
                <p className="text-gray-700 mb-3">
                  Organization is divided into <strong>self-contained divisions</strong>{" "}
                  based on products, markets, or geography. Each division operates
                  semi-independently.
                </p>
                <div className="bg-orange-50 p-4 rounded mt-3">
                  <p className="text-gray-800">
                    <strong>Types:</strong> Product-based, Geographic, Market-based
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Clear accountability per division</li>
                    <li>Faster decisions for division</li>
                    <li>Focus on specific markets/products</li>
                    <li>Easier performance measurement</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Expensive (duplication of resources)</li>
                    <li>Coordination issues across divisions</li>
                    <li>Competition between divisions</li>
                    <li>Inconsistent policies</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-100 p-5 rounded-lg">
                <p className="font-semibold text-orange-800 mb-2">
                  🔒 Cybersecurity Example:
                </p>
                <p className="text-gray-700">
                  Quantafile expands globally:
                  <br />
                  <strong>India Division:</strong> Handles Indian clients, follows
                  DPDP Act
                  <br />
                  <strong>US Division:</strong> Handles US clients, follows HIPAA/PCI-DSS
                  <br />
                  Each has its own security team but follows core Quantafile values.
                </p>
              </div>
            </div>

            {/* 6. Project Organization */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🚀</span>
                <h3 className="text-3xl font-bold text-red-700">
                  6. Project Organization (Temporary Structure)
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  A <strong>temporary team</strong> is formed for a specific
                  project. Once the project ends, the team dissolves and members
                  return to their original departments or join new projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-semibold text-green-800 mb-2">✅ Advantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>100% focus on project</li>
                    <li>Fast execution</li>
                    <li>Cross-functional collaboration</li>
                    <li>Clear project accountability</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-semibold text-red-800 mb-2">❌ Disadvantages:</p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>No continuity after project</li>
                    <li>Employee insecurity</li>
                    <li>Resource duplication</li>
                    <li>Team members anxious about next assignment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-100 p-5 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">
                  🔒 Cybersecurity Example:
                </p>
                <p className="text-gray-700">
                  NFSU hires a special project team to conduct a complete
                  cybersecurity audit of all campuses. Team includes: 2 network
                  experts, 1 compliance officer, 2 pen testers. After 6 months,
                  project completes and team disbands.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Quick Comparison Table
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Type</th>
                    <th className="border border-gray-300 p-3 text-left">Best For</th>
                    <th className="border border-gray-300 p-3 text-left">Key Feature</th>
                    <th className="border border-gray-300 p-3 text-left">Main Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Line",
                      best: "Small firms",
                      feature: "Simple, direct authority",
                      issue: "No specialization",
                    },
                    {
                      type: "Functional",
                      best: "Medium/large firms",
                      feature: "Specialized departments",
                      issue: "Multiple bosses",
                    },
                    {
                      type: "Line & Staff",
                      best: "Organizations needing expertise",
                      feature: "Authority + advice",
                      issue: "Line-staff conflicts",
                    },
                    {
                      type: "Matrix",
                      best: "Project-based work",
                      feature: "Dual reporting",
                      issue: "Confusion, stress",
                    },
                    {
                      type: "Divisional",
                      best: "Large, diversified companies",
                      feature: "Independent divisions",
                      issue: "Expensive, duplication",
                    },
                    {
                      type: "Project",
                      best: "Temporary projects",
                      feature: "Focused teams",
                      issue: "No continuity",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="border border-gray-300 p-3 font-semibold text-purple-700">
                        {row.type}
                      </td>
                      <td className="border border-gray-300 p-3">{row.best}</td>
                      <td className="border border-gray-300 p-3">{row.feature}</td>
                      <td className="border border-gray-300 p-3">{row.issue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 10: FORMAL & INFORMAL GROUPS */}
        <section
          id="formal-informal-groups"
          ref={addToRefs}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-t-4 border-indigo-600"
        >
          <div className="flex items-center mb-8">
            <span className="text-6xl mr-4">👥</span>
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                Formal & Informal Groups
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Understanding Organizational Dynamics
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl mb-8 border-l-4 border-indigo-600">
            <p className="text-lg text-gray-800 leading-relaxed">
              Within every organization, there exist two types of groups:{" "}
              <strong>Formal groups</strong> (created by management) and{" "}
              <strong>Informal groups</strong> (formed naturally by employees).
              Both play crucial roles in organizational behavior and effectiveness.
            </p>
          </div>

          {/* Definitions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Formal Groups */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-4 border-blue-300">
              <h3 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="mr-2">📋</span>
                Formal Groups
              </h3>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  Groups that are <strong>deliberately created by management</strong>{" "}
                  to accomplish specific organizational goals and tasks. They have
                  defined structures, roles, and reporting relationships.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Characteristics:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Officially formed by management</li>
                  <li>Clear structure and hierarchy</li>
                  <li>Defined goals and objectives</li>
                  <li>Assigned leadership</li>
                  <li>Formal communication channels</li>
                  <li>Rules and regulations</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Examples:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>🔒 SOC Team in a company</li>
                  <li>📚 MBA Cybersecurity batch at NFSU</li>
                  <li>🚀 Quantafile development team</li>
                  <li>📊 Project committee</li>
                  <li>💼 Board of Directors</li>
                </ul>
              </div>
            </div>

            {/* Informal Groups */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-4 border-green-300">
              <h3 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
                <span className="mr-2">🤝</span>
                Informal Groups
              </h3>

              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  Definition:
                </p>
                <p className="text-gray-700">
                  Groups that <strong>form naturally</strong> based on personal
                  relationships, common interests, or social needs. Not created by
                  management but arise spontaneously.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Characteristics:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Emerge naturally</li>
                  <li>No fixed structure</li>
                  <li>Social and emotional goals</li>
                  <li>Leadership emerges naturally</li>
                  <li>Informal communication (grapevine)</li>
                  <li>Flexible membership</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Examples:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>☕ Lunch group at work</li>
                  <li>🎮 Gaming friends from college</li>
                  <li>💬 WhatsApp groups</li>
                  <li>⚽ Weekend sports buddies</li>
                  <li>🎵 Music interest groups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Detailed Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left">Aspect</th>
                    <th className="border border-gray-300 p-4 text-left">
                      Formal Group
                    </th>
                    <th className="border border-gray-300 p-4 text-left">
                      Informal Group
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      aspect: "Formation",
                      formal: "By management decision",
                      informal: "Spontaneous, by members themselves",
                    },
                    {
                      aspect: "Purpose",
                      formal: "Achieve organizational goals",
                      informal: "Fulfill social and emotional needs",
                    },
                    {
                      aspect: "Structure",
                      formal: "Clearly defined hierarchy and roles",
                      informal: "Flexible, no fixed structure",
                    },
                    {
                      aspect: "Leadership",
                      formal: "Appointed by management",
                      informal: "Emerges naturally based on influence",
                    },
                    {
                      aspect: "Communication",
                      formal: "Official channels (emails, meetings, memos)",
                      informal: "Casual (WhatsApp, coffee chats, grapevine)",
                    },
                    {
                      aspect: "Size",
                      formal: "Usually larger, department-level",
                      informal: "Usually smaller, close-knit",
                    },
                    {
                      aspect: "Stability",
                      formal: "Stable and permanent",
                      informal: "Dynamic, can change quickly",
                    },
                    {
                      aspect: "Rules",
                      formal: "Strict rules and procedures",
                      informal: "No formal rules, social norms",
                    },
                    {
                      aspect: "Example",
                      formal: "Cybersecurity Department, Board Committee",
                      informal: "Coffee group, College study friends",
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
                        {row.formal}
                      </td>
                      <td className="border border-gray-300 p-4 text-gray-700">
                        {row.informal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Real-Life Example */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
            <h4 className="font-bold text-2xl text-yellow-800 mb-4">
              🎓 Your College Experience at NFSU
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h5 className="font-bold text-blue-700 mb-3">Formal Group:</h5>
                <p className="text-gray-700 mb-2">
                  MBA Cybersecurity batch at NFSU
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Officially enrolled students</li>
                  <li>Structured classes and curriculum</li>
                  <li>Assigned faculty and Class Representative</li>
                  <li>Official communication about exams</li>
                  <li>Clear academic goals and timelines</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h5 className="font-bold text-green-700 mb-3">Informal Group:</h5>
                <p className="text-gray-700 mb-2">
                  Your close friends you study with
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>NOT officially created</li>
                  <li>Go for chai together</li>
                  <li>Share notes and discuss careers</li>
                  <li>Celebrate birthdays 🎉</li>
                  <li>Super important for motivation and support!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Importance */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">
                Importance of Formal Groups
              </h4>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Achieve organizational objectives systematically",
                  "Clear accountability and responsibility",
                  "Efficient task coordination",
                  "Professional skill development",
                  "Regulatory compliance and control",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-xl mr-2">✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-300">
              <h4 className="text-2xl font-bold text-green-700 mb-4">
                Importance of Informal Groups
              </h4>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Emotional support and friendship",
                  "Stress relief and work-life balance",
                  "Faster information sharing (grapevine)",
                  "Innovation through casual brainstorming",
                  "Employee satisfaction and morale",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-xl mr-2">✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relationship */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              💡 Relationship Between Formal & Informal Groups
            </h3>
            <p className="text-gray-700 mb-4">
              Smart managers recognize that{" "}
              <strong>both types of groups are essential</strong> for
              organizational success.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-700 mb-2">
                  ✅ Positive Impact:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Informal groups can boost formal group productivity</li>
                  <li>Improve communication and teamwork</li>
                  <li>Provide emotional support during crises</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-red-700 mb-2">
                  ⚠️ Potential Challenges:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                  <li>Can spread rumors (misinformation)</li>
                  <li>May resist organizational changes</li>
                  <li>Can create cliques that exclude others</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXAM PREPARATION SECTION */}
        <section
          ref={addToRefs}
          className="bg-gradient-to-r text-black from-green-500 via-teal-500 to-blue-500 rounded-2xl shadow-2xl p-10  mb-12"
        >
          <h2 className="text-5xl font-bold mb-8 text-center">
            🎯 Complete Exam Preparation Guide
          </h2>

          {/* How to Write Answers */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur mb-8">
            <h3 className="text-3xl font-bold mb-6">📝 How to Write Perfect Answers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-3">For Short Questions (2-5 marks):</h4>
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <li>Start with a clear definition</li>
                  <li>Give 2-3 key points</li>
                  <li>Provide one relevant example</li>
                  <li>Keep it concise (half page)</li>
                </ol>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">For Long Questions (7-10 marks):</h4>
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <li>Introduction with definition</li>
                  <li>Main body with detailed explanation</li>
                  <li>Use headings and subheadings</li>
                  <li>Include examples (general + cybersecurity)</li>
                  <li>Draw diagrams where applicable</li>
                  <li>Write conclusion or importance</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Key Topics */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur mb-8">
            <h3 className="text-3xl font-bold mb-6">🔑 Must-Know Topics for Exam</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Planning Premises (all types)",
                "Types of Plans (Strategic, Tactical, Operational)",
                "Strategic Planning Components",
                "Organizing Process & Importance",
                "Responsibility vs Authority",
                "Span of Control (Wide vs Narrow)",
                "Delegation of Authority",
                "Centralization vs Decentralization",
                "Types of Organization Structures",
                "Line, Functional, Matrix Organizations",
                "Formal vs Informal Groups",
                "Contingency Planning",
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

          {/* Sample Questions */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur mb-8">
            <h3 className="text-3xl font-bold mb-6">📄 Sample Exam Questions</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">1. Define planning premises. Explain the different types of planning premises with cybersecurity examples. (10 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">2. Differentiate between centralization and decentralization. Which is better for cybersecurity management? (7 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">3. What is matrix organization? Explain its advantages and disadvantages with examples. (10 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">4. Discuss the importance of delegation of authority in cybersecurity management. (7 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">5. Compare formal and informal groups in an organization. (5 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">6. Explain span of control. What factors affect span of control in cybersecurity? (7 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">7. Write short notes on: (a) Strategic Planning (b) Contingency Planning (c) Line & Staff Organization (15 marks)</p>
              </div>
              <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur">
                <p className="font-bold mb-2">8. What is responsibility and authority? Why must they be balanced? (5 marks)</p>
              </div>
            </div>
          </div>

          {/* Quick Revision Tips */}
          <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur">
            <h3 className="text-3xl font-bold mb-6">⚡ Quick Revision Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-3">Study Strategy:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✅ Read definitions multiple times</li>
                  <li>✅ Create mind maps for each topic</li>
                  <li>✅ Practice drawing org structure diagrams</li>
                  <li>✅ Memorize advantages & disadvantages</li>
                  <li>✅ Prepare 2 examples for each concept</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Exam Day Tips:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✅ Read question paper carefully (twice!)</li>
                  <li>✅ Attempt questions you know best first</li>
                  <li>✅ Use bullet points for clarity</li>
                  <li>✅ Draw diagrams neatly with labels</li>
                  <li>✅ Leave 10 mins for revision</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <div className="text-center pb-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white">
            <p className="text-4xl font-bold mb-4">
              🎉 You're All Set for Your Exam!
            </p>
            <p className="text-xl mb-4">
              This guide covers 100% of Unit-2 content from your PDF
            </p>
            <div className="flex justify-center gap-6 flex-wrap mt-6">
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ All Definitions
              </span>
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ All Examples
              </span>
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold backdrop-blur">
                ✅ All Concepts
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
