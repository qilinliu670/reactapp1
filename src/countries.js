import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
})

function Countries() {
    var [countries, setCountries] = useState([])
    var [visibilities, setVisibilities] = useState([])

    useEffect(() => {
        client.query({
            query: gql`
            {
                countries {
                    name
                    native
                    capital
                    emoji
                    currency
                    languages {
                        code
                        name
                    }
                }
            }`
        }).then(response => {
            setCountries(response.data.countries)
            var tmp = []
            for(var i = 0; i < response.data.countries.length; i++) tmp.push(false);
            setVisibilities(tmp)
        })
    }, [])

    return (
        <div>
            {countries.map((country, i) => {
                return <div key={i}>
                    {country.name}
                    <button value={i} onClick={e => {
                        var tmp = [...visibilities]
                        tmp[e.target.value] = true
                        setVisibilities(tmp)
                    }}>details</button>
                    {visibilities[i] ? <div>
                        native: {country.native}<br/>
                        capital: {country.capital}<br/>
                        emoji: {country.emoji}<br/>
                        currency: {country.currency}<br/>
                        languages: {country.languages.map((language, j) => {
                            return <div key={j}>
                                -code: {language.code}, name: {language.name}
                            </div>
                        })}
                    </div> : <br/>}
                    <br/>
                </div>
            })}
        </div>
    )
}

export default Countries