'use client'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function EconomicsUnit1Complete() {
  const [activeTab, setActiveTab] = useState('intro')

  // Chart Data
  const demandData = [
    { price: 10, quantity: 25 }, { price: 20, quantity: 20 }, { price: 30, quantity: 15 },
    { price: 40, quantity: 10 }, { price: 50, quantity: 7 }, { price: 60, quantity: 5 },
  ]

  const supplyData = [
    { price: 10, quantity: 2 }, { price: 20, quantity: 4 }, { price: 30, quantity: 7 },
    { price: 40, quantity: 10 }, { price: 50, quantity: 13 }, { price: 60, quantity: 16 },
  ]

  const equilibriumData = [
    { price: 10, demand: 25, supply: 2 }, { price: 20, demand: 20, supply: 4 },
    { price: 30, demand: 15, supply: 7 }, { price: 35, demand: 12, supply: 10 },
    { price: 40, demand: 10, supply: 13 }, { price: 50, demand: 7, supply: 16 },
  ]

  const costData = [
    { q: 0, tc: 100, fc: 100, vc: 0, mc: 0, ac: 0 },
    { q: 1, tc: 150, fc: 100, vc: 50, mc: 50, ac: 150 },
    { q: 2, tc: 190, fc: 100, vc: 90, mc: 40, ac: 95 },
    { q: 3, tc: 220, fc: 100, vc: 120, mc: 30, ac: 73 },
    { q: 4, tc: 260, fc: 100, vc: 160, mc: 40, ac: 65 },
    { q: 5, tc: 310, fc: 100, vc: 210, mc: 50, ac: 62 },
  ]

  const consumptionData = [
    { income: 0, consumption: 40, saving: -40 },
    { income: 100, consumption: 100, saving: 0 },
    { income: 200, consumption: 160, saving: 40 },
    { income: 300, consumption: 220, saving: 80 },
    { income: 400, consumption: 280, saving: 120 },
  ]

  const tabs = [
    { id: 'intro', label: 'Introduction', icon: '📖' },
    { id: 'principles', label: '10 Principles', icon: '📚' },
    { id: 'market', label: 'Market Theory', icon: '🏪' },
    { id: 'demand', label: 'Demand Theory', icon: '📉' },
    { id: 'supply', label: 'Supply Theory', icon: '📈' },
    { id: 'equilibrium', label: 'Equilibrium', icon: '⚖️' },
    { id: 'elasticity', label: 'Elasticity', icon: '🔄' },
    { id: 'costs', label: 'Cost Theory', icon: '💰' },
    { id: 'consumption', label: 'Consumption', icon: '🛒' },
    { id: 'investment', label: 'Investment', icon: '💼' },
    { id: 'liquidity', label: 'Liquidity', icon: '💵' },
    { id: 'macro', label: 'Macro Theory', icon: '🌍' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Economics Unit 1 - Complete Theory & Concepts
          </h1>
          <p className="text-sm text-gray-600 mt-1">Managerial Economics | Full Explanations with Examples</p>
        </div>
      </header>

      <nav className="bg-white border-b sticky top-[73px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === tab.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">📖 Welcome to Economics!</h2>
              <p className="text-lg mb-4">Economics is the study of how society manages its scarce resources. Let's understand the fundamental concepts that will help you master this subject.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 What is Economics?</h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg mb-4">
                  <strong>Economics</strong> is a social science that studies how individuals, businesses, governments, and societies make choices about using limited resources to satisfy unlimited wants and needs.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                  <h4 className="font-bold text-blue-900 mb-3 text-xl">🔑 Key Economic Concepts:</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-blue-800">1. Scarcity</p>
                      <p className="text-gray-700">Resources are limited, but human wants are unlimited. This is the fundamental economic problem.</p>
                      <p className="text-sm text-gray-600 italic mt-1">Example: There's only 24 hours in a day, but we want to do many things.</p>
                    </div>
                    <div>
                      <p className="font-bold text-blue-800">2. Choice</p>
                      <p className="text-gray-700">Because of scarcity, we must make choices about how to allocate resources.</p>
                      <p className="text-sm text-gray-600 italic mt-1">Example: Should you study or work? Save or spend?</p>
                    </div>
                    <div>
                      <p className="font-bold text-blue-800">3. Opportunity Cost</p>
                      <p className="text-gray-700">The value of the next best alternative forgone when making a choice.</p>
                      <p className="text-sm text-gray-600 italic mt-1">Example: If you study for 2 hours, the opportunity cost is the money you could have earned working those 2 hours.</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                    <h4 className="font-bold text-green-800 mb-3 text-lg">📊 Microeconomics</h4>
                    <p className="text-gray-700 mb-3">Studies individual decision-makers:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Individual consumers</li>
                      <li>Individual firms</li>
                      <li>Specific markets</li>
                      <li>Resource allocation</li>
                      <li>Price determination</li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-3">Example: How does Apple decide iPhone prices?</p>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                    <h4 className="font-bold text-purple-800 mb-3 text-lg">🌍 Macroeconomics</h4>
                    <p className="text-gray-700 mb-3">Studies the economy as a whole:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>National income (GDP)</li>
                      <li>Unemployment rates</li>
                      <li>Inflation</li>
                      <li>Economic growth</li>
                      <li>International trade</li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-3">Example: What causes inflation in a country?</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                  <h4 className="font-bold text-yellow-800 mb-3 text-lg">🎓 What is Managerial Economics?</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Managerial Economics</strong> applies economic theory and methods to business decision-making. It bridges the gap between economic theory and business practice.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Uses of Managerial Economics:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Demand forecasting</li>
                        <li>Production planning</li>
                        <li>Cost analysis</li>
                        <li>Pricing strategies</li>
                        <li>Profit maximization</li>
                        <li>Resource allocation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Real-World Applications:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Setting product prices</li>
                        <li>Deciding production levels</li>
                        <li>Market entry decisions</li>
                        <li>Investment analysis</li>
                        <li>Risk management</li>
                        <li>Strategic planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 10 PRINCIPLES - DETAILED */}
        {activeTab === 'principles' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">📚 Gregory Mankiw's 10 Principles of Economics</h2>
              <p className="text-lg opacity-90">These principles form the foundation of economic thinking. Master these to understand how economies work!</p>
            </div>

            {/* Detailed Principles */}
            {[
              {
                num: 1,
                title: 'People Face Tradeoffs',
                theory: 'In economics, a tradeoff refers to the concept that to gain something, you must give up something else. This is because resources are scarce, and every choice involves sacrificing alternatives.',
                explanation: 'Whenever you make a decision, you face a tradeoff. You can\'t have everything you want, so you must choose between different options. This applies to individuals, businesses, and governments.',
                keyPoints: [
                  'Society faces tradeoffs: "guns vs. butter" (military vs. civilian goods)',
                  'Individuals face tradeoffs: work vs. leisure, study vs. entertainment',
                  'Efficiency vs. Equity tradeoff: society seeks to maximize benefits but also wants fair distribution',
                ],
                realExample: 'A government with a $100 billion budget must choose: Should it spend more on healthcare or education? More on one means less on the other. Similarly, as a student, if you have 4 hours of free time, spending 2 hours studying means 2 less hours for entertainment.',
                formula: 'Benefit of Choice A - Benefit of Choice B = Net Benefit',
                icon: '⚖️',
                color: 'blue'
              },
              {
                num: 2,
                title: 'The Cost of Something is What You Give Up to Get It',
                theory: 'The true cost of any decision is not just the monetary price, but the value of the best alternative you give up. This is called OPPORTUNITY COST - the most important concept in economics.',
                explanation: 'When making decisions, people compare benefits and costs. The cost of something is what you give up to obtain it. Economists call this the "opportunity cost" - the value of the next best alternative foregone.',
                keyPoints: [
                  'Opportunity cost is the second best alternative foregone',
                  'It\'s not just about money - includes time, effort, and missed opportunities',
                  'Helps in rational decision-making by comparing alternatives',
                  'Implicit costs (time, effort) are often more important than explicit costs (money)',
                ],
                realExample: 'You have $50,000 and two options: (A) Go to college for 4 years, or (B) Start working immediately earning $30,000/year. If you choose college, your opportunity cost is: $30,000 × 4 years = $120,000 in forgone wages, PLUS the $50,000 college fees. Total opportunity cost = $170,000. This is the TRUE cost of college!',
                formula: 'Opportunity Cost = Value of Next Best Alternative',
                icon: '💸',
                color: 'green'
              },
              {
                num: 3,
                title: 'Rational People Think at the Margin',
                theory: 'Marginal analysis means examining the benefits and costs of doing a little bit more or a little bit less of an activity. Rational decision-makers only take action if the marginal benefit exceeds the marginal cost.',
                explanation: 'People make decisions by comparing marginal benefits (MB) with marginal costs (MC). They will do something if MB > MC, and stop when MB = MC. This is called marginal thinking.',
                keyPoints: [
                  'Marginal = additional or incremental change',
                  'Marginal Benefit (MB) = additional benefit from one more unit',
                  'Marginal Cost (MC) = additional cost of one more unit',
                  'Rational decision: Do it if MB > MC, Stop when MB = MC',
                  'Sunk costs (past costs) should be ignored',
                ],
                realExample: 'A factory produces 100 widgets. Should it produce the 101st? Calculate: MB of 101st widget = $15 revenue, MC of 101st widget = $12 cost. Since $15 > $12, produce it! Keep producing until MB = MC. If the 105th widget has MB = $12 and MC = $12, that\'s where you stop.',
                formula: 'Optimal Decision: MB = MC',
                icon: '🤔',
                color: 'purple'
              },
              {
                num: 4,
                title: 'People Respond to Incentives',
                theory: 'An incentive is something that motivates a person to act. Because people make decisions by weighing costs and benefits, their behavior changes when costs or benefits change. This is fundamental to understanding economic behavior.',
                explanation: 'Incentives are rewards or punishments that influence behavior. Positive incentives encourage actions, negative incentives discourage them. Understanding incentives helps predict behavior and design policies.',
                keyPoints: [
                  'Incentives can be financial (money) or non-financial (recognition)',
                  'When benefits increase or costs decrease, people do more',
                  'When costs increase or benefits decrease, people do less',
                  'Unintended consequences: policies may create unexpected incentives',
                ],
                realExample: 'Singapore wanted to reduce congestion. Solution: They imposed an Electronic Road Pricing (ERP) system - drivers pay more during peak hours. Result: Traffic reduced by 45%! People responded to the price incentive by: (1) Traveling at off-peak times, (2) Using public transport, (3) Carpooling. Another example: Higher cigarette taxes → Less smoking. When Harvard offered $1,000 scholarships → Applications increased 20%.',
                formula: 'Behavior = f(Incentives)',
                icon: '🎯',
                color: 'red'
              },
              {
                num: 5,
                title: 'Trade Can Make Everyone Better Off',
                theory: 'Trade allows people to specialize in what they do best and enjoy a greater variety of goods and services. Countries benefit from trade even if one country is better at producing everything (comparative advantage principle).',
                explanation: 'Trade is not a zero-sum game. When people or countries trade, both can benefit. The key is COMPARATIVE ADVANTAGE - focusing on what you do relatively better, even if you\'re not the absolute best.',
                keyPoints: [
                  'Absolute advantage: Producing more with same resources',
                  'Comparative advantage: Lower opportunity cost of production',
                  'Specialization + Trade = Higher total output',
                  'Both parties gain from trade',
                  'Applies to individuals, companies, and countries',
                ],
                realExample: 'Doctor (good at medicine, okay at cleaning) vs. Cleaner (good at cleaning). Doctor earns $200/hour, cleaner earns $20/hour. Should doctor clean their own house (2 hours) or hire cleaner? If doctor works 2 hours = $400 earned - $40 paid to cleaner = $360 net gain. If doctor cleans = $0 earned. Trade makes both better off! Similarly, USA makes software, China makes textiles - both benefit from trade.',
                formula: 'Comparative Advantage = Lowest Opportunity Cost',
                icon: '🌍',
                color: 'indigo'
              },
            ].map((p, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-${p.color}-600 text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0`}>
                    {p.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{p.icon}</span>
                      <h3 className="font-bold text-gray-800 text-2xl">{p.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-blue-900 mb-3 text-lg">📖 Theory:</h4>
                    <p className="text-gray-800 leading-relaxed">{p.theory}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-900 mb-3 text-lg">💡 Explanation:</h4>
                    <p className="text-gray-800 leading-relaxed">{p.explanation}</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-purple-900 mb-3 text-lg">🔑 Key Points:</h4>
                    <ul className="space-y-2">
                      {p.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-800">
                          <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
                    <h4 className="font-bold text-yellow-900 mb-3 text-lg">🌟 Real-World Example:</h4>
                    <p className="text-gray-800 leading-relaxed">{p.realExample}</p>
                  </div>

                  {p.formula && (
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <p className="font-mono text-lg font-bold text-gray-800">{p.formula}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">🎯 Master These Principles!</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                These 10 principles are the foundation of ALL economic thinking. Every economic concept, model, and theory builds upon these principles. Understanding them deeply will make the rest of economics much easier to grasp!
              </p>
            </div>
          </div>
        )}

        {/* MARKET THEORY - COMPLETE */}
        {activeTab === 'market' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🏪 Market Theory - Complete Understanding</h2>
              <p className="text-lg opacity-90">Markets are the foundation of how economies allocate resources. Let's understand how they work!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📖 What is a Market?</h3>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">Definition & Theory:</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  A <strong>market</strong> is an institution or mechanism that brings together buyers (demanders) and sellers (suppliers) of a particular good or service. Markets can be physical (like a farmers' market) or virtual (like Amazon).
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-gray-700 mb-2"><strong>Key Components:</strong></p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>• Buyers:</strong> People who want to purchase goods/services (create demand)</li>
                    <li><strong>• Sellers:</strong> People/firms who want to sell goods/services (create supply)</li>
                    <li><strong>• Price Mechanism:</strong> The system that determines equilibrium price</li>
                    <li><strong>• Competition:</strong> Rivalry among buyers and sellers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-green-900 mb-4 text-xl">💡 How Markets Work:</h4>
                <div className="space-y-4 text-gray-800">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">1. Price Discovery</p>
                    <p>Markets help discover the "right" price through interaction of supply and demand. When there are many buyers and sellers, no single person can control the price.</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">2. Resource Allocation</p>
                    <p>Markets allocate scarce resources to their most valued uses. If consumers want more iPhones, prices rise, signaling firms to produce more.</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">3. Invisible Hand (Adam Smith)</p>
                    <p>Self-interested behavior in competitive markets leads to socially beneficial outcomes. Bakers don't make bread out of kindness - they do it for profit, but society benefits!</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-8">🏢 Types of Market Structures</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    type: 'Perfect Competition',
                    theory: 'A market with many buyers and sellers trading identical products, where no single buyer or seller can influence the price. This is the theoretical ideal.',
                    characteristics: [
                      'Many buyers and many sellers',
                      'Homogeneous (identical) products',
                      'Perfect information available to all',
                      'Free entry and exit from market',
                      'No individual can affect market price (price takers)',
                      'No barriers to entry',
                    ],
                    examples: 'Agricultural products (wheat, rice), stock markets, foreign exchange',
                    priceControl: 'NO - firms are price TAKERS',
                    profits: 'Zero economic profit in long run',
                    efficiency: 'Allocatively and productively efficient',
                    icon: '🌾',
                    color: 'green'
                  },
                  {
                    type: 'Monopoly',
                    theory: 'A market with only ONE seller who has complete control over the supply and price. This seller is the entire market.',
                    characteristics: [
                      'Single seller, many buyers',
                      'No close substitutes available',
                      'High barriers to entry prevent competition',
                      'Price maker - can set any price',
                      'Significant market power',
                      'Examples of barriers: patents, licenses, high capital requirements',
                    ],
                    examples: 'Public utilities (electricity, water in specific areas), Microsoft Windows (near monopoly), patented drugs',
                    priceControl: 'YES - complete price MAKER',
                    profits: 'Can earn supernormal profits',
                    efficiency: 'Allocatively inefficient (underproduces)',
                    icon: '👑',
                    color: 'red'
                  },
                  {
                    type: 'Oligopoly',
                    theory: 'A market dominated by a FEW large firms. These firms are interdependent - each firm\'s decisions affect others.',
                    characteristics: [
                      'Few sellers dominate the market',
                      'Products may be identical or differentiated',
                      'Significant barriers to entry',
                      'Strategic interaction between firms',
                      'Price rigidity (sticky prices)',
                      'Collusion possible (cartels)',
                    ],
                    examples: 'Airlines (Emirates, British Airways), telecommunications (Vodafone, AT&T), automobiles (Ford, Toyota)',
                    priceControl: 'Some price making power',
                    profits: 'Supernormal profits possible',
                    efficiency: 'Inefficient, but innovates',
                    icon: '🏢',
                    color: 'purple'
                  },
                  {
                    type: 'Monopolistic Competition',
                    theory: 'Many firms sell similar but NOT identical products. Each firm has some pricing power due to product differentiation.',
                    characteristics: [
                      'Many sellers and buyers',
                      'Differentiated products (not identical)',
                      'Some control over price',
                      'Easy entry and exit',
                      'Non-price competition (branding, advertising)',
                      'Downward sloping demand curve',
                    ],
                    examples: 'Restaurants (each unique menu), clothing brands, retail stores, hairdressers',
                    priceControl: 'Limited price making power',
                    profits: 'Zero economic profit in long run',
                    efficiency: 'Excess capacity exists',
                    icon: '🛍️',
                    color: 'blue'
                  },
                ].map((market, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${market.color}-50 to-white border-2 border-${market.color}-300 rounded-xl p-6 hover:shadow-xl transition-all`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{market.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{market.type}</h4>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-bold text-blue-900 mb-2">📖 Theory:</p>
                      <p className="text-gray-800 text-sm leading-relaxed">{market.theory}</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 mb-4">
                      <p className="text-sm font-bold text-gray-800 mb-3">Characteristics:</p>
                      <ul className="space-y-1">
                        {market.characteristics.map((char, i) => (
                          <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                            <span className={`text-${market.color}-600 flex-shrink-0`}>✓</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`bg-${market.color}-100 rounded-lg p-4 space-y-2 text-xs`}>
                      <p><strong>Examples:</strong> {market.examples}</p>
                      <p><strong>Price Control:</strong> {market.priceControl}</p>
                      <p><strong>Profits:</strong> {market.profits}</p>
                      <p><strong>Efficiency:</strong> {market.efficiency}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mt-8">
                <h4 className="font-bold text-yellow-900 mb-3 text-xl">🎯 Why Market Structure Matters:</h4>
                <p className="text-gray-800 leading-relaxed mb-3">
                  The type of market structure determines:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li><strong>• Pricing Strategy:</strong> Can firms set prices or must they accept market prices?</li>
                  <li><strong>• Output Levels:</strong> How much will be produced?</li>
                  <li><strong>• Economic Efficiency:</strong> Are resources allocated optimally?</li>
                  <li><strong>• Consumer Welfare:</strong> Do consumers get the best deal?</li>
                  <li><strong>• Innovation:</strong> Do firms invest in R&D?</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* DEMAND THEORY - COMPLETE WITH ALL DETAILS */}
        {activeTab === 'demand' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">📉 Demand Theory - Complete Explanation</h2>
              <p className="text-lg opacity-90">Understanding demand is crucial for pricing, forecasting, and business decisions!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📖 What is Demand?</h3>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">Complete Definition:</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Demand</strong> is the quantity of a good or service that consumers are <strong>willing AND able to purchase</strong> at various prices during a specific time period, holding all other factors constant (ceteris paribus).
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-bold text-gray-800 mb-3">Key Words Explained:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>• Willing:</strong> The consumer wants/desires the product</li>
                    <li><strong>• Able:</strong> The consumer has the purchasing power (money) to buy it</li>
                    <li><strong>• At various prices:</strong> Demand changes with price - this creates the demand curve</li>
                    <li><strong>• Time period:</strong> Demand is measured per day, week, month, etc.</li>
                    <li><strong>• Ceteris paribus:</strong> Latin for "all other things being equal" - income, preferences, etc. remain constant</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-green-900 mb-4 text-xl">🔑 The Law of Demand</h4>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    <strong>The Law of Demand states:</strong> "Other things being equal (ceteris paribus), when the price of a good rises, the quantity demanded falls; when the price falls, the quantity demanded rises."
                  </p>
                  <p className="text-gray-700 mb-4">This creates an <strong>inverse (negative) relationship</strong> between price and quantity demanded.</p>
                  
                  <div className="bg-green-100 rounded p-4 mb-4">
                    <p className="font-bold text-green-900 mb-2">Why Does This Happen?</p>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-800">1. Income Effect:</p>
                        <p className="text-gray-700">When price falls, real income increases (purchasing power), so people buy more. Example: If iPhone price drops from $1000 to $500, you can now afford MORE with same income.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">2. Substitution Effect:</p>
                        <p className="text-gray-700">When price rises, consumers switch to cheaper alternatives. Example: If coffee price rises, people buy more tea instead.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">3. Law of Diminishing Marginal Utility:</p>
                        <p className="text-gray-700">Each additional unit consumed gives less satisfaction, so consumers only buy more if price falls. Your first pizza slice is amazing, the 4th is just okay.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 The Demand Curve</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={demandData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quantity" label={{ value: 'Quantity Demanded', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#ef4444" strokeWidth={3} name="Demand Curve" dot={{ fill: '#ef4444', r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded-lg p-4">
                  <p className="text-gray-800 mb-2"><strong>Reading the Curve:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• At price $10 → Quantity demanded = 25 units</li>
                    <li>• At price $30 → Quantity demanded = 15 units</li>
                    <li>• At price $60 → Quantity demanded = 5 units</li>
                    <li>• <strong>Downward slope confirms the Law of Demand!</strong></li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">🔄 Demand vs Quantity Demanded</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">Change in Quantity Demanded</h4>
                  <div className="space-y-3">
                    <p className="text-gray-800"><strong>Cause:</strong> Change in PRICE of the good itself</p>
                    <p className="text-gray-800"><strong>Effect:</strong> Movement ALONG the same demand curve</p>
                    <p className="text-gray-800"><strong>Graph:</strong> Move up/down the curve</p>
                    <div className="bg-white rounded p-3 mt-3">
                      <p className="text-sm text-gray-700"><strong>Example:</strong> Price of apples falls from $5 to $3 per kg. You buy 10 kg instead of 5 kg. This is a movement along the curve.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 mb-3 text-lg">Change in Demand</h4>
                  <div className="space-y-3">
                    <p className="text-gray-800"><strong>Cause:</strong> Change in OTHER factors (income, preferences, etc.)</p>
                    <p className="text-gray-800"><strong>Effect:</strong> SHIFT of the entire demand curve (left or right)</p>
                    <p className="text-gray-800"><strong>Graph:</strong> Entire curve moves</p>
                    <div className="bg-white rounded p-3 mt-3">
                      <p className="text-sm text-gray-700"><strong>Example:</strong> Your income doubles. At EVERY price, you now buy more apples. The entire curve shifts right (increase in demand).</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">📌 Determinants of Demand (Demand Shifters)</h3>
              <p className="text-gray-700 mb-4">These factors shift the ENTIRE demand curve:</p>
              
              <div className="space-y-4">
                {[
                  {
                    factor: '1. Income',
                    theory: 'As consumer income changes, their purchasing power changes, affecting demand for all goods.',
                    types: [
                      {
                        type: 'Normal Goods',
                        effect: 'Income ↑ → Demand ↑ (positive relationship)',
                        examples: 'Luxury cars, branded clothes, vacations, smartphones',
                        explanation: 'When people earn more, they buy MORE of these goods'
                      },
                      {
                        type: 'Inferior Goods',
                        effect: 'Income ↑ → Demand ↓ (negative relationship)',
                        examples: 'Instant noodles, used clothes, public transport, budget brands',
                        explanation: 'When people earn more, they buy LESS of these goods (switch to better alternatives)'
                      }
                    ],
                    icon: '💰',
                    color: 'blue'
                  },
                  {
                    factor: '2. Price of Related Goods',
                    theory: 'Demand for a good depends on prices of related goods - substitutes and complements.',
                    types: [
                      {
                        type: 'Substitute Goods',
                        effect: 'Price of substitute ↑ → Demand for our good ↑',
                        examples: 'Tea & Coffee, Pepsi & Coke, Butter & Margarine',
                        explanation: 'If coffee price rises, people switch to tea (demand for tea increases)'
                      },
                      {
                        type: 'Complement Goods',
                        effect: 'Price of complement ↑ → Demand for our good ↓',
                        examples: 'Cars & Gasoline, Printers & Ink, Smartphones & Apps',
                        explanation: 'If gasoline price rises, people drive less (demand for cars decreases)'
                      }
                    ],
                    icon: '🔄',
                    color: 'green'
                  },
                  {
                    factor: '3. Tastes & Preferences',
                    theory: 'Consumer preferences change due to advertising, trends, health concerns, culture, etc.',
                    effect: 'Favorable change → Demand ↑ | Unfavorable change → Demand ↓',
                    examples: [
                      'Health trend: Demand for organic food ↑, demand for junk food ↓',
                      'Fashion trend: Demand for skinny jeans ↓, demand for baggy jeans ↑',
                      'Celebrity endorsement: Demand for endorsed product ↑'
                    ],
                    icon: '❤️',
                    color: 'pink'
                  },
                  {
                    factor: '4. Expectations',
                    theory: 'What consumers expect about future prices, income, or product availability affects current demand.',
                    scenarios: [
                      {
                        scenario: 'Expect future price increase',
                        effect: 'Buy more NOW (current demand ↑)',
                        example: 'News says iPhone prices will rise next month → People buy now'
                      },
                      {
                        scenario: 'Expect future income increase',
                        effect: 'Buy more NOW on credit (current demand ↑)',
                        example: 'Expecting bonus next month → Buy expensive items now'
                      },
                      {
                        scenario: 'Expect product shortage',
                        effect: 'Hoard/stockpile (current demand ↑)',
                        example: 'COVID: Fear of toilet paper shortage → Everyone bought in bulk'
                      }
                    ],
                    icon: '🔮',
                    color: 'purple'
                  },
                  {
                    factor: '5. Number of Buyers',
                    theory: 'More buyers in the market → Higher market demand | Fewer buyers → Lower market demand',
                    effect: 'Population ↑ → Market demand ↑',
                    examples: [
                      'Population growth: More people → Higher demand for housing, food',
                      'Market expansion: Company enters new country → More buyers → Demand ↑',
                      'Demographic changes: Aging population → Demand for healthcare ↑'
                    ],
                    icon: '👥',
                    color: 'orange'
                  },
                ].map((det, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${det.color}-50 to-white border-2 border-${det.color}-300 rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{det.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{det.factor}</h4>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-bold text-blue-900 mb-2">📖 Theory:</p>
                      <p className="text-gray-800 leading-relaxed">{det.theory}</p>
                    </div>

                    {det.types && (
                      <div className="space-y-3">
                        {det.types.map((type, i) => (
                          <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                            <p className="font-bold text-gray-800 mb-2">{type.type}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> {type.effect}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong> {type.examples}</p>
                            <p className="text-xs text-gray-600 italic">{type.explanation}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {det.scenarios && (
                      <div className="space-y-2">
                        {det.scenarios.map((sc, i) => (
                          <div key={i} className="bg-white rounded p-3 text-sm">
                            <p className="font-semibold text-gray-800">{sc.scenario}</p>
                            <p className="text-gray-700"><strong>Effect:</strong> {sc.effect}</p>
                            <p className="text-xs text-gray-600 italic">{sc.example}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {det.examples && !det.scenarios && !det.types && (
                      <div className={`bg-${det.color}-100 rounded-lg p-4 mt-3`}>
                        <p className="font-bold text-gray-800 mb-2">Examples:</p>
                        <ul className="space-y-1">
                          {det.examples.map((ex, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <span>•</span>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-red-100 border-l-4 border-red-500 rounded-r-lg p-6 mt-8">
                <h4 className="font-bold text-red-900 mb-3 text-xl">🎯 Summary - Demand Theory:</h4>
                <ul className="space-y-2 text-gray-800">
                  <li><strong>• Law of Demand:</strong> Price ↑ → Quantity demanded ↓ (inverse relationship)</li>
                  <li><strong>• Movement:</strong> Price change → Move along curve</li>
                  <li><strong>• Shift:</strong> Other factors change → Entire curve shifts</li>
                  <li><strong>• 5 Main Shifters:</strong> Income, Related Goods, Preferences, Expectations, Number of Buyers</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SUPPLY THEORY - COMPLETE */}
        {activeTab === 'supply' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">📈 Supply Theory - Complete Explanation</h2>
              <p className="text-lg opacity-90">Supply is the other half of the market equation. Master this to understand pricing!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 Complete Definition:</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Supply</strong> is the quantity of a good or service that producers are <strong>willing AND able to produce and sell</strong> at various prices during a specific time period, ceteris paribus.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-3">🔑 Law of Supply:</p>
                  <p className="text-gray-700 mb-3">"Other things being equal, when the price of a good rises, the quantity supplied rises; when price falls, quantity supplied falls."</p>
                  <p className="text-gray-700">This creates a <strong>POSITIVE (direct) relationship</strong> between price and quantity supplied.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-green-900 mb-3 text-lg">💡 Why Does Supply Slope Upward?</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">1. Higher Prices = Higher Profits</p>
                    <p className="text-sm text-gray-700">When prices rise, profit margins increase, making production more attractive. Firms want to produce and sell more to maximize profits.</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">2. Law of Increasing Costs</p>
                    <p className="text-sm text-gray-700">As production increases, marginal costs rise (overtime pay, less efficient workers, older machinery). Higher prices needed to cover these costs.</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">3. New Producers Enter Market</p>
                    <p className="text-sm text-gray-700">Higher prices attract new firms into the market, increasing total market supply.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 The Supply Curve</h3>
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={supplyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quantity" label={{ value: 'Quantity Supplied', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={3} name="Supply Curve" dot={{ fill: '#22c55e', r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-4">
                  <p className="font-bold mb-2">Reading the Curve:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• At price $10 → Firms supply only 2 units (not profitable)</li>
                    <li>• At price $40 → Firms supply 10 units (profitable)</li>
                    <li>• At price $60 → Firms supply 16 units (very profitable)</li>
                    <li>• <strong>Upward slope confirms Law of Supply!</strong></li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📌 Determinants of Supply (Supply Shifters)</h3>
              <div className="space-y-4">
                {[
                  {
                    factor: '1. Input Prices (Cost of Production)',
                    theory: 'When costs of production change, profitability changes, affecting how much firms want to supply.',
                    effect: 'Input costs ↑ → Supply ↓ (shift left) | Input costs ↓ → Supply ↑ (shift right)',
                    examples: [
                      'Wages increase → Production costs up → Supply decreases',
                      'Raw material prices fall → Cheaper to produce → Supply increases',
                      'Energy costs rise → Higher costs → Supply decreases'
                    ],
                    icon: '💵'
                  },
                  {
                    factor: '2. Technology',
                    theory: 'Technological improvements make production more efficient, reducing costs per unit.',
                    effect: 'Better technology → Lower costs → Supply ↑ (shift right)',
                    examples: [
                      'Automation: Robots reduce labor costs → Supply increases',
                      'New machinery: Faster production → Supply increases',
                      'AI: Optimizes processes → Supply increases'
                    ],
                    icon: '🔬'
                  },
                  {
                    factor: '3. Number of Sellers',
                    theory: 'More firms in market → More total supply | Fewer firms → Less total supply',
                    effect: 'New firms enter → Supply ↑ | Firms exit → Supply ↓',
                    examples: [
                      'New smartphone company enters market → Total supply increases',
                      'Restaurant closes → Supply of meals decreases in that area',
                      'Government deregulation → More firms can enter → Supply increases'
                    ],
                    icon: '🏪'
                  },
                  {
                    factor: '4. Expectations',
                    theory: 'Producers\' expectations about future prices affect current supply decisions.',
                    scenarios: [
                      { expect: 'Future price increase', action: 'Hold inventory now (current supply ↓)', example: 'Farmer expects wheat prices to rise next month → Stores wheat now' },
                      { expect: 'Future price decrease', action: 'Sell more now (current supply ↑)', example: 'Tech company expects price war → Sells inventory quickly' }
                    ],
                    icon: '🔮'
                  },
                  {
                    factor: '5. Government Policies',
                    theory: 'Taxes, subsidies, and regulations directly affect production costs and supply.',
                    effects: [
                      { policy: 'Taxes on production', effect: 'Costs ↑ → Supply ↓', example: 'Carbon tax on factories → Supply decreases' },
                      { policy: 'Subsidies (government payments)', effect: 'Costs ↓ → Supply ↑', example: 'Solar panel subsidies → Supply increases' },
                      { policy: 'Regulations', effect: 'Compliance costs → Supply ↓', example: 'Stricter safety rules → Higher costs → Supply decreases' }
                    ],
                    icon: '🏛️'
                  },
                  {
                    factor: '6. Natural/Random Events',
                    theory: 'Weather, disasters, and other unpredictable events affect supply, especially in agriculture.',
                    examples: [
                      'Good weather → Bumper harvest → Agricultural supply ↑',
                      'Drought → Poor harvest → Supply ↓',
                      'Earthquake → Factory damage → Supply ↓',
                      'Disease outbreak → Labor shortage → Supply ↓'
                    ],
                    icon: '🌤️'
                  },
                ].map((det, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-white border-2 border-green-300 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{det.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{det.factor}</h4>
                    </div>
                    <div className="bg-blue-50 rounded p-4 mb-3">
                      <p className="text-sm font-bold text-blue-900 mb-2">📖 Theory:</p>
                      <p className="text-gray-800">{det.theory}</p>
                    </div>
                    {det.effect && (
                      <div className="bg-green-100 rounded p-3 mb-3">
                        <p className="text-sm"><strong>Effect:</strong> {det.effect}</p>
                      </div>
                    )}
                    {det.examples && (
                      <div className="bg-white rounded p-3">
                        <p className="font-semibold text-sm mb-2">Examples:</p>
                        <ul className="space-y-1">
                          {det.examples.map((ex, i) => (
                            <li key={i} className="text-xs text-gray-700">• {ex}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {det.scenarios && (
                      <div className="space-y-2">
                        {det.scenarios.map((sc, i) => (
                          <div key={i} className="bg-white rounded p-3 text-sm">
                            <p><strong>Expect:</strong> {sc.expect}</p>
                            <p><strong>Action:</strong> {sc.action}</p>
                            <p className="text-xs text-gray-600 italic">{sc.example}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {det.effects && (
                      <div className="space-y-2">
                        {det.effects.map((eff, i) => (
                          <div key={i} className="bg-white rounded p-3 text-sm">
                            <p className="font-semibold">{eff.policy}</p>
                            <p className="text-gray-700">{eff.effect}</p>
                            <p className="text-xs text-gray-600 italic">{eff.example}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EQUILIBRIUM - COMPLETE */}
        {activeTab === 'equilibrium' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">⚖️ Market Equilibrium - Complete Theory</h2>
              <p className="text-lg opacity-90">Where demand meets supply - the heart of market economics!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Equilibrium?</h4>
                <p className="text-gray-800 text-lg mb-4">
                  <strong>Market equilibrium</strong> is the state where quantity demanded equals quantity supplied. At this point, there is no tendency for price or quantity to change - the market "clears."
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold mb-3">Key Terms:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>• Equilibrium Price (Pe):</strong> The price where Qd = Qs. Also called "market-clearing price"</li>
                    <li><strong>• Equilibrium Quantity (Qe):</strong> The quantity bought and sold at equilibrium price</li>
                    <li><strong>• Market Clearing:</strong> All buyers who want to buy at Pe can buy, all sellers who want to sell at Pe can sell</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Equilibrium Graph</h3>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={500}>
                  <LineChart data={equilibriumData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" label={{ value: 'Price ($)', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="demand" stroke="#ef4444" strokeWidth={3} name="Demand" />
                    <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={3} name="Supply" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-4">
                  <p className="font-bold mb-2">At Equilibrium (approximately):</p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-purple-100 rounded p-3">
                      <p className="text-2xl font-bold text-purple-800">$35</p>
                      <p className="text-xs">Equilibrium Price</p>
                    </div>
                    <div className="bg-purple-100 rounded p-3">
                      <p className="text-2xl font-bold text-purple-800">~11</p>
                      <p className="text-xs">Equilibrium Quantity</p>
                    </div>
                    <div className="bg-purple-100 rounded p-3">
                      <p className="text-2xl font-bold text-purple-800">⚖️</p>
                      <p className="text-xs">Market Clears</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔄 Market Disequilibrium</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h4 className="font-bold text-red-900 text-xl mb-4">📉 Shortage (Excess Demand)</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">Occurs When:</p>
                      <p className="text-sm text-gray-700">Price is BELOW equilibrium (P {'<'} Pe)</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">Result:</p>
                      <p className="text-sm text-gray-700">Quantity Demanded {'>'} Quantity Supplied (Qd {'>'} Qs)</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">What Happens:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Too many buyers, not enough goods</li>
                        <li>• Long queues form</li>
                        <li>• Goods sell out quickly</li>
                        <li>• Black markets may emerge</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">Market Response:</p>
                      <p className="text-sm text-gray-700">Sellers raise prices → Shortage eliminated → Return to equilibrium</p>
                    </div>
                    <div className="bg-yellow-100 rounded p-3">
                      <p className="text-sm"><strong>Example:</strong> Concert tickets priced at $50 when market value is $200. Result: Tickets sell out instantly, scalpers resell at higher prices.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 text-xl mb-4">📈 Surplus (Excess Supply)</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">Occurs When:</p>
                      <p className="text-sm text-gray-700">Price is ABOVE equilibrium (P {'>'} Pe)</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">Result:</p>
                      <p className="text-sm text-gray-700">Quantity Supplied {'>'} Quantity Demanded (Qs {'>'} Qd)</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">What Happens:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Too many goods, not enough buyers</li>
                        <li>• Inventory piles up</li>
                        <li>• Goods remain unsold</li>
                        <li>• Warehouses fill up</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 rounded p-4">
                      <p className="font-bold text-gray-800 mb-2">Market Response:</p>
                      <p className="text-sm text-gray-700">Sellers lower prices → Surplus eliminated → Return to equilibrium</p>
                    </div>
                    <div className="bg-yellow-100 rounded p-3">
                      <p className="text-sm"><strong>Example:</strong> Farmer grows 1000 kg tomatoes, prices at $10/kg. Only 200 kg sell. Must reduce price to $3/kg to sell remaining stock.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
                <h4 className="font-bold text-yellow-900 mb-3 text-xl">🎯 The Invisible Hand at Work:</h4>
                <p className="text-gray-800 leading-relaxed mb-3">
                  Adam Smith's "Invisible Hand" refers to the self-regulating nature of markets:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li><strong>• Shortage → Prices Rise:</strong> This increases supply and decreases demand until equilibrium</li>
                  <li><strong>• Surplus → Prices Fall:</strong> This decreases supply and increases demand until equilibrium</li>
                  <li><strong>• No Central Planner Needed:</strong> Market forces automatically push toward equilibrium</li>
                  <li><strong>• Efficient Allocation:</strong> Resources flow to where they're most valued</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ELASTICITY - COMPLETE THEORY */}
        {activeTab === 'elasticity' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🔄 Price Elasticity of Demand - Complete Theory</h2>
              <p className="text-lg opacity-90">Understanding elasticity is crucial for pricing decisions and revenue maximization!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Price Elasticity of Demand?</h4>
                <p className="text-gray-800 text-lg mb-4">
                  <strong>Price Elasticity of Demand (PED)</strong> measures the responsiveness of quantity demanded to a change in price. It tells us HOW MUCH quantity demanded changes when price changes.
                </p>
                <div className="bg-white rounded p-4 mb-4">
                  <p className="font-bold mb-2">Formula:</p>
                  <p className="font-mono text-lg">PED = (% Change in Quantity Demanded) / (% Change in Price)</p>
                  <p className="text-sm text-gray-600 mt-2">Or more precisely:</p>
                  <p className="font-mono text-sm">PED = [(Q₂ - Q₁) / Q₁] × 100 / [(P₂ - P₁) / P₁] × 100</p>
                </div>
                <div className="bg-yellow-100 rounded p-4">
                  <p className="text-sm"><strong>Example Calculation:</strong> If price increases from $10 to $12 (20% increase) and quantity demanded falls from 100 to 80 (20% decrease):</p>
                  <p className="font-mono text-sm mt-2">PED = -20% / 20% = -1</p>
                  <p className="text-xs text-gray-600 mt-1">Note: PED is usually negative (inverse relationship), but we use absolute value</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Types of Price Elasticity</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    type: 'Perfectly Inelastic',
                    value: 'PED = 0',
                    theory: 'Quantity demanded does NOT change regardless of price changes. Demand curve is vertical.',
                    meaning: 'No matter how much price changes, people buy the same amount',
                    examples: 'Life-saving medicines (insulin for diabetics), essential utilities, addictive drugs',
                    graph: 'Vertical straight line',
                    revenue: 'Price ↑ → Revenue ↑ (always)',
                    icon: '📌',
                    color: 'red'
                  },
                  {
                    type: 'Inelastic',
                    value: '0 < PED < 1',
                    theory: 'Quantity demanded changes LESS than proportionally to price change. Demand is not very responsive to price.',
                    meaning: '1% price change → Less than 1% quantity change',
                    examples: 'Necessities: salt, bread, milk, gasoline (short-run), prescription drugs',
                    graph: 'Steep downward slope',
                    revenue: 'Price ↑ → Revenue ↑',
                    icon: '⬇️',
                    color: 'orange'
                  },
                  {
                    type: 'Unit Elastic',
                    value: 'PED = 1',
                    theory: 'Quantity demanded changes EXACTLY proportional to price change. Perfect balance.',
                    meaning: '1% price change → Exactly 1% quantity change',
                    examples: 'Some consumer goods in specific markets',
                    graph: 'Rectangular hyperbola',
                    revenue: 'Price changes → Revenue stays SAME',
                    icon: '⚖️',
                    color: 'yellow'
                  },
                  {
                    type: 'Elastic',
                    value: 'PED > 1',
                    theory: 'Quantity demanded changes MORE than proportionally to price change. Demand is very responsive to price.',
                    meaning: '1% price change → More than 1% quantity change',
                    examples: 'Luxuries: designer clothes, jewelry, vacations, restaurant meals, entertainment',
                    graph: 'Flat/gentle downward slope',
                    revenue: 'Price ↓ → Revenue ↑',
                    icon: '⬆️',
                    color: 'green'
                  },
                  {
                    type: 'Perfectly Elastic',
                    value: 'PED = ∞',
                    theory: 'Any price increase causes quantity demanded to drop to ZERO. Consumers extremely sensitive to price.',
                    meaning: 'Infinite responsiveness - even tiny price change → huge quantity change',
                    examples: 'Perfect competition (theoretical), commodities in competitive markets',
                    graph: 'Horizontal straight line',
                    revenue: 'Any price increase → Revenue = 0',
                    icon: '➡️',
                    color: 'blue'
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-300 rounded-lg p-5 hover:shadow-lg transition-all`}>
                    <div className="text-center mb-3">
                      <div className="text-5xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-gray-800 text-lg">{item.type}</h4>
                      <p className={`text-${item.color}-700 font-mono font-bold text-sm mt-1`}>{item.value}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-50 rounded p-3">
                        <p className="text-xs font-bold mb-1">Theory:</p>
                        <p className="text-xs text-gray-700">{item.theory}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-xs font-bold mb-1">Meaning:</p>
                        <p className="text-xs text-gray-700">{item.meaning}</p>
                      </div>
                      <div className={`bg-${item.color}-100 rounded p-3`}>
                        <p className="text-xs font-bold mb-1">Examples:</p>
                        <p className="text-xs text-gray-700">{item.examples}</p>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <p className="text-xs"><strong>Graph:</strong> {item.graph}</p>
                      </div>
                      <div className="bg-purple-100 rounded p-3">
                        <p className="text-xs"><strong>Revenue Effect:</strong> {item.revenue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Total Revenue Test</h3>
              <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6 mb-6">
                <p className="text-gray-800 mb-4">The Total Revenue Test helps businesses decide whether to raise or lower prices based on elasticity:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      elasticity: 'Elastic Demand (PED > 1)',
                      strategy: 'LOWER prices to increase revenue',
                      logic: 'Price ↓ by 10% → Quantity ↑ by more than 10% → Total Revenue ↑',
                      example: 'Luxury hotel drops price 20% → Bookings increase 40% → Revenue up 12%',
                      color: 'green'
                    },
                    {
                      elasticity: 'Unit Elastic (PED = 1)',
                      strategy: 'Price changes don\'t affect revenue',
                      logic: 'Price ↓ by 10% → Quantity ↑ by exactly 10% → Total Revenue unchanged',
                      example: 'Any price change has offsetting quantity change',
                      color: 'yellow'
                    },
                    {
                      elasticity: 'Inelastic Demand (PED < 1)',
                      strategy: 'RAISE prices to increase revenue',
                      logic: 'Price ↑ by 10% → Quantity ↓ by less than 10% → Total Revenue ↑',
                      example: 'Gas station raises price 10% → Sales drop only 3% → Revenue up 7%',
                      color: 'red'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`bg-${item.color}-50 border-2 border-${item.color}-300 rounded-lg p-4`}>
                      <h5 className={`font-bold text-${item.color}-900 mb-3`}>{item.elasticity}</h5>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-800"><strong>Strategy:</strong> {item.strategy}</p>
                        <p className="text-gray-700"><strong>Logic:</strong> {item.logic}</p>
                        <div className={`bg-${item.color}-100 rounded p-2 mt-2`}>
                          <p className="text-xs text-gray-700"><strong>Example:</strong> {item.example}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📌 Determinants of Elasticity</h3>
              <div className="space-y-3">
                {[
                  {
                    factor: '1. Availability of Substitutes',
                    rule: 'More substitutes → More elastic',
                    theory: 'If many alternatives exist, consumers easily switch when price rises, making demand elastic.',
                    examples: ['Coffee has substitutes (tea, energy drinks) → Elastic', 'Insulin has no substitutes → Inelastic'],
                  },
                  {
                    factor: '2. Necessity vs. Luxury',
                    rule: 'Necessities → Inelastic | Luxuries → Elastic',
                    theory: 'People must buy necessities regardless of price. Luxuries are optional, so demand is price-sensitive.',
                    examples: ['Bread (necessity) → Inelastic', 'Cruise vacation (luxury) → Elastic'],
                  },
                  {
                    factor: '3. Time Horizon',
                    rule: 'Short run → Inelastic | Long run → More elastic',
                    theory: 'Over time, consumers find alternatives and adjust behavior, making demand more elastic.',
                    examples: ['Gasoline: Inelastic short-term (must drive to work), Elastic long-term (can buy electric car)'],
                  },
                  {
                    factor: '4. Proportion of Income',
                    rule: 'Large % of income → More elastic',
                    theory: 'Expensive items (relative to income) are more price-sensitive. Cheap items are not.',
                    examples: ['Salt (0.1% of income) → Inelastic', 'Car (50% of income) → Elastic'],
                  },
                  {
                    factor: '5. Definition of Market',
                    rule: 'Narrowly defined → More elastic | Broadly defined → Less elastic',
                    theory: 'Specific products have more substitutes than broad categories.',
                    examples: ['Food (broad) → Inelastic', 'Häagen-Dazs ice cream (narrow) → Elastic'],
                  },
                ].map((det, idx) => (
                  <div key={idx} className="bg-white border-2 border-purple-200 rounded-lg p-5">
                    <h5 className="font-bold text-purple-900 text-lg mb-2">{det.factor}</h5>
                    <div className="bg-purple-100 rounded p-3 mb-2">
                      <p className="text-sm font-bold text-purple-900">{det.rule}</p>
                    </div>
                    <p className="text-sm text-gray-800 mb-2"><strong>Theory:</strong> {det.theory}</p>
                    <div className="bg-gray-100 rounded p-3">
                      <p className="text-xs text-gray-700"><strong>Examples:</strong> {det.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COSTS - COMPLETE THEORY */}
        {activeTab === 'costs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">💰 Production & Cost Theory - Complete</h2>
              <p className="text-lg opacity-90">Understanding costs is essential for production decisions and profit maximization!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What are Production Costs?</h4>
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Production costs</strong> are the expenses a firm incurs in the process of producing goods or services. Understanding different types of costs helps firms make optimal production and pricing decisions.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">💵 Types of Costs - Complete Theory</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    type: 'Fixed Cost (FC)',
                    theory: 'Costs that do NOT change with the level of output. These costs exist even if production is zero.',
                    formula: 'FC = Constant (doesn\'t depend on Q)',
                    characteristics: ['Same at all output levels', 'Must be paid even if Q = 0', 'Also called "overhead costs"', 'In long run, all costs are variable'],
                    examples: ['Rent/lease payments', 'Insurance premiums', 'Manager salaries', 'Loan interest', 'Property taxes', 'Depreciation'],
                    graph: 'Horizontal line',
                    icon: '📌',
                    color: 'blue'
                  },
                  {
                    type: 'Variable Cost (VC)',
                    theory: 'Costs that CHANGE with the level of output. As production increases, variable costs increase.',
                    formula: 'VC = f(Q) [function of quantity]',
                    characteristics: ['Changes with output', 'Zero when Q = 0', 'Initially increases slowly, then faster', 'Reflects law of diminishing returns'],
                    examples: ['Raw materials', 'Hourly wages', 'Electricity for production', 'Packaging costs', 'Fuel/energy', 'Commission to sales staff'],
                    graph: 'Upward sloping curve',
                    icon: '📊',
                    color: 'green'
                  },
                  {
                    type: 'Total Cost (TC)',
                    theory: 'The sum of all costs - both fixed and variable. This is what the firm must cover to break even.',
                    formula: 'TC = FC + VC',
                    characteristics: ['Starts at FC level (when Q=0)', 'Increases with output', 'Includes all production expenses', 'Critical for profit calculation'],
                    examples: ['All expenses combined: Rent + Materials + Wages + Utilities + Everything'],
                    graph: 'Upward sloping, starting at FC level',
                    icon: '💰',
                    color: 'purple'
                  },
                  {
                    type: 'Average Cost (AC/ATC)',
                    theory: 'Cost per unit of output. Shows how much each unit costs to produce on average.',
                    formula: 'AC = TC / Q or AC = AFC + AVC',
                    characteristics: ['U-shaped curve', 'Decreases initially (economies of scale)', 'Reaches minimum point', 'Then increases (diseconomies of scale)'],
                    examples: ['If TC = $1000 and Q = 10, then AC = $100 per unit'],
                    graph: 'U-shaped curve',
                    icon: '📉',
                    color: 'orange'
                  },
                  {
                    type: 'Marginal Cost (MC)',
                    theory: 'The ADDITIONAL cost of producing ONE MORE unit. This is crucial for production decisions.',
                    formula: 'MC = ΔTC / ΔQ or MC = TC(n) - TC(n-1)',
                    characteristics: ['Initially decreases', 'Reaches minimum', 'Then increases (diminishing returns)', 'Intersects AC at AC minimum'],
                    examples: ['Cost of 101st unit when producing 100 units', 'If producing 10 units costs $1000, and 11 units costs $1070, MC = $70'],
                    graph: 'U-shaped, intersects AC at minimum',
                    icon: '➕',
                    color: 'red'
                  },
                  {
                    type: 'Average Fixed Cost (AFC)',
                    theory: 'Fixed cost per unit. As output increases, fixed costs spread over more units, so AFC falls.',
                    formula: 'AFC = FC / Q',
                    characteristics: ['Always decreasing', 'Approaches zero as Q increases', 'Never reaches zero', 'Spread fixed costs over output'],
                    examples: ['If rent is $1000: At Q=1, AFC=$1000; At Q=100, AFC=$10; At Q=1000, AFC=$1'],
                    graph: 'Downward sloping hyperbola',
                    icon: '⬇️',
                    color: 'cyan'
                  },
                ].map((cost, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${cost.color}-50 to-white border-2 border-${cost.color}-300 rounded-lg p-6 hover:shadow-xl transition-all`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{cost.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{cost.type}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded p-3">
                        <p className="text-xs font-bold text-blue-900 mb-1">📖 Theory:</p>
                        <p className="text-xs text-gray-800">{cost.theory}</p>
                      </div>
                      <div className={`bg-${cost.color}-100 rounded p-3`}>
                        <p className="text-xs font-bold mb-1">Formula:</p>
                        <p className="font-mono text-xs text-gray-800">{cost.formula}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-xs font-bold mb-2">Characteristics:</p>
                        <ul className="space-y-1">
                          {cost.characteristics.map((char, i) => (
                            <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                              <span>•</span>
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <p className="text-xs font-bold mb-1">Examples:</p>
                        {Array.isArray(cost.examples) ? (
                          <ul className="space-y-1">
                            {cost.examples.map((ex, i) => (
                              <li key={i} className="text-xs text-gray-700">{ex}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-gray-700">{cost.examples}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Cost Curves (Interactive)</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3">Total Cost Curves</h4>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={costData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="q" label={{ value: 'Quantity', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="tc" stroke="#8b5cf6" strokeWidth={3} name="TC" />
                      <Line type="monotone" dataKey="fc" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="FC" />
                      <Line type="monotone" dataKey="vc" stroke="#22c55e" strokeWidth={3} name="VC" />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-700 mt-2"><strong>Note:</strong> TC = FC + VC. FC is constant, VC increases with output.</p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
                  <h4 className="font-bold text-orange-900 mb-3">Average & Marginal Cost</h4>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={costData.slice(1)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="q" label={{ value: 'Quantity', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Cost per Unit ($)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="ac" stroke="#f59e0b" strokeWidth={3} name="AC" />
                      <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={3} name="MC" />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-700 mt-2"><strong>Key:</strong> MC intersects AC at AC's minimum point (around Q=6).</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
                <h4 className="font-bold text-yellow-900 mb-3 text-xl">🎯 Key Relationships:</h4>
                <ul className="space-y-2 text-gray-800">
                  <li><strong>• When MC {'<'} AC:</strong> AC is falling (producing more reduces average cost)</li>
                  <li><strong>• When MC = AC:</strong> AC is at minimum (most efficient production point)</li>
                  <li><strong>• When MC {'>'} AC:</strong> AC is rising (additional units cost more than average)</li>
                  <li><strong>• TC = FC + VC always</strong></li>
                  <li><strong>• AC = AFC + AVC</strong></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CONSUMPTION - COMPLETE */}
        {activeTab === 'consumption' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🛒 Consumption Function Theory</h2>
              <p className="text-lg opacity-90">Understanding consumption is key to predicting economic activity!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is the Consumption Function?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  The <strong>consumption function</strong> shows the relationship between disposable income and consumption spending. It was developed by John Maynard Keynes and is fundamental to macroeconomics.
                </p>
                <div className="bg-white rounded p-4 mb-4">
                  <p className="font-bold mb-2">The Formula:</p>
                  <p className="font-mono text-2xl text-center my-4">C = a + bYd</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-bold text-gray-800 mb-2">Variables Explained:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><strong>C</strong> = Total consumption expenditure</li>
                        <li><strong>a</strong> = Autonomous consumption (when Yd = 0)</li>
                        <li><strong>b</strong> = MPC (Marginal Propensity to Consume)</li>
                        <li><strong>Yd</strong> = Disposable income (after-tax income)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-2">Example with Numbers:</p>
                      <div className="bg-teal-100 rounded p-3">
                        <p className="text-sm">If C = 40 + 0.6Yd:</p>
                        <p className="text-sm">• a = 40 (minimum consumption)</p>
                        <p className="text-sm">• b = 0.6 (spend 60% of extra income)</p>
                        <p className="text-sm">• At Yd = 100: C = 40 + 0.6(100) = 100</p>
                        <p className="text-sm">• At Yd = 200: C = 40 + 0.6(200) = 160</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Consumption Function Graph</h3>
              <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-6 mb-6">
                <ResponsiveContainer width="100%" height={450}>
                  <LineChart data={consumptionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="income" label={{ value: 'Income ($)', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Consumption/Saving ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#94a3b8" strokeWidth={2} name="45° Line (Y=C)" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="consumption" stroke="#14b8a6" strokeWidth={3} name="Consumption (C)" dot={{ fill: '#14b8a6', r: 5 }} />
                    <Line type="monotone" dataKey="saving" stroke="#3b82f6" strokeWidth={3} name="Saving (S)" dot={{ fill: '#3b82f6', r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-white rounded p-4">
                  <p className="font-bold mb-2">Understanding the Graph:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>45° Line:</strong> Where income = consumption (break-even)</li>
                    <li>• <strong>Below 45° line:</strong> Dissaving (C {'>'} Y) - borrowing or using savings</li>
                    <li>• <strong>Above 45° line:</strong> Positive saving (Y {'>'} C)</li>
                    <li>• <strong>Autonomous consumption (a = 40):</strong> Consumption when income = 0</li>
                    <li>• <strong>Break-even point:</strong> At Y = 100, consumption = income</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔑 Key Concepts</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 text-xl mb-4">MPC - Marginal Propensity to Consume</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">The fraction of additional income that is spent on consumption.</p>
                    </div>
                    <div className="bg-green-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Formula:</p>
                      <p className="font-mono text-center text-lg">MPC = ΔC / ΔY</p>
                      <p className="text-xs text-gray-600 text-center mt-1">(Change in Consumption / Change in Income)</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Example:</p>
                      <p className="text-xs text-gray-700">Income increases by $100, consumption increases by $60</p>
                      <p className="font-mono text-sm">MPC = $60 / $100 = 0.6</p>
                      <p className="text-xs text-gray-600 mt-1">Meaning: You spend 60 cents of every extra dollar earned</p>
                    </div>
                    <div className="bg-green-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Range:</p>
                      <p className="text-sm text-gray-700">0 {'<'} MPC {'<'} 1</p>
                      <p className="text-xs text-gray-600">MPC close to 1 = high spending, MPC close to 0 = high saving</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-6">
                  <h4 className="font-bold text-blue-800 text-xl mb-4">MPS - Marginal Propensity to Save</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Definition:</p>
                      <p className="text-sm text-gray-700">The fraction of additional income that is saved.</p>
                    </div>
                    <div className="bg-blue-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Formula:</p>
                      <p className="font-mono text-center text-lg">MPS = ΔS / ΔY</p>
                      <p className="text-xs text-gray-600 text-center mt-1">(Change in Saving / Change in Income)</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold mb-2">Example:</p>
                      <p className="text-xs text-gray-700">Income increases by $100, saving increases by $40</p>
                      <p className="font-mono text-sm">MPS = $40 / $100 = 0.4</p>
                      <p className="text-xs text-gray-600 mt-1">Meaning: You save 40 cents of every extra dollar earned</p>
                    </div>
                    <div className="bg-blue-100 rounded p-4">
                      <p className="text-sm font-bold mb-2">Relationship:</p>
                      <p className="font-mono text-center text-lg">MPC + MPS = 1</p>
                      <p className="text-xs text-gray-600 text-center mt-1">If MPC = 0.6, then MPS = 0.4</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                <h4 className="font-bold text-purple-900 mb-4 text-xl">📌 Factors Affecting Consumption</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { factor: 'Income Level', effect: 'Higher income → Higher consumption', icon: '💰' },
                    { factor: 'Wealth/Assets', effect: 'More wealth → Higher consumption', icon: '💎' },
                    { factor: 'Interest Rates', effect: 'Higher rates → Lower consumption (more saving)', icon: '📊' },
                    { factor: 'Consumer Confidence', effect: 'Optimistic → Higher consumption', icon: '😊' },
                    { factor: 'Expectations', effect: 'Expect higher future income → Higher current consumption', icon: '🔮' },
                    { factor: 'Credit Availability', effect: 'Easy credit → Higher consumption', icon: '💳' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="font-bold text-sm">{item.factor}</p>
                      </div>
                      <p className="text-xs text-gray-700">{item.effect}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INVESTMENT - COMPLETE */}
        {activeTab === 'investment' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">💼 Investment Theory</h2>
              <p className="text-lg opacity-90">Investment drives economic growth and future prosperity!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Investment (Economic)?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  In economics, <strong>investment</strong> refers to the purchase of goods that will be used for future production. It's NOT buying stocks/bonds (that's financial investment).
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold mb-3">Economic Investment Includes:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Business fixed investment:</strong> Machinery, equipment, buildings, technology</li>
                    <li>• <strong>Inventory investment:</strong> Goods held by firms for future sale</li>
                    <li>• <strong>Residential investment:</strong> New housing construction</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Types of Investment</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    type: 'Fixed Investment',
                    desc: 'Purchase of new capital goods (equipment, buildings, technology)',
                    examples: ['Factory machinery', 'Office buildings', 'Computers/software', 'Vehicles'],
                    percentage: '~70-80% of total investment',
                    icon: '🏗️',
                    color: 'blue'
                  },
                  {
                    type: 'Inventory Investment',
                    desc: 'Changes in business inventories (raw materials, work-in-progress, finished goods)',
                    examples: ['Raw materials stock', 'Unsold products', 'Work in progress'],
                    percentage: '~10-20% of total investment',
                    icon: '📦',
                    color: 'green'
                  },
                  {
                    type: 'Residential Investment',
                    desc: 'Construction of new housing units',
                    examples: ['New houses', 'Apartments', 'Condominiums'],
                    percentage: '~10-20% of total investment',
                    icon: '🏠',
                    color: 'purple'
                  },
                ].map((inv, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${inv.color}-50 to-white border-2 border-${inv.color}-300 rounded-lg p-5`}>
                    <div className="text-center mb-3">
                      <div className="text-5xl mb-2">{inv.icon}</div>
                      <h4 className="font-bold text-gray-800 text-lg">{inv.type}</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{inv.desc}</p>
                    <div className="bg-white rounded p-3 mb-2">
                      <p className="text-xs font-bold mb-2">Examples:</p>
                      <ul className="space-y-1">
                        {inv.examples.map((ex, i) => (
                          <li key={i} className="text-xs text-gray-700">• {ex}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={`bg-${inv.color}-100 rounded p-2 text-xs text-center`}>
                      {inv.percentage}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📌 Determinants of Investment</h3>
              <div className="space-y-4">
                {[
                  {
                    factor: '1. Interest Rates (MOST IMPORTANT)',
                    theory: 'Interest rate is the cost of borrowing money. Lower rates make investment cheaper and more profitable.',
                    relationship: 'INVERSE: Interest rates ↑ → Investment ↓ | Interest rates ↓ → Investment ↑',
                    explanation: 'If interest rate = 10%, firm must earn more than 10% return to make investment worthwhile. If rate = 2%, more projects become profitable.',
                    example: 'Factory costs $1 million, expected return 7%. At 5% interest rate → Invest! At 10% interest rate → Don\'t invest.',
                    icon: '📊'
                  },
                  {
                    factor: '2. Expected Returns/Profitability',
                    theory: 'Businesses invest when they expect good returns. Optimistic expectations increase investment.',
                    relationship: 'Expected profits ↑ → Investment ↑',
                    explanation: 'Firms forecast future sales and revenues. If they expect strong demand, they invest in capacity.',
                    example: 'Tech company expects AI boom → Invests in servers and data centers. Retailer expects recession → Delays store expansion.',
                    icon: '💰'
                  },
                  {
                    factor: '3. Business Confidence',
                    theory: 'Confidence about future economic conditions affects willingness to invest.',
                    relationship: 'Higher confidence → Higher investment',
                    explanation: 'Uncertainty makes firms delay investment. Confidence encourages expansion.',
                    example: 'During COVID: Low confidence → Investment plummeted. During boom: High confidence → Investment surges.',
                    icon: '😊'
                  },
                  {
                    factor: '4. Technology & Innovation',
                    theory: 'New technology creates investment opportunities and makes old equipment obsolete.',
                    relationship: 'New technology → Higher investment',
                    explanation: 'Firms must invest to stay competitive. Innovation opens new markets.',
                    example: 'Internet emergence → Massive investment in infrastructure. AI revolution → Investment in computing power.',
                    icon: '🔬'
                  },
                  {
                    factor: '5. Capacity Utilization',
                    theory: 'If firms are operating near full capacity, they need to invest in expansion.',
                    relationship: 'High utilization → Need for investment ↑',
                    explanation: 'Operating at 95% capacity signals need for more equipment/facilities.',
                    example: 'Restaurant always fully booked → Time to open second location. Factory running 24/7 → Need more production lines.',
                    icon: '🏭'
                  },
                ].map((det, idx) => (
                  <div key={idx} className="bg-white border-2 border-indigo-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{det.icon}</span>
                      <h4 className="font-bold text-gray-800 text-xl">{det.factor}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded p-4">
                        <p className="text-sm font-bold text-blue-900 mb-2">📖 Theory:</p>
                        <p className="text-sm text-gray-800">{det.theory}</p>
                      </div>
                      <div className="bg-indigo-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Relationship:</p>
                        <p className="text-sm text-gray-800">{det.relationship}</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="text-sm font-bold mb-2">Explanation:</p>
                        <p className="text-sm text-gray-700">{det.explanation}</p>
                      </div>
                      <div className="bg-yellow-100 rounded p-4">
                        <p className="text-sm font-bold mb-2">Example:</p>
                        <p className="text-xs text-gray-700">{det.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6 mt-6">
                <h4 className="font-bold text-green-900 mb-3 text-xl">🎯 Why Investment Matters:</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• <strong>Drives Economic Growth:</strong> Investment increases productive capacity</li>
                  <li>• <strong>Creates Jobs:</strong> Building factories, infrastructure creates employment</li>
                  <li>• <strong>Increases Future Output:</strong> More capital goods → More production</li>
                  <li>• <strong>Improves Standard of Living:</strong> Better technology → Higher productivity → Higher wages</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* LIQUIDITY - COMPLETE */}
        {activeTab === 'liquidity' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">💵 Liquidity Preference Theory</h2>
              <p className="text-lg opacity-90">Keynes's theory of why people hold money and how interest rates are determined!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Liquidity Preference?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Liquidity preference theory</strong>, developed by John Maynard Keynes, explains the demand for money and how interest rates are determined in the money market.
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold mb-3">Key Concepts:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Liquidity:</strong> How quickly an asset can be converted to cash without losing value</li>
                    <li>• <strong>Money is perfectly liquid:</strong> Can be spent immediately</li>
                    <li>• <strong>Liquidity preference:</strong> People's desire to hold wealth in liquid (cash) form</li>
                    <li>• <strong>Interest rate:</strong> The "price" of holding money (opportunity cost)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Three Motives for Holding Money</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    motive: 'Transaction Motive',
                    theory: 'Money needed for everyday purchases and transactions. This is the primary reason people hold cash.',
                    determinants: ['Income level (higher income → more transactions)', 'Spending habits', 'Payment frequency', 'Price level'],
                    example: 'You keep $500 cash for groceries, bills, transport, daily expenses',
                    relationship: 'Directly related to income and transactions',
                    icon: '🛒',
                    color: 'blue'
                  },
                  {
                    motive: 'Precautionary Motive',
                    theory: 'Money held for unexpected expenses or emergencies. A "safety cushion" for uncertainties.',
                    determinants: ['Income uncertainty', 'Risk aversion', 'Access to credit', 'Health/age'],
                    example: 'Emergency fund of $5,000 for medical emergencies, car repairs, job loss',
                    relationship: 'Higher uncertainty → More precautionary money',
                    icon: '🚨',
                    color: 'orange'
                  },
                  {
                    motive: 'Speculative Motive',
                    theory: 'Money held to take advantage of investment opportunities or expected changes in asset prices.',
                    determinants: ['Interest rates', 'Bond prices', 'Stock market expectations', 'Investment opportunities'],
                    example: 'Waiting to buy stocks when prices fall, or bonds when interest rates rise',
                    relationship: 'Inverse to interest rates (when rates low, hold more money)',
                    icon: '📈',
                    color: 'green'
                  },
                ].map((mot, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${mot.color}-50 to-white border-2 border-${mot.color}-300 rounded-lg p-6 hover:shadow-xl transition-all`}>
                    <div className="text-center mb-4">
                      <div className="text-5xl mb-2">{mot.icon}</div>
                      <h4 className="font-bold text-gray-800 text-xl">{mot.motive}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded p-4">
                        <p className="text-xs font-bold text-blue-900 mb-2">📖 Theory:</p>
                        <p className="text-xs text-gray-800">{mot.theory}</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="text-xs font-bold mb-2">Determinants:</p>
                        <ul className="space-y-1">
                          {mot.determinants.map((det, i) => (
                            <li key={i} className="text-xs text-gray-700">• {det}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`bg-${mot.color}-100 rounded p-3`}>
                        <p className="text-xs font-bold mb-1">Example:</p>
                        <p className="text-xs text-gray-700">{mot.example}</p>
                      </div>
                      <div className="bg-gray-100 rounded p-3">
                        <p className="text-xs"><strong>Relationship:</strong> {mot.relationship}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-purple-900 mb-4 text-xl">📊 Money Demand & Interest Rates</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded p-5">
                    <h5 className="font-bold text-gray-800 mb-3">High Interest Rates</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Opportunity cost of holding money is HIGH</li>
                      <li>• People prefer bonds/investments (earn interest)</li>
                      <li>• Money demand DECREASES ↓</li>
                      <li>• Example: 10% interest rate → Put money in bank, earn 10%</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-5">
                    <h5 className="font-bold text-gray-800 mb-3">Low Interest Rates</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Opportunity cost of holding money is LOW</li>
                      <li>• People hold more cash (low returns on bonds)</li>
                      <li>• Money demand INCREASES ↑</li>
                      <li>• Example: 0.5% interest rate → Not worth investing, hold cash</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-purple-100 rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">📐 Formula:</p>
                  <p className="font-mono text-center text-lg">Md = f(Y, r)</p>
                  <p className="text-xs text-center text-gray-700 mt-2">Money Demand = function of (Income, Interest Rate)</p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <h4 className="font-bold text-red-900 mb-4 text-xl">⚠️ Liquidity Trap</h4>
                <p className="text-gray-800 mb-4">
                  A <strong>liquidity trap</strong> occurs when interest rates are very low (near zero) and people hoard cash instead of spending or investing, making monetary policy ineffective.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Characteristics:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Interest rates near 0%</li>
                      <li>• People expect rates to rise (bond prices to fall)</li>
                      <li>• Hold cash instead of bonds</li>
                      <li>• Monetary policy ineffective</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded p-4">
                    <p className="font-bold mb-2">Historical Example:</p>
                    <p className="text-sm text-gray-700">Japan (1990s-2000s), USA (2008-2015), Europe (2010s): Near-zero rates but weak economic growth. Central banks couldn't stimulate economy further with monetary policy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MACROECONOMICS - COMPLETE FINAL SECTION */}
        {activeTab === 'macro' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-3">🌍 Macroeconomics - Complete Theory</h2>
              <p className="text-lg opacity-90">The study of the economy as a whole - GDP, inflation, unemployment, and policies!</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-4 text-xl">📖 What is Macroeconomics?</h4>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Macroeconomics</strong> is the branch of economics that studies the behavior and performance of the entire economy. It focuses on aggregate variables like national income, total employment, general price level, and economic growth.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Key Questions:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• What determines national income?</li>
                      <li>• What causes unemployment?</li>
                      <li>• What causes inflation?</li>
                      <li>• What promotes economic growth?</li>
                      <li>• How do government policies affect the economy?</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Main Goals:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• High and stable economic growth</li>
                      <li>• Full employment</li>
                      <li>• Price stability (low inflation)</li>
                      <li>• Balance of payments equilibrium</li>
                      <li>• Equitable distribution of income</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 GDP - Gross Domestic Product</h3>
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-green-900 mb-4 text-xl">Complete Theory:</h4>
                <p className="text-gray-800 mb-4">
                  <strong>GDP</strong> is the total market value of all final goods and services produced within a country's borders in a specific time period (usually one year).
                </p>
                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-bold mb-3">The GDP Formula (Expenditure Approach):</p>
                  <p className="font-mono text-2xl text-center my-4">GDP = C + I + G + (X - M)</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-bold mb-2">Components Explained:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><strong>C - Consumption:</strong> Household spending (~60-70% of GDP)</li>
                        <li><strong>I - Investment:</strong> Business spending on capital (~15-20%)</li>
                        <li><strong>G - Government Spending:</strong> Public expenditure (~15-25%)</li>
                        <li><strong>(X-M) - Net Exports:</strong> Exports minus Imports</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 rounded p-4">
                      <p className="font-bold mb-2">Example Calculation:</p>
                      <p className="text-sm">USA 2023 GDP (approx):</p>
                      <ul className="text-xs space-y-1 mt-2">
                        <li>C = $17 trillion</li>
                        <li>I = $4 trillion</li>
                        <li>G = $4 trillion</li>
                        <li>X-M = -$1 trillion (trade deficit)</li>
                        <li><strong>GDP = $24 trillion</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded p-5">
                  <p className="font-bold mb-3">Types of GDP:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded p-4">
                      <p className="font-bold text-blue-900 mb-2">Nominal GDP</p>
                      <p className="text-sm text-gray-700 mb-2">GDP measured at current market prices (includes inflation)</p>
                      <p className="text-xs text-gray-600">Example: 2023 GDP using 2023 prices</p>
                    </div>
                    <div className="bg-purple-100 rounded p-4">
                      <p className="font-bold text-purple-900 mb-2">Real GDP</p>
                      <p className="text-sm text-gray-700 mb-2">GDP adjusted for inflation (uses base year prices)</p>
                      <p className="text-xs text-gray-600">Example: 2023 GDP using 2010 prices (shows actual growth)</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Inflation</h3>
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-red-900 mb-4 text-xl">Complete Theory:</h4>
                <p className="text-gray-800 mb-4">
                  <strong>Inflation</strong> is a sustained increase in the general price level of goods and services over time. It erodes the purchasing power of money.
                </p>
                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-bold mb-2">Formula:</p>
                  <p className="font-mono text-center text-lg">Inflation Rate = [(CPI₂ - CPI₁) / CPI₁] × 100%</p>
                  <div className="bg-red-100 rounded p-3 mt-3">
                    <p className="text-sm"><strong>Example:</strong> CPI in 2022 = 280, CPI in 2023 = 294</p>
                    <p className="font-mono text-sm">Inflation = [(294-280)/280] × 100% = 5%</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-orange-900 mb-2">Demand-Pull Inflation</p>
                    <p className="text-sm text-gray-700 mb-2">"Too much money chasing too few goods"</p>
                    <p className="text-xs text-gray-600">Cause: Aggregate demand {'>'} Aggregate supply</p>
                    <p className="text-xs text-gray-600 mt-1">Example: Economic boom, low interest rates</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-red-900 mb-2">Cost-Push Inflation</p>
                    <p className="text-sm text-gray-700 mb-2">Rising production costs push up prices</p>
                    <p className="text-xs text-gray-600">Cause: Higher wages, raw material costs, oil prices</p>
                    <p className="text-xs text-gray-600 mt-1">Example: Oil crisis increases all costs</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-purple-900 mb-2">Built-In Inflation</p>
                    <p className="text-sm text-gray-700 mb-2">Price-wage spiral</p>
                    <p className="text-xs text-gray-600">Cause: Workers demand higher wages → Firms raise prices → Workers demand higher wages...</p>
                    <p className="text-xs text-gray-600 mt-1">Example: Union wage negotiations</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded p-4">
                    <p className="font-bold text-green-900 mb-2">Effects of MODERATE Inflation (2-3%):</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Encourages spending and investment</li>
                      <li>✓ Reduces real debt burden</li>
                      <li>✓ Sign of healthy economic growth</li>
                      <li>✓ Allows wage adjustments</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded p-4">
                    <p className="font-bold text-red-900 mb-2">Effects of HIGH Inflation ({'>'} 10%):</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✗ Erodes purchasing power</li>
                      <li>✗ Uncertainty in economy</li>
                      <li>✗ Hurts fixed-income earners</li>
                      <li>✗ Reduces savings value</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">👥 Unemployment</h3>
              <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-orange-900 mb-4 text-xl">Complete Theory:</h4>
                <p className="text-gray-800 mb-4">
                  <strong>Unemployment</strong> refers to people who are willing and able to work but cannot find jobs. It's measured as a percentage of the labor force.
                </p>
                <div className="bg-white rounded p-5 mb-4">
                  <p className="font-bold mb-2">Formula:</p>
                  <p className="font-mono text-center text-lg">Unemployment Rate = (Unemployed / Labor Force) × 100%</p>
                  <div className="bg-orange-100 rounded p-3 mt-3">
                    <p className="text-sm"><strong>Example:</strong> Labor Force = 100 million, Unemployed = 5 million</p>
                    <p className="font-mono text-sm">Unemployment Rate = (5/100) × 100% = 5%</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded p-4 border-l-4 border-blue-500">
                    <p className="font-bold text-blue-900 mb-2">Frictional Unemployment</p>
                    <p className="text-sm text-gray-700 mb-2">Temporary unemployment during job search</p>
                    <p className="text-xs text-gray-600 mb-2"><strong>Cause:</strong> People changing jobs, new graduates</p>
                    <p className="text-xs text-gray-600"><strong>Duration:</strong> Short-term (weeks/months)</p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-orange-500">
                    <p className="font-bold text-orange-900 mb-2">Structural Unemployment</p>
                    <p className="text-sm text-gray-700 mb-2">Skills mismatch with available jobs</p>
                    <p className="text-xs text-gray-600 mb-2"><strong>Cause:</strong> Technology changes, industry decline</p>
                    <p className="text-xs text-gray-600"><strong>Duration:</strong> Long-term (requires retraining)</p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-red-500">
                    <p className="font-bold text-red-900 mb-2">Cyclical Unemployment</p>
                    <p className="text-sm text-gray-700 mb-2">Due to economic downturns/recessions</p>
                    <p className="text-xs text-gray-600 mb-2"><strong>Cause:</strong> Reduced aggregate demand</p>
                    <p className="text-xs text-gray-600"><strong>Duration:</strong> Varies with business cycle</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏛️ Economic Policies</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 text-xl mb-4">Fiscal Policy 🏛️</h4>
                  <p className="text-sm text-gray-700 mb-4">Government's use of <strong>taxation and spending</strong> to influence the economy</p>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-green-800 mb-2">Expansionary Fiscal Policy</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Goal:</strong> Stimulate economy during recession</p>
                      <p className="text-xs mb-1"><strong>Tools:</strong></p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Increase government spending (G ↑)</li>
                        <li>• Decrease taxes (T ↓)</li>
                        <li>• Increase transfer payments</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2"><strong>Effect:</strong> AD ↑ → GDP ↑ → Unemployment ↓</p>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-red-800 mb-2">Contractionary Fiscal Policy</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Goal:</strong> Reduce inflation during boom</p>
                      <p className="text-xs mb-1"><strong>Tools:</strong></p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Decrease government spending (G ↓)</li>
                        <li>• Increase taxes (T ↑)</li>
                        <li>• Reduce transfer payments</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2"><strong>Effect:</strong> AD ↓ → Inflation ↓ → GDP ↓</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 text-xl mb-4">Monetary Policy 💰</h4>
                  <p className="text-sm text-gray-700 mb-4">Central bank's use of <strong>money supply and interest rates</strong> to influence the economy</p>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-green-800 mb-2">Expansionary Monetary Policy</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Goal:</strong> Stimulate economy during recession</p>
                      <p className="text-xs mb-1"><strong>Tools:</strong></p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Lower interest rates</li>
                        <li>• Increase money supply</li>
                        <li>• Buy government bonds</li>
                        <li>• Lower reserve requirements</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2"><strong>Effect:</strong> Borrowing cheaper → C ↑, I ↑ → AD ↑</p>
                    </div>

                    <div className="bg-white rounded p-4">
                      <p className="font-bold text-red-800 mb-2">Contractionary Monetary Policy</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Goal:</strong> Reduce inflation</p>
                      <p className="text-xs mb-1"><strong>Tools:</strong></p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Raise interest rates</li>
                        <li>• Decrease money supply</li>
                        <li>• Sell government bonds</li>
                        <li>• Raise reserve requirements</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2"><strong>Effect:</strong> Borrowing expensive → C ↓, I ↓ → AD ↓</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-400 rounded-xl p-8">
                <h4 className="font-bold text-indigo-900 mb-4 text-2xl">🎯 The Phillips Curve - Inflation vs Unemployment Tradeoff</h4>
                <p className="text-gray-800 mb-4">
                  In the short run, there's an inverse relationship between inflation and unemployment. Lower unemployment often comes with higher inflation, and vice versa.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Short Run:</p>
                    <p className="text-sm text-gray-700">Unemployment ↓ → Inflation ↑</p>
                    <p className="text-xs text-gray-600 mt-1">Policymakers face a tradeoff</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold mb-2">Long Run:</p>
                    <p className="text-sm text-gray-700">No tradeoff (vertical curve)</p>
                    <p className="text-xs text-gray-600 mt-1">Unemployment returns to natural rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">🎓 Congratulations! You've Completed Unit 1!</h3>
            <p className="text-xl mb-6 opacity-90">Principles of Economics - Complete Theory with Examples</p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">📚</div>
                <div className="font-bold text-lg mb-2">Complete Theory</div>
                <div className="text-sm opacity-90">Every concept explained in detail</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">📊</div>
                <div className="font-bold text-lg mb-2">Interactive Charts</div>
                <div className="text-sm opacity-90">Visual learning with graphs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">💡</div>
                <div className="font-bold text-lg mb-2">Real Examples</div>
                <div className="text-sm opacity-90">Practical applications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-3">🎯</div>
                <div className="font-bold text-lg mb-2">Exam Ready</div>
                <div className="text-sm opacity-90">All PDF content covered</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h4 className="font-bold text-xl mb-3">📝 What You've Learned:</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>✓ Mankiw's 10 Principles</div>
                <div>✓ Market Structures</div>
                <div>✓ Demand & Supply Theory</div>
                <div>✓ Market Equilibrium</div>
                <div>✓ Price Elasticity</div>
                <div>✓ Production Costs</div>
                <div>✓ Consumption Function</div>
                <div>✓ Investment Theory</div>
                <div>✓ Liquidity Preference</div>
                <div>✓ Macroeconomics (GDP, Inflation, Unemployment)</div>
                <div>✓ Fiscal & Monetary Policy</div>
                <div>✓ And Much More!</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-2xl font-bold mb-2">🌟 You're Ready to Ace Your Economics Exam! 🌟</p>
              <p className="text-sm opacity-75">Unit 1 - Principles of Economics | Complete Study Guide</p>
              <p className="text-xs opacity-50 mt-3">Made with ❤️ for your success | All concepts from PDF included</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50"
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
