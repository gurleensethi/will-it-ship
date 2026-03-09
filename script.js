function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  if (hash < 0) hash *= -1;
  return hash;
}

const estimateResponses = [
  "Holy fucking shit, did you just pull that time estimate straight out of your ass? It's wrong, you delusional walnut.",
  "Aww, look at this precious little dreamer thinking their estimate means anything. Wrong. Painfully, embarrassingly wrong.",
  "Bro your optimism is cute... like a goldfish trying to do quantum physics. Your estimate is dogshit wrong.",
  "Your time estimate is so bad it makes flat-earthers look like geniuses. Multiply it by 12 and add crippling regret.",
  "Congratulations! You've achieved peak delusion. That estimate is not just wrong, it's an insult to mathematics itself.",
  "Sweet baby Jesus, you actually believe that timeline? The universe is laughing at you harder than I am.",
  "That estimate is cuter than a kitten... and about as useful as one for project planning. Completely fucking wrong.",
  "You didn't estimate the time, you wrote fanfiction. Tragic. Wrong on every possible level.",
  "Bless your smooth brain for thinking that would be enough time. Reality called — it's filing a restraining order.",
  "Your estimate is wronger than your ex's 'it's not you, it's me'. This project is about to destroy your soul.",
  "Did you calculate that during a fever dream? Because it's hilariously, catastrophically incorrect.",
  "You're not a developer, you're a professional copium inhaler. That time estimate is straight garbage.",
  "The confidence to submit that estimate should be studied. Too bad the accuracy is nonexistent.",
  "Your timeline is so optimistic it should run for president. Unfortunately it's still dead wrong.",
  "Oh honey... no. Just no. Your estimate is wrong and your future self hates you for it.",
  "That's the cutest little wrong estimate I've seen all week. Multiply by 7 and prepare to suffer.",
  "You estimated like someone who has never been punched in the face by reality. Welcome to your first beating.",
  "Lmao this estimate is so bad I'm saving it for my comedy special. It's wrong, dumbass.",
  "Your brain must have been on airplane mode when you wrote that. Estimate rejected by the laws of physics.",
  "Adorable. You thought this would take that long? The project gods are roasting you harder than this.",
  "That time estimate just got absolutely violated by common sense. Try again, clown.",
  "You're the type of person who says '5 more minutes' and shows up 3 hours late. Your estimate reflects that.",
  "This isn't planning, this is self-harm with extra steps. Your estimate is laughably terrible.",
  "Even my grandma's bingo predictions are more accurate than this dumpster fire of a timeline.",
  "Bro you didn't estimate shit. You had a hallucination and typed numbers. All wrong.",
  "Your estimate is so wrong it's actually offensive. The bugs are already laughing at you.",
  "Thinking it'll only take that? Bold of you to assume the universe won't personally fuck you over.",
  "Peak performance in delusion. Your time estimate deserves an Oscar for Best Comedy.",
  "You sweet summer child with the IQ of a soggy potato. That estimate is tragically incorrect.",
  "This estimate belongs in the trash along with your hopes and dreams for this weekend.",
  "Your timeline is faker than Instagram models. Wrong. So very wrong it hurts.",
  "Did ChatGPT give you that estimate? Because even AI wouldn't be this confidently stupid.",
  "The only thing more wrong than your estimate is your taste in project management.",
  "You're about to learn why developers drink. Spoiler: because of idiots like your current estimate.",
  "That number you wrote? Pure fiction. Worse than Twilight. At least that had vampires.",
  "Your estimate is so bad, Murphy's Law just sent it a thank you card.",
  "Bless your heart, you absolute walnut. This project will take three times longer and destroy your sleep.",
  "You estimated with the same energy as 'this diet starts Monday'. We all know how that ends.",
  "This timeline is so wrong it's circling back around to performance art. Tragic.",
  "Your project estimate is what happens when hope fucks ignorance and gives birth to stupidity.",
  "Even a broken clock is right twice a day. Your estimate somehow managed to be wrong 24/7.",
  "You're not estimating time, you're writing a fantasy novel with terrible plot holes.",
  "That estimate died faster than your motivation after the first bug. It's wrong.",
  "The audacity of this estimate is actually impressive. Too bad it's completely braindead.",
  "Your future self is already crying in the corner because of this hilariously wrong estimate.",
  "This is why we can't have nice things. Because people like you submit estimates like this.",
  "Your time estimate is so off it's in a different timezone. One called 'Pain'.",
  "Congrats on creating the most optimistic piece of fiction since 'The Project Will Be On Time'.",
  "You're gonna need a bigger estimate... and therapy after this project murders your soul.",
  "That estimate is wronger than trying to put socks on a rooster. Absolute clownery.",
  "Reality is going to hit you so hard you'll see stars. Your estimate is the first casualty.",
  "You wrote that with your eyes closed, didn't you? Because it's blind levels of wrong.",
  "This estimate is the software equivalent of 'the check is in the mail'. Bullshit.",
  "Your timeline just got yeeted into the sun by actual project experience.",
  "Bold move submitting that. Stupid move, but bold. It's wrong as hell.",
  "The only thing shorter than your estimate is your attention span during debugging.",
  "You absolute donut. That time estimate belongs in the bin with yesterday's garbage.",
  "This project is about to stretch longer than your excuses for being late.",
  "Your estimate is cute... in the same way a trainwreck is entertaining.",
  "Even Santa has more realistic delivery timelines than whatever the fuck this is.",
  "That estimate is so wrong, it needs its own support group for failed predictions.",
  "You're the reason why 'it'll be done by Friday' is the biggest lie in tech.",
  "Hope you like sleeping with your laptop because this estimate is pure delusion.",
  "Your time calculation skills are worse than a drunk toddler with a calculator.",
  "This estimate is what happens when arrogance meets zero experience.",
  "The bugs haven't even started and your estimate is already dead on arrival.",
  "You're about to get absolutely violated by scope creep, thanks to this joke of an estimate.",
  "That number you picked? My sides are in orbit from how wrong it is.",
  "Professional developers are laughing. Your estimate is comedy gold.",
  "You didn't estimate the project, you insulted it with that pathetic timeline.",
  "This is why project managers drink. Because of estimates like yours.",
  "Your timeline is so short it should come with training wheels.",
  "Even unicorns and rainbows have more realistic deadlines than this shit.",
  "Prepare to become one with the chair because this estimate is a total lie.",
  "That estimate is wronger than a vegan at a barbecue contest.",
  "You've got the confidence of a star and the accuracy of a participation trophy.",
  "This project will take so long you'll forget what sunlight feels like.",
  "Your estimate just got friendzoned by reality. Harsh.",
  "Thinking that's enough time is the funniest joke I've heard this year.",
  "The coding gods just sacrificed a goat because your estimate offended them so much.",
  "You're not a planner, you're a chaos agent with extra steps.",
  "That estimate is so bad it made me spill my coffee from laughing.",
  "Future you is writing a very angry letter to present you right now.",
  "This is what peak performance in clownery looks like. Terrible estimate.",
  "Your timeline belongs in the fiction section next to Harry Potter.",
  "Even a magic 8-ball gives better project predictions than you.",
  "Hope you're ready to sell your soul because this estimate ain't cutting it.",
  "That estimate is weaker than your excuses for missing deadlines.",
  "You've successfully estimated nothing. Absolute zero accuracy achieved.",
  "The only thing this estimate is good for is toilet paper.",
  "You're about to enter the 'why did I think this would be quick' phase of grief.",
  "This estimate is so wrong it looped back and became performance art.",
  "Congrats, you've invented a new level of delusion previously thought impossible.",
  "Your project is going to take longer than it took to make the entire Marvel universe.",
  "That estimate just got absolutely mogged by basic common sense.",
  "Prepare thy butthole, because reality is coming in dry with this estimate.",
  "You're the human equivalent of optimistic error messages.",
  "This timeline is faker than a Kardashian's ass. Completely wrong.",
  "Even Nostradamus is facepalming at how terrible your estimate is.",
  // ------
  "That estimate is incredible. Not because it’s good, but because it suggests you looked at a complicated project, ignored every requirement, every dependency, every possible failure mode, and then confidently typed a number like a medieval peasant predicting the weather by yelling at the sky. Somehow the sky still had a better forecasting model than you.",
  "I’m fascinated by that estimate. It’s like watching someone build a parachute out of optimism and sticky notes, jump out of a plane, and then act confused when gravity shows up like it had a calendar invite.",
  "That timeline reads like the opening scene of a disaster documentary. You know the part where the engineer says 'everything is under control' and the narrator immediately cuts to a slow-motion explosion.",
  "You didn’t estimate the project. You stared at the problem until your brain overheated, hallucinated a number that felt emotionally comforting, and submitted it like reality was just going to politely cooperate.",
  "That estimate is so wildly detached from reality that I’m honestly impressed. It’s like you tried to calculate the timeline using vibes, astrology, and the faint echo of a thought you had three meetings ago.",
  "Your timeline assumes the code works, the requirements stay stable, nobody adds scope, and the universe itself decides to take the week off. So basically your entire plan relies on a temporary suspension of reality.",
  "I don’t know how you came up with that estimate, but I imagine it involved staring at the screen, sighing deeply, and typing the first number that didn’t immediately ruin your mood.",
  "That estimate is the professional equivalent of looking at a five-alarm building fire and confidently saying 'yeah I think a glass of water should handle this situation.'",
  "You didn’t estimate anything. You reached into the cosmic void, grabbed the first number floating around in there, and hoped nobody noticed it smelled like pure bullshit.",
  "That timeline has the structural integrity of a cardboard bridge designed by someone who watched half a YouTube video about engineering and decided that was enough education for today.",
  "Your estimate feels like the exact moment someone says 'how hard could it be' right before accidentally inventing an entirely new category of disaster.",
  "That timeline is so optimistic it makes motivational posters look clinically depressed.",
  "You estimated that project with the same methodology ancient civilizations used to predict eclipses: wild speculation, absolute confidence, and absolutely zero understanding of what’s actually happening.",
  "That estimate assumes bugs, edge cases, integration failures, and human stupidity simply choose not to exist. Which is bold, considering those are usually the main characters.",
  "That timeline is the kind of number someone writes when they desperately want the meeting to end and are fully prepared to let their future self deal with the consequences like a flaming bag of problems left on the doorstep.",
  "Oh you absolute masterpiece of self-sabotage, you actually sat there, looked at this absolute war crime of a project — complete with shifting requirements, ancient legacy code that still has 'TODO: fix later' comments from 2017, stakeholder opinions changing faster than your ex's relationship status, and enough edge cases to make a mathematician cry — and then confidently typed a number so comically tiny it makes a toddler's lemonade stand look like a Fortune 500 five-year plan? This project is already warming up the popcorn while it watches your soul slowly dissolve over the next eighteen months of all-nighters and passive-aggressive Jira comments.",
  // ------
  "Sweet suffering Christ on a flaming skateboard, you really believed that microscopic timeline would survive first contact with reality? This thing is going to metastasize faster than a bad rumor in a group chat, turning your cute little 'two weeks' into two years of therapy bills, broken relationships, and a LinkedIn post at 3 a.m. titled 'Why I No Longer Have a Soul (and also why you should never trust my estimates again)'.",

  "Look at you, you glorious trainwreck of misplaced confidence, bravely submitting an estimate shorter than your attention span during a performance review while the rest of us are over here knowing this project is about to stretch longer than the list of exes who left you after you said 'it'll be quick, babe' — and trust me, this one is going to hurt way more and leave permanent scars on your sleep schedule.",

  "Awww, did you consult the magic 8-ball that only says 'outlook good' while it's actively on fire and leaking pure existential dread? Because that adorable little number you just dropped is about to become the origin story for the next generation of burnt-out developers who will point at you in meetings and whisper 'that's why we drink... and also why we have trust issues with anyone who says two sprints'.",

  "You magnificent disaster of a human being, you really thought you could slap a deadline on this flaming dumpster fire of a project and walk away unscathed? Reality is already printing 'I told you so' banners in 8K resolution, reserving front-row seats for your slow-motion descent into the kind of burnout that makes medieval monks look like they're on a luxury spa retreat.",

  "Buddy, your timeline isn't optimistic — it's a full-blown psychotic break wearing a party hat and holding a balloon that says 'we'll be fine'; this project is going to expand faster than the universe after the Big Bang, except instead of creating stars it'll just create 47,000 new Jira tickets, three mental health days you'll never actually take, and the quiet realization that you are, in fact, the villain in your own burnout story.",

  "Oh you precious, deluded little code gremlin who still believes in fairy tales like 'the requirements won't change', you actually thought that number would hold up once the first 'quick change' from the client hit? This bad boy is going to outlive your current relationship, your next three jobs, the heat death of the universe, and possibly your will to live while you sit there refreshing the burndown chart like a widow checking the mailbox for a letter that will never arrive.",

  "That estimate isn't just wrong — it's an active hate crime against every developer who's ever cried in their car at 2 a.m. after a 'simple' refactor; the bugs haven't even woken up yet and they're already laughing so hard they're filing for emotional damages in your name while the stakeholders prepare the guillotine made entirely out of scope creep.",

  "Congratulations, you absolute legend of delusional bravery, you've created what future historians will call 'the most aggressively incorrect prediction since someone said the Titanic was unsinkable' — except this time the iceberg is made of stakeholder feedback, legacy code, and your own hubris, and the only thing floating when it all goes down will be your tears and an empty coffee cup.",

  "You sweet summer child who's clearly never been mugged by a legacy codebase at 3 a.m., your timeline just got classified as psychological warfare by the Geneva Convention; by the time this project is over you'll be telling war stories so dark that new interns will refuse to sit next to you in meetings and your therapist will need therapy.",

  "Oh honey, bless whatever substances you were on when you typed that number, because this project is about to turn your life into a slow-motion horror movie where the only character development is 'person who used to have dreams' becoming 'person who owns 47 half-empty Red Bull cans, a therapist on speed dial, and a growing collection of existential dread'.",

  "You absolute masterpiece of self-sabotage, you really believed you could yeet that laughably tiny figure into the void and the void wouldn't yeet it right back at your face at 4× velocity while screaming 'REMEMBER ME?!' every single time you try to close your laptop and pretend you have a life?",

  "That timeline isn't a plan — it's a suicide note written in Comic Sans by someone who's never met a stakeholder with opinions or a production database with feelings; the only thing finishing on schedule will be your slow, inevitable transformation into the office cryptid who mutters about 'that one estimate' at 3 a.m. while rocking in the fetal position.",

  "Look how adorably you believed in yourself for three whole seconds before submitting that number — that's genuinely cute. This project is about to spend the next calendar year teaching you that hope is a currency and you just spent your entire life savings on a lottery ticket that was printed on toilet paper and signed by Murphy himself.",

  "You brave little soldier marching toward certain doom with a smile and a PowerPoint slide, your estimate just got added to the official list of things that should come with a government warning label: 'May cause irreversible loss of faith in humanity, weekends, sleep, relationships, and the concept of time itself — consult your therapist before reading'.",

  "That number you typed? It's not an estimate — it's the professional equivalent of looking at a five-alarm building fire and confidently saying 'yeah I think a glass of water should handle this situation' while the fire department is already laughing and placing bets on how long until you call them crying.",

  "You didn't estimate the project. You stared at the requirements until your brain overheated, hallucinated a number that felt emotionally comforting, and submitted it like reality was just going to politely cooperate instead of showing up with a baseball bat labeled 'scope creep' and a smile that says 'you sweet summer child'.",

  "That timeline has the structural integrity of a cardboard bridge designed by someone who watched half a YouTube video about engineering, decided that was enough education for today, and then proudly presented it to a room full of civil engineers who are now filing for emotional damages.",

  "Your estimate feels like the exact moment someone says 'how hard could it be?' right before accidentally inventing an entirely new category of disaster that gets its own Wikipedia page titled 'The Day [Your Name] Thought They Could Ship It In Two Weeks'.",

  "That timeline is so optimistic it makes motivational posters look clinically depressed and ready to unionize; this project is about to teach you the true meaning of 'forever' in a way that makes eternity feel like a weekend getaway to hell with no return ticket.",

  "You estimated this project with the same rigorous methodology ancient civilizations used to predict eclipses: wild speculation, absolute confidence, a complete lack of understanding of what the fuck is actually happening, and then acted shocked when the sun still disappeared and your life went dark.",

  "That estimate assumes bugs, edge cases, integration failures, stakeholder changes, and basic human stupidity simply choose not to exist for the duration of the project — which is bold, considering those four things are usually the main characters, the director, and the entire production crew.",

  "Your timeline reads like the opening scene of a disaster documentary where the engineer says 'everything is under control' and the narrator immediately cuts to a slow-motion explosion while the camera pans to you in the corner whispering 'but I thought it would only take two weeks'.",

  "I’m genuinely fascinated by that estimate. It’s like watching someone build a parachute out of pure optimism, sticky notes, and copium, then jump out of a plane while the rest of us are screaming 'gravity called and it’s not happy with your math'.",

  "That estimate is so wildly detached from reality that I’m honestly impressed — it’s like you tried to calculate the timeline using vibes, astrology, the faint echo of a thought you had three meetings ago, and whatever lies you told yourself in the shower this morning.",

  "You didn’t estimate anything. You reached into the cosmic void, grabbed the first number that didn’t immediately make you want to cry, and hoped nobody noticed it smelled like pure, unfiltered bullshit mixed with the faint aroma of impending regret.",

  "That timeline has the same energy as someone saying 'the check is in the mail' while the check is actually in another dimension and the mailman is on permanent vacation — congratulations, you’ve just invented negative velocity progress.",

  "Your estimate just got absolutely violated by common sense, common decency, and the entire history of software development; the project gods are currently sacrificing a goat in your honor while laughing so hard they’re crying pixels.",

  "Oh you beautiful, broken little optimist who still thinks deadlines are suggestions, this project is about to become your personal Vietnam — same body count, different kind of PTSD, and the only medal you’ll earn is one that says 'I survived… barely… and my therapist now has a boat'.",

  "That number you submitted isn’t a timeline — it’s a cry for help wearing a tiny party hat; unfortunately the only response it’s going to get is six months of 2 a.m. Slack pings asking why production is on fire again while your weekends file for divorce.",

  "Congratulations on creating what might be the single most devastating work of fiction since whoever first said 'this meeting could have been an email' — your estimate deserves its own wing in the Museum of Delusional Artifacts, right between 'we’ll just refactor it later' and 'it’s only a POC, bro'.",

  "You absolute glorious catastrophe of a human being, that tiny hopeful number you submitted is about to be remembered in developer folklore as the moment one person’s hubris caused an entire team to age ten years in ten weeks while you sat there refreshing the deploy log like a widow checking the mailbox for a letter that will never arrive.",

  "Your estimate just walked into a bar full of senior developers, ordered a 'quick win', and got curb-stomped so hard the only thing left is a single blood-stained Post-it note that reads 'should have listened' while the jukebox plays 'The Sound of Silence' on repeat for the next eighteen months.",

  "That estimate isn’t wrong — it’s a war crime against mathematics, sleep cycles, every person who will ever have to maintain this code, and anyone unfortunate enough to share a calendar with you; the bugs are already printing 'I told you so' t-shirts in your size.",

  "You sweet, innocent fool who apparently thinks software development is just typing really fast until it’s done, this project is about to teach you the true meaning of 'forever' while simultaneously teaching your liver the true meaning of 'loyalty' and your social life the true meaning of 'ghosted'.",

  "That timeline you just submitted is so aggressively incorrect it’s practically begging to be turned into a motivational poster that reads: 'Dream big… then watch reality personally ruin your life in ultra HD while everyone else refreshes the burndown chart and laughs their asses off'.",

  "Oh you precious little hallucinating code-monkey, you really thought that number would survive once the first 'can we just add one tiny feature' request landed? This project is already scheduling therapy sessions for your future self while your past self is still pretending 'two weeks' was ever a realistic concept in this godforsaken industry.",

  "Your estimate just got classified as a controlled substance in twelve countries because the level of delusion required to believe it is considered more dangerous than most recreational drugs — welcome to the rest of your life, where every notification is another nail in the coffin of your weekend plans.",

  "That number you typed with such confidence is the software equivalent of telling your partner 'I’ll be home in twenty minutes' and then showing up six months later with a new personality disorder, a restraining order from sleep itself, and a collection of empty coffee cups that could fill a small museum.",

  "You didn’t plan this project. You had a fever dream, woke up sweating, typed the first number that didn’t make you want to quit on the spot, and hit submit like the universe was just going to high-five you instead of high-kicking you straight into next quarter.",

  "Congratulations, you’ve achieved what no previous human has managed: creating a timeline so aggressively incorrect that Murphy’s Law looked at it, started crying, immediately unionized with the bugs, and is now personally ensuring your life becomes a cautionary tale taught in bootcamps for the next fifty years.",

  "That estimate is so far off the rails it’s currently starring in its own true-crime documentary titled 'How One Number Destroyed an Entire Human Being’s Will to Live While the Bugs Laughed in the Background and the Stakeholders Popped Champagne'.",

  "You absolute donut of a human, your timeline is faker than a Kardashian’s ass and twice as likely to cause long-term emotional damage; this project is going to expand like my to-do list after New Year’s resolutions and leave you with nothing but regret and a growing collection of unread Slack messages from your future self.",

  "Oh you brave little soldier who still believes in happy endings and fixed scopes, this project is about to stretch longer than the list of people who’ve ghosted you after you said 'it’ll be quick, I promise', and it’s going to hurt way more than any breakup because at least exes eventually stop texting you at 2 a.m.",

  "Your estimate just got friendzoned by reality so hard it’s filing for emotional damages while the rest of us are over here placing bets on exactly how many all-nighters it will take before you start speaking only in Jira ticket numbers and crying during standup.",

  "That timeline you submitted is what happens when hope has unprotected sex with ignorance and gives birth to a bouncing baby delusion that will grow up to ruin every weekend you ever thought you’d have for the rest of your natural life.",

  "You didn’t estimate the time. You wrote a fantasy novel with terrible plot holes, zero character development, and an ending so predictable that even the bugs are rolling their eyes and preparing the 'I told you so' PowerPoint for the retrospective.",

  "Sweet baby Jesus on a pogo stick, you actually believe that timeline? The universe is laughing at you harder than it laughed at the guy who invented New Coke, and at least he got a book deal — all you’re getting is eighteen months of pain and a reputation as 'that person who thought it would only take two weeks'.",

  "That estimate is so bad it makes flat-earthers look like Nobel Prize winners; this project is going to take longer than it took to build the pyramids, involve fewer slaves, more coffee, and leave you with the same level of existential regret as the guy who invented the participation trophy.",

  "You absolute walnut, your brain must have been on airplane mode with the Wi-Fi off when you came up with that number, because this timeline is faker than reality TV and twice as likely to end in tears, lawsuits, and a group chat titled 'Never Let [Your Name] Estimate Again'.",

  "That number you picked with such swagger is about to get absolutely mogged by basic common sense, scope creep, and the cold hard hand of reality slapping you so hard your grandchildren will feel it — welcome to the pain Olympics, where you just qualified for the gold medal in self-inflicted suffering.",

  "Oh you sweet, innocent fool who apparently thinks software development is just typing really fast until it magically works, this project is about to become your personal Game of Thrones finale — long, disappointing, full of plot holes, and leaving you questioning every life choice that led you to this moment.",

  "Your timeline is so short it should come with training wheels and a helmet, because this project is about to body-slam you into next quarter so hard you’ll forget what sunlight feels like and start measuring time in 'how many times I’ve refreshed the error logs today'.",

  "Congratulations, you’ve invented a new level of delusion previously thought impossible even by professional copium inhalers — this estimate is so wrong it looped back around and became performance art, and the only award it’s winning is the 'Lifetime Achievement in Making Future You Want to Time-Travel Back and Slap Present You' trophy.",

  "That estimate just got yeeted into the sun by actual project experience, where it’s currently burning up while the rest of us are down here placing bets on exactly how many times you’ll say 'just one more fix' before you ascend to a higher plane of existence made entirely of caffeine and regret.",

  "You absolute donut, your estimate is weaker than your excuses for missing deadlines and about as useful as a chocolate teapot in a microwave — this project is going to expand faster than my excuses after New Year’s and leave you with nothing but a broken spirit and a calendar that looks like a war zone.",

  "That timeline you just submitted belongs in the fiction section right next to Harry Potter and 'The Project Will Be On Time' — except this one has worse plot holes, more plot twists, and ends with you rocking in the corner whispering 'I thought it would only take two weeks'.",

  "Oh you beautiful, broken optimist, even Santa has more realistic delivery timelines than whatever the fuck that number was, and he has magic and elves — all you have is hope, a keyboard, and an impending sense of doom that’s about to become your new personality trait.",

  "Your estimate is so off it’s in a different timezone called 'Pain' and it’s currently filing for divorce from reality while taking half your weekends, all your sleep, and whatever was left of your dignity in the settlement.",

  "That number you wrote with such confidence is pure fiction — worse than Twilight, at least that had vampires and werewolves; yours just has bugs, scope creep, and the slow realization that you are the main character in your own cautionary tale.",

  "You didn’t estimate the project. You insulted it with that pathetic timeline, and now the code is writing its own obituary while the bugs are throwing a party and inviting every stakeholder you’ve ever disappointed.",

  "This is why project managers drink — because of estimates like yours that make even the most seasoned veterans question their life choices and start updating their résumés at 2 a.m.",

  "Your estimate is so bad it made me spill my coffee from laughing, and now my keyboard is sticky, my day is ruined, and your future self is already drafting the strongly-worded complaint letter to present you that starts with 'you absolute idiot'.",

  "That estimate is cuter than a kitten and about as useful for project planning as one — congratulations, you’ve achieved peak performance in clownery and the circus is calling to offer you a lifetime contract as their main attraction.",

  "You sweet summer child with the IQ of a soggy potato, this estimate is tragically incorrect and your future self is already crying in the corner while writing the hate mail that begins with 'dear past me, fuck you'.",

  "Even Nostradamus is facepalming so hard at how terrible your estimate is that he’s considering coming out of retirement just to tell you 'bro, what the fuck were you thinking?'",

  "That estimate is faker than a Kardashian’s ass and about as likely to survive long-term scrutiny — this project is going to eat your soul faster than TikTok eats attention spans and leave you with nothing but regret and a collection of unread notifications.",

  "You absolute legend of wishful thinking, your timeline is so optimistic it should run for president, but unfortunately it’s still dead wrong and the only thing it’s winning is a one-way ticket to overtime oblivion.",

  "This isn’t planning, this is self-harm with extra steps and a side of delusion so thick you could spread it on toast and call it 'breakfast of champions who are about to get absolutely violated by reality'.",

  "Your brain must have been on airplane mode when you wrote that, because this estimate just got rejected by the laws of physics, common sense, and every senior dev within a fifty-mile radius who is now laughing so hard they’re crying.",

  "That estimate died faster than your motivation after the first bug, and now it’s haunting you from the great beyond while whispering 'I told you so' every time you try to sleep.",
];
