# Regression cases

Prepared for this change. **Not executed.** Tests, manual checks, lint and builds require explicit user authorization. Use isolated fixtures; never run destructive cases against production.

| Case | Input or setup | Expected outcome |
| --- | --- | --- |
| Numeric inputs | Blank, nonnumeric, zero or negative dimensions | Form reports invalid input |
| Triangle | Sides 1,2,3 and sides 3,4,5 | Degenerate triangle rejected; valid perimeter=12 |
| Globals | Calculate square, triangle, circle repeatedly | No accidental respuesta globals |
| Units | Square side=2 and circle radius=2 | Existing unit formats and formulas retained |
