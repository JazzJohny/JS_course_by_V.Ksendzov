

const checkAge4 = function (age) {
    
    let age_1 = prompt ("How old are you?", "")
    let age_2 = 18
    let age_3 = 60
    let age_1_number = Number(age_1)
    let age_1_boolean = Boolean(age_1_number)
    let age_1_type = typeof(age_1_number)

    if (age_1_type != "number" || age_1_boolean == false) {
        alert("Err: Not a number")
    } else if (age_1 < age_2) {
         alert(`You don’t have access cause your age is ` + age_1 + `. It’s less than 18.`)
    } else if(age_1 >= age_2 && age_1 < age_3) {
         alert("Welcome!")
    } else if(age_1 > age_3) {
     alert("Keep calm and look Culture channel")
    } else {
        alert("Technical work")
    } 
    }

    checkAge4()