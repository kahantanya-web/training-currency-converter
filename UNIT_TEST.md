# Unit Test Assignment: ConversionHistory Component

> **Objective**: Create comprehensive unit tests for the `ConversionHistory` component

---

## 📁 Files

| Type                    | Path                                    |
| ----------------------- | --------------------------------------- |
| **Component to Test**   | `components/ConversionHistory.tsx`      |
| **Test File to Create** | `components/ConversionHistory.test.tsx` |

---

## 🧪 Testing Stack

```javascript
Library:    @testing-library/react
Assertion:  @testing-library/jest-dom
Runner:     Jest (already configured in the project)
```

---

## 📋 Project Testing Rules

### Import Pattern

- ✅ Follow existing test structure from `AmountInput.test.tsx` or `ConverterForm.test.tsx`

### Test Organization

- ✅ Use `describe` blocks to group related tests
- ✅ Create `jest.fn()` mocks and clear them in `beforeEach`

### Coverage Target

- ✅ **100%** statements
- ✅ **100%** branches
- ✅ **100%** functions
- ✅ **100%** lines

### Query Guidelines

| Scenario                     | Method                 |
| ---------------------------- | ---------------------- |
| Elements that **must** exist | `screen.getByText()`   |
| Conditional elements         | `screen.queryByText()` |

### User Interactions

- Use `fireEvent.click()` from `@testing-library/react`

### Common Assertions

```javascript
.toBeInTheDocument()
.toHaveBeenCalledWith()
.not.toBeInTheDocument()
```

---

## ✅ What to Test

### 1. **Conditional Rendering**

- [ ] Clear button visibility
- [ ] Empty state display
- [ ] History list visibility

### 2. **Button Interactions & Callbacks**

- [ ] `onToggle` callback
- [ ] `onClear` callback
- [ ] `onLoadConversion` callback

### 3. **Dynamic Content**

- [ ] Toggle button text based on `showHistory` prop
- [ ] History count display

### 4. **Conversion Data Rendering**

- [ ] Amount display
- [ ] Currency codes
- [ ] Exchange rate
- [ ] Timestamp formatting

### 5. **Edge Cases**

- [ ] Empty history array
- [ ] Multiple conversion items
- [ ] Different timestamp formats

---

## 🎯 Success Criteria

### ✨ All Tests Pass

```bash
npm test -- ConversionHistory
```

### 📊 Coverage Report

- Coverage shows **100%** for `ConversionHistory.tsx`
- Run: `npm test -- --coverage ConversionHistory`

### 🎨 Code Style

- Follow the same code style as existing test files in the project
- Consistent naming conventions
- Clear test descriptions

---

## 💡 Tips

1. **Start Simple**: Begin with basic rendering tests
2. **Mock Props**: Create comprehensive mock data for different scenarios
3. **Test User Flow**: Think about how users interact with the component
4. **Check Edge Cases**: Don't forget empty states and boundary conditions
5. **Review Existing Tests**: Use `AmountInput.test.tsx` as a reference

---

## 📚 Reference Files

```
components/
├── AmountInput.test.tsx      ← Reference for test structure
├── ConverterForm.test.tsx    ← Reference for complex interactions
└── ConversionHistory.test.tsx ← Your test file
```

---

**Good luck! 🚀**
