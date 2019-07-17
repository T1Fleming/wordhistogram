// Want to do it in a streaming fashion

// Return true if is delimiter
const checkDelim = (inChar, delimiter) => {
    const lengthOfDelimiter = delimiter.length
    for (j = 0; j < lengthOfDelimiter; j++) {
        if (inChar === delimiter[j]) {
            return true
        }
    }
    return false
}

const addToHisto = (histo, currentWord) => {
    if (histo[currentWord]) {
        histo[currentWord] += 1
    }
    else {
        histo[currentWord] = 1
    }
}

function generateWordHistogram(inString) {

    let delimiter = []
    let histo = {}
    let currentWord = ""
    //const inString = `The quick brown,  !   )(@&0@#) fox jumped over the lazy dog`
    const strLen = inString.length

    const formDelimiter = (delimiter) => {
        const delimiterString = " ~!@#$%^&*()_+`-={}|:\"<>?[];,./\\"
        const delimiterStringLen = delimiterString.length
        for (k = 0; k < delimiterStringLen; k++) {
            delimiter.push(delimiterString[k])
        }
        delimiter.push('\n')

    }
    formDelimiter(delimiter)

    for (i = 0; i < strLen; i++) {

        let inChar = inString[i];
        let nextChar // In the future, you can not use nextChar and just check that the word your adding is not empty

        // Corner case: Letter before end of array
        if (i != strLen - 2) {
            nextChar == inString[i + 1]
        }

        // Current Word
        if (checkDelim(inChar, delimiter)) {
            if (checkDelim(nextChar, delimiter)) {
                i += 1;
            } else {
                if (currentWord != "") {
                    addToHisto(histo, currentWord)
                }
            }
            currentWord = ""

        } else {
            currentWord += inChar
            // Corner: Final word doesnt end on delim
            if (i == strLen - 1) {
                addToHisto(histo, currentWord)
            }
        }
    }

    return histo;
}

const myString = `
Breathing you in when I want you out
Finding our truth in a hope of doubt
Lying inside our quiet drama

Wearing your heart like a stolen dream
Opening skies with your broken keys
No one can blind us any longer

We'll run where lights won't chase us
Hide where love can save us
I will never let you go

We'll run where lights won't chase us
Hide where love can save us
I will never let you go

Breathing you in when I want you out
Finding our truth in a hope of doubt
Lying inside our quiet drama

Breathing you in when I want you out
Finding our truth in a hope of doubt
Lying inside our quiet drama

Wearing your heart like a stolen dream
Opening skies with your broken keys
No one can blind us any longer

We'll run where lights won't chase us
Hide where love can save us
I will never let you go

We'll run where lights won't chase us
Hide where love can save us
I will never let you go

We'll run where lights won't chase us
Hide where love can save us
I will never let you go

Breathing you in when I want you out
Finding our truth in a hope of doubt
Lying inside our quiet drama
`
console.log(generateWordHistogram(myString))