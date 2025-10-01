# Project Command

## Overview
Analyze large triage tickets and create comprehensive Linear projects with detailed milestones, then split the original ticket into smaller, classified triage tickets for further analysis.

## Usage
- Process a specific large triage ticket: `/project TICKET-123`
- Process next large ticket in Triage: `/project`

## Steps
1. **Retrieve and Analyze Large Ticket**
   - [ ] Connect to Linear workspace
   - [ ] Get ticket from Triage column (or specified ticket number)
   - [ ] Extract ticket details: title, description, labels, assignee, priority
   - [ ] Assess ticket scope and complexity (>3 days work, multiple features)
   - [ ] Research related technical context and dependencies
   - [ ] Identify all distinct components and features

2. **Create Linear Project**
   - [ ] Generate comprehensive project name based on ticket title
   - [ ] Create detailed project description with full context
   - [ ] Add concise summary (max 255 characters)
   - [ ] Set appropriate project state (Planning, In Progress, etc.)
   - [ ] Assign project lead if specified in original ticket
   - [ ] Add relevant project labels for categorization

3. **Define Project Milestones**
   - [ ] Analyze ticket requirements and break into logical phases
   - [ ] Create realistic milestones with target dates
   - [ ] Define dependencies between milestones
   - [ ] Set priority order for milestone completion
   - [ ] Estimate effort and complexity for each milestone

4. **Split Into Smaller Triage Tickets**
   - [ ] Break down original ticket into distinct, manageable components
   - [ ] Create new tickets for each component (keep in Triage column)
   - [ ] Preserve original ticket content verbatim in each new ticket
   - [ ] Add classification labels (frontend, backend, database, etc.)
   - [ ] Set appropriate priority levels for each sub-ticket
   - [ ] Link all sub-tickets to the created project
   - [ ] Maintain original ticket context and requirements

5. **Documentation and Cleanup**
   - [ ] Add comprehensive analysis summary as Linear comment on original ticket
   - [ ] Document project creation and ticket splitting process
   - [ ] List all created sub-tickets with their classifications
   - [ ] Archive or close original ticket with reference to new project
   - [ ] Update project with initial progress notes

## Project Creation Requirements
When creating a Linear project, include:
- **Project Name**: Clear, descriptive title derived from original ticket
- **Description**: Complete markdown description with:
  - Original ticket context and requirements
  - Technical approach and architecture decisions
  - Success criteria and deliverables
  - Risk assessment and mitigation strategies
- **Summary**: Concise plaintext summary (max 255 characters)
- **State**: Appropriate project state (Planning, In Progress, etc.)
- **Labels**: Relevant categorization tags
- **Target Date**: Realistic completion timeline based on complexity

## Milestone Definition
Create milestones that represent:
- **Logical Phases**: Distinct phases of development
- **Dependencies**: Clear prerequisite relationships
- **Deliverables**: Specific outputs for each milestone
- **Timeline**: Realistic target dates based on complexity
- **Success Criteria**: Measurable completion criteria

## Ticket Splitting Strategy
When splitting tickets, ensure each new ticket:
- **Preserves Original Content**: Maintains verbatim original ticket description
- **Single Responsibility**: Focuses on one distinct component/feature
- **Appropriate Size**: Sized for 1-3 days of work maximum
- **Clear Classification**: Labeled with appropriate category (frontend, backend, etc.)
- **Project Association**: Linked to the created Linear project
- **Priority Setting**: Appropriate priority based on dependencies and importance
- **Triage Status**: Remains in Triage column for further analysis

## Classification Labels
Use consistent labels for sub-tickets:
- **frontend**: UI/UX components, React components, styling
- **backend**: API endpoints, server logic, business rules
- **database**: Schema changes, migrations, queries
- **integration**: Third-party services, external APIs
- **testing**: Test coverage, QA processes
- **documentation**: Technical docs, user guides
- **infrastructure**: Deployment, CI/CD, monitoring
- **security**: Authentication, authorization, data protection

## Analysis Criteria
When analyzing large tickets, consider:
- **Scope Assessment**: Is ticket >3 days work or has multiple distinct features?
- **Component Identification**: What are the distinct, separable components?
- **Dependency Mapping**: What are the prerequisite relationships?
- **Technical Complexity**: What are the technical challenges and approaches?
- **Resource Requirements**: What skills and time are needed?

## Checklist
- [ ] Large triage ticket retrieved and analyzed
- [ ] Ticket scope confirmed as requiring project-level management
- [ ] Comprehensive Linear project created with full description
- [ ] Project milestones defined with realistic timelines
- [ ] Original ticket split into smaller, classified sub-tickets
- [ ] All sub-tickets linked to created project
- [ ] Sub-tickets remain in Triage column for further analysis
- [ ] Original ticket archived with project reference
- [ ] Complete documentation added to Linear comments
- [ ] Project ready for milestone-based development
