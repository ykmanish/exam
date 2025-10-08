// pages/ratios.js or app/ratios/page.js
'use client';
import { useState, useEffect } from 'react';

export default function RatioAnalysis() {
  const [activeCategory, setActiveCategory] = useState('liquidity');
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [showFormulas, setShowFormulas] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  // All questions data organized by category
  const questions = {
    liquidity: {
      title: "Liquidity Ratios (Q1-Q3)",
      description: "Measure company's ability to pay short-term obligations",
      questions: [
        {
          id: 1,
          question: "A Business has a Current Ratio of 3:1. Its net working capital is Rs.4,00,000 and its stock is valued at Rs.2,50,000. Calculate Liquid Ratio.",
          given: [
            "Current Ratio = 3:1",
            "Net Working Capital = Rs.4,00,000",
            "Stock = Rs.2,50,000"
          ],
          solution: [
            {
              step: "Understanding Current Ratio",
              explanation: "Current Ratio = Current Assets / Current Liabilities = 3/1",
              calculation: "This means Current Assets are 3 times Current Liabilities"
            },
            {
              step: "Understanding Net Working Capital",
              explanation: "Net Working Capital = Current Assets - Current Liabilities",
              calculation: "Rs.4,00,000 = CA - CL"
            },
            {
              step: "Solve for CA and CL",
              explanation: "Let Current Liabilities = x, Then Current Assets = 3x",
              calculation: "3x - x = 4,00,000 → 2x = 4,00,000 → x = 2,00,000"
            },
            {
              step: "Calculate values",
              explanation: "Current Liabilities = Rs.2,00,000\nCurrent Assets = 3 × 2,00,000 = Rs.6,00,000",
              calculation: "CL = Rs.2,00,000\nCA = Rs.6,00,000"
            },
            {
              step: "Calculate Liquid Assets",
              explanation: "Liquid Assets = Current Assets - Stock",
              calculation: "= Rs.6,00,000 - Rs.2,50,000 = Rs.3,50,000"
            },
            {
              step: "Calculate Liquid Ratio",
              explanation: "Liquid Ratio = Liquid Assets / Current Liabilities",
              calculation: "= Rs.3,50,000 / Rs.2,00,000 = 1.75:1"
            }
          ],
          answer: "Liquid Ratio = 1.75:1",
          keyLearning: "Liquid Ratio excludes stock from current assets because stock takes time to convert to cash."
        },
        {
          id: 2,
          question: "Calculate Current Ratio and Quick Ratio from: Sundry Debtors Rs.4,00,000; Prepaid Expenses Rs.40,000; Debentures Rs.2,00,000; Stock Rs.1,60,000; Bills Payable Rs.80,000; Marketable Securities Rs.80,000; Sundry Creditors Rs.1,60,000; Cash Rs.1,20,000; Expenses Payable Rs.1,60,000.",
          given: [
            "Sundry Debtors = Rs.4,00,000",
            "Prepaid Expenses = Rs.40,000",
            "Debentures = Rs.2,00,000 (Long-term)",
            "Stock = Rs.1,60,000",
            "Bills Payable = Rs.80,000",
            "Marketable Securities = Rs.80,000",
            "Sundry Creditors = Rs.1,60,000",
            "Cash = Rs.1,20,000",
            "Expenses Payable = Rs.1,60,000"
          ],
          solution: [
            {
              step: "Identify Current Assets",
              explanation: "Current Assets include: Debtors, Prepaid, Stock, Marketable Securities, Cash",
              calculation: "CA = 4,00,000 + 40,000 + 1,60,000 + 80,000 + 1,20,000 = Rs.8,00,000"
            },
            {
              step: "Identify Current Liabilities",
              explanation: "Current Liabilities include: Bills Payable, Creditors, Expenses Payable\n(Debentures are EXCLUDED - they're long-term)",
              calculation: "CL = 80,000 + 1,60,000 + 1,60,000 = Rs.4,00,000"
            },
            {
              step: "Calculate Current Ratio",
              explanation: "Current Ratio = Current Assets / Current Liabilities",
              calculation: "= 8,00,000 / 4,00,000 = 2:1"
            },
            {
              step: "Calculate Quick Assets",
              explanation: "Quick Assets = CA - Stock - Prepaid Expenses\n(Remove illiquid items)",
              calculation: "= 8,00,000 - 1,60,000 - 40,000 = Rs.6,00,000"
            },
            {
              step: "Calculate Quick Ratio",
              explanation: "Quick Ratio = Quick Assets / Current Liabilities",
              calculation: "= 6,00,000 / 4,00,000 = 1.5:1"
            }
          ],
          answer: "Current Ratio = 2:1, Quick Ratio = 1.5:1",
          keyLearning: "Always exclude long-term liabilities (like Debentures) from current liabilities. Prepaid expenses are excluded from quick assets."
        },
        {
          id: 3,
          question: "Calculate Current Assets from: Stock Turnover: 4 Times; Stock at end is Rs.20,000 more than beginning; Sales Rs.3,00,000; Gross Profit Ratio 25%; Current Liabilities Rs.40,000; Quick Ratio 0.75:1",
          given: [
            "Stock Turnover = 4 Times",
            "Closing Stock = Opening Stock + Rs.20,000",
            "Sales = Rs.3,00,000",
            "Gross Profit Ratio = 25%",
            "Current Liabilities = Rs.40,000",
            "Quick Ratio = 0.75:1"
          ],
          solution: [
            {
              step: "Calculate COGS",
              explanation: "If GP Ratio = 25%, then COGS = 75% of Sales",
              calculation: "COGS = 75% of 3,00,000 = Rs.2,25,000"
            },
            {
              step: "Calculate Average Stock",
              explanation: "Stock Turnover = COGS / Average Stock\n4 = 2,25,000 / Average Stock",
              calculation: "Average Stock = 2,25,000 / 4 = Rs.56,250"
            },
            {
              step: "Calculate Opening & Closing Stock",
              explanation: "Let Opening = x, Closing = x + 20,000\nAverage = (x + x + 20,000) / 2 = 56,250",
              calculation: "2x + 20,000 = 1,12,500\nx = 46,250\n\nOpening = Rs.46,250\nClosing = Rs.66,250"
            },
            {
              step: "Calculate Quick Assets",
              explanation: "Quick Ratio = Quick Assets / CL\n0.75 = QA / 40,000",
              calculation: "Quick Assets = 0.75 × 40,000 = Rs.30,000"
            },
            {
              step: "Calculate Current Assets",
              explanation: "Current Assets = Quick Assets + Closing Stock",
              calculation: "= 30,000 + 66,250 = Rs.96,250"
            }
          ],
          answer: "Current Assets = Rs.96,250",
          keyLearning: "Stock Turnover uses COGS, not Sales. Average stock = (Opening + Closing) / 2"
        }
      ]
    },
    impact: {
      title: "Impact Analysis (Q4-Q5)",
      description: "How transactions affect Current Ratio",
      questions: [
        {
          id: 4,
          question: "Current Ratio = 2:1. State effect of: (i) Repayment of Current Liability (ii) Purchasing goods on credit (iii) Sale of office equipment for Rs.4,000 (Book Value Rs.5,000) (iv) Sale of goods Rs.11,000 (Cost Rs.10,000) (v) Payment of Dividend",
          given: ["Initial Current Ratio = 2:1", "Assume CA = Rs.2,00,000, CL = Rs.1,00,000"],
          solution: [
            {
              step: "Transaction (i): Repayment of Current Liability",
              explanation: "When CR > 1, equal decrease in CA and CL IMPROVES ratio\nCA decreases (cash out), CL decreases (liability paid)",
              calculation: "New: CA = 1,90,000, CL = 90,000 → Ratio = 2.11:1\nEffect: IMPROVES ✓"
            },
            {
              step: "Transaction (ii): Purchasing goods on credit",
              explanation: "When CR > 1, equal increase in CA and CL REDUCES ratio\nCA increases (stock), CL increases (creditors)",
              calculation: "New: CA = 2,10,000, CL = 1,10,000 → Ratio = 1.91:1\nEffect: REDUCES ✗"
            },
            {
              step: "Transaction (iii): Sale of equipment at loss",
              explanation: "CA increases (cash Rs.4,000 in), Fixed Asset decreases\nLoss doesn't affect CA or CL immediately",
              calculation: "New: CA = 2,04,000, CL = 1,00,000 → Ratio = 2.04:1\nEffect: IMPROVES ✓"
            },
            {
              step: "Transaction (iv): Sale of goods at profit",
              explanation: "Cash increases Rs.11,000, Stock decreases Rs.10,000\nNet CA increase = Rs.1,000",
              calculation: "New: CA = 2,01,000, CL = 1,00,000 → Ratio = 2.01:1\nEffect: IMPROVES ✓"
            },
            {
              step: "Transaction (v): Payment of Dividend",
              explanation: "Equal decrease in CA (cash) and CL (dividend payable)\nSame as repaying current liability",
              calculation: "Effect: IMPROVES ✓"
            }
          ],
          answer: "(i) IMPROVE (ii) REDUCE (iii) IMPROVE (iv) IMPROVE (v) IMPROVE",
          keyLearning: "Rule: When CR > 1, equal changes IMPROVE ratio if decrease, REDUCE if increase"
        }
      ]
    },
    solvency: {
      title: "Solvency Ratios (Q6-Q8)",
      description: "Measure long-term financial stability",
      questions: [
        {
          id: 6,
          question: "Calculate Debt Equity Ratio from: Equity Share Capital Rs.5,00,000; General Reserve Rs.1,00,000; Accumulated Profits Rs.50,000; 10% Debentures Rs.1,30,000; Current Liabilities Rs.1,00,000; Preliminary Expenses Rs.10,000",
          given: [
            "Equity Share Capital = Rs.5,00,000",
            "General Reserve = Rs.1,00,000",
            "Accumulated Profits = Rs.50,000",
            "10% Debentures = Rs.1,30,000",
            "Current Liabilities = Rs.1,00,000",
            "Preliminary Expenses = Rs.10,000"
          ],
          solution: [
            {
              step: "Calculate Shareholders' Equity",
              explanation: "Equity = Share Capital + Reserves - Fictitious Assets\nPreliminary Expenses are fictitious assets (deducted)",
              calculation: "= 5,00,000 + 1,00,000 + 50,000 - 10,000\n= Rs.6,40,000"
            },
            {
              step: "Calculate Total Debt",
              explanation: "Debt = Long-term borrowings only\nDebentures are long-term debt\nCurrent Liabilities are NOT included in 'Debt'",
              calculation: "Total Debt = Rs.1,30,000 (Debentures only)"
            },
            {
              step: "Calculate Debt-Equity Ratio",
              explanation: "Debt-Equity Ratio = Total Debt / Shareholders' Equity",
              calculation: "= 1,30,000 / 6,40,000 = 0.203:1 or 0.20:1"
            }
          ],
          answer: "Debt-Equity Ratio = 0.20:1",
          keyLearning: "Important: Current Liabilities are NEVER included in 'Debt' for Debt-Equity Ratio. Only long-term debts count."
        },
        {
          id: 7,
          question: "Calculate Debt Equity Ratio and Current Ratio from: Share Capital Rs.2,50,000; Bills Payable Rs.15,000; Creditors Rs.45,000; Debtors Rs.60,000; 12% Debentures Rs.2,80,000; Bank Balance Rs.30,000; Long Term Loan Rs.1,10,000; General Reserve Rs.25,000",
          given: [
            "Share Capital = Rs.2,50,000",
            "Bills Payable = Rs.15,000",
            "Creditors = Rs.45,000",
            "Debtors = Rs.60,000",
            "12% Debentures = Rs.2,80,000",
            "Bank Balance = Rs.30,000",
            "Long Term Loan = Rs.1,10,000",
            "General Reserve = Rs.25,000"
          ],
          solution: [
            {
              step: "Calculate Shareholders' Equity",
              explanation: "Equity = Share Capital + Reserves",
              calculation: "= 2,50,000 + 25,000 = Rs.2,75,000"
            },
            {
              step: "Calculate Total Debt",
              explanation: "Debt = Debentures + Long-term Loans",
              calculation: "= 2,80,000 + 1,10,000 = Rs.3,90,000"
            },
            {
              step: "Calculate Debt-Equity Ratio",
              explanation: "D/E = Total Debt / Equity",
              calculation: "= 3,90,000 / 2,75,000 = 1.42:1"
            },
            {
              step: "Calculate Current Assets",
              explanation: "CA = Debtors + Bank Balance",
              calculation: "= 60,000 + 30,000 = Rs.90,000"
            },
            {
              step: "Calculate Current Liabilities",
              explanation: "CL = Bills Payable + Creditors",
              calculation: "= 15,000 + 45,000 = Rs.60,000"
            },
            {
              step: "Calculate Current Ratio",
              explanation: "Current Ratio = CA / CL",
              calculation: "= 90,000 / 60,000 = 1.5:1"
            }
          ],
          answer: "Debt-Equity = 1.42:1, Current Ratio = 1.5:1",
          keyLearning: "Both Debentures and Long-term Loans are included in Debt"
        },
        {
          id: 8,
          question: "Calculate Debt Equity Ratio and Proprietary Ratio from: Equity Share Capital Rs.75,000; Reserve and Surplus Rs.20,000; Debentures Rs.40,000; Loan from HDFC Bank Rs.30,000; Current Liabilities Rs.15,000; Fixed Tangible Assets Rs.82,000; Goodwill Rs.48,000; Current Assets Rs.50,000",
          given: [
            "Equity Share Capital = Rs.75,000",
            "Reserve and Surplus = Rs.20,000",
            "Debentures = Rs.40,000",
            "Loan from HDFC = Rs.30,000",
            "Current Liabilities = Rs.15,000",
            "Fixed Tangible Assets = Rs.82,000",
            "Goodwill = Rs.48,000",
            "Current Assets = Rs.50,000"
          ],
          solution: [
            {
              step: "Calculate Shareholders' Equity",
              explanation: "Equity = Share Capital + Reserves",
              calculation: "= 75,000 + 20,000 = Rs.95,000"
            },
            {
              step: "Calculate Total Debt",
              explanation: "Debt = Debentures + Bank Loan",
              calculation: "= 40,000 + 30,000 = Rs.70,000"
            },
            {
              step: "Calculate Debt-Equity Ratio",
              explanation: "D/E = Debt / Equity",
              calculation: "= 70,000 / 95,000 = 0.7368:1 or 0.74:1"
            },
            {
              step: "Calculate Total Assets",
              explanation: "Total Assets = Fixed Assets + Goodwill + Current Assets",
              calculation: "= 82,000 + 48,000 + 50,000 = Rs.1,80,000"
            },
            {
              step: "Calculate Proprietary Ratio",
              explanation: "Proprietary Ratio = Shareholders' Equity / Total Assets\nShows what % of assets are owned by shareholders",
              calculation: "= 95,000 / 1,80,000 = 0.5278:1 or 0.53:1"
            }
          ],
          answer: "Debt-Equity = 0.74:1, Proprietary Ratio = 0.53:1",
          keyLearning: "Proprietary Ratio shows financial independence. Higher ratio means company relies less on external debt."
        }
      ]
    },
    deImpact: {
      title: "D/E Impact Analysis (Q9-Q10)",
      description: "How transactions affect Debt-Equity Ratio",
      questions: [
        {
          id: 9,
          question: "Debt-Equity = 2:1. State effect of: (i) Purchase of fixed asset on credit (2 months) (ii) Purchase on long-term deferred payment (iii) Issue new shares for cash (iv) Issue bonus shares (v) Sale of fixed asset at loss Rs.3,000",
          given: ["Initial Debt-Equity Ratio = 2:1"],
          solution: [
            {
              step: "Transaction (i): Purchase asset on short credit",
              explanation: "Current Liability increases (2 months = short-term)\nEquity unchanged\nBut wait - CL is NOT part of 'Debt' in D/E Ratio!",
              calculation: "Effect: NO CHANGE ✓\n(Current Liabilities don't affect D/E Ratio)"
            },
            {
              step: "Transaction (ii): Purchase on long-term payment",
              explanation: "Long-term Debt increases (deferred = long-term)\nEquity unchanged\nDebt ↑, Equity same → Ratio INCREASES",
              calculation: "Effect: INCREASE ✗"
            },
            {
              step: "Transaction (iii): Issue new shares",
              explanation: "Cash in, Equity increases\nDebt same, Equity ↑ → Ratio DECREASES",
              calculation: "Effect: DECREASE ✓\n(Good for company)"
            },
            {
              step: "Transaction (iv): Issue bonus shares",
              explanation: "Bonus = Reserves converted to Share Capital\nTotal Equity remains same (just internal transfer)\nDebt unchanged",
              calculation: "Effect: NO CHANGE ✓"
            },
            {
              step: "Transaction (v): Sale at loss",
              explanation: "Loss reduces Profit → reduces Equity\nDebt same, Equity ↓ → Ratio INCREASES",
              calculation: "Effect: INCREASE ✗\n(Bad for company)"
            }
          ],
          answer: "(i) NO CHANGE (ii) INCREASE (iii) DECREASE (iv) NO CHANGE (v) INCREASE",
          keyLearning: "Remember: Only LONG-TERM debts affect D/E Ratio. Profits increase equity, losses decrease it."
        }
      ]
    },
    turnover: {
      title: "Turnover Ratios (Q11-Q12)",
      description: "Measure operational efficiency",
      questions: [
        {
          id: 11,
          question: "Calculate Inventory Turnover Ratio from: Sales Rs.3,00,000; Gross profit 25% on cost; Opening stock was 1/3rd of closing stock; Closing stock was 30% of sales.",
          given: [
            "Sales = Rs.3,00,000",
            "Gross Profit = 25% on cost",
            "Opening Stock = 1/3 of Closing Stock",
            "Closing Stock = 30% of Sales"
          ],
          solution: [
            {
              step: "Calculate Closing Stock",
              explanation: "Closing Stock = 30% of Sales",
              calculation: "= 30% of 3,00,000 = Rs.90,000"
            },
            {
              step: "Calculate Opening Stock",
              explanation: "Opening = 1/3 of Closing",
              calculation: "= 90,000 / 3 = Rs.30,000"
            },
            {
              step: "Calculate COGS",
              explanation: "GP is 25% ON COST (not on sales)\nIf Cost = 100, GP = 25, then Sales = 125\nSales = Cost × 1.25",
              calculation: "3,00,000 = Cost × 1.25\nCost (COGS) = 3,00,000 / 1.25 = Rs.2,40,000"
            },
            {
              step: "Calculate Average Stock",
              explanation: "Average = (Opening + Closing) / 2",
              calculation: "= (30,000 + 90,000) / 2 = Rs.60,000"
            },
            {
              step: "Calculate Inventory Turnover",
              explanation: "Inventory Turnover = COGS / Average Stock",
              calculation: "= 2,40,000 / 60,000 = 4 times"
            }
          ],
          answer: "Inventory Turnover Ratio = 4 times",
          keyLearning: "GP 'on cost' vs 'on sales' is different! On cost: Sales = Cost × (1 + GP%). Stock turnover always uses COGS, never Sales."
        },
        {
          id: 12,
          question: "Net Credit Sales Rs.1,80,000; Debtors turnover 4 times; Closing debtors = 2 × Opening debtors. Calculate opening and closing debtors.",
          given: [
            "Net Credit Sales = Rs.1,80,000",
            "Debtors Turnover Ratio = 4 times",
            "Closing Debtors = 2 × Opening Debtors"
          ],
          solution: [
            {
              step: "Calculate Average Debtors",
              explanation: "Debtors Turnover = Sales / Average Debtors\n4 = 1,80,000 / Average Debtors",
              calculation: "Average Debtors = 1,80,000 / 4 = Rs.45,000"
            },
            {
              step: "Set up equations",
              explanation: "Let Opening Debtors = x\nThen Closing Debtors = 2x\nAverage = (x + 2x) / 2 = 45,000",
              calculation: "3x / 2 = 45,000\n3x = 90,000\nx = 30,000"
            },
            {
              step: "Calculate values",
              explanation: "Opening Debtors = x = Rs.30,000\nClosing Debtors = 2x = Rs.60,000",
              calculation: "Opening = Rs.30,000\nClosing = Rs.60,000"
            },
            {
              step: "Verify",
              explanation: "Check: Average = (30,000 + 60,000) / 2 = 45,000 ✓\nTurnover = 1,80,000 / 45,000 = 4 ✓",
              calculation: "All calculations verified!"
            }
          ],
          answer: "Opening Debtors = Rs.30,000, Closing Debtors = Rs.60,000",
          keyLearning: "Turnover ratios measure efficiency. Higher turnover = faster collection/sales = better for business."
        }
      ]
    }
  };

  // Formula reference data
  const formulas = {
    "Liquidity Ratios": [
      { name: "Current Ratio", formula: "Current Assets ÷ Current Liabilities", ideal: "2:1 or more" },
      { name: "Quick Ratio", formula: "(CA - Stock - Prepaid) ÷ CL", ideal: "1:1 or more" },
      { name: "Net Working Capital", formula: "Current Assets - Current Liabilities", ideal: "Positive" }
    ],
    "Solvency Ratios": [
      { name: "Debt-Equity Ratio", formula: "Long-term Debt ÷ Shareholders' Equity", ideal: "Less than 2:1" },
      { name: "Proprietary Ratio", formula: "Shareholders' Equity ÷ Total Assets", ideal: "0.5:1 or more" },
      { name: "Debt to Assets", formula: "Total Debt ÷ Total Assets", ideal: "Less than 0.5" }
    ],
    "Turnover Ratios": [
      { name: "Inventory Turnover", formula: "COGS ÷ Average Stock", ideal: "Higher is better" },
      { name: "Debtors Turnover", formula: "Net Credit Sales ÷ Avg Debtors", ideal: "Higher is better" },
      { name: "Asset Turnover", formula: "Net Sales ÷ Total Assets", ideal: "Higher is better" }
    ]
  };

  const currentQuestions = questions[activeCategory]?.questions || [];
  const currentQuestion = currentQuestions.find(q => q.id === activeQuestion) || currentQuestions[0];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#0c0c0c]' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    } py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Fixed Buttons */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-black text-white hover:bg-gray-700'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          {/* Formula Toggle */}
          <button
            onClick={() => setShowFormulas(!showFormulas)}
            className={`px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
              showFormulas 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : darkMode
                ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {showFormulas ? '✓ Formula Sheet' : '📋 Show Formulas'}
          </button>
        </div>

        {/* Header */}
        <div className={`${
          darkMode ? 'bg-black border-indigo-500' : 'bg-white border-indigo-600'
        } rounded-xl shadow-lg p-8 mb-8 border-t-4 transition-colors duration-300`}>
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              📊 Accounting Ratios - Complete Guide
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Master all ratio analysis questions for your exam
            </p>
          </div>
        </div>

        {/* Formula Sheet Modal */}
        {showFormulas && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${
              darkMode ? 'bg-black' : 'bg-white'
            } rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  📖 Formula Reference Sheet
                </h2>
                <button
                  onClick={() => setShowFormulas(false)}
                  className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} text-3xl`}
                >
                  ×
                </button>
              </div>

              {Object.entries(formulas).map(([category, ratios]) => (
                <div key={category} className="mb-6">
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-indigo-400 border-indigo-700' : 'text-indigo-700 border-indigo-200'
                  } mb-3 border-b-2 pb-2`}>
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {ratios.map((ratio, idx) => (
                      <div key={idx} className={`${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      } p-4 rounded-lg`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {ratio.name}
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono mt-1`}>
                              {ratio.formula}
                            </p>
                          </div>
                          <span className={`text-xs ${
                            darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                          } px-3 py-1 rounded-full`}>
                            {ratio.ideal}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className={`${
                darkMode ? 'bg-yellow-900 border-yellow-700' : 'bg-yellow-50 border-yellow-500'
              } border-l-4 p-4 rounded mt-6`}>
                <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-2`}>
                  ⚡ Quick Tips:
                </h4>
                <ul className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'} space-y-1`}>
                  <li>• Current Liabilities are NEVER part of "Debt" in Debt-Equity Ratio</li>
                  <li>• Stock Turnover uses COGS, not Sales</li>
                  <li>• When CR {'>'} 1: Equal decrease improves, equal increase reduces</li>
                  <li>• GP "on cost" ≠ GP "on sales" - be careful!</li>
                  <li>• Fictitious assets reduce Shareholders' Equity</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Category Navigation */}
        <div className={`${
          darkMode ? 'bg-black' : 'bg-white'
        } rounded-xl shadow-lg overflow-hidden mb-8 transition-colors duration-300`}>
          <div className="flex flex-wrap border-b border-gray-200">
            {Object.entries(questions).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setActiveQuestion(cat.questions[0].id);
                }}
                className={`flex-1 min-w-[150px] py-4 px-4 text-center font-semibold transition-all duration-200 ${
                  activeCategory === key
                    ? darkMode
                      ? 'bg-indigo-500 text-white'
                      : 'bg-indigo-600 text-white'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <div className={`p-4 ${
            darkMode ? 'bg-indigo-900 border-indigo-800' : 'bg-indigo-50 border-indigo-100'
          } border-b`}>
            <p className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-800'}`}>
              <strong>{questions[activeCategory]?.title}:</strong> {questions[activeCategory]?.description}
            </p>
          </div>

          {/* Question Navigation */}
          {currentQuestions.length > 1 && (
            <div className={`p-4 ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            } border-b`}>
              <div className="flex flex-wrap gap-2">
                <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mr-2`}>
                  Questions:
                </span>
                {currentQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestion(q.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeQuestion === q.id
                        ? darkMode
                          ? 'bg-indigo-500 text-white'
                          : 'bg-indigo-600 text-white'
                        : darkMode
                        ? 'bg-gray-600 text-gray-200 hover:bg-gray-500 border border-gray-500'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Q{q.id}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question Content */}
          <div className="p-6">
            {currentQuestion && (
              <div className="space-y-6">
                {/* Question */}
                <div className={`${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-900 to-indigo-900 border-indigo-600' 
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-indigo-500'
                } p-6 rounded-lg border-l-4`}>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                    Question {currentQuestion.id}
                  </h3>
                  <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
                    {currentQuestion.question}
                  </p>
                </div>

                {/* Given Data */}
                <div className={`${
                  darkMode 
                    ? 'bg-green-900 border-green-600' 
                    : 'bg-green-50 border-green-500'
                } p-6 rounded-lg border-l-4`}>
                  <h4 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>
                    📝 Given Data:
                  </h4>
                  <ul className="space-y-2">
                    {currentQuestion.given.map((item, idx) => (
                      <li key={idx} className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} flex items-start`}>
                        <span className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step Solution */}
                <div className={`${
                  darkMode ? 'bg-black border-purple-500' : 'bg-white border-purple-200'
                } p-6 rounded-lg border-2`}>
                  <h4 className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'} mb-4 text-xl`}>
                    🎯 Step-by-Step Solution:
                  </h4>
                  <div className="space-y-6">
                    {currentQuestion.solution.map((step, idx) => (
                      <div key={idx} className={`${
                        darkMode ? 'bg-purple-900 border-purple-600' : 'bg-purple-50 border-purple-500'
                      } p-5 rounded-lg border-l-4`}>
                        <div className="flex items-start mb-3">
                          <span className={`${
                            darkMode ? 'bg-purple-600' : 'bg-purple-600'
                          } text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0`}>
                            {idx + 1}
                          </span>
                          <h5 className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-900'} text-lg`}>
                            {step.step}
                          </h5>
                        </div>
                        <div className="ml-11">
                          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-3 whitespace-pre-line`}>
                            {step.explanation}
                          </p>
                          <div className={`${
                            darkMode ? 'bg-gray-900 border-purple-700' : 'bg-white border-purple-200'
                          } p-4 rounded border-2`}>
                            <p className={`font-mono text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'} whitespace-pre-line`}>
                              {step.calculation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Answer */}
                <div className={`${
                  darkMode 
                    ? 'bg-gradient-to-r from-green-900 to-emerald-900 border-green-600' 
                    : 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500'
                } p-6 rounded-lg border-4 shadow-lg`}>
                  <div className="flex items-center mb-3">
                    <span className="text-4xl mr-3">🎉</span>
                    <h4 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-900'} text-xl`}>
                      Final Answer:
                    </h4>
                  </div>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-800'} ml-16`}>
                    {currentQuestion.answer}
                  </p>
                </div>

                {/* Key Learning */}
                <div className={`${
                  darkMode ? 'bg-yellow-900 border-yellow-600' : 'bg-yellow-50 border-yellow-500'
                } border-l-4 p-6 rounded-lg`}>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <div>
                      <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-2`}>
                        Key Learning Point:
                      </h4>
                      <p className={darkMode ? 'text-yellow-200' : 'text-yellow-700'}>
                        {currentQuestion.keyLearning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className={`${
          darkMode 
            ? 'bg-gradient-to-r from-indigo-900 to-purple-900 border-indigo-600' 
            : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300'
        } rounded-xl shadow-lg p-6 border-2`}>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-900'} mb-4`}>
            ⚡ Quick Reference Rules:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-2`}>
                Current Ratio Rules
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                <li>• When CR {'>'} 1: Equal ↓ = IMPROVE</li>
                <li>• When CR {'>'} 1: Equal ↑ = REDUCE</li>
                <li>• Healthy ratio: 2:1 or higher</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-2`}>
                Debt-Equity Rules
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                <li>• Only long-term debt counts</li>
                <li>• CL is NOT part of "Debt"</li>
                <li>• Safe ratio: Below 2:1</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-2`}>
                Stock Turnover Rules
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                <li>• Always use COGS, not Sales</li>
                <li>• Higher = more efficient</li>
                <li>• Avg Stock = (Op + Cl) / 2</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-2`}>
                GP on Cost vs Sales
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-1`}>
                <li>• ON Cost: Sales = Cost × 1.25</li>
                <li>• ON Sales: Cost = Sales × 0.75</li>
                <li>• Different formulas!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`${
          darkMode ? 'bg-black' : 'bg-white'
        } rounded-xl shadow-lg p-6 text-center mt-8`}>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Master these ratios for your Accounting for Managers exam! 🎓
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
            Practice each question multiple times until you can solve them without help
          </p>
        </div>
      </div>
    </div>
  );
}
