const capitalize = (str) => {
    return str.charAt(0).toUpperCase().concat(str.substring(1).toLowerCase())
}

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const calc = () =>{
    const sum = (a,b) =>{
        return a+b
    }

    const subtract = (a,b) =>{
        return parseFloat((a-b).toFixed(3))
    }

    const divide = (a,b) =>{
        return parseFloat((a/b).toFixed(3))
    }

    const mult = (a,b) =>{
        return a*b
    }

    return {sum,subtract,divide,mult}
}

const caesarCypher = (n,text) =>{
    text.split('').map((k,i) =>{
        let code = text.charCodeAt(i);
        if(code > )
        return k = String.fromCharCode(text.charCodeAt(i)+n)
    })
}


let calculator = calc()

module.exports = {capitalize, reverseString, calculator}