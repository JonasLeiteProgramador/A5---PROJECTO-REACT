export function Card({ id, image, name, gender, hair }) {
    return (
        <>


       
                <ul className="list">
                    <li>
                    <div key={id} className="card">
                        <img src={image} />
                        <h1>{name}</h1>

                        <div className="infos">
                            <p className="firstInfo"> {gender} </p>
                            <p className="secondInfo"> {hair} </p>
                        </div>
                        </div>
                    </li>
                    
                </ul>




        </>
    )
}