import { chromium } from 'playwright';

const browser = await chromium.launch();

// Desktop 1440px
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

// Screenshot 1: Full header default state
await page.screenshot({ path: 'screenshot-header-default.png', clip: { x: 0, y: 0, width: 1440, height: 200 } });

// Screenshot 2: Hover "About Us" dropdown
const aboutTrigger = page.locator('.dropdown-trigger', { hasText: 'About Us' });
await aboutTrigger.hover();
await page.waitForTimeout(300);
await page.screenshot({ path: 'screenshot-header-about-dropdown.png', clip: { x: 0, y: 0, width: 1440, height: 400 } });

// Move away to close
await page.mouse.move(0, 500);
await page.waitForTimeout(300);

// Screenshot 3: Hover "Get Swimming" dropdown
const swimTrigger = page.locator('.dropdown-trigger', { hasText: 'Get Swimming' });
await swimTrigger.hover();
await page.waitForTimeout(300);
await page.screenshot({ path: 'screenshot-header-swim-dropdown.png', clip: { x: 0, y: 0, width: 1440, height: 400 } });

// Move away to close
await page.mouse.move(0, 500);
await page.waitForTimeout(300);

// Screenshot 4: Scrolled header state (scroll down and see the sticky header)
await page.evaluate(() => window.scrollTo(0, 300));
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot-header-scrolled.png', clip: { x: 0, y: 0, width: 1440, height: 200 } });

// Screenshot 5: Mobile view
const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobilePage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await mobilePage.waitForTimeout(500);
await mobilePage.screenshot({ path: 'screenshot-mobile-header.png', clip: { x: 0, y: 0, width: 390, height: 100 } });

// Click hamburger to open mobile menu
await mobilePage.locator('.menu-toggle').click();
await mobilePage.waitForTimeout(400);
await mobilePage.screenshot({ path: 'screenshot-mobile-menu-open.png' });

await browser.close();
console.log('All screenshots taken!');
