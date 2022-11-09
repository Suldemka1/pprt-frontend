import { makeAutoObservable } from "mobx";

class AppealSlice {

  
  constructor() {
    makeAutoObservable(this)
  }

  surname = ''
  name = ''
  patronymic = ''
  email = ''
  phone = ''
  body = ''
  offerCheck = true
  files = null

  setSurname(string) {
    this.surname = string
  }

  setName(string) {
    this.name = string
  }

  setPatronymic(string) {
    this.patronymic = string
  }

  setEmail(string) {
    this.email = string
  }

  setPhone(string) {
    this.phone = string
  }

  setBody(string) {
    this.body = string
  }

  setFiles(files) {
    this.files = files
  }

  setOffer

  uploadToServer(e) {
    e.preventDefault()
    const formData = new FormData()
    const data = {}
    data['surname'] = this.surname
    data['name'] = this.name
    data['patronymic'] = this.patronymic
    data['email'] = this.email
    data['phone'] = this.phone
    data['body'] = this.body

    try {
      formData.append('data', JSON.stringify(data))

      for (let i = 0; i < this.files.length; i++) {
        formData.append('files.files', this.files[i], this.files[i].name)
      }
      axios.post(`${process.env.APIpath}/api/appeals`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          this.surname = ''
          this.name = ''
          this.patronymic = ''
          this.phone = ''
          this.email = ''
          this.body = ''
          this.offerCheck = false
          this.files = null
        })
        .catch((err, res) => {
          console.log(err);
        });

    } catch (e) {
      console.error(e)
    }
  };

}

export default new AppealSlice