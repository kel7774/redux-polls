const logger = (store) => (next) => (action => {
    console.group(action.type)
    console.log("the action ", action)
    const returnValue = next(action)
    console.group('the new state' , store.geState())
    console.groupEnd()
    return returnValue
})

export default logger