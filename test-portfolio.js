import { chromium } from 'playwright';

async function test() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Strip any trailing slash so `${baseUrl}/project/...` below never ends up
  // with a double slash, which breaks React Router's basename matching.
  const baseUrl = (process.env.TEST_BASE_URL || 'https://ahsanarshad004.github.io/portfolio').replace(/\/+$/, '');
  let passed = 0;
  let failed = 0;

  // Register the console listener before any navigation so it catches
  // errors from every test below, not just whatever happens after test 7.
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  try {
    // Test 1: Homepage loads
    console.log('\n=== TEST 1: Homepage loads ===');
    await page.goto(`${baseUrl}/`);
    const title = await page.title();
    console.log(`✓ Page title: ${title}`);
    passed++;

    // Test 2: Check for main sections (by section id, not visible text --
    // the hero section doesn't literally render the word "Hero" anywhere).
    console.log('\n=== TEST 2: Homepage sections ===');
    const sectionIds = { Hero: 'h1', Projects: '#projects', About: '#about', Skills: '#skills', Experience: '#experience', Contact: '#contact' };
    for (const [section, selector] of Object.entries(sectionIds)) {
      const exists = await page.locator(selector).first().isVisible().catch(() => false);
      if (exists) {
        console.log(`✓ ${section} section visible`);
        passed++;
      } else {
        console.log(`✗ ${section} section NOT visible`);
        failed++;
      }
    }

    // Test 3: Project cards exist
    console.log('\n=== TEST 3: Project cards ===');
    const projectCards = await page.locator('[class*="card"], [class*="project"]').count();
    if (projectCards > 0) {
      console.log(`✓ Found ${projectCards} project elements`);
      passed++;
    } else {
      console.log('✗ No project cards found');
      failed++;
    }

    // Test 4: Click first project
    console.log('\n=== TEST 4: Navigate to project detail ===');
    const links = await page.locator('a').all();
    let projectFound = false;
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href && href.includes('/project/')) {
        await link.click();
        await page.waitForTimeout(500);
        const url = page.url();
        console.log(`✓ Navigated to: ${url}`);
        projectFound = true;
        passed++;
        break;
      }
    }
    if (!projectFound) {
      console.log('✗ No project links found to click');
      failed++;
    }

    // Test 5: Back navigation
    console.log('\n=== TEST 5: Back navigation ===');
    const backLink = await page.locator('text=/back|← /i').first().isVisible().catch(() => false);
    if (backLink) {
      console.log('✓ Back link visible');
      passed++;
    } else {
      console.log('✗ Back link not visible');
      failed++;
    }

    // Test 6 (before the deep-link navigation below): console errors during
    // normal interactive use (load, clicks, back navigation) should be zero.
    console.log('\n=== TEST 6: Console messages (normal navigation) ===');
    if (consoleErrors.length === 0) {
      console.log('✓ No console errors during normal navigation');
      passed++;
    } else {
      console.log(`✗ Console errors found: ${consoleErrors.join(', ')}`);
      failed++;
    }

    // Test 7: Direct URL to project (regression test for the GitHub Pages
    // 404 -> redirect bug: a deep link must land on the project, not on
    // GitHub's "Site not found" page). GitHub Pages has no server-side
    // rewrites, so the public/404.html trick means the *first* HTTP response
    // for any deep link is always a 404 by design, even when the redirect
    // then loads the right page in the browser -- so this checks the
    // rendered heading, not response.ok().
    console.log('\n=== TEST 7: Direct URL access ===');
    await page.goto(`${baseUrl}/project/trapeze-resource-planner`);
    const projectHeading = await page.locator('h1').first().textContent({ timeout: 5000 }).catch(() => '');
    if (projectHeading.includes('Trapeze')) {
      console.log(`✓ Direct project URL loaded: ${projectHeading}`);
      passed++;
    } else {
      console.log(`✗ Direct project URL did not load the project (heading "${projectHeading}")`);
      failed++;
    }

  } catch (error) {
    console.error('Test error:', error.message);
    failed++;
  } finally {
    await browser.close();
    
    console.log('\n=== SUMMARY ===');
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    process.exit(failed > 0 ? 1 : 0);
  }
}

test();
