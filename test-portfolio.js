import { chromium } from 'playwright';

async function test() {
  const browser = await chromium.launch();
  const context = await browser.createContext();
  const page = await context.newPage();
  
  const baseUrl = 'https://ahsanarshad004.github.io/portfolio';
  let passed = 0;
  let failed = 0;

  try {
    // Test 1: Homepage loads
    console.log('\n=== TEST 1: Homepage loads ===');
    await page.goto(baseUrl);
    const title = await page.title();
    console.log(`✓ Page title: ${title}`);
    passed++;

    // Test 2: Check for main sections
    console.log('\n=== TEST 2: Homepage sections ===');
    const sections = ['Hero', 'Projects', 'About', 'Skills', 'Experience', 'Contact'];
    for (const section of sections) {
      const exists = await page.locator(`text="${section}"`).first().isVisible().catch(() => false);
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

    // Test 6: Direct URL to project
    console.log('\n=== TEST 6: Direct URL access ===');
    await page.goto(`${baseUrl}/project/trapeze-resource-planner`);
    const projectTitle = await page.title();
    console.log(`✓ Direct project URL loaded: ${projectTitle}`);
    passed++;

    // Test 7: Console errors
    console.log('\n=== TEST 7: Console messages ===');
    const messages = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        messages.push(msg.text());
      }
    });
    await page.waitForTimeout(500);
    if (messages.length === 0) {
      console.log('✓ No console errors');
      passed++;
    } else {
      console.log(`✗ Console errors found: ${messages.join(', ')}`);
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
