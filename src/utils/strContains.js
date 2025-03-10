const strContains = (source, phrase) => {
  console.log("🟡 Sprawdzam filtrację:", { source, phrase });
  if (!source || !phrase) return true; 
  return source.toLowerCase().includes(phrase.toLowerCase());
};

export default strContains;
