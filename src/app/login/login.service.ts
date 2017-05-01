
export class LoginService {
  userName: string;
  constructor() { }

  loginWithFacebook(token: string)
  {
    this.userName = 'dor';//todo: change to return username from the servar

    let a =1;
  }
  public loginWithEmail(email: string, password: string) :boolean
  {
    this.userName = 'dor';//todo: change to return username from the servar
    return true;
  }
}
