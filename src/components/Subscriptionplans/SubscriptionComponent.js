import React,{useState} from 'react'

export default function SubscriptionComponent({p,index}) {
    const [hover,setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    const cardStyle = {
        transform: hover && 'scale(1.10)',
        transition: hover && '0.15s linear'
      };

    function btnStyle(){
        if(hover){
            return hoverStyle
        }else{
            return converted
        }
    }
    const hoverStyle={
        backgroundColor:"#f03a47",
        color:"#ffffff",
        width:"14.5rem",
        height:"4.3rem !important",
        alignItems:"center",
        marginLeft:"1.4rem",
        marginTop:"3rem !important",
        fontSize:"1.5rem",
        fontWeight:"600",
        borderRadius:"1.4rem",
        opacity:"1",
        display:"block",
        margin:"auto"
    }
    const converted = {
        backgroundColor: "#f03a47",
        color: "#ffffff",
        width: "14.5rem",
        height: "0rem !important",
        alignItems: "center",
        marginLeft: "1.4rem",
        marginTop: "0rem !important",
        fontSize: "1.5rem",
        fontWeight: 600,
        borderRadius: "1.4rem",
        opacity: 0,
        margin: "auto"
      }
      
    return (
        <div className='card' id={"card-" + index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={cardStyle}>
            <h2 className="plan-type">{p.type}</h2>
            <h4 className="price">
                Rs. <span>{p.price}</span>/yr
            </h4>
            <p className="device">4 device</p>
            <div className="resolution">
                <p>Resolution</p>
                <h5>{p.resolution}</h5>
            </div>
            <hr />
            <div className="quality">
                <p>Video Quality</p>
                <h5>{p.quality}</h5>
            </div>
            <hr />
            <div className="supported-device">
                <p>Supported Devices</p>    
                <h5>{p.supporteddevice}</h5>
            </div>
            <button className="btn" style={btnStyle()}>Buy Now</button>
        </div>
    )
}
