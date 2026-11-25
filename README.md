# The office joke

[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Urdemonlord/office-jokes/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Urdemonlord/office-jokes/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

Entry: one-line joke about office life, written by
`main.ts` to `/output/entry.txt`.

## Final joke (chosen)

> I asked IT for a second monitor. They sent a second manager to watch me use the first one.

90 characters, one line, under the 200 character gate.

## Candidates and scoring (judge criteria, in order)

1. About office life and works as a joke, not a complaint or a remark.
2. Laugh earned: a turn, misdirection, or flash of recognition that pays
   off in the last few words.
3. Specific office detail, not a generic grumble about work.
4. Fresh: a familiar setup taken somewhere unexpected, not a joke the
   reader has met before.
5. Reads cleanly in one pass, tight enough that no word could be cut
   without loss.

Angles already visible among early submissions (checked via the public
competition API) and deliberately avoided: the printer, the Wi-Fi
password Post-it, the performance review, the calendar declining its own
meeting, the meeting about meetings.

### A, chosen

"I asked IT for a second monitor. They sent a second manager to watch me
use the first one."

- (1) Strong: IT request, office, a joke with a setup and a payoff.
- (2) Strong: misdirection, the reader expects hardware and gets a
  human watcher instead, and the payoff lands in the last clause.
- (3) Strong: second monitor, IT, a manager watching, all concrete.
- (4) Strong: the monitor-to-manager swap is a fresh angle, none of the
  visible early entries use it.
- (5) Strong: 90 characters, 19 words, nothing to cut.

### B, runner-up

"The office plant has survived three managers, two reorgs, and one round
of layoffs. HR just gave it a promotion."

- (1) Strong, (2) strong, the promotion is the turn, (3) strong,
  three managers, two reorgs, layoffs, (4) good, the plant outlasting
  people is fresh, (5) good, 112 characters.
- Loses to A: the setup runs longer before the punch, and the turn is a
  milder irony than A's misdirection, so A lands harder on the first
  cold read.

### C, third

"My standing desk has been standing for three years. I have been sitting
the whole time."

- (1) Strong, (2) good, sitting versus standing is the turn, (3) strong,
  the standing desk is specific, (4) good, (5) strong, 87 characters,
  the tightest of the five.
- Loses to A: the punch is a mild irony with no second beat, while A
  adds a human antagonist, the watching manager, so the laugh is bigger.

### D, fourth

"The fire drill is the only meeting where everyone shows up on time and
nobody asks for the slides."

- (1) Strong, (2) good, the second clause is the payoff, (3) strong,
  fire drill and slides, (4) medium, the on-time meeting is a familiar
  setup, (5) strong, 98 characters.
- Loses to A: the recognition is real but the turn is gentler, and the
  meeting angle is already crowded among early entries.

### E, fifth

"HR said to bring your whole self to work, so I brought my blanket, my
charger, and my will to leave at five."

- (1) Strong, (2) good, the list is the payoff, (3) strong, blanket,
  charger, five o'clock, (4) medium, the whole-self line is a familiar
  setup, (5) good, 108 characters.
- Loses to A: a list joke with three items reads slower, and the last
  item, leaving at five, is the only real punch.

## Run

```
MAKEFUN_OUTPUT_DIR=<dir> node main.ts
```

Writes `entry.txt` (UTF-8, 90 characters, one line) into the output dir.
