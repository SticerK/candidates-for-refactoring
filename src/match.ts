const [value1, value2] = rawHeaderLine.match(headerPattern);

headers.set(value1.toLowerCase(), value2);

// деструктуризация значений. Улучшает читаемость кода  
