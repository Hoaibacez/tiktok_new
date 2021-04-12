class Account {
    constructor(data) {
        this.data = data
    }
    get fullName() {
        return `${this.data.first_name} ${this.data.last_name}`
    }
}
export default Account