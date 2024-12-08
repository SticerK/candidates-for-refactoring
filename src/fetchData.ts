const DEFAULT_TIMEOUT = 5000;

// function fetchData(url: string) {
//   // Используем значение по умолчанию для таймаута
//   fetch(url, { timeout: DEFAULT_TIMEOUT })
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));
// }



async function fetchData(url: string): Promise<Response> {
  const controller = new AbortController(); 
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT); 

  try {
    const response = await fetch(url, { signal: controller.signal }); 
    clearTimeout(timeoutId); 
    return response; 
  } catch (error) {
    throw error; 
  }
}

// в fetch нет свойства timeout, функция fetchData должна быть асинхронной 