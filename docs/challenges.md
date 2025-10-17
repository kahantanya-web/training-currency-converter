# Training Challenges

This repository contains multiple branches, each representing a different training challenge for working with AI-assisted development. Each branch focuses on a specific skill set needed when collaborating with AI coding assistants.

---

## 🌿 Branch Overview

### `main` - Complete Project Setup from Scratch

**Challenge #1: Building a Full-Stack Application with AI Assistance**

**Objective**: Learn to collaborate with AI to create a complete Next.js application from scratch, including proper project structure, TypeScript configuration, testing infrastructure, and production-ready code.

**AI Interaction Skills Practiced**:

- **Crafting comprehensive prompts** for complete project generation
- **Providing clear technical requirements** to AI (frameworks, languages, tools)
- **Specifying project structure** and file organization upfront
- **Communicating design requirements** (responsive design, UI/UX expectations)
- **Requesting specific patterns** (component architecture, error handling strategies)
- **Iterating on AI output** to refine code quality and structure
- **Asking for documentation** alongside code (README, CHANGELOG)

**Technical Skills Practiced**:

- Next.js App Router architecture and configuration
- TypeScript type safety and interface design
- Tailwind CSS for responsive styling
- API integration with multiple fallback sources
- Server-side implementation (Node.js)
- Error handling and graceful degradation
- Testing with Jest + React Testing Library
- Component-based architecture and reusability

**What You'll Learn**:

**AI Collaboration:**

- How to structure a comprehensive initial prompt for project creation
- How to specify technical requirements clearly to avoid ambiguity
- How to request both code AND documentation in one workflow
- How to ask AI to handle edge cases (SSL certificates, API failures)
- How to guide AI toward production-ready code quality

**Technical Implementation:**

- Complete project setup from idea to working application
- TypeScript configuration and type generation patterns
- Next.js App Router best practices
- API integration with fallback strategies
- Component breakdown and reusability principles
- Test-driven development setup
- Error handling and validation patterns
- URL persistence and state management

> 📄 **See [main.md](main.md) for the complete initial prompt used to create this project.**

---

### `customisation` - Project Customization

**Challenge #0: Customizing AI Context for the Project**

**Objective**: Configure and customize AI assistant behavior for project-specific requirements.

**Skills Practiced**:

- Setting up context for AI assistants
- Creating custom prompts for project conventions
- Using Model Context Protocol (MCP) or similar tools
- Defining project-specific instruction files
- Establishing development workflows

**What You'll Learn**:

- Different methods to add context to AI assistants
- How to create effective custom prompts
- MCP integration and usage
- Project setup for AI-assisted development
- Best practices for maintaining consistent AI output

> 📄 **See [customisation.md](customisation.md) for more details on this challenge.**

---

### `unit-test` - Unit Test Writing

**Challenge #2: Writing Unit Tests in an Application**

**Objective**: Generate custom prompts and write comprehensive unit tests for existing components.

**Skills Practiced**:

- Creating effective testing prompts
- Understanding test coverage requirements
- Working with Jest and React Testing Library
- Following testing best practices
- Generating test cases with AI assistance

**What You'll Learn**:

- How to craft prompts for test generation
- Test-driven development with AI
- Achieving 100% code coverage
- Testing patterns for React components
- Mocking strategies and edge case testing

> 📄 **See [unitTest.md](unitTest.md) for more details on this challenge.**

---

### `bug-fix` - Bug Fixing

**Challenge #3: Fixing Bugs with AI Assistance**

**Objective**: Identify and fix bugs in the application using AI-assisted debugging.

**Skills Practiced**:

- Debugging with AI assistance
- Root cause analysis
- Problem description for AI
- Code review and validation
- Testing fixes thoroughly

**What You'll Learn**:

- How to describe bugs effectively to AI
- Debugging strategies with AI assistance
- Validating fixes with tests
- Understanding error messages and stack traces
- Regression testing

> 📄 **See [bugFix.md](bugFix.md) for more details on this challenge.**

---

### `feature` - Feature Requirements Preparation

**Challenge #4: Preparing Requirements for Ticket Implementation**

**Objective**: Develop comprehensive feature requirements from incomplete information using AI to ask clarifying questions.

**Skills Practiced**:

- Requirements gathering with AI
- Asking the right questions
- Creating detailed feature specifications
- How to work with incomplete information
- Interactive requirement refinement with AI
- Template-based ticket preparation
- Handling ambiguous requirements

**What You'll Learn**:

- Requirement scoping and minimal contracts
- How to convert an ambiguous feature request into a short, developer-ready ticket

> 📄 **See [feature.md](feature.md) for a worked example and copyable prompt.**

---

### `agent-issue` - Creating GitHub Issues with AI

**Challenge #5: Using AI to Create Well-Structured GitHub Issues and Pull Requests**

**Objective**: Learn to use AI assistants (like GitHub Copilot) to create comprehensive, actionable GitHub issues with proper formatting, labels, and acceptance criteria. Then create pull requests, perform code reviews, and merge changes following best practices.

**Skills Practiced**:

- Crafting clear issue titles and descriptions
- Defining acceptance criteria and success metrics
- Specifying files to check and areas of impact
- Using labels effectively for organization
- Creating implementation checklists
- Structuring issues for AI-assisted resolution
- Creating pull requests with detailed descriptions
- Performing code reviews with AI assistance
- Merging changes and closing issues properly

**What You'll Learn**:

- How to format issues for maximum clarity and AI comprehension
- Best practices for writing actionable acceptance criteria
- Using templates to maintain consistency across issues
- Leveraging AI to generate well-structured issue descriptions
- Including sufficient context for implementers (human or AI)
- Creating comprehensive pull request descriptions
- Reviewing code changes effectively with AI
- Managing the full issue-to-merge workflow

> 📄 **See [agentIssue.md](agentIssue.md) for a worked example template.**

---

### `spec-kit` - Spec-Driven Development with GitHub's Spec-Kit

**Challenge #6: Using Spec-Kit for Structured Feature Development**

**Objective**: Master spec-driven development using GitHub's Spec-Kit toolkit to define project principles, create detailed specifications, generate implementation plans, and build features with AI-assisted workflows.

**AI Interaction Skills Practiced**:

- **Using structured slash commands** (`/speckit.*`) with GitHub Copilot
- **Establishing project constitution** with quality and performance standards
- **Creating comprehensive specifications** before writing code
- **Generating implementation plans** from specifications
- **Breaking features into actionable tasks** with dependencies
- **Maintaining consistency** across spec, plan, and implementation
- **Iterating on specifications** to clarify ambiguities
- **Leveraging AI for analysis** and validation of work artifacts

**Technical Skills Practiced**:

- Installing and configuring Spec-Kit (UV, Specify CLI)
- Managing spec-driven workflows (specify → plan → tasks → implement)
- Writing clear functional and non-functional requirements
- Defining user stories with acceptance criteria
- Creating implementation checklists and quality gates
- Version controlling specifications and plans
- Integrating specs with AI assistant context
- Validating artifact consistency and completeness

**What You'll Learn**:

**AI Collaboration:**

- How to use GitHub's Spec-Kit slash commands effectively
- How to structure specifications for maximum AI comprehension
- How to leverage constitution files to maintain quality standards
- How to use AI for clarification, analysis, and validation
- How to iterate specifications before implementation
- How to break complex features into manageable tasks with AI

**Technical Implementation:**

- Complete spec-driven development workflow from idea to code
- Setting up UV package manager and Specify CLI
- Creating project constitutions with testable guardrails
- Writing specifications with functional and technical requirements
- Generating implementation plans with tech stack decisions
- Creating actionable task lists with dependencies and estimates
- Analyzing cross-artifact consistency (spec/plan/tasks alignment)
- Implementing features following generated plans and tasks
- Maintaining quality through checklist-driven validation

> 📄 **See [specKit.md](specKit.md) for the complete setup guide and workflow.**

---

## 📚 How to Use This Repository

### For Learners

1. **Start with `customisation`**: Set up your environment and understand how to customize AI behavior
2. **Move to `main`**: Practice component implementation
3. **Try `unit-test`**: Learn testing with AI assistance
4. **Work on `bug-fix`**: Practice debugging
5. **Practice `feature`**: Master requirements gathering
6. **Try `agent-issue`**: Learn to create well-structured GitHub issues with AI
7. **Master `spec-kit`**: Practice spec-driven development with structured workflows

### Switching Between Challenges

```bash
# View all branches
git branch -a

# Switch to a specific challenge
git checkout <branch-name>

# Example: Switch to unit-test challenge
git checkout unit-test
```

---

## 🎯 Learning Objectives

By completing all challenges, you will:

- ✅ Understand how to effectively collaborate with AI coding assistants
- ✅ Master the art of prompt engineering for development tasks
- ✅ Learn to integrate AI into your development workflow
- ✅ Develop skills in TypeScript, testing, and debugging with AI
- ✅ Understand requirements gathering and documentation
- ✅ Build confidence in AI-assisted development

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Read the main README.md** for project setup
3. **Check out the `customisation` branch** to begin
4. **Follow the challenge instructions** in each branch
5. **Practice and iterate** until you master each skill

---

## 📖 Additional Resources

- [Main README](../README.md) - Project overview and setup
- [CHANGELOG](../CHANGELOG.md) - Version history
- Individual challenge documentation files in each branch

---

**Happy Learning! 🎓**

_Remember: The goal is not just to complete the challenges, but to understand how to effectively collaborate with AI assistants in real-world development scenarios._
