# js-assignment-
# JavaScript Assignment (CSE 106)

# Overview

This repository contains solutions to 6 JavaScript problems based on fundamental programming concepts like loops, conditions, number theory, and basic logic building.

All programs use:

* `prompt()` for input
* `alert()` for output
* No hardcoding (dynamic inputs supported)

# Files

* `q1.js` → Digit Gatekeeper
* `q2.js` → Roll-Seed Lock
* `q3.js` → Mirror Corridor
* `q4.js` → Fare Calculator
* `q5.js` → Skipping Numbers
* `q6.js` → Contest Score Judge

#Approach & Complexity

 Q1: Digit Gatekeeper

* Loop from L to R
* Check divisibility, digit sum (prime), and no zero digit
* Time Complexity: **O(N log N)**

Q2: Roll-Seed Lock

* Apply transformation 3 times
* Check range and middle digit
* Time Complexity: **O(1)**

 Q3: Mirror Corridor

* Try all X from 0 to 100000
* Check palindrome + divisibility
* Time Complexity: **O(N × digits)**

 Q4: Fare Calculator

* Apply step-by-step fare rules
* Use `Math.floor()` and `Math.ceil()`
* Time Complexity: **O(1)**

 Q5: Skipping Numbers

* Increment m until sum ≥ N
* Skip multiples of (seed + 2)
* Time Complexity: **O(N)**

Q6: Contest Score Judge

* Calculate score using formula
* Apply conditions and grading
* Time Complexity: **O(1)**

 How to Run

1. Open `index.html` in browser
2. Enter values in prompt dialogs
3. View results via alert


# Notes

 All constraints are handled
 No hardcoded values
Clean and readable logic

 Author

Satya Prakash
