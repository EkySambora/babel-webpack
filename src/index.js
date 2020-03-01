
class Test {
    testing(){
        return 'halo testing'
    }
}

let _ = new Test

let app = document.getElementById('app')

app.textContent = _.testing()
