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

  // All questions with DETAILED solutions and mental math tricks
  const questions = {
    liquidity: {
      title: "Liquidity Ratios (Q1-Q3)",
      description: "Measure company's ability to pay short-term obligations",
      icon: "💧",
      questions: [
        {
          id: 1,
          question: "A Business has a Current Ratio of 3:1. Its net working capital is Rs.4,00,000 and its stock is valued at Rs.2,50,000. Calculate Liquid Ratio.",
          given: [
            "Current Ratio = 3:1",
            "Net Working Capital = Rs.4,00,000",
            "Stock = Rs.2,50,000"
          ],
          formula: "Liquid Ratio = Liquid Assets / Current Liabilities",
          solution: [
            {
              step: "Understanding the Given Ratio",
              explanation: "Current Ratio = 3:1 means CA:CL = 3:1\nThis tells us that Current Assets are 3 times Current Liabilities",
              calculation: "If CL = x, then CA = 3x",
              mentalMath: "Remember: Ratio 3:1 means multiply CL by 3 to get CA"
            },
            {
              step: "Using Net Working Capital Formula",
              explanation: "Net Working Capital = Current Assets - Current Liabilities\nGiven: NWC = 4,00,000",
              calculation: "4,00,000 = CA - CL\n4,00,000 = 3x - x\n4,00,000 = 2x",
              mentalMath: "Trick: 3x - x = 2x (subtract like terms)"
            },
            {
              step: "Solving for x (Current Liabilities)",
              explanation: "Now we solve: 2x = 4,00,000",
              calculation: "x = 4,00,000 ÷ 2\nx = 2,00,000",
              mentalMath: "Mental division: 400 ÷ 2 = 200, add zeros → 2,00,000"
            },
            {
              step: "Calculate Current Assets",
              explanation: "Since CA = 3x and x = 2,00,000",
              calculation: "CA = 3 × 2,00,000\nCA = 6,00,000",
              mentalMath: "Mental multiplication: 3 × 200 = 600, add zeros → 6,00,000"
            },
            {
              step: "Calculate Liquid Assets",
              explanation: "Liquid Assets = Current Assets - Stock\nWe remove stock because it's not easily convertible to cash",
              calculation: "Liquid Assets = 6,00,000 - 2,50,000\nLiquid Assets = 3,50,000",
              mentalMath: "Mental subtraction: 600 - 250 = 350, add zeros → 3,50,000"
            },
            {
              step: "Calculate Liquid Ratio",
              explanation: "Liquid Ratio = Liquid Assets / Current Liabilities",
              calculation: "Liquid Ratio = 3,50,000 / 2,00,000\nLiquid Ratio = 1.75:1",
              mentalMath: "Simplify: 350 ÷ 200 = 35 ÷ 20 = 7 ÷ 4 = 1.75"
            }
          ],
          answer: "Liquid Ratio = 1.75:1 or 7:4",
          verifyAnswer: {
            check1: "CL = 2,00,000 ✓",
            check2: "CA = 6,00,000 ✓",
            check3: "CA/CL = 6/2 = 3 ✓ (matches given ratio)",
            check4: "NWC = 6,00,000 - 2,00,000 = 4,00,000 ✓"
          },
          keyLearning: "Liquid Ratio is also called Quick Ratio or Acid Test Ratio. It excludes stock and prepaid expenses from current assets.",
          examTip: "Always verify: CA - CL should equal NWC. This catches calculation errors!"
        },
        {
          id: 2,
          question: "Calculate Current Ratio and Quick Ratio from: Sundry Debtors Rs.4,00,000; Prepaid Expenses Rs.40,000; Debentures Rs.2,00,000; Stock Rs.1,60,000; Bills Payable Rs.80,000; Marketable Securities Rs.80,000; Sundry Creditors Rs.1,60,000; Cash Rs.1,20,000; Expenses Payable Rs.1,60,000.",
          given: [
            "Sundry Debtors = Rs.4,00,000",
            "Prepaid Expenses = Rs.40,000",
            "Debentures = Rs.2,00,000 (LONG-TERM LIABILITY)",
            "Stock = Rs.1,60,000",
            "Bills Payable = Rs.80,000",
            "Marketable Securities = Rs.80,000",
            "Sundry Creditors = Rs.1,60,000",
            "Cash = Rs.1,20,000",
            "Expenses Payable = Rs.1,60,000"
          ],
          formula: "Current Ratio = CA/CL, Quick Ratio = (CA - Stock - Prepaid)/CL",
          solution: [
            {
              step: "Identify Current Assets (CA)",
              explanation: "Current Assets are assets that can be converted to cash within one year.\nInclude: Debtors, Prepaid, Stock, Marketable Securities, Cash\nEXCLUDE: Debentures (they are liabilities, not assets!)",
              calculation: "CA = Debtors + Prepaid + Stock + Securities + Cash\nCA = 4,00,000 + 40,000 + 1,60,000 + 80,000 + 1,20,000",
              mentalMath: "Add in groups:\n400 + 40 = 440\n440 + 160 = 600\n600 + 80 = 680\n680 + 120 = 800\nCA = 8,00,000"
            },
            {
              step: "Identify Current Liabilities (CL)",
              explanation: "Current Liabilities are obligations due within one year.\nInclude: Bills Payable, Creditors, Expenses Payable\nEXCLUDE: Debentures (they are LONG-TERM, not current)",
              calculation: "CL = Bills Payable + Creditors + Expenses Payable\nCL = 80,000 + 1,60,000 + 1,60,000",
              mentalMath: "Add: 80 + 160 + 160 = 400 (add zeros) = 4,00,000"
            },
            {
              step: "Calculate Current Ratio",
              explanation: "Current Ratio = Current Assets / Current Liabilities",
              calculation: "Current Ratio = 8,00,000 / 4,00,000\nCurrent Ratio = 2:1",
              mentalMath: "Simplify: 800 ÷ 400 = 8 ÷ 4 = 2\nRatio = 2:1"
            },
            {
              step: "Calculate Quick Assets (Liquid Assets)",
              explanation: "Quick Assets = CA - Stock - Prepaid Expenses\nWe remove Stock (takes time to sell) and Prepaid (can't be converted to cash)",
              calculation: "Quick Assets = 8,00,000 - 1,60,000 - 40,000\nQuick Assets = 6,00,000",
              mentalMath: "Subtract step by step:\n800 - 160 = 640\n640 - 40 = 600\nQuick Assets = 6,00,000"
            },
            {
              step: "Calculate Quick Ratio",
              explanation: "Quick Ratio = Quick Assets / Current Liabilities",
              calculation: "Quick Ratio = 6,00,000 / 4,00,000\nQuick Ratio = 1.5:1",
              mentalMath: "Simplify: 600 ÷ 400 = 6 ÷ 4 = 3 ÷ 2 = 1.5\nRatio = 1.5:1 or 3:2"
            }
          ],
          answer: "Current Ratio = 2:1, Quick Ratio = 1.5:1 (or 3:2)",
          verifyAnswer: {
            check1: "CA = 8,00,000 ✓",
            check2: "CL = 4,00,000 ✓",
            check3: "Quick Assets = 6,00,000 ✓",
            check4: "Debentures NOT included in CL ✓"
          },
          keyLearning: "IMPORTANT: Debentures are ALWAYS long-term liabilities. NEVER include them in Current Liabilities.",
          examTip: "Common mistake: Including Debentures in CL. Always check - are they long-term or short-term?"
        },
        {
          id: 3,
          question: "Calculate Current Assets from: Stock Turnover: 4 Times; Stock at end is Rs.20,000 more than beginning; Sales Rs.3,00,000; Gross Profit Ratio 25%; Current Liabilities Rs.40,000; Quick Ratio 0.75:1",
          given: [
            "Stock Turnover = 4 Times",
            "Closing Stock = Opening Stock + Rs.20,000",
            "Sales = Rs.3,00,000",
            "Gross Profit Ratio = 25% (on sales)",
            "Current Liabilities = Rs.40,000",
            "Quick Ratio = 0.75:1"
          ],
          formula: "Stock Turnover = COGS/Avg Stock, Quick Ratio = Quick Assets/CL",
          solution: [
            {
              step: "Calculate Cost of Goods Sold (COGS)",
              explanation: "If GP Ratio = 25% (on sales), then:\nGross Profit = 25% of Sales\nCOGS = Sales - Gross Profit = 75% of Sales",
              calculation: "COGS = 75% of 3,00,000\nCOGS = (75/100) × 3,00,000\nCOGS = 2,25,000",
              mentalMath: "75% = 3/4\n3,00,000 ÷ 4 = 75,000\n75,000 × 3 = 2,25,000\nOR: 100% - 25% = 75%, so 75% of 300 = 225"
            },
            {
              step: "Calculate Average Stock",
              explanation: "Stock Turnover = COGS / Average Stock\n4 = 2,25,000 / Average Stock",
              calculation: "Average Stock = 2,25,000 / 4\nAverage Stock = 56,250",
              mentalMath: "225,000 ÷ 4:\nThink: 200 ÷ 4 = 50\n24 ÷ 4 = 6\n1000 ÷ 4 = 250\n= 50,000 + 6,000 + 250 = 56,250"
            },
            {
              step: "Calculate Opening and Closing Stock",
              explanation: "Let Opening Stock = x\nThen Closing Stock = x + 20,000\nAverage Stock = (Opening + Closing) / 2",
              calculation: "56,250 = (x + x + 20,000) / 2\n56,250 = (2x + 20,000) / 2\n1,12,500 = 2x + 20,000\n2x = 92,500\nx = 46,250",
              mentalMath: "Step 1: 56,250 × 2 = 1,12,500\nStep 2: 1,12,500 - 20,000 = 92,500\nStep 3: 92,500 ÷ 2 = 46,250"
            },
            {
              step: "Find Opening and Closing Stock Values",
              explanation: "Now we know x = 46,250",
              calculation: "Opening Stock = x = 46,250\nClosing Stock = x + 20,000 = 66,250",
              mentalMath: "46,250 + 20,000 = 66,250\n(Add thousands place: 46 + 20 = 66)"
            },
            {
              step: "Calculate Quick Assets",
              explanation: "Quick Ratio = Quick Assets / Current Liabilities\n0.75 = Quick Assets / 40,000",
              calculation: "Quick Assets = 0.75 × 40,000\nQuick Assets = 30,000",
              mentalMath: "0.75 = 3/4\n40,000 × 3/4:\n40,000 ÷ 4 = 10,000\n10,000 × 3 = 30,000"
            },
            {
              step: "Calculate Current Assets",
              explanation: "Current Assets = Quick Assets + Closing Stock\n(Quick Assets don't include stock, so we add it back)",
              calculation: "Current Assets = 30,000 + 66,250\nCurrent Assets = 96,250",
              mentalMath: "30,000 + 66,250:\n30 + 66 = 96\nAdd 250\n= 96,250"
            }
          ],
          answer: "Current Assets = Rs.96,250",
          verifyAnswer: {
            check1: "Opening Stock = 46,250 ✓",
            check2: "Closing Stock = 66,250 ✓",
            check3: "Average Stock = (46,250 + 66,250)/2 = 56,250 ✓",
            check4: "Stock Turnover = 2,25,000/56,250 = 4 ✓"
          },
          keyLearning: "Stock Turnover ALWAYS uses COGS, never Sales. Average Stock = (Opening + Closing) / 2",
          examTip: "To find 75% quickly: Divide by 4, multiply by 3. OR subtract 25% from 100%."
        }
      ]
    },
    impact: {
      title: "Impact Analysis (Q4-Q5)",
      description: "How transactions affect Current Ratio",
      icon: "⚡",
      questions: [
        {
          id: 4,
          question: "Current Ratio = 2:1. State effect of: (i) Repayment of Current Liability (ii) Purchasing goods on credit (iii) Sale of office equipment for Rs.4,000 (Book Value Rs.5,000) (iv) Sale of goods Rs.11,000 (Cost Rs.10,000) (v) Payment of Dividend",
          given: [
            "Initial Current Ratio = 2:1",
            "Let's assume CA = Rs.2,00,000 and CL = Rs.1,00,000"
          ],
          formula: "Current Ratio = Current Assets / Current Liabilities",
          solution: [
            {
              step: "Initial Position",
              explanation: "Start with Current Ratio = 2:1\nLet CA = 2,00,000 and CL = 1,00,000",
              calculation: "Initial Ratio = 2,00,000 / 1,00,000 = 2:1",
              mentalMath: "2 ÷ 1 = 2, so ratio is 2:1"
            },
            {
              step: "Transaction (i): Repayment of Current Liability",
              explanation: "When we pay a current liability:\n- Cash decreases (CA decreases)\n- Liability paid off (CL decreases)\nBoth decrease by SAME amount",
              calculation: "Let's say we pay Rs.10,000:\nNew CA = 2,00,000 - 10,000 = 1,90,000\nNew CL = 1,00,000 - 10,000 = 90,000\nNew Ratio = 1,90,000 / 90,000 = 2.11:1",
              mentalMath: "Rule: When CR > 1, equal decrease IMPROVES ratio\n19/9 > 20/10 ✓\nEffect: IMPROVES"
            },
            {
              step: "Transaction (ii): Purchasing goods on credit",
              explanation: "When we buy on credit:\n- Stock increases (CA increases)\n- Creditors increase (CL increases)\nBoth increase by SAME amount",
              calculation: "Buy goods worth Rs.10,000 on credit:\nNew CA = 2,00,000 + 10,000 = 2,10,000\nNew CL = 1,00,000 + 10,000 = 1,10,000\nNew Ratio = 2,10,000 / 1,10,000 = 1.91:1",
              mentalMath: "Rule: When CR > 1, equal increase REDUCES ratio\n21/11 < 20/10 ✓\nEffect: REDUCES"
            },
            {
              step: "Transaction (iii): Sale of equipment at loss",
              explanation: "Sale of Fixed Asset (not current asset):\n- Cash increases Rs.4,000 (CA increases)\n- Equipment decreases (Fixed Asset, not CA)\n- Loss Rs.1,000 (affects P&L, not immediate CA/CL)",
              calculation: "CA increases by 4,000 only:\nNew CA = 2,00,000 + 4,000 = 2,04,000\nCL remains = 1,00,000\nNew Ratio = 2,04,000 / 1,00,000 = 2.04:1",
              mentalMath: "CA increases, CL unchanged → Ratio increases\nEffect: IMPROVES"
            },
            {
              step: "Transaction (iv): Sale of goods at profit",
              explanation: "Sale of goods:\n- Cash increases Rs.11,000 (CA increases)\n- Stock decreases Rs.10,000 (CA decreases)\n- Net effect: CA increases by Rs.1,000",
              calculation: "Net change in CA:\n+11,000 (cash in)\n-10,000 (stock out)\n= +1,000 net increase\n\nNew CA = 2,00,000 + 1,000 = 2,01,000\nCL unchanged = 1,00,000\nNew Ratio = 2,01,000 / 1,00,000 = 2.01:1",
              mentalMath: "CA increases, CL unchanged → Ratio increases\nEffect: IMPROVES"
            },
            {
              step: "Transaction (v): Payment of Dividend",
              explanation: "Dividend payment:\n- Cash decreases (CA decreases)\n- Dividend Payable decreases (CL decreases)\nSame as repaying current liability",
              calculation: "Both CA and CL decrease equally\nSame logic as transaction (i)\nEffect: IMPROVES",
              mentalMath: "Equal decrease when CR > 1 = IMPROVES"
            }
          ],
          answer: "(i) IMPROVE ✓ (ii) REDUCE ✗ (iii) IMPROVE ✓ (iv) IMPROVE ✓ (v) IMPROVE ✓",
          verifyAnswer: {
            rule1: "When CR > 1: Equal ↓ in CA & CL → IMPROVES",
            rule2: "When CR > 1: Equal ↑ in CA & CL → REDUCES",
            rule3: "When only CA ↑ → IMPROVES",
            rule4: "When only CL ↓ → IMPROVES"
          },
          keyLearning: "Golden Rule: When Current Ratio > 1, equal decreases improve the ratio, equal increases reduce the ratio.",
          examTip: "Remember: 2/1 = 2.00, but 1.9/0.9 = 2.11 (improved!). Smaller numbers, same difference = better ratio."
        }
      ]
    },
    solvency: {
      title: "Solvency Ratios (Q6-Q8)",
      description: "Measure long-term financial stability",
      icon: "🏦",
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
            "Preliminary Expenses = Rs.10,000 (Fictitious Asset)"
          ],
          formula: "Debt-Equity Ratio = Long-term Debt / Shareholders' Equity",
          solution: [
            {
              step: "Calculate Shareholders' Equity",
              explanation: "Equity = Share Capital + All Reserves - Fictitious Assets\nFictitious Assets (like Preliminary Expenses) reduce equity because they have no real value",
              calculation: "Equity = 5,00,000 + 1,00,000 + 50,000 - 10,000\nEquity = 6,40,000",
              mentalMath: "Add positives: 500 + 100 + 50 = 650\nSubtract: 650 - 10 = 640\nEquity = 6,40,000"
            },
            {
              step: "Identify Long-term Debt",
              explanation: "IMPORTANT: For Debt-Equity Ratio\n- Include: Debentures, Long-term Loans\n- EXCLUDE: Current Liabilities (they're short-term)\n\nOnly LONG-TERM debts count!",
              calculation: "Long-term Debt = Debentures only = 1,30,000\n\nCurrent Liabilities are NOT included",
              mentalMath: "Debt = 1,30,000 (only debentures)"
            },
            {
              step: "Calculate Debt-Equity Ratio",
              explanation: "Debt-Equity Ratio = Total Debt / Shareholders' Equity",
              calculation: "D/E Ratio = 1,30,000 / 6,40,000\nD/E Ratio = 0.203:1 or 0.20:1",
              mentalMath: "Simplify fraction:\n130/640 = 13/64\n13 ÷ 64 ≈ 0.20\nOR: 130/640 = 13/64 ≈ 1/5 = 0.20"
            }
          ],
          answer: "Debt-Equity Ratio = 0.20:1 (or 1:5)",
          verifyAnswer: {
            check1: "Shareholders' Equity = 6,40,000 ✓",
            check2: "Only Debentures in Debt (not CL) ✓",
            check3: "Preliminary Expenses deducted ✓",
            check4: "Ratio < 1 means more equity than debt (good!) ✓"
          },
          keyLearning: "CRITICAL: Current Liabilities are NEVER part of 'Debt' in Debt-Equity Ratio. Only long-term borrowings count.",
          examTip: "Common exam trap: Including Current Liabilities in Debt. Always exclude them!"
        },
        {
          id: 7,
          question: "Calculate Debt Equity Ratio and Current Ratio from: Share Capital Rs.2,50,000; Bills Payable Rs.15,000; Creditors Rs.45,000; Debtors Rs.60,000; 12% Debentures Rs.2,80,000; Bank Balance Rs.30,000; Long Term Loan Rs.1,10,000; General Reserve Rs.25,000",
          given: [
            "Share Capital = Rs.2,50,000",
            "General Reserve = Rs.25,000",
            "12% Debentures = Rs.2,80,000",
            "Long Term Loan = Rs.1,10,000",
            "Debtors = Rs.60,000",
            "Bank Balance = Rs.30,000",
            "Bills Payable = Rs.15,000",
            "Creditors = Rs.45,000"
          ],
          formula: "D/E = Long-term Debt/Equity, CR = CA/CL",
          solution: [
            {
              step: "Calculate Shareholders' Equity",
              explanation: "Equity = Share Capital + Reserves",
              calculation: "Equity = 2,50,000 + 25,000\nEquity = 2,75,000",
              mentalMath: "250 + 25 = 275 (add thousands)\nEquity = 2,75,000"
            },
            {
              step: "Calculate Total Long-term Debt",
              explanation: "Long-term Debt = Debentures + Long-term Loans\n(Both are long-term borrowings)",
              calculation: "Debt = 2,80,000 + 1,10,000\nDebt = 3,90,000",
              mentalMath: "280 + 110 = 390 (add in thousands)\nDebt = 3,90,000"
            },
            {
              step: "Calculate Debt-Equity Ratio",
              explanation: "D/E Ratio = Total Debt / Shareholders' Equity",
              calculation: "D/E = 3,90,000 / 2,75,000\nD/E = 1.42:1",
              mentalMath: "Simplify: 390/275\n= 39/27.5\n≈ 1.42\n\nQuick check: 275 × 1 = 275\n390 - 275 = 115\n115/275 = 0.42\nSo 1.42:1"
            },
            {
              step: "Identify Current Assets",
              explanation: "Current Assets from the given data:\n- Debtors (money to receive)\n- Bank Balance (cash in bank)",
              calculation: "CA = Debtors + Bank Balance\nCA = 60,000 + 30,000\nCA = 90,000",
              mentalMath: "60 + 30 = 90 (add thousands)\nCA = 90,000"
            },
            {
              step: "Identify Current Liabilities",
              explanation: "Current Liabilities from the given data:\n- Bills Payable\n- Creditors",
              calculation: "CL = Bills Payable + Creditors\nCL = 15,000 + 45,000\nCL = 60,000",
              mentalMath: "15 + 45 = 60 (add thousands)\nCL = 60,000"
            },
            {
              step: "Calculate Current Ratio",
              explanation: "Current Ratio = Current Assets / Current Liabilities",
              calculation: "CR = 90,000 / 60,000\nCR = 1.5:1",
              mentalMath: "Simplify: 90/60 = 9/6 = 3/2 = 1.5\nCR = 1.5:1"
            }
          ],
          answer: "Debt-Equity Ratio = 1.42:1, Current Ratio = 1.5:1",
          verifyAnswer: {
            check1: "Equity = 2,75,000 ✓",
            check2: "Debt = 3,90,000 (both debentures + loan) ✓",
            check3: "CA = 90,000 ✓",
            check4: "CL = 60,000 ✓"
          },
          keyLearning: "Both Debentures and Long-term Loans are long-term debts. Add them together for Debt-Equity Ratio.",
          examTip: "To divide 390 by 275 mentally: Think 390 = 275 + 115, so it's 1 + (115/275) ≈ 1.42"
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
          formula: "D/E = Debt/Equity, Proprietary = Equity/Total Assets",
          solution: [
            {
              step: "Calculate Shareholders' Equity",
              explanation: "Equity = Share Capital + Reserves",
              calculation: "Equity = 75,000 + 20,000\nEquity = 95,000",
              mentalMath: "75 + 20 = 95 (add thousands)\nEquity = 95,000"
            },
            {
              step: "Calculate Total Long-term Debt",
              explanation: "Debt = Debentures + Bank Loan\n(Both are long-term)",
              calculation: "Debt = 40,000 + 30,000\nDebt = 70,000",
              mentalMath: "40 + 30 = 70 (add thousands)\nDebt = 70,000"
            },
            {
              step: "Calculate Debt-Equity Ratio",
              explanation: "D/E = Total Debt / Shareholders' Equity",
              calculation: "D/E = 70,000 / 95,000\nD/E = 0.737:1 or 0.74:1",
              mentalMath: "Simplify: 70/95 = 14/19\n14 ÷ 19 ≈ 0.74\n\nQuick: 70/95 is slightly less than 70/100 = 0.70\nSo about 0.74"
            },
            {
              step: "Calculate Total Assets",
              explanation: "Total Assets = Fixed Assets + Intangible Assets + Current Assets",
              calculation: "Total Assets = 82,000 + 48,000 + 50,000\nTotal Assets = 1,80,000",
              mentalMath: "Add in steps:\n82 + 48 = 130\n130 + 50 = 180\nTotal Assets = 1,80,000"
            },
            {
              step: "Calculate Proprietary Ratio",
              explanation: "Proprietary Ratio = Shareholders' Equity / Total Assets\nThis shows what portion of assets belong to shareholders",
              calculation: "Proprietary Ratio = 95,000 / 1,80,000\nProprietary Ratio = 0.528:1 or 0.53:1",
              mentalMath: "Simplify: 95/180 = 19/36\n19 ÷ 36 ≈ 0.53\n\nQuick: 95/180 is slightly more than 95/190 = 1/2 = 0.50\nSo about 0.53"
            }
          ],
          answer: "Debt-Equity = 0.74:1, Proprietary Ratio = 0.53:1",
          verifyAnswer: {
            check1: "Equity = 95,000 ✓",
            check2: "Debt = 70,000 ✓",
            check3: "Total Assets = 1,80,000 ✓",
            check4: "Both ratios < 1 (acceptable) ✓"
          },
          keyLearning: "Proprietary Ratio shows financial independence. Higher ratio (closer to 1) means company owns more of its assets.",
          examTip: "To estimate ratios quickly: Compare to simple fractions like 1/2, 3/4, etc."
        }
      ]
    },
    deImpact: {
      title: "D/E Impact Analysis (Q9-Q10)",
      description: "How transactions affect Debt-Equity Ratio",
      icon: "📊",
      questions: [
        {
          id: 9,
          question: "Debt-Equity = 2:1. State effect of: (i) Purchase of fixed asset on credit (2 months) (ii) Purchase on long-term deferred payment (iii) Issue new shares for cash (iv) Issue bonus shares (v) Sale of fixed asset at loss Rs.3,000",
          given: [
            "Initial Debt-Equity Ratio = 2:1",
            "This means Debt is 2 times the Equity"
          ],
          formula: "Debt-Equity Ratio = Long-term Debt / Shareholders' Equity",
          solution: [
            {
              step: "Initial Understanding",
              explanation: "Debt-Equity = 2:1 means:\nIf Equity = 1,00,000\nThen Debt = 2,00,000\nRatio = 2,00,000 / 1,00,000 = 2:1",
              calculation: "Initial D/E = 2:1",
              mentalMath: "Remember: This ratio uses ONLY long-term debt"
            },
            {
              step: "Transaction (i): Purchase on 2 months credit",
              explanation: "2 months = SHORT-TERM credit\nThis creates Current Liability (not long-term debt)\n\nIMPORTANT: Current Liabilities DON'T affect D/E Ratio!",
              calculation: "Current Liability increases ← NOT part of 'Debt'\nEquity unchanged\n\nD/E Ratio = Same / Same = NO CHANGE",
              mentalMath: "Rule: Only LONG-TERM debts affect D/E\nEffect: NO CHANGE ✓"
            },
            {
              step: "Transaction (ii): Long-term deferred payment",
              explanation: "Long-term deferred payment = LONG-TERM LIABILITY\nThis DOES increase Debt in D/E Ratio",
              calculation: "Debt increases (deferred payment added)\nEquity unchanged\n\nNew D/E = Higher Debt / Same Equity = INCREASES",
              mentalMath: "Numerator ↑, Denominator same → Ratio ↑\nEffect: INCREASE ✗"
            },
            {
              step: "Transaction (iii): Issue new shares for cash",
              explanation: "Issuing shares brings in money and increases equity\nDebt stays the same",
              calculation: "Debt unchanged\nEquity increases (more shareholders)\n\nNew D/E = Same Debt / Higher Equity = DECREASES",
              mentalMath: "Numerator same, Denominator ↑ → Ratio ↓\nEffect: DECREASE ✓ (Good!)"
            },
            {
              step: "Transaction (iv): Issue bonus shares",
              explanation: "Bonus shares = Converting reserves into share capital\nIt's just reshuffling within equity\nTotal equity amount doesn't change!",
              calculation: "Example: Reserve 50,000 → Share Capital 50,000\nTotal Equity = Still same\nDebt unchanged\n\nD/E = Same / Same = NO CHANGE",
              mentalMath: "Internal transfer, no real change\nEffect: NO CHANGE ✓"
            },
            {
              step: "Transaction (v): Sale at loss",
              explanation: "Loss of Rs.3,000 reduces profit\nLower profit = Lower retained earnings = Lower equity\nDebt unchanged",
              calculation: "Debt unchanged\nEquity decreases by Rs.3,000 (loss)\n\nNew D/E = Same Debt / Lower Equity = INCREASES",
              mentalMath: "Numerator same, Denominator ↓ → Ratio ↑\nEffect: INCREASE ✗ (Bad!)"
            }
          ],
          answer: "(i) NO CHANGE (ii) INCREASE (iii) DECREASE (iv) NO CHANGE (v) INCREASE",
          verifyAnswer: {
            rule1: "Only long-term debts affect D/E",
            rule2: "Profit increases equity, Loss decreases equity",
            rule3: "Issuing shares increases equity",
            rule4: "Bonus shares = internal transfer (no change)"
          },
          keyLearning: "Key Rules: (1) Only LONG-TERM debt counts (2) Losses reduce equity (3) Share issue increases equity (4) Bonus = no real change",
          examTip: "Quick check: Does it affect long-term debt or equity? If neither, ratio doesn't change."
        }
      ]
    },
    turnover: {
      title: "Turnover Ratios (Q11-Q12)",
      description: "Measure operational efficiency",
      icon: "🔄",
      questions: [
        {
          id: 11,
          question: "Calculate Inventory Turnover Ratio from: Sales Rs.3,00,000; Gross profit 25% on cost; Opening stock was 1/3rd of closing stock; Closing stock was 30% of sales.",
          given: [
            "Sales = Rs.3,00,000",
            "Gross Profit = 25% ON COST (not on sales)",
            "Opening Stock = 1/3 of Closing Stock",
            "Closing Stock = 30% of Sales"
          ],
          formula: "Inventory Turnover = COGS / Average Stock",
          solution: [
            {
              step: "Calculate Closing Stock",
              explanation: "Closing Stock = 30% of Sales",
              calculation: "Closing Stock = 30% of 3,00,000\nClosing Stock = 90,000",
              mentalMath: "30% = 3/10\n3,00,000 × 3/10 = 3,00,000 × 0.3 = 90,000\nOR: 10% of 300,000 = 30,000\n30% = 3 × 30,000 = 90,000"
            },
            {
              step: "Calculate Opening Stock",
              explanation: "Opening Stock = 1/3 of Closing Stock",
              calculation: "Opening Stock = 1/3 × 90,000\nOpening Stock = 30,000",
              mentalMath: "90,000 ÷ 3 = 30,000\nThink: 90 ÷ 3 = 30, add zeros"
            },
            {
              step: "Calculate COGS (Understanding GP on Cost)",
              explanation: "CRITICAL: GP is 25% ON COST (not on sales)\nThis means: If Cost = 100, then GP = 25\nSo Sales = Cost + GP = 100 + 25 = 125\n\nFormula: Sales = Cost × (1 + GP%)\nSales = Cost × 1.25",
              calculation: "3,00,000 = Cost × 1.25\nCost = 3,00,000 / 1.25\nCost = 2,40,000",
              mentalMath: "To divide by 1.25:\n1.25 = 5/4\nSo multiply by 4/5:\n3,00,000 × 4/5 = 2,40,000\n\nOR: 3,00,000 ÷ 1.25\n= 3,00,000 × 4/5\n= (3,00,000 × 4) ÷ 5\n= 12,00,000 ÷ 5 = 2,40,000"
            },
            {
              step: "Calculate Average Stock",
              explanation: "Average Stock = (Opening Stock + Closing Stock) / 2",
              calculation: "Average Stock = (30,000 + 90,000) / 2\nAverage Stock = 1,20,000 / 2\nAverage Stock = 60,000",
              mentalMath: "30 + 90 = 120 (add in thousands)\n120 ÷ 2 = 60\nAverage = 60,000"
            },
            {
              step: "Calculate Inventory Turnover Ratio",
              explanation: "Inventory Turnover = COGS / Average Stock\nThis tells us how many times stock is sold and replaced in a year",
              calculation: "Turnover = 2,40,000 / 60,000\nTurnover = 4 times",
              mentalMath: "240 ÷ 60 = 24 ÷ 6 = 4\nTurnover = 4 times"
            }
          ],
          answer: "Inventory Turnover Ratio = 4 times",
          verifyAnswer: {
            check1: "Closing Stock = 90,000 ✓",
            check2: "Opening Stock = 30,000 ✓",
            check3: "COGS = 2,40,000 ✓",
            check4: "Average Stock = 60,000 ✓",
            check5: "Turnover = 4 times ✓"
          },
          keyLearning: "CRITICAL DIFFERENCE:\n• GP on Cost: Sales = Cost × 1.25 (if GP = 25%)\n• GP on Sales: Cost = Sales × 0.75 (if GP = 25%)\n\nAlways read carefully: 'on cost' or 'on sales'!",
          examTip: "Mental trick for dividing by 1.25: Multiply by 0.8 (or multiply by 4, divide by 5)"
        },
        {
          id: 12,
          question: "Net Credit Sales Rs.1,80,000; Debtors turnover 4 times; Closing debtors = 2 × Opening debtors. Calculate opening and closing debtors.",
          given: [
            "Net Credit Sales = Rs.1,80,000",
            "Debtors Turnover Ratio = 4 times",
            "Closing Debtors = 2 × Opening Debtors"
          ],
          formula: "Debtors Turnover = Net Credit Sales / Average Debtors",
          solution: [
            {
              step: "Calculate Average Debtors",
              explanation: "Debtors Turnover = Sales / Average Debtors\n4 = 1,80,000 / Average Debtors",
              calculation: "Average Debtors = 1,80,000 / 4\nAverage Debtors = 45,000",
              mentalMath: "180 ÷ 4:\nThink: 180 ÷ 4 = 45\nAdd thousands = 45,000\n\nOR: 200 ÷ 4 = 50\n180 is less, so 45"
            },
            {
              step: "Set up the equation",
              explanation: "Let Opening Debtors = x\nThen Closing Debtors = 2x (given)\n\nAverage Debtors = (Opening + Closing) / 2",
              calculation: "45,000 = (x + 2x) / 2\n45,000 = 3x / 2",
              mentalMath: "x + 2x = 3x (combine like terms)"
            },
            {
              step: "Solve for x",
              explanation: "From: 45,000 = 3x / 2\nMultiply both sides by 2:",
              calculation: "90,000 = 3x\nx = 90,000 / 3\nx = 30,000",
              mentalMath: "45,000 × 2 = 90,000\n90 ÷ 3 = 30\nSo 90,000 ÷ 3 = 30,000"
            },
            {
              step: "Calculate Opening and Closing Debtors",
              explanation: "Now we know x = 30,000",
              calculation: "Opening Debtors = x = 30,000\nClosing Debtors = 2x = 60,000",
              mentalMath: "30,000 × 2 = 60,000\nSimply: 30 × 2 = 60 (add zeros)"
            },
            {
              step: "Verify the Answer",
              explanation: "Let's check if our answer is correct:",
              calculation: "Average = (30,000 + 60,000) / 2 = 45,000 ✓\nTurnover = 1,80,000 / 45,000 = 4 ✓\n\nBoth match the given data!",
              mentalMath: "Verification:\n30 + 60 = 90\n90 ÷ 2 = 45 ✓\n180 ÷ 45 = 4 ✓"
            }
          ],
          answer: "Opening Debtors = Rs.30,000, Closing Debtors = Rs.60,000",
          verifyAnswer: {
            check1: "Average Debtors = 45,000 ✓",
            check2: "Opening = 30,000 ✓",
            check3: "Closing = 60,000 = 2 × 30,000 ✓",
            check4: "Turnover = 180,000/45,000 = 4 ✓"
          },
          keyLearning: "When you have two unknowns related by a formula, express one in terms of the other (like x and 2x), then solve using the average formula.",
          examTip: "Quick mental division trick: 180÷45 = ? Think: 180÷45 = (180÷9)÷(45÷9) = 20÷5 = 4"
        }
      ]
    }
  };

  // Formula reference data
  const formulas = {
    "Liquidity Ratios": [
      { name: "Current Ratio", formula: "Current Assets ÷ Current Liabilities", ideal: "2:1 or more", mentalTrick: "Higher = Better liquidity" },
      { name: "Quick Ratio", formula: "(CA - Stock - Prepaid) ÷ CL", ideal: "1:1 or more", mentalTrick: "Remove illiquid items" },
      { name: "Liquid Assets", formula: "CA - Stock - Prepaid Expenses", ideal: "High value", mentalTrick: "Only easily convertible to cash" }
    ],
    "Solvency Ratios": [
      { name: "Debt-Equity Ratio", formula: "Long-term Debt ÷ Shareholders' Equity", ideal: "< 2:1", mentalTrick: "Lower = Less risky" },
      { name: "Proprietary Ratio", formula: "Shareholders' Equity ÷ Total Assets", ideal: "> 0.5", mentalTrick: "Higher = More owned by shareholders" },
      { name: "Shareholders' Equity", formula: "Capital + Reserves - Fictitious Assets", ideal: "High", mentalTrick: "Subtract fake assets" }
    ],
    "Turnover Ratios": [
      { name: "Inventory Turnover", formula: "COGS ÷ Average Stock", ideal: "High", mentalTrick: "Uses COGS, NOT sales" },
      { name: "Debtors Turnover", formula: "Net Credit Sales ÷ Avg Debtors", ideal: "High", mentalTrick: "Higher = Faster collection" },
      { name: "Average Stock", formula: "(Opening Stock + Closing Stock) ÷ 2", ideal: "-", mentalTrick: "Simple average" }
    ]
  };

  const currentQuestions = questions[activeCategory]?.questions || [];
  const currentQuestion = currentQuestions.find(q => q.id === activeQuestion) || currentQuestions[0];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
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
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            title="Toggle Dark Mode"
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
            {showFormulas ? '✓ Formulas' : '📋 Formulas'}
          </button>
        </div>

        {/* Header */}
        <div className={`${
          darkMode ? 'bg-gray-800 border-indigo-500' : 'bg-white border-indigo-600'
        } rounded-xl shadow-lg p-8 mb-8 border-t-4 transition-colors duration-300`}>
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              📊 Ratio Analysis - Mental Math Guide
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Learn to solve every problem without a calculator!
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <span className={`text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} font-semibold`}>
                ✨ Step-by-step solutions
              </span>
              <span className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'} font-semibold`}>
                🧮 Mental math tricks
              </span>
              <span className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                🎯 Exam-ready answers
              </span>
            </div>
          </div>
        </div>

        {/* Formula Sheet Modal */}
        {showFormulas && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowFormulas(false)}>
            <div 
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  📖 Complete Formula & Mental Math Guide
                </h2>
                <button
                  onClick={() => setShowFormulas(false)}
                  className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} text-3xl font-bold`}
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
                      } p-4 rounded-lg border-l-4 ${
                        darkMode ? 'border-indigo-500' : 'border-indigo-300'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {ratio.name}
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono mt-1`}>
                              Formula: {ratio.formula}
                            </p>
                          </div>
                          <span className={`text-xs ${
                            darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                          } px-3 py-1 rounded-full font-semibold`}>
                            Ideal: {ratio.ideal}
                          </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-orange-600'} font-semibold`}>
                          💡 {ratio.mentalTrick}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className={`${
                darkMode ? 'bg-yellow-900 border-yellow-700' : 'bg-yellow-50 border-yellow-500'
              } border-l-4 p-6 rounded mt-6`}>
                <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-3 text-lg`}>
                  🧮 Mental Math Tricks for Exam:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'} space-y-2`}>
                    <li><strong>Percentage to fraction:</strong> 25% = 1/4, 75% = 3/4, 30% = 3/10</li>
                    <li><strong>Divide by 1.25:</strong> Multiply by 0.8 (or × 4 ÷ 5)</li>
                    <li><strong>Quick averages:</strong> Add both, divide by 2</li>
                    <li><strong>Simplify ratios:</strong> 800/400 = 8/4 = 2/1</li>
                  </ul>
                  <ul className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'} space-y-2`}>
                    <li><strong>GP on cost:</strong> Sales = Cost × 1.25 (if 25%)</li>
                    <li><strong>GP on sales:</strong> Cost = Sales × 0.75 (if 25%)</li>
                    <li><strong>Current Liabilities:</strong> NEVER in Debt-Equity!</li>
                    <li><strong>Stock Turnover:</strong> ALWAYS uses COGS, not Sales</li>
                  </ul>
                </div>
              </div>

              <div className={`${
                darkMode ? 'bg-red-900 border-red-700' : 'bg-red-50 border-red-500'
              } border-l-4 p-4 rounded mt-4`}>
                <h4 className={`font-bold ${darkMode ? 'text-red-300' : 'text-red-800'} mb-2`}>
                  ⚠️ Common Exam Mistakes to Avoid:
                </h4>
                <ul className={`text-sm ${darkMode ? 'text-red-200' : 'text-red-700'} space-y-1`}>
                  <li>• Including Current Liabilities in "Debt" for Debt-Equity Ratio</li>
                  <li>• Using Sales instead of COGS for Stock Turnover</li>
                  <li>• Confusing "GP on cost" with "GP on sales"</li>
                  <li>• Forgetting to subtract Fictitious Assets from Equity</li>
                  <li>• Including Debentures in Current Liabilities</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Category Navigation */}
        <div className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
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
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-sm">{cat.title}</div>
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
                  Select Question:
                </span>
                {currentQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestion(q.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeQuestion === q.id
                        ? darkMode
                          ? 'bg-indigo-500 text-white shadow-lg'
                          : 'bg-indigo-600 text-white shadow-lg'
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
                } p-6 rounded-lg border-l-4 shadow-lg`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                    📝 Question {currentQuestion.id}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} text-lg leading-relaxed`}>
                    {currentQuestion.question}
                  </p>
                </div>

                {/* Given Data */}
                <div className={`${
                  darkMode 
                    ? 'bg-green-900 border-green-600' 
                    : 'bg-green-50 border-green-500'
                } p-6 rounded-lg border-l-4 shadow-lg`}>
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>
                    📊 Given Data:
                  </h4>
                  <ul className="space-y-2">
                    {currentQuestion.given.map((item, idx) => (
                      <li key={idx} className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} flex items-start`}>
                        <span className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 text-lg`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formula */}
                <div className={`${
                  darkMode ? 'bg-purple-900 border-purple-600' : 'bg-purple-50 border-purple-500'
                } p-4 rounded-lg border-l-4`}>
                  <h4 className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-2`}>
                    📐 Formula Used:
                  </h4>
                  <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} font-mono text-lg`}>
                    {currentQuestion.formula}
                  </p>
                </div>

                {/* Step-by-Step Solution */}
                <div className={`${
                  darkMode ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-200'
                } p-6 rounded-lg border-2 shadow-xl`}>
                  <h4 className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'} mb-6 text-2xl flex items-center`}>
                    <span className="mr-3">🎯</span>
                    Step-by-Step Solution with Mental Math:
                  </h4>
                  <div className="space-y-6">
                    {currentQuestion.solution.map((step, idx) => (
                      <div key={idx} className={`${
                        darkMode ? 'bg-purple-900 border-purple-600' : 'bg-purple-50 border-purple-500'
                      } p-5 rounded-lg border-l-4 shadow-md hover:shadow-lg transition-shadow`}>
                        <div className="flex items-start mb-3">
                          <span className={`${
                            darkMode ? 'bg-purple-600' : 'bg-purple-600'
                          } text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-lg shadow-md`}>
                            {idx + 1}
                          </span>
                          <h5 className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-900'} text-xl`}>
                            {step.step}
                          </h5>
                        </div>
                        <div className="ml-14 space-y-3">
                          <div>
                            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} whitespace-pre-line leading-relaxed`}>
                              {step.explanation}
                            </p>
                          </div>
                          <div className={`${
                            darkMode ? 'bg-gray-900 border-purple-700' : 'bg-white border-purple-200'
                          } p-4 rounded border-2`}>
                            <p className={`${darkMode ? 'text-yellow-300' : 'text-indigo-700'} font-semibold text-sm mb-2`}>
                              📝 Calculation:
                            </p>
                            <p className={`font-mono ${darkMode ? 'text-gray-200' : 'text-gray-800'} whitespace-pre-line`}>
                              {step.calculation}
                            </p>
                          </div>
                          {step.mentalMath && (
                            <div className={`${
                              darkMode ? 'bg-yellow-900 border-yellow-700' : 'bg-yellow-50 border-yellow-400'
                            } p-3 rounded border-l-4`}>
                              <p className={`${darkMode ? 'text-yellow-300' : 'text-yellow-800'} font-semibold text-sm mb-1 flex items-center`}>
                                <span className="mr-2">🧮</span>
                                Mental Math Trick:
                              </p>
                              <p className={`${darkMode ? 'text-yellow-200' : 'text-yellow-700'} text-sm whitespace-pre-line`}>
                                {step.mentalMath}
                              </p>
                            </div>
                          )}
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
                } p-8 rounded-lg border-4 shadow-2xl`}>
                  <div className="flex items-center mb-4">
                    <span className="text-5xl mr-4">🎉</span>
                    <h4 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-900'} text-2xl`}>
                      Final Answer:
                    </h4>
                  </div>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-800'} ml-20 mb-4`}>
                    {currentQuestion.answer}
                  </p>
                  
                  {/* Verify Answer Section */}
                  {currentQuestion.verifyAnswer && (
                    <div className={`${darkMode ? 'bg-green-950' : 'bg-green-50'} p-4 rounded-lg ml-20 mt-4`}>
                      <p className={`${darkMode ? 'text-green-300' : 'text-green-800'} font-semibold mb-2`}>
                        ✅ Verification:
                      </p>
                      <div className="space-y-1">
                        {Object.values(currentQuestion.verifyAnswer).map((check, idx) => (
                          <p key={idx} className={`${darkMode ? 'text-green-200' : 'text-green-700'} text-sm`}>
                            {check}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Learning */}
                <div className={`${
                  darkMode ? 'bg-yellow-900 border-yellow-600' : 'bg-yellow-50 border-yellow-500'
                } border-l-4 p-6 rounded-lg shadow-lg`}>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">💡</span>
                    <div className="flex-1">
                      <h4 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-3 text-lg`}>
                        Key Learning Point:
                      </h4>
                      <p className={`${darkMode ? 'text-yellow-200' : 'text-yellow-700'} leading-relaxed`}>
                        {currentQuestion.keyLearning}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exam Tip */}
                {currentQuestion.examTip && (
                  <div className={`${
                    darkMode ? 'bg-orange-900 border-orange-600' : 'bg-orange-50 border-orange-500'
                  } border-l-4 p-6 rounded-lg shadow-lg`}>
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">🎯</span>
                      <div className="flex-1">
                        <h4 className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3 text-lg`}>
                          Exam Tip:
                        </h4>
                        <p className={`${darkMode ? 'text-orange-200' : 'text-orange-700'} leading-relaxed`}>
                          {currentQuestion.examTip}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className={`${
          darkMode 
            ? 'bg-gradient-to-r from-indigo-900 to-purple-900 border-indigo-600' 
            : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300'
        } rounded-xl shadow-lg p-6 border-2 mb-8`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-900'} mb-4 flex items-center`}>
            <span className="mr-3">⚡</span>
            Quick Reference Rules:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-5 rounded-lg shadow-md`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-3 text-lg`}>
                Current Ratio Rules
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                <li>• When CR {'>'} 1: Equal ↓ = <strong className="text-green-500">IMPROVE</strong></li>
                <li>• When CR {'>'} 1: Equal ↑ = <strong className="text-red-500">REDUCE</strong></li>
                <li>• Healthy ratio: <strong>2:1 or higher</strong></li>
                <li>• Quick Ratio: <strong>1:1 or higher</strong></li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-5 rounded-lg shadow-md`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-3 text-lg`}>
                Debt-Equity Rules
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                <li>• <strong>Only long-term debt counts</strong></li>
                <li>• Current Liabilities = <strong className="text-red-500">NOT</strong> part of "Debt"</li>
                <li>• Safe ratio: <strong>Below 2:1</strong></li>
                <li>• Lower ratio = Less risky</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-5 rounded-lg shadow-md`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-3 text-lg`}>
                Stock Turnover Rules
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                <li>• <strong>Always use COGS</strong>, not Sales</li>
                <li>• Higher turnover = More efficient</li>
                <li>• Avg Stock = <strong>(Opening + Closing) / 2</strong></li>
                <li>• Formula: COGS / Avg Stock</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-5 rounded-lg shadow-md`}>
              <h4 className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} mb-3 text-lg`}>
                GP on Cost vs Sales
              </h4>
              <ul className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                <li>• <strong>ON Cost:</strong> Sales = Cost × 1.25 (if 25%)</li>
                <li>• <strong>ON Sales:</strong> Cost = Sales × 0.75 (if 25%)</li>
                <li>• Different formulas - <strong>read carefully!</strong></li>
                <li>• Mental trick: 1.25 = 5/4, so × 4 ÷ 5</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg p-6 text-center`}>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
            🎓 Master these ratios for your Accounting for Managers exam!
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Practice each question multiple times. Focus on mental math tricks - no calculator needed! 🧮
          </p>
        </div>
      </div>
    </div>
  );
}
