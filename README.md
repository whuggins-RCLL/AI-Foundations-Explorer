# AI Foundations Explorer

This repository is the starter project for a Stanford Law School workshop on
**vibe coding** — building and changing software by describing what you want to
an AI coding agent instead of writing every line yourself.

The website itself is a small page that explains six foundational ideas behind
generative AI. It is deliberately simple and deliberately unfinished. During the
workshop, you will fork it, change it with Claude Code or Codex, and publish
your own version on the internet.

The project is also meant to teach one point: **a website is ultimately just a
set of files that a coding agent can read and modify.** There are only three of
them here.

| File         | What it is                                       |
| ------------ | ------------------------------------------------ |
| `index.html` | The content and structure of the page            |
| `styles.css` | How the page looks — colors, spacing, fonts      |
| `script.js`  | The six concepts, and what the button does       |

There is no framework, no build step, and nothing to install. You can open
`index.html` in your web browser right now and the site will work.

---

## What is a repository?

A **repository** — usually shortened to **repo** — is a project folder that
GitHub keeps track of. It holds the project's files, and it also holds a history
of every change anyone has made to them.

That history is the useful part. Because every change is recorded, you can see
what changed, when, and why — and you can go back to an earlier version if
something breaks. This is why it is safe to experiment.

## What does "fork" mean?

**Forking** creates your own copy of someone else's GitHub repository, stored
under your own GitHub account. Your fork is yours: you can change anything in it
without asking permission, and nothing you do affects the original.

We use forks in this workshop because:

- the original starter repository stays unchanged for everyone
- every student gets their own independent copy
- you can experiment freely without affecting anyone else's work
- your fork can be connected to Vercel and published as a live website

## Workshop workflow

```text
Starter Repository → Fork → Clone → Claude Code/Codex → Commit → Push → Vercel → Live Website
```

Each step, in plain English:

- **Fork** — make your own copy of this repository on GitHub.
- **Clone** — download your fork from GitHub onto your computer.
- **Coding agent** — Claude Code or Codex reads the project files and changes
  them based on instructions you write in ordinary English.
- **Commit** — save a named checkpoint in the project's history.
- **Push** — send the commits from your computer back up to GitHub.
- **Deploy** — have Vercel turn your repository into a live website with a real
  web address.

## Before the workshop

Please arrive with the following ready:

- **A GitHub account** — free, at [github.com](https://github.com).
- **GitHub Desktop** — the app you will use to clone, commit, and push without
  the command line: [desktop.github.com](https://desktop.github.com).
- **Access to Vercel** — you can sign in with your GitHub account at
  [vercel.com](https://vercel.com).
- **Either Claude Code or Codex installed on your computer.** You only need one.

Setup steps for these tools change often, so we are not printing them here.
Please use the current links:

- Claude Code setup: `[INSERT CURRENT CLAUDE CODE SETUP LINK]`
- Codex setup: `[INSERT CURRENT CODEX SETUP LINK]`
- Workshop instructions: `[INSERT CURRENT WORKSHOP INSTRUCTIONS]`

If you get stuck installing something, come anyway — we will sort it out at the
start of the session.

## During the workshop

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork to your computer using GitHub Desktop.
3. **Open** the project folder with Claude Code or Codex.
4. **Ask your coding agent to explain the project** before changing anything.
5. **Ask it to make one small change.**
6. **Test the site** by opening `index.html` in your browser.
7. **Keep going** — ask for the next change, and the next.
8. **Review the files that changed** in GitHub Desktop, so you can see exactly
   what the agent did.
9. **Commit and push** your changes to your fork on GitHub.
10. **Import your repository into Vercel** and deploy it.
11. **Open the live URL** and share it.

You do not need to finish all eleven steps to have learned something. Getting
through step 6 is a real accomplishment if you have never done this before.

## Your first coding-agent prompt

Start by asking the agent to teach you the project. Copy and paste this:

```text
Before changing anything, inspect this project and explain it to me as if I have never programmed before.

Tell me:
1. what each file does,
2. how the files work together,
3. where the AI concepts are stored,
4. what happens when I click the button, and
5. which parts would be easiest for me to customize.

Do not modify any files yet.
```

## Your first change

Once you understand the project, ask for a small change. Copy and paste this:

```text
Add one new AI concept to the website.

Before editing, tell me which files you expect to change and why.
Then make the change.

Keep the existing architecture. Do not add a framework, package, dependency, API, backend, or build system.

Afterward, explain exactly what you changed and tell me what I should test in the browser.
```

## Ideas for your fork

After that first change, the project is yours. Things you might ask for:

- "Add another AI concept."
- "Turn this into a quiz."
- "Add a dark mode."
- "Make the explanations easier for a nontechnical audience."
- "Add a Myth or Fact feature."
- "Change this into an AI vocabulary study tool."
- "Add a search box."
- "Let users choose a concept instead of selecting one randomly."
- "Change the visual design."
- "Add a progress tracker."
- "Explain this code to me before changing it."

## How to run the site on your computer

Open the project folder and double-click `index.html`. It will open in your web
browser. That is the whole process — there is nothing to start up or install.

After the agent makes a change, refresh the browser tab to see it. If a change
does not seem to appear, refresh again while holding **Shift** to force the
browser to reload the stylesheet and script.

## How this deploys to Vercel

This is a **static site**: plain HTML, CSS, and JavaScript, with no build step.
When you import the repository into Vercel, use these settings:

- Framework Preset: **Other**
- Build Command: **leave empty**
- Output Directory: **leave empty** (or `.`)

Vercel will publish the files as they are and give you a live URL. Every time
you push a new commit to GitHub, Vercel rebuilds the site automatically.

## A note on what "vibe coding" is and is not

Working this way is fast and genuinely useful. It is also worth remembering the
sixth concept on the page: fluent output is not proof of correctness. A coding
agent will sometimes make a confident change that does not do what it claims.
That is why the workflow above asks you to test the site and review the changed
files before you commit — checking the work is part of the work.

## License

MIT — see [LICENSE](LICENSE). You are free to use, change, and republish this.
