import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import "./App.css"
import Scroll from '../components/Scroll'
import Popup from '../components/Popup'

export class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:'',
            popup:false
        }
        console.log("Constructor")
    }
    onSearchChange = (event)=>{
        this.setState({
            searchfield:event.target.value
        })
    }
   async componentDidMount(){ 
       //whenever you are fetching something always fetch in componentDidMount 
       //so that the UI loads first
       //if you have some predefined properties that you want to have earlier 
       //then you can define in componentWillMount
        console.log("Inside will")
        await fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json()
        })
        .then(users=>{
            this.setState({robots:users})
            console.log(this.state)
        })
        console.log("After setting state")
    }
    openPopup = () => {
        this.setState({
            popup:true
        })
    }
    closePopup = () => {
        this.setState({
            popup:false
        })
    }
    render() {
        const{robots,searchfield} = this.state
        console.log("Render runned")
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        return!filteredRobots.length?
            <h1>Loading.......</h1> : 
            (
                <React.Fragment>
                    {this.state.popup?<Popup closePopup={this.closePopup}/>:""}
                    <div className="tc">
                    <h1>Robofans</h1>
                    <button onClick={this.openPopup}>Open Popup</button>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                    </div>
                </React.Fragment>
            )

    }
}
export default App
