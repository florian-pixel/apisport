import React from 'react'
import DisplayLeagues from '../components/DisplayLeagues'

class League extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            listLeagues: []            
        }
    
    }


    componentDidMount(){
        const obj = {
            method: 'GET',
            url: 'https://football.elenasport.io/v2/leagues',
            qs: {
                expand: '***expand***',
            },
            headers: {
                Authorization: 'Bearer eyJraWQiOiJXVjdcL3pXR0FydzdsR1wvUU9tT1wvY1JPYnZoZ2ZSa1JtVnlLVk80RXBkR2lrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZGNzY29nNWRkNW91cGFzMnM5ZnZrbnVmbSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiZm9vdGJhbGwuZWxlbmFzcG9ydC5pb1wvR0VUOioiLCJhdXRoX3RpbWUiOjE2MjAwNzY5MjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3dPNENCdzdMdyIsImV4cCI6MTYyMDA4MDUyNywiaWF0IjoxNjIwMDc2OTI3LCJ2ZXJzaW9uIjoyLCJqdGkiOiI4OGE4ZTM4MC00ODYyLTQwMjMtYjI5YS0yYzJhYTkwNGZiZDQiLCJjbGllbnRfaWQiOiI0ZGNzY29nNWRkNW91cGFzMnM5ZnZrbnVmbSJ9.fbKYqP3dRNtz7CP0vscd9gB8aAdYIwi4SJUUP5Sv-_vaE3XQRpJZQygdKCG_mMhaUGBfcVlUw6xAFOLbOUU4EsQsPC2Od24s0aRqgftBU87efjQC84zwVH3q6TnYgSshh1n6PGeUfitEhfLBTxOL_HWpfDqo9q6f6hCxw-hY2rAs0nu3LYuTkGMsePaGwg9mnEl6RQmBkwTdpzECeYuoKtQ5Zu8dQsIdL2fwZ1ZcPgZecHQ-YAMzDVAjk8YTsmAM7kPCJ3OYD9SEO_cPiPB5odfOBuDCgXORsh_SoUNws4pJH62cGqJM-w6GwQC9myC4p16yy8HVjgPTVhBjpYqeaA'
            }
        }
        
        fetch(obj.url, obj)
        .then(response => response.json())
        .then(({data}) => this.setState({listLeagues: [...data]}))
    }

    render(){
        const league = this.state.listLeagues.filter(league => league.idCountry === this.props.id)
        console.log(league)                       
        return(             
            <div>
                {league.map((elt,index) => <DisplayLeagues league={elt} key ={index}/>)}

            </div>

        )
    }
} 
export default League