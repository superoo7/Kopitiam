import * as fs from 'fs'
import * as util from 'util'

const fs_writeFile = util.promisify(fs.writeFile)

class Global {
  private questions: string[]
  private savedMsg: string[]
  private qJson = 'question.json'
  constructor() {
    this.questions = []
    this.savedMsg = []
  }

  getQuestions(): string[] {
    const data: string[] = JSON.parse(fs.readFileSync(this.qJson, 'utf-8'))
    return data
  }

  getSavedMsg(): string[] {
    return this.savedMsg
  }

  clearQuestions(): void {
    fs_writeFile(this.qJson, '[]')
    return
  }

  clearSavedMsg(): void {
    this.savedMsg = []
  }

  addQuestions(q: string): void {
    let data: string[] = JSON.parse(fs.readFileSync(this.qJson, 'utf-8'))
    data = [...data, q]
    fs_writeFile(this.qJson, JSON.stringify(data))
    return
  }

  addSavedMsg(m: string): void {
    this.savedMsg = [...this.savedMsg, m]
  }
}

export default Global
