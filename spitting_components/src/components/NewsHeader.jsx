import NewsComponent from "./NewsComponent"
function NewsHeader(){
    return(
        <div>
            <h1>News Header</h1>
            {/*multiple components*/}
            <NewsComponent
            title="News component"
            Data="Random data"/>
            <NewsComponent
            title="News component"
            Data="Random data"/>
            <NewsComponent
            title="News component"
            Data="Random data"/>
        </div>
        
        
        
        
        
    )
}
export default NewsHeader