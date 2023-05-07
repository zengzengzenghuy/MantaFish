const Question = () =>{
  const QuestionStyle={
    'flex-direction': 'column',
    'width':'1000px',
    'justify-content': 'flex-start',
    'background-color': 'blue',
    'fontSize' : '30px',
    'border': '1px solid black'
  }
    const Top10 = [
        "What is Mantle Network?",
        "How to deploy on Mantle Network?",
        "How to interact with the L1 MPC contract?",
        "What is $BIT? ",
        "What is Optimistic Rollups?",
        "How to get $BIT token?",
        "Who build Mantle Network?",
        "How to join the Decentralized Sequencer Set?",
        "How to bridge $BIT using Mantle SDK?",
        "How to estimate gas fee for L2 transaction?"
      ]
    const question = Top10.map((ques,index)=>
      <p key={index} style={QuestionStyle}>{ques}</p>
    )
    return <>{question}</>
}

export default Question;