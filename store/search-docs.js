import { makeAutoObservable } from "mobx";

class SearchDocs {
  doc_title
  result = []

  constructor() {
    makeAutoObservable(this)
  }

  search(string) {
    this.query = string
  }

  fetchDocs(doc_title) {
    fetch(`${process.env.APIpath}/api/documents?filters[title][$containsi]=${doc_title}&populate=*`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  fetchDocsAll() {
    fetch(`${process.env.APIpath}/api/documents?populate=*`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }
}

export default new SearchDocs