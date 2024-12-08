const updateUserHandle = (handle) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/handle`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      handle,
    }),
  });
};

const updateUserInterests = (interestUUIDs) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/interests`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      interestUUIDs,
    }),
  });
};

// функция updateUserHandle и updateUserInterests похожи. Лучше сделать одну универсальную функцию(DRY). Функция должна быть асинхронной

interface UpdateUser<T>{
  url:string, 
  body:T
}

const updateUser = async <T>(options:UpdateUser<T>) => {
  if (!isLoggedIn()) {
    return toLoginPage();
  }

  const token = getToken();
  const headers = getHeaders(token);

  return await fetch(options.url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(
      options.body,
    ),
  });
};
