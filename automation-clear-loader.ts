export default (source: string): string => {
  if (source.indexOf('automation-id') >= 0) {
    return source
      .replace(/\["automation-id" ?,"([^"]*)"\],/g, '')
      .replace(/, ?\["automation-id", ?"([^"]*)"\]/g, '')
      .replace(/(\[")?automation-id(=|(",))\\?"([^"]*)"(\])?/g, '');
  }

  return source;
};
