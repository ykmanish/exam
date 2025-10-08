'use client'

import React, { useState, useEffect } from 'react';

const EnhancedAccountingPracticeSystem = () => {
  const [activeSection, setActiveSection] = useState('learn-basics');
  const [practiceData, setPracticeData] = useState({
    trialBalance: { debit: {}, credit: {} },
    adjustments: {},
    additionalInfo: {}
  });
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });

  // Save practice data to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('accountingPracticeData');
    if (saved) {
      setPracticeData(JSON.parse(saved));
    }
  }, []);

  const savePracticeData = (newData) => {
    setPracticeData(newData);
    localStorage.setItem('accountingPracticeData', JSON.stringify(newData));
  };

  const formatCurrency = (amount) => {
    if (!amount) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Learn Debit/Credit Basics Section
  const LearnBasicsSection = () => {
    const [selectedRule, setSelectedRule] = useState('assets');
    const [showMemoryTips, setShowMemoryTips] = useState(false);

    const debitCreditRules = {
      assets: {
        title: 'Assets (What the business OWNS)',
        debitRule: 'Increase in Assets = DEBIT',
        creditRule: 'Decrease in Assets = CREDIT',
        examples: [
          { transaction: 'Bought machinery for ₹1,00,000 cash', debit: 'Machinery ₹1,00,000', credit: 'Cash ₹1,00,000' },
          { transaction: 'Received ₹50,000 from debtors', debit: 'Cash ₹50,000', credit: 'Debtors ₹50,000' },
          { transaction: 'Purchased stock for ₹75,000 on credit', debit: 'Stock ₹75,000', credit: 'Creditors ₹75,000' }
        ],
        accounts: ['Cash', 'Bank', 'Stock', 'Debtors', 'Plant & Machinery', 'Building', 'Furniture', 'Goodwill']
      },
      liabilities: {
        title: 'Liabilities (What the business OWES)',
        debitRule: 'Decrease in Liabilities = DEBIT',
        creditRule: 'Increase in Liabilities = CREDIT',
        examples: [
          { transaction: 'Borrowed ₹2,00,000 from bank', debit: 'Cash ₹2,00,000', credit: 'Bank Loan ₹2,00,000' },
          { transaction: 'Paid ₹30,000 to creditors', debit: 'Creditors ₹30,000', credit: 'Cash ₹30,000' },
          { transaction: 'Outstanding salary ₹15,000', debit: 'Salaries ₹15,000', credit: 'Outstanding Salaries ₹15,000' }
        ],
        accounts: ['Creditors', 'Bank Loan', 'Bills Payable', 'Outstanding Expenses', 'Debentures']
      },
      capital: {
        title: 'Capital & Reserves (Owner\'s money in business)',
        debitRule: 'Decrease in Capital = DEBIT',
        creditRule: 'Increase in Capital = CREDIT',
        examples: [
          { transaction: 'Owner invested ₹5,00,000 cash', debit: 'Cash ₹5,00,000', credit: 'Capital ₹5,00,000' },
          { transaction: 'Transferred ₹1,00,000 to reserves', debit: 'P&L Account ₹1,00,000', credit: 'General Reserve ₹1,00,000' },
          { transaction: 'Owner withdrew ₹25,000 for personal use', debit: 'Drawings ₹25,000', credit: 'Cash ₹25,000' }
        ],
        accounts: ['Share Capital', 'Capital', 'General Reserve', 'P&L Account', 'Drawings']
      },
      income: {
        title: 'Income/Revenue (Money EARNED by business)',
        debitRule: 'Decrease in Income = DEBIT',
        creditRule: 'Increase in Income = CREDIT',
        examples: [
          { transaction: 'Sold goods for ₹80,000 cash', debit: 'Cash ₹80,000', credit: 'Sales ₹80,000' },
          { transaction: 'Received rent ₹12,000', debit: 'Cash ₹12,000', credit: 'Rent Received ₹12,000' },
          { transaction: 'Commission earned ₹5,000', debit: 'Cash ₹5,000', credit: 'Commission ₹5,000' }
        ],
        accounts: ['Sales', 'Rent Received', 'Commission Received', 'Interest Received', 'Discount Received']
      },
      expenses: {
        title: 'Expenses (Money SPENT by business)',
        debitRule: 'Increase in Expenses = DEBIT',
        creditRule: 'Decrease in Expenses = CREDIT',
        examples: [
          { transaction: 'Paid office rent ₹20,000', debit: 'Rent ₹20,000', credit: 'Cash ₹20,000' },
          { transaction: 'Purchased raw materials ₹1,50,000', debit: 'Purchases ₹1,50,000', credit: 'Cash ₹1,50,000' },
          { transaction: 'Paid salaries ₹40,000', debit: 'Salaries ₹40,000', credit: 'Cash ₹40,000' }
        ],
        accounts: ['Purchases', 'Salaries', 'Rent', 'Wages', 'General Expenses', 'Interest Paid', 'Bad Debts']
      }
    };

    const memoryTricks = [
      {
        trick: "DEAD CLIC",
        explanation: "Debit: Expenses, Assets, Drawings, Dividends | Credit: Liabilities, Income, Capital",
        visual: "💀 DEAD = Debit | 🖱️ CLIC = Credit"
      },
      {
        trick: "Personal Account Rule",
        explanation: "Debit the Receiver, Credit the Giver",
        example: "If Ram gives ₹1000 to business → Debit Cash (receiver), Credit Ram (giver)"
      },
      {
        trick: "Real Account Rule",
        explanation: "Debit What Comes In, Credit What Goes Out",
        example: "Cash comes in → Debit Cash | Cash goes out → Credit Cash"
      },
      {
        trick: "Nominal Account Rule",
        explanation: "Debit All Expenses, Credit All Incomes",
        example: "Paid rent → Debit Rent | Received commission → Credit Commission"
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Master Debit & Credit Rules</h2>
          <p className="text-gray-700">
            Learn the fundamental rules that will help you ace your accounting exam!
          </p>
        </div>

        {/* Quick Reference Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="bg-indigo-600 text-white p-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">⚡ Quick Reference - EXAM MEMORY TRICK</h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 text-xl mb-3">DEBIT SIDE (Dr.)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold mr-2">D</span>
                    <span><strong>D</strong>rawings (Owner takes money)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold mr-2">E</span>
                    <span><strong>E</strong>xpenses (Money spent)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold mr-2">A</span>
                    <span><strong>A</strong>ssets (Things owned)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold mr-2">D</span>
                    <span><strong>D</strong>ividends (Money paid to shareholders)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-100 rounded border border-red-300">
                  <p className="font-bold text-red-800">💀 "DEAD" goes on Debit side!</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 text-xl mb-3">CREDIT SIDE (Cr.)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-bold mr-2">C</span>
                    <span><strong>C</strong>apital (Owner's money)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-bold mr-2">L</span>
                    <span><strong>L</strong>iabilities (Money owed)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-bold mr-2">I</span>
                    <span><strong>I</strong>ncome (Money earned)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-bold mr-2">C</span>
                    <span><strong>C</strong>ommissions, etc. (Other income)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded border border-green-300">
                  <p className="font-bold text-green-800">🖱️ "CLIC" goes on Credit side!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Rules by Category */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">📖 Detailed Rules by Account Type</h3>
          </div>
          <div className="p-6">
            {/* Category Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(debitCreditRules).map(([key, rule]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRule(key)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedRule === key
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                  }`}
                >
                  {rule.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Selected Rule Details */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
                <h4 className="text-xl font-bold text-blue-800 mb-3">
                  {debitCreditRules[selectedRule].title}
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h5 className="font-semibold text-red-800">📍 DEBIT Rule</h5>
                    <p className="text-red-700 text-sm">{debitCreditRules[selectedRule].debitRule}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800">📍 CREDIT Rule</h5>
                    <p className="text-green-700 text-sm">{debitCreditRules[selectedRule].creditRule}</p>
                  </div>
                </div>
              </div>

              {/* Common Accounts in This Category */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">📝 Common Accounts in This Category:</h5>
                <div className="flex flex-wrap gap-2">
                  {debitCreditRules[selectedRule].accounts.map(account => (
                    <span 
                      key={account}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {account}
                    </span>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">💡 Practical Examples:</h5>
                <div className="space-y-3">
                  {debitCreditRules[selectedRule].examples.map((example, index) => (
                    <div key={index} className="bg-white p-4 rounded border border-gray-300">
                      <p className="font-medium text-gray-800 mb-2">{example.transaction}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-red-50 p-2 rounded">
                          <span className="font-semibold text-red-800">Debit: </span>
                          <span className="text-red-700">{example.debit}</span>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <span className="font-semibold text-green-800">Credit: </span>
                          <span className="text-green-700">{example.credit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Techniques */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="bg-yellow-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-xl font-semibold">🧠 Memory Techniques for Exams</h3>
            <button
              onClick={() => setShowMemoryTips(!showMemoryTips)}
              className="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded text-sm"
            >
              {showMemoryTips ? 'Hide Tips' : 'Show Tips'}
            </button>
          </div>
          {showMemoryTips && (
            <div className="p-6">
              <div className="space-y-4">
                {memoryTricks.map((trick, index) => (
                  <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h5 className="font-bold text-yellow-800 mb-2">{trick.visual || '🎯'} {trick.trick}</h5>
                    <p className="text-yellow-700 mb-2">{trick.explanation}</p>
                    {trick.example && (
                      <div className="bg-white p-2 rounded border border-yellow-300">
                        <span className="text-yellow-800 text-sm"><strong>Example:</strong> {trick.example}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Interactive Quiz Section
  const QuizSection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [quizQuestions] = useState([
      {
        transaction: "Company purchased office furniture for ₹25,000 in cash",
        correctAnswers: [
          { account: "Office Furniture", type: "debit", reason: "Asset increased" },
          { account: "Cash", type: "credit", reason: "Asset decreased" }
        ]
      },
      {
        transaction: "Received ₹15,000 commission from a client",
        correctAnswers: [
          { account: "Cash", type: "debit", reason: "Asset increased" },
          { account: "Commission Received", type: "credit", reason: "Income increased" }
        ]
      },
      {
        transaction: "Paid salary of ₹8,000 to employees",
        correctAnswers: [
          { account: "Salaries", type: "debit", reason: "Expense increased" },
          { account: "Cash", type: "credit", reason: "Asset decreased" }
        ]
      },
      {
        transaction: "Owner invested additional ₹50,000 in the business",
        correctAnswers: [
          { account: "Cash", type: "debit", reason: "Asset increased" },
          { account: "Capital", type: "credit", reason: "Capital increased" }
        ]
      },
      {
        transaction: "Borrowed ₹1,00,000 from State Bank",
        correctAnswers: [
          { account: "Cash", type: "debit", reason: "Asset increased" },
          { account: "Bank Loan", type: "credit", reason: "Liability increased" }
        ]
      }
    ]);

    const checkAnswer = (selectedAccount, selectedType) => {
      const question = quizQuestions[currentQuestion];
      const isCorrect = question.correctAnswers.some(answer => 
        answer.account.toLowerCase().includes(selectedAccount.toLowerCase()) && 
        answer.type === selectedType
      );
      
      setShowFeedback(true);
      if (isCorrect) {
        setQuizScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setQuizScore(prev => ({ ...prev, total: prev.total + 1 }));
      }
    };

    const nextQuestion = () => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowFeedback(false);
        setUserAnswer('');
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Interactive Debit/Credit Quiz</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">
              Test your understanding with these practice questions
            </p>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {quizScore.correct}/{quizScore.total}
              </div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Transaction:</h4>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-lg">{quizQuestions[currentQuestion].transaction}</p>
              </div>
            </div>

            {!showFeedback ? (
              <div className="space-y-4">
                <h5 className="font-semibold text-gray-800">Which accounts are affected and how?</h5>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {quizQuestions[currentQuestion].correctAnswers.map((answer, index) => (
                    <div key={index} className="space-y-3 p-4 bg-gray-50 rounded-lg">
                      <h6 className="font-medium text-gray-700">Account {index + 1}:</h6>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Account Name:</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                          placeholder="Enter account name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Debit or Credit?</label>
                        <div className="flex gap-3">
                          <button
                            onClick={() => checkAnswer(answer.account, 'debit')}
                            className="flex-1 py-2 px-4 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                          >
                            Debit
                          </button>
                          <button
                            onClick={() => checkAnswer(answer.account, 'credit')}
                            className="flex-1 py-2 px-4 bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
                          >
                            Credit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-3">✅ Correct Answer:</h5>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].correctAnswers.map((answer, index) => (
                      <div key={index} className="bg-white p-3 rounded border">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{answer.account}</span>
                          <span className={`px-3 py-1 rounded text-sm font-semibold ${
                            answer.type === 'debit' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {answer.type === 'debit' ? 'DEBIT' : 'CREDIT'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{answer.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    Progress: {currentQuestion + 1}/{quizQuestions.length}
                  </div>
                  {currentQuestion < quizQuestions.length - 1 ? (
                    <button
                      onClick={nextQuestion}
                      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next Question
                    </button>
                  ) : (
                    <div className="bg-green-100 p-3 rounded-lg border border-green-200">
                      <p className="text-green-800 font-semibold">
                        🎉 Quiz Complete! Score: {quizScore.correct}/{quizScore.total} 
                        ({((quizScore.correct / quizScore.total) * 100).toFixed(1)}%)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Setup Section (from previous code)
  const SetupSection = () => {
    const [newAccount, setNewAccount] = useState({ name: '', amount: '', side: 'debit', category: 'assets' });
    const [showAccountHelper, setShowAccountHelper] = useState(false);

    // Account categories to help users understand where to place accounts
    const accountCategories = {
      assets: { 
        side: 'debit', 
        color: 'blue',
        examples: ['Cash', 'Bank', 'Stock', 'Debtors', 'Plant & Machinery', 'Building', 'Furniture', 'Goodwill'] 
      },
      liabilities: { 
        side: 'credit', 
        color: 'red',
        examples: ['Creditors', 'Bank Loan', 'Bills Payable', 'Outstanding Expenses', 'Debentures'] 
      },
      capital: { 
        side: 'credit', 
        color: 'purple',
        examples: ['Share Capital', 'Capital', 'General Reserve', 'P&L Account'] 
      },
      income: { 
        side: 'credit', 
        color: 'green',
        examples: ['Sales', 'Rent Received', 'Commission Received', 'Interest Received'] 
      },
      expenses: { 
        side: 'debit', 
        color: 'orange',
        examples: ['Purchases', 'Salaries', 'Rent', 'Wages', 'General Expenses', 'Interest Paid'] 
      }
    };

    const addAccount = () => {
      if (newAccount.name && newAccount.amount) {
        const updatedData = { ...practiceData };
        const side = accountCategories[newAccount.category].side;
        updatedData.trialBalance[side][newAccount.name] = parseInt(newAccount.amount);
        savePracticeData(updatedData);
        setNewAccount({ name: '', amount: '', side: 'debit', category: 'assets' });
      }
    };

    const removeAccount = (side, accountName) => {
      const updatedData = { ...practiceData };
      delete updatedData.trialBalance[side][accountName];
      savePracticeData(updatedData);
    };

    const debitTotal = Object.values(practiceData.trialBalance.debit).reduce((sum, val) => sum + (val || 0), 0);
    const creditTotal = Object.values(practiceData.trialBalance.credit).reduce((sum, val) => sum + (val || 0), 0);

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Setup Your Practice Problem</h2>
          <p className="text-gray-700">
            Create your own accounting problem by entering trial balance and adjustments
          </p>
        </div>

        {/* Account Category Helper */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="bg-yellow-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-xl font-semibold">🎯 Smart Account Helper</h3>
            <button
              onClick={() => setShowAccountHelper(!showAccountHelper)}
              className="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded text-sm"
            >
              {showAccountHelper ? 'Hide Helper' : 'Show Helper'}
            </button>
          </div>
          {showAccountHelper && (
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(accountCategories).map(([category, info]) => (
                  <div key={category} className={`bg-${info.color}-50 p-4 rounded-lg border border-${info.color}-200`}>
                    <h5 className={`font-semibold text-${info.color}-800 mb-2 capitalize`}>
                      {category} → {info.side === 'debit' ? 'Debit Side' : 'Credit Side'}
                    </h5>
                    <div className="space-y-1">
                      {info.examples.slice(0, 3).map(example => (
                        <div key={example} className={`text-${info.color}-700 text-sm`}>• {example}</div>
                      ))}
                      {info.examples.length > 3 && (
                        <div className={`text-${info.color}-600 text-xs`}>...and more</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Account Input */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">📊 Add Account to Trial Balance</h3>
          </div>
          <div className="p-6">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Add New Account</h4>
              <div className="grid md:grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="Account Name"
                  value={newAccount.name}
                  onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={newAccount.amount}
                  onChange={(e) => setNewAccount({ ...newAccount, amount: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={newAccount.category}
                  onChange={(e) => {
                    const category = e.target.value;
                    const side = accountCategories[category].side;
                    setNewAccount({ ...newAccount, category, side });
                  }}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="assets">Assets</option>
                  <option value="liabilities">Liabilities</option>
                  <option value="capital">Capital</option>
                  <option value="income">Income</option>
                  <option value="expenses">Expenses</option>
                </select>
                <div className={`p-3 rounded-lg border-2 border-dashed flex items-center justify-center ${
                  accountCategories[newAccount.category].side === 'debit' 
                    ? 'border-red-300 bg-red-50 text-red-800' 
                    : 'border-green-300 bg-green-50 text-green-800'
                }`}>
                  {accountCategories[newAccount.category].side === 'debit' ? 'Debit Side' : 'Credit Side'}
                </div>
                <button
                  onClick={addAccount}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Account
                </button>
              </div>
            </div>

            {/* Current Trial Balance Display */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Debit Side */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 bg-red-100 p-2 rounded">
                  Debit Side - {formatCurrency(debitTotal)}
                </h5>
                <div className="space-y-2">
                  {Object.entries(practiceData.trialBalance.debit).map(([account, amount]) => (
                    <div key={account} className="flex justify-between items-center p-3 bg-red-50 rounded border">
                      <span className="font-medium">{account}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{formatCurrency(amount)}</span>
                        <button
                          onClick={() => removeAccount('debit', account)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  ))}
                  {Object.keys(practiceData.trialBalance.debit).length === 0 && (
                    <p className="text-gray-500 italic text-center py-4">No debit accounts added yet</p>
                  )}
                </div>
              </div>

              {/* Credit Side */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 bg-green-100 p-2 rounded">
                  Credit Side - {formatCurrency(creditTotal)}
                </h5>
                <div className="space-y-2">
                  {Object.entries(practiceData.trialBalance.credit).map(([account, amount]) => (
                    <div key={account} className="flex justify-between items-center p-3 bg-green-50 rounded border">
                      <span className="font-medium">{account}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{formatCurrency(amount)}</span>
                        <button
                          onClick={() => removeAccount('credit', account)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  ))}
                  {Object.keys(practiceData.trialBalance.credit).length === 0 && (
                    <p className="text-gray-500 italic text-center py-4">No credit accounts added yet</p>
                  )}
                </div>
              </div>
            </div>

            {/* Balance Check */}
            <div className="mt-6 p-4 rounded-lg border-2 border-dashed border-gray-300">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Trial Balance Status:</span>
                <span className={`font-bold text-lg ${
                  debitTotal === creditTotal ? 'text-green-600' : 'text-red-600'
                }`}>
                  {debitTotal === creditTotal ? '✅ BALANCED' : '❌ NOT BALANCED'}
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Difference: {formatCurrency(Math.abs(debitTotal - creditTotal))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <h1 className="text-3xl font-bold text-gray-900">
              🎓 Complete Accounting Practice System
            </h1>
            <p className="text-gray-600 mt-1">
              Master debit/credit rules and practice with your own problems
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-6 py-4 overflow-x-auto">
            {[
              { id: 'learn-basics', label: '📚 Learn Rules', icon: '🎯' },
              // { id: 'quiz', label: '🎯 Practice Quiz', icon: '❓' },
              { id: 'setup', label: '🛠️ Setup Problem', icon: '⚙️' },
              // { id: 'journal', label: '📝 Journal Entries', icon: '✏️' },
              // { id: 'trading', label: '📊 Trading Account', icon: '💹' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeSection === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'learn-basics' && <LearnBasicsSection />}
        {activeSection === 'quiz' && <QuizSection />}
        {activeSection === 'setup' && <SetupSection />}
        {/* Other sections would go here */}
      </div>
    </div>
  );
};

export default EnhancedAccountingPracticeSystem;
