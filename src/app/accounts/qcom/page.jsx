// pages/balance-sheet-solution.js or app/balance-sheet-solution/page.js
'use client';
import { useState, useEffect } from 'react';

export default function BalanceSheetSolution() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSource, setShowSource] = useState(true);
  const [expandedNote, setExpandedNote] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) setDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Complete data with sources
  const balanceSheetData = {
    assets: [
      {
        category: "I. ASSETS",
        isHeader: true
      },
      {
        category: "(1) Non-Current Assets",
        isSubHeader: true
      },
      {
        item: "(a) Property, Plant and Equipment",
        note: "1",
        amount: 5625000,
        source: "Sum of all tangible assets (Buildings + Plant + Furniture)",
        calculation: "₹27,50,000 + ₹26,25,000 + ₹2,50,000 = ₹56,25,000",
        breakdown: [
          { asset: "Buildings", gross: 3000000, depreciation: 250000, net: 2750000, 
            from: "Cost from Additional Info (iv): ₹30,00,000. Book value from Trial Balance: ₹27,50,000. Depreciation = ₹30L - ₹27.5L = ₹2.5L" },
          { asset: "Plant and Machinery", gross: 3500000, depreciation: 875000, net: 2625000,
            from: "Cost from Additional Info (iv): ₹35,00,000. Book value from Trial Balance: ₹26,25,000. Depreciation = ₹35L - ₹26.25L = ₹8.75L" },
          { asset: "Furniture and Fixtures", gross: 312500, depreciation: 62500, net: 250000,
            from: "Cost from Additional Info (iv): ₹3,12,500. Book value from Trial Balance: ₹2,50,000. Depreciation = ₹3.125L - ₹2.5L = ₹0.625L" }
        ]
      },
      {
        item: "Total Non-Current Assets",
        amount: 5625000,
        isBold: true
      },
      {
        category: "(2) Current Assets",
        isSubHeader: true
      },
      {
        item: "(a) Inventories",
        note: "2",
        amount: 1250000,
        source: "From Trial Balance (Debit side)",
        calculation: "Raw Materials ₹2,50,000 + Finished Goods ₹10,00,000 = ₹12,50,000",
        breakdown: [
          { type: "Raw Materials", amount: 250000, from: "Trial Balance - Debit" },
          { type: "Finished Goods", amount: 1000000, from: "Trial Balance - Debit" }
        ]
      },
      {
        item: "(b) Trade Receivables",
        note: "3",
        amount: 1000000,
        source: "From Trial Balance (Debit side) - Sundry Debtors",
        calculation: "Total Debtors = ₹10,00,000",
        breakdown: [
          { type: "Outstanding for more than 6 months", amount: 260000, from: "Additional Info (iii)" },
          { type: "Others (less than 6 months)", amount: 740000, from: "Balancing: ₹10L - ₹2.6L = ₹7.4L" }
        ]
      },
      {
        item: "(c) Cash and Cash Equivalents",
        note: "4",
        amount: 1375000,
        source: "From Trial Balance (Debit side)",
        calculation: "Cash in Hand ₹1,50,000 + Bank (Scheduled) ₹12,25,000 = ₹13,75,000",
        breakdown: [
          { type: "Cash in Hand", amount: 150000, from: "Trial Balance - Debit" },
          { type: "Balances with Scheduled Banks", amount: 1225000, from: "Total Bank ₹12,35,000 - Non-Scheduled ₹10,000 (Note vi)" }
        ]
      },
      {
        item: "(d) Other Bank Balances",
        note: "5",
        amount: 10000,
        source: "From Additional Info (vi)",
        calculation: "Balance with Non-Scheduled Bank (Global Bank Ltd.) = ₹10,000",
        breakdown: [
          { type: "With Non-Scheduled Banks", amount: 10000, from: "Additional Info (vi) - Global Bank Ltd." }
        ]
      },
      {
        item: "(e) Other Current Assets",
        note: "6",
        amount: 213500,
        source: "From Trial Balance (Debit side) - Advances",
        calculation: "Advances = ₹2,13,500",
        breakdown: [
          { type: "Advances", amount: 213500, from: "Trial Balance - Debit" }
        ]
      },
      {
        item: "Total Current Assets",
        amount: 3848500,
        calculation: "₹12,50,000 + ₹10,00,000 + ₹13,75,000 + ₹10,000 + ₹2,13,500",
        isBold: true
      },
      {
        item: "TOTAL ASSETS",
        amount: 9473500,
        calculation: "Non-Current ₹56,25,000 + Current ₹38,48,500",
        isTotalRow: true
      }
    ],
    equity: [
      {
        category: "II. EQUITY AND LIABILITIES",
        isHeader: true
      },
      {
        category: "(1) Shareholders' Funds",
        isSubHeader: true
      },
      {
        item: "(a) Share Capital",
        note: "7",
        amount: 4995000,
        source: "From Trial Balance (Credit side) - Equity Share Capital, adjusted for Call in Arrears",
        calculation: "Called Up ₹50,00,000 - Calls in Arrears ₹5,000 = ₹49,95,000",
        breakdown: [
          { type: "Authorized & Issued Capital", amount: 5000000, from: "Trial Balance - Credit (50,000 shares @ ₹100 each)" },
          { type: "Less: Calls in Arrears", amount: -5000, from: "Trial Balance - Debit (to be deducted)" },
          { type: "Paid-up Capital", amount: 4995000, from: "Net amount shown in Balance Sheet" },
          { note: "10,000 shares issued for consideration other than cash", from: "Additional Info (ii) - Disclosure requirement" }
        ]
      },
      {
        item: "(b) Reserves and Surplus",
        note: "8",
        amount: 1483500,
        source: "From Trial Balance (Credit side) - General Reserve + P&L, adjusted for Preliminary Expenses",
        calculation: "General Reserve ₹10,50,000 + Surplus (P&L) ₹5,00,000 - Preliminary Expenses ₹66,500 = ₹14,83,500",
        breakdown: [
          { type: "General Reserve", amount: 1050000, from: "Trial Balance - Credit" },
          { type: "Surplus (Profit & Loss Account)", amount: 500000, from: "Trial Balance - Credit" },
          { type: "Less: Preliminary Expenses", amount: -66500, from: "Trial Balance - Debit (Fictitious asset, deducted from reserves)" }
        ]
      },
      {
        item: "Total Shareholders' Funds",
        amount: 6478500,
        calculation: "Share Capital ₹49,95,000 + Reserves ₹14,83,500",
        isBold: true
      },
      {
        category: "(2) Non-Current Liabilities",
        isSubHeader: true
      },
      {
        item: "(a) Long-term Borrowings",
        note: "9",
        amount: 712500,
        source: "From Trial Balance (Credit) - Loan from State Financial Corporation, adjusted for Interest",
        calculation: "Total Loan ₹7,50,000 - Interest Accrued ₹37,500 = ₹7,12,500",
        breakdown: [
          { type: "Secured Loan - State Financial Corporation", amount: 712500, 
            from: "Total shown in Trial Balance ₹7,50,000 minus Interest ₹37,500 (Additional Info v)" },
          { note: "Secured by hypothecation of Plant & Machinery", from: "Additional Info (v)" }
        ]
      },
      {
        item: "Total Non-Current Liabilities",
        amount: 712500,
        isBold: true
      },
      {
        category: "(3) Current Liabilities",
        isSubHeader: true
      },
      {
        item: "(a) Short-term Borrowings",
        note: "10",
        amount: 605000,
        source: "From Trial Balance (Credit side) - Unsecured Loan",
        calculation: "Unsecured Loan = ₹6,05,000",
        breakdown: [
          { type: "Unsecured Loan", amount: 605000, from: "Trial Balance - Credit" }
        ]
      },
      {
        item: "(b) Trade Payables",
        note: "11",
        amount: 1000000,
        source: "From Trial Balance (Credit side) - Sundry Creditors",
        calculation: "Sundry Creditors = ₹10,00,000",
        breakdown: [
          { type: "Sundry Creditors (for Goods and Expenses)", amount: 1000000, from: "Trial Balance - Credit" }
        ]
      },
      {
        item: "(c) Other Current Liabilities",
        note: "12",
        amount: 337500,
        source: "Interest Accrued + Proposed Dividend",
        calculation: "Interest ₹37,500 + Proposed Dividend ₹3,00,000 = ₹3,37,500",
        breakdown: [
          { type: "Interest Accrued but not Due", amount: 37500, from: "Additional Info (v) - separated from Loan account" },
          { type: "Proposed Dividend", amount: 300000, from: "Trial Balance - Credit" }
        ]
      },
      {
        item: "(d) Short-term Provisions",
        note: "13",
        amount: 340000,
        source: "From Trial Balance (Credit side) - Provision for Taxation",
        calculation: "Provision for Taxation = ₹3,40,000",
        breakdown: [
          { type: "Provision for Tax", amount: 340000, from: "Trial Balance - Credit" }
        ]
      },
      {
        item: "Total Current Liabilities",
        amount: 2282500,
        calculation: "₹6,05,000 + ₹10,00,000 + ₹3,37,500 + ₹3,40,000",
        isBold: true
      },
      {
        item: "TOTAL EQUITY AND LIABILITIES",
        amount: 9473500,
        calculation: "Equity ₹64,78,500 + Non-Current Liab ₹7,12,500 + Current Liab ₹22,82,500",
        isTotalRow: true
      }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    } py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Fixed Buttons */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full font-bold shadow-lg transition-all ${
              darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setShowSource(!showSource)}
            className={`px-6 py-3 rounded-full font-bold shadow-lg transition-all ${
              showSource 
                ? 'bg-green-500 text-white' 
                : darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'
            }`}
          >
            {showSource ? '✓ Sources ON' : '📍 Show Sources'}
          </button>
        </div>

        {/* Header */}
        <div className={`${
          darkMode ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-600'
        } rounded-xl shadow-lg p-8 mb-8 border-t-4`}>
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              ELEGANT LTD.
            </h1>
            <h2 className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Balance Sheet as at 31st March 2014
            </h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              (As per Schedule III of Companies Act, 2013)
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>
              With source and calculation details for each value
            </p>
          </div>
        </div>

        {/* Balance Sheet Table */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden mb-8`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-600'} text-white`}>
                  <th className="border border-indigo-700 px-4 py-3 text-left">Particulars</th>
                  <th className="border border-indigo-700 px-4 py-3 text-center w-24">Note No.</th>
                  <th className="border border-indigo-700 px-4 py-3 text-right w-40">Amount (₹)</th>
                  {showSource && (
                    <th className="border border-indigo-700 px-4 py-3 text-left w-96">
                      Source & Calculation
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {/* Assets Section */}
                {balanceSheetData.assets.map((row, idx) => (
                  <tr key={idx} className={`
                    ${row.isHeader ? (darkMode ? 'bg-blue-900' : 'bg-blue-100') : ''}
                    ${row.isSubHeader ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}
                    ${row.isBold ? 'font-bold' : ''}
                    ${row.isTotalRow ? (darkMode ? 'bg-green-900' : 'bg-green-100') + ' font-bold text-lg' : ''}
                    ${!row.isHeader && !row.isSubHeader && !row.isBold && !row.isTotalRow ? (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50') : ''}
                  `}>
                    <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 ${
                      row.isHeader || row.isTotalRow ? 'font-bold text-lg' : ''
                    } ${row.isSubHeader ? 'font-semibold' : ''}`}>
                      {row.category || row.item}
                    </td>
                    <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 text-center`}>
                      {row.note || ''}
                    </td>
                    <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 text-right font-mono`}>
                      {row.amount ? formatCurrency(row.amount) : ''}
                    </td>
                    {showSource && (
                      <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 text-sm`}>
                        {row.source && (
                          <div>
                            <div className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} font-semibold mb-1`}>
                              📍 Source: {row.source}
                            </div>
                            {row.calculation && (
                              <div className={`${darkMode ? 'text-green-400' : 'text-green-700'} font-mono text-xs`}>
                                🧮 {row.calculation}
                              </div>
                            )}
                            {row.breakdown && (
                              <button
                                onClick={() => setExpandedNote(expandedNote === `asset-${idx}` ? null : `asset-${idx}`)}
                                className={`${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'} text-xs mt-1 underline`}
                              >
                                {expandedNote === `asset-${idx}` ? '▼ Hide Details' : '▶ Show Details'}
                              </button>
                            )}
                            {expandedNote === `asset-${idx}` && row.breakdown && (
                              <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-2 rounded mt-2`}>
                                {row.breakdown.map((item, i) => (
                                  <div key={i} className="mb-2 text-xs">
                                    <div className={`font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                                      {item.asset || item.type || item.note}
                                    </div>
                                    {item.gross && (
                                      <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                        Gross: {formatCurrency(item.gross)} | Dep: {formatCurrency(item.depreciation)} | Net: {formatCurrency(item.net)}
                                      </div>
                                    )}
                                    {item.amount !== undefined && (
                                      <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                        Amount: {formatCurrency(Math.abs(item.amount))} {item.amount < 0 ? '(deduction)' : ''}
                                      </div>
                                    )}
                                    <div className={`${darkMode ? 'text-gray-500' : 'text-gray-500'} italic`}>
                                      → {item.from}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                ))}

                {/* Empty row separator */}
                <tr>
                  <td colSpan={showSource ? 4 : 3} className="py-2"></td>
                </tr>

                {/* Equity & Liabilities Section */}
                {balanceSheetData.equity.map((row, idx) => (
                  <tr key={idx} className={`
                    ${row.isHeader ? (darkMode ? 'bg-blue-900' : 'bg-blue-100') : ''}
                    ${row.isSubHeader ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}
                    ${row.isBold ? 'font-bold' : ''}
                    ${row.isTotalRow ? (darkMode ? 'bg-green-900' : 'bg-green-100') + ' font-bold text-lg' : ''}
                    ${!row.isHeader && !row.isSubHeader && !row.isBold && !row.isTotalRow ? (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50') : ''}
                  `}>
                    <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 ${
                      row.isHeader || row.isTotalRow ? 'font-bold text-lg' : ''
                    } ${row.isSubHeader ? 'font-semibold' : ''}`}>
                      {row.category || row.item}
                    </td>
                    <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 text-center`}>
                      {row.note || ''}
                    </td>
                    <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 text-right font-mono`}>
                      {row.amount ? formatCurrency(row.amount) : ''}
                    </td>
                    {showSource && (
                      <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} px-4 py-2 text-sm`}>
                        {row.source && (
                          <div>
                            <div className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} font-semibold mb-1`}>
                              📍 Source: {row.source}
                            </div>
                            {row.calculation && (
                              <div className={`${darkMode ? 'text-green-400' : 'text-green-700'} font-mono text-xs`}>
                                🧮 {row.calculation}
                              </div>
                            )}
                            {row.breakdown && (
                              <button
                                onClick={() => setExpandedNote(expandedNote === `equity-${idx}` ? null : `equity-${idx}`)}
                                className={`${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'} text-xs mt-1 underline`}
                              >
                                {expandedNote === `equity-${idx}` ? '▼ Hide Details' : '▶ Show Details'}
                              </button>
                            )}
                            {expandedNote === `equity-${idx}` && row.breakdown && (
                              <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-2 rounded mt-2`}>
                                {row.breakdown.map((item, i) => (
                                  <div key={i} className="mb-2 text-xs">
                                    <div className={`font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                                      {item.type || item.note}
                                    </div>
                                    {item.amount !== undefined && (
                                      <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                        Amount: {formatCurrency(Math.abs(item.amount))} {item.amount < 0 ? '(deduction)' : ''}
                                      </div>
                                    )}
                                    <div className={`${darkMode ? 'text-gray-500' : 'text-gray-500'} italic`}>
                                      → {item.from}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verification */}
        <div className={`${
          darkMode ? 'bg-green-900 border-green-600' : 'bg-green-50 border-green-500'
        } p-6 rounded-lg border-l-4 mb-8`}>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>
            ✅ Balance Sheet Verification
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-green-950' : 'bg-white'} p-4 rounded`}>
              <p className={`${darkMode ? 'text-green-200' : 'text-green-700'} font-semibold`}>
                Total Assets: {formatCurrency(9473500)}
              </p>
            </div>
            <div className={`${darkMode ? 'bg-green-950' : 'bg-white'} p-4 rounded`}>
              <p className={`${darkMode ? 'text-green-200' : 'text-green-700'} font-semibold`}>
                Total Equity & Liabilities: {formatCurrency(9473500)}
              </p>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-green-950' : 'bg-green-100'} p-4 rounded mt-4 text-center`}>
            <p className={`${darkMode ? 'text-green-400' : 'text-green-800'} font-bold text-2xl`}>
              ✓ BALANCE SHEET IS BALANCED!
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            📖 Legend:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} p-3 rounded`}>
              <p className={`${darkMode ? 'text-blue-300' : 'text-blue-700'} font-semibold`}>📍 Source</p>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-600'} text-sm`}>
                Where the value originally comes from (Trial Balance or Additional Info)
              </p>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-3 rounded`}>
              <p className={`${darkMode ? 'text-green-300' : 'text-green-700'} font-semibold`}>🧮 Calculation</p>
              <p className={`${darkMode ? 'text-green-200' : 'text-green-600'} text-sm`}>
                How the final value is calculated (formula or addition)
              </p>
            </div>
            <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-50'} p-3 rounded`}>
              <p className={`${darkMode ? 'text-purple-300' : 'text-purple-700'} font-semibold`}>▶ Details</p>
              <p className={`${darkMode ? 'text-purple-200' : 'text-purple-600'} text-sm`}>
                Click to see complete breakdown with all components
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 text-center mt-8`}>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            📊 Complete Balance Sheet with full source traceability
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
            Every value shows WHERE it came from and HOW it was calculated
          </p>
        </div>
      </div>
    </div>
  );
}
