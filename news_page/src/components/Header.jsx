import Body from "./Body"

function Header(){
    return(
        <div>
            <h1>NEWS IN BRIEF</h1>
            {/*Child component*/}
            <Body/>
        </div>
    )
}
export default Header