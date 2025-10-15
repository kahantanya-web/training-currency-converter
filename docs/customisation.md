# GitHub Copilot and VS Code: Customization and Workflow Guide

---

## 1. Adding and Managing Context

### What to do:

- Add context through:
  - Files, folders, code lines, images, and links.
  - Special commands: `@workspace`, `@file`.
  - Use `#selection` for focused work on highlighted text.
- Pull elements without screenshots using **Simple Browser** (HTML, CSS, JS).
- Start a new chat session periodically to clear old context.

### Why it matters:

- Context directly impacts the quality of Copilot’s responses.
- Proper context management reduces the risk of missing critical details.

### Best practices:

- Add context manually for maximum control.
- Explicitly specify which files are important.
- For complex tasks, use Simple Browser for visual context.

**Example prompt:**

```
@workspace #selection
Explain the logic of this function and suggest optimization.
```

---

## 2. Working with Large Files and Long Operations

### What to do:

- Split large files into blocks of ~200 lines and label them: [Block 1/5].
- Use **Continue** when generation is interrupted.
- Ask Copilot to create a to-do list at the start of the session.
- Maintain a temporary log file (`copilot_session.log`) for context recovery.

### Why it matters:

- Large files can exceed token limits.
- Logs help restore progress after interruptions.

### Best practices:

- Add clear markers between blocks.
- Ensure each block includes references to previous ones.

---

## 3. Change Management and Safe Rollback

### What to do:

- Use **Undo** in Copilot for quick rollbacks.
- Review changes with `git diff`.
- Stage verified files before committing.
- Commit after major iterations or changes.

### Why it matters:

- Undo prevents wasted time on incorrect generations.
- Git ensures version safety and traceability.

### Best practices:

- Automate commit message generation with Copilot.
- Commit after every significant change.

---

## 4. Copilot Limitations and Issues

### What to do:

- Explicitly highlight critical parts of the context.
- Verify which files are included in the context.
- Refresh sessions periodically to clear state.

### Why it matters:

- Context prioritization can be unpredictable.
- `#selection` may exclude the rest of the file from analysis.

### Best practices:

- Use `#selection` only for local tasks.
- For global changes, rely on `@workspace`.

**Workarounds Table:**
| Limitation | How to overcome |
|------------|-----------------|
| Token limit | Split into blocks |
| Unpredictable prioritization | Explicit context instructions |

---

## 5. Inline Mode and Keyboard Shortcuts

### What to do:

- Memorize key shortcuts:

| Action            | Shortcut         |
| ----------------- | ---------------- |
| Inline command    | Ctrl + I         |
| Open Copilot Chat | Shift + Ctrl + I |
| Exit inline mode  | ESC              |
| Accept suggestion | Tab              |

- Use slash commands:
  - `/explain` — explain code
  - `/refactor` — suggest improvements
  - `/test` — create tests
  - `/fix` — fix errors

### Why it matters:

- Shortcuts speed up workflow.
- Slash commands provide quick access to essential actions.

### Best practices:

- Customize commands via VS Code snippets.

---

## 6. Working with Translation

### What to do:

- Use DeepL or VS Code’s built-in translator for long texts.
- Keep prompts in one language.
- Avoid mixing languages in a single prompt.

### Why it matters:

- Mixed languages reduce generation accuracy.

### Best practices:

- For code-related tasks, Russian prompts are fine—Copilot understands them.

---

## 7. Instructions and Automation

### What to do:

- Set **custom instructions** (e.g., “Always use TypeScript”).
- Create a `/prompts` folder for reusable templates.
- Configure ToolSet (up to 128 tools per request).
- Automate GitHub tasks (issues, PRs, workflows).
- **Choose built-in Copilot Chat Modes** (Explain, Fix, Test) or create custom ones.

### Why it matters:

- Instructions enforce coding standards.
- Chat Modes accelerate repetitive tasks.

### Best practices:

- Store prompt templates in your repo.
- Create custom modes for recurring workflows.

**Example custom instruction:**

```
Always use TypeScript, avoid 'any', and add JSDoc comments.
```

---

## Additional Tips

- **Common mistakes:**
  - Overly generic prompts → poor results.
  - Mixing languages → inaccurate generation.
- **Quick links:**
  - [GitHub Copilot Docs](https://docs.github.com/en/copilot)
  - [VS Code Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
