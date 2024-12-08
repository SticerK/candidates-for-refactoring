class ServerApi {
  public async  processAddAccountRequest(url: string, account: TAccount): Promise<Response> {
    return this.fetch('POST', url, account);
  }

  public  async sendDeleteAccountRequest(url: string, accountId: string): Promise<Response> {
    return this.fetch('DELETE', url, accountId);
  }

  public async  requestAuth(url: string, credentials: TCredentials): Promise<Response> {
    return this.fetch('GET', url, credentials);
  }


  // методы должна быть асинхронные, возвращать Promise
