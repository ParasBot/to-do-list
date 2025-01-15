import { useState } from "react";
export default function LudoBoard() {
    let [moves,setMoves] = useState({blue: 0,green: 0,yellow: 0,red: 0});
    // let updatemoves = () => {
    //     //moves.blue += 1;
    //     console.log(`moves.blue  ${moves.blue}`);
    //     setMoves({...moves,blue : moves.blue + 1}); 
    // }
    let [arr , setArr] = useState(["no moves"]);
    let updateBlue = () => {
        //console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        });
        arr.push("blue moves");
        setArr(arr);
        console.log(arr);
    };
    let updateYellow = () => {
        //console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });
    };
    let updateGreen = () => {
        //console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1};
        });
    };
    let updateRed = () => {
        //console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.red + 1};
        });
    };

    return(
        <div>
            <p>Game begins !</p>
            <p>{arr}</p>
            <div className="Board">
                <p>Blue Moves ={moves.blue}</p>
                <button style={{backgroundColor:"blue",color:"black"}} onClick={updateBlue}>+1</button>
                <p>Green Moves ={moves.green}</p>
                <button style={{backgroundColor:"green",color:"black"}} onClick={updateGreen}>+1</button>
                <p>Yellow Moves ={moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Red Moves ={moves.red}</p>
                <button style={{backgroundColor:"red",color:"black"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}