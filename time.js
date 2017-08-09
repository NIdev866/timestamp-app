function unixToNormal(unixtime){
    const a = new Date(unixtime * 1000)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const year = a.getFullYear()
    const month = months[a.getMonth()]
    const date = a.getDate()
    const time = date + ' ' + month + ' ' + year
    return time
}

const time = function(time){
    const pattern = /^[0-9]*$/g;
    const isNum = pattern.test(time)

    //checking if date is "Invalid Date"
    const normalDate = new Date(time)

    if(isNum){
        let data = {
            unix: time,
            natural : unixToNormal(time)
        }
        if(data.natural === "NaN undefined NaN"){
            data = {
                unix: null,
                natural: null
            }
        }
        return data
    }
    else if(normalDate.toString() !== "Invalid Date"){

        const data = {
            unix: new Date(time)/1000,
            natural: time
        }
        return data;
    } 
    else {
        return {
            unix: null,
            natural: null
        }
    }
}

module.exports = time