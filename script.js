// Questão 1

function fatorial (number) {

    let res = number

    for (let i = 1; i < number; i++) {

        res *= i

    }

    return res

}

function combinacao () {

    n = Number(prompt("Insira o valor N: "))
    k = Number(prompt("Insira o valor K: "))

    const result = fatorial(n)/fatorial(n-k) * fatorial(k)

    console.log(`${n} e ${k} = ${result}`)

    document.getElementById('res-1').innerHTML = result
}

// Questão 2

let stopRot = false

function rotate () {

    while (true) {

        setTimeout(() => {

            baseStr = document.getElementById('res-2').innerHTML
            finalStr = baseStr.substring(baseStr.length - 1).concat(baseStr.substring(0, baseStr.length - 1))
            console.log(baseStr.length)
            
            document.getElementById('res-2').innerHTML = finalStr

        }, 1500)

        console.log('feito!')

    }

}

function stopRotate () {

    stopRotate = true

}