'use client';
import { useState, useEffect } from 'react';

export default function FinancialStatementsGuide() {
  const [activeSection, setActiveSection] = useState('schedule3');
  const [expandedItem, setExpandedItem] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const content = {
    schedule3: {
      title: "Financial Statements - Schedule III",
      subtitle: "Companies (Amendment) Act, 2013",
      icon: "📊",
      sections: [
        {
          id: "overview",
          title: "What is Schedule III?",
          content: [
            {
              heading: "Definition",
              text: "Schedule III of the Companies Act, 2013 prescribes the format and structure for preparing financial statements of companies in India.",
              importance: "It ensures uniformity, comparability, and transparency in financial reporting across all companies."
            },
            {
              heading: "Purpose",
              text: "To provide a standardized framework for presenting financial information to stakeholders including investors, creditors, regulators, and the general public.",
              keyPoint: "Makes it easier to compare financial performance across different companies and time periods."
            }
          ]
        },
        {
          id: "structure",
          title: "Structure of Financial Statements",
          content: [
            {
              heading: "Three Main Components",
              list: [
                "Balance Sheet (Statement of Financial Position)",
                "Statement of Profit and Loss (Income Statement)",
                "Notes to Accounts (Detailed explanations)"
              ]
            },
            {
              heading: "Additional Statements (if applicable)",
              list: [
                "Cash Flow Statement",
                "Statement of Changes in Equity",
                "Comparative figures for previous year"
              ]
            }
          ]
        },
        {
          id: "balancesheet",
          title: "1. Balance Sheet",
          description: "Shows financial position on a specific date",
          components: [
            {
              category: "ASSETS",
              subcategories: [
                {
                  name: "Non-Current Assets",
                  items: [
                    { item: "Property, Plant & Equipment", example: "Land, Buildings, Machinery", value: "Long-term physical assets" },
                    { item: "Intangible Assets", example: "Goodwill, Patents, Trademarks", value: "Non-physical valuable rights" },
                    { item: "Financial Assets", example: "Long-term Investments, Loans given", value: "Financial instruments held long-term" },
                    { item: "Deferred Tax Assets", example: "Tax benefits to be realized", value: "Future tax savings" }
                  ]
                },
                {
                  name: "Current Assets",
                  items: [
                    { item: "Inventories", example: "Raw materials, Finished goods", value: "Stock available for sale" },
                    { item: "Trade Receivables", example: "Debtors, Bills Receivable", value: "Money customers owe" },
                    { item: "Cash & Cash Equivalents", example: "Cash, Bank balance", value: "Most liquid assets" },
                    { item: "Other Current Assets", example: "Prepaid expenses, Advances", value: "Short-term assets" }
                  ]
                }
              ]
            },
            {
              category: "EQUITY & LIABILITIES",
              subcategories: [
                {
                  name: "Equity (Shareholders' Funds)",
                  items: [
                    { item: "Share Capital", example: "Equity shares, Preference shares", value: "Owners' investment" },
                    { item: "Reserves & Surplus", example: "Retained earnings, General reserve", value: "Accumulated profits" },
                    { item: "Other Equity", example: "Securities premium, Revaluation reserve", value: "Additional equity components" }
                  ]
                },
                {
                  name: "Non-Current Liabilities",
                  items: [
                    { item: "Long-term Borrowings", example: "Debentures, Term loans", value: "Debts payable after 1 year" },
                    { item: "Deferred Tax Liabilities", example: "Future tax obligations", value: "Tax to be paid later" },
                    { item: "Other Long-term Liabilities", example: "Long-term provisions", value: "Long-term obligations" }
                  ]
                },
                {
                  name: "Current Liabilities",
                  items: [
                    { item: "Short-term Borrowings", example: "Bank overdraft, Working capital loans", value: "Debts payable within 1 year" },
                    { item: "Trade Payables", example: "Creditors, Bills payable", value: "Money owed to suppliers" },
                    { item: "Other Current Liabilities", example: "Outstanding expenses, Advance from customers", value: "Short-term obligations" }
                  ]
                }
              ]
            }
          ],
          formula: "Total Assets = Total Equity + Total Liabilities",
          keyPoint: "Balance Sheet must ALWAYS balance - Assets equal Liabilities plus Equity"
        },
        {
          id: "profitloss",
          title: "2. Statement of Profit & Loss",
          description: "Shows financial performance over a period",
          components: [
            {
              section: "Revenue from Operations",
              items: [
                { item: "Sales of Products/Services", explanation: "Main business income" },
                { item: "Other Operating Revenue", explanation: "Scrap sales, Export incentives" }
              ]
            },
            {
              section: "Other Income",
              items: [
                { item: "Interest Income", explanation: "Earnings from deposits/investments" },
                { item: "Dividend Income", explanation: "Income from shareholdings" },
                { item: "Profit on Sale of Assets", explanation: "Gains from asset disposal" }
              ]
            },
            {
              section: "Expenses",
              subcategories: [
                {
                  type: "Cost of Materials Consumed",
                  detail: "Raw materials used in production"
                },
                {
                  type: "Purchase of Stock-in-Trade",
                  detail: "Goods bought for resale"
                },
                {
                  type: "Changes in Inventories",
                  detail: "Opening stock minus closing stock"
                },
                {
                  type: "Employee Benefit Expenses",
                  detail: "Salaries, wages, bonuses, PF, gratuity"
                },
                {
                  type: "Finance Costs",
                  detail: "Interest on loans, bank charges"
                },
                {
                  type: "Depreciation & Amortization",
                  detail: "Reduction in asset value over time"
                },
                {
                  type: "Other Expenses",
                  detail: "Rent, utilities, repairs, advertising"
                }
              ]
            },
            {
              section: "Profit Calculation",
              flow: [
                "Revenue from Operations",
                "- Cost of Goods Sold",
                "= Gross Profit",
                "+ Other Income",
                "- Operating Expenses",
                "= EBIT (Earnings Before Interest & Tax)",
                "- Finance Costs",
                "= Profit Before Tax (PBT)",
                "- Tax Expense",
                "= Profit After Tax (PAT) / Net Profit"
              ]
            }
          ],
          keyMetrics: [
            { metric: "Gross Profit Margin", formula: "(Gross Profit / Revenue) × 100" },
            { metric: "Net Profit Margin", formula: "(Net Profit / Revenue) × 100" },
            { metric: "EBITDA", formula: "EBIT + Depreciation + Amortization" }
          ]
        },
        {
          id: "notes",
          title: "3. Notes to Accounts",
          description: "Detailed explanations and disclosures",
          importance: "Notes are CRITICAL - they provide context, assumptions, and detailed breakdowns",
          categories: [
            {
              category: "Accounting Policies",
              examples: [
                "Method of depreciation used",
                "Inventory valuation method (FIFO/Weighted Average)",
                "Revenue recognition policy",
                "Foreign currency translation policy"
              ]
            },
            {
              category: "Detailed Breakdowns",
              examples: [
                "Composition of Share Capital (number of shares, face value)",
                "Details of Reserves & Surplus",
                "Break-up of Long-term and Short-term Borrowings",
                "Details of Creditors and Debtors"
              ]
            },
            {
              category: "Contingent Liabilities",
              examples: [
                "Pending lawsuits",
                "Bank guarantees given",
                "Tax disputes under appeal",
                "Claims not acknowledged as debts"
              ]
            },
            {
              category: "Related Party Transactions",
              examples: [
                "Transactions with directors",
                "Transactions with subsidiary/associate companies",
                "Key management personnel compensation"
              ]
            },
            {
              category: "Other Disclosures",
              examples: [
                "Earnings Per Share (EPS) calculation",
                "Segmental reporting (if applicable)",
                "Events after reporting date",
                "Changes in accounting estimates"
              ]
            }
          ]
        },
        {
          id: "comprehensive",
          title: "How They Work Together",
          relationships: [
            {
              connection: "Balance Sheet ↔ Profit & Loss",
              explanation: "Net Profit from P&L Statement increases Reserves & Surplus in Balance Sheet",
              example: "If company makes ₹10 lakh profit, Reserves increase by ₹10 lakh (minus dividends)"
            },
            {
              connection: "Balance Sheet ↔ Notes",
              explanation: "Notes provide detailed breakdown of Balance Sheet line items",
              example: "Balance Sheet shows 'Property, Plant & Equipment: ₹50 lakh'. Notes show: Land ₹20L, Building ₹20L, Machinery ₹10L"
            },
            {
              connection: "P&L ↔ Notes",
              explanation: "Notes explain accounting policies and assumptions used in P&L",
              example: "P&L shows 'Depreciation: ₹5 lakh'. Notes explain: Straight-line method, 10% rate for machinery"
            },
            {
              connection: "Complete Financial Health",
              explanation: "Together, all three provide a 360-degree view",
              aspects: [
                "Balance Sheet: What company owns and owes RIGHT NOW",
                "P&L: How company performed OVER THE PERIOD",
                "Notes: WHY and HOW the numbers are what they are"
              ]
            }
          ]
        }
      ]
    },
    gaap: {
      title: "GAAP - Accounting Principles",
      subtitle: "Generally Accepted Accounting Principles",
      icon: "📜",
      intro: {
        definition: "GAAP are the standard framework of guidelines for financial accounting. They include the standards, conventions, and rules accountants follow in recording and summarizing transactions.",
        purpose: "To ensure consistency, reliability, and comparability of financial statements across different companies and time periods."
      },
      principles: [
        {
          id: 1,
          name: "Business Entity Concept",
          description: "The business is separate from its owner(s)",
          explanation: "Business transactions must be recorded separately from personal transactions of owners",
          example: "If owner invests ₹10 lakh in business, it's shown as 'Capital' in business books. Owner's personal car purchase is NOT recorded in business books.",
          importance: "Prevents mixing personal and business finances",
          examTip: "Remember: Even in sole proprietorship, business is a separate entity!"
        },
        {
          id: 2,
          name: "Money Measurement Concept",
          description: "Only transactions that can be expressed in monetary terms are recorded",
          explanation: "Non-monetary events (like employee skill, customer loyalty) are not recorded",
          example: "Purchase of machine for ₹5 lakh - RECORDED ✓\nHiring a skilled manager - NOT RECORDED (skill can't be measured in money)",
          importance: "Ensures objectivity and quantifiability",
          limitation: "Qualitative factors (goodwill, brand value) are missed unless purchased"
        },
        {
          id: 3,
          name: "Going Concern Concept",
          description: "Business will continue to operate in the foreseeable future",
          explanation: "Assets are valued assuming continued use, not liquidation value",
          example: "Machinery bought for ₹10 lakh, depreciated over 10 years (assuming continued use).\nIf liquidating, might only get ₹2 lakh.",
          importance: "Justifies depreciation and long-term planning",
          examTip: "If company is closing, this assumption doesn't hold!"
        },
        {
          id: 4,
          name: "Accounting Period Concept",
          description: "Accounts are prepared for a specific time period",
          explanation: "Usually one year (financial year). Helps measure performance periodically.",
          example: "Financial statements for year ending March 31, 2024.\nCompare with previous year ending March 31, 2023.",
          importance: "Enables periodic performance evaluation and comparison",
          standard: "In India, financial year is April 1 to March 31"
        },
        {
          id: 5,
          name: "Cost Concept",
          description: "Assets are recorded at their purchase cost (historical cost)",
          explanation: "Not at current market value or revaluation",
          example: "Land bought in 2010 for ₹10 lakh, now worth ₹50 lakh.\nStill shown at ₹10 lakh in books (unless revalued).",
          importance: "Provides objectivity and verifiability",
          limitation: "Doesn't reflect current market conditions"
        },
        {
          id: 6,
          name: "Dual Aspect Concept",
          description: "Every transaction has two aspects - Debit and Credit",
          explanation: "Every debit has an equal and opposite credit. Foundation of double-entry bookkeeping.",
          example: "Bought goods for ₹10,000 cash:\nDebit: Purchases ₹10,000\nCredit: Cash ₹10,000",
          importance: "Basis of accounting equation: Assets = Liabilities + Equity",
          examTip: "This is why Balance Sheet always balances!"
        },
        {
          id: 7,
          name: "Revenue Recognition Principle",
          description: "Revenue is recognized when earned, not when cash is received",
          explanation: "Based on accrual basis, not cash basis",
          example: "Sold goods worth ₹1 lakh on credit in March 2024.\nCash received in April 2024.\nRevenue recorded in March 2024 (when earned), not April.",
          importance: "Matches revenue with the period it relates to",
          standard: "Ind AS 115 provides detailed guidance"
        },
        {
          id: 8,
          name: "Matching Concept",
          description: "Expenses should be matched with revenues of the same period",
          explanation: "Expenses are recorded in the period when related revenues are recognized",
          example: "Goods costing ₹70,000 sold for ₹1,00,000 in March.\nCost recorded in March (same period as revenue), even if paid earlier.",
          importance: "Ensures accurate profit calculation for each period",
          formula: "Profit = Revenue (matched period) - Expenses (matched period)"
        },
        {
          id: 9,
          name: "Full Disclosure Principle",
          description: "All material information must be disclosed in financial statements",
          explanation: "Nothing significant should be hidden from stakeholders",
          example: "Pending lawsuit for ₹50 lakh must be disclosed in Notes.\nContingent liabilities must be mentioned.\nAccounting policies must be stated.",
          importance: "Builds trust and transparency with stakeholders",
          requirement: "Notes to accounts are mandatory for full disclosure"
        },
        {
          id: 10,
          name: "Consistency Principle",
          description: "Same accounting methods should be used from period to period",
          explanation: "Can't keep changing policies - hampers comparability",
          example: "If using Straight-line depreciation in 2023, continue same in 2024.\nCan't switch to WDV method arbitrarily.",
          importance: "Enables meaningful comparison across years",
          exception: "Changes allowed if new method is better, but must be disclosed"
        },
        {
          id: 11,
          name: "Conservatism (Prudence) Principle",
          description: "Anticipate losses but not profits",
          explanation: "When in doubt, report lower asset values and higher liabilities",
          example: "Doubtful debts of ₹10,000 - provide for full amount.\nExpected gain of ₹10,000 - don't record until realized.",
          importance: "Prevents overstatement of financial position",
          saying: "Provide for all possible losses, but don't anticipate profits"
        },
        {
          id: 12,
          name: "Materiality Principle",
          description: "Only significant items need detailed disclosure",
          explanation: "Small, insignificant items can be grouped or ignored if immaterial",
          example: "Stapler worth ₹100 can be expensed immediately, not treated as fixed asset.\nMachinery worth ₹10 lakh must be capitalized and depreciated.",
          importance: "Focuses attention on important matters",
          guideline: "Material if its omission/misstatement could influence decisions"
        }
      ],
      benefits: [
        {
          benefit: "Reliability",
          explanation: "Financial statements prepared using GAAP are trustworthy and dependable",
          impact: "Investors and lenders can make informed decisions"
        },
        {
          benefit: "Consistency",
          explanation: "Same methods used across companies and time periods",
          impact: "Easy to compare Company A with Company B, or Year 1 with Year 2"
        },
        {
          benefit: "Comparability",
          explanation: "Standardized format allows benchmarking and analysis",
          impact: "Can identify industry trends and best performers"
        },
        {
          benefit: "Transparency",
          explanation: "Full disclosure builds trust with stakeholders",
          impact: "Reduces information asymmetry and fraud"
        },
        {
          benefit: "Legal Compliance",
          explanation: "Adherence to GAAP is legally required in most jurisdictions",
          impact: "Protects from legal issues and penalties"
        }
      ]
    }
  };

  const currentContent = content[activeSection];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    } py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Fixed Buttons */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            title="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Header */}
        <div className={`${
          darkMode ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-600'
        } rounded-xl shadow-lg p-8 mb-8 border-t-4 transition-colors duration-300`}>
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              📚 Financial Statements & GAAP
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Complete guide to understanding company financial health
            </p>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg overflow-hidden mb-8`}>
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveSection('schedule3')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeSection === 'schedule3'
                  ? darkMode
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-600 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="text-3xl mb-2">📊</div>
              <div>Schedule III - Financial Statements</div>
            </button>
            <button
              onClick={() => setActiveSection('gaap')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeSection === 'gaap'
                  ? darkMode
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-600 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="text-3xl mb-2">📜</div>
              <div>GAAP - Accounting Principles</div>
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {/* Schedule III Content */}
            {activeSection === 'schedule3' && (
              <div className="space-y-6">
                <div className={`${
                  darkMode ? 'bg-purple-900 border-purple-600' : 'bg-purple-50 border-purple-500'
                } p-6 rounded-lg border-l-4`}>
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-900'} mb-2`}>
                    {currentContent.title}
                  </h2>
                  <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                    {currentContent.subtitle}
                  </p>
                </div>

                {currentContent.sections.map((section, idx) => (
                  <div key={idx} className={`${
                    darkMode ? 'bg-gray-800 border-blue-500' : 'bg-white border-blue-300'
                  } rounded-lg border-2 shadow-lg overflow-hidden`}>
                    <button
                      onClick={() => setExpandedItem(expandedItem === section.id ? null : section.id)}
                      className={`w-full p-4 text-left flex justify-between items-center ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {section.title}
                      </h3>
                      <span className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {expandedItem === section.id ? '−' : '+'}
                      </span>
                    </button>
                    
                    {expandedItem === section.id && (
                      <div className="p-6 space-y-4">
                        {section.description && (
                          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} italic`}>
                            {section.description}
                          </p>
                        )}

                        {section.content && section.content.map((item, i) => (
                          <div key={i} className={`${
                            darkMode ? 'bg-gray-900' : 'bg-blue-50'
                          } p-4 rounded-lg`}>
                            {item.heading && (
                              <h4 className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-900'} mb-2`}>
                                {item.heading}
                              </h4>
                            )}
                            {item.text && (
                              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                {item.text}
                              </p>
                            )}
                            {item.importance && (
                              <p className={`${darkMode ? 'text-yellow-300' : 'text-orange-700'} text-sm font-semibold`}>
                                💡 {item.importance}
                              </p>
                            )}
                            {item.keyPoint && (
                              <p className={`${darkMode ? 'text-green-300' : 'text-green-700'} text-sm font-semibold`}>
                                ✓ {item.keyPoint}
                              </p>
                            )}
                            {item.list && (
                              <ul className="space-y-1 mt-2">
                                {item.list.map((listItem, j) => (
                                  <li key={j} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-start`}>
                                    <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>•</span>
                                    <span>{listItem}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}

                        {/* Balance Sheet Components */}
                        {section.components && section.components.map((comp, i) => (
                          <div key={i} className="space-y-4">
                            <h4 className={`text-lg font-bold ${
                              darkMode ? 'text-yellow-400' : 'text-indigo-700'
                            } border-b-2 pb-2`}>
                              {comp.category}
                            </h4>
                            {comp.subcategories && comp.subcategories.map((sub, j) => (
                              <div key={j} className={`${
                                darkMode ? 'bg-gray-900' : 'bg-gray-50'
                              } p-4 rounded-lg`}>
                                <h5 className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-700'} mb-3`}>
                                  {sub.name}
                                </h5>
                                <div className="space-y-2">
                                  {sub.items && sub.items.map((item, k) => (
                                    <div key={k} className={`${
                                      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                                    } p-3 rounded border-l-4 ${
                                      darkMode ? 'border-blue-500' : 'border-blue-400'
                                    }`}>
                                      <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {item.item}
                                      </div>
                                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                                        Example: {item.example}
                                      </div>
                                      <div className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-700'} mt-1 italic`}>
                                        {item.value}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}

                        {/* P&L Components */}
                        {section.components && section.components.map((comp, i) => (
                          comp.section && (
                            <div key={i} className={`${
                              darkMode ? 'bg-gray-900' : 'bg-indigo-50'
                            } p-4 rounded-lg`}>
                              <h5 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-800'} mb-3`}>
                                {comp.section}
                              </h5>
                              {comp.items && (
                                <div className="space-y-2">
                                  {comp.items.map((item, j) => (
                                    <div key={j} className="flex justify-between">
                                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        • {item.item}
                                      </span>
                                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm italic`}>
                                        {item.explanation}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {comp.subcategories && (
                                <div className="space-y-2 mt-2">
                                  {comp.subcategories.map((sub, j) => (
                                    <div key={j} className={`${
                                      darkMode ? 'bg-gray-800' : 'bg-white'
                                    } p-2 rounded`}>
                                      <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {sub.type}
                                      </span>
                                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm ml-2`}>
                                        - {sub.detail}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {comp.flow && (
                                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded mt-3`}>
                                  {comp.flow.map((step, j) => (
                                    <div key={j} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ${
                                      j > 0 ? 'mt-1' : ''
                                    }`}>
                                      {step}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        ))}

                        {section.keyMetrics && (
                          <div className={`${darkMode ? 'bg-yellow-900' : 'bg-yellow-50'} p-4 rounded-lg`}>
                            <h5 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-3`}>
                              📊 Key Metrics:
                            </h5>
                            {section.keyMetrics.map((metric, i) => (
                              <div key={i} className="mb-2">
                                <span className={`font-semibold ${darkMode ? 'text-yellow-200' : 'text-yellow-900'}`}>
                                  {metric.metric}:
                                </span>
                                <span className={`${darkMode ? 'text-yellow-100' : 'text-yellow-800'} ml-2 font-mono`}>
                                  {metric.formula}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {section.formula && (
                          <div className={`${
                            darkMode ? 'bg-green-900 border-green-600' : 'bg-green-50 border-green-500'
                          } p-4 rounded-lg border-l-4`}>
                            <p className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-800'} text-lg`}>
                              ⚖️ {section.formula}
                            </p>
                            {section.keyPoint && (
                              <p className={`${darkMode ? 'text-green-200' : 'text-green-700'} text-sm mt-2`}>
                                {section.keyPoint}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Notes Categories */}
                        {section.categories && (
                          <div className="space-y-4">
                            {section.categories.map((cat, i) => (
                              <div key={i} className={`${
                                darkMode ? 'bg-gray-900' : 'bg-purple-50'
                              } p-4 rounded-lg`}>
                                <h5 className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'} mb-2`}>
                                  {cat.category}
                                </h5>
                                <ul className="space-y-1">
                                  {cat.examples.map((ex, j) => (
                                    <li key={j} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                                      • {ex}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Relationships */}
                        {section.relationships && (
                          <div className="space-y-4">
                            {section.relationships.map((rel, i) => (
                              <div key={i} className={`${
                                darkMode ? 'bg-blue-900 border-blue-600' : 'bg-blue-50 border-blue-400'
                              } p-4 rounded-lg border-l-4`}>
                                <h5 className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-2`}>
                                  {rel.connection}
                                </h5>
                                <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-2`}>
                                  {rel.explanation}
                                </p>
                                {rel.example && (
                                  <p className={`${darkMode ? 'text-blue-100' : 'text-blue-600'} text-sm italic`}>
                                    Example: {rel.example}
                                  </p>
                                )}
                                {rel.aspects && (
                                  <ul className="mt-2 space-y-1">
                                    {rel.aspects.map((aspect, j) => (
                                      <li key={j} className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-sm`}>
                                        • {aspect}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* GAAP Content */}
            {activeSection === 'gaap' && (
              <div className="space-y-6">
                <div className={`${
                  darkMode ? 'bg-purple-900 border-purple-600' : 'bg-purple-50 border-purple-500'
                } p-6 rounded-lg border-l-4`}>
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-900'} mb-2`}>
                    {currentContent.title}
                  </h2>
                  <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} mb-4`}>
                    {currentContent.subtitle}
                  </p>
                  <div className={`${darkMode ? 'bg-purple-950' : 'bg-purple-100'} p-4 rounded`}>
                    <p className={`${darkMode ? 'text-purple-200' : 'text-purple-800'} font-semibold mb-2`}>
                      Definition:
                    </p>
                    <p className={`${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
                      {currentContent.intro.definition}
                    </p>
                    <p className={`${darkMode ? 'text-purple-200' : 'text-purple-800'} font-semibold mt-3 mb-2`}>
                      Purpose:
                    </p>
                    <p className={`${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
                      {currentContent.intro.purpose}
                    </p>
                  </div>
                </div>

                {/* 12 GAAP Principles */}
                <div className="space-y-4">
                  {currentContent.principles.map((principle) => (
                    <div key={principle.id} className={`${
                      darkMode ? 'bg-gray-800 border-indigo-500' : 'bg-white border-indigo-300'
                    } rounded-lg border-2 shadow-lg overflow-hidden`}>
                      <button
                        onClick={() => setExpandedItem(expandedItem === `principle-${principle.id}` ? null : `principle-${principle.id}`)}
                        className={`w-full p-4 text-left flex justify-between items-center ${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`${
                            darkMode ? 'bg-indigo-600' : 'bg-indigo-600'
                          } text-white rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
                            {principle.id}
                          </span>
                          <div>
                            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {principle.name}
                            </h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {principle.description}
                            </p>
                          </div>
                        </div>
                        <span className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {expandedItem === `principle-${principle.id}` ? '−' : '+'}
                        </span>
                      </button>
                      
                      {expandedItem === `principle-${principle.id}` && (
                        <div className="p-6 space-y-4">
                          <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} p-4 rounded-lg`}>
                            <h4 className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-2`}>
                              📝 Explanation:
                            </h4>
                            <p className={`${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
                              {principle.explanation}
                            </p>
                          </div>

                          <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-4 rounded-lg`}>
                            <h4 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-2`}>
                              💡 Example:
                            </h4>
                            <p className={`${darkMode ? 'text-green-100' : 'text-green-700'} whitespace-pre-line`}>
                              {principle.example}
                            </p>
                          </div>

                          <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-50'} p-4 rounded-lg`}>
                            <h4 className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-2`}>
                              ⭐ Importance:
                            </h4>
                            <p className={`${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
                              {principle.importance}
                            </p>
                          </div>

                          {principle.limitation && (
                            <div className={`${darkMode ? 'bg-red-900' : 'bg-red-50'} p-4 rounded-lg`}>
                              <h4 className={`font-bold ${darkMode ? 'text-red-300' : 'text-red-800'} mb-2`}>
                                ⚠️ Limitation:
                              </h4>
                              <p className={`${darkMode ? 'text-red-100' : 'text-red-700'}`}>
                                {principle.limitation}
                              </p>
                            </div>
                          )}

                          {principle.examTip && (
                            <div className={`${darkMode ? 'bg-yellow-900' : 'bg-yellow-50'} p-4 rounded-lg`}>
                              <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-2`}>
                                🎯 Exam Tip:
                              </h4>
                              <p className={`${darkMode ? 'text-yellow-100' : 'text-yellow-700'}`}>
                                {principle.examTip}
                              </p>
                            </div>
                          )}

                          {principle.formula && (
                            <div className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-50'} p-4 rounded-lg`}>
                              <h4 className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} mb-2`}>
                                📐 Formula:
                              </h4>
                              <p className={`${darkMode ? 'text-indigo-100' : 'text-indigo-700'} font-mono`}>
                                {principle.formula}
                              </p>
                            </div>
                          )}

                          {principle.standard && (
                            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded`}>
                              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} italic`}>
                                📌 {principle.standard}
                              </p>
                            </div>
                          )}

                          {principle.saying && (
                            <div className={`${darkMode ? 'bg-orange-900' : 'bg-orange-50'} p-3 rounded`}>
                              <p className={`text-sm ${darkMode ? 'text-orange-200' : 'text-orange-800'} font-semibold italic`}>
                                💭 "{principle.saying}"
                              </p>
                            </div>
                          )}

                          {principle.guideline && (
                            <div className={`${darkMode ? 'bg-teal-900' : 'bg-teal-50'} p-3 rounded`}>
                              <p className={`text-sm ${darkMode ? 'text-teal-200' : 'text-teal-800'}`}>
                                📋 Guideline: {principle.guideline}
                              </p>
                            </div>
                          )}

                          {principle.requirement && (
                            <div className={`${darkMode ? 'bg-pink-900' : 'bg-pink-50'} p-3 rounded`}>
                              <p className={`text-sm ${darkMode ? 'text-pink-200' : 'text-pink-800'}`}>
                                ✓ Requirement: {principle.requirement}
                              </p>
                            </div>
                          )}

                          {principle.exception && (
                            <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} p-3 rounded`}>
                              <p className={`text-sm ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}>
                                ⚡ Exception: {principle.exception}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Benefits of GAAP */}
                <div className={`${
                  darkMode ? 'bg-gradient-to-r from-green-900 to-emerald-900 border-green-600' : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500'
                } p-6 rounded-lg border-l-4 shadow-lg`}>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-green-300' : 'text-green-900'} mb-4`}>
                    ✨ Benefits of Following GAAP:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentContent.benefits.map((benefit, i) => (
                      <div key={i} className={`${
                        darkMode ? 'bg-green-950' : 'bg-white'
                      } p-4 rounded-lg shadow`}>
                        <h4 className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-800'} mb-2`}>
                          {benefit.benefit}
                        </h4>
                        <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-700'} mb-2`}>
                          {benefit.explanation}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-green-600'} italic`}>
                          Impact: {benefit.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary Card */}
        <div className={`${
          darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900 border-indigo-600' : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300'
        } rounded-xl shadow-lg p-6 border-2`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-900'} mb-4 flex items-center`}>
            <span className="mr-3">🎯</span>
            Key Takeaways:
          </h3>
          <div className="space-y-3">
            <div className={`${darkMode ? 'bg-indigo-950' : 'bg-white'} p-4 rounded-lg`}>
              <p className={`${darkMode ? 'text-indigo-200' : 'text-indigo-800'}`}>
                <strong>Financial Statements:</strong> Balance Sheet shows position, P&L shows performance, Notes explain everything
              </p>
            </div>
            <div className={`${darkMode ? 'bg-purple-950' : 'bg-white'} p-4 rounded-lg`}>
              <p className={`${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                <strong>Schedule III:</strong> Mandatory format for Indian companies under Companies Act 2013
              </p>
            </div>
            <div className={`${darkMode ? 'bg-pink-950' : 'bg-white'} p-4 rounded-lg`}>
              <p className={`${darkMode ? 'text-pink-200' : 'text-pink-800'}`}>
                <strong>GAAP:</strong> 12 principles ensure reliability, consistency, and comparability
              </p>
            </div>
            <div className={`${darkMode ? 'bg-blue-950' : 'bg-white'} p-4 rounded-lg`}>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                <strong>Together:</strong> Financial statements + GAAP = Complete, trustworthy financial picture
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg p-6 text-center mt-8`}>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
            📚 Complete guide to Financial Statements and GAAP for your exam
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Click on each section to expand and learn in detail. Practice explaining each concept!
          </p>
        </div>
      </div>
    </div>
  );
}
