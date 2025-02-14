
import './App.css'
import Card from './components/Card'
import dureImage from './assets/dure.png';

function App() {

  return (
    <>
      <div className="flex flex-wrap h-screen justify-center items-center gap-4 bg-slate-400">
        {/* SRK Card  */}
        <Card image={'https://assets.entrepreneur.com/content/3x2/2000/1698927484-jpg-20231102-174223-0000.jpg'} title={'King Khan'} name={'Shah Rukh Khan'} description={'Shah Rukh Khan is an Indian actor and film producer who works in Hindi cinema. Referred to in the media as the "Baadshah of Bollywood" and "King Khan", he has appeared in more than 100 films, and earned numerous accolades, including 14 Filmfare Awards. '} />
        {/* DureFishan Card  */}
        <Card image={dureImage} title={'The Beauty of Pakistan'} name={'DureFishan Saleem'} description={'Durefishan Saleem (born 14 January 1996) is a Pakistani actress who appears on Urdu television. She made her acting debut in Dil Ruba (2020) as a supporting actress. She is my Most Favorite Actress in the entire world. I would love to meet her oneday :)'} />
        {/* Messi Card  */}
        <Card image={ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFpt5sTwrYse7f3CR9q5ezT-B5eF4yfCEbA&s' } title={ 'Greatest of All Time'} name={ 'Lionel Messi'} description={ 'Lionel Andrés Messi is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Argentina national team. Considered one of the best players of his generation, Messi has won a record five Ballon d`Or awards and several other top awards' } />

        {/* Alia Card  */}
        <Card image={ 'https://i.pinimg.com/736x/9c/c3/a4/9cc3a49d5342c9cfc159d4ac6e017b30.jpg'} title={ 'The Indian Beauty Diva' } name={ 'Alia Bhatt'} description={ 'Alia Bhatt is an Indian actress, known for her work in Bollywood and Telugu cinema. She has appeared in over 50 films, including the Hindi films Baaghi (2016), Baahubali (2015), and Koi Mil Gaya (2018). She has also starred in the Telugu films RRR (2022) and KGF Chapter 2 (2022).'} />
      </div>
    </>

  )
}

export default App
