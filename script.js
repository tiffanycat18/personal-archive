const fragments = [
   { title: "i am called tiffany", text: "Tiffany comes from Theophania, a Greek word meaning “manifestation of God” or “appearance of the divine.” It was traditionally associated with Epiphany—the moment something sacred or meaningful is revealed. Tiffany is the slow blooming of an inner world. A place where emotions show up before language can explain them. Tiffany is giving shape to the feelings we can’t name. Tiffany is where depth lives without spectacle, where tenderness and precision coexist—the unveiling of meaning in its own time.", tags: ["name", "tiffany", "self"] },
  { title: "before words", text: "I feel things before I know them", tags: ["intuition", "feelings", "self", "instinct"] },
  { title: "loud and cinematic", text: "I am quieter than most assume me to be. But my inner world is loud and cinematic.", tags: ["quiet", "introvert", "inner world", "imagination", "depth", "identity", "self-expression"] },
  { title: "seen", text: "I don’t like having to explain myself, but I crave visibility.", tags: ["misunderstood", "identity", "self-expression", "vulnerability", "seen"] },
  { title: "images versus words", text: "Visual language makes more sense to me about myself than anything I can say.", tags: ["visual", "language", "thinking", "images", "creative", "nonverbal", "perception", "art", "expression"] },
  { title: "beauty damage", text: "I romanticize pain if it comes with beauty. Boring, “clean” things aren’t interesting to me.", tags: ["beauty", "pain", "emotion", "romanticism", "darkness"] },
  { title: "the small things", text: "I pay attention to details.", tags: ["details", "observation", "noticing", "attention", "art"] },
  { title: "I’m precise about how deeply I feel.", text: "I am intense. Not dramatic.", tags: ["intensity", "depth", "emotion", "feeling", "identity", "self"] },
  { title: "I care", text: "When I care, I care with my whole body.", tags: ["care", "attention", "embodiment", "empathy", "feeling", "love", "emotion", "devotion"] },
  { title: "calm", text: "I can look calm while everything inside me collapses.", tags: ["calm", "inner world", "emotion", "mask", "vulnerability"] },
  { title: "fear of being forgotten", text: "I’m afraid of being “too much,” but I’m also afraid of being invisible.", tags: ["visibility", "fear", "inner world", "emotion", "sensitivity"] },
  { title: "depth terrifies me, sometimes.", text: "I love complexity. But I fear getting lost.", tags: ["complexity", "depth", "inner world", "fear", "overwhelm", "curiosity", "process"] },
  { title: "my internal battle", text: "I feel safest when things have structure, even though I internally battle them.", tags: ["structure", "care", "vulnerability", "resistance", "order"] },
  { title: "safer than now", text: "I romanticize memory more than reality. Reality can be too vulnerable for me.", tags: ["memory", "nostalgia", "vulnerability", "past", "longing"] },
  { title: "on love", text: "I don’t seek love. I seek understanding without explanation.", tags: ["understanding", "care", "connection", "intimacy", "love", "communication"] },
  { title: "effortlessness", text: "I love work that is effortless.", tags: ["craft", "art", "process", "flow"] },
  { title: "worn with love", text: "I love things that feel archival. Old. Worn. Loved on.", tags: ["archive", "vintage", "nostalgia", "history", "texture", "memory", "design", "craft"] },
  { title: "on feeling", text: "Sometimes I'm hard on myself for feeling instead of compartmentalizing my feelings and protecting myself.", tags: ["fear", "self-criticism", "emotion", "sensitivity", "protection", "coping"] },
  { title: "speaking my own language", text: "I feel like I’m always behind. Maybe I’m just premature to my own language.", tags: ["timing", "creative", "language", "process", "growth", "identity"] },
  { title: "practicing softness", text: "Gentleness with myself is something I have to remember to practice. I'm softer than I allow myself to be, especially when it comes to myself.", tags: ["self-compassion", "gentleness", "healing", "care", "self", "growth", "vulnerability"] },
  { title: "metabolizing pain", text: "I internalize and bleed everything out into my work rather than speak about it.", tags: ["art", "creative", "making", "self-expression", "process", "emotion", "release"] },
  { title: "on morality", text: "There's an innate moral compass that lives in me, even if what I care about isn’t coined “morality.”", tags: ["values", "integrity", "intuition", "ethics", "belief", "self", "identity"] },
  { title: "memorable for the wrong reasons", text: "I fear being replaceable, but what scares me more is being unforgettable for the wrong reasons.", tags: ["fear", "identity", "shame", "self-image", "values"] },
  { title: "to be held", text: "I don’t want to be fixed. I want to be held.", tags: ["care", "comfort", "vulnerability", "emotion", "safety", "support"] },
  { title: "unwritten chapter", text: "I’m not lost. Just in the chapter of the story that I haven’t quite found the words for yet.", tags: ["growth", "process", "becoming", "self", "uncertainty", "transition", "identity"] },
  { title: "more than i imagine", text: "More tender. More real. More deliberate than I give myself credit for being.", tags: ["tenderness", "authenticity", "self-worth", "self-expression", "depth"] },
  { title: "first instinct", text: "My first instinct is always to look.", tags: ["observation", "seeing", "attention", "curiosity", "perception", "intuition"] },
  { title: "slightly unfinished", text: "I crave the slightly unfinished. Something that’s lived.", tags: ["unfinished", "imperfect", "lived", "raw", "authenticity", "process", "craft", "vulnerability"] },
  { title: "raw material", text: "Emotion is material.", tags: ["emotion", "material", "art", "expression", "creation"] },
  { title: "how versus what", text: "I’m more interested in process than outcome.", tags: ["process", "creative", "making", "exploration", "learning", "craft", "growth"] },
  { title: "less is more", text: "I value nuance. I like restraint better than excess.", tags: ["nuance", "restraint", "simplicity", "subtlety", "balance", "craft", "values"] },
  { title: "on slowness", text: "I take my time making work. Even when I’m impatient.", tags: ["slowness", "patience", "craft", "time", "intention", "process"] },
  { title: "on memory", text: "Memory is flawed. And that’s what makes me love it.", tags: ["memory", "imperfection", "nostalgia", "distortion", "emotion"] },
  { title: "feel", text: "I’m interested in how things feel, not just how they look.", tags: ["feeling", "experience", "perception", "sensation", "intuition", "observation"] },
  { title: "over and over again", text: "I think a lot. That’s why I go over the same things over and over.", tags: ["overthinking", "reflection", "repetition", "analysis", "rumination", "process", "language", "growth"] },
  { title: "show up again", text: "Consistency is honesty.", tags: ["consistency", "honesty", "reliability", "trust", "values"] },
  { title: "on details", text: "Details shouldn’t have to shout to be seen. I like designs that leave white space.", tags: ["minimalism", "white space", "design", "clarity", "quiet", "art", "observation", "craft"] },
  { title: "research is an emotional act", text: "Research, to me, is an emotional practice. I romanticize research as a feeling.", tags: ["research", "curiosity", "art", "making", "emotion", "exploration", "meaning", "process"] },
  { title: "found on accident", text: "Meaning can be incidental.", tags: ["meaning", "chance", "discovery", "accident", "intuition", "process", "values"] },
  { title: "trust my gut but quiz it.", text: "I trust intuition, but I test it carefully.", tags: ["intuition", "judgment", "balance", "discernment", "reasoning", "values", "process"] },
  { title: "on speed", text: "I think slowness is a strength.", tags: ["slowness", "intention", "strength", "presence", "patience", "values", "growth"] },
  { title: "do feelings always have names", text: "I’m still learning how to define my feelings.", tags: ["emotions", "language", "awareness", "growth", "reflection"] },
];

const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

function renderResults(list) {
  resultsDiv.innerHTML = list
    .map(
      (entry) => `
      <div class="entry">
        <h3 class="entry-title">${entry.title}</h3>
        <p class="entry-text">${entry.text}</p>
        <p class="entry-meta">${entry.tags.join(" · ")}</p>
      </div>
    `
    )
    .join("");
}

function runSearch(rawQuery) {
  const query = rawQuery.toLowerCase().trim();

  if (!query) {
    resultsDiv.innerHTML = "";
    return;
  }

  // ✅ Special command: show EVERYTHING
  if (query === "tiffany" || query === "search:tiffany" || query === "search: tiffany") {
    renderResults(fragments);
    return;
  }

  const matches = fragments.filter((f) => {
    const titleMatch = f.title.toLowerCase().includes(query);
    const textMatch = f.text.toLowerCase().includes(query);
    const tagMatch = f.tags.some((tag) => tag.toLowerCase().includes(query));
    return titleMatch || textMatch || tagMatch;
  });

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p class="empty">Nothing here by that name. Try another word.</p>';
    return;
  }

  renderResults(matches);
}

// Live search
searchInput.addEventListener("input", (e) => runSearch(e.target.value));

// Click: search: tiffany → show all
const tiffanyLink = document.querySelector('a[href="#tiffany"]');
if (tiffanyLink) {
  tiffanyLink.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "search: tiffany";
    runSearch("search: tiffany");
    searchInput.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
