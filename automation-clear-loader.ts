module.exports = function automationClearLoader(source: string): string {
  const prop = 'automation-id="([^"]*)"';
  if (source.match(prop)) {
    source = source.replace(new RegExp(prop, 'g'), '');
  }

  return source;
};
