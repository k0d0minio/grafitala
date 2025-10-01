# Process Ticket Command

## Overview
Analyze tickets from the Linear Triage column, conduct research, and either add clarifying comments or propose splitting into smaller actionable tickets.

## Usage
- Process a specific ticket: `/process-ticket TICKET-123`
- Process next ticket in Triage: `/process-ticket`

## Steps
1. **Retrieve Ticket**
   - [ ] Connect to Linear workspace
   - [ ] Get ticket from Triage column (or specified ticket number)
   - [ ] Extract ticket details: title, description, labels, assignee, priority

2. **Analyze Ticket**
   - [ ] Review ticket scope and complexity
   - [ ] Identify unclear requirements or missing information
   - [ ] Assess if ticket is too large or complex for single implementation
   - [ ] Research related technical context and dependencies

3. **Take Action**
   - [ ] **Option A: Add Clarifying Comments** (Ticket stays in Triage)
     - [ ] Post research findings and context
     - [ ] Ask specific questions about requirements
     - [ ] Suggest implementation approaches
     - [ ] Leave ticket in Triage column for further refinement
   - [ ] **Option B: Split Into Actionable Tickets** (Move to Ready for Dev)
     - [ ] Create detailed breakdown of sub-tasks
     - [ ] Define clear acceptance criteria for each sub-task
     - [ ] Add implementation details and technical specifications
     - [ ] Set priority and dependency order
     - [ ] Create new tickets with comprehensive descriptions
     - [ ] Move all new tickets to "Ready for Dev" column
     - [ ] Archive or close original ticket

4. **Documentation**
   - [ ] Add comprehensive analysis summary as Linear comment
   - [ ] Document research findings and recommendations in ticket comments
   - [ ] List any new tickets created from splitting in original ticket
   - [ ] Note follow-up actions required in Linear comments

## Analysis Criteria
When analyzing tickets, consider:
- **Clarity**: Are requirements specific and actionable?
- **Scope**: Is the ticket appropriately sized (1-3 days work)?
- **Dependencies**: Are external dependencies clearly identified?
- **Acceptance Criteria**: Are success conditions well-defined?
- **Technical Feasibility**: Is the approach technically sound?

## Decision Guidelines
- **Add Comments**: When ticket needs clarification, missing context, or requires stakeholder input
- **Split Tickets**: When ticket is too large (>3 days), has multiple distinct features, or can be broken into logical sub-components

## Split Ticket Requirements
When splitting tickets, each new ticket must include:
- **Clear Title**: Specific, actionable description
- **Detailed Description**: Complete context and requirements
- **Implementation Details**: Technical approach and specifications
- **Acceptance Criteria**: Specific, testable success conditions
- **Dependencies**: Any prerequisites or related tickets
- **Priority**: Relative importance and urgency
- **Labels**: Appropriate categorization tags

## Checklist
- [ ] Ticket retrieved from Triage column
- [ ] Comprehensive analysis completed
- [ ] Research conducted on technical context
- [ ] Decision made: Comments added OR tickets split
- [ ] If comments added: Ticket remains in Triage
- [ ] If tickets split: All new tickets moved to "Ready for Dev"
- [ ] Analysis documented in Linear comments
- [ ] Ticket(s) ready for development or further refinement
