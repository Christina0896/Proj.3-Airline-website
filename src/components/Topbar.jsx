import Slider from './Slider'
import '../css/Topbar.css'

function Topbar(){
    const slides =[
        {id:1,num:'1/3',text:'Warning: phishing scheme'},
        {id:2,num:'2/3',text:'Restrictions for the transport of baggage on flights to and / or from Accra, Bissau, Dakar, Praia, Sao Vicente and Sao Tome and Principe'},
        {id:3,num:'3/3',text:'Join our frequent flyer program!' },
    ];

    return<Slider slides={slides} interval={5000}  className='topbar ' />;
}
export default Topbar;