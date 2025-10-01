# Bug Fix Command

## Overview
Systematic bug fixing using the refresh pattern to prevent hallucination.

## Steps
1. **Codebase Scan**
   - [ ] Scan entire related codebase for context
   - [ ] Check all potentially affected files
   - [ ] Look for similar patterns with same issue
   - [ ] Document what files were checked and why

2. **Root Cause Analysis**
   - [ ] Understand the actual problem (not just symptoms)
   - [ ] Trace error back to source
   - [ ] Identify all contributing factors
   - [ ] Verify fix won't break anything else

3. **Minimal Fix Implementation**
   - [ ] Apply smallest possible change
   - [ ] Focus only on the specific issue
   - [ ] Avoid refactoring unrelated code
   - [ ] Test fix thoroughly

4. **Verification**
   - [ ] Run existing tests to ensure no regressions
   - [ ] Test the specific bug scenario
   - [ ] Verify similar patterns still work
   - [ ] Document the fix and reasoning

## Checklist
- [ ] Entire codebase scanned and understood
- [ ] Root cause identified (not just symptoms)
- [ ] Minimal fix applied
- [ ] All tests still pass
- [ ] Bug scenario verified fixed
- [ ] No unintended side effects
