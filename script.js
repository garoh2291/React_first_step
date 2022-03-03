function Car(props) {
    return (
        <div className="car">
            <h3>{props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <small>This is Car</small>
        </div>
    )
}

const App  = (
    <div>
        <Car name="Ford " year="2004"/>
        <Car name="Ford " year="2004"/>
        <Car name="Ford " year="2004"/>

    </div>
)


ReactDOM.render(
    App,
    document.querySelector('#root')
)