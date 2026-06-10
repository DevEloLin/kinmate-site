# KinMate

**Your family's health, finally in one place.**

KinMate is a personal record manager and family information organizer for the things you keep accidentally losing. Lab reports buried in your camera roll. Pill bottle leaflets folded into a drawer. Vaccine cards passed across three different vet clinics. The half-remembered version of what the doctor said last Thursday afternoon. The two-line text from your mother about her new prescription. All of it sitting in different places, none of it connected, none of it easy to find when it actually matters.

This is what KinMate fixes.

## What it does

You take a photo. A lab report, a prescription, a vaccine record, a physical from last spring, a discharge summary, a pet's medical sheet — any of these. KinMate's AI reads the image, identifies what's there, and lays it out as structured cards: the indicators with their values and normal ranges, the medications with dosage and frequency, the prescribing physician, the follow-up dates, the names of conditions mentioned. What used to be a photo nobody could search is now a record the app can act on.

Then the app stays awake on your behalf. A medication that needs to be taken twice daily becomes a reminder at the times you want it. A follow-up appointment in three months becomes a notification when the date approaches. An indicator that was just barely abnormal becomes a chart you can look at every time a new report comes in, so you can see whether it's getting better or worse.

The original photo is never the file you have to dig through again. It's the starting point for everything else the app does.

## How it handles your information

Everything you upload stays on the device by default. The original files — the photos and the PDFs — are written to your device's private storage and do not leave it. Nothing about them is sent anywhere unless you take an explicit action.

The exception is the AI reading itself. When you choose to interpret a report, that one file passes through a redacting proxy on its way to the model that generates the reading. The reading comes back to your device and is stored locally. We retain nothing from that exchange on our end. We use the data to generate your reading and then we forget it.

The structured information that comes out of the reading — the indicator names, the medication entries, the dates — does sync to your signed-in account. This is what lets you switch phones and not lose everything. It is also what lets you share carefully chosen records with carefully chosen family members. The original photo is never part of that sync. You decide what is shared, when, and with whom.

If you turn on the optional cloud backup, the encrypted vault goes into your own iCloud Drive, Google Drive, or OneDrive folder. We never receive the file content, the access tokens, or the decryption keys. The backup is yours, in your cloud, encrypted with a key only you hold.

## Built for the whole family

You can keep separate records for yourself, a partner, parents, in-laws, children. Each person gets a complete profile: their conditions, their medications, their lab history, their notes. None of these profiles are visible to anyone else until you choose to share them.

When you create a family group, the profiles you choose to bring into the group become visible to the other members. Everyone in the group can add to them — adding the result of last week's visit, recording the new prescription that came in the mail, flagging that something looks off. Anyone outside the group cannot see any of it.

The same family group enables a few extra things that don't make sense for a solo user. Care check-ins let an elderly parent press a button each morning to confirm they're okay; if they miss too many, the app notifies the people you nominated as their emergency contacts. Shared reminders mean the whole family knows that grandfather has a cardiology appointment Friday morning, not just one of you. A shared emergency medical card means whoever is at the hospital with grandfather can pull up his allergies, his current medications, his blood type, and his contacts from the lock screen of the phone in their pocket.

## Pets, too

Pet records work the same way as human records. Breed, birthday, weight, vaccine schedule, current medications, vet visits, lab results — every field a person's profile has, a pet's profile has the equivalent of. When the vaccine cycle expires, the app reminds you. When the prescription is due for a refill, the app reminds you. When a new vet asks for the medical history, the family member with the phone has it ready in a few taps.

## What keeps it useful day to day

The home screen is the things that need your attention today. The medications scheduled for the next few hours, with a single tap to mark them taken. The reminders due this week. Recent reports that just came back from AI reading and need your confirmation. The health trends that are starting to move in a direction worth noticing.

Subscribe to KinMate Pro, and the AI usage opens up: more readings per month, more indicators traced across time, the option to compare reports side by side, deeper AI guidance on what to ask your doctor next. The free tier always gives you the core: take photos, read them, store them, organize them.

## What's coming

The first public release is what's in your hand. The roadmap from here is shaped largely by what people tell us they need.

We are working on continuous interpretation across multiple reports — so a series of three blood tests over six months becomes a story instead of three disconnected events. We are working on smarter prescription handling — refill tracking, interaction warnings drawn from publicly available sources, easier ways to ask follow-up questions of the AI about a specific prescription. We are extending the family side: shared cases that the whole family can comment on, smarter care-check-in patterns that learn what's normal for each person, richer emergency cards that can be activated by a paramedic via a QR code on the back of a phone.

The pace and the priority will follow what people who actually use the app tell us matters. Email us. Open a thread on our feedback area. We read everything.

## What KinMate is not

KinMate is not a medical service, a telehealth platform, a diagnostic tool, a treatment provider, or an insurance product. The AI's reading is an aid to your understanding of a document. It is never medical advice and it is never a substitute for a licensed clinician. For any actual medical decision, please consult a doctor.

## Where to get it

Download links for iOS and Android, plus our website, are at <https://kinmate.elolin.com>.

For questions, feedback, support, or privacy requests, write to <kinmate@elolin.com>. We respond to every email a real person sends to that address.

---

*This README ships with every KinMate release as the contents of the auto-attached source archive — there is no app or website source code in this archive. Real distribution artifacts (APK, IPA) are uploaded as explicit release assets. The project's source code is private.*
