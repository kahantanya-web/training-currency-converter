# Spec-Kit Setup Guide

This guide walks you through installing and using GitHub's Spec-Kit for spec-driven development in this project.

## What is Spec-Kit?

Spec-Kit is GitHub's spec-driven development toolkit that helps you:

- Define project principles and standards
- Create detailed specifications before coding
- Generate implementation plans and tasks
- Maintain consistency across features
- Leverage AI assistants (GitHub Copilot, Claude, etc.) with structured prompts

## Prerequisites

- **Python 3.8+** installed
- **Node.js 18+** and npm (for this project)
- **Git** version control
- **GitHub Copilot** (recommended) or other AI assistant
- **VS Code** (recommended for best experience)

## Installation Steps

### Step 1: Install UV (Python Package Manager)

UV is a fast Python package installer and resolver required for Spec-Kit.

**Option A: Using pip (Windows/Mac/Linux)**

```bash
pip install uv
```

**Option B: Using standalone installer (Windows)**

```powershell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

**Option C: Using standalone installer (Mac/Linux)**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Verify installation:

```bash
uv --version
```

### Step 2: Install Specify CLI

Install the Specify CLI tool from the spec-kit repository:

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git
```

**Important for Windows users**: Add the UV tools directory to your PATH:

```powershell
$env:PATH = "C:\Users\YOUR_USERNAME\.local\bin;$env:PATH"
```

Or for permanent PATH update:

```powershell
uv tool update-shell
```

Verify installation:

```bash
specify check
```

### Step 3: Initialize Spec-Kit in Your Project

Navigate to your project directory and initialize spec-kit:

```bash
cd /path/to/your/project
uvx --from git+https://github.com/github/spec-kit.git specify init PROJECT_NAME
```

**For this project:**

```bash
cd C:\projects\Training\training-currency-converter
uvx --from git+https://github.com/github/spec-kit.git specify init training-currency-converter
```

During initialization, you'll be prompted to:

1. **Choose your AI assistant**: Select `copilot` (GitHub Copilot) - recommended
2. **Choose script type**: Select `ps` (PowerShell for Windows) or `sh` (bash for Mac/Linux)

The initialization will:

- Download the latest spec-kit template
- Create `.github/prompts/` with slash command templates
- Create `.specify/` with scripts and templates
- Create `.vscode/` with VS Code settings
- Detect existing git repository

### Step 4: Move Spec-Kit Configuration to Root (If Needed)

If the initialization created a subdirectory, move the configuration to root:

```powershell
# Windows PowerShell
Copy-Item -Path ".\PROJECT_NAME\.github" -Destination ".\" -Recurse -Force
Copy-Item -Path ".\PROJECT_NAME\.specify" -Destination ".\" -Recurse -Force
Copy-Item -Path ".\PROJECT_NAME\.vscode" -Destination ".\" -Recurse -Force
Remove-Item -Path ".\PROJECT_NAME" -Recurse -Force
```

```bash
# Mac/Linux
cp -r ./PROJECT_NAME/.github ./
cp -r ./PROJECT_NAME/.specify ./
cp -r ./PROJECT_NAME/.vscode ./
rm -rf ./PROJECT_NAME
```

### Step 5: Update .gitignore for Security

Add these lines to your `.gitignore` to prevent credential leakage:

```gitignore
# spec-kit (may contain credentials/tokens)
.github/copilot-instructions.md
.specify/memory/
```

### Step 6: Verify Installation

Check that all directories are in place:

```bash
ls -la .github/prompts/    # Should show 8 prompt files
ls -la .specify/           # Should show scripts, templates, memory dirs
```

**Expected structure:**

```
your-project/
├── .github/
│   └── prompts/
│       ├── speckit.analyze.prompt.md
│       ├── speckit.checklist.prompt.md
│       ├── speckit.clarify.prompt.md
│       ├── speckit.constitution.prompt.md
│       ├── speckit.implement.prompt.md
│       ├── speckit.plan.prompt.md
│       ├── speckit.specify.prompt.md
│       └── speckit.tasks.prompt.md
├── .specify/
│   ├── memory/
│   ├── scripts/
│   └── templates/
├── .vscode/
└── specs/              # Your specifications go here
```

## Using Spec-Kit

### Available Slash Commands

Once installed, use these slash commands in GitHub Copilot (VS Code):

#### Core Workflow Commands

1. **`/speckit.constitution`** - Establish project principles

   - Define code quality standards
   - Set testing requirements
   - Establish UX consistency rules
   - Define performance requirements

   Example:

   ```
   /speckit.constitution Create principles focused on code quality,
   testing standards, user experience consistency, and performance requirements
   ```

2. **`/speckit.specify`** - Create baseline specification

   - Document requirements
   - Define user stories
   - Establish acceptance criteria

   Example (detailed prompt recommended):

   ```
   /speckit.specify Add a "Favorite Currencies" feature:
   - Users can mark currencies as favorites with a star icon
   - Favorite icon (star) should appear as prefix on the left side of the currency selector input
   - When currency is favorite: star is filled (solid), background is highlighted
   - All UI elements must be properly aligned without overlapping or obscuring content
   - Ensure responsive layout on mobile and desktop
   - Favorites persist in localStorage (key: tcc.favorites)
   - Favorites must use client-side hydration (load localStorage in useEffect) to prevent React hydration errors
   - Favorites appear at the top of currency selectors
   - Maximum 5 favorites allowed
   - UI shows add/remove favorite controls
   - Include unit tests for favorites logic
   - Follow constitution: 80% coverage, WCAG 2.1 AA, performance targets
   - Use appearance-none CSS for custom dropdown arrows to prevent double arrows
   - Always display both currency code AND name in dropdowns (e.g., "USD - US Dollar")
   ```

3. **`/speckit.plan`** - Create implementation plan

   - Choose tech stack
   - Plan architecture
   - Define file structure

   Example:

   ```
   /speckit.plan specs/favorite-currencies.spec.md
   ```

4. **`/speckit.tasks`** - Generate actionable tasks

   - Break down into implementable tasks
   - Define dependencies
   - Estimate time

   Example:

   ```
   /speckit.tasks specs/favorite-currencies.spec.md
   ```

5. **`/speckit.implement`** - Execute implementation

   - Generate code
   - Follow the plan and tasks
   - Maintain consistency

   Example:

   ```
   /speckit.implement specs/favorite-currencies.tasks.md
   ```

#### Optional Enhancement Commands

6. **`/speckit.clarify`** - Ask structured questions

   - De-risk ambiguous areas
   - Gather missing information
   - Run before `/speckit.plan`

7. **`/speckit.analyze`** - Cross-artifact consistency report

   - Check alignment between spec, plan, tasks
   - Run after `/speckit.tasks`, before `/speckit.implement`

8. **`/speckit.checklist`** - Generate quality checklists
   - Validate completeness
   - Check clarity and consistency
   - Run after `/speckit.plan`

### Recommended Workflow

#### 1. Define Project Constitution (One-time)

```
/speckit.constitution Create principles for code quality, testing, UX, and performance
```

Output: `.speckit.constitution` file at project root

#### 2. For Each New Feature

**Step A: Create Specification**

```
/speckit.specify Add [feature description]
```

Output: `specs/feature-name.spec.md`

**Step B: (Optional) Clarify Ambiguities**

```
/speckit.clarify specs/feature-name.spec.md
```

**Step C: Create Implementation Plan**

```
/speckit.plan specs/feature-name.spec.md
```

Output: `specs/feature-name.plan.md`

**Step D: (Optional) Validate with Checklist**

```
/speckit.checklist specs/feature-name.plan.md
```

**Step E: Generate Tasks**

```
/speckit.tasks specs/feature-name.spec.md
```

Output: `specs/feature-name.tasks.md`

**Step F: (Optional) Analyze Consistency**

```
/speckit.analyze specs/feature-name.spec.md
```

**Step G: Implement**

```
/speckit.implement specs/feature-name.tasks.md
```

**Step H: Test & Document**

- Run tests: `npm test`
- Update documentation
- Update CHANGELOG.md

## Example: Favorite Currencies Feature

This project already has an example feature specification:

1. **Constitution**: `.speckit.constitution`

   - Code quality principles
   - Testing standards (80% coverage)
   - Accessibility requirements (WCAG 2.1 AA)
   - Performance targets (Core Web Vitals)

2. **Specification**: `specs/favorite-currencies.spec.md`

   - Functional requirements
   - Technical design
   - User stories with acceptance criteria
   - Test cases

3. **Tasks**: `specs/favorite-currencies.tasks.md`
   - 19 actionable tasks
   - 4 implementation phases
   - Dependencies and time estimates
   - Success metrics

## Tips for Success

### 1. Start with Constitution

Always create a constitution first to establish guardrails for all future work.

### 2. Be Specific in Prompts

Instead of:

```
/speckit.specify Add favorites
```

Use:

```
/speckit.specify Add a "Favorite Currencies" feature:
- Users can mark currencies as favorites
- Favorites appear at the top of currency selects
- Maximum 5 favorites
- Favorites persist in localStorage
```

### 3. Review AI-Generated Content

Always review and edit AI-generated specs, plans, and tasks. The AI is a powerful assistant, but you're the expert on your project.

### 4. Keep Specs Up-to-Date

When requirements change, update the spec files first, then regenerate plans and tasks.

### 5. Use Version Control

Commit your spec files to git:

```bash
git add specs/ .speckit.constitution
git commit -m "Add favorite currencies specification"
```

### 6. Iterate Incrementally

Don't try to spec out your entire project at once. Start with one feature, implement it, learn, then move to the next.

## Troubleshooting

### Command Not Found: `specify`

**Issue**: Shell can't find the specify command
**Solution**: Add UV tools to your PATH:

Windows PowerShell:

```powershell
$env:PATH = "C:\Users\YOUR_USERNAME\.local\bin;$env:PATH"
# Or permanently:
uv tool update-shell
```

Mac/Linux:

```bash
export PATH="$HOME/.local/bin:$PATH"
# Add to ~/.bashrc or ~/.zshrc for permanent
```

### Slash Commands Not Working in VS Code

**Issue**: `/speckit.*` commands don't appear in GitHub Copilot
**Solution**:

1. Ensure `.github/prompts/` exists in your project root
2. Restart VS Code
3. Verify GitHub Copilot is enabled and signed in
4. Check that prompt files have `.prompt.md` extension

### LocalStorage Errors

**Issue**: "localStorage is not defined" or quota exceeded
**Solution**: Check `utils/favorites.ts` implementation includes proper error handling

### UV Installation Fails

**Issue**: UV won't install or UV commands fail
**Solution**:

1. Update pip: `python -m pip install --upgrade pip`
2. Try alternative installation method (standalone installer)
3. Check Python version: `python --version` (need 3.8+)

### Permission Errors on Windows

**Issue**: Scripts can't execute due to PowerShell execution policy
**Solution**:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Resources

- **Spec-Kit Repository**: https://github.com/github/spec-kit
- **UV Documentation**: https://docs.astral.sh/uv/
- **GitHub Copilot**: https://github.com/features/copilot
- **Project Constitution**: `.speckit.constitution`
- **Example Specification**: `specs/favorite-currencies.spec.md`
- **Example Tasks**: `specs/favorite-currencies.tasks.md`

## Project-Specific Notes

### This Currency Converter Project

**Tech Stack:**

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Jest + Testing Library

**Constitution Highlights:**

- 80% minimum code coverage
- WCAG 2.1 AA accessibility
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Bundle size: <200KB gzipped

**Existing Features:**

- Real-time currency conversion (10 currencies)
- Conversion history
- URL persistence
- Responsive design

**Next Feature to Implement:**

- Favorite Currencies (spec and tasks already created)

## Getting Help

1. Check the official spec-kit repository issues
2. Review the example specs in this project
3. Consult the constitution for standards
4. Review the VISUAL_GUIDE.md for UI components
5. Check README.md for project setup

## Version Information

- **Spec-Kit Version**: Latest from main branch
- **UV Version**: 0.9.3+
- **Specify CLI Version**: 0.0.20+
- **Last Updated**: October 2025

---

**Ready to get started?** Open VS Code, enable GitHub Copilot, and try:

```
/speckit.constitution
```
