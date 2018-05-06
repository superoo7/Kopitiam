class Global {
  private questions: string[]
  private savedMsg: string[]
  constructor() {
    this.questions = []
    this.savedMsg = []
  }

  getQuestions(): string[] {
    return this.questions
  }

  getSavedMsg(): string[] {
    return this.savedMsg
  }

  clearQuestions(): void {
    this.questions = []
  }

  clearSavedMsg(): void {
    this.savedMsg = []
  }

  addQuestions(q: string): void {
    this.questions = [...this.questions, q]
  }

  addSavedMsg(m: string): void {
    this.savedMsg = [...this.savedMsg, m]
  }
}

export default Global
