import React, {Component as ReactComponent} from 'react'
import ListCountry from '../components/DisplayCountryList'
import League from './League'
class Sport extends ReactComponent{
    constructor(){
        super()
        this.state = {
            listCountry: [],
            activCountry: ''
        }
    }
    handleClick(id){
        this.setState({activCountry: id})
    }


    componentDidMount(){
        const obj = {
            method: 'GET',
            url: 'https://football.elenasport.io/v2/countries',
            qs: {
                expand: '***expand***',
            },
            headers: {
                Authorization: 'Bearer eyJraWQiOiJXVjdcL3pXR0FydzdsR1wvUU9tT1wvY1JPYnZoZ2ZSa1JtVnlLVk80RXBkR2lrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZGNzY29nNWRkNW91cGFzMnM5ZnZrbnVmbSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiZm9vdGJhbGwuZWxlbmFzcG9ydC5pb1wvR0VUOioiLCJhdXRoX3RpbWUiOjE2MjAwNzY5MjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3dPNENCdzdMdyIsImV4cCI6MTYyMDA4MDUyNywiaWF0IjoxNjIwMDc2OTI3LCJ2ZXJzaW9uIjoyLCJqdGkiOiI4OGE4ZTM4MC00ODYyLTQwMjMtYjI5YS0yYzJhYTkwNGZiZDQiLCJjbGllbnRfaWQiOiI0ZGNzY29nNWRkNW91cGFzMnM5ZnZrbnVmbSJ9.fbKYqP3dRNtz7CP0vscd9gB8aAdYIwi4SJUUP5Sv-_vaE3XQRpJZQygdKCG_mMhaUGBfcVlUw6xAFOLbOUU4EsQsPC2Od24s0aRqgftBU87efjQC84zwVH3q6TnYgSshh1n6PGeUfitEhfLBTxOL_HWpfDqo9q6f6hCxw-hY2rAs0nu3LYuTkGMsePaGwg9mnEl6RQmBkwTdpzECeYuoKtQ5Zu8dQsIdL2fwZ1ZcPgZecHQ-YAMzDVAjk8YTsmAM7kPCJ3OYD9SEO_cPiPB5odfOBuDCgXORsh_SoUNws4pJH62cGqJM-w6GwQC9myC4p16yy8HVjgPTVhBjpYqeaA'
            }
        }
        fetch(obj.url, obj)
        .then(response => response.json())
        .then(({data}) => this.setState({listCountry: [...data]}))
    }

    renderLeague(id){        
        return <League id = {id}/>        
    }

    render(){
        return(
            <div>
                {this.state.listCountry.map(country => <ListCountry key= {country.id} country = {country} handleClick = {(id) => this.handleClick(id)}/>)}
                <br/>
                { this.state.activCountry ? this.renderLeague(this.state.activCountry) : 'Aucune League à afficher'}
            </div>
        )
    }
}
export default Sport 