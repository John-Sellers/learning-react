function Button() {

    let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} clicked me ${count} time(s)`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me!!`)
    //     }
    // }

    /* 'e' is the event that has occured and with that event comes different properties */
    const handleClick = (e) => e.target.textContent = "Ouch 🤬"

    // const handleClick2 = (name) => console.log(`${name} stop!`)

    // return (<button onClick={(e) => handleClick(e)}>Click Me 🤠</button>);
    return (<button onDoubleClick={(e) => handleClick(e)}>Click Me 🤠</button>);

}

export default Button