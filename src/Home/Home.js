import React from 'react';


export default class Home extends React.Component {
    componentDidMount() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.cocktailQuery}`)
    .then((cockTailRes) => {
        if (!cockTailRes.ok)
            return cockTailRes.json().then(e => Promise.reject(e));
        return (cockTailRes.json());
    })
    .then((cockTailRes) => {
      console.log(cockTailRes.drinks[0].idDrink)
     let drink ={
       id:cockTailRes.drinks[0].idDrink,
       name: cockTailRes.drinks[0].strDrink,
       type: cockTailRes.drinks[0].strGlass,
       video: cockTailRes.drinks[0].strVideo,
       category: cockTailRes.drinks[0].strCategory,
       instructions: cockTailRes.drinks[0].strInstructions,
       image: cockTailRes.drinks[0].strDrinkThumb,
       notes:  cockTailRes.drinks[0].strNote,
       rating: cockTailRes.drinks[0].strRatings
     
     }
        this.context.addCockTail(drink)
        this.props.history.goBack();
    
    })
    .catch(error => {
    });
}
  render() {
  
    return (

    
    )
  }
}