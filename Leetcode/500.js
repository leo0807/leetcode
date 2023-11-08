var findWords = function (words) {
  const list = [];
  const rowIdx = "12210111011122000010020202";
  for (const word of words) {
    let isValid = true;
    const idx = rowIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
    for (let i = 1; i < word.length; ++i) {
      if (rowIdx[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      list.push(word);
    }
  }
  return list;
};
