# EML Representation Study — Results Summary

*Generated: 2026-05-10 17:57 UTC*
*Seed: 42 | Budget: 4000 total evals | Pop: 100 | Max depth: 6*

---

## 1. Symbolic Regression: Structural Characterization

| Metric | EML | exp/log baseline |
|---|---|---|
| Exact recoveries (MSE < 1e-10) | 8 / 18 | 6 / 18 |
| Success rate | 44.4% | 33.3% |
| Average node count (best found) | 14.8 | 10.6 |
| Average tree depth (best found) | 4.4 | 3.2 |
| Average productive generations | 5.1 | 15.5 |

The EML grammar produces structurally larger trees (avg 14.8 nodes
vs 10.6 for baseline). Under a shared true evaluation budget,
differences in rejection rate directly affect the number of generations each
grammar can complete.

### 1.1 Rejection Type Breakdown (New Analysis)

| Rejection Type | EML (%) | Baseline (%) | EML/Baseline Ratio |
|---|---|---|---|
| Domain (symbolic constraint violations) | 0.6 | 6.5 | 0.1× |
| Depth (structural limits exceeded) | 75.2 | 6.6 | 11.4× |
| Numeric (evaluation failures) | 10.0 | 31.5 | 0.3× |
| **Aggregate** | **85.9** | **44.6** | **1.9×** |

**Key Finding:** Depth rejection dominates under EML (75.2% vs 6.6% baseline), demonstrating that structural inflation---not domain constraints---is the primary throughput bottleneck. Domain rejection is actually lower under EML because the depth gate filters out structurally excessive candidates before they reach domain verification.

---

## 2. Depth and Node Count Effects

| Metric | EML | baseline |
|---|---|---|
| Average depth (best-found trees) | 4.4 | 3.2 |
| Average node count (best-found trees) | 14.8 | 10.6 |

Structural inflation is a direct consequence of the EML encoding rules:
- `exp(x)` → `eml(x, 1)` — adds one nesting level
- `ln(x)` → `1 − eml(0, x)` — adds two nesting levels and an extra constant

See `figures/depth_vs_error.png` and `figures/size_vs_error.png`.

---

## 3. Domain Constraint Effects

| Mode | Successful transforms | Domain errors | Invalid (baseline used) |
|---|---|---|---|
| Strict (enforce\_domain=True)  | 11 | 10 | 0 |
| Relaxed (enforce\_domain=False) | 11 | 0 | 10 |

Domain constraints are a primary shaping force on EML representations.
The strict positivity requirements for logarithm arguments directly
determine which expressions can be absorbed into the EML primitive.

---

## 4. Reproducibility

All results in this directory were generated deterministically with:

```bash
python -m experiments.run_all
```

Seed: `42`.

---

## Output Files

| File | Description |
|---|---|
| `results/domain_ablation.csv` | Per-expression transform outcomes (strict vs relaxed) |
| `results/symbolic_regression_per_target.csv` | Per-target SR results with rejection metrics (domain/depth/numeric breakdown) |
| `results/depth_vs_error.csv` | Tree depth and MSE per target × grammar |
| `results/size_vs_error.csv` | Node count and MSE per target × grammar |
| `results/success_rates.csv` | Exact recovery counts and success rates |
| `figures/rejection_vs_generations.pdf` | Scatter: aggregate rejection rate vs productive generations |
| `figures/rejection_distribution.pdf` | Boxplot: aggregate rejection rate distribution by grammar |
| `figures/rejection_composition.pdf` | Stacked bar: disaggregated rejection types (domain/depth/numeric) |
| `figures/tree_comparison.pdf` | Side-by-side tree visualization: native vs EML representation |
