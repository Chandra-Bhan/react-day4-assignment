function Card(props){
    return(
        <div className="mainDiv">
        {/* User1 */}

        <div>
            <div className="cardStyle">
                <div className="imgDiv">
                <img src={props.U1.image} width="80" height="80"/>
                </div>
                <p>{props.U1.designation}</p>
                <h1>{props.U1.name}</h1>
                <p>{props.U1.description}</p>
                <div className="icoMain">
                <div className="icoDiv">
                    <img src={props.U1.ico1} width="20" height="20"/>
                    </div>
                    <div className="icoDiv">
                    <img src={props.U1.ico2} width="20" height="20"/>
                    </div>
                    <div className="icoDiv">
                    <img src={props.U1.ico3} width="20" height="20"/>
                    </div>
                </div>
            </div>
        </div>

        {/* User2 */}

        <div>
            <div className="cardStyle">
                <div className="imgDiv">
                <img src={props.U2.image} width="80" height="80"/>
                </div>
                <p>{props.U2.designation}</p>
                <h1>{props.U2.name}</h1>
                <p>{props.U2.description}</p>
                <div className="icoMain">
                <div className="icoDiv">
                    <img src={props.U1.ico1} width="20" height="20"/>
                    </div>
                    <div className="icoDiv">
                    <img src={props.U1.ico2} width="20" height="20"/>
                    </div>
                    <div className="icoDiv">
                    <img src={props.U1.ico3} width="20" height="20"/>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
    )
}


export default Card;