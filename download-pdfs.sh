#!/bin/bash
# ============================================================
# Mandurah Swimming Club - PDF Document Download Script
# Run this locally: chmod +x download-pdfs.sh && ./download-pdfs.sh
# Requires: curl
# ============================================================

set -e
BASE="https://www.mandurahswimmingclub.com.au/_files/ugd"

echo "=== Mandurah Swimming Club - Downloading All PDF Documents ==="
echo ""

mkdir -p pdfs/{policies,governance,external,results}

download() {
  local dir="$1"
  local name="$2"
  local url="$3"
  echo "  Downloading: $name"
  curl -sL -o "pdfs/$dir/$name" "$url"
}

# ── MSC POLICIES ──
echo "[1/4] MSC Policies..."
download "policies" "01-pool-deck-behaviour-parents.pdf" "$BASE/c9cf8b_3824b8064ebd4b20aa6dde288a93a952.pdf"
download "policies" "02-pool-deck-behaviour-coaches.pdf" "$BASE/c9cf8b_ce741cfe773a4a44841fe8f778d9b4f3.pdf"
download "policies" "03-coaching-swim-meet.pdf" "$BASE/c9cf8b_8e0dc1391d074f0788415c06720d5cd4.pdf"
download "policies" "04-code-of-conduct-admin-to.pdf" "$BASE/c9cf8b_a31b5504b35445c4bbdfedc9b8ed8ec9.pdf"
download "policies" "05-code-of-conduct.pdf" "$BASE/c9cf8b_f31f16678108404aa99a037dfdfbb314.pdf"
download "policies" "06-fees.pdf" "$BASE/c9cf8b_99e51d3a9e7441b9aed50b738f6f5c40.pdf"
download "policies" "07-discipline-procedure.pdf" "$BASE/c9cf8b_322d7ecfa0f34f34848ac4a11a49db86.pdf"
download "policies" "08-timekeeping.pdf" "$BASE/c9cf8b_10d5204b954b406e946036af889f2c79.pdf"
download "policies" "09-wwcc-coaching-qualifications.pdf" "$BASE/c9cf8b_bbc7a32075f8477b9a0d20d873b93bd3.pdf"
download "policies" "10-club-captain-selection.pdf" "$BASE/c9cf8b_d523cf976dd040eabfb4da9a2b1602b2.pdf"
download "policies" "11-one-club-one-family.pdf" "$BASE/c9cf8b_c759836cda684b56a83a3396ba942b25.pdf"
download "policies" "12-national-team.pdf" "$BASE/c9cf8b_84e2aa2b6b8241c9876f6ed552c02261.pdf"
download "policies" "13-sun-protection.pdf" "$BASE/c9cf8b_7b1e9d9ac3ae4fe0a9bc8c23d7119471.pdf"
download "policies" "14-club-records.pdf" "$BASE/c9cf8b_6b13d54faac642f7aca50d0fb39ff79e.pdf"

# ── GOVERNANCE ──
echo "[2/4] Governance..."
download "governance" "strategic-plan.pdf" "$BASE/c9cf8b_5faf57363f8a4a77b0cbaa9d1de4f6c8.pdf"
download "governance" "club-constitution.pdf" "$BASE/c9cf8b_9cf9bb7f4ac64846b72607dccd623903.pdf"

# ── EXTERNAL / SWA POLICIES ──
echo "[3/4] External policies..."
download "external" "swa-photography-policy.pdf" "$BASE/c9cf8b_c88e067e83a14e92923d3fe2c3a7ec0a.pdf"
download "external" "swa-healthy-club-policy.pdf" "$BASE/c9cf8b_863b03269e7c43f591ab8fea0a9e1882.pdf"
download "external" "marc-lightning-policy.pdf" "$BASE/c9cf8b_d6486eb178704345b517524d4de9f81b.pdf"
download "external" "ftgp-fact-sheet.pdf" "$BASE/c9cf8b_27ebc1acd12b41cc8027052e78b9153a.pdf"
download "external" "healthy-recipes.pdf" "$BASE/c9cf8b_c7800983073d42e581ea40be4b25c924.pdf"

# Swimming Australia policies (external URLs)
echo "  Downloading: SA Member Protection Policy"
curl -sL -o "pdfs/external/sa-member-protection-policy.pdf" "https://swimmingausprd.wpengine.com/wp-content/uploads/NIF-Member-Protection-Policy-2023-SIA-Approved.pdf"
echo "  Downloading: SA Safeguarding Children Policy"
curl -sL -o "pdfs/external/sa-safeguarding-children-policy.pdf" "https://swimmingausprd.wpengine.com/wp-content/uploads/NIF-Safeguarding-Children-and-Young-People-Policy-2023-SIA-Approved.pdf"

# ── RESULTS ──
echo "[4/4] Results..."
download "results" "time-trial-results-lc-17oct2025.pdf" "$BASE/c9cf8b_17892be2b60c482daa3890ac4f909a12.pdf"

echo ""
echo "=== DOWNLOAD COMPLETE ==="
TOTAL=$(find pdfs -type f | wc -l)
SIZE=$(du -sh pdfs | cut -f1)
echo "  Total files: $TOTAL"
echo "  Total size: $SIZE"
echo "  Location: ./pdfs/"
