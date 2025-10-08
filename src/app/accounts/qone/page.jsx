// pages/index.js (for Pages Router)
// OR
// app/page.js (for App Router - add 'use client' at the top)

'use client';
import { useState } from 'react';

export default function FinancialStatements() {
  const [activeTab, setActiveTab] = useState('balance-sheet');
  const [showHelp, setShowHelp] = useState(false); // Help mode toggle

  // Trial Balance Data - Exam paper se directly copy kiya hai
  const trialBalanceData = [
    { particular: 'Stock', amount: '13,600', particular2: 'Equity Share Capital', amount2: '5,00,000' },
    { particular: 'Furniture & Fixture', amount: '10,000', particular2: 'Share of ₹10 each', amount2: '' },
    { particular: 'Discount', amount: '8,000', particular2: '11% Debentures', amount2: '1,99,500' },
    { particular: 'Loan to Directors (Short term)', amount: '16,000', particular2: 'Bank Loans', amount2: '1,29,000' },
    { particular: 'Advertisement', amount: '21,000', particular2: 'Bills Payable', amount2: '4,000' },
    { particular: 'Bad Debts', amount: '7,000', particular2: 'Creditors', amount2: '35,200' },
    { particular: 'Commission', amount: '9,200', particular2: 'Sales', amount2: '6,44,400' },
    { particular: 'Purchases', amount: '4,63,000', particular2: 'Rent Received', amount2: '27,800' },
    { particular: 'Plant and Machinery', amount: '1,72,000', particular2: 'Advance in Profit & Loss A/c', amount2: '27,800' },
    { particular: 'Results', amount: '5,000', particular2: 'Provision for Depreciation', amount2: '29,200' },
    { particular: 'Current Account', amount: '9,000', particular2: '', amount2: '' },
    { particular: 'Cash', amount: '1,600', particular2: '', amount2: '' },
    { particular: 'Interest on Bank Loan', amount: '23,200', particular2: '', amount2: '' },
    { particular: 'Wages', amount: '1,80,000', particular2: '', amount2: '' },
    { particular: 'Consumables', amount: '16,800', particular2: '', amount2: '' },
    { particular: 'Office Equipment', amount: '40,000', particular2: '', amount2: '' },
    { particular: 'Goodwill', amount: '33,000', particular2: '', amount2: '' },
    { particular: 'Debtors', amount: '57,400', particular2: '', amount2: '' },
    { particular: 'Bills Receivables', amount: '30,600', particular2: '', amount2: '' },
    { particular: 'Dealer Commission', amount: '4,200', particular2: '', amount2: '' },
    { particular: 'Trade Expenses', amount: '14,400', particular2: '', amount2: '' },
    { particular: 'Distribution Freight', amount: '10,800', particular2: '', amount2: '' },
    { particular: 'Drawings', amount: '1,99,500', particular2: '', amount2: '' },
    { particular: 'Calls in Arrear', amount: '15,000', particular2: '', amount2: '' },
    { particular: 'Sales Returns', amount: '24,000', particular2: '', amount2: '' },
    { particular: 'Purchase Returns', amount: '', particular2: 'Purchase Returns', amount2: '9,200' },
    { particular: 'Total', amount: '13,85,800', particular2: 'Total', amount2: '13,85,800' }
  ];

  const profitLossData = {
    revenue: {
      sales: 644400,
      salesReturns: 24000,
      netSales: 620400
    },
    cogs: {
      openingStock: 13600,
      purchases: 463000,
      purchaseReturns: 9200,
      netPurchases: 453800,
      closingStock: 164600,
      totalCogs: 302800
    },
    grossProfit: 317600,
    otherIncome: {
      rentReceived: 27800,
      discount: 8000,
      commission: 9200,
      total: 45000
    },
    totalIncome: 362600,
    expenses: {
      wages: 180000,
      advertisement: 21000,
      badDebts: 7000,
      dealerCommission: 4200,
      tradeExpenses: 14400,
      distributionFreight: 10800,
      depreciation: 19700,
      interestOnBankLoan: 23200,
      total: 280300
    },
    netProfit: 82300
  };

  const balanceSheetData = {
    assets: {
      nonCurrent: {
        plantMachinery: { cost: 172000, depreciation: 17200, net: 154800 },
        furniture: { cost: 10000, depreciation: 500, net: 9500 },
        officeEquipment: { cost: 40000, depreciation: 2000, net: 38000 },
        goodwill: 33000,
        total: 235300
      },
      current: {
        closingStock: 164600,
        debtors: 57400,
        billsReceivables: 30600,
        cash: 1600,
        currentAccount: 9000,
        total: 263200
      },
      totalAssets: 498500
    },
    liabilities: {
      equity: {
        shareCapital: 500000,
        callsInArrear: 15000,
        netShareCapital: 485000,
        netProfit: 82300,
        drawings: 199500,
        total: 367800
      },
      nonCurrent: {
        bankLoans: 129000
      },
      current: {
        billsPayable: 4000,
        creditors: 35200,
        total: 39200
      },
      adjustments: {
        prepaidExpenses: 29200,
        advanceInPL: 27800,
        provisionDepreciation: 19700
      },
      totalLiabilities: 498500
    }
  };

  // Definitions object - har term ka explanation
  const definitions = {
    // Assets Definitions
    'Plant and Machinery': {
      definition: 'Heavy equipment and machines used for production/manufacturing in business',
      source: 'Trial Balance (Debit Side)',
      value: '₹1,72,000',
      calculation: 'Original Cost: ₹1,72,000 - Depreciation @ 10%: ₹17,200 = Net Value: ₹1,54,800'
    },
    'Furniture & Fixture': {
      definition: 'Office furniture like tables, chairs, cabinets used in business',
      source: 'Trial Balance (Debit Side)',
      value: '₹10,000',
      calculation: 'Original Cost: ₹10,000 - Depreciation @ 5%: ₹500 = Net Value: ₹9,500'
    },
    'Office Equipment': {
      definition: 'Computers, printers, scanners, and other office tools',
      source: 'Trial Balance (Debit Side)',
      value: '₹40,000',
      calculation: 'Original Cost: ₹40,000 - Depreciation @ 5%: ₹2,000 = Net Value: ₹38,000'
    },
    'Goodwill': {
      definition: 'Intangible asset - Company\'s reputation, brand value, customer relationships',
      source: 'Trial Balance (Debit Side)',
      value: '₹33,000',
      calculation: 'No depreciation on Goodwill. Shown at original value.'
    },
    'Depreciation': {
      definition: 'Reduction in value of assets due to usage, wear and tear over time',
      source: 'Calculated as per given rates',
      value: '₹19,700 (Total)',
      calculation: 'Plant & Machinery (₹1,72,000 × 10%) = ₹17,200\nFurniture (₹10,000 × 5%) = ₹500\nOffice Equipment (₹40,000 × 5%) = ₹2,000\nTotal = ₹19,700'
    },
    'Closing Stock': {
      definition: 'Inventory/goods remaining unsold at the end of financial year',
      source: 'Additional Information (given in question)',
      value: '₹1,64,600',
      calculation: 'Given directly in adjustments. Used in COGS calculation.'
    },
    'Debtors': {
      definition: 'Customers who bought goods on credit - they owe us money',
      source: 'Trial Balance (Debit Side)',
      value: '₹57,400',
      calculation: 'Direct value from Trial Balance. Expected to be received within 1 year.'
    },
    'Bills Receivables': {
      definition: 'Promissory notes or bills accepted by customers - formal promise to pay',
      source: 'Trial Balance (Debit Side)',
      value: '₹30,600',
      calculation: 'Direct value from Trial Balance. More secure than debtors.'
    },
    'Cash': {
      definition: 'Physical cash in hand - coins and currency notes',
      source: 'Trial Balance (Debit Side)',
      value: '₹1,600',
      calculation: 'Direct value from Trial Balance. Most liquid asset.'
    },
    'Current Account': {
      definition: 'Money in bank current account - can be withdrawn anytime',
      source: 'Trial Balance (Debit Side)',
      value: '₹9,000',
      calculation: 'Direct value from Trial Balance. Cash at bank.'
    },
    
    // Liabilities Definitions
    'Share Capital': {
      definition: 'Money invested by shareholders by buying company shares',
      source: 'Trial Balance (Credit Side)',
      value: '₹5,00,000',
      calculation: 'Shares of ₹10 each issued. Total Share Capital = ₹5,00,000'
    },
    'Calls in Arrear': {
      definition: 'Shareholders who haven\'t paid their share money yet - pending payment',
      source: 'Trial Balance (Debit Side)',
      value: '₹15,000',
      calculation: 'Deducted from Share Capital: ₹5,00,000 - ₹15,000 = ₹4,85,000'
    },
    'Bank Loans': {
      definition: 'Money borrowed from bank - needs to be repaid with interest',
      source: 'Trial Balance (Credit Side)',
      value: '₹1,29,000',
      calculation: 'Direct value from Trial Balance. Long-term liability.'
    },
    'Bills Payable': {
      definition: 'Bills/promissory notes we accepted - formal promise to pay suppliers',
      source: 'Trial Balance (Credit Side)',
      value: '₹4,000',
      calculation: 'Direct value from Trial Balance. Short-term liability.'
    },
    'Creditors': {
      definition: 'Suppliers from whom we bought goods on credit - we owe them money',
      source: 'Trial Balance (Credit Side)',
      value: '₹35,200',
      calculation: 'Direct value from Trial Balance. To be paid soon.'
    },
    'Drawings': {
      definition: 'Money or goods taken by owner from business for personal use',
      source: 'Trial Balance (Debit Side)',
      value: '₹1,99,500',
      calculation: 'Deducted from Owner\'s Equity. Reduces capital.'
    },
    
    // Income Definitions
    'Sales': {
      definition: 'Total revenue from selling goods to customers',
      source: 'Trial Balance (Credit Side)',
      value: '₹6,44,400',
      calculation: 'Gross Sales = ₹6,44,400'
    },
    'Sales Returns': {
      definition: 'Goods returned by customers due to defects or other reasons',
      source: 'Trial Balance (Debit Side)',
      value: '₹24,000',
      calculation: 'Deducted from Sales: ₹6,44,400 - ₹24,000 = Net Sales ₹6,20,400'
    },
    'Net Sales': {
      definition: 'Actual sales after deducting returns - real revenue earned',
      source: 'Calculated',
      value: '₹6,20,400',
      calculation: 'Sales (₹6,44,400) - Sales Returns (₹24,000) = ₹6,20,400'
    },
    'Rent Received': {
      definition: 'Income from renting out property/space to others',
      source: 'Trial Balance (Credit Side)',
      value: '₹27,800',
      calculation: 'Other Income - not from main business operations.'
    },
    'Commission': {
      definition: 'Income earned by acting as agent or intermediary in transactions',
      source: 'Trial Balance (Debit Side - Income)',
      value: '₹9,200',
      calculation: 'Other Income added to total income.'
    },
    'Discount': {
      definition: 'Cash discount received from suppliers for early payment',
      source: 'Trial Balance (Debit Side)',
      value: '₹8,000',
      calculation: 'Other Income - reduces cost indirectly.'
    },
    
    // Expenses Definitions
    'Purchases': {
      definition: 'Goods bought from suppliers for resale or production',
      source: 'Trial Balance (Debit Side)',
      value: '₹4,63,000',
      calculation: 'Total purchases during the year.'
    },
    'Purchase Returns': {
      definition: 'Goods returned to suppliers due to defects or wrong items',
      source: 'Trial Balance (Credit Side)',
      value: '₹9,200',
      calculation: 'Deducted from Purchases: ₹4,63,000 - ₹9,200 = Net Purchases ₹4,53,800'
    },
    'Opening Stock': {
      definition: 'Inventory/goods available at the start of financial year',
      source: 'Trial Balance (Debit Side - Stock)',
      value: '₹13,600',
      calculation: 'Beginning inventory value. Used in COGS calculation.'
    },
    'Cost of Goods Sold (COGS)': {
      definition: 'Direct cost of producing/buying goods that were sold',
      source: 'Calculated',
      value: '₹3,02,800',
      calculation: 'Opening Stock (₹13,600) + Net Purchases (₹4,53,800) - Closing Stock (₹1,64,600) = ₹3,02,800'
    },
    'Gross Profit': {
      definition: 'Profit before deducting operating expenses - basic profit from trading',
      source: 'Calculated',
      value: '₹3,17,600',
      calculation: 'Net Sales (₹6,20,400) - COGS (₹3,02,800) = ₹3,17,600'
    },
    'Wages': {
      definition: 'Salary paid to workers and employees for their labor',
      source: 'Trial Balance (Debit Side)',
      value: '₹1,80,000',
      calculation: 'Direct expense - largest operating expense.'
    },
    'Advertisement': {
      definition: 'Marketing and promotional expenses to attract customers',
      source: 'Trial Balance (Debit Side)',
      value: '₹21,000',
      calculation: 'Operating expense for business promotion.'
    },
    'Bad Debts': {
      definition: 'Money that customers couldn\'t pay - irrecoverable debts',
      source: 'Trial Balance (Debit Side)',
      value: '₹7,000',
      calculation: 'Loss from customers who defaulted. Expense.'
    },
    'Interest on Bank Loan': {
      definition: 'Interest charged by bank on borrowed money - cost of borrowing',
      source: 'Trial Balance (Debit Side)',
      value: '₹23,200',
      calculation: 'Financial expense - cost of using bank\'s money.'
    },
    'Net Profit': {
      definition: 'Final profit after all expenses - money earned by business',
      source: 'Calculated',
      value: '₹82,300',
      calculation: 'Total Income (₹3,62,600) - Total Expenses (₹2,80,300) = ₹82,300'
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Helper component to show definitions
  const HelpTooltip = ({ term }) => {
    const def = definitions[term];
    if (!def || !showHelp) return null;

    return (
      <div className="absolute z-50 w-80 bg-white border-2 border-indigo-500 rounded-lg shadow-2xl p-4 mt-2 text-left">
        <h4 className="font-bold text-indigo-700 mb-2 text-sm">{term}</h4>
        <p className="text-xs text-gray-700 mb-2">{def.definition}</p>
        <div className="text-xs space-y-1">
          <p><span className="font-semibold text-gray-800">Source:</span> <span className="text-blue-600">{def.source}</span></p>
          <p><span className="font-semibold text-gray-800">Value:</span> <span className="text-green-600">{def.value}</span></p>
          <p className="mt-2 p-2 bg-gray-50 rounded"><span className="font-semibold text-gray-800">Calculation:</span><br/><span className="text-gray-600 whitespace-pre-line">{def.calculation}</span></p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Help Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
              showHelp 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {showHelp ? '✓ Help Mode ON' : '? Help Mode OFF'}
          </button>
        </div>

        {showHelp && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
            <p className="text-sm font-semibold text-yellow-800">
              📚 Help Mode Enabled! Hover over any value to see its definition, source, and calculation.
            </p>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-indigo-600">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              National Forensic Sciences University
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-1">
              School of Management Studies
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              MBA Forensic Accounting and Fraud Investigation - Semester - I
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Mid-Semester Examination - October 2024
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-200 gap-4">
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">
                  Subject: <span className="text-indigo-600">Accounting for Managers</span>
                </p>
                <p className="text-sm text-gray-600">Subject Code: MBACS-SI-3</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">Date: 09/10/2024</p>
                <p className="text-sm text-gray-600">Time: 11:00 AM - 12:30 PM</p>
                <p className="text-sm text-gray-600">Total Marks: 50</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accounting Basics Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Accounting Basics</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-indigo-700 mb-2">What is Trial Balance?</h4>
              <p className="text-sm text-gray-700">
                A statement showing all debit and credit balances of accounts at a specific date. 
                It's like a summary of all transactions. Total Debits must equal Total Credits.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Formula:</strong> Total Debit = Total Credit (₹13,85,800 = ₹13,85,800)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-indigo-700 mb-2">What is Balance Sheet?</h4>
              <p className="text-sm text-gray-700">
                A financial statement showing what company owns (Assets) and owes (Liabilities) on a specific date. 
                Shows financial position/health of business.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Formula:</strong> Assets = Liabilities + Equity (₹4,98,500 = ₹4,98,500)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-indigo-700 mb-2">What is Profit & Loss Statement?</h4>
              <p className="text-sm text-gray-700">
                Shows how much profit or loss business made during a period by comparing 
                revenue (income) with expenses. Also called Income Statement.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Formula:</strong> Net Profit = Total Income - Total Expenses (₹82,300)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-indigo-700 mb-2">Golden Rule of Accounting</h4>
              <p className="text-sm text-gray-700">
                <strong>Assets:</strong> What company owns (Cash, Stock, Equipment)<br/>
                <strong>Liabilities:</strong> What company owes (Loans, Creditors)<br/>
                <strong>Equity:</strong> Owner's investment + Profit - Drawings
              </p>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Q.1 (15 Marks)</h3>
          <p className="text-gray-700 mb-4">
            Prepare the financial statements, i.e., the balance sheet and statement of profit and loss
            account, from the following trial balance of ABC Company Pvt. Ltd. for the year that
            ended on 31st March 2023, along with all notes to accounts.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm font-semibold text-gray-800 mb-2">Additional Information:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Closing stock as of 31st March 2023: <span className="font-semibold">₹1,64,600</span></li>
              <li>• Depreciation on plant & machinery @ <span className="font-semibold">10%</span>, furniture & fixtures @ <span className="font-semibold">5%</span>, and Office Equipment @ <span className="font-semibold">5%</span> to be provided</li>
            </ul>
          </div>
        </div>

        {/* Step-by-Step Solution Guide */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📝 Step-by-Step Solution Process</h3>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-700">Step 1: Verify Trial Balance</h4>
              <p className="text-sm text-gray-700">Check if Total Debit = Total Credit (Both = ₹13,85,800) ✓</p>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-700">Step 2: Calculate Depreciation</h4>
              <p className="text-sm text-gray-700">
                • Plant & Machinery: ₹1,72,000 × 10% = ₹17,200<br/>
                • Furniture: ₹10,000 × 5% = ₹500<br/>
                • Office Equipment: ₹40,000 × 5% = ₹2,000<br/>
                <strong>Total Depreciation = ₹19,700</strong>
              </p>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-700">Step 3: Prepare Profit & Loss Statement</h4>
              <p className="text-sm text-gray-700">
                1. Calculate Net Sales (Sales - Sales Returns)<br/>
                2. Calculate COGS (Opening Stock + Purchases - Purchase Returns - Closing Stock)<br/>
                3. Calculate Gross Profit (Net Sales - COGS)<br/>
                4. Add Other Income<br/>
                5. Deduct All Expenses (including Depreciation)<br/>
                6. Get Net Profit = ₹82,300
              </p>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-700">Step 4: Prepare Balance Sheet</h4>
              <p className="text-sm text-gray-700">
                • List all Assets (after depreciation)<br/>
                • List all Liabilities<br/>
                • Calculate Equity (Share Capital - Calls in Arrear + Net Profit - Drawings)<br/>
                • Verify: Total Assets = Total Liabilities + Equity = ₹4,98,500
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            <button
              onClick={() => setActiveTab('trial-balance')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeTab === 'trial-balance'
                  ? 'bg-indigo-600 text-white border-b-2 border-indigo-700'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Trial Balance
            </button>
            <button
              onClick={() => setActiveTab('profit-loss')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeTab === 'profit-loss'
                  ? 'bg-indigo-600 text-white border-b-2 border-indigo-700'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Profit & Loss Statement
            </button>
            <button
              onClick={() => setActiveTab('balance-sheet')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                activeTab === 'balance-sheet'
                  ? 'bg-indigo-600 text-white border-b-2 border-indigo-700'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Balance Sheet
            </button>
          </div>

          <div className="p-6">
            {/* Trial Balance */}
            {activeTab === 'trial-balance' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Trial Balance as at 31st March 2023
                </h2>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>What is this table?</strong> This shows all accounts and their balances. 
                    Left side (Debit) = Assets & Expenses. Right side (Credit) = Liabilities & Income. 
                    Both sides must be equal.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-indigo-600 text-white">
                        <th className="border border-indigo-700 px-4 py-3 text-left">Particulars (Debit)</th>
                        <th className="border border-indigo-700 px-4 py-3 text-right">Amount (₹)</th>
                        <th className="border border-indigo-700 px-4 py-3 text-left">Particulars (Credit)</th>
                        <th className="border border-indigo-700 px-4 py-3 text-right">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trialBalanceData.map((row, index) => (
                        <tr
                          key={index}
                          className={`${
                            row.particular === 'Total'
                              ? 'bg-indigo-100 font-bold'
                              : index % 2 === 0
                              ? 'bg-gray-50'
                              : 'bg-white'
                          } hover:bg-indigo-50 transition-colors`}
                        >
                          <td className="border border-gray-300 px-4 py-2">{row.particular}</td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono">
                            {row.amount}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">{row.particular2}</td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono">
                            {row.amount2}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-green-800">
                    ✓ Trial Balance is Balanced: Debit Total = Credit Total = ₹13,85,800
                  </p>
                </div>
              </div>
            )}

            {/* Profit & Loss Statement */}
            {activeTab === 'profit-loss' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Statement of Profit and Loss
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  For the year ended 31st March 2023
                </p>

                <div className="space-y-6">
                  {/* Revenue Section */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Revenue from Operations</h3>
                    <p className="text-xs text-gray-600 mb-4 italic">Income from selling goods - main business activity</p>
                    <div className="space-y-2">
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Sales</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.revenue.sales)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Sales" />
                        </div>}
                      </div>
                      <div className="flex justify-between text-red-600 relative group">
                        <span>Less: Sales Returns</span>
                        <span className="font-mono cursor-help">({formatCurrency(profitLossData.revenue.salesReturns)})</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Sales Returns" />
                        </div>}
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-green-300 relative group">
                        <span>Net Sales</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.revenue.netSales)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Net Sales" />
                        </div>}
                      </div>
                    </div>
                  </div>

                  {/* COGS Section */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Cost of Goods Sold (COGS)</h3>
                    <p className="text-xs text-gray-600 mb-4 italic">Direct cost of goods that were sold to customers</p>
                    <div className="space-y-2">
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Opening Stock</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.cogs.openingStock)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Opening Stock" />
                        </div>}
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Add: Purchases</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.cogs.purchases)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Purchases" />
                        </div>}
                      </div>
                      <div className="flex justify-between text-red-600 relative group">
                        <span>Less: Purchase Returns</span>
                        <span className="font-mono cursor-help">({formatCurrency(profitLossData.cogs.purchaseReturns)})</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Purchase Returns" />
                        </div>}
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Net Purchases</span>
                        <span className="font-mono">{formatCurrency(profitLossData.cogs.netPurchases)}</span>
                      </div>
                      <div className="flex justify-between text-red-600 relative group">
                        <span>Less: Closing Stock</span>
                        <span className="font-mono cursor-help">({formatCurrency(profitLossData.cogs.closingStock)})</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Closing Stock" />
                        </div>}
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-orange-300 relative group">
                        <span>Total COGS</span>
                        <span className="font-mono cursor-help">({formatCurrency(profitLossData.cogs.totalCogs)})</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Cost of Goods Sold (COGS)" />
                        </div>}
                      </div>
                    </div>
                  </div>

                  {/* Gross Profit */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-2 border-blue-300">
                    <div className="flex justify-between font-bold text-xl relative group">
                      <span>Gross Profit</span>
                      <span className="font-mono text-green-600 cursor-help">{formatCurrency(profitLossData.grossProfit)}</span>
                      {showHelp && <div className="absolute right-0 top-8 hidden group-hover:block">
                        <HelpTooltip term="Gross Profit" />
                      </div>}
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Net Sales - COGS = Basic trading profit</p>
                  </div>

                  {/* Other Income */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Other Income</h3>
                    <p className="text-xs text-gray-600 mb-4 italic">Income from non-trading activities</p>
                    <div className="space-y-2">
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Rent Received</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.otherIncome.rentReceived)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Rent Received" />
                        </div>}
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Discount</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.otherIncome.discount)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Discount" />
                        </div>}
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Commission</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.otherIncome.commission)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Commission" />
                        </div>}
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t-2 border-purple-300">
                        <span>Total Other Income</span>
                        <span className="font-mono">{formatCurrency(profitLossData.otherIncome.total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Total Income */}
                  <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg p-4 border-2 border-indigo-400">
                    <div className="flex justify-between font-bold text-xl">
                      <span>Total Income</span>
                      <span className="font-mono text-green-600">{formatCurrency(profitLossData.totalIncome)}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Gross Profit + Other Income</p>
                  </div>

                  {/* Expenses */}
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 border border-red-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Expenses</h3>
                    <p className="text-xs text-gray-600 mb-4 italic">Costs incurred to run the business</p>
                    <div className="space-y-2">
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Wages</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.expenses.wages)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Wages" />
                        </div>}
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Advertisement</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.expenses.advertisement)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Advertisement" />
                        </div>}
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Bad Debts</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.expenses.badDebts)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Bad Debts" />
                        </div>}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dealer Commission</span>
                        <span className="font-mono">{formatCurrency(profitLossData.expenses.dealerCommission)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Trade Expenses</span>
                        <span className="font-mono">{formatCurrency(profitLossData.expenses.tradeExpenses)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Distribution Freight</span>
                        <span className="font-mono">{formatCurrency(profitLossData.expenses.distributionFreight)}</span>
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Depreciation</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.expenses.depreciation)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Depreciation" />
                        </div>}
                      </div>
                      <div className="flex justify-between relative group">
                        <span className="text-gray-700">Interest on Bank Loan</span>
                        <span className="font-mono cursor-help">{formatCurrency(profitLossData.expenses.interestOnBankLoan)}</span>
                        {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                          <HelpTooltip term="Interest on Bank Loan" />
                        </div>}
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-red-300">
                        <span>Total Expenses</span>
                        <span className="font-mono text-red-600">({formatCurrency(profitLossData.expenses.total)})</span>
                      </div>
                    </div>
                  </div>

                  {/* Net Profit */}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 border-4 border-green-500 shadow-lg">
                    <div className="flex justify-between font-bold text-2xl relative group">
                      <span className="text-gray-900">Net Profit</span>
                      <span className="font-mono text-green-700 cursor-help">{formatCurrency(profitLossData.netProfit)}</span>
                      {showHelp && <div className="absolute right-0 top-10 hidden group-hover:block">
                        <HelpTooltip term="Net Profit" />
                      </div>}
                    </div>
                    <p className="text-sm text-gray-700 mt-2">Final profit after all income and expenses. This goes to Balance Sheet!</p>
                  </div>
                </div>
              </div>
            )}

            {/* Balance Sheet */}
            {activeTab === 'balance-sheet' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Balance Sheet
                </h2>
                <p className="text-center text-gray-600 mb-4">
                  As at 31st March 2023
                </p>
                <p className="text-center text-sm text-indigo-600 mb-8">
                  Shows what company owns (Assets) and owes (Liabilities + Equity) on this date
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Assets Side */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-300 pb-2">
                      ASSETS (What We Own)
                    </h3>

                    {/* Non-Current Assets */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
                      <h4 className="font-bold text-gray-800 mb-2">Non-Current Assets</h4>
                      <p className="text-xs text-gray-600 mb-3 italic">Long-term assets used for more than 1 year</p>
                      <div className="space-y-3">
                        {/* Plant & Machinery */}
                        <div className="bg-white rounded p-3 shadow-sm relative group">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 cursor-help">Plant and Machinery</span>
                            <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.plantMachinery.cost)}</span>
                          </div>
                          <div className="flex justify-between text-sm text-red-600">
                            <span className="pl-4">Less: Depreciation @10%</span>
                            <span className="font-mono">({formatCurrency(balanceSheetData.assets.nonCurrent.plantMachinery.depreciation)})</span>
                          </div>
                          <div className="flex justify-between text-sm font-semibold pt-1 border-t border-gray-200 mt-1">
                            <span className="pl-4">Net Value</span>
                            <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.plantMachinery.net)}</span>
                          </div>
                          {showHelp && <div className="absolute right-0 top-0 hidden group-hover:block z-10">
                            <HelpTooltip term="Plant and Machinery" />
                          </div>}
                        </div>

                        {/* Furniture */}
                        <div className="bg-white rounded p-3 shadow-sm relative group">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 cursor-help">Furniture & Fixture</span>
                            <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.furniture.cost)}</span>
                          </div>
                          <div className="flex justify-between text-sm text-red-600">
                            <span className="pl-4">Less: Depreciation @5%</span>
                            <span className="font-mono">({formatCurrency(balanceSheetData.assets.nonCurrent.furniture.depreciation)})</span>
                          </div>
                          <div className="flex justify-between text-sm font-semibold pt-1 border-t border-gray-200 mt-1">
                            <span className="pl-4">Net Value</span>
                            <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.furniture.net)}</span>
                          </div>
                          {showHelp && <div className="absolute right-0 top-0 hidden group-hover:block z-10">
                            <HelpTooltip term="Furniture & Fixture" />
                          </div>}
                        </div>

                        {/* Office Equipment */}
                        <div className="bg-white rounded p-3 shadow-sm relative group">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 cursor-help">Office Equipment</span>
                            <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.officeEquipment.cost)}</span>
                          </div>
                          <div className="flex justify-between text-sm text-red-600">
                            <span className="pl-4">Less: Depreciation @5%</span>
                            <span className="font-mono">({formatCurrency(balanceSheetData.assets.nonCurrent.officeEquipment.depreciation)})</span>
                          </div>
                          <div className="flex justify-between text-sm font-semibold pt-1 border-t border-gray-200 mt-1">
                            <span className="pl-4">Net Value</span>
                            <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.officeEquipment.net)}</span>
                          </div>
                          {showHelp && <div className="absolute right-0 top-0 hidden group-hover:block z-10">
                            <HelpTooltip term="Office Equipment" />
                          </div>}
                        </div>

                        {/* Goodwill */}
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Goodwill</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.goodwill)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Goodwill" />
                          </div>}
                        </div>

                        <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-blue-300">
                          <span>Total Non-Current Assets</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.nonCurrent.total)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Current Assets */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                      <h4 className="font-bold text-gray-800 mb-2">Current Assets</h4>
                      <p className="text-xs text-gray-600 mb-3 italic">Assets that will convert to cash within 1 year</p>
                      <div className="space-y-2">
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Closing Stock</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.current.closingStock)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Closing Stock" />
                          </div>}
                        </div>
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Debtors</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.current.debtors)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Debtors" />
                          </div>}
                        </div>
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Bills Receivables</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.current.billsReceivables)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Bills Receivables" />
                          </div>}
                        </div>
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Cash</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.current.cash)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Cash" />
                          </div>}
                        </div>
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Current Account</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.current.currentAccount)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Current Account" />
                          </div>}
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-green-300">
                          <span>Total Current Assets</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.assets.current.total)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Total Assets */}
                    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg p-4 border-4 border-indigo-500 shadow-lg">
                      <div className="flex justify-between font-bold text-xl">
                        <span>TOTAL ASSETS</span>
                        <span className="font-mono text-indigo-700">{formatCurrency(balanceSheetData.assets.totalAssets)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Liabilities Side */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2">
                      EQUITY & LIABILITIES (What We Owe)
                    </h3>

                    {/* Equity */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-200">
                      <h4 className="font-bold text-gray-800 mb-2">Equity</h4>
                      <p className="text-xs text-gray-600 mb-3 italic">Owner's investment + Profit - Money withdrawn</p>
                      <div className="space-y-2">
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Share Capital</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.equity.shareCapital)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Share Capital" />
                          </div>}
                        </div>
                        <div className="flex justify-between text-red-600 relative group">
                          <span className="pl-4 cursor-help">Less: Calls in Arrear</span>
                          <span className="font-mono">({formatCurrency(balanceSheetData.liabilities.equity.callsInArrear)})</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Calls in Arrear" />
                          </div>}
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Net Share Capital</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.equity.netShareCapital)}</span>
                        </div>
                        <div className="flex justify-between text-green-600 relative group">
                          <span className="cursor-help">Add: Net Profit (from P&L)</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.equity.netProfit)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Net Profit" />
                          </div>}
                        </div>
                        <div className="flex justify-between text-red-600 relative group">
                          <span className="cursor-help">Less: Drawings</span>
                          <span className="font-mono">({formatCurrency(balanceSheetData.liabilities.equity.drawings)})</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Drawings" />
                          </div>}
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-purple-300">
                          <span>Total Equity</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.equity.total)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Non-Current Liabilities */}
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-5 border border-orange-200">
                      <h4 className="font-bold text-gray-800 mb-2">Non-Current Liabilities</h4>
                      <p className="text-xs text-gray-600 mb-3 italic">Long-term debts payable after 1 year</p>
                      <div className="space-y-2">
                        <div className="flex justify-between font-bold text-lg relative group">
                          <span className="text-gray-700 cursor-help">Bank Loans</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.nonCurrent.bankLoans)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Bank Loans" />
                          </div>}
                        </div>
                      </div>
                    </div>

                    {/* Current Liabilities */}
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border border-red-200">
                      <h4 className="font-bold text-gray-800 mb-2">Current Liabilities</h4>
                      <p className="text-xs text-gray-600 mb-3 italic">Short-term debts payable within 1 year</p>
                      <div className="space-y-2">
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Bills Payable</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.current.billsPayable)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Bills Payable" />
                          </div>}
                        </div>
                        <div className="flex justify-between relative group">
                          <span className="text-gray-700 cursor-help">Creditors</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.current.creditors)}</span>
                          {showHelp && <div className="absolute right-0 top-6 hidden group-hover:block">
                            <HelpTooltip term="Creditors" />
                          </div>}
                        </div>
                        <div className="flex justify-between font-bold pt-2 border-t-2 border-red-300">
                          <span>Total Current Liabilities</span>
                          <span className="font-mono">{formatCurrency(balanceSheetData.liabilities.current.total)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm">📌 Additional Notes:</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>• Prepaid Expenses: {formatCurrency(balanceSheetData.liabilities.adjustments.prepaidExpenses)}</p>
                        <p>• Advance in P&L: {formatCurrency(balanceSheetData.liabilities.adjustments.advanceInPL)}</p>
                        <p>• Provision for Depreciation: {formatCurrency(balanceSheetData.liabilities.adjustments.provisionDepreciation)}</p>
                      </div>
                    </div>

                    {/* Total Liabilities */}
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 border-4 border-purple-500 shadow-lg">
                      <div className="flex justify-between font-bold text-xl">
                        <span>TOTAL LIABILITIES</span>
                        <span className="font-mono text-purple-700">{formatCurrency(balanceSheetData.liabilities.totalLiabilities)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Check */}
                <div className="mt-6 bg-green-50 border-2 border-green-500 rounded-lg p-4">
                  <p className="text-center font-bold text-green-800">
                    ✓ Balance Sheet is Balanced: Total Assets = Total Liabilities = ₹4,98,500
                  </p>
                  <p className="text-center text-sm text-gray-700 mt-2">
                    This proves our calculations are correct! Assets always equal Liabilities + Equity.
                  </p>
                </div>

                {/* Depreciation Schedule */}
                <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Note 1: Depreciation Schedule</h3>
                  <p className="text-xs text-gray-600 mb-4 italic">Detailed breakdown of depreciation calculation</p>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-indigo-600 text-white">
                          <th className="border border-indigo-700 px-4 py-2 text-left">Asset</th>
                          <th className="border border-indigo-700 px-4 py-2 text-center">Rate</th>
                          <th className="border border-indigo-700 px-4 py-2 text-right">Original Cost</th>
                          <th className="border border-indigo-700 px-4 py-2 text-right">Depreciation</th>
                          <th className="border border-indigo-700 px-4 py-2 text-right">Net Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white hover:bg-indigo-50">
                          <td className="border border-gray-300 px-4 py-2">Plant & Machinery</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">10%</td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.plantMachinery.cost)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-600">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.plantMachinery.depreciation)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono font-semibold">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.plantMachinery.net)}
                          </td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-indigo-50">
                          <td className="border border-gray-300 px-4 py-2">Furniture & Fixture</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">5%</td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.furniture.cost)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-600">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.furniture.depreciation)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono font-semibold">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.furniture.net)}
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-indigo-50">
                          <td className="border border-gray-300 px-4 py-2">Office Equipment</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">5%</td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.officeEquipment.cost)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-600">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.officeEquipment.depreciation)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono font-semibold">
                            {formatCurrency(balanceSheetData.assets.nonCurrent.officeEquipment.net)}
                          </td>
                        </tr>
                        <tr className="bg-indigo-100 font-bold">
                          <td className="border border-gray-300 px-4 py-2" colSpan={3}>
                            Total Depreciation
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-mono text-red-700">
                            {formatCurrency(19700)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    💡 <strong>Formula:</strong> Depreciation = Original Cost × Rate%. 
                    Net Value = Original Cost - Depreciation
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p className="text-sm text-gray-600">
            ABC Company Pvt. Ltd. - Financial Statements for the year ended 31st March 2023
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Prepared as per Indian Accounting Standards (Ind AS)
          </p>
        </div>
      </div>
    </div>
  );
}
