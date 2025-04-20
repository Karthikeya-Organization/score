const fs = require('fs');

// Read Jest test results
let results;
try {
  results = JSON.parse(fs.readFileSync('test-results.json', 'utf8'));
} catch (error) {
  console.error('Error reading test results:', error.message);
  results = { numTotalTests: 0, numPassedTests: 0 };
}

// Count passing tests
const passingTests = results.numPassedTests || 0;
const totalTests = results.numTotalTests || 0;
const score = passingTests;

// Output score for GitHub Classroom
const output = {
  tests: [
    {
      name: 'Jest Tests',
      score: score,
      max_score: totalTests,
      output: `Passed ${score} out of ${totalTests} test cases`
    }
  ]
};

// Write score to file for autograding action
fs.writeFileSync('results.json', JSON.stringify(output, null, 2));

// Write summary to GitHub Actions log
fs.writeFileSync(
  process.env.GITHUB_STEP_SUMMARY,
  `## Autograding Results\nTotal Score: ${score}/${totalTests}\n`
);

// Log score for debugging
console.log(`Score: ${score}/${totalTests}`);