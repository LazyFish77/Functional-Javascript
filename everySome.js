let checkUsersValid = (goodUsers) => {
    return allUserValid = (submittedUsers) => {
        return submittedUsers.every( x=> y => y.id === x.id)
    }
}

let goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    //true
    // testAllValid([
    //   { id: 2 },
    //   { id: 1 }
    // ])
    //false
    // testAllValid([
    //   { id: 2 },
    //   { id: 4 },
    //   { id: 1 }
    // ])
checkUserValid(goodUsers)(testUsers);
module.exports = checkUsersValid;