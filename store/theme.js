import { makeAutoObservable } from "mobx";

class Theme {
  
  theme = 'light'

  constructor() {
    makeAutoObservable(this)
  }

  setTheme() {
    this.theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', this.theme)
  }

  changeTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark'
      document.documentElement.setAttribute('data-theme', this.theme)
    }
    else {
      this.theme = 'light'
      document.documentElement.setAttribute('data-theme', this.theme)
      console.log(this.theme)
    }
  }
}

export default new Theme