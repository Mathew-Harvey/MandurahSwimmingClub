#!/bin/bash
# ============================================================
# Mandurah Swimming Club - Image Download Script
# Run this locally: chmod +x download-images.sh && ./download-images.sh
# Requires: curl
# ============================================================

set -e
BASE="https://static.wixstatic.com/media"

echo "=== Mandurah Swimming Club - Downloading All Website Images ==="
echo ""

# Create directory structure
mkdir -p images/{global,home,about-us,coaches,captains,fuel-to-go,training-facilities,integrity,club-nights,championships,target-meets,uniform,jx-program,fees,sponsors,donate,country-pennants}

download() {
  local dir="$1"
  local name="$2"
  local url="$3"
  echo "  Downloading: $dir/$name"
  curl -sL -o "images/$dir/$name" "$url"
}

# ── GLOBAL / HEADER / FOOTER ──
echo "[1/17] Global assets..."
download "global" "club-logo-white.png" "$BASE/c9cf8b_5e1ab02332244c1fab4d38fdf8605bd7~mv2.png"
download "global" "facebook-icon.png" "$BASE/e316f544f9094143b9eac01f1f19e697.png"
download "global" "instagram-icon.png" "$BASE/9f9c321c774844b793180620472aa4f1.png"
download "global" "swimming-wa-logo.png" "$BASE/c9cf8b_6fecfd498a2e47a680dc2961930ca61f~mv2.png"
download "global" "facebook-icon-small.png" "$BASE/0fdef751204647a3bbd7eaa2827ed4f9.png"
download "global" "instagram-icon-small.png" "$BASE/01c3aff52f2a4dffa526d7a9843d46ea.png"

# ── HOME PAGE ──
echo "[2/17] Home page..."
download "home" "aerial-pool-hero.jpg" "$BASE/11062b_bf33704536824e0d8e7e5f2dfd9cd76e~mv2.jpg"
download "home" "country-pennants-banner.jpg" "$BASE/c9cf8b_3613ed9224c049098f1b187fa62f9b90~mv2.jpg"
download "home" "ftgp-gold-badge.png" "$BASE/c9cf8b_b417265955084cd8b77a47d58070cc66~mv2.png"
download "home" "badge-2.png" "$BASE/c9cf8b_698c78344d53470e914340ae9a21343d~mv2.png"
download "home" "badge-3.png" "$BASE/c9cf8b_e0aa23281e814878b8ea246ae5111c32~mv2.png"
download "home" "swimmer-image.jpg" "$BASE/c9cf8b_9ac60dbefc5741899334e546ab815e5b~mv2.jpg"
download "home" "swimming-pool-stock.jpg" "$BASE/391ebd71478f4b4087e6fe237d47fe39.jpg"

# ── ABOUT US ──
echo "[3/17] About Us..."
download "about-us" "team-photo.jpg" "$BASE/c9cf8b_d9530061f7f74f48a89dbac80544716f~mv2.jpg"

# ── COACHES ──
echo "[4/17] Coaches..."
download "coaches" "coach-sharky.png" "$BASE/c9cf8b_c7746bee784e422eb36d902316f173c5~mv2.png"
download "coaches" "coach-chelsea.png" "$BASE/c9cf8b_06378a3bb6354fb9aa60952e7f948a21~mv2.png"
download "coaches" "coach-jemma.png" "$BASE/c9cf8b_f709673266cc40c18ceec8958507e003~mv2.png"
download "coaches" "coach-aiden.png" "$BASE/c9cf8b_eb47ac12e4cd428a9637f9b4dca4737f~mv2.png"
download "coaches" "coach-kaiden.png" "$BASE/c9cf8b_bef17aec7fa84ed9a55221aa04fc8517~mv2.png"
download "coaches" "coach-charlotte.png" "$BASE/c9cf8b_8825262f1de94614a9fe7f09a6d9d076~mv2.png"
download "coaches" "coach-sofia.png" "$BASE/c9cf8b_f15e2f404b474f9da3b38971f43cd7f4~mv2.png"

# ── CAPTAINS ──
echo "[5/17] Captains..."
download "captains" "luke-mcdonough.png" "$BASE/c9cf8b_b1dfc610ebac46b8b9a386febea23915~mv2.png"
download "captains" "megan-maley.png" "$BASE/c9cf8b_875fd6bcdb844a8baf83f1400e37033e~mv2.png"
download "captains" "alexander-vreeken.png" "$BASE/c9cf8b_614e3415fca541eda73cb650ba73b972~mv2.png"
download "captains" "sadhbh-mcdonnell.png" "$BASE/c9cf8b_7c454643184847658cfcca98a5f0c862~mv2.png"

# ── FUEL TO GO & PLAY ──
echo "[6/17] Fuel to Go & Play..."
download "fuel-to-go" "ftgp-main.jpg" "$BASE/c9cf8b_ddc15f488a934106a29bb0449ef93626~mv2.jpg"
download "fuel-to-go" "ftgp-banner.jpg" "$BASE/c9cf8b_74887610de91420ea2903dc6e4bc6efa~mv2.jpg"
download "fuel-to-go" "ftgp-gold-badge.png" "$BASE/c9cf8b_b417265955084cd8b77a47d58070cc66~mv2.png"
download "fuel-to-go" "icon-1.png" "$BASE/c9cf8b_aeec8b88726944fe9cb61ff69f2c82e6~mv2.png"
download "fuel-to-go" "icon-2.png" "$BASE/c9cf8b_e8872ffac71f4e25a98417fbeb173bbc~mv2.png"
download "fuel-to-go" "icon-3.png" "$BASE/c9cf8b_f503ae773a554074ac9db0f6fc167bce~mv2.png"
download "fuel-to-go" "sporting-clubs-icon.png" "$BASE/c9cf8b_cf4f6911d06a43e48198494952754f02~mv2.png"
download "fuel-to-go" "healthway-logo.jpg" "$BASE/c9cf8b_ed5610d103084d799707d5027fb71642~mv2.jpg"

# ── TRAINING FACILITIES ──
echo "[7/17] Training Facilities..."
download "training-facilities" "indoor-pool.jpg" "$BASE/c9cf8b_8b75bd13dd364e0bafe0427846daa75c~mv2.jpg"
download "training-facilities" "outdoor-pool.jpg" "$BASE/c9cf8b_cb6e24b9ea764b12a3ea6016d4e548a5~mv2.jpg"

# ── INTEGRITY ──
echo "[8/17] Integrity..."
download "integrity" "header-image.jpeg" "$BASE/c9cf8b_a0a97be70e3c4e7a96c4b3261e3d6e99~mv2.jpeg"

# ── CLUB NIGHTS ──
echo "[9/17] Club Nights..."
download "club-nights" "lily-and-megan.jpg" "$BASE/c9cf8b_25edecadf7a0426c9b4abe1c2efe76a3~mv2.jpg"
download "club-nights" "time-trials.jpg" "$BASE/c9cf8b_1dc4622a120f4ac891f1fa300c1f498b~mv2.jpg"

# ── CHAMPIONSHIPS ──
echo "[10/17] Championships..."
download "championships" "team.jpg" "$BASE/c9cf8b_a72d66ee92ee498cb551af84006b3ecb~mv2.jpg"

# ── TARGET MEETS ──
echo "[11/17] Target Meets..."
download "target-meets" "junior-lc-states.jpg" "$BASE/c9cf8b_5a770f922dcf48b0892c517c6e2380fb~mv2.jpg"

# ── UNIFORM ──
echo "[12/17] Uniform..."
download "uniform" "polo-1.jpg" "$BASE/c9cf8b_cf12ee60b1074265aabcc77d32ca4a02~mv2.jpg"
download "uniform" "polo-2.jpg" "$BASE/c9cf8b_a3df6e0909854b7a8b84d9e8ce3a9c76~mv2.jpg"
download "uniform" "cotton-tee-1.jpg" "$BASE/c9cf8b_525a10296a794ea6a134efba9b86a30b~mv2.jpg"
download "uniform" "cotton-tee-2.jpg" "$BASE/c9cf8b_83334ef33f06411a8bccd6da53879aae~mv2.jpg"
download "uniform" "hoodie-front.jpg" "$BASE/c9cf8b_ba8d4fbcdc9043348ea682e4fd3533d9~mv2.jpg"
download "uniform" "hoodie-grey-rear.jpg" "$BASE/c9cf8b_0dbae102f6b64fde9ecaa411d400fba5~mv2.jpg"
download "uniform" "mecca-sports-logo.png" "$BASE/c9cf8b_bf8d25eef43e40799c0d4b4662bd8620~mv2.png"

# ── JX PROGRAM ──
echo "[13/17] JX Program..."
download "jx-program" "junior-phoenix.jpg" "$BASE/c9cf8b_e356a15f66c146e9b663dad6d6a044ce~mv2.jpg"

# ── FEES ──
echo "[14/17] Fees..."
download "fees" "laps-stock.jpg" "$BASE/11062b_3dc57aa3cdee4bb38b6c66cb918836ae~mv2.jpg"

# ── SPONSORS ──
echo "[15/17] Sponsors..."
download "sponsors" "coastal-realty-logo.jpg" "$BASE/c9cf8b_98a151eaa6994b56aeb4f37e95a3f425~mv2.jpg"
download "sponsors" "swimtek-logo.png" "$BASE/c9cf8b_fce2457218534571a2e73e7e3f4df864~mv2.png"
download "sponsors" "city-of-mandurah-logo.png" "$BASE/c9cf8b_e552f3d4f8a246928dcca7765acc3b60~mv2.png"
download "sponsors" "amd-logo.jpg" "$BASE/c9cf8b_c1b60a8080bc44679db881a5be0ae0e0~mv2.jpg"
download "sponsors" "bdr-business-logo.jpg" "$BASE/c9cf8b_8b8c6094c3d0473ca23378e9e6a1ed85~mv2.jpg"
download "sponsors" "mandurah-steak-house.png" "$BASE/c9cf8b_b947f1e1ac3e4e03a660a1df7f509691~mv2.png"
download "sponsors" "madison-builders.jpg" "$BASE/c9cf8b_4aee11e3cc0741bda52258b0b6a47561~mv2.jpg"
download "sponsors" "peel-garage-doors.jpg" "$BASE/c9cf8b_3706956470cb46b69f512f4f96586112~mv2.jpg"
download "sponsors" "mandurah-graphics.jpg" "$BASE/c9cf8b_9ad68bcd97fa4ffda49ad287ef7d7983~mv2.jpg"
download "sponsors" "rewind-skin-laser.jpg" "$BASE/c9cf8b_c6778fd858154a3287dddb38dd0e0182~mv2.jpg"

# ── DONATE ──
echo "[16/17] Donate..."
download "donate" "containers-for-change.jpg" "$BASE/c9cf8b_9daa15ed534e429cb9715b98ddf33c91~mv2.jpg"
download "donate" "cfc-logo.jpg" "$BASE/c9cf8b_a31c3fb36b604d2ea6cbebdc3408df18~mv2.jpg"
download "donate" "donate-refund.png" "$BASE/c9cf8b_8fe5f1f3a53b4b62a29385c53a4c552c~mv2.png"
download "donate" "drop-off.jpg" "$BASE/c9cf8b_f7d2f633289446ad8d6b230fb66a2970~mv2.jpg"

# ── COUNTRY PENNANTS ──
echo "[17/17] Country Pennants..."
download "country-pennants" "club-logo-colour.png" "$BASE/c9cf8b_13553b152adc4c6b871f55b4bf7a8836~mv2.png"
download "country-pennants" "cp-promo-banner.png" "$BASE/c9cf8b_71adfa72dac441d799a26325ab9e13f0~mv2.png"
download "country-pennants" "artwork.jpg" "$BASE/c9cf8b_86be57e015de4d0d8931b8c4bf263e60~mv2.jpg"

echo ""
echo "=== DOWNLOAD COMPLETE ==="
echo ""
echo "Summary:"
TOTAL=$(find images -type f | wc -l)
SIZE=$(du -sh images | cut -f1)
echo "  Total files: $TOTAL"
echo "  Total size: $SIZE"
echo "  Location: ./images/"
echo ""
echo "Directory breakdown:"
for dir in images/*/; do
  count=$(find "$dir" -type f | wc -l)
  echo "  $dir: $count files"
done
