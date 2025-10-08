// pages/q2.js or app/q2/page.js
'use client';
import { useState } from 'react';

export default function CommonSizeProfitLoss() {
  const [activeView, setActiveView] = useState('vertical');
  const [showHelp, setShowHelp] = useState(false);

  // Data from Q.2
  const financialData = {
    revenue: {
      operations: 1200000,
      otherIncome: 200000,
      total: 1400000
    },
    expenses: {
      cogs: 6000000,
      employeeBenefits: 1500000,
      depreciation: 300000,
      financeCosts: 100000,
      sellingDistribution: 1000000,
      administrative: 500000,
      rentPaid: 200000,
      utilities: 100000,
      repairsMaintenance: 50000,
      legalProfessional: 150000,
      insurancePremium: 75000,
      total: 9975000
    },
    otherIncomes: {
      interest: 50000,
      dividend: 150000,
      total: 200000
    },
    profitBeforeOtherIncome: -8775000,
    profitBeforeTax: -8575000,
    tax: -2572500,
    profitAfterTax: -6002500,
    taxRate: 30
  };

  // Calculate percentages based on Revenue from Operations
  const calculatePercentage = (amount) => {
    return ((amount / financialData.revenue.operations) * 100).toFixed(2);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.abs(amount));
  };

  // Definitions for help mode
  const definitions = {
    'Revenue from Operations': 'Main business income from selling goods/services - core operating revenue',
    'Other Income': 'Secondary income not from main business operations',
    'Cost of Goods Sold': 'Direct costs of producing goods sold - materials, labor, manufacturing costs',
    'Employee Benefit Expenses': 'Total salary, wages, bonuses, and benefits paid to employees',
    'Depreciation and Amortization': 'Systematic allocation of asset cost over useful life',
    'Finance Costs': 'Interest and other costs of borrowing money',
    'Selling and Distribution Expenses': 'Costs of selling and delivering products to customers',
    'Administrative Expenses': 'General office and management expenses',
    'Rent Paid': 'Rental payments for office/factory premises',
    'Utilities': 'Electricity, water, gas, and other utility bills',
    'Repairs and Maintenance': 'Costs to maintain and repair assets',
    'Legal and Professional Fees': 'Fees paid to lawyers, consultants, auditors',
    'Insurance Premium': 'Insurance payments for various business insurances',
    'Interest Income': 'Income earned from bank deposits, investments',
    'Dividend Income': 'Income received from shares/equity investments',
    'Common-Size Statement': 'Financial statement where all items expressed as % of base figure (Revenue)',
    'Profit Before Tax': 'Profit before deducting income tax',
    'Profit After Tax': 'Final profit after all expenses and taxes'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Help Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
              showHelp 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {showHelp ? '✓ Help Mode ON' : '? Help Mode OFF'}
          </button>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
          <p className="text-sm font-semibold text-red-800">
            ⚠️ CRITICAL: This company has severe financial problems! 
            <strong> Net Loss of ₹60,02,500 </strong> (Loss is 500% of revenue!)
          </p>
          <p className="text-xs text-red-700 mt-2">
            COGS alone (₹60,00,000) is 5 times the revenue (₹12,00,000). This business model is unsustainable.
          </p>
        </div>

        {showHelp && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
            <p className="text-sm font-semibold text-blue-800">
              📚 Common-Size Statement: All amounts shown as percentage of Revenue from Operations (₹12,00,000). 
              This helps compare financial statements across different sized companies.
            </p>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-purple-600">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              ABC Ltd. - Financial Analysis
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-1">
              Common-Size Profit and Loss Statement
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              For the year ending March 31, 2023
            </p>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📖 What is Common-Size Statement?</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-700 mb-2">Definition</h4>
              <p className="text-sm text-gray-700">
                A financial statement where each item is expressed as a percentage of a base figure. 
                For P&L statements, the base is usually "Revenue from Operations" (100%).
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-700 mb-2">Purpose</h4>
              <p className="text-sm text-gray-700">
                Makes it easier to compare companies of different sizes, identify trends, 
                and spot unusual expense patterns. Shows what portion of revenue goes to each expense.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-700 mb-2">Formula</h4>
              <p className="text-sm text-gray-700">
                <strong>Percentage = (Line Item / Revenue from Operations) × 100</strong>
                <br/>Example: If COGS is ₹60L and Revenue is ₹12L, then COGS% = (60/12) × 100 = 500%
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-700 mb-2">Interpretation</h4>
              <p className="text-sm text-gray-700">
                In this case, expenses total 831% of revenue! This means for every ₹100 earned, 
                the company spends ₹831. This is unsustainable and indicates serious problems.
              </p>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Q.2</h3>
          <p className="text-gray-700 mb-4">
            ABC Ltd. has the following details from its Profit and Loss Statement for the year 
            ending March 31, 2023. <strong>Prepare a common-size Profit and Loss Statement and interpret it.</strong>
          </p>
        </div>

        {/* View Toggle */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveView('vertical')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeView === 'vertical'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Vertical Format (Traditional)
            </button>
            <button
              onClick={() => setActiveView('comparison')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeView === 'comparison'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Comparison View
            </button>
            <button
              onClick={() => setActiveView('interpretation')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeView === 'interpretation'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Interpretation & Analysis
            </button>
          </div>

          <div className="p-6">
            {/* Vertical Format */}
            {activeView === 'vertical' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Common-Size Profit and Loss Statement
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  All figures as percentage of Revenue from Operations (₹12,00,000)
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-600 text-white">
                        <th className="border border-purple-700 px-4 py-3 text-left">Particulars</th>
                        <th className="border border-purple-700 px-4 py-3 text-right">Amount (₹)</th>
                        <th className="border border-purple-700 px-4 py-3 text-right">% of Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Revenue Section */}
                      <tr className="bg-green-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2" colSpan={3}>REVENUE</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Revenue from Operations</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.revenue.operations)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono font-bold text-green-600">100.00%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Other Income</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.revenue.otherIncome)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.revenue.otherIncome)}%</td>
                      </tr>
                      <tr className="bg-green-100 font-bold">
                        <td className="border border-gray-300 px-4 py-2">Total Revenue</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.revenue.total)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.revenue.total)}%</td>
                      </tr>

                      {/* Expenses Section */}
                      <tr className="bg-red-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2 pt-4" colSpan={3}>EXPENSES</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Cost of Goods Sold</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.cogs)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-600 font-bold">{calculatePercentage(financialData.expenses.cogs)}%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Employee Benefit Expenses</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.employeeBenefits)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.employeeBenefits)}%</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Depreciation and Amortization</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.depreciation)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.depreciation)}%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Finance Costs</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.financeCosts)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.financeCosts)}%</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Selling and Distribution Expenses</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.sellingDistribution)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.sellingDistribution)}%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Administrative Expenses</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.administrative)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.administrative)}%</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Rent Paid</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.rentPaid)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.rentPaid)}%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Utilities (Electricity, Water, etc.)</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.utilities)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.utilities)}%</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Repairs and Maintenance</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.repairsMaintenance)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.repairsMaintenance)}%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Legal and Professional Fees</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.legalProfessional)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.legalProfessional)}%</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Insurance Premium</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.insurancePremium)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.expenses.insurancePremium)}%</td>
                      </tr>
                      <tr className="bg-red-100 font-bold">
                        <td className="border border-gray-300 px-4 py-2">Total Expenses</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.expenses.total)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-700">{calculatePercentage(financialData.expenses.total)}%</td>
                      </tr>

                      {/* Profit Before Other Income */}
                      <tr className="bg-yellow-100 font-bold">
                        <td className="border border-gray-300 px-4 py-2">Profit/(Loss) Before Other Income</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-600">({formatCurrency(financialData.profitBeforeOtherIncome)})</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-600">({calculatePercentage(Math.abs(financialData.profitBeforeOtherIncome))}%)</td>
                      </tr>

                      {/* Other Incomes */}
                      <tr className="bg-blue-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2 pt-4" colSpan={3}>OTHER INCOMES</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Interest Income</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.otherIncomes.interest)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.otherIncomes.interest)}%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Dividend Income</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{formatCurrency(financialData.otherIncomes.dividend)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono">{calculatePercentage(financialData.otherIncomes.dividend)}%</td>
                      </tr>

                      {/* Final Results */}
                      <tr className="bg-purple-100 font-bold text-lg">
                        <td className="border border-gray-300 px-4 py-3">Profit/(Loss) Before Tax (PBT)</td>
                        <td className="border border-gray-300 px-4 py-3 text-right font-mono text-red-700">({formatCurrency(financialData.profitBeforeTax)})</td>
                        <td className="border border-gray-300 px-4 py-3 text-right font-mono text-red-700">({calculatePercentage(Math.abs(financialData.profitBeforeTax))}%)</td>
                      </tr>
                      <tr className="bg-white hover:bg-purple-50">
                        <td className="border border-gray-300 px-4 py-2">Less: Tax @ 30%</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono text-green-600">{formatCurrency(financialData.tax)}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-mono text-green-600">{calculatePercentage(Math.abs(financialData.tax))}%</td>
                      </tr>
                      <tr className="bg-red-200 font-bold text-xl border-4 border-red-500">
                        <td className="border border-gray-300 px-4 py-4">Profit/(Loss) After Tax (PAT)</td>
                        <td className="border border-gray-300 px-4 py-4 text-right font-mono text-red-800">({formatCurrency(financialData.profitAfterTax)})</td>
                        <td className="border border-gray-300 px-4 py-4 text-right font-mono text-red-800">({calculatePercentage(Math.abs(financialData.profitAfterTax))}%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mt-6 border-2 border-red-300">
                  <p className="text-center font-bold text-red-800 text-lg">
                    🚨 NET LOSS: ₹60,02,500 (500.21% of Revenue)
                  </p>
                  <p className="text-center text-sm text-red-700 mt-2">
                    For every ₹100 of revenue, the company loses ₹500. This is unsustainable!
                  </p>
                </div>
              </div>
            )}

            {/* Comparison View */}
            {activeView === 'comparison' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Side-by-Side Comparison
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Absolute Values */}
                  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-300">
                    <h3 className="text-lg font-bold text-blue-700 mb-4 text-center">Absolute Values (₹)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-green-50 rounded">
                        <span className="font-semibold">Revenue from Operations</span>
                        <span className="font-mono">{formatCurrency(financialData.revenue.operations)}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-red-50 rounded">
                        <span className="font-semibold">Total Expenses</span>
                        <span className="font-mono text-red-600">{formatCurrency(financialData.expenses.total)}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-purple-50 rounded">
                        <span className="font-semibold">Other Incomes</span>
                        <span className="font-mono">{formatCurrency(financialData.otherIncomes.total)}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-red-100 rounded border-2 border-red-400">
                        <span className="font-bold">Net Loss</span>
                        <span className="font-mono font-bold text-red-700">({formatCurrency(financialData.profitAfterTax)})</span>
                      </div>
                    </div>
                  </div>

                  {/* Percentage Values */}
                  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-300">
                    <h3 className="text-lg font-bold text-purple-700 mb-4 text-center">Common-Size %</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-green-50 rounded">
                        <span className="font-semibold">Revenue from Operations</span>
                        <span className="font-mono font-bold text-green-600">100.00%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-red-50 rounded">
                        <span className="font-semibold">Total Expenses</span>
                        <span className="font-mono text-red-600 font-bold">{calculatePercentage(financialData.expenses.total)}%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-purple-50 rounded">
                        <span className="font-semibold">Other Incomes</span>
                        <span className="font-mono">{calculatePercentage(financialData.otherIncomes.total)}%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-red-100 rounded border-2 border-red-400">
                        <span className="font-bold">Net Loss</span>
                        <span className="font-mono font-bold text-red-700">({calculatePercentage(Math.abs(financialData.profitAfterTax))}%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Representation */}
                <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Visual Breakdown</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold">Revenue (100%)</span>
                        <span className="text-sm">₹12,00,000</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-8 flex items-center justify-center">
                        <span className="text-xs font-bold">Revenue: 100%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-red-600">Expenses (831.25%)</span>
                        <span className="text-sm text-red-600">₹99,75,000</span>
                      </div>
                      <div className="w-full bg-red-200 rounded-full h-8" style={{width: '100%'}}>
                        <div className="bg-red-500 h-8 rounded-full flex items-center justify-center" style={{width: '100%'}}>
                          <span className="text-xs font-bold text-white">Expenses: 831% (8.3x Revenue!)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-400">
                      <p className="text-center font-bold text-yellow-800">
                        The company spends ₹8.31 for every ₹1.00 earned!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Interpretation */}
            {activeView === 'interpretation' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Financial Interpretation & Analysis
                </h2>

                <div className="space-y-6">
                  {/* Critical Issues */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">🚨 Critical Issues</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-bold text-red-700 mb-2">1. Massive COGS Problem (500%)</h4>
                        <p className="text-sm text-gray-700">
                          Cost of Goods Sold is <strong>5 times the revenue</strong>. This means the company sells goods 
                          for ₹1 that cost ₹5 to produce. This is catastrophic and unsustainable.
                        </p>
                        <p className="text-xs text-red-600 mt-2 font-semibold">
                          Action Required: Immediately review pricing strategy or reduce production costs by 80%+
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-bold text-red-700 mb-2">2. High Employee Costs (125%)</h4>
                        <p className="text-sm text-gray-700">
                          Employee benefits exceed revenue by 25%. The company pays more in salaries 
                          than it earns from operations.
                        </p>
                        <p className="text-xs text-red-600 mt-2 font-semibold">
                          Action Required: Staff restructuring or significant revenue increase needed
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-bold text-red-700 mb-2">3. Excessive Total Expenses (831%)</h4>
                        <p className="text-sm text-gray-700">
                          Every expense category when combined equals 8.31 times the revenue. 
                          This business model is financially impossible to sustain.
                        </p>
                        <p className="text-xs text-red-600 mt-2 font-semibold">
                          Action Required: Complete business model overhaul required
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Observations */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">📊 Key Observations</h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">⚠️</span>
                        <p className="text-sm text-gray-700">
                          <strong>Net Loss is 500% of revenue</strong> - Company loses ₹5 for every ₹1 earned
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">📈</span>
                        <p className="text-sm text-gray-700">
                          <strong>Selling & Distribution at 83%</strong> - Very high for a company losing money
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">💰</span>
                        <p className="text-sm text-gray-700">
                          <strong>Other incomes only 16.67%</strong> - Cannot compensate for operational losses
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">🏢</span>
                        <p className="text-sm text-gray-700">
                          <strong>Administrative expenses at 42%</strong> - Office costs nearly half of revenue
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">💡 Recommendations</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-bold text-blue-700 mb-2">Immediate Actions</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Stop production until pricing is fixed</li>
                          <li>• Review all supplier contracts</li>
                          <li>• Reduce workforce by 50%+</li>
                          <li>• Cut all non-essential expenses</li>
                          <li>• Seek emergency funding</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-bold text-blue-700 mb-2">Long-term Strategy</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Complete business model redesign</li>
                          <li>• Increase prices by 500%+ or</li>
                          <li>• Reduce COGS by 80%+</li>
                          <li>• Consider business closure</li>
                          <li>• Restructure entire operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border-2 border-red-400">
                    <h3 className="text-xl font-bold text-red-900 mb-3 text-center">Final Conclusion</h3>
                    <p className="text-center text-gray-800 mb-3">
                      <strong>ABC Ltd. is in severe financial distress.</strong> The company is operationally 
                      insolvent with expenses exceeding revenue by over 8 times. Without immediate and 
                      drastic intervention, the business will cease to exist.
                    </p>
                    <p className="text-center text-sm text-red-800 font-semibold">
                      Recommendation: Consider winding up operations unless a complete turnaround plan 
                      with guaranteed funding can be implemented within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p className="text-sm text-gray-600">
            ABC Ltd. - Common-Size Profit and Loss Statement Analysis
          </p>
          <p className="text-xs text-gray-500 mt-2">
            For academic purposes - March 31, 2023
          </p>
        </div>
      </div>
    </div>
  );
}
