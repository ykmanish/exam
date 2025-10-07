'use client'
import { useState } from 'react'

export default function Module2StudyGuide() {
  const [activeTab, setActiveTab] = useState('intro')

  const tabs = [
    { id: 'intro', label: 'Introduction', icon: '📚' },
    { id: 'mehrabian', label: 'Mehrabian Rule', icon: '📊' },
    { id: 'appearance', label: 'Appearance & Posture', icon: '👔' },
    { id: 'bodylang', label: 'Body Language', icon: '🤝' },
    { id: 'cues', label: 'Communication Cues', icon: '💬' },
    { id: 'interview', label: 'Interview Prep', icon: '🎤' },
    { id: 'visual', label: 'Visual Aids', icon: '📊' },
    { id: 'presentations', label: 'Presentations', icon: '🎯' },
    { id: 'dyadic', label: 'Dyadic Communication', icon: '👥' },
    { id: 'meetings', label: 'Meetings', icon: '📋' },
    { id: 'negotiation', label: 'Negotiation', icon: '🤝' },
    { id: 'netiquette', label: 'Netiquette', icon: '💻' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Corporate Communication - Module 2
              </h1>
              <p className="text-sm text-gray-600 mt-1">Practical Communication Skills | Dr. Bhartrihari Pandiya</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                📅 Exam Ready
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-[73px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction Section */}
        {activeTab === 'intro' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Hero Card */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">📢 DISCLAIMER</h2>
              <div className="space-y-3 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <p className="opacity-90">Contents in this module is perhaps known to all but <strong>practiced by few</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <p className="opacity-90">Needs <strong>understanding</strong> and then <strong>practice</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <p className="opacity-90">Your part is to observe in which aspects yours is low and needs improvement</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <p className="opacity-90"><strong>RATE YOURSELF BEFORE AND AFTER</strong></p>
                </div>
              </div>
              <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-xl font-bold">So pay heed and reflect it in you. 🎯</p>
              </div>
            </div>

            {/* Module Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">📖</span>
                Module 2 Overview
              </h3>
              <p className="text-gray-700 mb-4">
                This module focuses on <strong>practical communication skills</strong> that are essential in professional settings. 
                Unlike theoretical knowledge, these skills require continuous practice and self-reflection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Paraverbal Communication', desc: 'How you say things', icon: '🗣️' },
                  { title: 'Body Language & Posture', desc: 'Non-verbal cues', icon: '🤝' },
                  { title: 'Interview Preparation', desc: 'Professional skills', icon: '🎤' },
                  { title: 'Visual Communication', desc: 'Charts & presentations', icon: '📊' },
                  { title: 'Effective Presentations', desc: 'Public speaking', icon: '🎯' },
                  { title: 'Dyadic Communication', desc: 'One-on-one interactions', icon: '👥' },
                  { title: 'Meeting Management', desc: 'Agenda & minutes', icon: '📋' },
                  { title: 'Negotiation Skills', desc: 'Win-win strategies', icon: '🤝' },
                  { title: 'Online Etiquette', desc: 'Digital professionalism', icon: '💻' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4 hover:shadow-lg transition-all">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold text-gray-800 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Focus */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <span className="text-4xl">💡</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-xl">Key Focus of Module 2:</h4>
                  <p className="text-gray-700 text-lg mb-3">
                    <strong>Practice makes perfect!</strong> This module emphasizes hands-on learning and self-improvement.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Identify your communication strengths and weaknesses</li>
                    <li>Practice regularly to improve your skills</li>
                    <li>Get feedback from peers and mentors</li>
                    <li>Track your progress over time</li>
                    <li>Apply learned concepts in real-world scenarios</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mehrabian Rule Section */}
        {activeTab === 'mehrabian' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                7%-38%-55% Rule by Dr. Albert Mehrabian 📊
              </h2>

              {/* Main Rule Card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center">The Mehrabian Communication Formula</h3>
                <p className="text-lg text-center opacity-90 mb-6">
                  Interpersonal communication consists of three basic elements
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-6xl font-bold mb-2">7%</div>
                    <div className="text-xl font-semibold mb-2">Content / Words</div>
                    <div className="text-sm opacity-90">What is literally being said</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-6xl font-bold mb-2">38%</div>
                    <div className="text-xl font-semibold mb-2">Tone of Voice</div>
                    <div className="text-sm opacity-90">How something is said</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-6xl font-bold mb-2">55%</div>
                    <div className="text-xl font-semibold mb-2">Physiology / Body Language</div>
                    <div className="text-sm opacity-90">Posture, facial expressions, gestures</div>
                  </div>
                </div>
              </div>

              {/* Paraverbal Communication */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🗣️ Paraverbal Communication (38%)</h3>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Paraverbal communication</strong> refers to the messages that we transmit through the <strong>tone, pitch, and pacing</strong> of our voices. 
                    It is <strong>how we say something</strong>, not what we say.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Tone',
                        desc: 'The emotional quality of your voice',
                        examples: ['Cheerful', 'Serious', 'Angry', 'Sarcastic', 'Friendly'],
                        icon: '🎵'
                      },
                      {
                        title: 'Pitch',
                        desc: 'How high or low your voice sounds',
                        examples: ['High pitch = Excitement/Nervousness', 'Low pitch = Authority/Calmness'],
                        icon: '🎼'
                      },
                      {
                        title: 'Pacing/Speed',
                        desc: 'How fast or slow you speak',
                        examples: ['Fast = Excitement/Anxiety', 'Slow = Thoughtfulness/Emphasis'],
                        icon: '⏱️'
                      },
                      {
                        title: 'Volume',
                        desc: 'How loud or soft you speak',
                        examples: ['Loud = Confidence/Anger', 'Soft = Intimacy/Uncertainty'],
                        icon: '🔊'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-5 border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{item.icon}</span>
                          <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-xs font-semibold text-gray-700 mb-2">Examples:</p>
                          <ul className="space-y-1">
                            {item.examples.map((ex, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                                <span className="text-green-600">→</span>
                                <span>{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visual Breakdown</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">7%</div>
                      <div className="flex-1 bg-red-100 rounded-lg p-4">
                        <div className="font-bold text-red-800 mb-1">Words/Content</div>
                        <div className="text-sm text-gray-700">The actual meaning of your words</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">38%</div>
                      <div className="flex-1 bg-yellow-100 rounded-lg p-4">
                        <div className="font-bold text-yellow-800 mb-1">Paraverbal/Tone</div>
                        <div className="text-sm text-gray-700">How you say it - tone, pitch, pace, volume</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">55%</div>
                      <div className="flex-1 bg-green-100 rounded-lg p-4">
                        <div className="font-bold text-green-800 mb-1">Body Language/Physiology</div>
                        <div className="text-sm text-gray-700">Posture, facial expressions, gestures, eye contact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Key Insight:</h4>
                    <p className="text-gray-700 mb-3">
                      According to Dr. Mehrabian's research, <strong>only 7% of communication effectiveness</strong> comes from the actual words used. 
                      The remaining <strong>93% comes from how you say it (38%) and your body language (55%)</strong>.
                    </p>
                    <p className="text-gray-700 italic">
                      This means that in face-to-face communication, <strong>non-verbal elements are far more important</strong> than the words themselves!
                    </p>
                  </div>
                </div>
              </div>

              {/* Practical Application */}
              <div className="mt-6 bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Practical Application
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-800 mb-2">For Presentations:</div>
                    <p className="text-sm text-gray-600">Focus more on your delivery style and body language than just memorizing words</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-800 mb-2">For Interviews:</div>
                    <p className="text-sm text-gray-600">Maintain confident posture and appropriate tone even more than perfect answers</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-800 mb-2">For Negotiations:</div>
                    <p className="text-sm text-gray-600">Use body language and tone to convey confidence and build rapport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appearance & Posture Section */}
        {activeTab === 'appearance' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Appearance & Posture 👔
              </h2>

              {/* Professional Appearance */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Appearance</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-4">
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>First impressions matter!</strong> Your appearance communicates professionalism, 
                    competence, and respect for the situation before you even speak.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Dress Appropriately',
                      icon: '👔',
                      points: [
                        'Dress for the occasion and industry',
                        'Business formal: Suit, tie, formal shoes',
                        'Business casual: Blazer, dress pants/skirt',
                        'Know the company culture',
                        'When in doubt, dress more formally',
                        'Ensure clothes are clean, ironed, and fit well'
                      ]
                    },
                    {
                      title: 'Grooming & Hygiene',
                      icon: '✨',
                      points: [
                        'Neat and clean hairstyle',
                        'Well-groomed facial hair (if any)',
                        'Clean, trimmed nails',
                        'Fresh breath and minimal fragrance',
                        'Light, professional makeup (if applicable)',
                        'Overall cleanliness and freshness'
                      ]
                    },
                    {
                      title: 'Accessories & Details',
                      icon: '⌚',
                      points: [
                        'Minimal, professional jewelry',
                        'Clean, polished shoes',
                        'Professional bag/briefcase',
                        'Watch (shows punctuality)',
                        'Avoid loud colors or patterns',
                        'Remove visible piercings (if not appropriate)'
                      ]
                    },
                    {
                      title: 'What to Avoid',
                      icon: '⚠️',
                      points: [
                        'Wrinkled or stained clothing',
                        'Too tight or too loose clothing',
                        'Excessive jewelry or accessories',
                        'Strong perfume or cologne',
                        'Casual wear (jeans, sneakers, t-shirts)',
                        'Distracting hairstyles or colors'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-blue-600 flex-shrink-0">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Posture & Body Language */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Posture & Positioning</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      posture: 'Standing Posture',
                      icon: '🧍',
                      dos: [
                        'Stand straight with shoulders back',
                        'Feet shoulder-width apart',
                        'Weight evenly distributed',
                        'Head held high',
                        'Arms relaxed at sides or hands clasped'
                      ],
                      donts: [
                        'Slouching or hunching',
                        'Hands in pockets',
                        'Leaning on objects',
                        'Crossed arms (looks defensive)',
                        'Shifting weight nervously'
                      ]
                    },
                    {
                      posture: 'Sitting Posture',
                      icon: '🪑',
                      dos: [
                        'Sit upright with back straight',
                        'Both feet flat on floor',
                        'Hands on lap or table',
                        'Slight forward lean (shows interest)',
                        'Maintain comfortable distance'
                      ],
                      donts: [
                        'Slouching or slumping',
                        'Legs crossed excessively',
                        'Leaning back too far',
                        'Fidgeting or tapping',
                        'Sitting on edge nervously'
                      ]
                    },
                    {
                      posture: 'Walking Posture',
                      icon: '🚶',
                      dos: [
                        'Walk with confidence',
                        'Shoulders back, head up',
                        'Moderate, steady pace',
                        'Purposeful stride',
                        'Aware of surroundings'
                      ],
                      donts: [
                        'Looking down while walking',
                        'Rushing or running',
                        'Dragging feet',
                        'Hands in pockets',
                        'Looking distracted'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.posture}</h4>
                      </div>
                      <div className="bg-green-50 rounded p-3 mb-3">
                        <div className="font-semibold text-green-800 text-sm mb-2">✓ Do:</div>
                        <ul className="space-y-1">
                          {item.dos.map((d, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-green-600">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded p-3">
                        <div className="font-semibold text-red-800 text-sm mb-2">✗ Don't:</div>
                        <ul className="space-y-1">
                          {item.donts.map((d, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-red-600">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Remember:</h4>
                    <p className="text-gray-700">
                      Your appearance and posture are the first things people notice about you. They communicate 
                      your professionalism, confidence, and respect for the situation. <strong>Make them count!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Body Language Section */}
        {activeTab === 'bodylang' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Body Language & Non-Verbal Communication 🤝
              </h2>

              {/* Eye Contact */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">👁️ Eye Contact</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Eye contact is one of the most powerful forms of non-verbal communication.</strong> 
                    It shows confidence, interest, and honesty.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-green-800 mb-3">✓ Good Eye Contact:</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Maintain eye contact 60-70% of the time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Look at the person while they're speaking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Natural breaks - look away occasionally</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>In groups: Scan the room, make eye contact with everyone</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Shows confidence, interest, and trustworthiness</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-red-800 mb-3">✗ Poor Eye Contact:</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Staring too intensely (intimidating)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Looking away constantly (disinterested)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Looking down (lacks confidence)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Looking at phone or around the room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Signals dishonesty, nervousness, or disrespect</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facial Expressions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">😊 Facial Expressions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { emoji: '😊', expression: 'Smile', meaning: 'Friendly, approachable, positive', tip: 'Use genuine smiles' },
                    { emoji: '🤔', expression: 'Thoughtful', meaning: 'Interested, engaged, considering', tip: 'Show you\'re listening' },
                    { emoji: '😐', expression: 'Neutral', meaning: 'Professional, composed, serious', tip: 'Good for formal settings' },
                    { emoji: '😟', expression: 'Concerned', meaning: 'Empathy, understanding, care', tip: 'Appropriate for serious topics' },
                    { emoji: '😤', expression: 'Frustrated', meaning: 'Annoyance, impatience', tip: 'Avoid in professional settings' },
                    { emoji: '😴', expression: 'Bored', meaning: 'Disinterest, fatigue', tip: 'Never show this!' },
                    { emoji: '😠', expression: 'Angry', meaning: 'Hostility, aggression', tip: 'Control your emotions' },
                    { emoji: '😬', expression: 'Nervous', meaning: 'Anxiety, discomfort', tip: 'Take deep breaths' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="text-5xl text-center mb-2">{item.emoji}</div>
                      <div className="font-bold text-gray-800 text-center mb-2">{item.expression}</div>
                      <div className="text-xs text-gray-600 text-center mb-2">{item.meaning}</div>
                      <div className="text-xs text-purple-700 text-center font-semibold">{item.tip}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hand Gestures */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">👋 Hand Gestures & Arms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
                    <h4 className="font-bold text-green-800 mb-3 text-lg">✓ Positive Gestures:</h4>
                    <div className="space-y-3">
                      {[
                        { gesture: 'Open palms', meaning: 'Honesty, openness, transparency' },
                        { gesture: 'Steepling (fingertips together)', meaning: 'Confidence, authority' },
                        { gesture: 'Hand to chest', meaning: 'Sincerity, genuineness' },
                        { gesture: 'Moderate gestures while speaking', meaning: 'Enthusiasm, engagement' },
                        { gesture: 'Thumbs up', meaning: 'Agreement, positivity (context-dependent)' },
                      ].map((item, i) => (
                        <div key={i} className="bg-white rounded p-3">
                          <div className="font-semibold text-gray-800 text-sm">{item.gesture}</div>
                          <div className="text-xs text-gray-600 mt-1">{item.meaning}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5">
                    <h4 className="font-bold text-red-800 mb-3 text-lg">✗ Negative Gestures:</h4>
                    <div className="space-y-3">
                      {[
                        { gesture: 'Crossed arms', meaning: 'Defensive, closed off, disagreement' },
                        { gesture: 'Pointing fingers', meaning: 'Aggressive, accusatory' },
                        { gesture: 'Fidgeting with objects', meaning: 'Nervousness, distraction' },
                        { gesture: 'Hands in pockets', meaning: 'Disinterest, hiding something' },
                        { gesture: 'Excessive gesturing', meaning: 'Nervousness, lack of control' },
                      ].map((item, i) => (
                        <div key={i} className="bg-white rounded p-3">
                          <div className="font-semibold text-gray-800 text-sm">{item.gesture}</div>
                          <div className="text-xs text-gray-600 mt-1">{item.meaning}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Space */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📏 Personal Space & Proximity</h3>
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      {
                        zone: 'Intimate',
                        distance: '0-18 inches',
                        use: 'Close friends, family',
                        appropriate: 'Not for professional settings'
                      },
                      {
                        zone: 'Personal',
                        distance: '18 inches - 4 feet',
                        use: 'Friends, acquaintances',
                        appropriate: 'Casual workplace interactions'
                      },
                      {
                        zone: 'Social',
                        distance: '4-12 feet',
                        use: 'Professional interactions',
                        appropriate: 'Most business situations'
                      },
                      {
                        zone: 'Public',
                        distance: '12+ feet',
                        use: 'Public speaking, presentations',
                        appropriate: 'Formal presentations'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border-2 border-purple-200">
                        <div className="font-bold text-purple-800 mb-2">{item.zone} Zone</div>
                        <div className="text-sm text-gray-700 mb-2"><strong>Distance:</strong> {item.distance}</div>
                        <div className="text-xs text-gray-600 mb-2"><strong>Use:</strong> {item.use}</div>
                        <div className="text-xs bg-purple-100 p-2 rounded">{item.appropriate}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cultural Considerations */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Cultural Considerations:</h4>
                    <p className="text-gray-700 mb-2">
                      Body language varies significantly across cultures. What's considered positive in one culture 
                      may be offensive in another.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Eye contact norms vary (some cultures see it as disrespectful)</li>
                      <li>Personal space preferences differ</li>
                      <li>Gestures have different meanings (thumbs up, OK sign, etc.)</li>
                      <li>Always research cultural norms before international interactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communication Cues Section */}
        {activeTab === 'cues' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Communication Cues & Active Listening 💬
              </h2>

              {/* Active Listening */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">👂 Active Listening</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-4">
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Active listening</strong> is fully concentrating on what is being said rather than just passively 
                    'hearing' the message. It involves giving full attention to the speaker and providing feedback.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Verbal Cues',
                      icon: '🗣️',
                      techniques: [
                        'Paraphrasing: "So what you\'re saying is..."',
                        'Clarifying: "Can you explain that further?"',
                        'Summarizing: "Let me make sure I understand..."',
                        'Acknowledging: "I see", "I understand", "That makes sense"',
                        'Asking open-ended questions',
                        'Minimal encouragers: "Mm-hmm", "Yes", "Go on"'
                      ]
                    },
                    {
                      title: 'Non-Verbal Cues',
                      icon: '👁️',
                      techniques: [
                        'Maintaining eye contact',
                        'Nodding to show understanding',
                        'Leaning forward slightly (shows interest)',
                        'Appropriate facial expressions',
                        'Avoiding distractions (phone, watch)',
                        'Mirroring body language subtly'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.techniques.map((tech, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                            <span className="text-blue-600 flex-shrink-0">✓</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Barriers to Active Listening */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🚫 Barriers to Active Listening</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      barrier: 'Internal Distractions',
                      examples: ['Thinking about your response', 'Personal worries', 'Preconceived judgments', 'Emotional reactions'],
                      icon: '🧠'
                    },
                    {
                      barrier: 'External Distractions',
                      examples: ['Noise in environment', 'Phone notifications', 'Other conversations', 'Visual distractions'],
                      icon: '📱'
                    },
                    {
                      barrier: 'Communication Issues',
                      examples: ['Speaker\'s accent or pace', 'Complex terminology', 'Poor audio quality', 'Unclear messaging'],
                      icon: '🗣️'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{item.icon}</span>
                        <h4 className="font-bold text-red-800">{item.barrier}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.examples.map((ex, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Empathetic Listening */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">❤️ Empathetic Listening</h3>
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Empathetic listening</strong> goes beyond active listening - it involves understanding the 
                    speaker's emotions and perspective.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-800 mb-3">Key Principles:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          <span>Listen with your heart, not just your ears</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          <span>Put yourself in their shoes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          <span>Validate their feelings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          <span>Avoid judging or giving unsolicited advice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          <span>Show genuine care and concern</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-800 mb-3">Phrases to Use:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="bg-purple-50 p-2 rounded">"I can see how that would be frustrating"</li>
                        <li className="bg-purple-50 p-2 rounded">"That must have been difficult for you"</li>
                        <li className="bg-purple-50 p-2 rounded">"Tell me more about how you're feeling"</li>
                        <li className="bg-purple-50 p-2 rounded">"I'm here to listen if you need to talk"</li>
                        <li className="bg-purple-50 p-2 rounded">"Your feelings are completely valid"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interview Preparation Section - ENHANCED WITH ALL MISSING CONTENT */}
        {activeTab === 'interview' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Interview Preparation 🎤
              </h2>

              {/* Interview Preparation Tools - NEW SECTION */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Interview Preparation Tools</h3>
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 mb-4">
                  <p className="text-lg opacity-90">
                    Use these powerful tools to prepare for your interviews and improve your communication skills
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      tool: 'Resume.io',
                      purpose: 'Professional resume builder',
                      features: ['ATS-friendly templates', 'Easy customization', 'Download as PDF'],
                      link: 'resume.io'
                    },
                    {
                      tool: 'Kickresume',
                      purpose: 'Resume & cover letter builder',
                      features: ['AI-powered writing', 'Professional templates', 'Career resources'],
                      link: 'kickresume.com'
                    },
                    {
                      tool: 'Google Interview Warmup',
                      purpose: 'Practice interview questions',
                      features: ['Real interview questions', 'AI feedback', 'Answer analysis'],
                      link: 'grow.google/certificates/interview-warmup'
                    },
                    {
                      tool: 'ChatGPT',
                      purpose: 'Interview practice & feedback',
                      features: ['Mock interviews', 'Answer improvement', 'Question preparation'],
                      link: 'chat.openai.com'
                    },
                    {
                      tool: 'Yoodli.ai',
                      purpose: 'AI speech coach',
                      features: ['Analyze speaking patterns', 'Reduce filler words', 'Improve delivery'],
                      link: 'yoodli.ai'
                    },
                    {
                      tool: 'Tealhq.com',
                      purpose: 'Job search & resume optimization',
                      features: ['Resume analyzer', 'Job matching', 'Application tracking'],
                      link: 'tealhq.com'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="mb-3">
                        <h4 className="font-bold text-blue-800 text-lg mb-1">{item.tool}</h4>
                        <p className="text-sm text-gray-600">{item.purpose}</p>
                      </div>
                      <div className="bg-white rounded p-3 mb-3">
                        <div className="text-xs font-semibold text-gray-700 mb-2">Features:</div>
                        <ul className="space-y-1">
                          {item.features.map((feature, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-blue-600">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-100 px-3 py-2 rounded text-xs text-blue-800 font-mono">
                        🔗 {item.link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tell Me About Yourself - Sample Answer Template - NEW */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💬 "Tell Me About Yourself" - Sample Answer Template</h3>
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                  <div className="bg-white rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-purple-800 mb-4 text-lg">The Present-Past-Future Formula:</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-bold text-green-800 mb-2">1. PRESENT (30 seconds)</div>
                        <p className="text-sm text-gray-700 italic mb-2">
                          "I'm currently a [your current role/situation] at [company/university]. I specialize in [your key skills/expertise]. 
                          My day-to-day involves [brief description of responsibilities]."
                        </p>
                        <div className="bg-green-50 p-3 rounded text-xs">
                          <strong>Example:</strong> "I'm currently a Marketing Manager at TechCorp, where I lead a team of 5 in developing 
                          digital marketing strategies. My focus is on SEO and content marketing, and I've helped increase our web traffic by 40%."
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="font-bold text-blue-800 mb-2">2. PAST (30 seconds)</div>
                        <p className="text-sm text-gray-700 italic mb-2">
                          "Before this, I [previous relevant experience]. This experience taught me [key learnings]. I also [notable achievement]."
                        </p>
                        <div className="bg-blue-50 p-3 rounded text-xs">
                          <strong>Example:</strong> "Prior to TechCorp, I worked as a Digital Marketing Specialist at StartupXYZ for 3 years. 
                          There, I learned the importance of data-driven decision making and successfully launched 5 major campaigns."
                        </div>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4">
                        <div className="font-bold text-purple-800 mb-2">3. FUTURE (30 seconds)</div>
                        <p className="text-sm text-gray-700 italic mb-2">
                          "I'm now looking to [your career goal] because [reason related to the role]. I'm particularly excited about 
                          [something specific about the company/role]."
                        </p>
                        <div className="bg-purple-50 p-3 rounded text-xs">
                          <strong>Example:</strong> "I'm now looking to take on a Senior Marketing role where I can lead larger initiatives 
                          and mentor junior team members. I'm particularly excited about this opportunity at YourCompany because of your 
                          innovative approach to AI-driven marketing."
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Pro Tip:</strong> Keep it to 60-90 seconds total. Practice until it sounds natural, not rehearsed. 
                      Tailor it to each company!
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Summary Tips - NEW */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💼 LinkedIn Summary Tips</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Your LinkedIn summary is your elevator pitch. Make it count!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-green-800 mb-3">✓ DO:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Write in first person (more personal)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Start with a hook that grabs attention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Highlight your unique value proposition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Include relevant keywords for SEO</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>Share achievements with numbers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">→</span>
                          <span>End with call-to-action (contact info)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-red-800 mb-3">✗ DON'T:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Just list job duties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Write in third person (sounds stuffy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Use generic phrases like "hard worker"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Make it too long (2000+ chars)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Copy your resume verbatim</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Forget to proofread</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-blue-100 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Example Hook:</strong> "I turn data into stories that drive business decisions. With 5+ years 
                      in analytics, I've helped companies increase revenue by 200%..."
                    </p>
                  </div>
                </div>
              </div>

              {/* UVP - Unique Value Proposition - NEW */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 UVP - Unique Value Proposition</h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6">
                  <p className="text-gray-700 text-lg mb-4">
                    Your <strong>UVP</strong> is what makes YOU different from other candidates. It's the unique combination 
                    of skills, experience, and personality that you bring to the table.
                  </p>
                  <div className="bg-white rounded-lg p-5">
                    <h5 className="font-bold text-orange-800 mb-3">How to Create Your UVP:</h5>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-orange-50 rounded">
                        <div className="text-2xl">1️⃣</div>
                        <div>
                          <strong className="text-gray-800">Identify Your Strengths</strong>
                          <p className="text-sm text-gray-600 mt-1">What are you exceptionally good at? What do people always ask you for help with?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-orange-50 rounded">
                        <div className="text-2xl">2️⃣</div>
                        <div>
                          <strong className="text-gray-800">Understand Market Needs</strong>
                          <p className="text-sm text-gray-600 mt-1">What problems does the company/industry need solved?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-orange-50 rounded">
                        <div className="text-2xl">3️⃣</div>
                        <div>
                          <strong className="text-gray-800">Find the Intersection</strong>
                          <p className="text-sm text-gray-600 mt-1">Where do your strengths meet their needs? That's your UVP!</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded">
                      <p className="font-semibold text-gray-800 mb-2">UVP Formula:</p>
                      <p className="text-sm text-gray-700">
                        "I help [target audience] achieve [specific result] through [your unique approach/skill]"
                      </p>
                      <p className="text-xs text-gray-600 mt-2 italic">
                        Example: "I help startups achieve product-market fit through data-driven user research and rapid prototyping"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Interviews - NEW SECTION */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Types of Interviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      type: 'Personal Interview',
                      icon: '🗣️',
                      desc: 'Traditional one-on-one or panel interview',
                      focus: 'Personality, communication skills, cultural fit',
                      tips: ['Build rapport', 'Show enthusiasm', 'Be authentic', 'Ask thoughtful questions']
                    },
                    {
                      type: 'Psychometric Interview',
                      icon: '🧠',
                      desc: 'Tests mental abilities and personality traits',
                      focus: 'Cognitive abilities, behavioral patterns, problem-solving',
                      tips: ['Be honest (no right/wrong answers)', 'Stay consistent', 'Read instructions carefully', 'Don\'t overthink']
                    },
                    {
                      type: 'Stress Interview',
                      icon: '😰',
                      desc: 'Deliberately creates pressure to test response',
                      focus: 'Handling pressure, emotional control, quick thinking',
                      tips: ['Stay calm', 'Don\'t take it personally', 'Pause before answering', 'Show professionalism']
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="text-center mb-3">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.type}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                      <div className="bg-white rounded p-3 mb-3">
                        <div className="text-xs font-semibold text-purple-800 mb-2">Focus Areas:</div>
                        <p className="text-xs text-gray-700">{item.focus}</p>
                      </div>
                      <div className="bg-purple-100 rounded p-3">
                        <div className="text-xs font-semibold text-purple-800 mb-2">Tips:</div>
                        <ul className="space-y-1">
                          {item.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-purple-600">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before Interview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Before the Interview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Research & Preparation',
                      icon: '🔍',
                      points: [
                        'Research the company thoroughly',
                        'Understand the job role',
                        'Know your resume inside out',
                        'Prepare STAR stories',
                        'Research the interviewer',
                        'Prepare questions to ask'
                      ]
                    },
                    {
                      title: 'Logistics & Planning',
                      icon: '📍',
                      points: [
                        'Confirm date, time, location',
                        'Plan your route',
                        'Arrive 10-15 minutes early',
                        'Extra copies of resume',
                        'Bring notepad and pen',
                        'Have references ready'
                      ]
                    },
                    {
                      title: 'Dress & Appearance',
                      icon: '👔',
                      points: [
                        'Professional attire',
                        'Clean, ironed clothes',
                        'Polished shoes',
                        'Minimal jewelry',
                        'Neat hairstyle',
                        'Light fragrance'
                      ]
                    },
                    {
                      title: 'Mental Preparation',
                      icon: '🧠',
                      points: [
                        'Good sleep night before',
                        'Positive self-talk',
                        'Review achievements',
                        'Practice mock interviews',
                        'Deep breathing',
                        'Visualize success'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-blue-600 flex-shrink-0">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Questions & STAR Method */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">❓ Common Questions & STAR Method</h3>
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-4">
                  <h4 className="font-bold text-yellow-800 mb-3 text-lg">⭐ STAR Method</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { letter: 'S', word: 'Situation', desc: 'Set the context', example: 'In my previous role as...' },
                      { letter: 'T', word: 'Task', desc: 'Explain the challenge', example: 'I was responsible for...' },
                      { letter: 'A', word: 'Action', desc: 'Describe your steps', example: 'I decided to... I implemented...' },
                      { letter: 'R', word: 'Result', desc: 'Share outcomes', example: 'As a result, we achieved...' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                            {item.letter}
                          </div>
                          <h5 className="font-bold text-gray-800">{item.word}</h5>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{item.desc}</p>
                        <div className="bg-yellow-100 p-2 rounded text-xs italic">{item.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What NOT to Do */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">What NOT to Do:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Being late',
                        'Poor body language',
                        'Speaking negatively about past employers',
                        'Lying or exaggerating',
                        'Being unprepared',
                        'Checking your phone',
                        'Interrupting',
                        'Being too casual',
                        'Not asking questions',
                        'Focusing only on salary',
                      ].map((dont, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                          <span className="text-red-600">✗</span>
                          <span>{dont}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interview Preparation Section - COMPLETE WITH ALL MISSING CONTENT */}
        {activeTab === 'interview' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Interview Preparation - Complete Guide 🎤
              </h2>

              {/* Interview Preparation Tools */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Interview Preparation Tools</h3>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 mb-4">
                  <p className="text-lg opacity-90 text-center">
                    Use these tools to prepare effectively for your interviews
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      tool: 'Resume.io',
                      desc: 'Professional resume builder with ATS-friendly templates',
                      use: 'Create polished resumes quickly',
                      icon: '📄',
                      link: 'resume.io'
                    },
                    {
                      tool: 'Kickresume',
                      desc: 'AI-powered resume and cover letter builder',
                      use: 'Generate professional documents',
                      icon: '🚀',
                      link: 'kickresume.com'
                    },
                    {
                      tool: 'Google Interview Warmup',
                      desc: 'Practice answering interview questions',
                      use: 'Get comfortable with common questions',
                      icon: '🔥',
                      link: 'grow.google/certificates/interview-warmup'
                    },
                    {
                      tool: 'ChatGPT',
                      desc: 'AI assistant for mock interviews and answers',
                      use: 'Practice responses, get feedback',
                      icon: '🤖',
                      link: 'chat.openai.com'
                    },
                    {
                      tool: 'Yoodli.ai',
                      desc: 'AI speech coach for interview practice',
                      use: 'Improve communication skills',
                      icon: '🎯',
                      link: 'yoodli.ai'
                    },
                    {
                      tool: 'Teal HQ',
                      desc: 'Job tracker and resume optimizer',
                      use: 'Organize job search and tailor resumes',
                      icon: '💼',
                      link: 'tealhq.com'
                    },
                    {
                      tool: 'Poised AI',
                      desc: 'Real-time communication coach',
                      use: 'Get feedback during video calls',
                      icon: '🎙️',
                      link: 'poised.com'
                    },
                    {
                      tool: 'Duolingo',
                      desc: 'Language learning for international opportunities',
                      use: 'Improve language skills',
                      icon: '🦉',
                      link: 'duolingo.com'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800">{item.tool}</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{item.desc}</p>
                      <div className="bg-white rounded p-2 mb-2">
                        <p className="text-xs text-gray-600"><strong>Use:</strong> {item.use}</p>
                      </div>
                      <div className="text-xs text-purple-700 font-mono bg-purple-100 p-2 rounded">
                        {item.link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UVP - Unique Value Proposition */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💎 UVP - Unique Value Proposition</h3>
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Your <strong>Unique Value Proposition</strong> is what makes you different from other candidates. 
                    It's the combination of your skills, experiences, and qualities that make you valuable to employers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-yellow-800 mb-3">What Makes You Unique?</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Your specific skills</li>
                        <li>• Your experiences</li>
                        <li>• Your achievements</li>
                        <li>• Your personal qualities</li>
                        <li>• Your passion/motivation</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-yellow-800 mb-3">How to Articulate It:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Be specific, not generic</li>
                        <li>• Use concrete examples</li>
                        <li>• Show impact/results</li>
                        <li>• Connect to company needs</li>
                        <li>• Be authentic</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-yellow-800 mb-3">Example UVP:</h5>
                      <p className="text-sm text-gray-700 italic bg-yellow-100 p-3 rounded">
                        "I bring 3 years of digital marketing experience with proven results increasing engagement by 150%. 
                        My unique blend of creative content creation and data analytics helps companies grow their online presence strategically."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tell Me About Yourself - Template */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 "Tell Me About Yourself" - Perfect Answer Template</h3>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <div className="bg-white rounded-lg p-5 mb-4">
                    <h5 className="font-bold text-green-800 mb-3">Present - Past - Future Formula:</h5>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h6 className="font-semibold text-gray-800 mb-2">1. PRESENT (30 seconds)</h6>
                        <p className="text-sm text-gray-700 mb-2">Start with your current role and key responsibilities</p>
                        <div className="bg-green-100 p-3 rounded text-sm italic">
                          "I'm currently a [Job Title] at [Company], where I [key responsibilities and achievements]. 
                          I specialize in [your expertise areas]."
                        </div>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h6 className="font-semibold text-gray-800 mb-2">2. PAST (30 seconds)</h6>
                        <p className="text-sm text-gray-700 mb-2">Briefly share relevant background and how you got here</p>
                        <div className="bg-blue-100 p-3 rounded text-sm italic">
                          "Before this, I worked at [Previous Company] where I [key experience]. 
                          I graduated from [University] with a degree in [Field], which gave me a strong foundation in [skills]."
                        </div>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h6 className="font-semibold text-gray-800 mb-2">3. FUTURE (30 seconds)</h6>
                        <p className="text-sm text-gray-700 mb-2">Connect to the role you're interviewing for</p>
                        <div className="bg-purple-100 p-3 rounded text-sm italic">
                          "I'm excited about this opportunity at [Company] because [specific reason]. 
                          I'm particularly interested in [aspect of the role], and I believe my experience in [relevant skills] 
                          would help me contribute to [company goals]."
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r">
                    <p className="text-sm text-gray-700"><strong>Pro Tip:</strong> Keep it under 2 minutes. Practice until it sounds natural, not rehearsed!</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Summary Tips */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💼 LinkedIn Summary - Best Practices</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-blue-800 mb-3">✓ DO:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>Write in first person ("I" not "He/She")</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>Start with a strong opening hook</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>Highlight your unique value proposition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>Include keywords for searchability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>Showcase achievements with numbers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>End with a call-to-action</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">→</span>
                          <span>Keep it 3-5 short paragraphs</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-red-800 mb-3">✗ DON'T:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Just copy-paste your resume</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Write a long, dense paragraph</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Be too formal or robotic</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Use clichés ("hard worker", "team player")</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Focus only on what you want</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">→</span>
                          <span>Leave it blank or generic</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-blue-100 p-4 rounded">
                    <h6 className="font-bold text-blue-900 mb-2">Sample LinkedIn Summary Structure:</h6>
                    <div className="text-sm text-gray-800 space-y-2">
                      <p><strong>Para 1:</strong> Who you are + What you do (Hook)</p>
                      <p><strong>Para 2:</strong> Your expertise and achievements (Value)</p>
                      <p><strong>Para 3:</strong> Your passion/motivation (Personality)</p>
                      <p><strong>Para 4:</strong> Current focus/What you're looking for (Future)</p>
                      <p><strong>Para 5:</strong> How to reach you (Call-to-action)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Interviews */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Types of Interviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      type: 'Personal Interview',
                      desc: 'Face-to-face conversation to assess fit',
                      characteristics: [
                        'Most common type',
                        'Behavioral questions',
                        'Assess personality & culture fit',
                        'Build rapport with interviewer'
                      ],
                      tips: [
                        'Prepare STAR stories',
                        'Research the company',
                        'Dress professionally',
                        'Show enthusiasm'
                      ],
                      icon: '👤'
                    },
                    {
                      type: 'Psychometric Interview',
                      desc: 'Tests to measure mental capabilities and personality',
                      characteristics: [
                        'Aptitude tests',
                        'Personality assessments',
                        'Cognitive ability tests',
                        'Emotional intelligence tests'
                      ],
                      tips: [
                        'Be honest in answers',
                        'Practice sample tests',
                        'Read instructions carefully',
                        'Manage time well'
                      ],
                      icon: '🧠'
                    },
                    {
                      type: 'Stress Interview',
                      desc: 'Deliberately puts candidate under pressure',
                      characteristics: [
                        'Aggressive questioning',
                        'Uncomfortable scenarios',
                        'Tests composure',
                        'Assesses problem-solving under pressure'
                      ],
                      tips: [
                        'Stay calm and composed',
                        'Don\'t take it personally',
                        'Think before responding',
                        'Show resilience'
                      ],
                      icon: '⚡'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.type}</h4>
                        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                      </div>
                      <div className="bg-white rounded p-3 mb-3">
                        <h6 className="font-semibold text-gray-800 text-sm mb-2">Characteristics:</h6>
                        <ul className="space-y-1">
                          {item.characteristics.map((char, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-indigo-600">•</span>
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-indigo-100 rounded p-3">
                        <h6 className="font-semibold text-indigo-800 text-sm mb-2">Tips:</h6>
                        <ul className="space-y-1">
                          {item.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-indigo-600">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before Interview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Before the Interview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Research & Preparation',
                      icon: '🔍',
                      points: [
                        'Research the company thoroughly (history, products, culture)',
                        'Understand the job role and requirements',
                        'Know your resume inside out',
                        'Prepare answers to common questions',
                        'Research the interviewer (if possible)',
                        'Understand industry trends',
                        'Prepare questions to ask the interviewer'
                      ]
                    },
                    {
                      title: 'Logistics & Planning',
                      icon: '📍',
                      points: [
                        'Confirm date, time, and location',
                        'Plan your route and travel time',
                        'Arrive 10-15 minutes early',
                        'Prepare extra copies of resume',
                        'Bring notepad and pen',
                        'Charge your phone (but keep it silent)',
                        'Have references ready'
                      ]
                    },
                    {
                      title: 'Dress & Appearance',
                      icon: '👔',
                      points: [
                        'Professional attire (suit/formal wear)',
                        'Clean, ironed, well-fitted clothes',
                        'Polished shoes',
                        'Minimal jewelry',
                        'Neat hairstyle',
                        'Light makeup (if applicable)',
                        'Fresh breath, minimal cologne/perfume'
                      ]
                    },
                    {
                      title: 'Mental Preparation',
                      icon: '🧠',
                      points: [
                        'Get good sleep the night before',
                        'Practice positive self-talk',
                        'Review your achievements',
                        'Prepare STAR stories',
                        'Practice mock interviews',
                        'Deep breathing exercises',
                        'Visualize success'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-blue-600 flex-shrink-0">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Judged Upon - What Interviewers Look For */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">⚖️ You Will Be Judged Upon</h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Interviewers evaluate candidates on multiple dimensions. Here's what they're really looking at:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { criterion: 'First Impression', weight: '15%', desc: 'Appearance, handshake, smile, punctuality' },
                      { criterion: 'Communication Skills', weight: '20%', desc: 'Clarity, confidence, listening, articulation' },
                      { criterion: 'Body Language', weight: '15%', desc: 'Posture, eye contact, gestures, energy' },
                      { criterion: 'Technical Knowledge', weight: '20%', desc: 'Skills, expertise, problem-solving ability' },
                      { criterion: 'Cultural Fit', weight: '15%', desc: 'Values alignment, team compatibility, attitude' },
                      { criterion: 'Enthusiasm & Interest', weight: '10%', desc: 'Passion for role, company research, engagement' },
                      { criterion: 'Problem-Solving', weight: '5%', desc: 'Critical thinking, creativity, approach to challenges' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-500 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-800 text-sm">{item.criterion}</h5>
                          <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">{item.weight}</span>
                        </div>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* STAR Method - Enhanced */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">⭐ STAR Method for Behavioral Questions</h3>
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    {[
                      {
                        letter: 'S',
                        word: 'Situation',
                        desc: 'Set the context and describe the background',
                        example: 'In my previous role as Marketing Manager at XYZ Corp...',
                        tips: ['Be specific about when and where', 'Keep it brief (1-2 sentences)', 'Choose relevant situations']
                      },
                      {
                        letter: 'T',
                        word: 'Task',
                        desc: 'Explain the challenge or responsibility',
                        example: 'I was responsible for increasing social media engagement by 50%...',
                        tips: ['Focus on your role', 'Clarify what was expected', 'Highlight the challenge']
                      },
                      {
                        letter: 'A',
                        word: 'Action',
                        desc: 'Describe the specific steps YOU took',
                        example: 'I analyzed current content, conducted audience research, and implemented a new strategy...',
                        tips: ['Use "I" not "we"', 'Be specific about steps', 'Show your skills']
                      },
                      {
                        letter: 'R',
                        word: 'Result',
                        desc: 'Share the outcomes and what you learned',
                        example: 'As a result, we achieved 65% increase in engagement and 30% more followers...',
                        tips: ['Quantify results', 'Include lessons learned', 'Connect to future value']
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-yellow-500 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                            {item.letter}
                          </div>
                          <h5 className="font-bold text-gray-800">{item.word}</h5>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{item.desc}</p>
                        <div className="bg-yellow-100 p-2 rounded text-xs text-gray-600 italic mb-2">
                          <strong>Example:</strong> {item.example}
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="text-xs font-semibold text-gray-700 mb-1">Tips:</p>
                          <ul className="space-y-1">
                            {item.tips.map((tip, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                                <span className="text-yellow-600">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Common Questions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">❓ Top 10 Interview Questions & How to Answer</h3>
                <div className="space-y-3">
                  {[
                    {
                      question: '1. Tell me about yourself',
                      framework: 'Present-Past-Future',
                      tip: 'Use the template above. Keep it to 60-90 seconds. Focus on professional journey.',
                      avoid: 'Personal details, life story, lack of structure'
                    },
                    {
                      question: '2. Why do you want this job?',
                      framework: 'Company + Role + Growth',
                      tip: 'Show you researched the company. Connect your skills to their needs. Express enthusiasm.',
                      avoid: 'Generic answers, salary focus, desperation'
                    },
                    {
                      question: '3. What are your strengths?',
                      framework: 'Strength + Example + Value',
                      tip: 'Pick 2-3 relevant strengths. Give specific examples. Show how it benefits them.',
                      avoid: 'Generic strengths, no examples, irrelevant skills'
                    },
                    {
                      question: '4. What are your weaknesses?',
                      framework: 'Real weakness + Improvement plan',
                      tip: 'Choose a real but minor weakness. Show how you\'re actively improving it.',
                      avoid: 'Fake weaknesses, major flaws, no improvement plan'
                    },
                    {
                      question: '5. Where do you see yourself in 5 years?',
                      framework: 'Growth + Skills + Company',
                      tip: 'Show ambition but commitment to role. Focus on skill development and contribution.',
                      avoid: 'Unrealistic goals, job hopping, vague answers'
                    },
                    {
                      question: '6. Why should we hire you?',
                      framework: 'Skills + Experience + Fit',
                      tip: 'Summarize your key qualifications. Show unique value. Express enthusiasm.',
                      avoid: 'Arrogance, generic answers, weak closing'
                    },
                    {
                      question: '7. Tell me about a challenge you faced',
                      framework: 'STAR Method',
                      tip: 'Use STAR. Focus on your problem-solving skills. Show positive outcome and learning.',
                      avoid: 'Blaming others, no resolution, personal problems'
                    },
                    {
                      question: '8. Why are you leaving your current job?',
                      framework: 'Growth + Opportunity',
                      tip: 'Focus on growth opportunities. Stay positive about previous employer.',
                      avoid: 'Negative comments, salary complaints, personal conflicts'
                    },
                    {
                      question: '9. What are your salary expectations?',
                      framework: 'Research + Range + Flexibility',
                      tip: 'Research market rates. Give a range. Show flexibility and interest in total package.',
                      avoid: 'Exact numbers, unrealistic expectations, first topic'
                    },
                    {
                      question: '10. Do you have any questions for us?',
                      framework: 'Always ask 2-3 questions',
                      tip: 'Ask about role, team, company culture, growth opportunities. Show genuine interest.',
                      avoid: 'No questions, salary focus, obvious answers'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border-2 border-purple-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="mb-3">
                        <h5 className="font-bold text-purple-800 text-lg mb-1">{item.question}</h5>
                        <div className="text-sm text-purple-600 font-semibold">Framework: {item.framework}</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded">
                          <div className="font-semibold text-green-800 text-sm mb-1">✓ How to Answer:</div>
                          <p className="text-xs text-gray-700">{item.tip}</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded">
                          <div className="font-semibold text-red-800 text-sm mb-1">✗ What to Avoid:</div>
                          <p className="text-xs text-gray-700">{item.avoid}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memory Reflex - NEW SECTION */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🧠 Memory Reflex - Interview Preparation</h3>
                <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Memory Reflex</strong> is your ability to quickly recall relevant examples and experiences during interviews. 
                    Prepare these in advance so you can respond confidently.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-pink-800 mb-3">Prepare 5-7 STAR Stories:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">1.</span>
                          <span><strong>Leadership example</strong> - When you led a team or project</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">2.</span>
                          <span><strong>Problem-solving example</strong> - Complex challenge you solved</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">3.</span>
                          <span><strong>Teamwork example</strong> - Successful collaboration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">4.</span>
                          <span><strong>Innovation example</strong> - Creative solution or improvement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">5.</span>
                          <span><strong>Conflict resolution</strong> - Handling disagreement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">6.</span>
                          <span><strong>Achievement example</strong> - Major accomplishment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">7.</span>
                          <span><strong>Learning example</strong> - How you handled failure/feedback</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-pink-800 mb-3">Quick Access Formula:</h5>
                      <div className="space-y-3 text-sm">
                        <div className="bg-pink-100 p-3 rounded">
                          <strong>Step 1:</strong> Write each story in 2-3 sentences
                        </div>
                        <div className="bg-pink-100 p-3 rounded">
                          <strong>Step 2:</strong> Practice telling them out loud
                        </div>
                        <div className="bg-pink-100 p-3 rounded">
                          <strong>Step 3:</strong> Create mental "tags" for quick recall
                        </div>
                        <div className="bg-pink-100 p-3 rounded">
                          <strong>Step 4:</strong> Match stories to likely questions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What NOT to Do */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">What NOT to Do in Interviews:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Being late or too early (more than 15 min)',
                        'Poor body language (slouching, no eye contact)',
                        'Speaking negatively about past employers',
                        'Lying or exaggerating achievements',
                        'Being completely unprepared',
                        'Checking phone or being distracted',
                        'Interrupting the interviewer',
                        'Being too casual or overfamiliar',
                        'Not asking ANY questions',
                        'Focusing only on salary and benefits',
                        'Showing desperation or neediness',
                        'Poor hygiene or inappropriate dress',
                        'Rambling or giving irrelevant answers',
                        'Being arrogant or overconfident',
                        'Not listening to the questions properly',
                        'Badmouthing competitors or colleagues'
                      ].map((dont, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                          <span className="text-red-600">✗</span>
                          <span>{dont}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visual Aids Section - ENHANCED WITH ALL MISSING CONTENT */}
        {activeTab === 'visual' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Visual Aids & Pictorial Depiction 📊
              </h2>

              {/* Why Visual Aids */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 mb-4">
                  <h3 className="text-2xl font-bold mb-3">Why Use Visual Aids?</h3>
                  <p className="text-lg opacity-90 mb-4">
                    Visual aids enhance understanding, retention, and engagement during presentations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">65%</div>
                      <div className="text-sm opacity-90">People are visual learners</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">3x</div>
                      <div className="text-sm opacity-90">Better retention with visuals</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">43%</div>
                      <div className="text-sm opacity-90">More persuasive with visuals</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pictorial Depiction - Benefits - NEW SECTION */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🖼️ Pictorial Depiction - Benefits</h3>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Pictorial depiction</strong> uses images, charts, and diagrams to convey information more effectively than text alone.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        benefit: 'Enhanced Understanding',
                        desc: 'Complex data becomes easier to comprehend',
                        examples: ['Flowcharts for processes', 'Diagrams for systems', 'Charts for comparisons'],
                        icon: '🧠'
                      },
                      {
                        benefit: 'Better Retention',
                        desc: 'People remember visual information longer',
                        examples: ['Infographics', 'Mind maps', 'Visual summaries'],
                        icon: '💭'
                      },
                      {
                        benefit: 'Faster Processing',
                        desc: 'Brain processes images 60,000x faster than text',
                        examples: ['Icons vs text', 'Graphs vs tables', 'Pictures vs descriptions'],
                        icon: '⚡'
                      },
                      {
                        benefit: 'Universal Appeal',
                        desc: 'Crosses language and cultural barriers',
                        examples: ['Universal symbols', 'Color coding', 'Visual metaphors'],
                        icon: '🌍'
                      },
                      {
                        benefit: 'Emotional Connection',
                        desc: 'Images evoke emotions and engagement',
                        examples: ['Photos of people', 'Success stories', 'Before/after images'],
                        icon: '❤️'
                      },
                      {
                        benefit: 'Pattern Recognition',
                        desc: 'Helps identify trends and relationships',
                        examples: ['Line graphs', 'Heat maps', 'Scatter plots'],
                        icon: '📈'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border-2 border-green-200 hover:shadow-lg transition-all">
                        <div className="text-center mb-3">
                          <div className="text-4xl mb-2">{item.icon}</div>
                          <h4 className="font-bold text-gray-800">{item.benefit}</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                        <div className="bg-green-50 rounded p-3">
                          <div className="text-xs font-semibold text-gray-700 mb-2">Examples:</div>
                          <ul className="space-y-1">
                            {item.examples.map((ex, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                                <span className="text-green-600">•</span>
                                <span>{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Types of Visual Aids */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Types of Visual Aids</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      type: 'Charts & Graphs',
                      icon: '📊',
                      uses: ['Show trends over time', 'Compare data', 'Display relationships'],
                      examples: ['Bar charts', 'Line graphs', 'Pie charts', 'Scatter plots'],
                      bestFor: 'Quantitative data',
                      tips: ['Keep it simple', 'Label clearly', 'Use consistent colors']
                    },
                    {
                      type: 'Tables',
                      icon: '📋',
                      uses: ['Organize data', 'Show precise numbers', 'Compare multiple items'],
                      examples: ['Data tables', 'Comparison tables', 'Spreadsheets'],
                      bestFor: 'Detailed information',
                      tips: ['Highlight key data', 'Use alternating row colors', 'Keep columns narrow']
                    },
                    {
                      type: 'Images & Photos',
                      icon: '🖼️',
                      uses: ['Show real examples', 'Create emotional connection', 'Illustrate concepts'],
                      examples: ['Product photos', 'Team pictures', 'Before/after'],
                      bestFor: 'Visual storytelling',
                      tips: ['High quality only', 'Relevant to content', 'Proper attribution']
                    },
                    {
                      type: 'Infographics',
                      icon: '📈',
                      uses: ['Simplify complex info', 'Tell a story', 'Engage audience'],
                      examples: ['Process flows', 'Statistics', 'Timelines'],
                      bestFor: 'Big picture overview',
                      tips: ['Balance text and visuals', 'Logical flow', 'Brand consistency']
                    },
                    {
                      type: 'Videos',
                      icon: '🎥',
                      uses: ['Demonstrate processes', 'Show testimonials', 'Engage emotionally'],
                      examples: ['Product demos', 'Tutorials', 'Customer stories'],
                      bestFor: 'Dynamic content',
                      tips: ['Keep it short (2-3 min)', 'Test audio/video', 'Have backup plan']
                    },
                    {
                      type: 'Diagrams',
                      icon: '🔷',
                      uses: ['Show relationships', 'Explain processes', 'Illustrate structure'],
                      examples: ['Flowcharts', 'Org charts', 'Mind maps', 'Venn diagrams'],
                      bestFor: 'Complex concepts',
                      tips: ['Use shapes consistently', 'Clear connections', 'Left-to-right flow']
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="text-center mb-3">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.type}</h4>
                        <div className="text-xs text-purple-700 mt-1 font-semibold">{item.bestFor}</div>
                      </div>
                      <div className="bg-white rounded p-3 mb-2">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Uses:</div>
                        <ul className="space-y-1">
                          {item.uses.map((use, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                              <span className="text-purple-600">•</span>
                              <span>{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-purple-100 rounded p-2 mb-2">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Examples:</div>
                        <div className="flex flex-wrap gap-1">
                          {item.examples.map((ex, i) => (
                            <span key={i} className="text-xs bg-white px-2 py-1 rounded">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-yellow-100 rounded p-2">
                        <div className="text-xs font-semibold text-gray-700 mb-1">Pro Tips:</div>
                        <ul className="space-y-1">
                          {item.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                              <span className="text-yellow-600">→</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infographics - NEW DETAILED SECTION */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎨 Infographics - The Power of Visual Storytelling</h3>
                <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-orange-800 mb-3">What Makes Great Infographics:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">1.</span>
                          <span><strong>Clear narrative flow</strong> - Tells a story from start to finish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">2.</span>
                          <span><strong>Visual hierarchy</strong> - Most important info stands out</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">3.</span>
                          <span><strong>Data accuracy</strong> - Verified facts and figures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">4.</span>
                          <span><strong>Consistent design</strong> - Colors, fonts, and style unified</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">5.</span>
                          <span><strong>Balanced layout</strong> - Text and visuals well distributed</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-orange-800 mb-3">Types of Infographics:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">📊</span>
                          <span><strong>Statistical:</strong> Present data and numbers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">🗺️</span>
                          <span><strong>Informational:</strong> Explain concepts or topics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">⏳</span>
                          <span><strong>Timeline:</strong> Show progression over time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">⚖️</span>
                          <span><strong>Comparison:</strong> Compare options or alternatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">📋</span>
                          <span><strong>Process:</strong> Show steps or procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">📍</span>
                          <span><strong>Geographic:</strong> Location-based information</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded">
                    <h6 className="font-bold text-orange-900 mb-2">🛠️ Tools for Creating Infographics:</h6>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white p-2 rounded text-center">Canva</div>
                      <div className="bg-white p-2 rounded text-center">Piktochart</div>
                      <div className="bg-white p-2 rounded text-center">Venngage</div>
                      <div className="bg-white p-2 rounded text-center">Adobe Illustrator</div>
                      <div className="bg-white p-2 rounded text-center">Infogram</div>
                      <div className="bg-white p-2 rounded text-center">Visme</div>
                      <div className="bg-white p-2 rounded text-center">Easel.ly</div>
                      <div className="bg-white p-2 rounded text-center">PowerPoint</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Principles */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Design Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      principle: 'Simplicity',
                      icon: '✨',
                      tips: [
                        'Keep it clean and uncluttered',
                        'One main idea per slide/visual',
                        'Remove unnecessary elements',
                        'Use white space effectively'
                      ]
                    },
                    {
                      principle: 'Consistency',
                      icon: '🎨',
                      tips: [
                        'Use consistent colors and fonts',
                        'Maintain same style throughout',
                        'Follow brand guidelines',
                        'Uniform sizing and spacing'
                      ]
                    },
                    {
                      principle: 'Contrast',
                      icon: '🌓',
                      tips: [
                        'High contrast for readability',
                        'Dark text on light background',
                        'Use color to highlight key points',
                        'Avoid busy backgrounds'
                      ]
                    },
                    {
                      principle: 'Hierarchy',
                      icon: '📐',
                      tips: [
                        'Most important info stands out',
                        'Use size to show importance',
                        'Guide viewer\'s eye flow',
                        'Clear headings and subheadings'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{item.principle}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                            <span className="text-blue-600">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Common Visual Aid Mistakes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Too much text on slides',
                        'Tiny fonts that are hard to read',
                        'Poor color combinations',
                        'Low-quality pixelated images',
                        'Inconsistent design elements',
                        'Too many animations/transitions',
                        'Reading directly from slides',
                        'Overly complex charts',
                        'Not testing beforehand',
                        'Ignoring audience needs',
                        'Copyright violations',
                        'No backup plan for tech failures'
                      ].map((mistake, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                          <span className="text-red-600">✗</span>
                          <span>{mistake}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Presentations Section - ENHANCED WITH CHECKLIST */}
        {activeTab === 'presentations' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Effective Presentations 🎯
              </h2>

              {/* Effective Oral Presentations - 3 V's - NEW SECTION */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎤 The 3 V's of Effective Oral Presentations</h3>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 mb-4">
                  <p className="text-lg opacity-90 text-center">
                    Master these three aspects for powerful presentations
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      v: 'VERBAL',
                      percent: '7%',
                      title: 'What You Say',
                      icon: '💬',
                      elements: [
                        'Word choice',
                        'Message clarity',
                        'Content organization',
                        'Language appropriateness',
                        'Jargon usage',
                        'Examples and stories'
                      ],
                      tips: [
                        'Use simple, clear language',
                        'Avoid filler words (um, uh, like)',
                        'Be concise and specific',
                        'Use active voice'
                      ]
                    },
                    {
                      v: 'VOCAL',
                      percent: '38%',
                      title: 'How You Say It',
                      icon: '🎵',
                      elements: [
                        'Tone of voice',
                        'Pitch variation',
                        'Speaking pace',
                        'Volume control',
                        'Pauses and emphasis',
                        'Articulation'
                      ],
                      tips: [
                        'Vary your tone to maintain interest',
                        'Speak at moderate pace (120-150 wpm)',
                        'Use pauses for emphasis',
                        'Project your voice clearly'
                      ]
                    },
                    {
                      v: 'VISUAL',
                      percent: '55%',
                      title: 'How You Look',
                      icon: '👁️',
                      elements: [
                        'Body language',
                        'Facial expressions',
                        'Eye contact',
                        'Posture and stance',
                        'Gestures',
                        'Appearance and dress'
                      ],
                      tips: [
                        'Maintain eye contact with audience',
                        'Use natural hand gestures',
                        'Stand tall and confident',
                        'Smile and show enthusiasm'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="text-3xl font-bold text-purple-800 mb-1">{item.percent}</h4>
                        <h5 className="text-xl font-bold text-gray-800 mb-1">{item.v}</h5>
                        <p className="text-sm text-gray-600">{item.title}</p>
                      </div>
                      <div className="bg-white rounded p-3 mb-3">
                        <h6 className="font-semibold text-gray-800 text-sm mb-2">Key Elements:</h6>
                        <ul className="space-y-1">
                          {item.elements.map((el, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-purple-600">•</span>
                              <span>{el}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-purple-100 rounded p-3">
                        <h6 className="font-semibold text-purple-800 text-sm mb-2">Pro Tips:</h6>
                        <ul className="space-y-1">
                          {item.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-purple-600">→</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Presentation Checklist - COMPLETE FROM PDF */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">✅ Complete Presentation Checklist</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        category: 'K - Knowledge',
                        checks: [
                          'Know your subject thoroughly',
                          'Research your topic in depth',
                          'Prepare supporting data and examples',
                          'Anticipate questions'
                        ]
                      },
                      {
                        category: 'L - Loudness',
                        checks: [
                          'Project your voice clearly',
                          'Adjust volume for room size',
                          'Ensure everyone can hear',
                          'Test audio equipment beforehand'
                        ]
                      },
                      {
                        category: 'N - Non-verbal Communication',
                        checks: [
                          'Maintain good posture',
                          'Use appropriate gestures',
                          'Make eye contact with audience',
                          'Show confident body language'
                        ]
                      },
                      {
                        category: 'O - Organization',
                        checks: [
                          'Clear introduction, body, conclusion',
                          'Logical flow of ideas',
                          'Smooth transitions between points',
                          'Time management'
                        ]
                      },
                      {
                        category: 'W - Words',
                        checks: [
                          'Use clear, simple language',
                          'Avoid jargon or explain it',
                          'Choose words carefully',
                          'Eliminate filler words'
                        ]
                      },
                      {
                        category: 'E - Eye Contact',
                        checks: [
                          'Scan the entire audience',
                          'Hold eye contact 3-5 seconds',
                          'Don\'t stare at notes/slides',
                          'Connect with individuals'
                        ]
                      },
                      {
                        category: 'D - Delivery',
                        checks: [
                          'Appropriate pace (not too fast/slow)',
                          'Vary tone and pitch',
                          'Use pauses effectively',
                          'Show enthusiasm and energy'
                        ]
                      },
                      {
                        category: 'G - Gestures',
                        checks: [
                          'Natural hand movements',
                          'Purposeful gestures',
                          'Avoid nervous habits',
                          'Use open palm gestures'
                        ]
                      },
                      {
                        category: 'E - Expression',
                        checks: [
                          'Appropriate facial expressions',
                          'Show genuine emotion',
                          'Smile when appropriate',
                          'Match expression to content'
                        ]
                      },
                      {
                        category: 'Preparation',
                        checks: [
                          'Rehearse multiple times',
                          'Test all equipment',
                          'Prepare backup plans',
                          'Arrive early to setup'
                        ]
                      },
                      {
                        category: 'Visual Aids',
                        checks: [
                          'Clear and readable slides',
                          'Minimal text per slide',
                          'High-quality images',
                          'Consistent design'
                        ]
                      },
                      {
                        category: 'Audience Engagement',
                        checks: [
                          'Ask questions',
                          'Encourage participation',
                          'Read audience reactions',
                          'Adapt as needed'
                        ]
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <h5 className="font-bold text-blue-800 mb-3">{item.category}</h5>
                        <ul className="space-y-2">
                          {item.checks.map((check, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <input type="checkbox" className="mt-1" />
                              <span>{check}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Presentation Structure */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📝 Presentation Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      part: 'Opening (10%)',
                      icon: '🚀',
                      elements: [
                        'Hook/Attention grabber',
                        'Introduce yourself',
                        'State your topic',
                        'Preview main points',
                        'Establish credibility'
                      ]
                    },
                    {
                      part: 'Body (80%)',
                      icon: '📊',
                      elements: [
                        'Main points (2-4 max)',
                        'Supporting evidence',
                        'Examples and stories',
                        'Visual aids',
                        'Smooth transitions'
                      ]
                    },
                    {
                      part: 'Closing (10%)',
                      icon: '🎬',
                      elements: [
                        'Summarize key points',
                        'Call to action',
                        'Memorable closing',
                        'Thank audience',
                        'Q&A invitation'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 rounded-lg p-5">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.part}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.elements.map((el, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                            <span className="text-blue-600">✓</span>
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handling Q&A */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">❓</span>
                  Handling Q&A Session
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-3">During Q&A:</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Listen to full question before answering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Repeat/paraphrase question for everyone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Be honest if you don't know</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Keep answers concise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>Stay calm and professional</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-3">If You Don't Know:</h5>
                    <div className="space-y-2 text-sm bg-yellow-100 p-3 rounded">
                      <p className="font-semibold text-yellow-900">"That's a great question. I don't have that information right now, but I'll find out and get back to you."</p>
                      <p className="text-xs text-gray-600 mt-2">Never make up an answer! Honesty builds credibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dyadic Communication Section */}
        {activeTab === 'dyadic' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Dyadic Communication 👥
              </h2>

              {/* What is Dyadic */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 mb-4">
                  <h3 className="text-2xl font-bold mb-3">What is Dyadic Communication?</h3>
                  <p className="text-lg opacity-90">
                    Dyadic communication is <strong>face-to-face interaction between two people</strong>. 
                    It's the most basic and common form of interpersonal communication.
                  </p>
                </div>
              </div>

              {/* Types */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Types of Dyadic Communication</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      type: 'Formal Dyadic',
                      icon: '💼',
                      examples: ['Job interviews', 'Performance reviews', 'Client meetings', 'Counseling sessions'],
                      characteristics: ['Structured', 'Professional', 'Goal-oriented', 'Power dynamics present']
                    },
                    {
                      type: 'Informal Dyadic',
                      icon: '☕',
                      examples: ['Casual conversations', 'Friendly chats', 'Coffee break talks', 'Social interactions'],
                      characteristics: ['Relaxed', 'Personal', 'Spontaneous', 'Equal relationship']
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-5xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-xl">{item.type}</h4>
                      </div>
                      <div className="bg-white rounded p-4 mb-3">
                        <div className="font-semibold text-gray-800 mb-2">Examples:</div>
                        <ul className="space-y-1">
                          {item.examples.map((ex, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-blue-600">•</span>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-100 rounded p-4">
                        <div className="font-semibold text-gray-800 mb-2">Characteristics:</div>
                        <div className="flex flex-wrap gap-2">
                          {item.characteristics.map((char, i) => (
                            <span key={i} className="text-xs bg-white px-2 py-1 rounded">
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Effective Dyadic Communication */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Keys to Effective Dyadic Communication</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      key: 'Active Listening',
                      tips: ['Pay full attention', 'Don\'t interrupt', 'Show you\'re listening', 'Ask clarifying questions', 'Paraphrase to confirm'],
                      icon: '👂'
                    },
                    {
                      key: 'Clear Expression',
                      tips: ['Be specific', 'Use simple language', 'Organize thoughts', 'Be concise', 'Provide examples'],
                      icon: '💬'
                    },
                    {
                      key: 'Building Rapport',
                      tips: ['Find common ground', 'Show genuine interest', 'Use appropriate humor', 'Be authentic', 'Mirror body language'],
                      icon: '🤝'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
                      <div className="text-center mb-3">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.key}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-gray-700 bg-white p-2 rounded flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Meetings Section */}
        {activeTab === 'meetings' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Effective Meetings 📋
              </h2>

              {/* Meeting Structure */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Meeting Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      phase: 'Before Meeting',
                      icon: '📅',
                      tasks: [
                        'Set clear objectives',
                        'Create agenda',
                        'Invite relevant people only',
                        'Share materials in advance',
                        'Book appropriate venue',
                        'Test equipment'
                      ]
                    },
                    {
                      phase: 'During Meeting',
                      icon: '⏱️',
                      tasks: [
                        'Start on time',
                        'Follow agenda',
                        'Encourage participation',
                        'Stay focused',
                        'Take notes/minutes',
                        'Manage time'
                      ]
                    },
                    {
                      phase: 'After Meeting',
                      icon: '✅',
                      tasks: [
                        'Share minutes promptly',
                        'Assign action items',
                        'Set deadlines',
                        'Follow up',
                        'Evaluate effectiveness',
                        'Schedule next meeting if needed'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-lg">{item.phase}</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="text-sm text-gray-700 bg-white p-2 rounded flex items-start gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meeting Agenda Sample */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Creating an Effective Agenda</h3>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                    <h5 className="font-bold text-green-800 mb-4 text-lg">Sample Agenda Format:</h5>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex gap-4 p-3 bg-green-50 rounded">
                        <div className="font-semibold w-32">Meeting Title:</div>
                        <div>Quarterly Review Meeting</div>
                      </div>
                      <div className="flex gap-4 p-3 bg-green-50 rounded">
                        <div className="font-semibold w-32">Date & Time:</div>
                        <div>October 15, 2025 | 2:00 PM - 3:30 PM</div>
                      </div>
                      <div className="flex gap-4 p-3 bg-green-50 rounded">
                        <div className="font-semibold w-32">Location:</div>
                        <div>Conference Room A / Zoom Link</div>
                      </div>
                      <div className="flex gap-4 p-3 bg-green-50 rounded">
                        <div className="font-semibold w-32">Attendees:</div>
                        <div>Team leads, Department heads</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <div className="font-semibold mb-2">Agenda Items:</div>
                        <div className="ml-4 space-y-2">
                          <div>1. Welcome & Introductions (5 min)</div>
                          <div>2. Q3 Performance Review (20 min)</div>
                          <div>3. Q4 Planning Discussion (30 min)</div>
                          <div>4. Budget Allocation (20 min)</div>
                          <div>5. Action Items & Next Steps (10 min)</div>
                          <div>6. Q&A (5 min)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Minutes */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Taking Meeting Minutes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
                    <h5 className="font-bold text-purple-800 mb-3">What to Include:</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">→</span>
                        <span>Meeting date, time, location</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">→</span>
                        <span>Attendees and absentees</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">→</span>
                        <span>Key discussions and decisions</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">→</span>
                        <span>Action items with assignees</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">→</span>
                        <span>Deadlines for tasks</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">→</span>
                        <span>Next meeting date</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
                    <h5 className="font-bold text-purple-800 mb-3">Best Practices:</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Be objective and factual</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Use present tense</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Keep it concise</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Distribute within 24 hours</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Get approval from chair</span>
                      </li>
                      <li className="bg-white p-2 rounded flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>File for future reference</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Negotiation Section - COMPLETE WITH 3 TYPES */}
        {activeTab === 'negotiation' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Negotiation Skills 🤝
              </h2>

              {/* What is Negotiation */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 mb-4">
                  <h3 className="text-2xl font-bold mb-3">What is Negotiation?</h3>
                  <p className="text-lg opacity-90">
                    Negotiation is a <strong>dialogue between two or more parties</strong> to reach a mutually beneficial agreement. 
                    It's about finding solutions where everyone wins.
                  </p>
                </div>
              </div>

              {/* 3 Types of Negotiators - COMPLETE FROM PDF */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎭 3 Types of Negotiators</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-4">
                  <p className="text-gray-700 text-center mb-4">
                    Understanding your negotiation style helps you leverage your strengths and work on weaknesses.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      type: 'Assertive Negotiator',
                      icon: '⚡',
                      color: 'red',
                      characteristics: [
                        'Direct and aggressive',
                        'Values time above relationship',
                        'Focuses on getting things done quickly',
                        'Can be perceived as pushy',
                        'Results-oriented',
                        'Impatient with small talk'
                      ],
                      strengths: [
                        'Gets to the point fast',
                        'Decisive',
                        'Confident',
                        'Clear about expectations'
                      ],
                      weaknesses: [
                        'May damage relationships',
                        'Can miss important details',
                        'May intimidate others',
                        'Less collaborative'
                      ],
                      tips: [
                        'Practice patience',
                        'Listen more actively',
                        'Build rapport before diving in',
                        'Consider others\' perspectives'
                      ]
                    },
                    {
                      type: 'Analyst Negotiator',
                      icon: '🔍',
                      color: 'blue',
                      characteristics: [
                        'Data-driven and methodical',
                        'Needs time to process information',
                        'Asks many questions',
                        'Focuses on details and accuracy',
                        'Risk-averse',
                        'Prefers written communication'
                      ],
                      strengths: [
                        'Thorough research',
                        'Logical decision-making',
                        'Identifies potential problems',
                        'Accurate and precise'
                      ],
                      weaknesses: [
                        'Can be slow to decide',
                        'May overthink situations',
                        'Can seem cold or distant',
                        'Resistant to quick changes'
                      ],
                      tips: [
                        'Set decision deadlines',
                        'Practice trusting instincts',
                        'Show more emotion/warmth',
                        'Accept some ambiguity'
                      ]
                    },
                    {
                      type: 'Accommodator Negotiator',
                      icon: '🤗',
                      color: 'green',
                      characteristics: [
                        'Relationship-focused',
                        'Friendly and personable',
                        'Avoids confrontation',
                        'Values harmony and agreement',
                        'Good at building rapport',
                        'Easy-going and flexible'
                      ],
                      strengths: [
                        'Builds strong relationships',
                        'Creates comfortable atmosphere',
                        'Diplomatic',
                        'Good at finding common ground'
                      ],
                      weaknesses: [
                        'May give in too easily',
                        'Can be taken advantage of',
                        'Avoids difficult conversations',
                        'May not get best deal'
                      ],
                      tips: [
                        'Stand firm on key issues',
                        'Practice saying no',
                        'Focus on objectives, not just rapport',
                        'Don\'t fear disagreement'
                      ]
                    },
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 border-2 border-${item.color}-300 rounded-lg p-5 hover:shadow-lg transition-all`}>
                      <div className="text-center mb-4">
                        <div className="text-6xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 text-xl">{item.type}</h4>
                      </div>
                      
                      <div className="bg-white rounded p-4 mb-3">
                        <h5 className="font-semibold text-gray-800 text-sm mb-2">Characteristics:</h5>
                        <ul className="space-y-1">
                          {item.characteristics.map((char, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className={`text-${item.color}-600`}>•</span>
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`bg-${item.color}-100 rounded p-3 mb-3`}>
                        <h5 className="font-semibold text-gray-800 text-sm mb-2">✓ Strengths:</h5>
                        <ul className="space-y-1">
                          {item.strengths.map((str, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className={`text-${item.color}-600`}>+</span>
                              <span>{str}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-100 rounded p-3 mb-3">
                        <h5 className="font-semibold text-gray-800 text-sm mb-2">✗ Weaknesses:</h5>
                        <ul className="space-y-1">
                          {item.weaknesses.map((weak, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-gray-500">−</span>
                              <span>{weak}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`bg-yellow-100 rounded p-3`}>
                        <h5 className="font-semibold text-gray-800 text-sm mb-2">💡 Improvement Tips:</h5>
                        <ul className="space-y-1">
                          {item.tips.map((tip, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-yellow-600">→</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> Most people have a dominant style but can adapt. The best negotiators 
                    recognize their style and adjust based on the situation and the other party's style.
                  </p>
                </div>
              </div>

              {/* Negotiation Process */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Negotiation Process</h3>
                <div className="space-y-3">
                  {[
                    {
                      step: '1. Preparation',
                      desc: 'Research and plan your strategy',
                      actions: ['Know your goals and limits', 'Research the other party', 'Identify your BATNA', 'Prepare supporting data', 'Anticipate objections']
                    },
                    {
                      step: '2. Opening',
                      desc: 'Establish rapport and set the tone',
                      actions: ['Build relationship', 'Set positive atmosphere', 'Clarify objectives', 'Establish ground rules', 'Active listening']
                    },
                    {
                      step: '3. Bargaining',
                      desc: 'Exchange offers and counteroffers',
                      actions: ['Present your position', 'Listen to their position', 'Find common ground', 'Make strategic concessions', 'Stay flexible']
                    },
                    {
                      step: '4. Closing',
                      desc: 'Reach agreement and finalize terms',
                      actions: ['Summarize agreements', 'Address final concerns', 'Confirm understanding', 'Document agreement', 'Plan next steps']
                    },
                    {
                      step: '5. Implementation',
                      desc: 'Execute the agreed terms',
                      actions: ['Follow through', 'Monitor progress', 'Maintain communication', 'Address issues promptly', 'Build for future']
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border-2 border-purple-200 rounded-lg p-5 hover:shadow-md transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 text-lg mb-1">{item.step}</h4>
                          <p className="text-gray-600 mb-3">{item.desc}</p>
                          <div className="bg-purple-50 rounded p-3">
                            <div className="font-semibold text-purple-800 text-sm mb-2">Key Actions:</div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {item.actions.map((action, i) => (
                                <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                                  <span className="text-purple-600">•</span>
                                  <span>{action}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Do's and Don'ts - FROM PDF */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Do's and Don'ts of Negotiation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                    <h5 className="font-bold text-green-800 mb-3 text-lg">✓ DO:</h5>
                    <ul className="space-y-2">
                      {[
                        'Focus on interests, not positions',
                        'Ask open-ended questions',
                        'Use silence strategically',
                        'Make the first offer (anchor)',
                        'Give concessions slowly and strategically',
                        'Look for creative win-win solutions',
                        'Build rapport and trust',
                        'Stay calm and professional',
                        'Know when to walk away',
                        'Document everything in writing',
                        'Listen more than you speak',
                        'Prepare thoroughly beforehand'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                          <span className="text-green-600">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                    <h5 className="font-bold text-red-800 mb-3 text-lg">✗ DON'T:</h5>
                    <ul className="space-y-2">
                      {[
                        'Make ultimatums or threats',
                        'Accept the first offer',
                        'Show desperation or urgency',
                        'Get emotional or angry',
                        'Reveal your bottom line early',
                        'Make unilateral concessions',
                        'Burn bridges or be aggressive',
                        'Negotiate without preparation',
                        'Focus only on price',
                        'Lie or deceive the other party',
                        'Interrupt or talk over others',
                        'Take rejection personally'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                          <span className="text-red-600">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Concepts */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔑</span>
                  Key Negotiation Concepts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      concept: 'BATNA',
                      full: 'Best Alternative To a Negotiated Agreement',
                      desc: 'Your backup plan if negotiation fails. Knowing your BATNA gives you confidence and power.'
                    },
                    {
                      concept: 'ZOPA',
                      full: 'Zone Of Possible Agreement',
                      desc: 'The range between the lowest price a seller will accept and the highest price a buyer will pay.'
                    },
                    {
                      concept: 'Anchoring',
                      full: 'Setting the Reference Point',
                      desc: 'Making the first offer to establish a favorable starting point for negotiations.'
                    },
                    {
                      concept: 'Win-Win',
                      full: 'Mutual Benefit',
                      desc: 'Finding solutions where both parties feel they\'ve gained value. Best for long-term relationships.'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                      <h5 className="font-bold text-gray-800 mb-1">{item.concept}</h5>
                      <p className="text-xs text-gray-600 italic mb-2">{item.full}</p>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Netiquette Section - COMPLETE */}
        {activeTab === 'netiquette' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Netiquette - Online Communication Etiquette 💻
              </h2>

              {/* What is Netiquette */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-6 mb-4">
                  <h3 className="text-2xl font-bold mb-3">What is Netiquette?</h3>
                  <p className="text-lg opacity-90">
                    <strong>Netiquette</strong> (Internet + Etiquette) refers to the <strong>rules of conduct for respectful and 
                    appropriate communication on the Internet</strong>. It's about being courteous, professional, and considerate online.
                  </p>
                </div>
              </div>

              {/* Online vs Physical Presence - NEW */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🌐 Online vs Physical Presence</h3>
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-800 mb-3">Physical Presence:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Immediate feedback through body language</li>
                        <li>• Tone and emotion easily conveyed</li>
                        <li>• Non-verbal cues visible</li>
                        <li>• Temporary and forgettable</li>
                        <li>• Limited audience</li>
                        <li>• Requires synchronous time</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-800 mb-3">Online Presence:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Delayed or no immediate feedback</li>
                        <li>• Tone can be misinterpreted</li>
                        <li>• No body language</li>
                        <li>• Permanent digital footprint</li>
                        <li>• Global audience reach</li>
                        <li>• Can be asynchronous</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-yellow-100 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Key Insight:</strong> Online communication lacks non-verbal cues, making it easier to 
                      misinterpret messages. Be extra clear and considerate in your digital interactions!
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Rules of Netiquette */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">10 Core Rules of Netiquette</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      rule: '1. Remember the Human',
                      desc: 'Treat others online as you would in person. Behind every screen is a real person with feelings.',
                      icon: '👤',
                      example: 'Before posting something harsh, ask: "Would I say this to their face?"'
                    },
                    {
                      rule: '2. Adhere to Standards',
                      desc: 'Follow the same standards of behavior online that you follow in real life. Be ethical and legal.',
                      icon: '⚖️',
                      example: 'Don\'t pirate software, respect copyright, avoid harassment'
                    },
                    {
                      rule: '3. Know Where You Are',
                      desc: 'Different online spaces have different rules. Understand the context before participating.',
                      icon: '🌐',
                      example: 'Professional tone on LinkedIn, casual on Instagram, formal in work emails'
                    },
                    {
                      rule: '4. Respect Time & Bandwidth',
                      desc: 'Don\'t waste others\' time with irrelevant content. Keep messages concise and relevant.',
                      icon: '⏱️',
                      example: 'Don\'t send huge files without asking, avoid spam, be concise'
                    },
                    {
                      rule: '5. Make Yourself Look Good',
                      desc: 'Check grammar and spelling. Think before you post. Your online presence reflects on you.',
                      icon: '✨',
                      example: 'Proofread emails, use proper capitalization, present yourself professionally'
                    },
                    {
                      rule: '6. Share Expert Knowledge',
                      desc: 'Contribute valuable information. Help others when you can. Be generous with your expertise.',
                      icon: '🎓',
                      example: 'Answer questions in forums, share helpful resources, mentor others'
                    },
                    {
                      rule: '7. Keep Flames Under Control',
                      desc: 'Don\'t engage in flame wars. Stay calm during disagreements. Take heated discussions offline.',
                      icon: '🔥',
                      example: 'If someone attacks you, respond professionally or don\'t respond at all'
                    },
                    {
                      rule: '8. Respect Privacy',
                      desc: 'Don\'t share private information without permission. Respect confidentiality.',
                      icon: '🔒',
                      example: 'Don\'t screenshot private conversations, respect NDA agreements'
                    },
                    {
                      rule: '9. Don\'t Abuse Power',
                      desc: 'If you have special access or privileges, use them responsibly and ethically.',
                      icon: '⚡',
                      example: 'Admins shouldn\'t misuse their authority, respect user data'
                    },
                    {
                      rule: '10. Forgive Mistakes',
                      desc: 'Everyone makes mistakes online. Be patient and understanding with others.',
                      icon: '🤝',
                      example: 'Kindly correct errors, give people benefit of doubt, don\'t pile on'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-4xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{item.rule}</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                      <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                        <p className="text-xs text-gray-600"><strong>Example:</strong> {item.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Etiquette - ENHANCED */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📧 Email Etiquette - Complete Guide</h3>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-green-800 mb-3">Subject Line:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="bg-white p-2 rounded">✓ Clear and specific</li>
                        <li className="bg-white p-2 rounded">✓ Summarizes email content</li>
                        <li className="bg-white p-2 rounded">✓ Use [Action Required] if needed</li>
                        <li className="bg-white p-2 rounded">✗ Don't leave blank</li>
                        <li className="bg-white p-2 rounded">✗ Avoid "URGENT!!!" unless truly urgent</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-800 mb-3">Body:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="bg-white p-2 rounded">✓ Professional greeting</li>
                        <li className="bg-white p-2 rounded">✓ Clear, concise message</li>
                        <li className="bg-white p-2 rounded">✓ Proper formatting</li>
                        <li className="bg-white p-2 rounded">✓ Professional closing</li>
                        <li className="bg-white p-2 rounded">✗ Don't use ALL CAPS</li>
                        <li className="bg-white p-2 rounded">✗ Avoid text speak (lol, brb)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-800 mb-3">CC, BCC, Spam:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="bg-white p-2 rounded"><strong>CC:</strong> Copy - everyone sees all recipients</li>
                        <li className="bg-white p-2 rounded"><strong>BCC:</strong> Blind Copy - recipients hidden from each other</li>
                        <li className="bg-white p-2 rounded">✓ Use CC for transparency</li>
                        <li className="bg-white p-2 rounded">✓ Use BCC for mass emails (privacy)</li>
                        <li className="bg-white p-2 rounded">✗ Don't overuse CC - email overload</li>
                        <li className="bg-white p-2 rounded">✗ Never spam or send unsolicited emails</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-800 mb-3">Response Time:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="bg-white p-2 rounded">✓ Reply within 24 hours</li>
                        <li className="bg-white p-2 rounded">✓ Acknowledge if you need more time</li>
                        <li className="bg-white p-2 rounded">✓ Use "Reply All" carefully</li>
                        <li className="bg-white p-2 rounded">✗ Don't ignore emails</li>
                        <li className="bg-white p-2 rounded">✗ Don't over-CC people</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Etiquette */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📱 Social Media Etiquette</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      platform: 'Professional (LinkedIn)',
                      icon: '💼',
                      dos: ['Professional profile photo', 'Industry-relevant content', 'Engage thoughtfully', 'Network strategically'],
                      donts: ['Personal rants', 'Controversial topics', 'Excessive self-promotion', 'Unprofessional comments']
                    },
                    {
                      platform: 'Work Communication (Slack/Teams)',
                      icon: '💬',
                      dos: ['Use appropriate channels', 'Respond promptly', 'Professional tone', 'Use threads'],
                      donts: ['Spam channels', 'Off-topic messages', 'Tag everyone', 'Late night messages']
                    },
                    {
                      platform: 'Video Calls (Zoom/Meet)',
                      icon: '🎥',
                      dos: ['Test tech beforehand', 'Professional background', 'Mute when not speaking', 'Camera on when appropriate'],
                      donts: ['Multitask visibly', 'Eat on camera', 'Interrupt others', 'Bad lighting/angle']
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
                      <div className="text-center mb-3">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h5 className="font-bold text-gray-800">{item.platform}</h5>
                      </div>
                      <div className="bg-white rounded p-3 mb-2">
                        <div className="text-xs font-semibold text-green-800 mb-2">✓ Do:</div>
                        <ul className="space-y-1">
                          {item.dos.map((d, i) => (
                            <li key={i} className="text-xs text-gray-700">• {d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded p-3">
                        <div className="text-xs font-semibold text-red-800 mb-2">✗ Don't:</div>
                        <ul className="space-y-1">
                          {item.donts.map((d, i) => (
                            <li key={i} className="text-xs text-gray-700">• {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Common Online Communication Mistakes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Using ALL CAPS (seen as shouting)',
                        'Sending emails when emotional',
                        'Forgetting to proofread',
                        'Replying All unnecessarily',
                        'Sharing fake news',
                        'Posting inappropriate content',
                        'Ignoring privacy settings',
                        'Being passive-aggressive',
                        'Over-sharing personal information',
                        'Not crediting sources',
                        'Engaging in online arguments',
                        'Sending vague messages',
                        'Poor timing (late night messages)',
                        'Using emojis inappropriately',
                        'Not respecting cultural differences',
                        'Forgetting tone doesn\'t translate'
                      ].map((mistake, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded">
                          <span className="text-red-600">✗</span>
                          <span>{mistake}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">📚 Module 2 Complete - Practice Makes Perfect!</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-1">Practice Daily</div>
                <div className="text-sm opacity-90">Apply these skills in real situations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🔄</div>
                <div className="font-semibold mb-1">Get Feedback</div>
                <div className="text-sm opacity-90">Ask others how you're doing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold mb-1">Self-Reflect</div>
                <div className="text-sm opacity-90">Rate yourself before and after</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold mb-1">Keep Improving</div>
                <div className="text-sm opacity-90">Communication is a lifelong skill</div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6">
              <p className="text-lg font-semibold mb-2">🌟 Remember: Practice, Practice, Practice! 🌟</p>
              <p className="text-sm opacity-75">Corporate Communication Module 2 - Complete with ALL PDF Content</p>
              <p className="text-xs opacity-50 mt-2">Dr. Bhartrihari Pandiya | Master these skills for success! ❤️</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          title="Back to Top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
