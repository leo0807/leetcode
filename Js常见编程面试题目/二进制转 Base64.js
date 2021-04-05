// String.fromCharCode(...new Uint8Array(response.data))
let binaryDataToBase64 = byte => {
    let sBytes = new Uint8Array(byte).reduce((accu, next) => {
        retrun accu + String.fromCharCode(next)
    }, '')
    return `data:image/png;base64,${btoa(sBytes)}`
}