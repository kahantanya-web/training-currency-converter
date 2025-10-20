# Screenshots - Footer Copyright Update

These screenshots demonstrate the copyright notice addition to the Currency Converter application footer.

## Files

### desktop.png
- **Resolution**: 1920x1080 (Desktop view)
- **Shows**: The footer section with the copyright text "© 2025 Godel Technologies. All rights reserved." displayed at the bottom of the page
- **Verification**: Copyright text is centered and uses matching typography with the existing footer text

### mobile.png
- **Resolution**: 375x812 (Mobile view - iPhone X/11/12/13 size)
- **Shows**: The footer section with the copyright text displayed properly on mobile screens
- **Verification**: Copyright text remains centered and readable on mobile devices

## What Changed

Added the following line to the PageFooter component:
```jsx
<p className="mt-2">© 2025 Godel Technologies. All rights reserved.</p>
```

The copyright notice appears:
- Below the "Exchange rates are updated hourly" message
- Above any "Last updated" timestamp if present
- Using the same styling (text-center, text-gray-600, text-sm) as the rest of the footer
- With appropriate spacing (mt-2) for visual separation

## Acceptance Criteria Met

✅ Footer displays exact text: `© 2025 Godel Technologies. All rights reserved.`
✅ Change visible at desktop resolution (1920x1080)
✅ Change visible at mobile resolution (375x812)
✅ Styling matches existing footer typography and spacing
