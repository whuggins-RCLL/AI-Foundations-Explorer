/* ---------------------------------------------------------------
   AI Foundations Explorer - script

   This file does two things:
   1. It stores the list of AI concepts.
   2. It shows a random concept when the button is clicked.

   If you want to add or edit a concept, change the list below.
   --------------------------------------------------------------- */

// Each concept has a name, a short explanation, and a question you
// could try asking an AI assistant. To add a concept, copy one of the
// blocks below and change the text inside the quotation marks.
const concepts = [
  {
    name: "Tokens",
    explanation:
      "Language models break text into smaller pieces called tokens before working with it. A token might be a whole word, part of a word, or a piece of punctuation.",
    tryAsking: "Explain how the same sentence might be broken into tokens.",
  },
  {
    name: "Context",
    explanation:
      "A model answers using the information available to it right now: your instructions, the conversation so far, and any documents you have shared.",
    tryAsking: "What information are you using from our conversation right now?",
  },
  {
    name: "Generation",
    explanation:
      "A generative model writes its answer by predicting likely continuations, one piece at a time. It is not looking up a single stored answer in a database.",
    tryAsking:
      "Why might you give me a slightly different answer if I ask this same question again?",
  },
  {
    name: "Grounding",
    explanation:
      "Grounding means giving an AI system specific sources to rely on, such as a document you provide or material the system retrieves for you.",
    tryAsking:
      "How would your answer change if I gave you a source and required you to rely only on it?",
  },
  {
    name: "Agents",
    explanation:
      "An agent combines a language model with instructions, tools, and multiple steps so it can carry out a task rather than produce a single reply.",
    tryAsking:
      "What is the difference between answering one prompt and carrying out a multi-step task?",
  },
  {
    name: "Verification",
    explanation:
      "Fluent writing is not proof of accuracy. A model can sound confident and still be wrong, so claims that matter should be checked against a trusted source.",
    tryAsking:
      "Which parts of your last answer should I double-check, and where would I check them?",
  },
];

// Find the two pieces of the page this script needs: the button the
// visitor clicks, and the box where the concept is displayed.
const conceptButton = document.getElementById("concept-button");
const conceptOutput = document.getElementById("concept-output");

// Pick one concept at random from the list above.
function pickRandomConcept() {
  const randomIndex = Math.floor(Math.random() * concepts.length);
  return concepts[randomIndex];
}

// Write the chosen concept into the box on the page. The backticks
// below let us write several lines of HTML and drop values into it
// using ${...}.
function showConcept(concept) {
  conceptOutput.innerHTML = `
    <h3>${concept.name}</h3>
    <p>${concept.explanation}</p>
    <p class="prompt-label">Try asking an AI&hellip;</p>
    <p class="prompt-text">${concept.tryAsking}</p>
  `;
}

// When the button is clicked, pick a concept and show it.
conceptButton.addEventListener("click", function () {
  const concept = pickRandomConcept();
  showConcept(concept);
});
