const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert a short daily phrase',
      input: 'mama bath kanavaa.',
      expected: 'මම බත් කනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Convert a compound sentence',
      input: 'oyaa hari, ehenam api yamu.',
      expected: 'ඔයා හරි, එහෙනම් අපි යමු.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert a complex sentence',
      input: 'oyaa enavanam api balan innavaa.',
      expected: 'ඔයා එනවනම් අපි බලන් ඉන්නවා.',
      category: 'Greeting / request / response',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert an interrogative question',
      input: 'oyaa heta enavadha?',
      expected: 'ඔයා හෙට එනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert an imperative command',
      input: 'vahaama mata eka dhenna',
      expected: 'වහාම මට එක දෙන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert a negative sentence',
      input: 'mata eeka karanna bae.',
      expected: 'මට ඒක කරන්න බැ',
      category: 'Daily language usage',
      grammar: 'Negation',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Convert a greeting',
      input: 'kohomadha oyaata?',
      expected: 'කොහොමද ඔයාට?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert a polite request',
      input: 'karuNaakarala mata eka dhenna.',
      expected: 'කරුණාකරල මට එක දෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert an informal question',
      input: 'machan kohedha uba yanne?',
      expected: 'මචන් කොහෙද උබ යන්නෙ?',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert repeated words',
      input: 'api himin himin yamu.',
      expected: 'අපි හිමින් හිමින් යමු.',
      category: 'Word combination / phrase pattern',
      grammar: 'Plural form',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Convert Frequently used day-to-day',
      input: 'api gedhara innee.',
      expected: 'අපි ගෙදර ඉන්නේ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Convert Multi-word expressions',
      input: 'kaeema kanna enna',
      expected: 'කෑම කන්න එන්න',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Convert Missing spaces',
      input: 'mamahetayanavaa',
      expected: 'මමහෙටයනවා',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Convert past tense sentence',
      input: 'mama iiye panthi giyaa',
      expected: 'මම ඊයෙ පන්ති ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Convert Line breaks',
      input: 'mama kadea yanava.',
      expected: 'මම කඩේ යනව.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Formatting',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Convert future tense sentence',
      input: 'mama heta office yanavaa.',
      expected: 'මම හෙට office යනවා.',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Convert Negation patterns',
      input: 'apita eeka karanna bae',
      expected: 'අපිට ඒක කරන්න බැ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Convert plural subject',
      input: 'Api kanna yamu',
      expected: 'අපි කන්න යමු',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Convert politeness',
      input: 'anea palayan yanna',
      expected: 'අනේ පලයන් යන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Convert English embedded in Singlish',
      input: 'mama eeka oyaata WhatsApp dhaemma.',
      expected: 'මම ඒක ඔයාට WhatsApp දැම්ම.',
      category: 'Mixed Singlish + English',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Convert sentences with Place names',
      input: 'heta havasa zoom meeting ekak thiyenava.',
      expected: 'හෙට හවස zoom meeting එකක් තියෙනව.',
      category: 'Places, Mixed Singlish + English',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Convert English abbreviations and short forms',
      input: 'oyaage NIC number eka evanna.',
      expected: 'ඔයාගෙ NIC number එක එවන්න.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Convert Currency and numbers',
      input: 'mata Rs. 5000 k dhenna.',
      expected: 'මට Rs. 5000 ක් දෙන්න.',
      category: 'Punctuation / numbers',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Convert Slang and colloquial phrasing',
      input: 'adoo ela machan! heta set vemu.',
      expected: 'අඩෝ එල මචන්! හෙට සෙට් වෙමු.',
      category: 'Slang / informal language',
      grammar: 'Compound sentence',
      length: 'S'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Short forms with punctuation marks',
      input: 'S.L.I.I.T',
      expected: 'S.L.I.I.T',
      actual: 'ස්.L.ඉ.ඉ.T',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Caps simple negative',
      input: 'Api Heta Yanavaa',
      expected: 'අපි හෙට යනවා',
      actual: 'අපි හෙට Yඅනවා',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Convert a short daily phrase',
      input: 'bhavana',
      expected: 'භවන',
      actual: 'බ්හවන',
      category: 'Typographical error handling',
      grammar: 'Complex sentence',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Aspirated Consonants',
      input: 'dharmaya',
      expected: 'ධර්මය',
      actual: 'දර්මය',
      category: 'Typographical error handling',
      grammar: 'Complex sentence',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'W is not working',
      input: '10weni',
      expected: '10වෙනි',
      actual: '10wඑනි',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Mixed case for question form',
     input: 'eMail eka evanna puluvandha.',
      expected: 'එමෛල් එක එවන්න පුලුවන්ද.',
      actual: 'එමෛල් එක එවන්න පුලුවන්ද.',
      category: 'Typographical error handling',
      grammar: 'Present tense',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Sentence containing special symbol between names',
      input: 'kusal & nimal adha enne nae',
      expected: 'කුසල් සහ නිමල් අද එන්නෙ නැ',
      actual: 'කුසල් & නිමල් අද එන්නෙ නැ',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Rare Characters',
      input: 'jnaanaya',
      expected: 'ඥානය',
      actual: 'ජ්නානය',
      category: 'Word combination',
      grammar: 'Simple sentence',
      length: 'S',
      status: 'Fail'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Incorrect slang phonetic mapping',
     input: 'ekanam maru macho!',
      expected: 'එකනම් මරු මචෝ !',
      actual: 'එකනම් මරු macho!',
      category: 'Slang / informal language',
      grammar: 'Present tense',
      length: 'S',
      status: 'Fail'
    },
   {
      tcId: 'Neg_Fun_0010',
      name: 'Repeated word expressions used for emphasis',
      input: 'elaela ban',
      expected: 'එල එල බන්',
      actual: 'එලෑල බන්',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S',
      status: 'Fail'
    }

  ],
  
  ui: {
    tcId: 'Pos_UI_0025',
    name: 'Verify that the Clear button resets the input and output fields to their initial empty state',
    input: '1. Enter text in the input box. 2. Click the Clear button.',
    expected: 'Input and Output fields are empty.',
    actual: 'Input and Output fields are cleared successfully.',
    category: 'Empty/cleared input handling',
    grammar: 'Simple sentence',
    length: 'S',
    status: 'Pass'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
