
class Test {
    testing(){
        return 'halo testing'
    }
    addAccount(){
        return 'Add Account'
    }
}

let _ = new Test

let app = document.getElementById('app')

app.textContent = _.testing()
