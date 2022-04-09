import './directory-item.styles.jsx';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {id, title, imageUrl, route} = category;
    const navigate = useNavigate()
    const navigateHandler = ()=>{
        navigate(route)
    }
    return (
        <DirectoryItemContainer onClick={navigateHandler} className='directory-item-container'>
       
        <BackgroundImage 
        className='background-image'
        imageUrl={imageUrl} 
        style={{backgroundImage: `url(${imageUrl})`
        }}/>
         <Body className='directory-item-body'>
           <h2>{title.toUpperCase()}</h2>
           <p>Show Now</p>
         </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;