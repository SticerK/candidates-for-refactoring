const hasNotFoundStatus = (response: Response) => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
};

const hasForbiddenStatus = (response: Response) => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response) => {
  return response.status === HttpStatusCode.STATUS_503;
};

// все строки и числа записывать в константы. При изменении статуса нужно будет поправить в одном месте, а не во всем приложении.
