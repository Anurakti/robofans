import React,{Component} from 'react'
import CardList from './CardList'
import robots from './robots'
import SearchBox from './SearchBox'

export class App extends Component {
    constructor(){
        super()
        this.state = {
            message:'Robofans',
            robots: robots,
            searchfield:''
        }
    }
    onSearchChange = (event)=>{
        this.setState({
            searchfield:event.target.value
        })
    }
    changeMessage=()=>{
        this.setState({
            message:'No robots found'
        })
    }
    
    render() {
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            <div className="tc">
            <h1>{this.state.message}</h1>
            <SearchBox searchChange = {this.onSearchChange} />
            <CardList robots={filteredRobots} />
            {filteredRobots.length===0 ? this.changeMessage : ''}
        </div>
        )
    }
}
export default App
