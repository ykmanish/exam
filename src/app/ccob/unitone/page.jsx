'use client'
import { useState } from 'react'

export default function CommunicationStudyGuide() {
  const [activeTab, setActiveTab] = useState('intro')

  const tabs = [
    { id: 'intro', label: 'Introduction', icon: '📚' },
    { id: 'ob', label: 'Why OB?', icon: '🧠' },
    { id: 'definition', label: 'What is CC?', icon: '💼' },
    { id: 'goals', label: 'Goals & Areas', icon: '🎯' },
    { id: 'history', label: 'History & Mix', icon: '📜' },
    { id: 'types', label: 'Types', icon: '💬' },
    { id: 'process', label: 'Models', icon: '🔄' },
    { id: '7cs', label: '7 Cs', icon: '✨' },
    { id: 'blooms', label: 'Bloom\'s', icon: '📊' },
    { id: 'skills', label: 'Skills', icon: '🎓' },
    { id: 'letters', label: 'Letters', icon: '✉️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'barriers', label: 'Barriers', icon: '⚠️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Corporate Communication & OB
              </h1>
              <p className="text-sm text-gray-600 mt-1">Complete Study Guide - Module 1 | Dr. Bhartrihari Pandiya</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                📅 Exam Tomorrow
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
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">🎯 DO IT!</h2>
              <p className="text-lg opacity-90 mb-6">
                Master Corporate Communication & Organizational Behavior for your exam success!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl mb-2">85%</div>
                  <div className="text-sm opacity-90">Financial success from soft skills</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl mb-2">57%</div>
                  <div className="text-sm opacity-90">Leaders prioritize soft skills</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl mb-2">15%</div>
                  <div className="text-sm opacity-90">Success from technical knowledge</div>
                </div>
              </div>
            </div>

            {/* Life Skills at Stake */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🌟</span>
                Life Skills at Stake
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-4">
                <p className="text-gray-700 italic">
                  "There are various life skills which we should be good at but ironically it is not taught to us in requisite way. 
                  Many educators and policymakers assume life skills are taught at home or learned by experience."
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { letter: 'A', skill: 'Basic Communication Skills', details: 'Active listening, verbal and non-verbal communication' },
                  { letter: 'B', skill: 'Emotional Intelligence', details: 'Self-awareness, empathy, stress management, conflict resolution' },
                  { letter: 'C', skill: 'Critical Thinking & Problem-Solving', details: 'Analyzing information, creative solutions, decision-making' },
                  { letter: 'D', skill: 'Time Management', details: 'Prioritizing tasks, avoiding procrastination and distractions' },
                  { letter: 'E', skill: 'Financial Literacy', details: 'Budgeting, saving, credit management, investing' },
                  { letter: 'F', skill: 'Adaptability & Resilience', details: 'Embracing change, overcoming setbacks, positive mindset' },
                  { letter: 'G', skill: 'Health & Wellness', details: 'Physical health, mental health management' },
                  { letter: 'H', skill: 'Interpersonal Skills', details: 'Building relationships, networking, respecting diversity' },
                  { letter: 'I', skill: 'Cultural & Social Awareness', details: 'Understanding perspectives, tolerance, community contribution' },
                  { letter: 'J', skill: 'Leadership & Teamwork', details: 'Inspiring others, delegating, collaboration' },
                  { letter: 'K', skill: 'Conflict Resolution', details: 'Negotiation, mediation, turning conflicts into growth' },
                  { letter: 'L', skill: 'Learning & Curiosity', details: 'Lifelong learning, growth mindset, openness' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.letter}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm">{item.skill}</div>
                      <div className="text-xs text-gray-600 mt-1">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Mode */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md p-6 border-2 border-green-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🚀</span>
                ACTION MODE - How to Improve
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Take onus for communication',
                  'Learn from MOOCs (Podcasts, Blogs, courses)',
                  'Read self-help books',
                  'Be open to constructive feedback',
                  'Keep a journal to track progress',
                  'Build a Support Network with mentors',
                  'Learn by Doing - take challenges',
                  'Engage in real-world experiences (internships)',
                ].map((action, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-700 text-sm">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Communication */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                Why Communication?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Crucial for Leadership Roles',
                  'Enhances Emotional Intelligence',
                  'Improves Public Speaking & Presentation',
                  'Strengthens Team Collaboration',
                  'Vital for Client & Stakeholder Engagement',
                  'Supports Organizational Branding & Culture',
                  'Prepares for Crisis Management',
                  'Navigates Cross-Cultural Communication',
                  'Improves Negotiation and Persuasion',
                  'Bridges Gap Between Strategy & Execution',
                ].map((reason, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                    <span className="text-blue-700 font-medium text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Quote */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <span className="text-4xl">💡</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">Remember:</h4>
                  <p className="text-gray-700 italic text-lg">
                    "Good intentions are not enough in today's world. It needs to be conveyed properly in time. 
                    Expressing in lucid terms to the audience is a must."
                  </p>
                </div>
              </div>
            </div>

            {/* Attitude Video Reference */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎬</span>
                Attitude - Important Concept
              </h3>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 mb-2"><strong>Key Points:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Some minds are already filled</li>
                  <li>A lineup of glasses joyfully share ideas, growing in scale after each exchange</li>
                  <li>But the jubilant cycle is halted by a stubborn jar whose head is already filled</li>
                  <li><strong>You can't change people who don't want to change</strong></li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">Video Reference: https://www.youtube.com/watch?v=a2Twa9lbsxs</p>
              </div>
            </div>
          </div>
        )}

        {/* Why Organizational Behavior Section */}
        {activeTab === 'ob' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Why Organizational Behavior? 🧠
              </h2>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-3">What is Organizational Behavior?</h3>
                <p className="text-lg opacity-90">
                  OB is the study of human behavior in organizational settings, how people interact within groups, 
                  and how organizations function. It bridges the gap between strategy and people.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: 'Develops Understanding of Human Behavior at Work',
                    desc: 'Learn how individuals and groups behave in organizational settings',
                    icon: '👥',
                    color: 'blue'
                  },
                  {
                    title: 'Builds Better Managers and Leaders',
                    desc: 'Equips leaders with skills to manage teams effectively',
                    icon: '👔',
                    color: 'green'
                  },
                  {
                    title: 'Enhances Teamwork and Collaboration',
                    desc: 'Improves group dynamics and cooperative work',
                    icon: '🤝',
                    color: 'purple'
                  },
                  {
                    title: 'Improves Decision-Making Skills',
                    desc: 'Based on personality, behavior patterns, and psychology',
                    icon: '🎯',
                    color: 'orange'
                  },
                  {
                    title: 'Employee Motivation and Engagement',
                    desc: 'Understand what drives employees and keeps them engaged',
                    icon: '⚡',
                    color: 'yellow'
                  },
                  {
                    title: 'Managing Organizational Change',
                    desc: 'Navigate and implement change effectively',
                    icon: '🔄',
                    color: 'red'
                  },
                  {
                    title: 'Strengthens Organizational Culture and Climate',
                    desc: 'Build positive work environment and company values',
                    icon: '🏢',
                    color: 'indigo'
                  },
                  {
                    title: 'Boosts Productivity and Performance',
                    desc: 'Optimize individual and organizational performance',
                    icon: '📈',
                    color: 'teal'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-4xl">{item.icon}</span>
                      <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">Key Insight:</h4>
                    <p className="text-gray-700 text-lg mb-2">
                      <strong>Bridges the Gap Between Strategy and People</strong>
                    </p>
                    <p className="text-gray-700">
                      Strategy without understanding people often fails. OB ensures leaders can translate business plans 
                      into action by managing people well. It's the foundation of effective management and leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* What is Corporate Communication Section */}
        {activeTab === 'definition' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                What is Corporate Communication? 💼
              </h2>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">Definition</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Corporate communications can be described as <strong>process of management of communication 
                  internally and externally at a workplace</strong>. It works as an orchestrating instrument through 
                  the level of overview it offers of plans, market research (such as image research, information 
                  about competitors, clients, etc.), and communication items (text, pictures).
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Purpose
                </h3>
                <p className="text-gray-700 text-lg">
                  The purpose of corporate communications is to <strong>construct a positive perception 
                  amongst various stakeholders in the business</strong>.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📡</span>
                  Communication Channels
                </h3>
                <p className="text-gray-700 mb-4">
                  Corporate communication involves various channels, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    'Press Releases',
                    'Social Media',
                    'Newsletters',
                    'Websites',
                    'Speeches',
                    'Reports',
                    'Advertisements',
                    'Other Forms',
                  ].map((channel, idx) => (
                    <div key={idx} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-center text-sm font-medium">
                      {channel}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4 italic">
                  All tailored to the target audience
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  Importance
                </h3>
                <p className="text-gray-700">
                  Effective corporate communication plays a <strong>crucial role</strong> in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                  <li>Shaping the public perception of an organization</li>
                  <li>Maintaining its credibility</li>
                  <li>Supporting its long-term success in a competitive business environment</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  Perception of Stakeholders
                </h3>
                <div className="bg-white rounded-lg p-5">
                  <p className="text-gray-700 text-lg mb-3">
                    <strong>A major variable for the success of any organization is the perception of the public.</strong>
                  </p>
                  <p className="text-gray-700 mb-3">
                    What the general public, competitors, employees <strong>"perceive"</strong> about the organization 
                    is what defines its respectability, its position and ultimately its success.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg mt-4">
                    <p className="text-purple-900 font-semibold text-center">
                      Significance of corporate communication: <br/>
                      <span className="text-xl">'Controlling how the world sees you'</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goals & Areas Section */}
        {activeTab === 'goals' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Goals & Areas of Corporate Communication 🎯
              </h2>

              {/* Primary Goals */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Primary Goals</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Creating a Consistent and Unified Message',
                      desc: 'Ensuring that all communication from the organization, whether to employees, customers, shareholders, or the public, is aligned with the company\'s vision, mission, and values.',
                      icon: '📢',
                      color: 'blue'
                    },
                    {
                      title: 'Building and Maintaining Corporate Reputation',
                      desc: 'Presenting the company in a favorable light and managing public perception through effective communication strategies.',
                      icon: '⭐',
                      color: 'yellow'
                    },
                    {
                      title: 'Facilitating Internal Communication',
                      desc: 'Ensuring clear and transparent communication among employees, departments, and management to foster teamwork, productivity, and a shared organizational culture.',
                      icon: '👥',
                      color: 'green'
                    },
                    {
                      title: 'Managing Crisis Communication',
                      desc: 'Addressing and mitigating potential or ongoing crises by promptly and effectively communicating with stakeholders to minimize negative impacts on the company\'s reputation.',
                      icon: '🚨',
                      color: 'red'
                    },
                    {
                      title: 'Engaging Stakeholders',
                      desc: 'Inter',
                      title: 'Engaging Stakeholders',
                      desc: 'Interacting with key stakeholders such as investors, customers, employees, government bodies, and the media to build strong and lasting relationships.',
                      icon: '🤝',
                      color: 'purple'
                    },
                    {
                      title: 'Enhancing Brand Image and Awareness',
                      desc: 'Promoting the organization\'s brand identity and ensuring consistent messaging across all platforms to increase market presence.',
                      icon: '🏆',
                      color: 'orange'
                    },
                    {
                      title: 'Supporting Business Objectives',
                      desc: 'Aligning communication strategies with overall business goals to drive growth, innovation, and competitive advantage.',
                      icon: '📈',
                      color: 'teal'
                    },
                  ].map((goal, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl flex-shrink-0">{goal.icon}</span>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg mb-2">{goal.title}</h4>
                          <p className="text-gray-600 text-sm">{goal.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Corporate Communication */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Areas of Corporate Communication</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      area: 'Internal Communications',
                      desc: 'Communication within the organization among employees and management',
                      examples: ['Employee newsletters', 'Intranet portals', 'Town hall meetings', 'Memos', 'Team briefings'],
                      icon: '🏢',
                      color: 'blue'
                    },
                    {
                      area: 'External Communications',
                      desc: 'Communication with stakeholders outside the organization',
                      examples: ['Press releases', 'Public relations', 'Social media', 'Advertising', 'Customer service'],
                      icon: '🌍',
                      color: 'green'
                    },
                    {
                      area: 'Public Relations (PR)',
                      desc: 'Managing the organization\'s public image and media relationships',
                      examples: ['Media relations', 'Press conferences', 'Event management', 'Reputation management'],
                      icon: '📰',
                      color: 'purple'
                    },
                    {
                      area: 'Investor Relations',
                      desc: 'Communication with shareholders and the financial community',
                      examples: ['Annual reports', 'Earnings calls', 'Investor meetings', 'Financial disclosures'],
                      icon: '💰',
                      color: 'yellow'
                    },
                    {
                      area: 'Crisis Communication',
                      desc: 'Managing communication during emergencies or negative events',
                      examples: ['Crisis management plans', 'Rapid response teams', 'Damage control', 'Stakeholder reassurance'],
                      icon: '🚨',
                      color: 'red'
                    },
                    {
                      area: 'Marketing Communications',
                      desc: 'Promoting products, services, and brand identity',
                      examples: ['Advertising campaigns', 'Brand messaging', 'Product launches', 'Content marketing'],
                      icon: '📱',
                      color: 'orange'
                    },
                    {
                      area: 'Corporate Social Responsibility (CSR)',
                      desc: 'Communicating the organization\'s social and environmental initiatives',
                      examples: ['Sustainability reports', 'Community programs', 'Ethical practices', 'Social impact'],
                      icon: '🌱',
                      color: 'teal'
                    },
                    {
                      area: 'Government Relations',
                      desc: 'Managing interactions with government bodies and regulatory agencies',
                      examples: ['Lobbying', 'Policy advocacy', 'Compliance communication', 'Public affairs'],
                      icon: '🏛️',
                      color: 'indigo'
                    },
                  ].map((area, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{area.icon}</span>
                        <h4 className="font-bold text-gray-800 text-lg">{area.area}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{area.desc}</p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Examples:</p>
                        <ul className="space-y-1">
                          {area.examples.map((ex, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-blue-600">•</span>
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
          </div>
        )}

        {/* History & Communication Mix Section */}
        {activeTab === 'history' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                History & Communication Mix 📜
              </h2>

              {/* History */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">History of Corporate Communication</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-5">
                    <p className="text-lg">
                      Corporate Communication as a formal discipline emerged in the <strong>late 20th century</strong> as 
                      organizations recognized the need for strategic communication to manage their reputation and relationships 
                      with various stakeholders.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
                      <h4 className="font-bold text-blue-800 mb-3 text-lg">Early 20th Century</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Focus on <strong>internal communication</strong> and employee relations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Limited to basic <strong>public relations</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Organizations primarily focused on production</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
                      <h4 className="font-bold text-green-800 mb-3 text-lg">Mid-20th Century</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Rise of <strong>mass media</strong> (TV, radio, newspapers)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Growth of <strong>advertising</strong> and brand management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>Companies started managing public perception</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
                      <h4 className="font-bold text-purple-800 mb-3 text-lg">Late 20th Century (1980s-1990s)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span><strong>Formalization</strong> of corporate communication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Integration of PR, marketing, and internal communication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Focus on <strong>stakeholder management</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Emergence of crisis communication strategies</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
                      <h4 className="font-bold text-orange-800 mb-3 text-lg">21st Century (2000s-Present)</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span><strong>Digital transformation</strong> - social media era</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>Real-time communication and instant feedback</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>Emphasis on <strong>transparency</strong> and authenticity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>Data-driven communication strategies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>Corporate Social Responsibility (CSR) communication</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Mix */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Communication Mix</h3>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-xl p-6 mb-4">
                  <p className="text-gray-700 text-lg">
                    The <strong>Communication Mix</strong> refers to the combination of communication tools and channels 
                    an organization uses to reach its target audiences and achieve its communication objectives.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Advertising',
                      desc: 'Paid, non-personal communication to promote products/services',
                      tools: ['TV commercials', 'Radio ads', 'Print ads', 'Online banners', 'Social media ads'],
                      icon: '📺',
                      color: 'red'
                    },
                    {
                      title: 'Public Relations',
                      desc: 'Managing public perception and media relations',
                      tools: ['Press releases', 'Media events', 'Sponsorships', 'Community programs'],
                      icon: '📰',
                      color: 'blue'
                    },
                    {
                      title: 'Sales Promotion',
                      desc: 'Short-term incentives to encourage purchase',
                      tools: ['Discounts', 'Coupons', 'Contests', 'Free samples', 'Loyalty programs'],
                      icon: '🎁',
                      color: 'green'
                    },
                    {
                      title: 'Personal Selling',
                      desc: 'Direct interaction with customers',
                      tools: ['Sales presentations', 'Product demos', 'Trade shows', 'Door-to-door'],
                      icon: '🤝',
                      color: 'purple'
                    },
                    {
                      title: 'Direct Marketing',
                      desc: 'Direct communication with target customers',
                      tools: ['Email marketing', 'SMS', 'Catalogs', 'Telemarketing', 'Direct mail'],
                      icon: '📧',
                      color: 'orange'
                    },
                    {
                      title: 'Digital/Social Media',
                      desc: 'Online platforms and social networks',
                      tools: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Blogs'],
                      icon: '📱',
                      color: 'pink'
                    },
                    {
                      title: 'Events & Experiential',
                      desc: 'Creating memorable brand experiences',
                      tools: ['Product launches', 'Trade shows', 'Conferences', 'Pop-up stores'],
                      icon: '🎪',
                      color: 'yellow'
                    },
                    {
                      title: 'Content Marketing',
                      desc: 'Creating valuable content to attract audience',
                      tools: ['Blogs', 'Videos', 'Podcasts', 'Infographics', 'E-books', 'Webinars'],
                      icon: '📝',
                      color: 'teal'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Tools:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.tools.map((tool, i) => (
                            <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Insight */}
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Integrated Marketing Communications (IMC)</h4>
                    <p className="text-gray-700">
                      Modern organizations use an <strong>Integrated approach</strong> combining multiple elements of the 
                      communication mix to deliver consistent, coordinated messages across all channels. This ensures maximum 
                      impact and reinforces brand identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Types of Communication Section */}
        {activeTab === 'types' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Types of Communication 💬
              </h2>

              {/* Based on Relationship */}
              <div className="mb-8">
                <div className="bg-pink-100 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold text-pink-800 mb-1">📱 Based on Relationship</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { 
                      num: '1', 
                      title: 'Intrapersonal', 
                      desc: 'Communication with oneself',
                      example: 'Self-reflection, internal dialogue, thinking',
                      detail: 'Talking to yourself, journaling, self-awareness'
                    },
                    { 
                      num: '2', 
                      title: 'Transpersonal', 
                      desc: 'Spiritual or transcendent communication',
                      example: 'Meditation, prayer, higher consciousness',
                      detail: 'Beyond individual ego, spiritual connections'
                    },
                    { 
                      num: '3', 
                      title: 'Interpersonal', 
                      desc: 'Between two or more people',
                      example: 'Conversations, interviews, discussions',
                      detail: 'Face-to-face interaction, building relationships'
                    },
                    { 
                      num: '4', 
                      title: 'Group', 
                      desc: 'Communication within small groups',
                      example: 'Team meetings, group discussions, committees',
                      detail: 'Usually 3-12 people, shared goals'
                    },
                    { 
                      num: '5', 
                      title: 'Mass', 
                      desc: 'Communication to large audiences',
                      example: 'TV, radio, newspapers, social media',
                      detail: 'One-to-many, media-mediated communication'
                    },
                  ].map((type) => (
                    <div key={type.num} className="bg-pink-50 border border-pink-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                          {type.num}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg">{type.title}</h4>
                      </div>
                      <p className="text-gray-700 mb-2 text-sm">{type.desc}</p>
                      <div className="bg-white p-2 rounded text-xs text-gray-600 mb-2">
                        <strong>Example:</strong> {type.example}
                      </div>
                      <div className="bg-pink-100 p-2 rounded text-xs text-gray-700">
                        {type.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Based on Organizational Structure */}
              <div className="mb-8">
                <div className="bg-orange-100 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold text-orange-800 mb-1">🏢 Based on Organizational Structure</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      num: '1', 
                      title: 'Formal', 
                      desc: 'Official communication through defined channels',
                      example: 'Memos, official emails, reports, meetings',
                      characteristics: ['Follows organizational hierarchy', 'Documented', 'Official language', 'Structured']
                    },
                    { 
                      num: '2', 
                      title: 'Informal', 
                      desc: 'Unofficial, casual communication',
                      example: 'Water cooler chats, grapevine, casual conversations',
                      characteristics: ['No set pattern', 'Faster', 'Personal', 'Flexible']
                    },
                  ].map((type) => (
                    <div key={type.num} className="bg-orange-50 border border-orange-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                          {type.num}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg">{type.title}</h4>
                      </div>
                      <p className="text-gray-700 mb-2">{type.desc}</p>
                      <div className="bg-white p-2 rounded text-sm text-gray-600 mb-2">
                        <strong>Example:</strong> {type.example}
                      </div>
                      <div className="bg-orange-100 p-3 rounded">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Characteristics:</p>
                        <div className="flex flex-wrap gap-1">
                          {type.characteristics.map((char, i) => (
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

              {/* Based on Direction */}
              <div className="mb-8">
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">↕️ Based on Direction</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { 
                      num: '1', 
                      title: 'Vertical', 
                      desc: 'Up and down the hierarchy',
                      example: 'Manager to employee or vice versa',
                      icon: '⬇️'
                    },
                    { 
                      num: '2', 
                      title: 'Horizontal', 
                      desc: 'Between people at same level',
                      example: 'Peer-to-peer communication',
                      icon: '↔️'
                    },
                    { 
                      num: '3', 
                      title: 'Upward', 
                      desc: 'From subordinates to superiors',
                      example: 'Employee feedback to management',
                      icon: '⬆️'
                    },
                    { 
                      num: '4', 
                      title: 'Downward', 
                      desc: 'From superiors to subordinates',
                      example: 'Instructions from management',
                      icon: '⬇️'
                    },
                    { 
                      num: '5', 
                      title: 'Diagonal', 
                      desc: 'Cross-functional communication',
                      example: 'Different departments, different levels',
                      icon: '↘️'
                    },
                  ].map((type) => (
                    <div key={type.num} className="bg-blue-50 border border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{type.icon}</div>
                        <h4 className="font-bold text-gray-800">{type.title}</h4>
                      </div>
                      <p className="text-gray-700 mb-2 text-sm">{type.desc}</p>
                      <div className="bg-white p-2 rounded text-xs text-gray-600">
                        <strong>Example:</strong> {type.example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Based on Channels */}
              <div className="mb-8">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold text-green-800 mb-1">📢 Based on Channels</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Verbal */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                    <h4 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                      <span className="text-2xl">🗣️</span>
                      1. Verbal Communication
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                        <div className="font-semibold text-gray-800 mb-2">1.1 Oral Communication</div>
                        <p className="text-sm text-gray-600 mb-2">Spoken words, face-to-face</p>
                        <div className="text-xs bg-green-100 p-2 rounded">
                          <strong>Examples:</strong> Meetings, presentations, phone calls, video conferences
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                        <div className="font-semibold text-gray-800 mb-2">1.2 Written Communication</div>
                        <p className="text-sm text-gray-600 mb-2">Text-based messages</p>
                        <div className="text-xs bg-green-100 p-2 rounded">
                          <strong>Examples:</strong> Emails, reports, memos, letters, documents
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Non-Verbal */}
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                    <h4 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                      <span className="text-2xl">🤝</span>
                      2. Non-Verbal Communication
                    </h4>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-3">Communication without words</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-lg">👁️</span>
                          <span className="text-gray-700"><strong>Eye contact:</strong> Shows attention</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-lg">😊</span>
                          <span className="text-gray-700"><strong>Facial expressions:</strong> Emotions</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-lg">👋</span>
                          <span className="text-gray-700"><strong>Gestures:</strong> Hand movements</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-lg">🚶</span>
                          <span className="text-gray-700"><strong>Body language:</strong> Posture</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-lg">🎵</span>
                          <span className="text-gray-700"><strong>Tone of voice:</strong> How you speak</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-lg">👔</span>
                          <span className="text-gray-700"><strong>Appearance:</strong> Dress, grooming</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communication Models Section */}
        {activeTab === 'process' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Communication Process & Models 🔄
              </h2>

              {/* Shannon-Weaver Model */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-5 mb-4">
                  <h3 className="text-2xl font-bold mb-2">Shannon-Weaver Model (1948)</h3>
                  <p className="opacity-90">Linear Transmission Model - The Foundation of Communication Theory</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <div className="bg-white rounded-lg p-4 shadow-md text-center flex-shrink-0" style={{width: '150px'}}>
                        <div className="text-3xl mb-2">📤</div>
                        <div className="font-bold text-gray-800 text-sm">Information Source</div>
                        <div className="text-xs text-gray-600 mt-1">Sender</div>
                      </div>
                      
                      <div className="text-2xl">→</div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md text-center flex-shrink-0" style={{width: '150px'}}>
                        <div className="text-3xl mb-2">📡</div>
                        <div className="font-bold text-gray-800 text-sm">Transmitter</div>
                        <div className="text-xs text-gray-600 mt-1">Encoder</div>
                      </div>
                      
                      <div className="text-2xl">→</div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md text-center flex-shrink-0" style={{width: '150px'}}>
                        <div className="text-3xl mb-2">📻</div>
                        <div className="font-bold text-gray-800 text-sm">Channel</div>
                        <div className="text-xs text-gray-600 mt-1">Medium</div>
                      </div>
                      
                      <div className="text-2xl">→</div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md text-center flex-shrink-0" style={{width: '150px'}}>
                        <div className="text-3xl mb-2">📥</div>
                        <div className="font-bold text-gray-800 text-sm">Receiver</div>
                        <div className="text-xs text-gray-600 mt-1">Decoder</div>
                      </div>
                      
                      <div className="text-2xl">→</div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md text-center flex-shrink-0" style={{width: '150px'}}>
                        <div className="text-3xl mb-2">👤</div>
                        <div className="font-bold text-gray-800 text-sm">Destination</div>
                        <div className="text-xs text-gray-600 mt-1">Reception</div>
                      </div>
                    </div>

                    {/* Noise */}
                    <div className="text-center mt-4">
                      <div className="inline-block bg-red-500 text-white rounded-lg p-4 shadow-lg">
                        <div className="text-2xl mb-2">⚠️ NOISE ⚠️</div>
                        <div className="font-semibold">Interference affecting the message</div>
                        <div className="text-sm opacity-90 mt-2">
                          Physical, semantic, psychological noise
                        </div>
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="mt-4">
                      <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center">
                        <div className="font-bold text-green-800 mb-2">↩️ FEEDBACK LOOP</div>
                        <div className="text-sm text-gray-700">Response from receiver back to sender</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 mb-2">🎯 Purpose</div>
                    <div className="text-sm text-gray-700">Shows how information flows from source to destination</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 mb-2">✨ Key Feature</div>
                    <div className="text-sm text-gray-700">Introduces concept of 'noise' in communication</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 mb-2">📊 Application</div>
                    <div className="text-sm text-gray-700">Electronic and technical communication</div>
                  </div>
                </div>
              </div>

              {/* Berlo's SMCR Model */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-5 mb-4">
                  <h3 className="text-2xl font-bold mb-2">Berlo's SMCR Model (1960)</h3>
                  <p className="opacity-90">Sender-Message-Channel-Receiver Model - Human Factors Focus</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Sender */}
                    <div className="bg-white rounded-lg p-5 shadow-md border-t-4 border-purple-600">
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2">👤</div>
                        <div className="font-bold text-lg text-gray-800">SENDER</div>
                        <div className="text-sm text-purple-600 mt-1">Encoderen</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="bg-purple-50 p-2 rounded">
                          <strong>Communication Skills</strong>
                          <div className="text-xs text-gray-600">Speaking, writing</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <strong>Attitudes</strong>
                          <div className="text-xs text-gray-600">Toward self, subject, receiver</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <strong>Knowledge</strong>
                          <div className="text-xs text-gray-600">Of subject matter</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <strong>Social System</strong>
                          <div className="text-xs text-gray-600">Cultural background</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <strong>Culture</strong>
                          <div className="text-xs text-gray-600">Values and beliefs</div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="bg-white rounded-lg p-5 shadow-md border-t-4 border-pink-600">
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2">💬</div>
                        <div className="font-bold text-lg text-gray-800">MESSAGE</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="bg-pink-50 p-2 rounded">
                          <strong>Content</strong>
                          <div className="text-xs text-gray-600">What is being said</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded">
                          <strong>Elements</strong>
                          <div className="text-xs text-gray-600">Words, gestures, symbols</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded">
                          <strong>Treatment</strong>
                          <div className="text-xs text-gray-600">How it's organized</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded">
                          <strong>Structure</strong>
                          <div className="text-xs text-gray-600">Arrangement of content</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded">
                          <strong>Code</strong>
                          <div className="text-xs text-gray-600">Language form</div>
                        </div>
                      </div>
                    </div>

                    {/* Channel */}
                    <div className="bg-white rounded-lg p-5 shadow-md border-t-4 border-indigo-600">
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2">📡</div>
                        <div className="font-bold text-lg text-gray-800">CHANNEL</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="bg-indigo-50 p-2 rounded flex items-center gap-2">
                          <span className="text-lg">👂</span>
                          <strong>Hearing</strong>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded flex items-center gap-2">
                          <span className="text-lg">👁️</span>
                          <strong>Seeing</strong>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded flex items-center gap-2">
                          <span className="text-lg">✋</span>
                          <strong>Touching</strong>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded flex items-center gap-2">
                          <span className="text-lg">👃</span>
                          <strong>Smelling</strong>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded flex items-center gap-2">
                          <span className="text-lg">👅</span>
                          <strong>Tasting</strong>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-600 text-center">
                        Uses all five senses
                      </div>
                    </div>

                    {/* Receiver */}
                    <div className="bg-white rounded-lg p-5 shadow-md border-t-4 border-green-600">
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2">👥</div>
                        <div className="font-bold text-lg text-gray-800">RECEIVER</div>
                        <div className="text-sm text-green-600 mt-1">Decoderen</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="bg-green-50 p-2 rounded">
                          <strong>Communication Skills</strong>
                          <div className="text-xs text-gray-600">Reading, listening</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <strong>Attitudes</strong>
                          <div className="text-xs text-gray-600">Toward self, sender, content</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <strong>Knowledge</strong>
                          <div className="text-xs text-gray-600">Of subject matter</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <strong>Social System</strong>
                          <div className="text-xs text-gray-600">Cultural background</div>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <strong>Culture</strong>
                          <div className="text-xs text-gray-600">Values and beliefs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <div className="font-bold text-gray-800 mb-1">Key Insight:</div>
                      <p className="text-gray-700 text-sm">
                        Both sender and receiver need similar communication skills, attitudes, knowledge, 
                        social systems, and cultural understanding for effective communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7 Cs of Communication Section */}
        {activeTab === '7cs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                7 Cs of Communication ✨
              </h2>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-5 mb-6">
                <p className="text-lg text-center">
                  The 7 Cs are essential principles for effective communication in any business setting.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    num: '1',
                    title: 'Conciseness',
                    color: 'green',
                    desc: 'Use short sentences and limited words. Be to the point. Don\'t be repetitive.',
                    example: 'Instead of: "I am writing this email to inform you that we will be having a meeting tomorrow at 10 AM in the conference room to discuss the quarterly results." Say: "Meeting tomorrow at 10 AM in conference room to discuss Q1 results."',
                    tips: ['Keep it brief', 'Avoid redundancy', 'Get to the point quickly']
                  },
                  {
                    num: '2',
                    title: 'Clarity',
                    color: 'blue',
                    desc: 'Plan your message clearly—one idea at a time. Use active voice.',
                    example: 'Unclear: "The report was written." Clear: "Sarah wrote the report."',
                    tips: ['Use simple language', 'One message at a time', 'Active voice preferred']
                  },
                  {
                    num: '3',
                    title: 'Courtesy',
                    color: 'pink',
                    desc: 'Be friendly and considerate, avoid negativity, and thank your audience.',
                    example: 'Instead of: "You failed to submit the report." Say: "Could you please submit the report at your earliest convenience?"',
                    tips: ['Be polite', 'Show respect', 'Use positive language']
                  },
                  {
                    num: '4',
                    title: 'Consideration',
                    color: 'purple',
                    desc: 'Show interest in the audience. Empathize. Resist. Build Rapport.',
                    example: 'Consider the audience\'s perspective: "I understand you\'re busy with multiple projects. When would be a good time for you to review this?"',
                    tips: ['Think about audience needs', 'Show empathy', 'Build relationships']
                  },
                  {
                    num: '5',
                    title: 'Completeness',
                    color: 'orange',
                    desc: 'Answer questions. Provide complete and relevant information for better decisions.',
                    example: 'Incomplete: "Meeting tomorrow." Complete: "Meeting tomorrow at 10 AM in Room 302. Please bring Q1 reports and budget proposals."',
                    tips: ['Include all necessary info', 'Answer who, what, when, where, why', 'Provide context']
                  },
                  {
                    num: '6',
                    title: 'Concreteness',
                    color: 'teal',
                    desc: 'Provide facts and examples. Engage. Be authentic. Showcase confidence.',
                    example: 'Vague: "Sales increased significantly." Concrete: "Sales increased by 25% from $100K to $125K in Q1."',
                    tips: ['Use specific facts', 'Include numbers and data', 'Give examples']
                  },
                  {
                    num: '7',
                    title: 'Correctness',
                    color: 'red',
                    desc: 'Check facts. Be precise. Get an expert review. Use writing tools and correct tone.',
                    example: 'Check grammar, spelling, facts, and tone. Ensure accuracy in all details including dates, names, and figures.',
                    tips: ['Proofread carefully', 'Verify facts', 'Use proper grammar']
                  },
                ].map((c) => (
                  <div key={c.num} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg hover:shadow-lg transition-all">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {c.num}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{c.title}</h3>
                          <p className="text-gray-700 mb-3">{c.desc}</p>
                          
                          <div className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
                            <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <span className="text-lg">💡</span>
                              Example:
                            </div>
                            <p className="text-sm text-gray-600 italic">{c.example}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {c.tips.map((tip, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                ✓ {tip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paper Folding Activity */}
              <div className="mt-8 bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✏️</span>
                  Communication Exercise: Paper Folding Activity
                </h3>
                <div className="bg-white rounded-lg p-5">
                  <p className="font-semibold text-gray-800 mb-3">Instructions (Close your eyes):</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 mb-4">
                    <li>Fold your sheet of paper in half</li>
                    <li>Tear off the upper right corner</li>
                    <li>Fold your paper in half again</li>
                    <li>Tear off the lower right corner</li>
                    <li>Fold your paper in half</li>
                    <li>Tear off the upper left corner</li>
                    <li>Fold in half a final time</li>
                    <li>Tear off the lower left corner</li>
                    <li>Unfold your paper and hold it up</li>
                    <li>Open your eyes, look at your product and compare it with others</li>
                  </ol>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
                    <p className="text-sm text-gray-700 mb-2"><strong>What can go wrong in communication?</strong></p>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                      <li>Poor listening</li>
                      <li>Lack of feedback</li>
                      <li>Different contexts/backgrounds</li>
                      <li>Varied perceptions</li>
                      <li>No clarifications allowed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bloom's Taxonomy Section */}
        {activeTab === 'blooms' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Bloom's Taxonomy 📊
              </h2>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-5 mb-6">
                <p className="text-lg text-center mb-2">
                  A framework for categorizing educational learning objectives into levels of complexity
                </p>
                <p className="text-center opacity-90">From basic knowledge recall to advanced creative thinking</p>
              </div>

              {/* Pyramid */}
              <div className="mb-8">
                <div className="max-w-4xl mx-auto">
                  {[
                    {
                      level: 'CREATE',
                      order: 6,
                      color: 'from-red-500 to-orange-500',
                      desc: 'Produce new or original work',
                      keywords: 'Design, assemble, construct, conjecture, develop, formulate, author, investigate',
                      width: 'w-1/2',
                      example: 'Design a new communication strategy for a product launch'
                    },
                    {
                      level: 'EVALUATE',
                      order: 5,
                      color: 'from-orange-400 to-yellow-400',
                      desc: 'Justify a stand or decision',
                      keywords: 'Appraise, argue, defend, judge, select, support, value, critique, weigh',
                      width: 'w-3/5',
                      example: 'Critique different communication models for effectiveness'
                    },
                    {
                      level: 'ANALYZE',
                      order: 4,
                      color: 'from-yellow-400 to-lime-400',
                      desc: 'Draw connections among ideas',
                      keywords: 'Differentiate, organize, relate, compare, contrast, distinguish, examine, experiment, question, test',
                      width: 'w-4/5',
                      example: 'Compare Shannon-Weaver and Berlo\'s communication models'
                    },
                    {
                      level: 'APPLY',
                      order: 3,
                      color: 'from-lime-400 to-green-400',
                      desc: 'Use information in new situations',
                      keywords: 'Execute, implement, solve, use, demonstrate, interpret, operate, schedule, sketch',
                      width: 'w-11/12',
                      example: 'Apply the 7 Cs to write a business letter'
                    },
                    {
                      level: 'UNDERSTAND',
                      order: 2,
                      color: 'from-green-400 to-blue-400',
                      desc: 'Explain ideas or concepts',
                      keywords: 'Classify, describe, discuss, explain, identify, locate, recognize, report, select, translate',
                      width: 'w-11/12',
                      example: 'Explain the difference between verbal and non-verbal communication'
                    },
                    {
                      level: 'REMEMBER',
                      order: 1,
                      color: 'from-blue-400 to-purple-400',
                      desc: 'Recall facts and basic concepts',
                      keywords: 'Define, duplicate, list, memorize, repeat, state',
                      width: 'w-full',
                      example: 'List the 7 Cs of communication'
                    },
                  ].map((item) => (
                    <div key={item.level} className="mb-2">
                      <div className={`mx-auto ${item.width}`}>
                        <div className={`bg-gradient-to-r ${item.color} rounded-lg p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105`}>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">{item.level}</h3>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-semibold">
                              Level {item.order}
                            </span>
                          </div>
                          <p className="text-white font-semibold mb-2">{item.desc}</p>
                          <div className="bg-white/10 backdrop-blur-sm rounded p-3 mb-2">
                            <p className="text-white text-sm">
                              <strong>Keywords:</strong> {item.keywords}
                            </p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded p-3">
                            <p className="text-white text-sm">
                              <strong>📝 Example:</strong> {item.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hard vs Soft Skills Section */}
        {activeTab === 'skills' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Hard Skills vs Soft Skills 🎓
              </h2>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold mb-2">85%</div>
                  <div className="text-lg">Financial Success</div>
                  <div className="text-sm opacity-90 mt-2">Due to personality, communication, negotiation, and leadership</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold mb-2">15%</div>
                  <div className="text-lg">Technical Knowledge</div>
                  <div className="text-sm opacity-90 mt-2">Due to hard skills and technical expertise</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold mb-2">57%</div>
                  <div className="text-lg">Leaders' Priority</div>
                  <div className="text-sm opacity-90 mt-2">Say soft skills are more important than hard skills</div>
                </div>
              </div>

              {/* Comparison Visual */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  What We're Taught vs What Actually Matters
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* What We're Taught */}
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">📚 What We're Taught</h4>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                            Hard Skills
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-red-600">
                            ~85%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-red-200">
                        <div style={{width: '85%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                      </div>

                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            Soft Skills
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            ~15%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-6 text-xs flex rounded bg-blue-200">
                        <div style={{width: '15%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* What Actually Matters */}
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-green-300">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">✨ What Actually Matters</h4>
                    <div className="space-y-3">
                      {[
                        { skill: 'Empathy', percentage: 20 },
                        { skill: 'Emotional Regulation', percentage: 18 },
                        { skill: 'Values-Aligned Responding', percentage: 17 },
                        { skill: 'Authenticity', percentage: 16 },
                        { skill: 'These core human strengths shape everything', percentage: 29 },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-800">{item.skill}</span>
                            <span className="text-xs font-semibold text-green-600">{item.percentage}%</span>
                          </div>
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                            <div style={{width: `${item.percentage}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded-r">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Question:</strong> Can we stop calling them "soft" already?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Comparison */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Detailed Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <th className="p-4 text-left font-semibold">Aspect</th>
                        <th className="p-4 text-left font-semibold">Hard Skills 💻</th>
                        <th className="p-4 text-left font-semibold">Soft Skills 🤝</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t bg-gray-50">
                        <td className="p-4 font-semibold">Definition</td>
                        <td className="p-4">Technical, teachable abilities that can be measured</td>
                        <td className="p-4">Personal attributes and interpersonal skills</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Learning</td>
                        <td className="p-4">Taught in school, training programs, books</td>
                        <td className="p-4">Developed through experience and practice</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-4 font-semibold">Measurement</td>
                        <td className="p-4">Easy to measure with tests, certifications</td>
                        <td className="p-4">Difficult to measure objectively</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Examples</td>
                        <td className="p-4">Programming, accounting, data analysis, foreign languages</td>
                        <td className="p-4">Communication, leadership, teamwork, empathy</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-4 font-semibold">Transferability</td>
                        <td className="p-4">Job or industry-specific</td>
                        <td className="p-4">Transferable across jobs and industries</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-4 font-semibold">Time to Develop</td>
                        <td className="p-4">Can be learned relatively quickly</td>
                        <td className="p-4">Take longer to develop and refine</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-4 font-semibold">Impact on Success</td>
                        <td className="p-4">Gets you the job (15% of success)</td>
                        <td className="p-4">Keeps you in the job and helps you advance (85% of success)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Hard Skills Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    Hard Skills Examples
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Computer Programming & Coding',
                      'Data Analysis & Statistics',
                      'Foreign Language Proficiency',
                      'Accounting & Bookkeeping',
                      'Project Management',
                      'Digital Marketing & SEO',
                      'Graphic Design',
                      'Machine Operation',
                      'Technical Writing',
                      'Software Proficiency',
                      'Engineering Skills',
                      'Mathematical Skills',
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                        <span className="text-red-600">✓</span>
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤝</span>
                    Soft Skills Examples
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Communication (Verbal & Written)',
                      'Empathy & Emotional Intelligence',
                      'Leadership & Team Management',
                      'Problem-Solving & Critical Thinking',
                      'Adaptability & Flexibility',
                      'Time Management',
                      'Conflict Resolution',
                      'Creativity & Innovation',
                      'Work Ethic & Professionalism',
                      'Collaboration & Teamwork',
                      'Active Listening',
                      'Authenticity & Integrity',
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                        <span className="text-blue-600">✓</span>
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">Key Takeaway:</h4>
                    <p className="text-gray-700 mb-3">
                      While <strong>hard skills</strong> get you hired, <strong>soft skills</strong> help you advance and succeed in your career. 
                      Both are important, but soft skills have a significantly larger impact on long-term success.
                    </p>
                    <p className="text-gray-700 italic">
                      "These core human strengths shape everything. Can we stop calling them 'soft' already?" 
                      <br/>- Susan David
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business Letters Section */}
        {activeTab === 'letters' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Business Correspondence ✉️
              </h2>

              {/* Why Important */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">Why Written Communication is Important</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">📧</div>
                    <div className="font-semibold mb-1">First Impression</div>
                    <div className="text-sm opacity-90">All communications reach the receiver before you reach</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">💼</div>
                    <div className="font-semibold mb-1">Shows Your KSA</div>
                    <div className="text-sm opacity-90">Knowledge, Skills, and Abilities</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">🔒</div>
                    <div className="font-semibold mb-1">Digital Impression</div>
                    <div className="text-sm opacity-90">Never gets erased - permanent record</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">🤝</div>
                    <div className="font-semibold mb-1">Negotiation Power</div>
                    <div className="text-sm opacity-90">Shows professional communication ability</div>
                  </div>
                </div>
              </div>

              {/* Business Letter Format */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Letter Format</h3>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="space-y-4">
                    {[
                      { 
                        label: 'Date', 
                        desc: 'Write the full date',
                        example: 'February 1, 20XX'
                      },
                      { 
                        label: 'Name and Address', 
                        desc: 'Your name and full address',
                        example: 'Deborah Jones\nSender Company\n1234 East Main Street\nSan Diego, CA 92101'
                      },
                      { 
                        label: 'Greeting', 
                        desc: 'Formal salutation',
                        example: 'Dear Ms. Jones,'
                      },
                      { 
                        label: 'Opening Paragraph', 
                        desc: 'State the purpose clearly',
                        example: 'I am submitting this request for...'
                      },
                      { 
                        label: 'Body Paragraphs', 
                        desc: 'Provide details and context',
                        example: 'I can make myself available intermittently...'
                      },
                      { 
                        label: 'Closing Paragraph', 
                        desc: 'Thank the reader and summarize',
                        example: 'Thank you for your consideration.'
                      },
                      { 
                        label: 'Complimentary Close and Signature', 
                        desc: 'Professional closing',
                        example: 'Sincerely,\nJohanna Jansen'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border-l-4 border-blue-500 rounded-r-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-800 mb-1">{item.label}</div>
                            <div className="text-sm text-gray-600 mb-2">{item.desc}</div>
                            <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 whitespace-pre-line font-mono">
                              {item.example}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Types of Business Letters */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Types of Business Letters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      type: 'Cover Letter (Personalized)',
                      icon: '📄',
                      desc: 'Accompanies your resume when applying for jobs',
                      points: [
                        'Should be short and crisp',
                        'Should mention your KSA',
                        'Should clearly state how it fills the job vacancy',
                        'Should show your willingness',
                      ]
                    },
                    {
                      type: 'Job Inquiry Letter',
                      icon: '🔍',
                      desc: 'Sent to companies that may be hiring',
                      points: [
                        'Letter should land in the right hands',
                        'Create a short and clear memorable introduction',
                        'Highlight your skills',
                        'A brief conclusion',
                      ]
                    },
                    {
                      type: 'Product Inquiry Letter',
                      icon: '🛍️',
                      desc: 'Ask for information about products/services',
                      points: [
                        'Written in formal business letter format',
                        'Should be straightforward, compact & precise',
                        'Usually written in response to advertisements',
                        'Include specific product details needed',
                      ]
                    },
                    {
                      type: 'Complaint Letter (Customer)',
                      icon: '⚠️',
                      desc: 'Express dissatisfaction with products or services',
                      points: [
                        'State the problem clearly',
                        'Provide evidence (receipts, dates, etc.)',
                        'Specify desired outcome',
                        'Maintain professional tone',
                      ]
                    },
                    {
                      type: 'Order Letter',
                      icon: '📦',
                      desc: 'Place orders for products or services',
                      points: [
                        'Shipment details',
                        'Specification of the products',
                        'Delivery details - full address',
                        'Payment information',
                      ]
                    },
                    {
                      type: 'Claim Letter',
                      icon: '💰',
                      desc: 'For insurance, reimbursements, or damages',
                      points: [
                        'Mostly used for insurance purposes',
                        'Reimbursement by employees or vendors',
                        'Include all supporting documents',
                        'Clear explanation of claim',
                      ]
                    },
                    {
                      type: 'Invitation Letter',
                      icon: '🎉',
                      desc: 'Formal invitation to events or meetings',
                      points: [
                        'Date and time',
                        'Venue details',
                        'Speakers (if applicable)',
                        'RSVP information',
                      ]
                    },
                    {
                      type: 'Reservation Letter',
                      icon: '🏨',
                      desc: 'To book venues, hotels, or services',
                      points: [
                        'Number of people',
                        'Detailed itinerary',
                        'Stay details',
                        'Various requirements/special requests',
                      ]
                    },
                    {
                      type: 'Product Promotion Letter',
                      icon: '📢',
                      desc: 'Promote products or services to potential customers',
                      points: [
                        'Attention-grabbing opening',
                        'Highlight key benefits and features',
                        'Include pricing and offers',
                        'Clear call-to-action',
                      ]
                    },
                  ].map((letter, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{letter.icon}</span>
                        <h4 className="text-lg font-bold text-gray-800">{letter.type}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{letter.desc}</p>
                      <div className="bg-white rounded p-3">
                        <div className="font-semibold text-gray-800 text-sm mb-2">Key Points:</div>
                        <ul className="space-y-1">
                          {letter.points.map((point, pIdx) => (
                            <li key={pIdx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-blue-600 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Letter Writing Best Practices
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Be Professional', desc: 'Use formal language and proper format' },
                    { title: 'Be Clear', desc: 'State your purpose in the first paragraph' },
                    { title: 'Be Concise', desc: 'Keep it brief and to the point' },
                    { title: 'Be Specific', desc: 'Include all necessary details' },
                    { title: 'Proofread', desc: 'Check for grammar and spelling errors' },
                    { title: 'Use Proper Format', desc: 'Follow standard business letter format' },
                    { title: 'Be Courteous', desc: 'Maintain a respectful and polite tone' },
                    { title: 'Include Contact Info', desc: 'Make it easy to respond' },
                  ].map((tip, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 flex items-start gap-3">
                      <span className="text-yellow-600 text-xl">✓</span>
                      <div>
                        <div className="font-semibold text-gray-800">{tip.title}</div>
                        <div className="text-sm text-gray-600">{tip.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communication Tools Section */}
        {activeTab === 'tools' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Corporate Communication Tools 🛠️
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: 'Lobbying',
                    icon: '🏛️',
                    color: 'blue',
                    definition: 'Specific advocacy activity used by individuals, groups, or organizations to influence government officials and policymakers on specific legislative or regulatory issues.',
                    purpose: 'To present viewpoints, provide information, and influence the development, amendment, or rejection of laws and policies',
                    examples: [
                      'Meeting with lawmakers to discuss industry concerns',
                      'Presenting research and data to government committees',
                      'Submitting position papers on proposed regulations',
                      'Organizing industry coalitions for policy advocacy',
                    ],
                    keyPoints: [
                      'Communicating with lawmakers and government representatives',
                      'Presenting viewpoints on relevant issues',
                      'Providing information to support positions',
                      'Influencing business-impacting policies',
                    ]
                  },
                  {
                    num: 2,
                    title: 'Sponsorship',
                    icon: '🎗️',
                    color: 'green',
                    definition: 'Supporting and associating with specific events, activities, or causes by providing financial or other resources in exchange for brand exposure.',
                    purpose: 'To enhance brand visibility, reach target audiences, and build a positive corporate image',
                    examples: [
                      'Event Sponsorship: Sports tournaments, concerts, conferences, festivals',
                      'Cause Sponsorship: Social causes, charities, environmental initiatives',
                      'Educational Sponsorship: Scholarships, research programs',
                      'Media Sponsorship: TV shows, podcasts, content series',
                    ],
                    keyPoints: [
                      'Provides financial or resource support',
                      'Associates brand with popular events',
                      'Reaches large and engaged audiences',
                      'Builds positive brand associations',
                    ]
                  },
                  {
                    num: 3,
                    title: 'Financial Communication',
                    icon: '💰',
                    color: 'purple',
                    definition: 'Dissemination of financial information and performance updates to stakeholders including shareholders, investors, analysts, employees, and regulators.',
                    purpose: 'To build trust, transparency, and confidence in the organization\'s financial health and decision-making',
                    examples: [
                      'Financial Reports: Quarterly and annual reports with financial statements',
                      'Investor Presentations: Earnings calls, investor meetings',
                      'SEC Filings: 10-K, 10-Q, 8-K reports',
                      'Press Releases: Financial results announcements',
                    ],
                    keyPoints: [
                      'Keeps stakeholders informed about financial performance',
                      'Provides transparency in operations',
                      'Includes balance sheets, income statements, cash flow',
                      'Enables informed investment decisions',
                    ]
                  },
                  {
                    num: 4,
                    title: 'Corporate Identity',
                    icon: '🎨',
                    color: 'pink',
                    definition: 'Visual and symbolic representation of a company encompassing elements that define its image, personality, values, and brand identity.',
                    purpose: 'To create a strong and recognizable brand presence and foster positive perception',
                    examples: [
                      'Logo: Unique symbol representing the company',
                      'Color Scheme: Consistent brand colors',
                      'Typography: Specific fonts and text styles',
                      'Website Design: Digital representation',
                      'Brand Guidelines: Standards for all communications',
                    ],
                    keyPoints: [
                      'Creates visual recognition',
                      'Communicates company values',
                      'Ensures consistency across touchpoints',
                      'Differentiates from competitors',
                    ]
                  },
                  {
                    num: 5,
                    title: 'Media Mileage',
                    icon: '📺',
                    color: 'orange',
                    definition: 'The amount and quality of media coverage a company receives through various channels, measuring reach and impact of company messages.',
                    purpose: 'To enhance reputation, brand visibility, and credibility through media presence',
                    examples: [
                      'Press Releases: Official announcements to media',
                      'Media Events: Press conferences, product launches',
                      'Interviews: Spokesperson appearances',
                      'Feature Stories: In-depth coverage',
                      'News Mentions: Organic media coverage',
                    ],
                    keyPoints: [
                      'Measures reach of company messages',
                      'Tracks media impressions and sentiment',
                      'Evaluates PR campaign success',
                      'Crucial for public relations',
                    ]
                  },
                ].map((tool) => (
                  <div key={tool.num} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">{tool.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold">{tool.num}.</span>
                            <h3 className="text-2xl font-bold">{tool.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="font-semibold text-gray-800 mb-2">📖 Definition:</div>
                        <p className="text-gray-700 text-sm">{tool.definition}</p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span>🎯</span> Purpose:
                        </div>
                        <p className="text-gray-700 text-sm">{tool.purpose}</p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="font-semibold text-gray-800 mb-3">💡 Examples:</div>
                        <div className="space-y-2">
                          {tool.examples.map((example, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 p-2 bg-blue-50 rounded">
                              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                              <span>{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="font-semibold text-gray-800 mb-3">✓ Key Points:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {tool.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-blue-600">→</span>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Reference */}
              <div className="mt-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Quick Reference Guide</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-3 text-left border">Tool</th>
                        <th className="p-3 text-left border">Primary Audience</th>
                        <th className="p-3 text-left border">Main Benefit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border bg-white">
                        <td className="p-3 font-semibold border">🏛️ Lobbying</td>
                        <td className="p-3 border">Government, Policymakers</td>
                        <td className="p-3 border">Influence policies</td>
                      </tr>
                      <tr className="border bg-gray-50">
                        <td className="p-3 font-semibold border">🎗️ Sponsorship</td>
                        <td className="p-3 border">General Public, Target Audience</td>
                        <td className="p-3 border">Brand visibility</td>
                      </tr>
                      <tr className="border bg-white">
                        <td className="p-3 font-semibold border">💰 Financial Communication</td>
                        <td className="p-3 border">Investors, Shareholders</td>
                        <td className="p-3 border">Build trust & transparency</td>
                      </tr>
                      <tr className="border bg-gray-50">
                        <td className="p-3 font-semibold border">🎨 Corporate Identity</td>
                        <td className="p-3 border">All Stakeholders</td>
                        <td className="p-3 border">Brand recognition</td>
                      </tr>
                      <tr className="border bg-white">
                        <td className="p-3 font-semibold border">📺 Media Mileage</td>
                        <td className="p-3 border">Media, Public</td>
                        <td className="p-3 border">Reputation & reach</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Barriers Section */}
        {activeTab === 'barriers' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Communication Barriers ⚠️
              </h2>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
                <p className="text-center text-lg text-gray-700">
                  <strong>Communication barriers</strong> are obstacles that prevent effective exchange of information between sender and receiver.
                  Understanding these barriers helps improve communication effectiveness.
                </p>
              </div>

              {/* Major Categories */}
              <div className="space-y-6">
                {[
                  {
                    category: 'Physical Barriers',
                    icon: '🏢',
                    color: 'blue',
                    description: 'Environmental and tangible obstacles that hinder communication',
                    barriers: [
                      { name: 'Noise', desc: 'External sounds interfering with message', example: 'Construction noise during meeting' },
                      { name: 'Distance', desc: 'Physical separation between communicators', example: 'Remote teams in different time zones' },
                      { name: 'Technical Issues', desc: 'Technology problems', example: 'Poor internet during video call' },
                      { name: 'Closed Doors', desc: 'Physical barriers preventing access', example: 'Office layout limiting interaction' },
                      { name: 'Environmental Factors', desc: 'Temperature, lighting, comfort', example: 'Too cold or hot room' },
                    ]
                  },
                  {
                    category: 'Semantic Barriers',
                    icon: '📝',
                    color: 'green',
                    description: 'Language and meaning-related obstacles',
                    barriers: [
                      { name: 'Jargon', desc: 'Technical terms not understood', example: 'Using "KPI" with non-business audience' },
                      { name: 'Language Differences', desc: 'Different native languages', example: 'Non-native speakers misunderstanding idioms' },
                      { name: 'Complex Vocabulary', desc: 'Unnecessarily difficult words', example: 'Using "utilize" instead of "use"' },
                      { name: 'Ambiguity', desc: 'Unclear or vague messages', example: '"ASAP" - how soon is that?' },
                      { name: 'Cultural Expressions', desc: 'Idioms with different meanings', example: '"Table the discussion" (US vs UK)' },
                    ]
                  },
                  {
                    category: 'Psychological Barriers',
                    icon: '🧠',
                    color: 'purple',
                    description: 'Mental and emotional obstacles',
                    barriers: [
                      { name: 'Emotions', desc: 'Strong feelings affecting judgment', example: 'Anger preventing rational discussion' },
                      { name: 'Prejudices', desc: 'Preconceived notions', example: 'Stereotyping based on appearance' },
                      { name: 'Lack of Trust', desc: 'Suspicion towards sender', example: 'Not believing certain sources' },
                      { name: 'Fear', desc: 'Anxiety about consequences', example: 'Fear of speaking up in meetings' },
                      { name: 'Stress', desc: 'Mental pressure affecting focus', example: 'Personal problems affecting work' },
                      { name: 'Perception Differences', desc: 'Different interpretations', example: 'Same event viewed differently' },
                    ]
                  },
                  {
                    category: 'Organizational Barriers',
                    icon: '🏛️',
                    color: 'orange',
                    description: 'Structural obstacles within organizations',
                    barriers: [
                      { name: 'Hierarchical Structure', desc: 'Multiple levels slowing communication', example: 'Message distorted through levels' },
                      { name: 'Information Overload', desc: 'Too much information', example: 'Hundreds of unread emails' },
                      { name: 'Lack of Feedback', desc: 'No way to confirm understanding', example: 'One-way announcements' },
                      { name: 'Poor Leadership', desc: 'Management not communicating', example: 'Leaders not sharing vision' },
                      { name: 'Organizational Culture', desc: 'Culture discouraging openness', example: 'Fear-based culture' },
                    ]
                  },
                  {
                    category: 'Cultural Barriers',
                    icon: '🌍',
                    color: 'pink',
                    description: 'Differences from diverse cultural backgrounds',
                    barriers: [
                      { name: 'Different Values', desc: 'Varying cultural priorities', example: 'Individual vs collective orientation' },
                      { name: 'Non-verbal Differences', desc: 'Gestures meaning different things', example: 'Thumbs up offensive in some cultures' },
                      { name: 'Time Perception', desc: 'Different attitudes toward time', example: 'Punctuality expectations vary' },
                      { name: 'Communication Styles', desc: 'Direct vs indirect', example: 'High-context vs low-context cultures' },
                      { name: 'Social Norms', desc: 'Different behavioral expectations', example: 'Eye contact norms vary' },
                    ]
                  },
                  {
                    category: 'Technological Barriers',
                    icon: '💻',
                    color: 'teal',
                    description: 'Obstacles related to technology use',
                    barriers: [
                      { name: 'Digital Divide', desc: 'Unequal access to technology', example: 'Some employees lacking devices' },
                      { name: 'Technical Competence', desc: 'Varying skill levels', example: 'Difficulty using video tools' },
                      { name: 'System Incompatibility', desc: 'Different platforms not working', example: 'File formats not compatible' },
                      { name: 'Security Concerns', desc: 'Fear of data breaches', example: 'Reluctance to share online' },
                      { name: 'Over-reliance on Technology', desc: 'Missing human connection', example: 'Email replacing face-to-face' },
                    ]
                  },
                  {
                    category: 'Personal Barriers',
                    icon: '👤',
                    color: 'indigo',
                    description: 'Individual characteristics affecting communication',
                    barriers: [
                      { name: 'Poor Listening', desc: 'Not paying attention', example: 'Checking phone during conversation' },
                      { name: 'Lack of Clarity', desc: 'Not expressing clearly', example: 'Rambling without clear point' },
                      { name: 'Assumptions', desc: 'Taking things for granted', example: 'Assuming others know what you mean' },
                      { name: 'Defensive Attitude', desc: 'Taking everything personally', example: 'Viewing feedback as attack' },
                      { name: 'Lack of Interest', desc: 'Not caring about message', example: 'Zoning out during presentations' },
                      { name: 'Selective Perception', desc: 'Only hearing what you want', example: 'Ignoring negative feedback' },
                    ]
                  },
                ].map((section, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{section.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold">{section.category}</h3>
                          <p className="text-sm opacity-90 mt-1">{section.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.barriers.map((barrier, bIdx) => (
                          <div key={bIdx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                              <span className="text-lg">⚠️</span>
                              {barrier.name}
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{barrier.desc}</p>
                            <div className="bg-blue-50 p-2 rounded text-xs text-gray-600 italic">
                              <strong>Example:</strong> {barrier.example}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overcoming Barriers */}
              <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
                  <span className="text-3xl">✅</span>
                  How to Overcome Communication Barriers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { solution: 'Active Listening', desc: 'Pay full attention, ask questions, paraphrase' },
                    { solution: 'Clear & Simple Language', desc: 'Avoid jargon, use plain language' },
                    { solution: 'Feedback Mechanism', desc: 'Ensure two-way communication' },
                    { solution: 'Choose Right Channel', desc: 'Select appropriate medium' },
                    { solution: 'Cultural Sensitivity', desc: 'Be aware of cultural differences' },
                    { solution: 'Emotional Intelligence', desc: 'Manage emotions effectively' },
                    { solution: 'Non-verbal Awareness', desc: 'Pay attention to body language' },
                    { solution: 'Reduce Noise', desc: 'Minimize physical distractions' },
                    { solution: 'Build Trust', desc: 'Create safe environment' },
                    { solution: 'Training & Development', desc: 'Improve communication skills' },
                    { solution: 'Use Visual Aids', desc: 'Support with visuals' },
                    { solution: 'Confirm Understanding', desc: 'Verify message received correctly' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-green-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">✓</span>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">{item.solution}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💡</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Remember:</h4>
                    <p className="text-gray-700">
                      Effective communication requires awareness of potential barriers and proactive steps to overcome them. 
                      The key is to be mindful, empathetic, and adaptable in all communication situations. 
                      Most barriers can be overcome with conscious effort and the right strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">📚 Study Tips for Your Exam Tomorrow</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold mb-1">Focus on Key Topics</div>
                <div className="text-sm opacity-90">7 Cs, Models, Types, Goals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold mb-1">Practice Examples</div>
                <div className="text-sm opacity-90">Write sample letters, analyze models</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🔄</div>
                <div className="font-semibold mb-1">Review Regularly</div>
                <div className="text-sm opacity-90">Go through each section multiple times</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">💤</div>
                <div className="font-semibold mb-1">Get Good Sleep</div>
                <div className="text-sm opacity-90">Rest well tonight for better recall</div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-lg font-semibold mb-2">🌟 You've Got This! All the Best! 🌟</p>
              <p className="text-sm opacity-75">Corporate Communication & OB - Module 1 Complete Guide</p>
              <p className="text-xs opacity-50 mt-2">Dr. Bhartrihari Pandiya | Created for your exam success ❤️</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
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
