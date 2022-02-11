import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaImage } from 'react-icons/fa';

export default function CardList() {

    const [isLoading, setIsLoading] = useState(true)

    const [randomBtn, setRandomBtn] = useState(true)
    const [pokemonBtn, setPokemonBtn] = useState(false)
    const [choiceBtn, setChoiceBtn] = useState(false)

    const [randomColor, setRandomColor] = useState("primary")
    const [pokemonColor, setPokemonColor] = useState("outline-primary")
    const [choiceColor, setChoiceColor] = useState("outline-primary")

    const [showRandom, setShowRandom] = useState([])
    const [showPokemon, setShowPokemon] = useState([])
    const [showChoice, setShowChoice] = useState([])

    const dataCount = 100

    function resetBtn() {
        setIsLoading(true)
        setRandomBtn(false)
        setPokemonBtn(false)
        setChoiceBtn(false)

        setRandomColor("outline-primary")
        setPokemonColor("outline-primary")
        setChoiceColor("outline-primary")
    }

    async function fetchData(apiLink) {
        const response = await fetch(apiLink)
        const info = await response.json();
        return info;
    }

    // For Pokemon Data
    async function catchPokemon(apiLink) {
        let dataArr = []
        let data = await fetchData(apiLink)

        //name and link only
        let newData = data.results

        for (let i = 0; i < dataCount; i++) {
            let detail = await fetchData(newData[i].url)
            dataArr.push(detail)
        }

        // with complete details
        return dataArr
    }


    async function randomData() {
        resetBtn()
        setRandomBtn(true)
        setRandomColor("primary")
        if (showRandom.length === dataCount) {
            setIsLoading(false)
        } else {
            let restoList = await fetchData(`https://random-data-api.com/api/restaurant/random_restaurant/?size=${dataCount}`)
            setShowRandom(restoList.map((resto, index) => {
                let str = resto.description
                if (str.length > 170) {
                    str = str.substring(0, 170) + "...";
                }
                return (
                    <Card key={resto.uid} className="cards col-12 col-md-3">
                        <Card.Img variant="top" src={resto.logo} />
                        <Card.Body>
                            <Card.Title>{resto.name.toLocaleUpperCase()}</Card.Title>
                            <Card.Text>
                                {str}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )
            }))
            setIsLoading(false)
        }
    }


    async function pokemonData() {
        resetBtn()
        setPokemonBtn(true)
        setPokemonColor("primary")
        if (showPokemon.length === dataCount) {
            setIsLoading(false)
        } else {
            let pokemonList = await catchPokemon(`https://pokeapi.co/api/v2/pokemon?limit=100`)
            setShowPokemon(pokemonList.map((pokemon, idx) => {
                let power = pokemon.abilities
                let str = power[0].ability.name

                for (let i = 1; i < power.length; i++) {
                    str = `${str}, ${power[i].ability.name}`
                }

                return (
                    <Card key={idx} className="cards col-12 col-md-3">
                        {(pokemon.sprites?.other?.home?.front_shiny) ?
                            <Card.Img variant="top" src={pokemon.sprites.other.home.front_shiny} />
                            :
                            <FaImage />
                        }
                        <Card.Body>
                            <Card.Title>{pokemon.name.toLocaleUpperCase()}</Card.Title>
                            <Card.Text>
                                <strong>Abilities:</strong> {str}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )
            }))
            setIsLoading(false)
        }
    }

    async function choiceData() {
        resetBtn()
        setChoiceBtn(true)
        setChoiceColor("primary")
        if (showChoice.length === dataCount) {
            setIsLoading(false)
        } else {
            let choiceList = await fetchData(`https://random-data-api.com/api/company/random_company/?size=${dataCount}`)
            setShowChoice(choiceList.map((choice, index) => {
                let str = choice.catch_phrase
                if (str.length > 170) {
                    str = str.substring(0, 170) + "...";
                }
                return (
                    <Card key={choice.uid} className="cards col-12 col-md-3">
                        <Card.Img variant="top" src={choice.logo} />
                        <Card.Body>
                            <Card.Title>{choice.business_name.toLocaleUpperCase()}</Card.Title>
                            <Card.Text>
                                {choice.catch_phrase}
                                {choice.phone_number}
                                {choice.full_address}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )
            }))
            setIsLoading(false)
        }
    }


    useEffect(() => {
        randomData()
    }, [])


    return (
        <div>
            <div className="d-flex justify-content-center text-white mt-5 w-100">
                <Button variant={randomColor} className="w-50 rounded-pill mx-1" active={randomBtn} onClick={() => randomData()}>
                    Random Restaurants
                </Button>

                <Button variant={pokemonColor} className="w-50 rounded-pill mx-1" active={pokemonBtn} onClick={() => pokemonData()}>
                    Pokemon Data
                </Button>
                <Button variant={choiceColor} className="w-50 rounded-pill mx-1" active={choiceBtn} onClick={() => choiceData()}>
                   Random Companies
                </Button>
            </div>
            {(isLoading) ?
                <h3 className="text-center mt-3">LOADING DATA...</h3>
                :
                <div id="cardDiv" className="card-deck d-flex flex-row flex-wrap mt-4">
                    {(randomBtn) ?
                        <>
                            {showRandom}
                        </>
                        :
                        (pokemonBtn) ?
                            <>
                                {showPokemon}
                            </>
                            :
                            <>
                                {showChoice}
                            </>
                    }
                </div>
            }
        </div>
    )
}