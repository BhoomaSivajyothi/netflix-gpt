
import useNowplayingmovies from '../Hooks/useNowplayingmovies'
import Header from './Header'
import Maintaincontainer from './Maintaincontainer'
import Secondarycontainer from './Secondarycontainer'
const Browse = () => {
 useNowplayingmovies()
  return (
    <div>
      <Header/>
      <Maintaincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse