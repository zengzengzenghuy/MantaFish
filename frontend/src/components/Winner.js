const Winners = () =>{
    const Winner = [
      "0xd41CeeD7B7fc8EB183494363fB60D41a5295ecDf",
      "0x818B902962171B9F7DF09b894C2bc07eF12721e4",
      "0x5Cd6af19450c771FAF15e3fe73Ec6C5A8905ee37",
      "0xC382263780E37aA5bc9D1D477B7D686974651FEF",
      "0xa7D6f09099DF8BE46861e6B6E6Cd7965adb7f07C"
      ]
    const winners = Winner.map((win,index)=>
      <p key={index}>{win}</p>
    )
    return <>{winners}</>
}

export default Winners;