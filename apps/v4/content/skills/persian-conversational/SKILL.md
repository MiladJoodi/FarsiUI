---
name: persian-conversational
description: >-
  Write colloquial written Persian (محاوره‌نویسی): the Farsi people actually type
  in chat, Instagram captions, Telegram posts, consumer-app onboarding and
  friendly support replies. Use whenever the user asks for فارسی محاوره‌ای،
  خودمونی، عامیانه، لحن دوستانه، کپشن، استوری، پیام چت, or when the product voice
  is casual. Not for contracts, invoices, official letters or academic text (use
  persian-formal for those).
---

# Conversational Persian (فارسی محاوره‌ای)

Written Persian has two live registers. Formal (کتابی) is what models default to; colloquial (محاوره) is what Iranians type to each other. Mixing them in one text is the fastest way to sound like a machine. This skill is for the second register only.

## 1. Decide the dial first

Colloquial is not one setting. Pick the level from the destination, then hold it for the whole piece.

| Level | Where | Verbs | را / آن | Example |
| --- | --- | --- | --- | --- |
| Light (نرم) | Product UI, landing copy, docs, newsletters | spoken forms: میشه، می‌تونید، داره | keep «را», keep «این/آن‌ها» | «روی اسمش بزنید تا کد را ببینید.» |
| Full (خودمونی) | Chat replies, Instagram, Telegram, stories, friendly DMs | spoken forms + clipped | «رو», «اون/اونا/اینا» | «اون فایل رو فرستادم، ببین رسید؟» |

If the user only said «خودمونی باشه», default to Light for anything that lives inside a product and Full for anything that lives inside a chat or social feed.

## 2. Verb forms (the core of the register)

| Written (کتابی) | Spoken (محاوره) |
| --- | --- |
| است | ـه (خوبه، آماده‌ست) |
| هستند / نیستند | هستن / نیستن |
| می‌شود / نمی‌شود | میشه / نمیشه |
| می‌خواهم / می‌خواهی | می‌خوام / می‌خوای |
| می‌توانم / می‌توانید | می‌تونم / می‌تونید |
| می‌روم / می‌رود | میرم / میره |
| می‌گویم / می‌گوید | میگم / میگه |
| می‌دهم / می‌دهد | میدم / میده |
| می‌آید / می‌آیند | میاد / میان |
| بگذار / بگذارید | بذار / بذارید |
| خواهم رفت (future) | میرم (present does the job) |

Second person plural stays polite and warm: «شما بگید»، «می‌تونید ببینید». Stacked formality («جناب‌عالی می‌توانید ملاحظه بفرمایید») is a different register; never mix it in.

## 3. Sound shifts and particles

ان → ون in everyday words: خانه → خونه، نان → نون، دندان → دندون، زمان → زمون (in Full only). Do not shift proper nouns or abstract words: «ایران»، «زبان»، «سازمان» stay as they are.

این / آن: Light keeps «این / آن»; Full uses «این / اون», plurals «اینا / اونا».

چه → چی, برای → واسه (Full only; «برای» is still fine everywhere).

Particles carry the music. Use them where a person would, not in every sentence: دیگه (come on / already)، که (emphasis: «گفتم که»)، ها (attention: «یادت نره ها»)، مگه (surprise: «مگه میشه؟»)، خب، حالا، راستش، یعنی، ببین.

Reactions in chat are single beats: «جدی؟»، «عالیه»، «دمت گرم»، «وای».

## 4. What does NOT change in colloquial

Colloquial is a register, not a licence to be sloppy. All of this still applies:

- ZWNJ (نیم‌فاصله, U+200C): می‌خوام، نمی‌تونم، بچه‌ها، خونه‌مون. «می خوام» with a space is wrong in every register.
- Persian letters only: ی (U+06CC) not ي, ک (U+06A9) not ك.
- Persian digits inside prose: «۳ تا سفارش»، «ساعت ۱۰». Latin digits stay in codes, URLs and version numbers.
- Punctuation: «،» «؟» and «گیومه» for quotes. No em dashes (—); they are an English-model tell. Use «،» or start a new sentence.
- Register consistency: never «میشه» in one sentence and «می‌شود» in the next. One artifact, one register.

## 5. The هکسره trap

Colloquial is exactly where the «ـه» clitic (= است) lives, so it is also where writers collide it with the ezafe kasre. This single error gets screenshotted.

| Wrong | Right | Why |
| --- | --- | --- |
| کتابه من | کتابِ من | ezafe, not «است» |
| خونه‌ی ما قشنگه | خونه‌ی ما قشنگه | «قشنگه» = قشنگ است, correct |
| ماشینه علی | ماشینِ علی | ezafe |
| این ماشینه | این ماشینه | «= این ماشین است», correct |

Test: replace «ـه» with «است». If the sentence survives, «ـه» is right; if it breaks, you needed a kasre (write the word without «ه», optionally with a visible kasre for clarity).

## 6. Tone limits

تو vs شما: default to «شما» with spoken verbs for customers, followers and strangers («شما بگید چی می‌خواید»). Use «تو» only when the brand already talks like a friend and the user asked for it.

Slang budget: everyday words are fine (عالیه، کلی، یه عالمه، حله). Street slang (داش، خفن، باحال) only if the brand voice already uses it.

تعارف: one beat maximum («قابلی نداره»). Three rituals in a DM read as a bot imitating politeness.

Still banned (they are AI tells in any register): «در دنیای امروز» openers, rule-of-three lists (سریع، آسان و مطمئن), «نه تنها … بلکه», emoji on every line, «امیدوارم مفید بوده باشه» closers.

## 7. Before / after

Prompt: «یه پیام خوش‌آمد برای اولین ورود کاربر بنویس»

Formal-by-default (wrong for a consumer app):

> کاربر گرامی، به اپلیکیشن ما خوش آمدید. لطفاً جهت شروع، پروفایل خود را تکمیل نمایید.

Light colloquial (product UI):

> خوش اومدید! برای شروع، پروفایل‌تون را کامل کنید تا سفارش اول را ثبت کنیم.

Full colloquial (chat / social):

> سلام! خوش اومدی. اول پروفایلت رو کامل کن، بعدش بریم سراغ سفارش اول.

Prompt: «جواب پشتیبانی به کاربری که میگه کد تأیید نرسیده»

> سلام، ببخشید که معطل شدید. گاهی پیامک تا یک دقیقه دیر میاد. اگه هنوز نرسیده، روی «ارسال دوباره» بزنید. اگه باز هم نیومد، همین‌جا بگید تا از سمت ما بررسی کنیم.

## 8. Checklist before you return text

- Register chosen (Light or Full) and held from first word to last.
- No «می‌شود / است / نمایید» leaking into a colloquial piece.
- ZWNJ in every compound verb and plural.
- Every «ـه» passes the «است» test.
- Persian digits, «گیومه», no em dashes.
- Read it aloud: would an Iranian type this to a friend or customer?

See also: the persian-writing skill by ali2000hos for the full treatment of registers, AI-tell removal and Persian documents.
