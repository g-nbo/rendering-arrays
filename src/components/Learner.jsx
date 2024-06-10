
function Learner(props) {
    return (
        
        <div>
            <hr />
            <h2>Name: {props.name}</h2>
            <p><strong>Bio:</strong> {props.bio}</p>
            
                {
                    props.scores.map((s) => {
                        return <p><strong>Date:</strong> {s.date} <br /> <strong>Score:</strong> {s.score}</p>
                    })
                }
                
            
        </div>
    )
}

export default Learner