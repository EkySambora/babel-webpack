
class Test {
    testing(){
        return 'halo testing'
    }
    addAccount(){
        let lorem = 'lorem ipsum dolor sit amet'
        return lorem
    }
}

let _ = new Test

let app = document.getElementById('app')

app.textContent = _.testing()
