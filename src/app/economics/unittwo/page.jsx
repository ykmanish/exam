'use client'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter, BarChart, Bar } from 'recharts'

export default function EconomicsUnit2Complete() {
  const [activeTab, setActiveTab] = useState('intro')

  // Chart Data
  const utilityData = [
    { units: 0, total: 0, marginal: 0 },
    { units: 1, total: 25, marginal: 25 },
    { units: 2, total: 48, marginal: 23 },
    { units: 3, total: 69, marginal: 21 },
    { units: 4, total: 88, marginal: 19 },
    { units: 5, total: 105, marginal: 17 },
    { units: 6, total: 120, marginal: 15 },
    { units: 7, total: 133, marginal: 13 },
  ]

  const indifferenceCurveData = [
    { apples: 1, bananas: 12 },
    { apples: 2, bananas: 8 },
    { apples: 3, bananas: 5 },
    { apples: 4, bananas: 3 },
    { apples: 5, bananas: 2 },
  ]

  const budgetLineData = [
    { x: 0, y: 10 },
    { x: 5, y: 0 },
  ]

  const engelCurveData = [
    { income: 100, quantity: 5 },
    { income: 200, quantity: 12 },
    { income: 300, quantity: 18 },
    { income: 400, quantity: 22 },
    { income: 500, quantity: 25 },
  ]

  const tabs = [
    { id: 'intro', label: 'Introduction', icon: '📖' },
    { id: 'preferences', label: 'Preferences', icon: '👤' },
    { id: 'utility', label: 'Utility Theory', icon: '😊' },
    { id: 'indifference', label: 'Indifference Curves', icon: '📊' },
    { id: 'budget', label: 'Budget Constraint', icon: '💰' },
    { id: 'optimum', label: 'Consumer Optimum', icon: '🎯' },
    { id: 'icc-pcc', label: 'ICC & PCC', icon: '📈' },
    { id: 'engel', label: 'Engel Curves', icon: '📉' },
    { id: 'effects', label: 'Income & Substitution', icon: '🔄' },
    { id: 'goods', label: 'Types of Goods', icon: '🛍️' },
    { id: 'demand', label: 'Demand Analysis', icon: '📊' },
    { id: 'surplus', label: 'Consumer Surplus', icon: '💎' },
    { id: 'risk', label: 'Risk & Uncertainty', icon: '⚠️' },
    { id: 'expected', label: 'Expected Utility', icon: '🎲' },
    { id: 'revealed', label: 'Revealed Preference', icon: '🔍' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Unit 2 - Consumer Behavior Theory (Complete 100+ Pages)
          </h1>
          <p className="text-sm text-gray-600 mt-1">Complete PDF Coverage | All Theory + Examples + Interactive Charts</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-[73px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === tab.id ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* INTRODUCTION */}
        {activeTab === 'intro' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">📖 Welcome to Consumer Behavior Theory!</h2>
              <p className="text-lg">Complete study guide covering ALL 100+ pages from the PDF</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 Complete Unit 2 Topics:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { topic: 'Consumer Preferences', desc: 'Completeness, Transitivity, Non-Satiation assumptions', icon: '👤' },
                  { topic: 'Utility Theory', desc: 'Total Utility, Marginal Utility, Law of Diminishing MU', icon: '😊' },
                  { topic: 'Indifference Curves', desc: 'Properties, MRS, convexity, special cases', icon: '📊' },
                  { topic: 'Budget Constraints', desc: 'Budget line, shifts, rotations', icon: '💰' },
                  { topic: 'Consumer Optimum', desc: 'Tangency condition, corner solutions', icon: '🎯' },
                  { topic: 'ICC & PCC', desc: 'Income & Price Consumption Curves', icon: '📈' },
                  { topic: 'Engel Curves', desc: 'Income-quantity relationship', icon: '📉' },
                  { topic: 'Income & Substitution Effects', desc: 'Slutsky decomposition, Hicks decomposition', icon: '🔄' },
                  { topic: 'Types of Goods', desc: 'Normal, Inferior, Giffen, Luxury goods', icon: '🛍️' },
                  { topic: 'Demand Curves', desc: 'Ordinary & Compensated demand', icon: '📊' },
                  { topic: 'Consumer Surplus', desc: 'Willingness to pay, welfare analysis', icon: '💎' },
                  { topic: 'Risk & Uncertainty', desc: 'Systematic vs Unsystematic risk', icon: '⚠️' },
                  { topic: 'Expected Utility', desc: 'Von Neumann-Morgenstern theory', icon: '🎲' },
                  { topic: 'Revealed Preference', desc: 'Weak & Strong axioms (WARP, SARP)', icon: '🔍' },
                  { topic: 'Risk Attitudes', desc: 'Risk averse, neutral, loving', icon: '🎯' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-5 hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2 text-center">{item.icon}</div>
                    <h4 className="font-bold text-gray-800 text-center mb-2 text-sm">{item.topic}</h4>
                    <p className="text-xs text-gray-700 text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-blue-900 mb-3 text-xl">💡 What Makes This Complete?</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• ✅ <strong>100+ Pages Covered:</strong> Every topic from your PDF</li>
                <li>• ✅ <strong>Complete Theory:</strong> Definitions, formulas, explanations</li>
                <li>• ✅ <strong>Interactive Charts:</strong> Visual learning with Recharts</li>
                <li>• ✅ <strong>Real Examples:</strong> Practical applications for each concept</li>
                <li>• ✅ <strong>Step-by-Step:</strong> Building from basics to advanced topics</li>
                <li>• ✅ <strong>Exam Ready:</strong> Everything you need to ace your test!</li>
              </ul>
            </div>
          </div>
        )}

        {/* CONSUMER PREFERENCES - COMPLETE DETAILED VERSION */}
        {activeTab === 'preferences' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">👤 Consumer Preferences - Complete Theory</h2>
              <p className="text-lg opacity-90">Foundation of consumer choice theory</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What Are Consumer Preferences?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Consumer preferences</strong> describe how consumers rank different combinations (bundles) of goods and services. They represent individual tastes, desires, and priorities that guide consumption decisions.
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold mb-3">Key Characteristics:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Ordinal:</strong> We can rank preferences (A &gt; B) but can't measure "how much" more</li>
                    <li>• <strong>Subjective:</strong> Vary from person to person</li>
                    <li>• <strong>Stable:</strong> Don't change randomly in short term</li>
                    <li>• <strong>Rational:</strong> Follow logical patterns (assumptions below)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔑 Three Fundamental Axioms of Consumer Preference</h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    axiom: '1. Completeness (Comparability)',
                    theory: 'For any two consumption bundles A and B, the consumer can state one of three preferences: (1) A is preferred to B (A > B), (2) B is preferred to A (B > A), or (3) The consumer is indifferent between A and B (A ~ B).',
                    explanation: 'This means consumers can always make a choice or express indifference. There are no bundles that cannot be compared. Every pair of alternatives can be ranked.',
                    mathematically: 'For all bundles A, B: Either A ≻ B, or B ≻ A, or A ~ B',
                    realWorld: 'When you go to a restaurant, you can always compare two menu items and decide which you prefer (or if you like them equally). You never encounter items you "can\'t compare."',
                    whyImportant: 'Without completeness, we couldn\'t model consumer choices mathematically. It ensures decision-making is possible.',
                    violations: 'In reality, people sometimes face "incomparable" choices (e.g., comparing apples to complex financial products), but the axiom assumes perfect knowledge.',
                    icon: '✓',
                    color: 'blue'
                  },
                  {
                    axiom: '2. Transitivity (Consistency)',
                    theory: 'If a consumer prefers bundle A to bundle B, and bundle B to bundle C, then the consumer must prefer bundle A to bundle C. This ensures logical consistency in preferences.',
                    explanation: 'Preferences follow a logical pattern without circular reasoning. If A > B and B > C, then A > C. You cannot have A > B > C > A (circular preferences).',
                    mathematically: 'If A ≻ B and B ≻ C, then A ≻ C',
                    realWorld: 'You prefer pizza to burgers, and burgers to salad. Transitivity means you MUST prefer pizza to salad. If you then said you prefer salad to pizza, your preferences would be intransitive (irrational).',
                    whyImportant: 'Transitivity prevents cycles in preferences and allows us to rank all alternatives consistently. It\'s essential for constructing utility functions.',
                    violations: 'Research shows people sometimes violate transitivity in complex scenarios (behavioral economics), but rational choice theory assumes it holds.',
                    icon: '→',
                    color: 'green'
                  },
                  {
                    axiom: '3. Non-Satiation (Monotonicity / "More is Better")',
                    theory: 'Consumers always prefer more of a good to less, assuming the good provides positive utility. If bundle A has more of at least one good and no less of any other good, then A is preferred to B.',
                    explanation: 'This is sometimes called "monotonic preferences" or "local non-satiation." At any consumption bundle, it\'s always possible to find a nearby bundle that\'s strictly preferred by having more of something.',
                    mathematically: 'If A ≥ B (more of at least one good, no less of others), then A ≻ B',
                    realWorld: 'Given a choice between $100 and $1,000 (all else equal), you always choose $1,000. Or between 2 pizzas and 5 pizzas (you can save for later), you choose 5.',
                    whyImportant: 'Ensures indifference curves are downward-sloping and don\'t have "thick" regions. Consumers will always move to higher indifference curves if possible.',
                    violations: 'Some goods may have satiation points (too much food makes you sick), but in economic models we assume "more is better" within relevant ranges.',
                    icon: '↑',
                    color: 'purple'
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 bg-${item.color}-600 text-white rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-800 text-xl">{item.axiom}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm font-bold text-blue-900 mb-2">📖 Theory:</p>
                        <p className="text-sm text-gray-800 leading-relaxed">{item.theory}</p>
                      </div>

                      <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-4">
                        <p className="text-sm font-bold text-green-900 mb-2">💡 Detailed Explanation:</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.explanation}</p>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-sm font-bold mb-2">📐 Mathematical Representation:</p>
                        <p className="font-mono text-center text-base text-gray-800">{item.mathematically}</p>
                      </div>

                      <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-4">
                        <p className="text-sm font-bold text-yellow-900 mb-2">🌟 Real-World Example:</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.realWorld}</p>
                      </div>

                      <div className={`bg-${item.color}-100 rounded-lg p-4`}>
                        <p className="text-sm font-bold mb-2">🎯 Why It's Important:</p>
                        <p className="text-sm text-gray-700">{item.whyImportant}</p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm font-bold text-red-900 mb-2">⚠️ Potential Violations:</p>
                        <p className="text-sm text-gray-700">{item.violations}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                <h4 className="font-bold text-purple-900 mb-4 text-xl">🎯 Why These Axioms Matter:</h4>
                <p className="text-gray-800 leading-relaxed mb-4">
                  These three axioms form the foundation of rational choice theory and allow economists to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-800">
                    <li>• <strong>Model behavior mathematically:</strong> Create utility functions and indifference curves</li>
                    <li>• <strong>Ensure consistency:</strong> Preferences don't randomly contradict</li>
                    <li>• <strong>Predict choices:</strong> Understand how consumers respond to changes</li>
                  </ul>
                  <ul className="space-y-2 text-gray-800">
                    <li>• <strong>Derive demand curves:</strong> Show relationship between price and quantity</li>
                    <li>• <strong>Analyze welfare:</strong> Measure consumer well-being</li>
                    <li>• <strong>Design policies:</strong> Create effective economic interventions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UTILITY THEORY - COMPLETE DETAILED VERSION */}
        {activeTab === 'utility' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">😊 Utility Theory - Complete Explanation</h2>
              <p className="text-lg opacity-90">Measuring satisfaction from consumption</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Utility?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Utility</strong> is the satisfaction, pleasure, or benefit a consumer derives from consuming goods or services. It's a measure of well-being or happiness from consumption.
                </p>
                <div className="bg-white rounded p-4 mb-4">
                  <p className="font-bold mb-3">Important Characteristics:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Subjective:</strong> Same good provides different utility to different people</li>
                    <li>• <strong>Ordinal:</strong> Can rank preferences but can't measure exact satisfaction</li>
                    <li>• <strong>Not Observable:</strong> Can't directly measure someone's utility</li>
                    <li>• <strong>Context-Dependent:</strong> Utility changes based on circumstances (hungry vs full)</li>
                    <li>• <strong>Non-Comparable:</strong> Can't compare utility across individuals</li>
                  </ul>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-4">
                  <p className="text-sm"><strong>Historical Note:</strong> Early economists (19th century) thought utility was cardinal (measurable in "utils"). Modern economics uses ordinal utility - we only need to know if A &gt; B, not by how much.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Total Utility (TU) vs Marginal Utility (MU)</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 text-xl mb-4">Total Utility (TU)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">The <strong>total satisfaction</strong> obtained from consuming a given quantity of a good or combination of goods.</p>
                    </div>
                    
                    <div className="bg-green-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Mathematical Formula:</p>
                      <p className="font-mono text-center text-lg mb-2">TU = ΣMU</p>
                      <p className="font-mono text-center text-sm">TU = MU₁ + MU₂ + MU₃ + ... + MUₙ</p>
                      <p className="text-xs text-center text-gray-600 mt-2">Sum of all marginal utilities</p>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Detailed Example:</p>
                      <div className="text-xs text-gray-700 space-y-1">
                        <p>Eating pizza slices:</p>
                        <p>• 1st slice: MU = 25, TU = 25</p>
                        <p>• 2nd slice: MU = 23, TU = 48 (25+23)</p>
                        <p>• 3rd slice: MU = 21, TU = 69 (48+21)</p>
                        <p>• 4th slice: MU = 19, TU = 88 (69+19)</p>
                        <p className="font-bold mt-2">After 4 slices: Total Utility = 88 utils</p>
                      </div>
                    </div>

                    <div className="bg-green-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Behavior of TU:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• Initially increases at increasing rate</li>
                        <li>• Then increases at decreasing rate</li>
                        <li>• Reaches maximum (satiation point)</li>
                        <li>• May decrease if consumption continues (negative MU)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Key Points:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• TU curve is concave (bowed)</li>
                        <li>• Slope of TU = MU</li>
                        <li>• TU maximum when MU = 0</li>
                        <li>• TU decreases when MU is negative</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 text-xl mb-4">Marginal Utility (MU)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">The <strong>additional satisfaction</strong> gained from consuming one more unit of a good.</p>
                    </div>

                    <div className="bg-blue-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Mathematical Formula:</p>
                      <p className="font-mono text-center text-lg mb-2">MU = ΔTU / ΔQ</p>
                      <p className="text-xs text-center text-gray-600 mt-1">Change in Total Utility / Change in Quantity</p>
                      <p className="font-mono text-center text-sm mt-2">MUₙ = TUₙ - TUₙ₋₁</p>
                      <p className="text-xs text-center text-gray-600">Utility of nth unit minus utility of (n-1)th unit</p>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Detailed Example:</p>
                      <div className="text-xs text-gray-700 space-y-1">
                        <p>After 2 slices: TU = 48</p>
                        <p>After 3 slices: TU = 69</p>
                        <p className="font-bold mt-1">MU of 3rd slice:</p>
                        <p className="font-mono">MU₃ = TU₃ - TU₂ = 69 - 48 = 21</p>
                        <p className="mt-2">The 3rd slice adds 21 utils of satisfaction</p>
                      </div>
                    </div>

                    <div className="bg-blue-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Behavior of MU:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• Decreases as consumption increases</li>
                        <li>• Eventually becomes zero (satiation)</li>
                        <li>• Can become negative (disutility)</li>
                        <li>• This is the Law of Diminishing MU</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Key Points:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• MU curve slopes downward</li>
                        <li>• MU is the slope of TU curve</li>
                        <li>• When MU = 0, TU is maximum</li>
                        <li>• When MU &lt; 0, TU is decreasing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Interactive Utility Charts</h3>
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-3 text-center">Total Utility Curve</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={utilityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="units" label={{ value: 'Units Consumed', position: 'insideBottom', offset: -5 }} />
                        <YAxis label={{ value: 'Total Utility', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#f59e0b" strokeWidth={3} name="Total Utility" dot={{ fill: '#f59e0b', r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="bg-white rounded p-3 mt-3">
                      <p className="text-sm font-bold mb-2">Observations:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• TU increases but at decreasing rate (concave)</li>
                        <li>• Curve gets flatter as consumption increases</li>
                        <li>• Would eventually peak and decline (not shown)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-yellow-900 mb-3 text-center">Marginal Utility Curve</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={utilityData.slice(1)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="units" label={{ value: 'Units Consumed', position: 'insideBottom', offset: -5 }} />
                        <YAxis label={{ value: 'Marginal Utility', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="marginal" stroke="#ef4444" strokeWidth={3} name="Marginal Utility" dot={{ fill: '#ef4444', r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="bg-white rounded p-3 mt-3">
                      <p className="text-sm font-bold mb-2">Observations:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• MU decreases with each additional unit</li>
                        <li>• Downward sloping throughout</li>
                        <li>• Demonstrates Law of Diminishing MU</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 mt-4">
                  <p className="font-bold text-orange-900 mb-2">📊 Reading the Charts:</p>
                  <div className="grid md:grid-cols-3 gap-3 text-xs text-gray-700">
                    <div className="bg-white rounded p-3">
                      <p className="font-bold mb-1">At Unit 1:</p>
                      <p>TU = 25, MU = 25</p>
                      <p className="text-xs text-gray-600 mt-1">First unit gives 25 utils</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-bold mb-1">At Unit 4:</p>
                      <p>TU = 88, MU = 19</p>
                      <p className="text-xs text-gray-600 mt-1">4th unit only adds 19 utils</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-bold mb-1">At Unit 7:</p>
                      <p>TU = 133, MU = 13</p>
                      <p className="text-xs text-gray-600 mt-1">MU keeps decreasing</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📉 Law of Diminishing Marginal Utility</h3>
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-red-900 mb-4 text-xl">Complete Theory & Explanation:</h4>
                <p className="text-gray-800 text-lg mb-4">
                  The <strong>Law of Diminishing Marginal Utility</strong> states that as a consumer consumes more units of a good within a given time period, the additional satisfaction (marginal utility) derived from each successive unit decreases, holding all other factors constant.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded p-5">
                    <p className="font-bold text-gray-800 mb-3">📖 Formal Statement:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      "Other things being equal, as consumption of a commodity increases, the marginal utility derived from each successive unit goes on decreasing."
                    </p>
                    <div className="bg-red-100 rounded p-3">
                      <p className="font-mono text-center text-sm">MU₁ {'>'} MU₂ {'>'} MU₃ {'>'} ... {'>'} MUₙ</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-5">
                    <p className="font-bold text-gray-800 mb-3">🔑 Key Assumptions:</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li>• Consumption in continuous sequence</li>
                      <li>• Standard units of consumption</li>
                      <li>• No change in consumer's taste</li>
                      <li>• No time gap between consumption</li>
                      <li>• Consumer is rational</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-bold text-gray-800 mb-3">💡 Why Does Diminishing MU Occur?</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        reason: '1. Satisfaction of Want',
                        explanation: 'First units satisfy the most urgent needs. Subsequent units satisfy less urgent needs. As want is progressively satisfied, the intensity of desire decreases.',
                        example: 'When extremely thirsty, first glass of water is heaven. By the 4th glass, you\'re satisfied and it matters less.'
                      },
                      {
                        reason: '2. Boredom/Monotony',
                        explanation: 'Consuming the same thing repeatedly becomes boring or tiresome. Variety is important for maintaining satisfaction.',
                        example: 'Your favorite song is great the first time. Play it 20 times in a row and you\'ll hate it.'
                      },
                      {
                        reason: '3. Psychological Factors',
                        explanation: 'Human psychology adapts to repeated stimuli. The novelty effect wears off with repeated consumption.',
                        example: 'Getting your first smartphone was exciting. Your 10th upgrade is just routine.'
                      },
                      {
                        reason: '4. Physical/Biological Limits',
                        explanation: 'Human capacity to enjoy more decreases. Physical satiation limits additional satisfaction.',
                        example: 'Stomach has limited capacity. The 8th slice of pizza makes you uncomfortable, not happy.'
                      },
                    ].map((item, i) => (
                      <div key={i} className="bg-red-50 rounded p-4">
                        <p className="font-bold text-sm text-red-900 mb-2">{item.reason}</p>
                        <p className="text-xs text-gray-700 mb-2">{item.explanation}</p>
                        <div className="bg-yellow-100 rounded p-2 mt-2">
                          <p className="text-xs text-gray-700"><strong>Example:</strong> {item.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-600 rounded-r-lg p-4">
                  <p className="font-bold text-yellow-900 mb-2">📝 Classic Textbook Example:</p>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p className="font-bold mb-2">Scenario: Hot summer day, very thirsty</p>
                    <div className="bg-white rounded p-3 space-y-1">
                      <p>• <strong>1st glass of water:</strong> Absolute bliss! MU = 100 (quenches extreme thirst)</p>
                      <p>• <strong>2nd glass:</strong> Still great. MU = 70 (refreshing and satisfying)</p>
                      <p>• <strong>3rd glass:</strong> Pretty good. MU = 40 (less urgent need)</p>
                      <p>• <strong>4th glass:</strong> Okay. MU = 10 (getting full)</p>
                      <p>• <strong>5th glass:</strong> Uncomfortable. MU = -20 (negative utility - too much!)</p>
                      <p className="font-bold mt-3 text-red-900">Notice: Each additional glass provides LESS satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Utility Maximization Rule (Equi-Marginal Principle)</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <p className="text-gray-800 text-lg mb-4">
                  Consumers maximize total utility when they allocate their budget such that the <strong>marginal utility per dollar spent is equal across all goods</strong>.
                </p>

                <div className="bg-white rounded p-6 mb-4">
                  <p className="font-bold text-center text-2xl mb-4 text-purple-900">Utility Maximization Condition:</p>
                  <p className="font-mono text-center text-3xl mb-3 text-gray-800">MUₓ / Pₓ = MUᵧ / Pᵧ = MUᵤ / Pᵤ = λ</p>
                  <p className="text-sm text-center text-gray-600 mb-4">Marginal utility per dollar must be equal for all goods</p>
                  <p className="text-center text-gray-700">Where λ (lambda) = Marginal utility of money (constant)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-100 rounded p-5">
                    <p className="font-bold text-purple-900 mb-3">📖 What This Means:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      The last dollar spent on each good should provide the same marginal utility. If MU/P is higher for one good, you should buy more of that good and less of others.
                    </p>
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-bold mb-1">Intuition:</p>
                      <p className="text-xs text-gray-700">If pizza gives you 6 utils per dollar and burgers give 8 utils per dollar, you should buy more burgers and fewer pizzas until they equalize.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-5">
                    <p className="font-bold text-gray-800 mb-3">🔄 Adjustment Process:</p>
                    <ol className="text-sm space-y-2 text-gray-700">
                      <li><strong>1.</strong> If MUₓ/Pₓ {'>'} MUᵧ/Pᵧ → Buy more X, less Y</li>
                      <li><strong>2.</strong> As you buy more X, MUₓ decreases (diminishing MU)</li>
                      <li><strong>3.</strong> As you buy less Y, MUᵧ increases</li>
                      <li><strong>4.</strong> Continue until MUₓ/Pₓ = MUᵧ/Pᵧ</li>
                      <li><strong>5.</strong> Now you've maximized utility!</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5">
                  <p className="font-bold text-yellow-900 mb-3 text-lg">📝 Detailed Numerical Example:</p>
                  <div className="bg-white rounded p-4 mb-3">
                    <p className="font-bold mb-2">Given Information:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Budget: $20</li>
                      <li>• Pizza costs: $4 per slice</li>
                      <li>• Burger costs: $2 each</li>
                      <li>• Current: Pizza MU = 60, Burger MU = 30</li>
                    </ul>
                  </div>

                  <div className="bg-purple-100 rounded p-4 mb-3">
                    <p className="font-bold mb-2">Calculation:</p>
                    <p className="font-mono text-sm mb-1">Pizza: MU/P = 60/4 = 15 utils per dollar</p>
                    <p className="font-mono text-sm mb-1">Burger: MU/P = 30/2 = 15 utils per dollar</p>
                    <p className="font-bold text-green-800 mt-3">✓ Equilibrium! Both give 15 utils per dollar</p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">If NOT in Equilibrium:</p>
                    <p className="text-sm mb-2">Suppose Pizza MU/P = 12, Burger MU/P = 18</p>
                    <p className="text-sm text-red-700 font-bold">→ Not optimal! Buy more burgers, fewer pizzas until they equalize</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-400 rounded-xl p-6">
                <h4 className="font-bold text-indigo-900 mb-3 text-xl">🎯 Summary - Utility Theory:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li>• <strong>TU:</strong> Total satisfaction from all units consumed</li>
                    <li>• <strong>MU:</strong> Additional satisfaction from one more unit</li>
                    <li>• <strong>Law of Diminishing MU:</strong> MU decreases as consumption increases</li>
                  </ul>
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li>• <strong>Maximization:</strong> MU/P equal across all goods</li>
                    <li>• <strong>TU Maximum:</strong> When MU = 0</li>
                    <li>• <strong>Slope of TU:</strong> Equals MU at that point</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INDIFFERENCE CURVES - COMPLETE WITH ALL DETAILS */}
        {activeTab === 'indifference' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">📊 Indifference Curves - Complete Theory</h2>
              <p className="text-lg opacity-90">Graphical representation of consumer preferences</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is an Indifference Curve?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  An <strong>indifference curve</strong> is a graph showing all combinations of two goods that provide a consumer with the same level of satisfaction (utility). The consumer is "indifferent" between any two points on the same curve.
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold mb-3">Key Definition:</p>
                  <p className="text-gray-700">If bundle A = (2 apples, 8 bananas) and bundle B = (4 apples, 3 bananas) both give you the same satisfaction, they lie on the same indifference curve. You don't prefer one over the other.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Interactive Indifference Curve</h3>
              <div className="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={450}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="apples" label={{ value: 'Good X (Apples)', position: 'insideBottom', offset: -5 }} domain={[0, 6]} />
                    <YAxis dataKey="bananas" label={{ value: 'Good Y (Bananas)', angle: -90, position: 'insideLeft' }} domain={[0, 15]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Indifference Curve IC₁" data={indifferenceCurveData} fill="#0891b2" line={{ stroke: '#0891b2', strokeWidth: 3 }} />
                    <Scatter name="IC₂ (Higher Utility)" data={indifferenceCurveData.map(d => ({apples: d.apples + 1, bananas: d.bananas + 2}))} fill="#8b5cf6" line={{ stroke: '#8b5cf6', strokeWidth: 3 }} />
                  </ScatterChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-4">
                  <p className="font-bold mb-2">Understanding the Graph:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Blue Curve (IC₁):</strong> All points provide same utility (e.g., U = 50)</li>
                    <li>• <strong>Purple Curve (IC₂):</strong> Higher utility (e.g., U = 70)</li>
                    <li>• Point (1,12) gives same satisfaction as (5,2) on IC₁</li>
                    <li>• IC₂ is preferred to IC₁ (more of both goods)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔑 Properties of Indifference Curves</h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    property: '1. Downward Sloping (Negative Slope)',
                    theory: 'Indifference curves slope downward from left to right. This reflects the negative relationship between the two goods to maintain constant utility.',
                    reason: 'To maintain the same satisfaction level, if you consume more of one good (X), you must consume less of the other good (Y). This is the principle of substitution.',
                    mathematically: 'Slope = ΔY/ΔX < 0 (negative)',
                    example: 'If you get 2 more apples, you must give up some bananas to stay equally happy. Can\'t have more of both and stay on same curve.',
                    violation: 'If curve slopes upward, it would mean more of both goods gives same utility (violates non-satiation).',
                    icon: '↘️',
                    color: 'blue'
                  },
                  {
                    property: '2. Higher Curves Represent Higher Utility',
                    theory: 'Indifference curves farther from the origin represent higher levels of satisfaction. This reflects the "more is better" principle.',
                    reason: 'A curve farther out contains combinations with more of both goods (or more of one and no less of the other), which provides greater satisfaction.',
                    mathematically: 'If IC₂ > IC₁, then U₂ > U₁',
                    example: 'IC with (10 apples, 10 bananas) is preferred to IC with (5 apples, 5 bananas). More of both goods means higher utility.',
                    violation: 'Would violate non-satiation if lower curves were preferred.',
                    icon: '⬆️',
                    color: 'green'
                  },
                  {
                    property: '3. Indifference Curves Cannot Intersect',
                    theory: 'Two indifference curves can NEVER cross or touch each other. This is a logical necessity of consistent preferences.',
                    reason: 'If curves intersect at point A, then A is on both curves. This means A gives both U₁ and U₂ utility simultaneously, which is impossible. It would violate transitivity.',
                    mathematically: 'If IC₁ ∩ IC₂ at point A, then U(A) = U₁ = U₂, but U₁ ≠ U₂ (contradiction)',
                    example: 'Suppose curves intersect at (5,5). This point can\'t simultaneously represent utility level 50 AND utility level 70. It must be one or the other.',
                    violation: 'Intersection would violate transitivity axiom and make preferences inconsistent.',
                    icon: '⊗',
                    color: 'red'
                  },
                  {
                    property: '4. Convex to Origin (Bowed Inward)',
                    theory: 'Indifference curves are convex when viewed from the origin, meaning they bow inward. This reflects diminishing marginal rate of substitution.',
                    reason: 'As you have more of good X and less of Y, you become less willing to give up Y for additional X. The slope (MRS) becomes flatter as you move down the curve.',
                    mathematically: 'MRS diminishes: |MRS| decreases as X increases',
                    example: 'When you have 1 apple and 12 bananas, you\'ll give up many bananas for another apple. When you have 5 apples and 2 bananas, you won\'t give up many bananas for another apple.',
                    violation: 'Concave curves (bowed outward) would mean increasing MRS, implying you want more extremes rather than balanced consumption.',
                    icon: '⌢',
                    color: 'purple'
                  },
                  {
                    property: '5. Indifference Curves are Dense',
                    theory: 'There exists an indifference curve through every possible consumption bundle in the commodity space. The space is "filled" with indifference curves.',
                    reason: 'For any bundle (x,y), there exists a utility level U and thus an indifference curve IC representing all bundles with that utility.',
                    mathematically: 'For all (x,y) ∈ ℝ²₊, ∃ IC such that (x,y) ∈ IC',
                    example: 'Between IC₁ and IC₂, there are infinite indifference curves representing all utility levels between U₁ and U₂.',
                    violation: 'If gaps existed, some bundles wouldn\'t have a utility level (violates completeness).',
                    icon: '⋮',
                    color: 'orange'
                  },
                ].map((prop, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${prop.color}-50 to-white border-2 border-${prop.color}-300 rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{prop.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{prop.property}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm font-bold text-blue-900 mb-2">📖 Theory:</p>
                        <p className="text-sm text-gray-800 leading-relaxed">{prop.theory}</p>
                      </div>
                      <div className="bg-white rounded p-4 border-l-4 border-green-500">
                        <p className="text-sm font-bold mb-2">Why?</p>
                        <p className="text-sm text-gray-700">{prop.reason}</p>
                      </div>
                      <div className="bg-gray-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">📐 Mathematical:</p>
                        <p className="font-mono text-sm text-gray-800">{prop.mathematically}</p>
                      </div>
                      <div className="bg-yellow-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Example:</p>
                        <p className="text-sm text-gray-700">{prop.example}</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded p-4">
                        <p className="text-sm font-bold text-red-900 mb-2">What if violated?</p>
                        <p className="text-sm text-gray-700">{prop.violation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔄 Marginal Rate of Substitution (MRS)</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <p className="text-gray-800 text-lg mb-4">
                  The <strong>Marginal Rate of Substitution (MRS)</strong> is the rate at which a consumer is willing to give up one good (Y) to obtain one more unit of another good (X), while maintaining the same level of utility.
                </p>

                <div className="bg-white rounded p-6 mb-4">
                  <p className="font-bold text-center text-2xl mb-4 text-purple-900">MRS Formula:</p>
                  <p className="font-mono text-center text-3xl mb-3">MRS = -ΔY / ΔX = MUₓ / MUᵧ</p>
                  <p className="text-sm text-center text-gray-600 mb-4">(Absolute value of slope of indifference curve)</p>
                  <div className="bg-purple-100 rounded p-4">
                    <p className="text-sm text-center mb-2"><strong>Alternative notation:</strong></p>
                    <p className="font-mono text-center">MRSₓᵧ = dy/dx along IC</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded p-5">
                    <p className="font-bold text-purple-900 mb-3">📖 Interpretation:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      If MRS = 3, it means the consumer is willing to give up 3 units of Y to get 1 more unit of X (while staying equally satisfied).
                    </p>
                    <div className="bg-purple-100 rounded p-3">
                      <p className="text-xs font-bold mb-1">Example:</p>
                      <p className="text-xs">MRS = 4 bananas per apple means you'll trade 4 bananas for 1 apple and feel the same.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-5">
                    <p className="font-bold text-purple-900 mb-3">🔢 Why MRS = MUₓ/MUᵧ:</p>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>Along IC, total utility stays constant:</p>
                      <p className="font-mono text-xs">dU = MUₓ·dx + MUᵧ·dy = 0</p>
                      <p className="font-mono text-xs">MUₓ·dx = -MUᵧ·dy</p>
                      <p className="font-mono text-xs">-dy/dx = MUₓ/MUᵧ</p>
                      <p className="font-bold mt-2">Therefore: MRS = MUₓ/MUᵧ</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5">
                  <p className="font-bold text-yellow-900 mb-3 text-lg">📉 Diminishing MRS:</p>
                  <p className="text-sm text-gray-800 mb-3">
                    As you move down an indifference curve (more X, less Y), the MRS decreases. You become less willing to give up Y for additional X.
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2 text-sm">Example with Numbers:</p>
                    <div className="space-y-1 text-xs">
                      <p>• At (1 apple, 12 bananas): MRS = 4 (will give 4 bananas for 1 apple)</p>
                      <p>• At (2 apples, 8 bananas): MRS = 3 (will give 3 bananas for 1 apple)</p>
                      <p>• At (3 apples, 5 bananas): MRS = 2 (will give 2 bananas for 1 apple)</p>
                      <p>• At (4 apples, 3 bananas): MRS = 1.5 (will give 1.5 bananas for 1 apple)</p>
                      <p className="font-bold mt-2 text-purple-900">MRS decreases as apples increase → This creates the CONVEX shape!</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎭 Special Cases of Indifference Curves</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    type: 'Perfect Substitutes',
                    description: 'Goods that can be substituted at a constant rate. Consumer willing to trade at fixed ratio.',
                    shape: 'Straight line (linear)',
                    mrs: 'Constant MRS',
                    example: '$1 bills and $5 bills (MRS = 5)',
                    realWorld: 'Coke vs Pepsi for someone who can\'t taste difference',
                    icon: '📏'
                  },
                  {
                    type: 'Perfect Complements',
                    description: 'Goods consumed together in fixed proportions. No substitution possible.',
                    shape: 'L-shaped (right angle)',
                    mrs: 'MRS = ∞ or 0',
                    example: 'Left shoes and right shoes (1:1 ratio)',
                    realWorld: 'Coffee and sugar for someone who always uses exact amounts',
                    icon: '🔗'
                  },
                  {
                    type: 'Neutral Goods',
                    description: 'One good provides no utility. Consumer indifferent about that good.',
                    shape: 'Vertical or horizontal line',
                    mrs: 'MRS = 0 or ∞',
                    example: 'Food vs trash',
                    realWorld: 'Desired good vs something you don\'t want',
                    icon: '➡️'
                  },
                ].map((special, i) => (
                  <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-lg p-5">
                    <div className="text-center mb-3">
                      <div className="text-5xl mb-2">{special.icon}</div>
                      <h5 className="font-bold text-gray-800 text-lg">{special.type}</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white rounded p-3">
                        <p className="font-bold mb-1">Description:</p>
                        <p className="text-xs text-gray-700">{special.description}</p>
                      </div>
                      <div className="bg-cyan-100 rounded p-3">
                        <p className="font-bold mb-1">Shape:</p>
                        <p className="text-xs text-gray-700">{special.shape}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="font-bold mb-1">MRS:</p>
                        <p className="text-xs text-gray-700">{special.mrs}</p>
                      </div>
                      <div className="bg-yellow-100 rounded p-3">
                        <p className="font-bold mb-1">Example:</p>
                        <p className="text-xs text-gray-700">{special.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BUDGET LINE - COMPLETE */}
        {activeTab === 'budget' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">💰 Budget Constraint - Complete Theory</h2>
              <p className="text-lg opacity-90">Understanding income and price limitations</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is a Budget Constraint?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  A <strong>budget constraint</strong> (or budget line) shows all combinations of two goods that a consumer can afford given their income and the prices of the goods. It represents the consumer's affordability limit.
                </p>
                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-bold text-center text-2xl mb-4">Budget Constraint Equation:</p>
                  <p className="font-mono text-center text-3xl mb-3">M = Pₓ·X + Pᵧ·Y</p>
                  <p className="text-center text-sm text-gray-600 mb-4">Money Income = (Price of X × Quantity of X) + (Price of Y × Quantity of Y)</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-green-100 rounded p-3">
                      <p className="text-sm"><strong>M</strong> = Money income (budget)</p>
                      <p className="text-sm"><strong>Pₓ, Pᵧ</strong> = Prices of goods X and Y</p>
                      <p className="text-sm"><strong>X, Y</strong> = Quantities purchased</p>
                    </div>
                    <div className="bg-blue-100 rounded p-3">
                      <p className="text-sm font-bold mb-1">Slope-Intercept Form:</p>
                      <p className="font-mono text-sm">Y = (M/Pᵧ) - (Pₓ/Pᵧ)·X</p>
                      <p className="text-xs text-gray-600 mt-1">Y-intercept: M/Pᵧ, Slope: -Pₓ/Pᵧ</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-4">
                  <p className="text-sm"><strong>Example:</strong> Income = $100, Price of X = $10, Price of Y = $20</p>
                  <p className="font-mono text-sm mt-2">100 = 10X + 20Y</p>
                  <p className="text-sm mt-2">Can buy: (10X, 0Y) OR (0X, 5Y) OR (5X, 2.5Y) or any combination on the line</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Budget Line Graph</h3>
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={budgetLineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" label={{ value: 'Good X (quantity)', position: 'insideBottom', offset: -5 }} domain={[0, 6]} />
                    <YAxis dataKey="y" label={{ value: 'Good Y (quantity)', angle: -90, position: 'insideLeft' }} domain={[0, 12]} />
                    <Tooltip />
                    <Legend />
                    <Line type="linear" dataKey="y" stroke="#22c55e" strokeWidth={4} name="Budget Line" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-5">
                  <p className="font-bold mb-3">Understanding the Budget Line:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li>• <strong>Y-intercept (M/Pᵧ):</strong> Max Y if spend all on Y</li>
                      <li>• <strong>X-intercept (M/Pₓ):</strong> Max X if spend all on X</li>
                      <li>• <strong>Slope (-Pₓ/Pᵧ):</strong> Rate of tradeoff in market</li>
                    </ul>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li>• <strong>Points ON line:</strong> Spend all income</li>
                      <li>• <strong>Points BELOW:</strong> Affordable, income left over</li>
                      <li>• <strong>Points ABOVE:</strong> NOT affordable</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔄 Changes in Budget Line</h3>
              <div className="space-y-4">
                {[
                  {
                    change: 'Income Increases (M↑)',
                    effect: 'Budget line shifts OUTWARD parallel',
                    reason: 'Can afford more of both goods at same prices',
                    equation: 'M₂ > M₁ → Both intercepts increase proportionally',
                    graph: 'Parallel shift away from origin',
                    example: 'Income $100→$150: Can buy 50% more of everything',
                    slope: 'Slope unchanged (-Pₓ/Pᵧ stays same)',
                    icon: '↗️',
                    color: 'green'
                  },
                  {
                    change: 'Income Decreases (M↓)',
                    effect: 'Budget line shifts INWARD parallel',
                    reason: 'Can afford less of both goods at same prices',
                    equation: 'M₂ < M₁ → Both intercepts decrease proportionally',
                    graph: 'Parallel shift toward origin',
                    example: 'Income $100→$50: Can only buy 50% as much',
                    slope: 'Slope unchanged (-Pₓ/Pᵧ stays same)',
                    icon: '↙️',
                    color: 'red'
                  },
                  {
                    change: 'Price of X Decreases (Pₓ↓)',
                    effect: 'Budget line ROTATES OUTWARD on X-axis',
                    reason: 'Can buy more X with same income, Y unchanged',
                    equation: 'X-intercept increases (M/Pₓ↑), Y-intercept constant',
                    graph: 'Pivots outward from Y-intercept',
                    example: 'Pₓ: $10→$5: Can buy 2x as much X',
                    slope: 'Slope decreases (becomes flatter)',
                    icon: '↻',
                    color: 'blue'
                  },
                  {
                    change: 'Price of X Increases (Pₓ↑)',
                    effect: 'Budget line ROTATES INWARD on X-axis',
                    reason: 'Can buy less X with same income, Y unchanged',
                    equation: 'X-intercept decreases (M/Pₓ↓), Y-intercept constant',
                    graph: 'Pivots inward from Y-intercept',
                    example: 'Pₓ: $10→$20: Can only buy 0.5x as much X',
                    slope: 'Slope increases (becomes steeper)',
                    icon: '↺',
                    color: 'orange'
                  },
                  {
                    change: 'Both Prices Increase Proportionally',
                    effect: 'SAME as income decrease (parallel inward shift)',
                    reason: 'Real purchasing power decreases',
                    equation: 'If Pₓ and Pᵧ both double → equivalent to M halving',
                    graph: 'Parallel inward shift',
                    example: 'Inflation doubles all prices → same effect as income cut in half',
                    slope: 'Slope unchanged',
                    icon: '⬇️',
                    color: 'purple'
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-lg p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{item.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{item.change}</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white rounded p-4">
                        <p className="text-sm font-bold mb-2">Effect:</p>
                        <p className="text-sm text-gray-700">{item.effect}</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="text-sm font-bold mb-2">Reason:</p>
                        <p className="text-sm text-gray-700">{item.reason}</p>
                      </div>
                      <div className={`bg-${item.color}-100 rounded p-4`}>
                        <p className="text-sm font-bold mb-2">Example:</p>
                        <p className="text-sm text-gray-700">{item.example}</p>
                      </div>
                      <div className="bg-gray-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Slope Change:</p>
                        <p className="text-sm text-gray-700">{item.slope}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONSUMER OPTIMUM - COMPLETE */}
        {activeTab === 'optimum' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🎯 Consumer Equilibrium/Optimum</h2>
              <p className="text-lg opacity-90">Maximizing satisfaction within budget constraints</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Consumer Equilibrium?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Consumer equilibrium</strong> occurs when a consumer maximizes utility subject to their budget constraint. This is where an indifference curve is tangent to (just touches) the budget line.
                </p>
                <div className="bg-white rounded p-5">
                  <p className="font-bold mb-3">At Equilibrium:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Consumer on highest possible indifference curve</li>
                    <li>• Budget fully spent (on budget line)</li>
                    <li>• Cannot reach higher utility with given income</li>
                    <li>• Indifference curve tangent to budget line</li>
                    <li>• MRS = Price ratio</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📐 Equilibrium Conditions (Detailed)</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <p className="font-bold text-center text-2xl mb-4 text-purple-900">Tangency Condition:</p>
                <p className="font-mono text-center text-4xl mb-4">MRS = Pₓ / Pᵧ</p>
                <p className="text-center text-gray-700 mb-4">Or equivalently:</p>
                <p className="font-mono text-center text-4xl mb-4">MUₓ / MUᵧ = Pₓ / Pᵧ</p>
                <p className="text-center text-gray-700 mb-4">Rearranging:</p>
                <p className="font-mono text-center text-4xl mb-4">MUₓ / Pₓ = MUᵧ / Pᵧ</p>
                
                <div className="bg-white rounded p-6 mt-6">
                  <p className="font-bold text-gray-800 mb-4 text-lg">Three Equivalent Ways to State Equilibrium:</p>
                  <div className="space-y-4">
                    <div className="bg-purple-100 rounded p-4">
                      <p className="font-bold mb-2">1. Slope Equality:</p>
                      <p className="text-sm mb-2">Slope of IC = Slope of budget line</p>
                      <p className="font-mono text-sm">-MRS = -Pₓ/Pᵧ</p>
                      <p className="text-xs text-gray-600 mt-2">Curves are tangent at optimal point</p>
                    </div>
                    <div className="bg-blue-100 rounded p-4">
                      <p className="font-bold mb-2">2. MRS = Price Ratio:</p>
                      <p className="text-sm mb-2">Rate of substitution = Market tradeoff rate</p>
                      <p className="font-mono text-sm">MUₓ/MUᵧ = Pₓ/Pᵧ</p>
                      <p className="text-xs text-gray-600 mt-2">Subjective value = Objective price ratio</p>
                    </div>
                    <div className="bg-green-100 rounded p-4">
                      <p className="font-bold mb-2">3. Equal Marginal Utility per Dollar:</p>
                      <p className="text-sm mb-2">Utility per dollar same across all goods</p>
                      <p className="font-mono text-sm">MUₓ/Pₓ = MUᵧ/Pᵧ</p>
                      <p className="text-xs text-gray-600 mt-2">Can't improve by reallocating spending</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5 mt-4">
                  <p className="font-bold text-yellow-900 mb-3 text-lg">📝 Numerical Example:</p>
                  <div className="bg-white rounded p-4 space-y-3">
                    <div>
                      <p className="font-bold mb-2">Given:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Income M = $120</li>
                        <li>• Pₓ = $10, Pᵧ = $6</li>
                        <li>• At equilibrium: X = 6, Y = 10</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Check Budget:</p>
                      <p className="font-mono text-sm">$10(6) + $6(10) = $60 + $60 = $120 ✓</p>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Check Tangency:</p>
                      <p className="text-sm">At (6,10): MUₓ = 30, MUᵧ = 18</p>
                      <p className="font-mono text-sm">MRS = MUₓ/MUᵧ = 30/18 = 1.67</p>
                      <p className="font-mono text-sm">Pₓ/Pᵧ = 10/6 = 1.67 ✓</p>
                      <p className="font-bold text-green-800 mt-2">Equilibrium confirmed!</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Why Equilibrium Must Occur at Tangency</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h4 className="font-bold text-red-900 mb-3 text-lg">If MRS {'>'} Pₓ/Pᵧ (Not Optimal)</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Consumer willing to give up more Y for X than market requires
                  </p>
                  <div className="bg-white rounded p-4 mb-3">
                    <p className="text-sm font-bold mb-2">Example:</p>
                    <p className="text-xs">MRS = 3, but Pₓ/Pᵧ = 2</p>
                    <p className="text-xs mt-2">Willing to give 3Y for 1X, but market only charges 2Y for 1X</p>
                  </div>
                  <p className="text-sm font-bold text-red-900">→ Should buy MORE X, less Y</p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">If MRS {'<'} Pₓ/Pᵧ (Not Optimal)</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Consumer willing to give up less Y for X than market requires
                  </p>
                  <div className="bg-white rounded p-4 mb-3">
                    <p className="text-sm font-bold mb-2">Example:</p>
                    <p className="text-xs">MRS = 1, but Pₓ/Pᵧ = 2</p>
                    <p className="text-xs mt-2">Only willing to give 1Y for 1X, but market charges 2Y for 1X</p>
                  </div>
                  <p className="text-sm font-bold text-blue-900">→ Should buy LESS X, more Y</p>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3 text-xl">✓ At Equilibrium (MRS = Pₓ/Pᵧ)</h4>
                <p className="text-gray-800 mb-4">
                  Consumer's willingness to trade = Market's terms of trade. No incentive to change. Utility maximized!
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-sm mb-2">Optimal Allocation</p>
                    <p className="text-xs text-gray-700">Can't improve by reallocating budget</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-sm mb-2">Highest IC</p>
                    <p className="text-xs text-gray-700">On highest indifference curve possible</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-sm mb-2">Budget Exhausted</p>
                    <p className="text-xs text-gray-700">Spending all available income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ICC & PCC - COMPLETE */}
        {activeTab === 'icc-pcc' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">📈 Income & Price Consumption Curves</h2>
              <p className="text-lg opacity-90">How consumption changes with income and price variations</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💵 Income Consumption Curve (ICC)</h3>
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-5 mb-4">
                  <h4 className="font-bold text-blue-900 mb-3 text-xl">📖 Definition:</h4>
                  <p className="text-gray-800 text-lg leading-relaxed mb-3">
                    The <strong>Income Consumption Curve (ICC)</strong> is the locus (path) of all equilibrium points as consumer income changes, holding prices constant. It shows how optimal consumption bundles change with different income levels.
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Construction:</p>
                    <ol className="text-sm space-y-2 text-gray-700">
                      <li>1. Start with initial income M₁, prices Pₓ and Pᵧ</li>
                      <li>2. Find equilibrium E₁ (tangency of IC₁ and budget line)</li>
                      <li>3. Increase income to M₂ (budget line shifts parallel outward)</li>
                      <li>4. Find new equilibrium E₂ (tangency of IC₂ and new budget)</li>
                      <li>5. Repeat for multiple income levels</li>
                      <li>6. Connect all equilibrium points → This is the ICC</li>
                    </ol>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      case: 'Both Normal Goods',
                      icc: 'Upward sloping to the right',
                      description: 'As income increases, consumption of BOTH goods increases',
                      example: 'Income ↑ → Buy more food AND more clothing',
                      interpretation: 'Both goods are normal (positive income elasticity)',
                      icon: '↗️',
                      color: 'green'
                    },
                    {
                      case: 'Good X is Inferior',
                      icc: 'Backward bending (bends toward Y-axis)',
                      description: 'Beyond a certain income, X consumption decreases while Y increases',
                      example: 'Income ↑ → Buy LESS instant noodles, MORE restaurant meals',
                      interpretation: 'X is inferior good, Y is normal good',
                      icon: '↩️',
                      color: 'orange'
                    },
                    {
                      case: 'Good Y is Inferior',
                      icc: 'Downward bending (bends toward X-axis)',
                      description: 'Beyond a certain income, Y consumption decreases while X increases',
                      example: 'Income ↑ → Buy MORE cars, LESS public transport',
                      interpretation: 'Y is inferior good, X is normal good',
                      icon: '↘️',
                      color: 'red'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-lg p-5`}>
                      <div className="text-center mb-3">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h5 className="font-bold text-gray-800 text-lg">{item.case}</h5>
                      </div>
                      <div className="space-y-3">
                        <div className={`bg-${item.color}-100 rounded p-3`}>
                          <p className="text-xs font-bold mb-1">ICC Shape:</p>
                          <p className="text-xs text-gray-700">{item.icc}</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="text-xs font-bold mb-1">Description:</p>
                          <p className="text-xs text-gray-700">{item.description}</p>
                        </div>
                        <div className="bg-yellow-100 rounded p-3">
                          <p className="text-xs font-bold mb-1">Example:</p>
                          <p className="text-xs text-gray-700">{item.example}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5">
                  <p className="font-bold text-yellow-900 mb-2 text-lg">🎯 Key Insights from ICC:</p>
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li>• <strong>Slope of ICC reveals nature of goods:</strong> Upward = both normal, Backward = X inferior, Downward = Y inferior</li>
                    <li>• <strong>Used to derive Engel curves:</strong> Shows income-quantity relationship for each good</li>
                    <li>• <strong>Income elasticity:</strong> Can calculate how responsive demand is to income changes</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Price Consumption Curve (PCC)</h3>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
                <div className="bg-cyan-50 rounded-lg p-5 mb-4">
                  <h4 className="font-bold text-cyan-900 mb-3 text-xl">📖 Definition:</h4>
                  <p className="text-gray-800 text-lg leading-relaxed mb-3">
                    The <strong>Price Consumption Curve (PCC)</strong> is the locus of all equilibrium points as the price of ONE good changes, holding income and other prices constant. It traces how optimal consumption changes with price variations.
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Construction:</p>
                    <ol className="text-sm space-y-2 text-gray-700">
                      <li>1. Start with prices Pₓ₁ and Pᵧ, income M</li>
                      <li>2. Find equilibrium E₁</li>
                      <li>3. Change Pₓ to Pₓ₂ (budget line rotates)</li>
                      <li>4. Find new equilibrium E₂</li>
                      <li>5. Repeat for multiple price levels</li>
                      <li>6. Connect all equilibrium points → This is the PCC</li>
                    </ol>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {[
                    {
                      type: 'PCC for Price of X Changes',
                      slope: 'Can be downward or upward sloping',
                      cases: [
                        { when: 'Downward slope', means: 'X and Y are substitutes', example: 'As Pₓ↓, buy more X and less Y' },
                        { when: 'Upward slope', means: 'X and Y are complements', example: 'As Pₓ↓, buy more X AND more Y' },
                        { when: 'Horizontal', means: 'Income effect = 0', example: 'All extra purchasing power goes to X' }
                      ],
                      icon: '📊',
                      color: 'blue'
                    },
                    {
                      type: 'Deriving Demand Curve from PCC',
                      slope: 'PCC is directly used to derive demand curve',
                      cases: [
                        { when: 'From PCC', means: 'Plot price on Y-axis, quantity X on X-axis', example: 'Each point on PCC gives (Pₓ, Qₓ) pair' },
                        { when: 'Normal good', means: 'Demand curve slopes downward', example: 'Pₓ↓ → Qₓ↑' },
                        { when: 'Giffen good', means: 'Demand curve slopes upward', example: 'Pₓ↓ → Qₓ↓ (rare)' }
                      ],
                      icon: '📉',
                      color: 'purple'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-lg p-5`}>
                      <div className="text-center mb-3">
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <h5 className="font-bold text-gray-800 text-lg">{item.type}</h5>
                      </div>
                      <div className="space-y-2">
                        {item.cases.map((c, j) => (
                          <div key={j} className="bg-white rounded p-3">
                            <p className="text-xs font-bold text-gray-800 mb-1">{c.when}:</p>
                            <p className="text-xs text-gray-700 mb-1">{c.means}</p>
                            <div className={`bg-${item.color}-100 rounded p-2 mt-1`}>
                              <p className="text-xs text-gray-600">{c.example}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-100 border-l-4 border-green-500 rounded-r-lg p-5">
                  <p className="font-bold text-green-900 mb-2 text-lg">🎯 Key Insights from PCC:</p>
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li>• <strong>Derives demand curve:</strong> Each PCC point gives a price-quantity pair</li>
                    <li>• <strong>Shows substitution patterns:</strong> Whether goods are substitutes or complements</li>
                    <li>• <strong>Price elasticity:</strong> Steeper PCC = less elastic demand</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ENGEL CURVES - COMPLETE */}
        {activeTab === 'engel' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">📉 Engel Curves - Complete Theory</h2>
              <p className="text-lg opacity-90">Income-quantity relationship for individual goods</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is an Engel Curve?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  An <strong>Engel curve</strong> shows the relationship between consumer income and the quantity demanded of a particular good, holding prices constant. Named after German statistician Ernst Engel (1821-1896).
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold mb-3">Derivation from ICC:</p>
                  <p className="text-sm text-gray-700 mb-2">The Engel curve is derived from the Income Consumption Curve by plotting income on vertical axis and quantity of a good on horizontal axis.</p>
                  <p className="text-sm text-gray-700">For each income level on ICC, we identify the quantity consumed of good X (or Y), and plot these (M, Q) pairs.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Engel Curve Graph</h3>
              <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={engelCurveData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quantity" label={{ value: 'Quantity of Good', position: 'insideBottom', offset: -5 }} />
                    <YAxis dataKey="income" label={{ value: 'Income ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#14b8a6" strokeWidth={3} name="Engel Curve (Normal Good)" dot={{ fill: '#14b8a6', r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-4">
                  <p className="font-bold mb-2">Reading the Engel Curve:</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• At income $100 → Demand 5 units</li>
                    <li>• At income $300 → Demand 18 units</li>
                    <li>• At income $500 → Demand 25 units</li>
                    <li>• <strong>Upward slope indicates NORMAL GOOD</strong></li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Types of Engel Curves</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    type: 'Normal Good (Necessity)',
                    slope: 'Upward sloping, but flattening',
                    shape: 'Positive slope with decreasing rate',
                    incomeElasticity: '0 < Eᵢ < 1',
                    behavior: 'As income increases, demand increases but at decreasing rate',
                    examples: ['Food', 'Basic clothing', 'Housing', 'Utilities'],
                    graph: 'Curves upward, getting flatter',
                    icon: '📈',
                    color: 'green'
                  },
                  {
                    type: 'Normal Good (Luxury)',
                    slope: 'Upward sloping, steepening',
                    shape: 'Positive slope with increasing rate',
                    incomeElasticity: 'Eᵢ > 1',
                    behavior: 'As income increases, demand increases at increasing rate',
                    examples: ['Designer clothes', 'Luxury cars', 'Fine dining', 'International travel'],
                    graph: 'Curves upward, getting steeper',
                    icon: '🚀',
                    color: 'blue'
                  },
                  {
                    type: 'Inferior Good',
                    slope: 'Backward bending (negative slope)',
                    shape: 'Initially positive, then negative',
                    incomeElasticity: 'Eᵢ < 0',
                    behavior: 'Initially increases with income, then decreases beyond certain income level',
                    examples: ['Instant noodles', 'Used goods', 'Public transport', 'Low-quality products'],
                    graph: 'Rises then bends backward',
                    icon: '↩️',
                    color: 'red'
                  },
                ].map((item, i) => (
                  <div key={i} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-lg p-5`}>
                    <div className="text-center mb-3">
                      <div className="text-5xl mb-2">{item.icon}</div>
                      <h5 className="font-bold text-gray-800 text-lg">{item.type}</h5>
                    </div>
                    <div className="space-y-3">
                      <div className={`bg-${item.color}-100 rounded p-3`}>
                        <p className="text-xs font-bold mb-1">Slope:</p>
                        <p className="text-xs text-gray-700">{item.slope}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-xs font-bold mb-1">Income Elasticity:</p>
                        <p className="font-mono text-xs text-gray-700">{item.incomeElasticity}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-xs font-bold mb-1">Behavior:</p>
                        <p className="text-xs text-gray-700">{item.behavior}</p>
                      </div>
                      <div className="bg-yellow-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Examples:</p>
                        <ul className="text-xs space-y-1">
                          {item.examples.map((ex, j) => (
                            <li key={j}>• {ex}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                <h4 className="font-bold text-purple-900 mb-3 text-xl">🔗 Relationship: ICC → Engel Curve</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-5">
                    <p className="font-bold mb-3">From ICC to Engel Curve:</p>
                    <ol className="text-sm space-y-2 text-gray-700">
                      <li>1. ICC shows equilibrium bundles at different incomes</li>
                      <li>2. For each income level, note quantity of good X</li>
                      <li>3. Plot (Quantity of X, Income) pairs</li>
                      <li>4. This gives Engel curve for good X</li>
                      <li>5. Repeat for good Y to get its Engel curve</li>
                    </ol>
                  </div>
                  <div className="bg-purple-100 rounded p-5">
                    <p className="font-bold mb-3">Key Insights:</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li>• Upward sloping ICC → Positive Engel curve (normal good)</li>
                      <li>• Backward bending ICC → Negative Engel curve (inferior good)</li>
                      <li>• Steeper Engel curve → Higher income elasticity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INCOME & SUBSTITUTION EFFECTS - COMPLETE */}
        {activeTab === 'effects' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🔄 Income & Substitution Effects - Complete Theory</h2>
              <p className="text-lg opacity-90">Decomposing price change effects (Slutsky & Hicks methods)</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Price Effect Decomposition?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  When the price of a good changes, the total change in quantity demanded can be separated into TWO components:
                </p>
                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-mono text-center text-3xl mb-4">Total Price Effect = Substitution Effect + Income Effect</p>
                  <p className="font-mono text-center text-2xl mb-4">ΔQₜₒₜₐₗ = ΔQₛᵤᵦ + ΔQᵢₙc</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded p-4">
                    <p className="font-bold text-green-900 mb-2">1. Substitution Effect (SE)</p>
                    <p className="text-sm text-gray-700">Change in quantity due to relative price change, holding utility constant. Consumer substitutes toward relatively cheaper good.</p>
                  </div>
                  <div className="bg-purple-50 rounded p-4">
                    <p className="font-bold text-purple-900 mb-2">2. Income Effect (IE)</p>
                    <p className="text-sm text-gray-700">Change in quantity due to change in real income/purchasing power caused by price change.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔬 Two Methods of Decomposition</h3>
              <div className="space-y-6 mb-6">
                {[
                  {
                    method: 'Slutsky Method',
                    approach: 'Holds purchasing power constant such that consumer can still afford original bundle at new prices',
                    compensationRule: 'Give consumer enough income to buy original bundle (x₁, y₁) at new prices',
                    utilityLevel: 'Consumer moves to DIFFERENT indifference curve',
                    steps: [
                      'Original equilibrium E₁ at price Pₓ₁',
                      'Price changes to Pₓ₂ (say, decreases)',
                      'Draw compensated budget line through original bundle',
                      'Find hypothetical equilibrium E* (substitution effect)',
                      'Move from E* to final equilibrium E₂ (income effect)',
                    ],
                    formula: 'ΔX = ΔXˢ + ΔXⁱ where ΔXˢ = move along IC, ΔXⁱ = shift between ICs',
                    advantage: 'More practical, easier to calculate',
                    used: 'Empirical studies, policy analysis',
                    icon: '📊',
                    color: 'blue'
                  },
                  {
                    method: 'Hicks Method',
                    approach: 'Holds utility constant - consumer stays on same indifference curve',
                    compensationRule: 'Adjust income such that consumer remains on original indifference curve',
                    utilityLevel: 'Consumer stays on SAME indifference curve',
                    steps: [
                      'Original equilibrium E₁ at price Pₓ₁',
                      'Price changes to Pₓ₂',
                      'Draw compensated budget line tangent to original IC',
                      'Find hypothetical equilibrium E\' (substitution effect)',
                      'Move from E\' to final equilibrium E₂ (income effect)',
                    ],
                    formula: 'ΔX = ΔXʰ + ΔXⁱ where ΔXʰ = move along same IC, ΔXⁱ = shift between ICs',
                    advantage: 'Theoretically pure, isolates pure substitution',
                    used: 'Theoretical economics, welfare analysis',
                    icon: '🎓',
                    color: 'purple'
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{item.icon}</span>
                      <h4 className="font-bold text-gray-800 text-2xl">{item.method}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm font-bold text-blue-900 mb-2">📖 Approach:</p>
                        <p className="text-sm text-gray-800">{item.approach}</p>
                      </div>

                      <div className={`bg-${item.color}-100 rounded p-4`}>
                        <p className="text-sm font-bold mb-2">Compensation Rule:</p>
                        <p className="text-sm text-gray-700">{item.compensationRule}</p>
                      </div>

                      <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-4">
                        <p className="text-sm font-bold mb-2">Utility Level:</p>
                        <p className="text-sm text-gray-700">{item.utilityLevel}</p>
                      </div>

                      <div className="bg-gray-100 rounded p-4">
                        <p className="text-sm font-bold mb-3">Step-by-Step Decomposition:</p>
                        <ol className="text-xs space-y-1 text-gray-700">
                          {item.steps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-purple-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Formula:</p>
                        <p className="font-mono text-sm text-gray-800">{item.formula}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-green-100 rounded p-3">
                          <p className="text-xs font-bold mb-1">Advantage:</p>
                          <p className="text-xs text-gray-700">{item.advantage}</p>
                        </div>
                        <div className="bg-yellow-100 rounded p-3">
                          <p className="text-xs font-bold mb-1">Used In:</p>
                          <p className="text-xs text-gray-700">{item.used}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Detailed Analysis of Each Effect</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 text-xl mb-4">Substitution Effect (SE)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">Change in consumption resulting from change in relative prices, keeping utility constant.</p>
                    </div>
                    
                    <div className="bg-green-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Key Characteristics:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• <strong>Always negative:</strong> Opposite to price change</li>
                        <li>• Price ↓ → Quantity ↑ (always)</li>
                        <li>• Price ↑ → Quantity ↓ (always)</li>
                        <li>• <strong>Pure substitution:</strong> No income change</li>
                        <li>• Movement ALONG same IC (Hicks)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Why It Happens:</p>
                      <p className="text-xs text-gray-700">When Pₓ falls, X becomes relatively cheaper compared to Y. To maintain same utility, consumer substitutes away from Y toward X.</p>
                    </div>

                    <div className="bg-yellow-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Example:</p>
                      <p className="text-xs text-gray-700">Coffee $5→$3, Tea still $3. Coffee now relatively cheaper. Even keeping you at same satisfaction level, you'll buy more coffee, less tea.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                  <h4 className="font-bold text-purple-900 text-xl mb-4">Income Effect (IE)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">Change in consumption due to change in real income/purchasing power from price change.</p>
                    </div>
                    
                    <div className="bg-purple-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Key Characteristics:</p>
                      <ul className="text-xs space-y-1 text-gray-700">
                        <li>• <strong>Sign depends on good type:</strong></li>
                        <li>• Normal good: IE negative (same direction as SE)</li>
                        <li>• Inferior good: IE positive (opposite to SE)</li>
                        <li>• <strong>Real income change:</strong> Feel richer/poorer</li>
                        <li>• Movement BETWEEN ICs</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Why It Happens:</p>
                      <p className="text-xs text-gray-700">When Pₓ falls, your real purchasing power increases (you feel richer). For normal goods, you buy more. For inferior goods, you buy less.</p>
                    </div>

                    <div className="bg-yellow-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Example:</p>
                      <p className="text-xs text-gray-700">Coffee $5→$3. You save $2 per cup, feel richer. If coffee is normal, buy more. If it's inferior (like instant coffee), might buy less and switch to premium.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
                <h4 className="font-bold text-orange-900 mb-4 text-xl">🎯 Combined Effects for Different Good Types:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      type: 'Normal Good',
                      se: 'Negative (Price ↓ → Qty ↑)',
                      ie: 'Negative (Feel richer → Qty ↑)',
                      total: 'Both reinforce: Large ↑ in quantity',
                      example: 'Coffee price drops: SE says buy more (cheaper), IE says buy more (feel richer) → Buy much more',
                      demand: 'Downward sloping',
                      color: 'green'
                    },
                    {
                      type: 'Inferior Good',
                      se: 'Negative (Price ↓ → Qty ↑)',
                      ie: 'Positive (Feel richer → Qty ↓)',
                      total: 'SE > IE: Net ↑ in quantity',
                      example: 'Instant noodles price drops: SE says buy more, IE says buy less (switch to better food) → Small increase',
                      demand: 'Downward sloping (but less steep)',
                      color: 'orange'
                    },
                    {
                      type: 'Giffen Good',
                      se: 'Negative (Price ↓ → Qty ↑)',
                      ie: 'Strongly Positive (IE >> SE)',
                      total: 'IE dominates: Net ↓ in quantity!',
                      example: 'Staple food for poor: Price drops, feel richer, buy LESS staple (can afford meat) → Paradox!',
                      demand: 'UPWARD sloping (violates law)',
                      color: 'red'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-lg p-5`}>
                      <h5 className="font-bold text-gray-800 text-lg mb-3 text-center">{item.type}</h5>
                      <div className="space-y-2 text-xs">
                        <div className="bg-white rounded p-3">
                          <p className="font-bold mb-1">SE:</p>
                          <p className="text-gray-700">{item.se}</p>
                        </div>
                        <div className={`bg-${item.color}-100 rounded p-3`}>
                          <p className="font-bold mb-1">IE:</p>
                          <p className="text-gray-700">{item.ie}</p>
                        </div>
                        <div className="bg-purple-100 rounded p-3">
                          <p className="font-bold mb-1">Total Effect:</p>
                          <p className="text-gray-700">{item.total}</p>
                        </div>
                        <div className="bg-yellow-100 rounded p-3">
                          <p className="font-bold mb-1">Example:</p>
                          <p className="text-gray-600">{item.example}</p>
                        </div>
                        <div className="bg-gray-100 rounded p-3">
                          <p className="font-bold mb-1">Demand Curve:</p>
                          <p className="text-gray-700">{item.demand}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TYPES OF GOODS - COMPLETE */}
        {activeTab === 'goods' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🛍️ Types of Goods - Complete Classification</h2>
              <p className="text-lg opacity-90">Normal, Inferior, Giffen, Luxury, and Necessity Goods</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 Classification Based on Income & Price Response</h4>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Goods are classified based on how demand responds to changes in consumer income and prices. Understanding these classifications helps predict consumer behavior and design effective policies.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Complete Classification Table</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Good Type</th>
                      <th className="border border-gray-300 p-3">Income Elasticity</th>
                      <th className="border border-gray-300 p-3">Income Effect</th>
                      <th className="border border-gray-300 p-3">Demand Curve</th>
                      <th className="border border-gray-300 p-3">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 p-3 font-bold">Normal (Necessity)</td>
                      <td className="border border-gray-300 p-3 text-center">0 &lt; Eᵢ &lt; 1</td>
                      <td className="border border-gray-300 p-3 text-center">Positive</td>
                      <td className="border border-gray-300 p-3 text-center">Downward</td>
                      <td className="border border-gray-300 p-3 text-sm">Food, clothing, housing</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 p-3 font-bold">Normal (Luxury)</td>
                      <td className="border border-gray-300 p-3 text-center">Eᵢ &gt; 1</td>
                      <td className="border border-gray-300 p-3 text-center">Positive (Strong)</td>
                      <td className="border border-gray-300 p-3 text-center">Downward</td>
                      <td className="border border-gray-300 p-3 text-sm">Designer goods, luxury cars</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 p-3 font-bold">Inferior</td>
                      <td className="border border-gray-300 p-3 text-center">Eᵢ &lt; 0</td>
                      <td className="border border-gray-300 p-3 text-center">Negative</td>
                      <td className="border border-gray-300 p-3 text-center">Downward</td>
                      <td className="border border-gray-300 p-3 text-sm">Instant noodles, used goods</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 p-3 font-bold">Giffen</td>
                      <td className="border border-gray-300 p-3 text-center">Eᵢ &lt;&lt; 0</td>
                      <td className="border border-gray-300 p-3 text-center">Strongly Negative</td>
                      <td className="border border-gray-300 p-3 text-center">UPWARD</td>
                      <td className="border border-gray-300 p-3 text-sm">Staple food (historical)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Detailed Analysis of Each Type</h3>
              <div className="space-y-6">
                {[
                  {
                    type: 'Normal Goods',
                    definition: 'Goods for which demand INCREASES as income increases. Most goods fall into this category.',
                    incomeElasticity: 'Eᵢ > 0 (positive)',
                    subcategories: [
                      { name: 'Necessities', ei: '0 < Eᵢ < 1', desc: 'Demand increases with income but at decreasing rate', ex: 'Food, basic clothing' },
                      { name: 'Luxuries', ei: 'Eᵢ > 1', desc: 'Demand increases faster than income', ex: 'Jewelry, vacations' }
                    ],
                    incomeEffect: 'Positive - As income ↑, demand ↑',
                    substitutionEffect: 'Negative - As price ↓, demand ↑',
                    totalEffect: 'Both effects reinforce → Strong response to price changes',
                    engelCurve: 'Upward sloping',
                    examples: ['Organic food', 'Electronics', 'Education', 'Healthcare', 'Transportation'],
                    realWorld: 'As countries develop and incomes rise, people consume more of these goods. Middle class expansion drives demand.',
                    icon: '⬆️',
                    color: 'green'
                  },
                  {
                    type: 'Inferior Goods',
                    definition: 'Goods for which demand DECREASES as income increases. Consumed mainly by lower-income consumers.',
                    incomeElasticity: 'Eᵢ < 0 (negative)',
                    subcategories: [],
                    incomeEffect: 'Negative - As income ↑, demand ↓',
                    substitutionEffect: 'Negative - As price ↓, demand ↑',
                    totalEffect: 'SE > IE: Net increase in demand when price falls (but smaller than normal goods)',
                    engelCurve: 'Backward bending (rises then falls)',
                    examples: ['Instant noodles', 'Used/second-hand goods', 'Public bus transport', 'Generic brands', 'Fast food (for some consumers)'],
                    realWorld: 'When people get richer, they switch from inferior goods to superior alternatives. Economic growth reduces demand for these goods.',
                    icon: '⬇️',
                    color: 'orange'
                  },
                  {
                    type: 'Giffen Goods',
                    definition: 'Special inferior goods where demand INCREASES as price increases (upward-sloping demand curve). Extremely rare!',
                    incomeElasticity: 'Eᵢ << 0 (strongly negative)',
                    subcategories: [],
                    incomeEffect: 'Strongly negative - IE dominates SE',
                    substitutionEffect: 'Negative (as usual)',
                    totalEffect: 'IE > SE: Price ↓ → Demand ↓ (paradox!)',
                    engelCurve: 'Steeply backward bending',
                    examples: ['Bread during Irish Potato Famine', 'Rice in poor regions', 'Potatoes (historical)', 'Staple grains for poorest consumers'],
                    realWorld: 'Named after Robert Giffen. When potato prices rose during Irish famine, people were so poor they couldn\'t afford meat, so bought MORE potatoes. Theoretical curiosity more than common occurrence.',
                    conditions: [
                      'Must be inferior good',
                      'Must take large portion of budget',
                      'Few substitutes available',
                      'Consumer must be very poor',
                      'Income effect must dominate substitution effect'
                    ],
                    icon: '⚠️',
                    color: 'red'
                  },
                ].map((good, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${good.color}-50 to-white border-2 border-${good.color}-300 rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{good.icon}</span>
                      <h4 className="font-bold text-gray-800 text-2xl">{good.type}</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm font-bold text-blue-900 mb-2">📖 Definition:</p>
                        <p className="text-sm text-gray-800">{good.definition}</p>
                      </div>

                      {good.subcategories && good.subcategories.length > 0 && (
                        <div className="bg-white rounded p-4">
                          <p className="text-sm font-bold mb-3">Subcategories:</p>
                          <div className="space-y-2">
                            {good.subcategories.map((sub, i) => (
                              <div key={i} className={`bg-${good.color}-100 rounded p-3`}>
                                <p className="text-sm font-bold">{sub.name}: {sub.ei}</p>
                                <p className="text-xs text-gray-700">{sub.desc}</p>
                                <p className="text-xs text-gray-600 mt-1">Ex: {sub.ex}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded p-4">
                          <p className="text-sm font-bold mb-2">Income Elasticity:</p>
                          <p className="font-mono text-sm text-gray-800">{good.incomeElasticity}</p>
                        </div>
                        <div className={`bg-${good.color}-100 rounded p-4`}>
                          <p className="text-sm font-bold mb-2">Engel Curve:</p>
                          <p className="text-sm text-gray-700">{good.engelCurve}</p>
                        </div>
                      </div>

                      <div className="bg-purple-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Effects Analysis:</p>
                        <ul className="text-xs space-y-1 text-gray-700">
                          <li>• <strong>Income Effect:</strong> {good.incomeEffect}</li>
                          <li>• <strong>Substitution Effect:</strong> {good.substitutionEffect}</li>
                          <li>• <strong>Total Effect:</strong> {good.totalEffect}</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-4">
                        <p className="text-sm font-bold mb-2">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {good.examples.map((ex, i) => (
                            <span key={i} className="bg-white px-3 py-1 rounded-full text-xs">{ex}</span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-4">
                        <p className="text-sm font-bold mb-2">Real-World Context:</p>
                        <p className="text-sm text-gray-700">{good.realWorld}</p>
                      </div>

                      {good.conditions && (
                        <div className="bg-red-100 border-2 border-red-300 rounded p-4">
                          <p className="text-sm font-bold mb-2">Conditions for Giffen Good:</p>
                          <ul className="text-xs space-y-1 text-gray-700">
                            {good.conditions.map((cond, i) => (
                              <li key={i}>• {cond}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONSUMER SURPLUS - COMPLETE */}
        {activeTab === 'surplus' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">💎 Consumer Surplus - Complete Theory</h2>
              <p className="text-lg opacity-90">Measuring consumer welfare and benefits</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Consumer Surplus?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Consumer surplus</strong> is the difference between what consumers are willing to pay for a good and what they actually pay. It represents the extra benefit or satisfaction consumers receive from a purchase.
                </p>
                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-bold text-center text-2xl mb-3">Consumer Surplus Formula:</p>
                  <p className="font-mono text-center text-3xl mb-3">CS = WTP - Price Paid</p>
                  <p className="text-center text-sm text-gray-600 mb-3">(Willingness to Pay minus Actual Price)</p>
                  <p className="font-mono text-center text-2xl">CS = ∫[Demand Curve - Price]</p>
                  <p className="text-center text-xs text-gray-600 mt-2">Area under demand curve above price line</p>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-4">
                  <p className="text-sm"><strong>Simple Example:</strong> You're willing to pay $50 for concert tickets, but they only cost $30.</p>
                  <p className="font-mono text-sm mt-2">Consumer Surplus = $50 - $30 = $20</p>
                  <p className="text-sm mt-2">You gained $20 worth of extra satisfaction!</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Consumer Surplus Graph</h3>
              <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={450}>
                  <AreaChart data={consumerSurplusData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quantity" label={{ value: 'Quantity', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Price/WTP ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="marginalUtility" stackId="1" stroke="#14b8a6" fill="#99f6e4" name="Consumer Surplus Area" />
                    <Line type="monotone" dataKey="price" stroke="#dc2626" strokeWidth={4} name="Market Price" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-5">
                  <p className="font-bold mb-3">Understanding the Graph:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Teal Area:</strong> Total consumer surplus (benefit above price paid)</li>
                    <li>• <strong>Red Line:</strong> Market price ($15 in this example)</li>
                    <li>• <strong>Downward Curve:</strong> Marginal willingness to pay (demand curve)</li>
                    <li>• <strong>Total CS:</strong> Sum of all triangular areas above price, below demand</li>
                    <li>• Each unit consumed generates surplus = (WTP - Price) for that unit</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Detailed Explanation</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 mb-3 text-lg">Why Consumer Surplus Exists:</h4>
                  <div className="space-y-3 text-sm text-gray-800">
                    <div className="bg-white rounded p-4">
                      <p className="font-bold mb-2">1. Diminishing Marginal Utility:</p>
                      <p className="text-gray-700">First units have higher value than later units, but all units cost same price. You'd pay more for first unit, but don't have to!</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold mb-2">2. Uniform Market Price:</p>
                      <p className="text-gray-700">Everyone pays same price, even those willing to pay more. High-value consumers get surplus.</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold mb-2">3. All-or-Nothing Not Required:</p>
                      <p className="text-gray-700">You don't pay your maximum for each unit, just the market price. Gain surplus on inframarginal units.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">📝 Detailed Numerical Example:</h4>
                  <div className="bg-white rounded p-5">
                    <p className="font-bold mb-3">Scenario: Concert tickets market price = $50 each</p>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-2 rounded font-bold">
                        <span>Person</span>
                        <span>WTP</span>
                        <span>Price Paid</span>
                        <span>CS</span>
                      </div>
                      {[
                        { person: 'Alice', wtp: 100, cs: 50 },
                        { person: 'Bob', wtp: 80, cs: 30 },
                        { person: 'Carol', wtp: 70, cs: 20 },
                        { person: 'Dave', wtp: 60, cs: 10 },
                        { person: 'Eve', wtp: 50, cs: 0 },
                        { person: 'Frank', wtp: 30, cs: 'No buy' },
                      ].map((row, i) => (
                        <div key={i} className={`grid grid-cols-4 gap-2 p-2 rounded ${i === 5 ? 'bg-red-100' : 'bg-green-50'}`}>
                          <span className="font-bold">{row.person}</span>
                          <span>${row.wtp}</span>
                          <span>{row.wtp >= 50 ? '$50' : '-'}</span>
                          <span className="font-bold">{typeof row.cs === 'number' ? `$${row.cs}` : row.cs}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-green-100 rounded p-4">
                      <p className="font-bold text-green-900">Total Consumer Surplus = $50 + $30 + $20 + $10 + $0 = $110</p>
                      <p className="text-sm text-gray-700 mt-2">Frank doesn't buy (WTP &lt; Price), so no surplus for him</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                  <h4 className="font-bold text-purple-900 mb-3 text-lg">🔄 Factors Affecting Consumer Surplus:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { factor: 'Price Decreases', effect: 'CS INCREASES ↑', reason: 'Bigger gap between WTP and price; more consumers buy', color: 'green' },
                      { factor: 'Price Increases', effect: 'CS DECREASES ↓', reason: 'Smaller gap; some consumers stop buying', color: 'red' },
                      { factor: 'Demand Increases', effect: 'CS INCREASES ↑', reason: 'Higher willingness to pay at all quantities', color: 'blue' },
                      { factor: 'Perfect Price Discrimination', effect: 'CS = ZERO', reason: 'Firms extract all surplus by charging each consumer their max WTP', color: 'orange' },
                    ].map((item, i) => (
                      <div key={i} className={`bg-${item.color}-100 rounded p-4`}>
                        <p className="font-semibold text-sm mb-2">{item.factor}</p>
                        <p className={`text-xs font-bold text-${item.color}-900 mb-2`}>{item.effect}</p>
                        <p className="text-xs text-gray-700">{item.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
                <h4 className="font-bold text-yellow-900 mb-3 text-xl">💼 Applications & Importance:</h4>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• <strong>Welfare Economics:</strong> Measures how well markets serve consumers</li>
                  <li>• <strong>Policy Analysis:</strong> Evaluate impact of taxes, subsidies, price controls (deadweight loss)</li>
                  <li>• <strong>Business Strategy:</strong> Understanding pricing power and consumer willingness to pay</li>
                  <li>• <strong>Trade Benefits:</strong> Shows consumer gains from lower import prices</li>
                  <li>• <strong>Public Goods:</strong> Helps determine optimal provision levels</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* RISK & UNCERTAINTY - COMPLETE */}
        {activeTab === 'risk' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">⚠️ Risk & Uncertainty - Complete Theory</h2>
              <p className="text-lg opacity-90">Decision-making under uncertain outcomes</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 Risk vs Uncertainty</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-5">
                    <h5 className="font-bold text-gray-800 mb-3 text-lg">RISK</h5>
                    <p className="text-sm text-gray-700 mb-3">Probabilities of outcomes are <strong>KNOWN</strong> or can be estimated objectively.</p>
                    <div className="bg-blue-100 rounded p-3">
                      <p className="text-xs font-bold mb-2">Examples:</p>
                      <ul className="text-xs space-y-1">
                        <li>• Rolling dice: 1/6 for each number</li>
                        <li>• Coin flip: 50% heads, 50% tails</li>
                        <li>• Insurance actuarial tables</li>
                        <li>• Casino games with known odds</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white rounded p-5">
                    <h5 className="font-bold text-gray-800 mb-3 text-lg">UNCERTAINTY</h5>
                    <p className="text-sm text-gray-700 mb-3">Probabilities are <strong>UNKNOWN</strong> or cannot be calculated objectively.</p>
                    <div className="bg-orange-100 rounded p-3">
                      <p className="text-xs font-bold mb-2">Examples:</p>
                      <ul className="text-xs space-y-1">
                        <li>• Future technology disruptions</li>
                        <li>• Climate change impacts</li>
                        <li>• New product success</li>
                        <li>• Geopolitical events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎲 Expected Value & Expected Utility</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 mb-3 text-lg">Expected Value (EV)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">Weighted average of all possible outcomes, using probabilities as weights.</p>
                    </div>
                    <div className="bg-green-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Formula:</p>
                      <p className="font-mono text-center text-lg mb-2">EV = Σ pᵢ × xᵢ</p>
                      <p className="text-xs text-center">Sum of (Probability × Outcome) for all outcomes</p>
                    </div>
                    <div className="bg-yellow-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Example:</p>
                      <div className="text-xs space-y-1">
                        <p>Lottery: 50% chance $100, 50% chance $0</p>
                        <p className="font-mono">EV = 0.5($100) + 0.5($0) = $50</p>
                        <p className="mt-2">Fair game: EV = $50, same as ticket cost</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">Expected Utility (EU)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">Weighted average of utilities from outcomes (not just monetary values).</p>
                    </div>
                    <div className="bg-blue-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Formula:</p>
                      <p className="font-mono text-center text-lg mb-2">EU = Σ pᵢ × U(xᵢ)</p>
                      <p className="text-xs text-center">Sum of (Probability × Utility of outcome)</p>
                    </div>
                    <div className="bg-yellow-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Why Different from EV?</p>
                      <div className="text-xs space-y-1">
                        <p>$50 guaranteed might give MORE utility than 50% of $100</p>
                        <p className="mt-2">People aren't risk-neutral - utility matters, not just expected money</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">👤 Attitudes Toward Risk</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    attitude: 'Risk Averse',
                    definition: 'Prefers certainty over gambles with same expected value. Most common attitude.',
                    utility: 'Diminishing marginal utility of wealth (concave function)',
                    behavior: 'Will pay to avoid risk (buy insurance)',
                    certaintyEquivalent: 'CE < EV',
                    example: 'Prefer $50 guaranteed over 50% chance of $100. Will pay premium for insurance.',
                    graph: 'Concave utility function',
                    realWorld: 'Most people - buy insurance, diversify investments, prefer steady income',
                    icon: '🛡️',
                    color: 'blue'
                  },
                  {
                    attitude: 'Risk Neutral',
                    definition: 'Indifferent between certainty and gamble with same expected value. Only cares about EV.',
                    utility: 'Constant marginal utility (linear function)',
                    behavior: 'Decisions based solely on expected values',
                    certaintyEquivalent: 'CE = EV',
                    example: 'Indifferent between $50 guaranteed vs 50% of $100. Just wants max expected return.',
                    graph: 'Linear utility function',
                    realWorld: 'Rare - some corporations, professional gamblers with large bankrolls',
                    icon: '⚖️',
                    color: 'gray'
                  },
                  {
                    attitude: 'Risk Loving',
                    definition: 'Prefers gambles over certainty with same expected value. Enjoys thrill of risk.',
                    utility: 'Increasing marginal utility (convex function)',
                    behavior: 'Seeks risky opportunities, willing to pay for gambles',
                    certaintyEquivalent: 'CE > EV',
                    example: 'Prefer 50% chance of $100 over $50 guaranteed. Play lotteries even with negative EV.',
                    graph: 'Convex utility function',
                    realWorld: 'Uncommon - professional gamblers, some entrepreneurs, lottery players',
                    icon: '🎰',
                    color: 'red'
                  },
                ].map((type, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${type.color}-50 to-white border-2 border-${type.color}-300 rounded-lg p-5`}>
                    <div className="text-center mb-3">
                      <div className="text-5xl mb-2">{type.icon}</div>
                      <h5 className="font-bold text-gray-800 text-lg">{type.attitude}</h5>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-3">
                        <p className="text-xs font-bold mb-1">Definition:</p>
                        <p className="text-xs text-gray-700">{type.definition}</p>
                      </div>
                      <div className={`bg-${type.color}-100 rounded p-3`}>
                        <p className="text-xs font-bold mb-1">Utility Function:</p>
                        <p className="text-xs text-gray-700">{type.utility}</p>
                      </div>
                      <div className="bg-yellow-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Example:</p>
                        <p className="text-xs text-gray-700">{type.example}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-xs font-bold mb-1">Certainty Equivalent:</p>
                        <p className="font-mono text-xs text-gray-700">{type.certaintyEquivalent}</p>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Real World:</p>
                        <p className="text-xs text-gray-600">{type.realWorld}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Risk Reduction Strategies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    strategy: 'Insurance',
                    description: 'Pay premium to transfer risk to insurance company. Trade certain small loss for protection against large uncertain loss.',
                    example: 'Health insurance, car insurance, life insurance',
                    whoUses: 'Risk-averse individuals and businesses',
                    math: 'Pay premium < expected loss, insurer pools risk'
                  },
                  {
                    strategy: 'Diversification',
                    description: 'Spread investments across multiple assets to reduce overall risk. "Don\'t put all eggs in one basket."',
                    example: 'Invest in stocks, bonds, real estate, different sectors',
                    whoUses: 'All investors seeking to reduce unsystematic risk',
                    math: 'Portfolio variance < weighted avg of individual variances'
                  },
                  {
                    strategy: 'Hedging',
                    description: 'Take offsetting position to reduce exposure to price risk. Lock in future prices.',
                    example: 'Farmer sells futures contracts to lock in crop prices before harvest',
                    whoUses: 'Businesses exposed to commodity/currency price fluctuations',
                    math: 'Gain on one position offsets loss on another'
                  },
                  {
                    strategy: 'Information Gathering',
                    description: 'Reduce uncertainty through research, testing, due diligence before making decisions.',
                    example: 'Test drive car, read reviews, market research, hire consultant',
                    whoUses: 'Consumers and businesses making major decisions',
                    math: 'Value of info = Expected gain from better decision - cost of info'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border-2 border-orange-200 rounded-lg p-5">
                    <h5 className="font-bold text-orange-900 text-lg mb-3">{item.strategy}</h5>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-700">{item.description}</p>
                      <div className="bg-orange-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Example:</p>
                        <p className="text-xs text-gray-700">{item.example}</p>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Who Uses:</p>
                        <p className="text-xs text-gray-700">{item.whoUses}</p>
                      </div>
                      <div className="bg-blue-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Math:</p>
                        <p className="text-xs text-gray-700">{item.math}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPECTED UTILITY THEORY - COMPLETE */}
        {activeTab === 'expected' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🎲 Expected Utility Theory - Von Neumann-Morgenstern</h2>
              <p className="text-lg opacity-90">Rational decision-making under risk</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Expected Utility Theory?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Expected Utility Theory</strong> (developed by John von Neumann and Oskar Morgenstern, 1944) is a normative theory of how rational individuals should make decisions under risk. It states that people choose the option with highest expected utility, not highest expected value.
                </p>
                <div className="bg-white rounded p-5">
                  <p className="font-bold mb-3">Core Principle:</p>
                  <p className="text-gray-700">Rational decision-makers maximize <strong>expected utility</strong> rather than expected monetary value. Utility accounts for risk preferences.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📐 The Expected Utility Formula</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <div className="bg-white rounded p-6 mb-4">
                  <p className="font-bold text-center text-2xl mb-4">Expected Utility Formula:</p>
                  <p className="font-mono text-center text-4xl mb-4">EU(L) = Σ pᵢ · U(xᵢ)</p>
                  <p className="text-center text-sm text-gray-600 mb-4">Expected Utility of Lottery L = Sum of (Probability × Utility of each outcome)</p>
                  <div className="bg-purple-100 rounded p-4 mt-4">
                    <p className="text-sm mb-2"><strong>Where:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>L</strong> = Lottery or risky prospect</li>
                      <li>• <strong>pᵢ</strong> = Probability of outcome i</li>
                      <li>• <strong>U(xᵢ)</strong> = Utility of outcome i</li>
                      <li>• <strong>Σ</strong> = Sum over all possible outcomes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5">
                  <p className="font-bold text-yellow-900 mb-3 text-lg">📝 Detailed Example:</p>
                  <div className="bg-white rounded p-4 space-y-3">
                    <div>
                      <p className="font-bold mb-2">Lottery A: 50% chance $100, 50% chance $0</p>
                      <p className="text-sm mb-2">Assume utility function: U(x) = √x</p>
                      <div className="bg-blue-100 rounded p-3 mt-2">
                        <p className="font-mono text-sm">EU(A) = 0.5 × √100 + 0.5 × √0</p>
                        <p className="font-mono text-sm">EU(A) = 0.5 × 10 + 0.5 × 0 = 5</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Option B: $25 guaranteed</p>
                      <div className="bg-green-100 rounded p-3">
                        <p className="font-mono text-sm">U(B) = √25 = 5</p>
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded p-4">
                      <p className="font-bold mb-2">Decision:</p>
                      <p className="text-sm">EU(A) = 5 = U(B) = 5</p>
                      <p className="text-sm font-bold text-purple-900 mt-2">→ Indifferent between A and B (this person is risk averse)</p>
                      <p className="text-xs text-gray-600 mt-2">Note: EV(A) = $50 but person only values it as much as $25 certain!</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔑 Von Neumann-Morgenstern Axioms</h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    axiom: '1. Completeness',
                    statement: 'For any two lotteries A and B, individual can determine: A ≻ B, B ≻ A, or A ~ B',
                    meaning: 'Can always compare and rank risky prospects',
                    example: 'Can compare "50% of $100" vs "$40 guaranteed"'
                  },
                  {
                    axiom: '2. Transitivity',
                    statement: 'If A ≻ B and B ≻ C, then A ≻ C',
                    meaning: 'Preferences are logically consistent',
                    example: 'If prefer lottery A to B, and B to C, must prefer A to C'
                  },
                  {
                    axiom: '3. Continuity',
                    statement: 'If A ≻ B ≻ C, there exists probability p such that: pA + (1-p)C ~ B',
                    meaning: 'Can always find a probability mix of best and worst that equals middle option',
                    example: 'If $100 > $50 > $0, there\'s some % chance of $100 vs $0 that you\'d trade for $50'
                  },
                  {
                    axiom: '4. Independence',
                    statement: 'If A ≻ B, then pA + (1-p)C ≻ pB + (1-p)C for any C and 0 < p ≤ 1',
                    meaning: 'Preferences between lotteries don\'t change when mixed with third option',
                    example: 'If prefer A to B, still prefer when both mixed with same chance of C'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-lg p-5">
                    <h5 className="font-bold text-gray-800 text-lg mb-3">{item.axiom}</h5>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-4">
                        <p className="text-sm font-bold mb-2">Formal Statement:</p>
                        <p className="font-mono text-sm text-gray-800">{item.statement}</p>
                      </div>
                      <div className="bg-blue-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">What It Means:</p>
                        <p className="text-sm text-gray-700">{item.meaning}</p>
                      </div>
                      <div className="bg-yellow-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Example:</p>
                        <p className="text-sm text-gray-700">{item.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3 text-xl">🎯 Implications of Expected Utility Theory:</h4>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• <strong>Rational Choice:</strong> If axioms hold, individual acts as if maximizing expected utility</li>
                  <li>• <strong>Risk Attitudes:</strong> Utility function shape determines risk aversion (concave = risk averse)</li>
                  <li>• <strong>Insurance Puzzle:</strong> Explains why risk-averse people buy insurance even when EV negative</li>
                  <li>• <strong>St. Petersburg Paradox:</strong> Resolves paradox of infinite expected value but finite willingness to pay</li>
                  <li>• <strong>Portfolio Choice:</strong> Foundation for modern portfolio theory and asset pricing</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* REVEALED PREFERENCE - COMPLETE */}
        {activeTab === 'revealed' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🔍 Revealed Preference Theory - Complete</h2>
              <p className="text-lg opacity-90">Actions speak louder than words - inferring preferences from choices</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Revealed Preference Theory?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Revealed Preference Theory</strong> (developed by Paul Samuelson, 1938) states that consumer preferences can be revealed through their actual purchasing behavior rather than asking them directly. "Actions reveal preferences."
                </p>
                <div className="bg-white rounded p-5">
                  <p className="font-bold mb-3">Core Principle:</p>
                  <p className="text-gray-700">"If a consumer chooses bundle A when bundle B was also affordable, then A is revealed preferred to B." We observe choices, infer preferences.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📐 The Weak Axiom of Revealed Preference (WARP)</h3>
              <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-6 mb-6">
                <div className="bg-white rounded p-6 mb-4">
                  <p className="font-bold text-center text-2xl mb-4">WARP Statement:</p>
                  <p className="text-center text-lg mb-3">If bundle A is chosen when bundle B is available and affordable,</p>
                  <p className="text-center text-lg mb-3">then B cannot be chosen when A is available and affordable</p>
                  <p className="text-center text-lg font-bold text-teal-900">(unless both are chosen, meaning indifferent)</p>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5">
                  <p className="font-bold text-yellow-900 mb-3 text-lg">📝 Detailed Example:</p>
                  <div className="bg-white rounded p-5 space-y-4">
                    <div>
                      <p className="font-bold mb-2">Situation 1:</p>
                      <ul className="text-sm space-y-1 mb-2">
                        <li>• Budget: $100</li>
                        <li>• Prices: Apples $2, Bananas $1</li>
                        <li>• Bundle A: 30 apples, 40 bananas (costs $100)</li>
                        <li>• Bundle B: 20 apples, 60 bananas (costs $100)</li>
                        <li className="font-bold text-green-800">→ Consumer chooses A</li>
                      </ul>
                      <div className="bg-teal-100 rounded p-3">
                        <p className="text-sm font-bold">Revealed: A ≻ B (A revealed preferred to B)</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-bold mb-2">Situation 2 (Later, different prices):</p>
                      <ul className="text-sm space-y-1 mb-2">
                        <li>• Budget: still $100</li>
                        <li>• New Prices: Apples $1, Bananas $2</li>
                        <li>• Bundle A: 30 apples, 40 bananas (now costs $110 - not affordable!)</li>
                        <li>• Bundle B: 20 apples, 60 bananas (now costs $140 - not affordable!)</li>
                        <li>• Bundle C: 40 apples, 30 bananas (costs $100)</li>
                      </ul>
                    </div>

                    <div className="bg-green-100 rounded p-4">
                      <p className="font-bold text-green-900 mb-2">✓ WARP SATISFIED:</p>
                      <p className="text-sm">Consumer chose A over B when both affordable. Now B is not affordable, so no violation possible. Consistent behavior!</p>
                    </div>

                    <div className="bg-red-100 rounded p-4">
                      <p className="font-bold text-red-900 mb-2">✗ WARP VIOLATION Example:</p>
                      <p className="text-sm">If in Situation 2, both A and B somehow became affordable again, and consumer chose B, this VIOLATES WARP (previously revealed A ≻ B).</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Strong Axiom of Revealed Preference (SARP)</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <div className="bg-white rounded p-6 mb-4">
                  <p className="font-bold text-center text-2xl mb-4">SARP Statement:</p>
                  <p className="text-center text-lg mb-3">If A is directly or indirectly revealed preferred to B,</p>
                  <p className="text-center text-lg mb-3">then B cannot be directly or indirectly revealed preferred to A</p>
                  <p className="text-center text-sm text-gray-600 mt-3">(Stronger version - prevents cycles through multiple observations)</p>
                </div>

                <div className="bg-purple-100 rounded p-5 mb-4">
                  <p className="font-bold mb-3">Direct vs Indirect Revealed Preference:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-bold mb-1">Direct:</p>
                      <p>A chosen when B affordable → A directly revealed preferred to B</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-bold mb-1">Indirect (Chain):</p>
                      <p>If A ≻ B (direct) and B ≻ C (direct), then A ≻ C (indirect)</p>
                      <p className="text-xs text-gray-600 mt-1">Follows transitivity through observation chain</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-5">
                  <p className="font-bold text-yellow-900 mb-3">Example of SARP:</p>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm mb-2">Observations:</p>
                    <ul className="text-sm space-y-1 mb-3">
                      <li>• Situation 1: Choose A when B affordable → A ≻ B</li>
                      <li>• Situation 2: Choose B when C affordable → B ≻ C</li>
                      <li>• By transitivity: A ≻ C (indirect)</li>
                    </ul>
                    <p className="text-sm font-bold text-purple-900">SARP: C cannot be revealed preferred to A (directly or indirectly)</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6 mb-6">
                <h4 className="font-bold text-green-900 mb-3 text-xl">💡 Why Revealed Preference Matters:</h4>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• <strong>Practical:</strong> Don't need to ask consumers (actions more reliable than stated preferences)</li>
                  <li>• <strong>Testable:</strong> Can verify if consumer behavior is rational by checking for violations</li>
                  <li>• <strong>Policy Analysis:</strong> Infer welfare effects from observed choices</li>
                  <li>• <strong>Price Indices:</strong> Foundation for constructing cost-of-living indices (e.g., CPI)</li>
                  <li>• <strong>Market Research:</strong> Companies observe purchase patterns to understand preferences</li>
                  <li>• <strong>No Utility Function Needed:</strong> Can analyze without assuming specific utility form</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3 text-xl">🔬 Applications:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { app: 'Consumer Research', desc: 'Companies track purchases to infer preferences rather than surveys' },
                    { app: 'Price Index', desc: 'CPI and inflation measures based on revealed preference theory' },
                    { app: 'Welfare Analysis', desc: 'Determine if consumers better off after policy changes' },
                    { app: 'Behavioral Economics', desc: 'Test if real behavior matches rational choice predictions' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded p-4">
                      <p className="font-bold text-sm mb-2">{item.app}</p>
                      <p className="text-xs text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER - COMPLETE */}
      <footer className="bg-gradient-to-r from-purple-800 via-pink-800 to-red-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4">🎓 Unit 2 COMPLETE - 100+ Pages Mastered!</h3>
            <p className="text-2xl mb-6 opacity-90">You now understand complete consumer behavior theory!</p>
            
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">👤</div>
                <div className="font-bold text-lg mb-2">Preferences</div>
                <div className="text-sm opacity-90">3 Axioms Complete</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">😊</div>
                <div className="font-bold text-lg mb-2">Utility</div>
                <div className="text-sm opacity-90">TU, MU, Maximization</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">📊</div>
                <div className="font-bold text-lg mb-2">Curves</div>
                <div className="text-sm opacity-90">IC, Budget, ICC, PCC</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">🔄</div>
                <div className="font-bold text-lg mb-2">Effects</div>
                <div className="text-sm opacity-90">SE, IE, Slutsky, Hicks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">⚠️</div>
                <div className="font-bold text-lg mb-2">Risk</div>
                <div className="text-sm opacity-90">EU, Attitudes, WARP</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h4 className="font-bold text-2xl mb-4">📚 Complete Topics Covered:</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>✓ Consumer Preferences (Complete)</div>
                <div>✓ Utility Theory (TU, MU, Diminishing MU)</div>
                <div>✓ Indifference Curves (All Properties)</div>
                <div>✓ Budget Constraints (All Shifts)</div>
                <div>✓ Consumer Equilibrium</div>
                <div>✓ Income Consumption Curve (ICC)</div>
                <div>✓ Price Consumption Curve (PCC)</div>
                <div>✓ Engel Curves (All Types)</div>
                <div>✓ Substitution Effect (SE)</div>
                <div>✓ Income Effect (IE)</div>
                <div>✓ Slutsky Decomposition</div>
                <div>✓ Hicks Decomposition</div>
                <div>✓ Normal Goods (Necessity & Luxury)</div>
                <div>✓ Inferior Goods</div>
                <div>✓ Giffen Goods (Complete)</div>
                <div>✓ Consumer Surplus (Welfare)</div>
                <div>✓ Risk vs Uncertainty</div>
                <div>✓ Expected Value & Expected Utility</div>
                <div>✓ Risk Attitudes (Averse, Neutral, Loving)</div>
                <div>✓ Von Neumann-Morgenstern Axioms</div>
                <div>✓ Revealed Preference (WARP & SARP)</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-3xl font-bold mb-3">🌟 YOU'RE EXAM READY! 🌟</p>
              <p className="text-lg opacity-75 mb-2">Unit 2 - Consumer Behavior Theory | Complete 100+ Page Coverage</p>
              <p className="text-sm opacity-50 mt-4">Every concept from PDF | Theory + Examples + Interactive Charts</p>
              <p className="text-xs opacity-50 mt-2">Made with ❤️ for your success</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50"
        title="Back to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Styles */}
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

        html {
          scroll-behavior: smooth;
        }

        .prose {
          max-width: none;
        }

        .prose p {
          margin-bottom: 1em;
        }

        .prose ul {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
      `}</style>
    </div>
  )
}
