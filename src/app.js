

const pieces = document.querySelectorAll('.chess-piece')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

let gameTurn
let beingDragged
let beingClicked
let totalMoves = 0
let wtotalMoves = 0
let btotalMoves = 0




const wqPawnA ={
    id: "wqPawnA",
    position: 0,
    color: 'white'
}

const wqPawnB ={
    id: "wqPawnB",
    position: 0,
    color: 'white'
}

const wqPawnC ={
    id: "wqPawnC",
    position: 0,
    color: 'white'
}

const wqPawnD ={
    id: "wqPawnD",
    position: 0,
    color: 'white'
}

const wqPawnE ={
    id: "wqPawnE",
    position: 0,
    color: 'white'
}

const wqPawnF ={
    id: "wqPawnF",
    position: 0,
    color: 'white'
}

const wqPawnG ={
    id: "wqPawnG",
    position: 0,
    color: 'white'
}

const wqPawnH ={
    id: "wqPawnH",
    position: 0,
    color: 'white'
}



const wrPawnA ={
    id: "wrPawnA",
    position: 0,
    color: 'white',
    nrMoves: 1
}

const wrPawnB ={
    id: "wrPawnB",
    position: 0,
    color: 'white',
    nrMoves: 1
}
const wrPawnC ={
    id: "wrPawnC",
    position: 0,
    color: 'white',
    nrMoves: 1
}

const wrPawnD ={
    id: "wrPawnD",
    position: 0,
    color: 'white',
    nrMoves: 1
}

const wrPawnE ={
    id: "wrPawnE",
    position: 0,
    color: 'white',
    nrMoves: 1
}

const wrPawnF ={
    id: "wrPawnF",
    position: 0,
    color: 'white',
    nrMoves: 1
}

const wrPawnG ={
    id: "wrPawnG",
    position: 0,
    color: 'white',
    nrMoves: 1
}

const wrPawnH ={
    id: "wrPawnH",
    position: 0,
    color: 'white',
    nrMoves: 1
}



const wkPawnA ={
    id: "wkPawnA",
    position: 0,
    color: 'white'
}

const wkPawnB ={
    id: "wkPawnB",
    position: 0,
    color: 'white'
}

const wkPawnC ={
    id: "wkPawnC",
    position: 0,
    color: 'white'
}

const wkPawnD ={
    id: "wkPawnD",
    position: 0,
    color: 'white'
}

const wkPawnE ={
    id: "wkPawnE",
    position: 0,
    color: 'white'
}

const wkPawnF ={
    id: "wkPawnF",
    position: 0,
    color: 'white'
}

const wkPawnG ={
    id: "wkPawnG",
    position: 0,
    color: 'white'
}

const wkPawnH ={
    id: "wkPawnH",
    position: 0,
    color: 'white'
}



const wbPawnA ={
    id: "wbPawnA",
    position: 0,
    color: 'white'
}

const wbPawnB ={
    id: "wbPawnB",
    position: 0,
    color: 'white'
}

const wbPawnC ={
    id: "wbPawnC",
    position: 0,
    color: 'white'
}

const wbPawnD ={
    id: "wbPawnD",
    position: 0,
    color: 'white'
}

const wbPawnE ={
    id: "wbPawnE",
    position: 0,
    color: 'white'
}

const wbPawnF ={
    id: "wbPawnF",
    position: 0,
    color: 'white'
}

const wbPawnG ={
    id: "wbPawnG",
    position: 0,
    color: 'white'
}

const wbPawnH ={
    id: "wbPawnH",
    position: 0,
    color: 'white'
}



const bqPawnA ={
    id: "bqPawnA",
    position: 0,
    color: 'black'
}

const bqPawnB ={
    id: "bqPawnB",
    position: 0,
    color: 'black'
}

const bqPawnC ={
    id: "bqPawnC",
    position: 0,
    color: 'black'
}

const bqPawnD ={
    id: "bqPawnD",
    position: 0,
    color: 'black'
}

const bqPawnE ={
    id: "bqPawnE",
    position: 0,
    color: 'black'
}

const bqPawnF ={
    id: "bqPawnF",
    position: 0,
    color: 'black'
}

const bqPawnG ={
    id: "bqPawnG",
    position: 0,
    color: 'black'
}

const bqPawnH ={
    id: "bqPawnH",
    position: 0,
    color: 'black'
}



const brPawnA ={
    id: "brPawnA",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnB ={
    id: "brPawnB",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnC ={
    id: "brPawnC",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnD ={
    id: "brPawnD",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnE ={
    id: "brPawnE",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnF ={
    id: "brPawnF",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnG ={
    id: "brPawnG",
    position: 0,
    color: 'black',
    nrMoves: 1
}

const brPawnH ={
    id: "brPawnH",
    position: 0,
    color: 'black',
    nrMoves: 1
}



const bkPawnA ={
    id: "bkPawnA",
    position: 0,
    color: 'black'
}

const bkPawnB ={
    id: "bkPawnB",
    position: 0,
    color: 'black'
}

const bkPawnC ={
    id: "bkPawnC",
    position: 0,
    color: 'black'
}

const bkPawnD ={
    id: "bkPawnD",
    position: 0,
    color: 'black'
}

const bkPawnE ={
    id: "bkPawnE",
    position: 0,
    color: 'black'
}

const bkPawnF ={
    id: "bkPawnF",
    position: 0,
    color: 'black'
}

const bkPawnG ={
    id: "bkPawnG",
    position: 0,
    color: 'black'
}

const bkPawnH ={
    id: "bkPawnH",
    position: 0,
    color: 'black'
}



const bbPawnA ={
    id: "bbPawnA",
    position: 0,
    color: 'black'
}

const bbPawnB ={
    id: "bbPawnB",
    position: 0,
    color: 'black'
}

const bbPawnC ={
    id: "bbPawnC",
    position: 0,
    color: 'black'
}

const bbPawnD ={
    id: "bbPawnD",
    position: 0,
    color: 'black'
}

const bbPawnE ={
    id: "bbPawnE",
    position: 0,
    color: 'black'
}

const bbPawnF ={
    id: "bbPawnF",
    position: 0,
    color: 'black'
}

const bbPawnG ={
    id: "bbPawnG",
    position: 0,
    color: 'black'
}

const bbPawnH ={
    id: "bbPawnH",
    position: 0,
    color: 'black'
}


const qwRook = {
    id: "Queen's White Rook",
    position: 11,
    color: 'white',
    nrMoves: 0
};

const qwKnight = {
    id: "Queen's White Knight",
    position: 21,
    color: 'white'
};

const qwBishop = {
    id: "Queen's White Bishop",
    position: 31,
    color: 'white',

};

const wQueen = {
    id: "White Queen",
    position: 41,
    color: 'white'
};

const wKing = {
    id: "White King",
    position: 51,
    color: 'white',
    nrMoves: 0
};

const kwBishop = {
    id: "King's White Bishop",
    position: 61,
    color: 'white'
};

const kwKnight = {
    id: "King's White Knight",
    position: 71,
    color: 'white'
};

const kwRook = {
    id: "King's White Rook",
    position: 81,
    color: 'white',
    nrMoves: 0
};

const wPawnA = {
    id: "White A Pawn",
    position: 12,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnA","wrPawnA","wkPawnA","wbPawnA"]
};

const wPawnB = {
    id: "White B Pawn",
    position: 22,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnB","wrPawnB","wkPawnB","wbPawnB"]
};

const wPawnC = {
    id: "White C Pawn",
    position: 32,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnC","wrPawnC","wkPawnC","wbPawnC"]
};

const wPawnD = {
    id: "White D Pawn",
    position: 42,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnD","wrPawnD","wkPawnD","wbPawnD"]
};

const wPawnE = {
    id: "White E Pawn",
    position: 52,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnE","wrPawnE","wkPawnE","wbPawnE"]
};

const wPawnF = {
    id: "White F Pawn",
    position: 62,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnF","wrPawnF","wkPawnF","wbPawnF"]
};

const wPawnG = {
    id: "White G Pawn",
    position: 72,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnG","wrPawnG","wkPawnG","wbPawnG"]
};

const wPawnH = {
    id: "White H Pawn",
    position: 82,
    color: 'white',
    nrMoves: 0,
    ep: false,
    owned: ["wqPawnH","wrPawnH","wkPawnH","wbPawnH"]
};

const bPawnA = {
    id: "Black A Pawn",
    position: 17,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnA","brPawnA","bkPawnA","bbPawnA"]
};

const bPawnB = {
    id: "Black B Pawn",
    position: 27,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnB","brPawnB","bkPawnB","bbPawnB"]
};

const bPawnC = {
    id: "Black C Pawn",
    position: 37,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnC","brPawnC","bkPawnC","bbPawnC"]
};

const bPawnD = {
    id: "Black D Pawn",
    position: 47,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnD","brPawnD","bkPawnD","bbPawnD"]
};

const bPawnE = {
    id: "Black E Pawn",
    position: 57,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnE","brPawnE","bkPawnE","bbPawnE"]
};

const bPawnF = {
    id: "Black F Pawn",
    position: 67,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnF","brPawnF","bkPawnF","bbPawnF"]
};

const bPawnG = {
    id: "Black G Pawn",
    position: 77,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnG","brPawnG","bkPawnG","bbPawnG"]
};

const bPawnH = {
    id: "Black H Pawn",
    position: 87,
    color: 'black',
    nrMoves: 0,
    ep: false,
    owned: ["bqPawnH","brPawnH","bkPawnH","bbPawnH"]
}


const qbRook = {
    id: "Queen's Black Rook",
    position: 18,
    color: 'black',
    nrMoves: 0
};

const qbKnight = {
    id: "Queen's Black Knight",
    position: 28,
    color: 'black'
};

const qbBishop = {
    id: "Queen's Black Bishop",
    position: 38,
    color: 'black'
};

const bQueen = {
    id: "Black Queen",
    position: 48,
    color: 'black'
};

const bKing = {
    id: "Black King",
    position: 58,
    color: 'black',
    nrMoves: 0
}

const kbBishop = {
    id: "King's Black Bishop",
    position: 68,
    color: 'black'
};

const kbKnight = {
    id: "King's Black Knight",
    position: 78,
    color: 'black'
};

const kbRook = {
    id: "King's Black Rook",
    position: 88,
    color: 'black',
    nrMoves: 0
};










const dict = {
    "Queen's White Rook" : qwRook,
    "Queen's White Knight" : qwKnight,
    "Queen's White Bishop" : qwBishop,
    "White Queen" : wQueen,
    "White King" : wKing,
    "King's White Bishop" : kwBishop,
    "King's White Knight" : kwKnight,
    "King's White Rook" : kwRook,

    "White A Pawn" : wPawnA,
    "White B Pawn" : wPawnB,
    "White C Pawn" : wPawnC,
    "White D Pawn" : wPawnD,
    "White E Pawn" : wPawnE,
    "White F Pawn" : wPawnF,
    "White G Pawn" : wPawnG,
    "White H Pawn" : wPawnH,

    "Black A Pawn" : bPawnA,
    "Black B Pawn" : bPawnB,
    "Black C Pawn" : bPawnC,
    "Black D Pawn" : bPawnD,
    "Black E Pawn" : bPawnE,
    "Black F Pawn" : bPawnF,
    "Black G Pawn" : bPawnG,
    "Black H Pawn" : bPawnH,

    "Queen's Black Rook" : qbRook,
    "Queen's Black Knight" : qbKnight,
    "Queen's Black Bishop" : qbBishop,
    "Black Queen" : bQueen,
    "Black King" : bKing,
    "King's Black Bishop" : kbBishop,
    "King's Black Knight" : kbKnight,
    "King's Black Rook" : kbRook,
    
    "wqPawnA" : wqPawnA,
    "wqPawnB" : wqPawnB,
    "wqPawnC" : wqPawnC,
    "wqPawnD" : wqPawnD,
    "wqPawnE" : wqPawnE,
    "wqPawnF" : wqPawnF,
    "wqPawnG" : wqPawnG,
    "wqPawnH" : wqPawnH,

    "wrPawnA" : wrPawnA,
    "wrPawnB" : wrPawnB,
    "wrPawnC" : wrPawnC,
    "wrPawnD" : wrPawnD,
    "wrPawnE" : wrPawnE,
    "wrPawnF" : wrPawnF,
    "wrPawnG" : wrPawnG,
    "wrPawnH" : wrPawnH,

    "wkPawnA" : wkPawnA,
    "wkPawnB" : wkPawnB,
    "wkPawnC" : wkPawnC,
    "wkPawnD" : wkPawnD,
    "wkPawnE" : wkPawnE,
    "wkPawnF" : wkPawnF,
    "wkPawnG" : wkPawnG,
    "wkPawnH" : wkPawnH,

    "wbPawnA" : wbPawnA,
    "wbPawnB" : wbPawnB,
    "wbPawnC" : wbPawnC,
    "wbPawnD" : wbPawnD,
    "wbPawnE" : wbPawnE,
    "wbPawnF" : wbPawnF,
    "wbPawnG" : wbPawnG,
    "wbPawnH" : wbPawnH,

    
    "bqPawnA" :  bqPawnA,
    "bqPawnB" :  bqPawnB,
    "bqPawnC" :  bqPawnC,
    "bqPawnD" :  bqPawnD,
    "bqPawnE" :  bqPawnE,
    "bqPawnF" :  bqPawnF,
    "bqPawnG" :  bqPawnG,
    "bqPawnH" :  bqPawnH,

    "brPawnA" :  brPawnA,
    "brPawnB" :  brPawnB,
    "brPawnC" :  brPawnC,
    "brPawnD" :  brPawnD,
    "brPawnE" :  brPawnE,
    "brPawnF" :  brPawnF,
    "brPawnG" :  brPawnG,
    "brPawnH" :  brPawnH,

    "bkPawnA" :  bkPawnA,
    "bkPawnB" :  bkPawnB,
    "bkPawnC" :  bkPawnC,
    "bkPawnD" :  bkPawnD,
    "bkPawnE" :  bkPawnE,
    "bkPawnF" :  bkPawnF,
    "bkPawnG" :  bkPawnG,
    "bkPawnH" :  bkPawnH,

    "bbPawnA" :  bbPawnA,
    "bbPawnB" :  bbPawnB,
    "bbPawnC" :  bbPawnC,
    "bbPawnD" :  bbPawnD,
    "bbPawnE" :  bbPawnE,
    "bbPawnF" :  bbPawnF,
    "bbPawnG" :  bbPawnG,
    "bbPawnH" :  bbPawnH,

};




rook=["Queen's White Rook","King's White Rook","Queen's Black Rook","King's Black Rook","wrPawnA","wrPawnB","wrPawnC","wrPawnD","wrPawnE","wrPawnF","wrPawnG","wrPawnH","brPawnA","brPawnB","brPawnC","brPawnD","brPawnE","brPawnF","brPawnG","brPawnH"]
knight=["Queen's White Knight","King's White Knight","Queen's Black Knight","King's Black Knight","wkPawnA","wkPawnB","wkPawnC","wkPawnD","wkPawnE","wkPawnF","wkPawnG","wkPawnH","bkPawnA","bkPawnB","bkPawnC","bkPawnD","bkPawnE","bkPawnF","bkPawnG","bkPawnH"]
bishop=["Queen's White Bishop","King's White Bishop","King's Black Bishop","Queen's Black Bishop","wbPawnA","wbPawnB","wbPawnC","wbPawnD","wbPawnE","wbPawnF","wbPawnG","wbPawnH","bbPawnA","bbPawnB","bbPawnC","bbPawnD","bbPawnE","bbPawnF","bbPawnG","bbPawnH"]
queen=["White Queen","Black Queen","wqPawnA","wqPawnB","wqPawnC","wqPawnD","wqPawnE","wqPawnF","wqPawnG","wqPawnH","bqPawnA","bqPawnB","bqPawnC","bqPawnD","bqPawnE","bqPawnF","bqPawnG","bqPawnH"]
king=["Black King","White King"]
pawn=["White A Pawn","White B Pawn","White C Pawn","White D Pawn","White E Pawn","White F Pawn","White G Pawn","White H Pawn","Black A Pawn","Black B Pawn","Black C Pawn","Black D Pawn","Black E Pawn","Black F Pawn","Black G Pawn","Black H Pawn"]



window.addEventListener("load", () => {
    gameTurn = 0;

});


swapWhitequeen=document.getElementById("btn-wqueen")
swapWhiterook=document.getElementById("btn-wrook")
swapWhitebishop=document.getElementById("btn-wbishop")
swapWhiteknight=document.getElementById("btn-wknight")

swapBlackqueen=document.getElementById("btn-bqueen")
swapBlackrook=document.getElementById("btn-brook")
swapBlackbishop=document.getElementById("btn-bbishop")
swapBlackknight=document.getElementById("btn-bknight")

backtohomew=document.getElementById("btn-w")
backtohomeb=document.getElementById("btn-b")


pieces.forEach(piece => {
    piece.addEventListener('drag',dragging)
    piece.addEventListener('dragstart',dragStart)
    piece.addEventListener('mouseover', hover)
    piece.addEventListener('mouseleave', hoverOver)
    
})


squares.forEach(square => {
    square.addEventListener('dragover',dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop',dragDrop)
    square.addEventListener('dragend', dragEnd)
    
    square.addEventListener('mouseover', hover)
    square.addEventListener('mouseleave', hoverOver)
})



function hover(e){

    


    e.target.classList.add('highlight')
    e.currentTarget.classList.add("hover");
}
function hoverOver(e){
    

    e.target.classList.remove('highlight')

}


function clickOn(e){

    beingClicked = e.target
    if(beingClicked !== undefined)
    {
        e.target.classList.add('highlight')
        infoDisplay.textContent = 'You are moving the '+ beingClicked.id
    }



}

function nextClick(e) {


    if(beingClicked!==undefined)
    {
        e.target.append(beingClicked)
        e.target.classList.remove('highlight')
        gameTurn++

    }
    

    let child = beingClicked
    const childId = child.id
    move(childId,dict[childId])


    beingClicked = undefined

}

function dragging(e){
    
    e.currentTarget.classList.add("hover");
}

function dragStart(e){
    beingDragged = e.target
}

let wLastMoved
let bLastMoved
function dragDrop(e) {

    let destination
    
    if(dict[e.target.id]!==undefined)
    {
        destination=e.target.parentNode.id
    }
    else
    {
        destination=e.target.id
    }

    let moveTarget
    if(e.target.childElementCount !== 0)
    {
        moveTarget = e.target

    }
    else
    {
        moveTarget = e.target.parentNode
    }
    const pieceType = beingDragged.id
    if(dict[beingDragged.id].color==='white')
    {

        if(wtotalMoves > btotalMoves)
        {
            return
        }


        if (king.includes(pieceType))
        {

            if(rules(destination,pieceType) === true  && sqrAttackedByB(moveTarget.id) === false)
            {

                if(sqrAttackedByB(moveTarget.children[1])===false)
                {


                    totalMoves=totalMoves+1
                    
                    
                    
                    
                    moveTarget.append(beingDragged)
                    e.target.classList.remove('highlight')


                    
                    wtotalMoves = wtotalMoves + 1
                    wLastMoved=beingDragged.id



                    let child = beingDragged;
                    const childId = child.id;
                    move(childId,dict[childId])
                }
            }
            else if(sqrAttackedByB(moveTarget.id) === true && rules(destination,pieceType) === true && dict[beingDragged.id].color==='white')
            {

                
                
            }
            else
            {

                
            }
        }
        else if(rules(destination,pieceType) === true && dict[beingDragged.id].color==='white' && sqrAttackedByB(wKing.position) === false)
        {

            totalMoves=totalMoves+1
            
            
            
            





            blockCheckfromB(moveTarget,beingDragged)






            e.target.classList.remove('highlight')


            
            wtotalMoves = wtotalMoves + 1
            wLastMoved=beingDragged.id



            let child = beingDragged;
            const childId = child.id;
            move(childId,dict[childId])



        }
        else if(sqrAttackedByB(wKing.position) === true && rules(destination,pieceType) === true && dict[beingDragged.id].color==='white')
        {

            let original_position= dict[beingDragged.id].position
            totalMoves=totalMoves+1
            
            
            
            



            blockCheckfromB(moveTarget,beingDragged)





            e.target.classList.remove('highlight')


            
            wtotalMoves = wtotalMoves + 1
            wLastMoved=beingDragged.id



            let child = beingDragged;
            const childId = child.id;
            move(childId,dict[childId])


        }
        else
        {
            
        }
    }


    else if( dict[beingDragged.id].color === 'black' )
    {

        if(wtotalMoves === btotalMoves)
        {

            return

        }

        if (king.includes(pieceType))
        {

            if(rules(destination,pieceType) === true  && sqrAttackedByW(moveTarget.id) === false)
            {

                if(sqrAttackedByW(moveTarget.children[1])===false)
                {


                    totalMoves=totalMoves+1
                    
                    
                    
                    
                    moveTarget.append(beingDragged)
                    e.target.classList.remove('highlight')


                    
                    btotalMoves = btotalMoves + 1
                    bLastMoved=beingDragged.id



                    let child = beingDragged;
                    const childId = child.id;
                    move(childId,dict[childId])
                }
            }
            else if(sqrAttackedByW(moveTarget.id) === true && rules(destination,pieceType) === true && dict[beingDragged.id].color==='black')
            {

                
            }
            else
            {

                

            }
        }
        else if(rules(destination,pieceType) === true && dict[beingDragged.id].color==='black' && sqrAttackedByW(bKing.position) === false)
        {

            
            
            
            
            





            blockCheckfromW(moveTarget,beingDragged)





            e.target.classList.remove('highlight')


            
            btotalMoves = btotalMoves + 1
            bLastMoved=beingDragged.id



            let child = beingDragged;
            const childId = child.id;
            move(childId,dict[childId])



        }
        else if(sqrAttackedByW(bKing.position) === true && rules(destination,pieceType) === true && dict[beingDragged.id].color==='black')
        {

            let original_position= dict[beingDragged.id].position
            totalMoves=totalMoves+1
            
            
            
            




            blockCheckfromW(moveTarget,beingDragged)



            e.target.classList.remove('highlight')


            
            btotalMoves = btotalMoves + 1
            bLastMoved=beingDragged.id



            let child = beingDragged;
            const childId = child.id;
            move(childId,dict[childId])


        }
        else
        {
            
            
            
            
            

        }
    }


    

    
    

    if(wtotalMoves > btotalMoves)
    {
        infoDisplay.textContent = "It is Black's turn"
        
        
        if(checkMateB()===true)
        {
            
            openPopUpWinW()
            backtohomew.addEventListener('click', function() {
                closePopUpWinW();
            });
        }
        else if(checkMateB()===false)
        {
            
        }

    }
    else if(wtotalMoves === btotalMoves)
    {
        infoDisplay.textContent = "It is White's turn"
        
        

        if(checkMateW()===true)
        {
            
            openPopUpWinB()
            backtohomeb.addEventListener('click', function() {
                closePopUpWinB();
            });
        }
        else if(checkMateW()===false)
        {
            
        }
    }



    beingDragged = undefined

}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.target.classList.add('highlight')
}

function dragLeave(e){
    e.target.classList.remove('highlight')
}


function dragEnd(e){
    e.target.classList.add('target')
    setTimeout(( ) => e.target.classList.remove('target'), 100)
    gameTurn++;
    


}





returnPosition=(position)=>{
    return position
}

getPosition=(position)=>{
    
}

function changePosition(position, piece) {
    piece.position = position;
}












function move(idImg, piece)
{
    const child = document.getElementById(idImg);
    
    const parent = child.parentNode;
    const parentId = parent.id;
    const encryptedParentId = parseInt(parentId);
    if (piece)
    {
        changePosition(encryptedParentId, piece);
        
    }
    else
    {
        
    }
}







const rules =(destination,pieceID)=>
{
    const objectName = dict[pieceID]
    const numberPos = objectName.position
    const PieceColor = objectName.color
    
    const a = parseInt(numberPos / 10) 
    const b = numberPos % 10 
    
    
    if (rook.includes(pieceID))
    {
        
        const numberDes = parseInt(destination);
        const i = parseInt(numberDes / 10)
        const j = numberDes % 10
        let ii
        let jj

        const div = document.getElementById(destination)
        const childCount = div.childElementCount
        const originalPosition=objectName.position.toString()
        
        if (i===a && j>b)
        {
            jj=j-1
            while (jj>b)
            {
                const verify = document.getElementById(i+""+jj)
                if(verify.childElementCount === 2 )
                {

                    return false
                }
                jj--
            }
            if(jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {

                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        
                        
                        
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }
                        }
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }
                    }
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        else if (i>a && j===b)
        {
            ii=i-1
            while (ii>a)
            {
                const verify = document.getElementById(ii+""+j)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii--

            }
            if(ii === a)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }
                        }
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }
                    }
                    return true
                }
            }
            else
            {
                return false
            }

        }
        
        if (i===a && j<b)
        {
            jj=j+1
            while (jj<b)
            {
                const verify = document.getElementById(i+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                jj++

            }
            if(jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {

                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }


                        
                        
                        
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }
                        }
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }
                    }
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        if (i<a && j===b)
        {
            ii=i+1

            while (ii<a)
            {
                const verify = document.getElementById(ii+""+j)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii++
            }
            if(ii === a)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        
                        
                        
                        
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                dict[pieceID].nrMoves ++
                            }
                        }
                        return true
                    }
                    else
                    {
                        
                        return false
                    }

                }
                else
                {
                    
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            dict[pieceID].nrMoves ++
                        }
                    }
                    return true
                }
            }
            else
            {
                
                return false
            }
        }
    }
    if (knight.includes(pieceID)) {
        
        const numberDes = parseInt(destination);
        const i = parseInt(numberDes / 10)
        const j = numberDes % 10
        
        
        
        
        
        
        if (
            ((j === b + 2) && (i === a + 1)) ||
            ((j === b + 2) && (i === a - 1)) ||
            ((j === b + 1) && (i === a + 2)) ||
            ((j === b - 1) && (i === a + 2)) ||
            ((j === b + 1) && (i === a - 2)) ||
            ((j === b - 1) && (i === a - 2)) ||
            ((j === b - 2) && (i === a + 1)) ||
            ((j === b - 2) && (i === a - 1))
        ) {
            

            const div = document.getElementById(destination)
            const childCount = div.childElementCount

            if (childCount === 2)
            {
                const enemypiece = div.children[1]
                const enemyobject = dict[enemypiece.id]
                
                if (PieceColor !== enemyobject.color) {

                    if (PieceColor === "white")
                    {
                        if(sqrAttackedByB(wKing.position))
                        {
                            div.removeChild(enemypiece)
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.appendChild(enemypiece)
                                return false
                            }
                        }
                        else if(sqrAttackedByB(wKing.position)===false)
                        {
                            div.removeChild(enemypiece)
                            let originalPosition=objectName.position;
                            let stringOriginalPosition=originalPosition.toString();
                            
                            let htmlPiece=document.getElementById(pieceID)
                            div.appendChild(htmlPiece)

                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(document.getElementById(pieceID))
                                div.appendChild(enemypiece)
                                let orgPos= document.getElementById(stringOriginalPosition)
                                
                                
                                orgPos.appendChild(htmlPiece)
                                return false
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                objectName.nrMoves=objectName.nrMoves+1
                                return true
                            }
                        }
                    }

                    if (PieceColor === "black")
                    {
                        if(sqrAttackedByW(bKing.position))
                        {
                            div.removeChild(enemypiece)
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.appendChild(enemypiece)
                                return false
                            }
                        }
                        else if(sqrAttackedByW(bKing.position)===false)
                        {
                            div.removeChild(enemypiece)
                            let originalPosition=objectName.position;
                            let stringOriginalPosition=originalPosition.toString();
                            
                            let htmlPiece=document.getElementById(pieceID)
                            div.appendChild(htmlPiece)

                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(document.getElementById(pieceID))
                                div.appendChild(enemypiece)
                                let orgPos= document.getElementById(stringOriginalPosition)
                                
                                
                                orgPos.appendChild(htmlPiece)
                                return false
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                objectName.nrMoves=objectName.nrMoves+1
                                return true
                            }
                        }
                    }
                    
                    
                    

                }
                else
                {
                    return false
                }

            }
            return true
        } else
            return false
    }
    if (bishop.includes(pieceID)) {

        
        const numberDes = parseInt(destination);
        const i = parseInt(numberDes / 10)
        const j = numberDes % 10
        let ii
        let jj




        const div = document.getElementById(destination)
        const childCount = div.childElementCount


        
        if (i<a && j>b)
        {
            ii=i+1
            jj=j-1
            while (ii<a && jj>b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {

                    return false
                }
                ii++
                jj--
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        else if (i>a && j<b)
        {
            ii=i-1
            jj=j+1

            while (ii>a && jj<b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii--
                jj++
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }

        }
        
        if (i<a && j<b)
        {
            ii=i+1
            jj=j+1

            while (ii<a && jj<b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii++
                jj++
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {

                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        if (i>a && j>b)
        {
            ii=i-1
            jj=j-1

            while (ii>a && jj>b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii--
                jj--
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {

                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
    }
    if (queen.includes(pieceID))
    {
        
        const numberDes = parseInt(destination);
        const i = parseInt(numberDes / 10)
        const j = numberDes % 10
        let ii
        let jj

        const div = document.getElementById(destination)
        const childCount = div.childElementCount

        if (i<a && j>b)
        {
            ii=i+1
            jj=j-1
            while (ii<a && jj>b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {

                    return false
                }
                ii++
                jj--
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {

                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        else if (i>a && j<b)
        {
            ii=i-1
            jj=j+1

            while (ii>a && jj<b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii--
                jj++
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {

                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }

        }
        
        if (i<a && j<b)
        {
            ii=i+1
            jj=j+1

            while (ii<a && jj<b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii++
                jj++
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {

                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        if (i>a && j>b)
        {
            ii=i-1
            jj=j-1

            while (ii>a && jj>b)
            {
                const verify = document.getElementById(ii+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii--
                jj--
            }
            if(ii === a && jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }

        
        if (i===a && j>b)
        {
            jj=j-1
            while (jj>b)
            {
                const verify = document.getElementById(i+""+jj)
                if(verify.childElementCount === 2 )
                {

                    return false
                }
                jj--
            }
            if(jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        else if (i>a && j===b)
        {
            ii=i-1
            while (ii>a)
            {
                const verify = document.getElementById(ii+""+j)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii--

            }
            if(ii === a)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }

        }
        
        if (i===a && j<b)
        {
            jj=j+1
            while (jj<b)
            {
                const verify = document.getElementById(i+""+jj)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                jj++

            }
            if(jj === b)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        return false
                    }

                }
                else
                {
                    return true
                }
            }
            else
            {
                return false
            }
        }
        
        if (i<a && j===b)
        {
            ii=i+1

            while (ii<a)
            {
                const verify = document.getElementById(ii+""+j)
                if(verify.childElementCount === 2 )
                {
                    return false
                }
                ii++
            }
            if(ii === a)
            {
                if (childCount === 2)
                {
                    const enemypiece = div.children[1]
                    const enemyobject = dict[enemypiece.id]
                    
                    if (PieceColor !== enemyobject.color) {
                        
                        
                        if (PieceColor === "white")
                        {
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }

                        if (PieceColor === "black")
                        {
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(enemypiece)
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.appendChild(enemypiece)
                                    return false
                                }
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                div.removeChild(enemypiece)
                                let originalPosition=objectName.position;
                                let stringOriginalPosition=originalPosition.toString();
                                
                                let htmlPiece=document.getElementById(pieceID)
                                div.appendChild(htmlPiece)

                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(document.getElementById(pieceID))
                                    div.appendChild(enemypiece)
                                    let orgPos= document.getElementById(stringOriginalPosition)
                                    
                                    
                                    orgPos.appendChild(htmlPiece)
                                    return false
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    objectName.nrMoves=objectName.nrMoves+1
                                    return true
                                }
                            }
                        }
                        
                        
                        
                        return true
                    }
                    else
                    {
                        
                        return false
                    }

                }
                else
                {
                    
                    return true
                }
            }
            else
            {
                
                return false
            }
        }


    }
    if (king.includes(pieceID))
    {
        
        const numberDes = parseInt(destination);
        const i = parseInt(numberDes / 10)
        const j = numberDes % 10
        const original_positioni = parseInt ((dict[pieceID].position) / 10)
        const original_positionj = (parseInt(dict[pieceID].position)) % 10
        
        
        
        
        
        
        
        
        if ((j === b+1 && i === a)||
            (j === b+1 && i === a+1)||
            (j === b && i === a+1)||
            (j === b-1 && i === a+1) ||
            (j === b-1 && i === a) ||
            (j === b-1 && i === a-1) ||
            (j === b && i === a-1) ||
            (j ===b+1 && i === a-1)
        )
        {
            

            const div = document.getElementById(destination)
            const childCount = div.childElementCount

            if (childCount === 2)
            {
                const enemypiece = div.children[1]
                const enemyobject = dict[enemypiece.id]
                
                if (PieceColor !== enemyobject.color && sqrAttackedByW(destination)=== false) {
                    
                    
                    if (PieceColor === "white")
                    {
                        if(sqrAttackedByB(wKing.position))
                        {
                            div.removeChild(enemypiece)
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.appendChild(enemypiece)
                                return false
                            }
                        }
                        else if(sqrAttackedByB(wKing.position)===false)
                        {
                            div.removeChild(enemypiece)
                            let originalPosition=objectName.position;
                            let stringOriginalPosition=originalPosition.toString();
                            
                            let htmlPiece=document.getElementById(pieceID)
                            div.appendChild(htmlPiece)

                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(document.getElementById(pieceID))
                                div.appendChild(enemypiece)
                                let orgPos= document.getElementById(stringOriginalPosition)
                                
                                
                                orgPos.appendChild(htmlPiece)
                                return false
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                objectName.nrMoves=objectName.nrMoves+1
                                return true
                            }
                        }
                    }

                    if (PieceColor === "black")
                    {
                        if(sqrAttackedByW(bKing.position))
                        {
                            div.removeChild(enemypiece)
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.appendChild(enemypiece)
                                return false
                            }
                        }
                        else if(sqrAttackedByW(bKing.position)===false)
                        {
                            div.removeChild(enemypiece)
                            let originalPosition=objectName.position;
                            let stringOriginalPosition=originalPosition.toString();
                            
                            let htmlPiece=document.getElementById(pieceID)
                            div.appendChild(htmlPiece)

                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(document.getElementById(pieceID))
                                div.appendChild(enemypiece)
                                let orgPos= document.getElementById(stringOriginalPosition)
                                
                                
                                orgPos.appendChild(htmlPiece)
                                return false
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                objectName.nrMoves=objectName.nrMoves+1
                                return true
                            }
                        }
                    }
                    
                    
                    
                }
                else if(PieceColor !== enemyobject.color && sqrAttackedByB(destination)===false)
                {
                    if (PieceColor === "white")
                    {
                        if(sqrAttackedByB(wKing.position))
                        {
                            div.removeChild(enemypiece)
                            if(sqrAttackedByB(wKing.position))
                            {
                                div.appendChild(enemypiece)
                                return false
                            }
                        }
                        else if(sqrAttackedByB(wKing.position)===false)
                        {
                            div.removeChild(enemypiece)
                            let originalPosition=objectName.position;
                            let stringOriginalPosition=originalPosition.toString();
                            
                            let htmlPiece=document.getElementById(pieceID)
                            div.appendChild(htmlPiece)

                            if(sqrAttackedByB(wKing.position))
                            {
                                div.removeChild(document.getElementById(pieceID))
                                div.appendChild(enemypiece)
                                let orgPos= document.getElementById(stringOriginalPosition)
                                
                                
                                orgPos.appendChild(htmlPiece)
                                return false
                            }
                            else if(sqrAttackedByB(wKing.position)===false)
                            {
                                objectName.nrMoves=objectName.nrMoves+1
                                return true
                            }
                        }
                    }

                    if (PieceColor === "black")
                    {
                        if(sqrAttackedByW(bKing.position))
                        {
                            div.removeChild(enemypiece)
                            if(sqrAttackedByW(bKing.position))
                            {
                                div.appendChild(enemypiece)
                                return false
                            }
                        }
                        else if(sqrAttackedByW(bKing.position)===false)
                        {
                            div.removeChild(enemypiece)
                            let originalPosition=objectName.position;
                            let stringOriginalPosition=originalPosition.toString();
                            
                            let htmlPiece=document.getElementById(pieceID)
                            div.appendChild(htmlPiece)

                            if(sqrAttackedByW(bKing.position))
                            {
                                div.removeChild(document.getElementById(pieceID))
                                div.appendChild(enemypiece)
                                let orgPos= document.getElementById(stringOriginalPosition)
                                
                                
                                orgPos.appendChild(htmlPiece)
                                return false
                            }
                            else if(sqrAttackedByW(bKing.position)===false)
                            {
                                objectName.nrMoves=objectName.nrMoves+1
                                return true
                            }
                        }
                    }
                    
                    
                    
                }
                else
                {
                    return false
                }
            }
            dict[pieceID].nrMoves++
            return true
        }
        
        else if(j === b && i === a+2)
        {
            if (dict[pieceID].color === 'white')
            {
                if (sqrAttackedByB(original_positioni+""+original_positionj))
                {
                    return false
                }
            }
            else if(dict[pieceID].color === 'black')
            {
                if (sqrAttackedByW(original_positioni+""+original_positionj))
                {
                    return false
                }
            }


            let ii=original_positioni+1
            let jj=original_positionj
            
            
            for(let t=ii;t<=ii+1;t++)
            {
                
                
                let enemyCount = document.getElementById((t)+""+(jj)).childElementCount
                if(enemyCount === 2)
                {
                    return false
                }

                let sqrID = t+""+jj
                if (dict[pieceID].color === 'white')
                {
                    if(sqrAttackedByB(sqrID) === true)
                    {
                        return false
                    }
                }

                if (dict[pieceID].color === 'black')
                {
                    if(sqrAttackedByW(sqrID) === true)
                    {
                        return false
                    }

                }

            }
            let di = original_positioni+3  
            let dj = original_positionj    

            const castleR= document.getElementById(di+""+dj).children[1]
            
            
            
            

            if(rook.includes(castleR.id) === true)
            {
                if(dict[castleR.id].nrMoves === 0 && dict[pieceID].nrMoves === 0)
                {
                    let ri = original_positioni+1
                    let rj = original_positionj

                    const rmove=document.getElementById(ri+""+rj)
                    rmove.append(castleR)
                    move(castleR.id,dict[castleR.id])
                    return true
                }
                else
                {
                    return false
                }
            }
            else
            {
                return false
            }

        }

        
        else if(j === b && i === a-2)
        {

            if (dict[pieceID].color === 'white')
            {
                
                if (sqrAttackedByB(original_positioni+""+original_positionj))
                {
                    
                    return false
                }
            }
            else if(dict[pieceID].color === 'black')
            {
                
                if (sqrAttackedByW(original_positioni+""+original_positionj))
                {
                    
                    return false
                }
            }

            
            let ii=original_positioni-1
            let jj=original_positionj

            for(let t=ii;t>=ii-1;t--)
            {
                
                
                
                let enemyCount = document.getElementById((t)+""+(jj)).childElementCount
                if(enemyCount === 2)
                {
                    
                    return false
                }

                let sqrID = t+""+jj
                if (dict[pieceID].color === 'white')
                {
                    
                    if(sqrAttackedByB(sqrID) === true)
                    {
                        
                        return false
                    }
                }

                if (dict[pieceID].color === 'black')
                {
                    
                    if(sqrAttackedByW(sqrID) === true)
                    {
                        
                        return false
                    }

                }

            }
            let di = original_positioni-4  
            let dj = original_positionj    

            const castleR= document.getElementById(di+""+dj).children[1]
            
            
            
            

            if(rook.includes(castleR.id) === true)
            {
                
                if(dict[castleR.id].nrMoves === 0 && dict[pieceID].nrMoves === 0)
                {
                    
                    let ri = original_positioni-1
                    let rj = original_positionj

                    const rmove=document.getElementById(ri+""+rj)
                    rmove.append(castleR)
                    move(castleR.id,dict[castleR.id])
                    return true
                }
                else
                {
                    
                    return false
                }
            }
            else
            {
                
                return false
            }
        }

    }
    if (pawn.includes(pieceID)) {
        
        
        const numberDes = parseInt(destination);
        const i = parseInt(numberDes / 10)
        const j = numberDes % 10
        if (PieceColor === 'white') {
            
            if ((objectName.nrMoves === 0)|| (objectName.nrMoves === 1 && sqrAttackedByB(wKing.position)===true)) {
                
                if (j === b + 1 && i === a - 1 || j === b + 1 && i === a + 1) {
                    
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount
                    if (childCount === 2) {
                        



                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }
                        }



                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            if (PieceColor === "white")
                            {
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByB(wKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1
                                        if(j === 8) {
                                            


                                            openPopUpW()

                                            swapWhitequeen.addEventListener('click', function () {
                                                choiceWQ(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiterook.addEventListener('click', function () {
                                                choiceWR(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhitebishop.addEventListener('click', function () {
                                                choiceWB(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiteknight.addEventListener('click', function () {
                                                choiceWK(pieceID);
                                                closePopUpW();
                                            });
                                        }
                                        return true
                                    }
                                }
                            }

                            if (PieceColor === "black")
                            {
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByW(bKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1
                                        if(j === 8) {
                                            


                                            openPopUpW()

                                            swapWhitequeen.addEventListener('click', function () {
                                                choiceWQ(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiterook.addEventListener('click', function () {
                                                choiceWR(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhitebishop.addEventListener('click', function () {
                                                choiceWB(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiteknight.addEventListener('click', function () {
                                                choiceWK(pieceID);
                                                closePopUpW();
                                            });
                                        }
                                        return true
                                    }
                                }
                            }
                            
                            
                            
                            if (PieceColor === 'white')
                            {
                                if(sqrAttackedByB(wKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }

                            }
                            else if (PieceColor === 'black')
                            {
                                if(sqrAttackedByW(bKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }
                            }
                            if(j === 8) {
                                


                                openPopUpW()

                                swapWhitequeen.addEventListener('click', function () {
                                    choiceWQ(pieceID);
                                    closePopUpW();
                                });

                                swapWhiterook.addEventListener('click', function () {
                                    choiceWR(pieceID);
                                    closePopUpW();
                                });

                                swapWhitebishop.addEventListener('click', function () {
                                    choiceWB(pieceID);
                                    closePopUpW();
                                });

                                swapWhiteknight.addEventListener('click', function () {
                                    choiceWK(pieceID);
                                    closePopUpW();
                                });
                            }
                            return true
                        }
                        else
                        {
                            
                            return false
                        }
                    }
                    
                    return false
                }

                if (j === b + 1 && i === a || j === b + 2 && i === a) {
                    
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            
                            
                            return false
                        }
                        else
                        {
                            
                            return false
                        }
                    }
                    
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }
                    }
                    if(j === 8) {
                        


                        openPopUpW()

                        swapWhitequeen.addEventListener('click', function () {
                            choiceWQ(pieceID);
                            closePopUpW();
                        });

                        swapWhiterook.addEventListener('click', function () {
                            choiceWR(pieceID);
                            closePopUpW();
                        });

                        swapWhitebishop.addEventListener('click', function () {
                            choiceWB(pieceID);
                            closePopUpW();
                        });

                        swapWhiteknight.addEventListener('click', function () {
                            choiceWK(pieceID);
                            closePopUpW();
                        });
                    }
                    return true
                }

            } else if (objectName.nrMoves !== 0) {
                
                if (j === b + 1 && i === a + 1 || j === b + 1 && i === a - 1) {
                    
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }
                        }
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            if (PieceColor === "white")
                            {
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByB(wKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1

                                        if(j === 8) {
                                            


                                            openPopUpW()

                                            swapWhitequeen.addEventListener('click', function () {
                                                choiceWQ(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiterook.addEventListener('click', function () {
                                                choiceWR(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhitebishop.addEventListener('click', function () {
                                                choiceWB(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiteknight.addEventListener('click', function () {
                                                choiceWK(pieceID);
                                                closePopUpW();
                                            });
                                        }

                                        return true
                                    }
                                }
                            }

                            if (PieceColor === "black")
                            {
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByW(bKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1

                                        if(j === 8) {
                                            


                                            openPopUpW()

                                            swapWhitequeen.addEventListener('click', function () {
                                                choiceWQ(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiterook.addEventListener('click', function () {
                                                choiceWR(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhitebishop.addEventListener('click', function () {
                                                choiceWB(pieceID);
                                                closePopUpW();
                                            });

                                            swapWhiteknight.addEventListener('click', function () {
                                                choiceWK(pieceID);
                                                closePopUpW();
                                            });
                                        }

                                        return true
                                    }
                                }
                            }
                            
                            
                            
                            if (PieceColor === 'white')
                            {
                                if(sqrAttackedByB(wKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }

                            }
                            else if (PieceColor === 'black')
                            {
                                if(sqrAttackedByW(bKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }
                            }

                            if(j === 8) {
                                


                                openPopUpW()

                                swapWhitequeen.addEventListener('click', function () {
                                    choiceWQ(pieceID);
                                    closePopUpW();
                                });

                                swapWhiterook.addEventListener('click', function () {
                                    choiceWR(pieceID);
                                    closePopUpW();
                                });

                                swapWhitebishop.addEventListener('click', function () {
                                    choiceWB(pieceID);
                                    closePopUpW();
                                });

                                swapWhiteknight.addEventListener('click', function () {
                                    choiceWK(pieceID);
                                    closePopUpW();
                                });
                                return true
                            }
                            else
                            {
                                
                                return true
                            }


                        }
                        else
                        {
                            
                            return false
                        }

                    }

                    if (enPassantW(destination, pieceID) === true)
                    {
                        
                        return true
                    }
                    else
                    {
                        
                        return false
                    }
                }

                if (j === b + 1 && i === a) {
                    
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            
                            
                            return false
                        }
                        else
                        {
                            
                            return false
                        }

                    }
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }
                    }
                    if (j === 8)
                    {
                        
                        openPopUpW()

                        swapWhitequeen.addEventListener('click', function() {
                            choiceWQ(pieceID);
                            closePopUpW();
                        });

                        swapWhiterook.addEventListener('click', function() {
                            choiceWR(pieceID);
                            closePopUpW();
                        });

                        swapWhitebishop.addEventListener('click', function() {
                            choiceWB(pieceID);
                            closePopUpW();
                        });

                        swapWhiteknight.addEventListener('click', function() {
                            choiceWK(pieceID);
                            closePopUpW();
                        });
                        return true
                    }
                    else
                    {
                        
                        return true
                    }

                }

            }

        }
        else if (PieceColor === 'black') {
            if ((objectName.nrMoves === 0 ) || (objectName.nrMoves === 1 && sqrAttackedByW(bKing.position)===true)) {
                if (j === b - 1 && i === a + 1 || j === b - 1 && i === a - 1) {
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }
                        }
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            if (PieceColor === "white")
                            {
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByB(wKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1
                                        if( j === 1)
                                        {
                                            openPopUpB()

                                            swapBlackqueen.addEventListener('click', function() {
                                                choiceBQ(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackrook.addEventListener('click', function() {
                                                choiceBR(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackbishop.addEventListener('click', function() {
                                                choiceBB(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackknight.addEventListener('click', function() {
                                                choiceBK(pieceID);
                                                closePopUpB();
                                            });
                                        }
                                        return true
                                    }
                                }
                            }

                            if (PieceColor === "black")
                            {
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByW(bKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1
                                        if( j === 1)
                                        {
                                            openPopUpB()

                                            swapBlackqueen.addEventListener('click', function() {
                                                choiceBQ(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackrook.addEventListener('click', function() {
                                                choiceBR(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackbishop.addEventListener('click', function() {
                                                choiceBB(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackknight.addEventListener('click', function() {
                                                choiceBK(pieceID);
                                                closePopUpB();
                                            });
                                        }
                                        return true
                                    }
                                }
                            }
                            
                            
                            
                            if (PieceColor === 'white')
                            {
                                if(sqrAttackedByB(wKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }

                            }
                            else if (PieceColor === 'black')
                            {
                                if(sqrAttackedByW(bKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }
                            }
                            if( j === 1)
                            {
                                openPopUpB()

                                swapBlackqueen.addEventListener('click', function() {
                                    choiceBQ(pieceID);
                                    closePopUpB();
                                });

                                swapBlackrook.addEventListener('click', function() {
                                    choiceBR(pieceID);
                                    closePopUpB();
                                });

                                swapBlackbishop.addEventListener('click', function() {
                                    choiceBB(pieceID);
                                    closePopUpB();
                                });

                                swapBlackknight.addEventListener('click', function() {
                                    choiceBK(pieceID);
                                    closePopUpB();
                                });
                            }
                            return true
                        }
                        else
                        {
                            return false
                        }

                    }
                    return false
                }

                if (j === b - 1 && i === a || j === b - 2 && i === a) {
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            
                            return false
                        } else {
                            return false
                        }

                    }
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }
                    }
                    if( j === 1)
                    {
                        openPopUpB()

                        swapBlackqueen.addEventListener('click', function() {
                            choiceBQ(pieceID);
                            closePopUpB();
                        });

                        swapBlackrook.addEventListener('click', function() {
                            choiceBR(pieceID);
                            closePopUpB();
                        });

                        swapBlackbishop.addEventListener('click', function() {
                            choiceBB(pieceID);
                            closePopUpB();
                        });

                        swapBlackknight.addEventListener('click', function() {
                            choiceBK(pieceID);
                            closePopUpB();
                        });
                    }
                    return true
                }

            } else if (objectName.nrMoves !== 0) {
                if (j === b - 1 && i === a + 1 || j === b - 1 && i === a - 1) {
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        if (PieceColor === 'white')
                        {
                            if(sqrAttackedByB(wKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }

                        }
                        else if (PieceColor === 'black')
                        {
                            if(sqrAttackedByW(bKing.position) === false)
                            {
                                objectName.nrMoves ++
                            }
                        }
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            if (PieceColor === "white")
                            {
                                if(sqrAttackedByB(wKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByB(wKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByB(wKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByB(wKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1
                                        if( j === 1)
                                        {
                                            openPopUpB()

                                            swapBlackqueen.addEventListener('click', function() {
                                                choiceBQ(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackrook.addEventListener('click', function() {
                                                choiceBR(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackbishop.addEventListener('click', function() {
                                                choiceBB(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackknight.addEventListener('click', function() {
                                                choiceBK(pieceID);
                                                closePopUpB();
                                            });
                                        }
                                        return true
                                    }
                                }
                            }

                            if (PieceColor === "black")
                            {
                                if(sqrAttackedByW(bKing.position))
                                {
                                    div.removeChild(enemypiece)
                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.appendChild(enemypiece)
                                        return false
                                    }
                                }
                                else if(sqrAttackedByW(bKing.position)===false)
                                {
                                    div.removeChild(enemypiece)
                                    let originalPosition=objectName.position;
                                    let stringOriginalPosition=originalPosition.toString();
                                    
                                    let htmlPiece=document.getElementById(pieceID)
                                    div.appendChild(htmlPiece)

                                    if(sqrAttackedByW(bKing.position))
                                    {
                                        div.removeChild(document.getElementById(pieceID))
                                        div.appendChild(enemypiece)
                                        let orgPos= document.getElementById(stringOriginalPosition)
                                        
                                        
                                        orgPos.appendChild(htmlPiece)
                                        return false
                                    }
                                    else if(sqrAttackedByW(bKing.position)===false)
                                    {
                                        objectName.nrMoves=objectName.nrMoves+1
                                        if( j === 1)
                                        {
                                            openPopUpB()

                                            swapBlackqueen.addEventListener('click', function() {
                                                choiceBQ(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackrook.addEventListener('click', function() {
                                                choiceBR(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackbishop.addEventListener('click', function() {
                                                choiceBB(pieceID);
                                                closePopUpB();
                                            });

                                            swapBlackknight.addEventListener('click', function() {
                                                choiceBK(pieceID);
                                                closePopUpB();
                                            });
                                        }
                                        return true
                                    }
                                }
                            }
                            
                            
                            
                            if (PieceColor === 'white')
                            {
                                if(sqrAttackedByB(wKing.position) === false)
                                {
                                    objectName.nrMoves ++
                                }

                            }
                            else if (PieceColor === 'black')
                            {
                                if(sqrAttackedByW(bKing.position) === false)
                                {
                                    
                                    objectName.nrMoves ++
                                }
                            }
                            if( j === 1)
                            {
                                openPopUpB()

                                swapBlackqueen.addEventListener('click', function() {
                                    choiceBQ(pieceID);
                                    closePopUpB();
                                });

                                swapBlackrook.addEventListener('click', function() {
                                    choiceBR(pieceID);
                                    closePopUpB();
                                });

                                swapBlackbishop.addEventListener('click', function() {
                                    choiceBB(pieceID);
                                    closePopUpB();
                                });

                                swapBlackknight.addEventListener('click', function() {
                                    choiceBK(pieceID);
                                    closePopUpB();
                                });
                                return true
                            }
                            else
                            {
                                return true
                            }

                        }
                        else
                        {
                            return false
                        }

                    }
                    if (enPassantB(destination, pieceID) === true) {
                        return true
                    }
                    else
                    {
                        return false
                    }
                }

                if (j === b - 1 && i === a) {
                    const div = document.getElementById(destination)
                    const childCount = div.childElementCount

                    if (childCount === 2) {
                        const enemypiece = div.children[1]
                        const enemyobject = dict[enemypiece.id]
                        
                        if (PieceColor !== enemyobject.color) {
                            
                            
                            return false
                        }
                        else
                        {
                            return false
                        }

                    }
                    if (PieceColor === 'white')
                    {
                        if(sqrAttackedByB(wKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }

                    }
                    else if (PieceColor === 'black')
                    {
                        if(sqrAttackedByW(bKing.position) === false)
                        {
                            objectName.nrMoves ++
                        }
                    }
                    if(j === 1)
                    {
                        openPopUpB()

                        swapBlackqueen.addEventListener('click', function() {
                            choiceBQ(pieceID);
                            closePopUpB();
                        });

                        swapBlackrook.addEventListener('click', function() {
                            choiceBR(pieceID);
                            closePopUpB();
                        });

                        swapBlackbishop.addEventListener('click', function() {
                            choiceBB(pieceID);
                            closePopUpB();
                        });

                        swapBlackknight.addEventListener('click', function() {
                            choiceBK(pieceID);
                            closePopUpB();
                        });
                        return true
                    }
                    else
                    {
                        return true
                    }
                }

            }

        }
    }
}



const enPassantW =(destination,pieceID)=> {

    
    const objectName = dict[pieceID]
    const numberPos = objectName.position
    const PieceColor = objectName.color
    
    const a = parseInt(numberPos / 10) 
    const b = numberPos % 10 
    
    
    const numberDes = parseInt(destination);
    const i = parseInt(numberDes / 10)
    const j = numberDes % 10

    let div = document.getElementById(destination)
    let downdiv = parseInt(destination)
    downdiv = downdiv - 1
    let tempId = downdiv.toString()
    div = document.getElementById(tempId)
    const childCount = div.childElementCount

    const enemypiece = div.children[1]
    const enemyobject = dict[enemypiece.id]
    
    
    if ((b === 5 && j === b + 1 && i === a + 1 && enemyobject.id === bLastMoved) ||
        (b === 5 && j === b + 1 && i === a - 1 && enemyobject.id === bLastMoved)) {
        
        if (childCount === 2) {
            
            objectName.nrMoves = objectName.nrMoves + 1

            
            
            
            
            if (PieceColor !== enemyobject.color && enemyobject.nrMoves === 1 && pawn.includes(enemyobject.id))
            {
                
                if (PieceColor === "white")
                {
                    if(sqrAttackedByB(wKing.position))
                    {
                        div.removeChild(enemypiece)
                        if(sqrAttackedByB(wKing.position))
                        {
                            div.appendChild(enemypiece)
                            return false
                        }
                    }
                    else if(sqrAttackedByB(wKing.position)===false)
                    {
                        div.removeChild(enemypiece)
                        let originalPosition=objectName.position;
                        let stringOriginalPosition=originalPosition.toString();
                        
                        let htmlPiece=document.getElementById(pieceID)
                        div.appendChild(htmlPiece)

                        if(sqrAttackedByB(wKing.position))
                        {
                            div.removeChild(document.getElementById(pieceID))
                            div.appendChild(enemypiece)
                            let orgPos= document.getElementById(stringOriginalPosition)
                            
                            
                            orgPos.appendChild(htmlPiece)
                            return false
                        }
                        else if(sqrAttackedByB(wKing.position)===false)
                        {
                            objectName.nrMoves=objectName.nrMoves+1
                            return true
                        }
                    }
                }

                if (PieceColor === "black")
                {
                    if(sqrAttackedByW(bKing.position))
                    {
                        div.removeChild(enemypiece)
                        if(sqrAttackedByW(bKing.position))
                        {
                            div.appendChild(enemypiece)
                            return false
                        }
                    }
                    else if(sqrAttackedByW(bKing.position)===false)
                    {
                        div.removeChild(enemypiece)
                        let originalPosition=objectName.position;
                        let stringOriginalPosition=originalPosition.toString();
                        
                        let htmlPiece=document.getElementById(pieceID)
                        div.appendChild(htmlPiece)

                        if(sqrAttackedByW(bKing.position))
                        {
                            div.removeChild(document.getElementById(pieceID))
                            div.appendChild(enemypiece)
                            let orgPos= document.getElementById(stringOriginalPosition)
                            
                            
                            orgPos.appendChild(htmlPiece)
                            return false
                        }
                        else if(sqrAttackedByW(bKing.position)===false)
                        {
                            objectName.nrMoves=objectName.nrMoves+1
                            return true
                        }
                    }
                }
                
                
                
                objectName.nrMoves = objectName.nrMoves + 1
                return true
            }
            else
            {
                return false
            }

        }
        return false
    }

}

const enPassantB =(destination,pieceID)=> {
    
    const objectName = dict[pieceID]
    const numberPos = objectName.position
    const PieceColor = objectName.color
    
    const a = parseInt(numberPos / 10) 
    const b = numberPos % 10 
    
    
    const numberDes = parseInt(destination);
    const i = parseInt(numberDes / 10)
    const j = numberDes % 10

    let div = document.getElementById(destination)
    let downdiv = parseInt(destination)
    downdiv = downdiv + 1
    let tempId = downdiv.toString()
    div = document.getElementById(tempId)
    const childCount = div.childElementCount

    const enemypiece = div.children[1]
    const enemyobject = dict[enemypiece.id]
    
    
    if ((b === 4 && j === b - 1 && i === a + 1 && enemyobject.id === wLastMoved) ||
        (b === 4 && j === b - 1 && i === a - 1 && enemyobject.id === wLastMoved)) {
        

        if (childCount === 2) {
            
            objectName.nrMoves = objectName.nrMoves + 1

            
            
            
            
            if (PieceColor !== enemyobject.color && enemyobject.nrMoves === 1 && pawn.includes(enemyobject.id)) {
                
                if (PieceColor === "white")
                {
                    if(sqrAttackedByB(wKing.position))
                    {
                        div.removeChild(enemypiece)
                        if(sqrAttackedByB(wKing.position))
                        {
                            div.appendChild(enemypiece)
                            return false
                        }
                    }
                    else if(sqrAttackedByB(wKing.position)===false)
                    {
                        div.removeChild(enemypiece)
                        let originalPosition=objectName.position;
                        let stringOriginalPosition=originalPosition.toString();
                        
                        let htmlPiece=document.getElementById(pieceID)
                        div.appendChild(htmlPiece)

                        if(sqrAttackedByB(wKing.position))
                        {
                            div.removeChild(document.getElementById(pieceID))
                            div.appendChild(enemypiece)
                            let orgPos= document.getElementById(stringOriginalPosition)
                            
                            
                            orgPos.appendChild(htmlPiece)
                            return false
                        }
                        else if(sqrAttackedByB(wKing.position)===false)
                        {
                            objectName.nrMoves=objectName.nrMoves+1
                            return true
                        }
                    }
                }

                if (PieceColor === "black")
                {
                    if(sqrAttackedByW(bKing.position))
                    {
                        div.removeChild(enemypiece)
                        if(sqrAttackedByW(bKing.position))
                        {
                            div.appendChild(enemypiece)
                            return false
                        }
                    }
                    else if(sqrAttackedByW(bKing.position)===false)
                    {
                        div.removeChild(enemypiece)
                        let originalPosition=objectName.position;
                        let stringOriginalPosition=originalPosition.toString();
                        
                        let htmlPiece=document.getElementById(pieceID)
                        div.appendChild(htmlPiece)

                        if(sqrAttackedByW(bKing.position))
                        {
                            div.removeChild(document.getElementById(pieceID))
                            div.appendChild(enemypiece)
                            let orgPos= document.getElementById(stringOriginalPosition)
                            
                            
                            orgPos.appendChild(htmlPiece)
                            return false
                        }
                        else if(sqrAttackedByW(bKing.position)===false)
                        {
                            objectName.nrMoves=objectName.nrMoves+1
                            return true
                        }
                    }
                }
                
                
                
                objectName.nrMoves = objectName.nrMoves + 1
                return true
            }
            else
            {
                return false
            }

        }
        return false
    }

}

const choiceWQ=(PieceID)=>{  
    const PieceObject= dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(queen.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/whiteQueen.png";
    img.id = swapPiece.id
}

const choiceWR=(PieceID)=>{
    const PieceObject= dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(rook.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/whiteRook.png";
    img.id = swapPiece.id
}

const choiceWB=(PieceID)=>{
    const PieceObject= dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(bishop.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/whiteBishop.png";
    img.id = swapPiece.id
}

const choiceWK=(PieceID)=>{
    const PieceObject= dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(knight.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/whiteKnight.png";
    img.id = swapPiece.id
}


const choiceBQ=(PieceID)=>{  
    const PieceObject = dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(queen.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/blackQueen.png";
    img.id = swapPiece.id
}

const choiceBR=(PieceID)=>{
    const PieceObject= dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(rook.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/blackRook.png";
    img.id = swapPiece.id
}

const choiceBB=(PieceID)=>{
    const PieceObject= dict[PieceID]
    let change
    for(let i=0; i<=3;i++)
    {
        if(bishop.includes(PieceObject.owned[i]))
        {
            change=PieceObject.owned[i]
            break
        }
    }
    const swapPiece=dict[change]
    swapPiece.position=PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/blackBishop.png";
    img.id = swapPiece.id
}

const choiceBK=(PieceID)=> {
    const PieceObject = dict[PieceID]
    let change
    for (let i = 0; i <= 3; i++) {
        if (knight.includes(PieceObject.owned[i])) {
            change = PieceObject.owned[i]
            break
        }
    }
    const swapPiece = dict[change]
    swapPiece.position = PieceObject.position
    let img = document.getElementById(PieceID);
    img.src = "images/blackKnight.png";
    img.id = swapPiece.id
}




let popupw=document.getElementById("pop-up-w")
let popupb=document.getElementById("pop-up-b")
let popupwinW=document.getElementById("pop-up-win-w")
let popupwinB=document.getElementById("pop-up-win-b")
const openPopUpW =()=> {
    popupw.classList.add("open-pop-up-w")

}

const closePopUpW =()=> {
    popupw.classList.remove("open-pop-up-w")

}

const openPopUpB =()=> {
    popupb.classList.add("open-pop-up-b")

}

const closePopUpB =()=> {
    popupb.classList.remove("open-pop-up-b")

}


const openPopUpWinW =()=> {
    popupwinW.classList.add("open-pop-up-win-w")

}

const closePopUpWinW =()=> {
    popupwinW.classList.remove("open-pop-up-win-w")

}

const openPopUpWinB =()=> {
    popupwinB.classList.add("open-pop-up-win-b")

}

const closePopUpWinB =()=> {
    popupwinB.classList.remove("open-pop-up-win-b")

}



const sqrAttackedByB =(sqrPos)=>{


    const numberDes = parseInt(sqrPos);
    const i = parseInt(numberDes / 10)
    const j = numberDes % 10
    
    


    if( i+1 <= 8 && j+2 <=8 && i+1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }

    }
    if( i-1 <= 8 && j+2 <=8 && i-1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }
    if( i+2 <= 8 && j+1 <=8 && i+2 >= 1 && j+1 >= 1) {
        let enemyCount = document.getElementById((i+2) +""+ (j+1)).childElementCount
        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2) +""+ (j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i+2 <= 8 && j-1 <=8 && i+2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j+1 <=8 && i-2 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j-1 <=8 && i-2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i+1 <= 8 && j-2 <=8 && i+1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }


    if( i-1 <= 8 && j-2 <=8 && i-1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }




    if( i <= 8 && j+1 <=8 && i >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j+1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }
    if( i+1 <= 8 && j+1 <=8 && i+1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }
    if( i+1 <= 8 && j <=8 && i+1 >= 1 && j >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i+1 <= 8 && j-1 <=8 && i+1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i <= 8 && j-1 <=8 && i >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j-1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i-1 <= 8 && j-1 <=8 && i-1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i-1 <= 8 && j <=8 && i-1 >= 1 && j >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }


    if( i-1 <= 8 && j+1 <=8 && i-1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }



    
    let ii=i
    let jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }

        }

        jj++
    }

    ii=i
    jj=j-1


    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        jj--
    }


    ii=i+1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        ii++
    }

    ii=i-1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        ii--
    }




    ii=i+1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        ii++
        jj++
    }

    ii=i+1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        ii++
        jj--
    }

    ii=i-1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        ii--
        jj--
    }

    ii=i-1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            else if (!king.includes(enemyID))
            {
                break
            }
        }

        ii--
        jj++
    }


    return false
}



const sqrAttackedByW =(sqrPos)=>{


    const numberDes = parseInt(sqrPos);
    const i = parseInt(numberDes / 10)
    const j = numberDes % 10
    
    




    if( i+1 <= 8 && j+2 <=8 && i+1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }

    }
    if( i-1 <= 8 && j+2 <=8 && i-1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }
    if( i+2 <= 8 && j+1 <=8 && i+2 >= 1 && j+1 >= 1) {
        let enemyCount = document.getElementById((i+2) +""+ (j+1)).childElementCount
        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2) +""+ (j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i+2 <= 8 && j-1 <=8 && i+2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j+1 <=8 && i-2 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j-1 <=8 && i-2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i+1 <= 8 && j-2 <=8 && i+1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }


    if( i-1 <= 8 && j-2 <=8 && i-1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }






    if( i <= 8 && j+1 <=8 && i >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j+1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }
    if( i+1 <= 8 && j+1 <=8 && i+1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID))) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }
    if( i+1 <= 8 && j <=8 && i+1 >= 1 && j >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i+1 <= 8 && j-1 <=8 && i+1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i <= 8 && j-1 <=8 && i >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j-1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i-1 <= 8 && j-1 <=8 && i-1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i-1 <= 8 && j <=8 && i-1 >= 1 && j >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }


    if( i-1 <= 8 && j+1 <=8 && i-1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID))) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }



    


    let ii=i
    let jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        jj++
    }

    ii=i
    jj=j-1


    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        jj--
    }


    ii=i+1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii++
    }

    ii=i-1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii--
    }




    ii=i+1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii++
        jj++
    }

    ii=i+1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii++
        jj--
    }

    ii=i-1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii--
        jj--
    }

    ii=i-1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii--
        jj++
    }


    return false
}



const blockCheckfromB=(moveTarget,beingDragged)=>{


    let original_position = document.getElementById(dict[beingDragged.id].position.toString())
    moveTarget.append(beingDragged)
    let move = 0

    if(sqrAttackedByB(wKing.position)=== false)
    {
        move = 0
        
        
    }
    else if(sqrAttackedByB(wKing.position)=== true)
    {
        wtotalMoves = wtotalMoves - 1
        move = 1
        original_position.append(beingDragged)
    }

    if(move === 1)
    {
        return false
    }
    else
    {
        return true
    }
}





const blockCheckfromW=(moveTarget,beingDragged)=> {


    let original_position = document.getElementById(dict[beingDragged.id].position.toString())
    moveTarget.append(beingDragged)
    let move = 0


    if(sqrAttackedByW(bKing.position)=== false)
    {
        move = 0
        
        
    }
    else if(sqrAttackedByW(bKing.position)=== true)
    {
        move = 1
        btotalMoves = btotalMoves - 1
        original_position.append(beingDragged)
    }

    if(move === 1)
    {
        return false
    }
    else
    {
        return true
    }

}

const checkMateW = () => {
    let attackers =[]




    const kingCoords = parseInt(wKing.position);
    const i = parseInt(kingCoords / 10)
    const j = kingCoords % 10

    


    if( i+1 <= 8 && j+2 <=8 && i+1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }

    }
    if( i-1 <= 8 && j+2 <=8 && i-1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }
    if( i+2 <= 8 && j+1 <=8 && i+2 >= 1 && j+1 >= 1) {
        let enemyCount = document.getElementById((i+2) +""+ (j+1)).childElementCount
        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2) +""+ (j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i+2 <= 8 && j-1 <=8 && i+2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i-2 <= 8 && j+1 <=8 && i-2 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i-2 <= 8 && j-1 <=8 && i-2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i+1 <= 8 && j-2 <=8 && i+1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }


    if( i-1 <= 8 && j-2 <=8 && i-1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }





    



    if( i <= 8 && j+1 <=8 && i >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j+1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }
    if( i+1 <= 8 && j+1 <=8 && i+1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID))) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }
    if( i+1 <= 8 && j <=8 && i+1 >= 1 && j >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i+1 <= 8 && j-1 <=8 && i+1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i <= 8 && j-1 <=8 && i >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j-1)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i-1 <= 8 && j-1 <=8 && i-1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i-1 <= 8 && j <=8 && i-1 >= 1 && j >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j)).children[1].id
            if ((king.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }


    if( i-1 <= 8 && j+1 <=8 && i-1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID))) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
        }
    }



    


    let ii=i
    let jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        jj++
    }

    ii=i
    jj=j-1


    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        jj--
    }


    ii=i+1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii++
    }

    ii=i-1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii--
    }




    ii=i+1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii++
        jj++
    }

    ii=i+1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii++
        jj--
    }

    ii=i-1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii--
        jj--
    }

    ii=i-1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii--
        jj++
    }


    if (attackers.length === 1) {

        if (checkMateKMoveW()) {
            return false
        }

        
        if (sqrAttackedByB(dict[attackers[0]].position) === true) {
            if (sqrAttackedByWwoPawn(dict[attackers[0]].position) === true) {
                
                return false
            }
            
            
            
            
            
        }
        
        if (queen.includes(attackers[0])) {
            
            const QPosition = dict[attackers[0]].position
            const QCoords = parseInt(QPosition);
            const i = parseInt(QCoords / 10)
            const j = QCoords % 10


            let ii = i
            let jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                        }
                    }
                    
                    break
                }

                jj--
            }

            ii = i
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj--
                        }
                    }
                    
                    break
                }

                jj++
            }


            ii = i - 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i - 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                        }
                    }
                    
                    break
                }

                ii--
            }

            ii = i + 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i + 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii >= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                        }
                    }
                    
                    break
                }

                ii++
            }

            ii = i - 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i - 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj && iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                            iii++
                        }
                    }
                    
                    break
                }

                jj--
                ii--
            }
            
            ii = i + 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i + 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj--
                        }
                    }
                    
                    break
                }

                ii++
                jj++
            }

            ii = i - 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i - 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii <= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                            jjj--
                        }
                    }
                    
                    break
                }

                ii--
                jj++
            }

            ii = i + 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i + 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj++
                        }
                    }
                    
                    break
                }

                ii++
                jj--
            }
        }


        


        else if (bishop.includes(attackers[0])) {
            


            
            const QPosition = dict[attackers[0]].position
            const QCoords = parseInt(QPosition);
            const i = parseInt(QCoords / 10)
            const j = QCoords % 10

            ii = i - 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i - 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj && iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                            iii++
                        }
                    }
                    
                    break
                }

                jj--
                ii--
            }
            
            ii = i + 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i + 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj--
                        }
                    }
                    
                    break
                }

                ii++
                jj++
            }

            ii = i - 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i - 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii <= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                            jjj--
                        }
                    }
                    
                    break
                }

                ii--
                jj++
            }

            ii = i + 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i + 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj++
                        }
                    }
                    
                    break
                }

                ii++
                jj--
            }
        }
        else if(rook.includes(attackers[0]))
        {
            
            const QPosition = dict[attackers[0]].position
            const QCoords = parseInt(QPosition);
            const i = parseInt(QCoords / 10)
            const j = QCoords % 10


            let ii = i
            let jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                        }
                    }
                    
                    break
                }

                jj--
            }

            ii = i
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj--
                        }
                    }
                    
                    break
                }

                jj++
            }

            ii = i - 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i - 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                        }
                    }
                    
                    break
                }

                ii--
            }

            ii = i + 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i + 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii >= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                        }
                    }
                    
                    break
                }

                ii++
            }


        }

    }
    else if (attackers.length === 2)
    {
        if(checkMateKMoveW())
        {
            return false
        }
        else
        {
            return true
        }

    }
    else if (attackers.length === 0)
    {
        return false
    }

    return true



}

const checkMateB = () =>
{
    

    let attackers =[]


    const kingCoords = parseInt(bKing.position);
    const i = parseInt(kingCoords / 10)
    const j = kingCoords % 10

    


    if( i+1 <= 8 && j+2 <=8 && i+1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }

    }
    if( i-1 <= 8 && j+2 <=8 && i-1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }
    if( i+2 <= 8 && j+1 <=8 && i+2 >= 1 && j+1 >= 1) {
        let enemyCount = document.getElementById((i+2) +""+ (j+1)).childElementCount
        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2) +""+ (j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i+2 <= 8 && j-1 <=8 && i+2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i-2 <= 8 && j+1 <=8 && i-2 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i-2 <= 8 && j-1 <=8 && i-2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }

    if( i+1 <= 8 && j-2 <=8 && i+1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }


    if( i-1 <= 8 && j-2 <=8 && i-1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }





    



    
    
    

    if( i+1 <= 8 && j+1 <=8 && i+1 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }

    

    if( i+1 <= 8 && j-1 <=8 && i+1 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-1)).children[1].id
            if (((king.includes(enemyID)) || pawn.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
        }
    }

    


    



    


    let ii=i
    let jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        jj++
    }

    ii=i
    jj=j-1


    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        jj--
    }


    ii=i+1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii++
    }

    ii=i-1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii--
    }




    ii=i+1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii++
        jj++
    }

    ii=i+1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii++
        jj--
    }

    ii=i-1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii--
        jj--
    }

    ii=i-1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                attackers.push(enemyID)
            }
            break
        }

        ii--
        jj++
    }


    if (attackers.length === 1) {

        if (checkMateKMoveB()) {
            
            return false
        }

        
        if (sqrAttackedByW(dict[attackers[0]].position) === true) {
            if (sqrAttackedByBwoPawn(dict[attackers[0]].position) === true) {
                
                return false
            }
            
            
            
            
            
        }
        
        if (queen.includes(attackers[0])) {
            
            const QPosition = dict[attackers[0]].position
            const QCoords = parseInt(QPosition);
            const i = parseInt(QCoords / 10)
            const j = QCoords % 10


            let ii = i
            let jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                        }
                    }
                    
                    break
                }

                jj--
            }

            ii = i
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj--
                        }
                    }
                    
                    break
                }

                jj++
            }


            ii = i - 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i - 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                        }
                    }
                    
                    break
                }

                ii--
            }

            ii = i + 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i + 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii >= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                        }
                    }
                    
                    break
                }

                ii++
            }

            ii = i - 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i - 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj && iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                            iii++
                        }
                    }
                    
                    break
                }

                jj--
                ii--
            }
            
            ii = i + 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i + 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj--
                        }
                    }
                    
                    break
                }

                ii++
                jj++
            }

            ii = i - 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i - 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii <= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                            jjj--
                        }
                    }
                    
                    break
                }

                ii--
                jj++
            }

            ii = i + 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i + 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj++
                        }
                    }
                    
                    break
                }

                ii++
                jj--
            }
        }


        


        else if (bishop.includes(attackers[0])) {
            


            
            const QPosition = dict[attackers[0]].position
            const QCoords = parseInt(QPosition);
            const i = parseInt(QCoords / 10)
            const j = QCoords % 10

            ii = i - 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i - 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj && iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                            iii++
                        }
                    }
                    
                    break
                }

                jj--
                ii--
            }
            
            ii = i + 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i + 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj--
                        }
                    }
                    
                    break
                }

                ii++
                jj++
            }

            ii = i - 1
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i - 1
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (iii <= backCoordI && jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                            jjj--
                        }
                    }
                    
                    break
                }

                ii--
                jj++
            }

            ii = i + 1
            jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'black') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i + 1
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (iii >= backCoordI && jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByBwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                            jjj++
                        }
                    }
                    
                    break
                }

                ii++
                jj--
            }
        }
        else if(rook.includes(attackers[0]))
        {
            
            const QPosition = dict[attackers[0]].position
            const QCoords = parseInt(QPosition);
            const i = parseInt(QCoords / 10)
            const j = QCoords % 10


            let ii = i
            let jj = j - 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) + 1
                        let backCoordI = i
                        let backCoordj = j - 1
                        
                        
                        
                        
                        while (jjj <= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj++
                        }
                    }
                    
                    break
                }

                jj--
            }

            ii = i
            jj = j + 1

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10)
                        let jjj = (KCoords % 10) - 1
                        let backCoordI = i
                        let backCoordj = j + 1
                        
                        
                        
                        
                        while (jjj >= backCoordj) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            jjj--
                        }
                    }
                    
                    break
                }

                jj++
            }

            ii = i - 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) + 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i - 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii <= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii++
                        }
                    }
                    
                    break
                }

                ii--
            }

            ii = i + 1
            jj = j

            while (ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8) {
                
                let enemyCount = document.getElementById((ii) + "" + (jj)).childElementCount
                if (enemyCount === 2) {
                    
                    let enemyID = document.getElementById((ii) + "" + (jj)).children[1].id
                    
                    
                    
                    if (king.includes(enemyID) && dict[enemyID].color === 'white') {
                        
                        const KPosition = dict[enemyID].position
                        const KCoords = parseInt(KPosition);
                        let iii = parseInt(KCoords / 10) - 1
                        let jjj = (KCoords % 10)
                        let backCoordI = i + 1
                        let backCoordj = j
                        
                        
                        
                        
                        while (iii >= backCoordI) {
                            
                            let checkpathQK = parseInt(document.getElementById((iii) + "" + (jjj)).id)
                            if (sqrAttackedByWwoPawn(checkpathQK)) {
                                
                                
                                return false
                            }

                            iii--
                        }
                    }
                    
                    break
                }

                ii++
            }


        }


    }
    else if (attackers.length === 2)
    {
        if(checkMateKMoveB())
        {
            return false
        }
        else
        {
            return true
        }

    }
    else if (attackers.length === 0)
    {
        return false
    }


    return true

}



const checkMateKMoveW=()=> {


    const i = parseInt((wKing.position / 10))
    const j = parseInt(wKing.position % 10)
    let up
    if( i>=1 && i<=8 && j+1>=1 && j+1<=8)
    {
        up = i + "" + (j + 1)
    }

    let upRight
    if( i+1>=1 && i+1<=8 && j+1>=1 && j+1<=8)
    {
        upRight = (i + 1) + "" + (j + 1)
    }

    let right
    if(i+1>=1 && i+1<=8 && j>=1 && j<=8)
    {
        right = (i + 1) + "" + j
    }

    let downRight
    if(i+1>=1 && i+1<=8 && j-1>=1 && j-1<=8)
    {
        downRight = (i + 1) + "" + (j - 1)
    }

    let down
    if(i>=1 && i<=8 && j-1>=1 && j-1<=8)
    {
        down = (i) + "" + (j - 1)
    }

    let downLeft
    if(i-1>=1 && i-1<=8 && j-1>=1 && j-1<=8)
    {
        downLeft = (i - 1) + "" + (j - 1)
    }

    let left
    if(i-1>=1 && i-1<=8 && j>=1 && j<=8)
    {
        left = (i - 1) + "" + (j)
    }

    let topLeft
    if(i-1>=1 && i-1<=8 && j+1>=1 && j+1<=8)
    {
        topLeft = (i - 1) + "" + (j + 1)
    }



    let c = 0

    if (sqrAttackedByB(wKing.position))
    {
        if(up !== undefined)
        {
            if (sqrAttackedByB(up) === true || (document.getElementById(up).childElementCount === 2 && dict[document.getElementById(up).children[1].id].color==="white")  )
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(upRight !== undefined)
        {
            if(sqrAttackedByB(upRight)===true || (document.getElementById(upRight).childElementCount === 2 && dict[document.getElementById(upRight).children[1].id].color === "white"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(right !== undefined)
        {
            if(sqrAttackedByB(right)===true || (document.getElementById(right).childElementCount === 2 && dict[document.getElementById(right).children[1].id].color==="white"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(downRight !== undefined)
        {
            if(sqrAttackedByB(downRight)===true || (document.getElementById(downRight).childElementCount === 2 && dict[document.getElementById(downRight).children[1].id].color==="white"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(down !== undefined)
        {
            if(sqrAttackedByB(down)===true || (document.getElementById(down).childElementCount === 2 && dict[document.getElementById(down).children[1].id].color==="white") )
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(left !== undefined)
        {
            if(sqrAttackedByB(left)===true || (document.getElementById(left).childElementCount === 2 && dict[document.getElementById(left).children[1].id].color==="white") )
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(topLeft !== undefined)
        {
            if( sqrAttackedByB(topLeft)===true || (document.getElementById(topLeft).childElementCount === 2 && dict[document.getElementById(topLeft).children[1].id].color==="white"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(downLeft !== undefined)
        {
            if( sqrAttackedByB(downLeft)===true || (document.getElementById(downLeft).childElementCount === 2 && dict[document.getElementById(downLeft).children[1].id].color==="white"))
            {
                c++
            }
        }
        else
        {
            c++
        }

    }


    if(c === 8)
    {
        return false
    }
    else
    {
        return true
    }


}



const checkMateKMoveB=()=> {

    const i = parseInt((bKing.position / 10))
    const j = parseInt(bKing.position % 10)


    let up
    if( i>=1 && i<=8 && j+1>=1 && j+1<=8)
    {
        
        up = i + "" + (j + 1)
    }

    let upRight
    if( i+1>=1 && i+1<=8 && j+1>=1 && j+1<=8)
    {
        
        upRight = (i + 1) + "" + (j + 1)
    }

    let right
    if(i+1>=1 && i+1<=8 && j>=1 && j<=8)
    {

        right = (i + 1) + "" + j
    }

    let downRight
    if(i+1>=1 && i+1<=8 && j-1>=1 && j-1<=8)
    {
        downRight = (i + 1) + "" + (j - 1)
    }

    let down
    if(i>=1 && i<=8 && j-1>=1 && j-1<=8)
    {
        down = (i) + "" + (j - 1)
    }

    let downLeft
    if(i-1>=1 && i-1<=8 && j-1>=1 && j-1<=8)
    {
        downLeft = (i - 1) + "" + (j - 1)
    }

    let left
    if(i-1>=1 && i-1<=8 && j>=1 && j<=8)
    {
        left = (i - 1) + "" + (j)
    }

    let topLeft
    if(i-1>=1 && i-1<=8 && j+1>=1 && j+1<=8)
    {
        topLeft = (i - 1) + "" + (j + 1)
    }



    let c = 0

    if (sqrAttackedByW(bKing.position))
    {
        if(up !== undefined)
        {
            if (sqrAttackedByW(up) === true || (document.getElementById(up).childElementCount === 2 && dict[document.getElementById(up).children[1].id].color==="black")  )
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(upRight !== undefined)
        {
            if(sqrAttackedByW(upRight)===true || (document.getElementById(upRight).childElementCount === 2 && dict[document.getElementById(upRight).children[1].id].color === "black"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(right !== undefined)
        {
            if(sqrAttackedByW(right)===true || (document.getElementById(right).childElementCount === 2 && dict[document.getElementById(right).children[1].id].color==="black"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(downRight !== undefined)
        {
            if(sqrAttackedByW(downRight)===true || (document.getElementById(downRight).childElementCount === 2 && dict[document.getElementById(downRight).children[1].id].color==="black"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(down !== undefined)
        {
            if(sqrAttackedByW(down)===true || (document.getElementById(down).childElementCount === 2 && dict[document.getElementById(down).children[1].id].color==="black") )
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(left !== undefined)
        {
            if(sqrAttackedByW(left)===true || (document.getElementById(left).childElementCount === 2 && dict[document.getElementById(left).children[1].id].color==="black") )
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(topLeft !== undefined)
        {
            if( sqrAttackedByW(topLeft)===true || (document.getElementById(topLeft).childElementCount === 2 && dict[document.getElementById(topLeft).children[1].id].color==="black"))
            {
                c++
            }
        }
        else
        {
            c++
        }

        if(downLeft !== undefined)
        {
            if( sqrAttackedByW(downLeft)===true || (document.getElementById(downLeft).childElementCount === 2 && dict[document.getElementById(downLeft).children[1].id].color==="black"))
            {
                c++
            }
        }
        else
        {
            c++
        }

    }


    
    if(c === 8)
    {
        return false
    }
    else
    {
        return true
    }

}



const sqrAttackedByBwoPawn =(sqrPos)=>{


    const numberDes = parseInt(sqrPos);
    const i = parseInt(numberDes / 10)
    const j = numberDes % 10
    
    


    if( i+1 <= 8 && j+2 <=8 && i+1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }

    }
    if( i-1 <= 8 && j+2 <=8 && i-1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }
    if( i+2 <= 8 && j+1 <=8 && i+2 >= 1 && j+1 >= 1) {
        let enemyCount = document.getElementById((i+2) +""+ (j+1)).childElementCount
        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2) +""+ (j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i+2 <= 8 && j-1 <=8 && i+2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j+1 <=8 && i-2 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j-1 <=8 && i-2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }

    if( i+1 <= 8 && j-2 <=8 && i+1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

        }
    }


    if( i-1 <= 8 && j-2 <=8 && i-1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }



    if( i <= 8 && j+2<=8 && i>=1 && j+2>=1) {
        let enemyCount = document.getElementById((i) + "" + (j + 2)).childElementCount
        let enemybl = document.getElementById((i) + "" + (j+1)).childElementCount

        if (enemybl === 2)
        {
            return false
        }

        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j+2)).children[1].id
            if ((pawn.includes(enemyID)) && dict[enemyID].color === 'black' && dict[enemyID].nrMoves===0)
            {
                return true
            }
        }
    }

    if( i <= 8 && j+1<=8 && i>=1 && j+1>=1) {
        let enemyCount = document.getElementById((i) + "" + (j + 1)).childElementCount
        let enemybl = document.getElementById((i) + "" + (j)).childElementCount

        if (enemybl === 2)
        {
            return false
        }

        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j+1)).children[1].id
            if ((pawn.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
        }
    }


    
    let ii=i
    let jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

            break


        }

        jj++
    }

    ii=i
    jj=j-1


    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

            break

        }

        jj--
    }


    ii=i+1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black') {
                return true
            }
            break

        }

        ii++
    }

    ii=i-1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

            break
        }

        ii--
    }




    ii=i+1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

            break
        }

        ii++
        jj++
    }

    ii=i+1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

            break
        }

        ii++
        jj--
    }

    ii=i-1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }

            break
        }

        ii--
        jj--
    }

    ii=i-1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'black')
            {
                return true
            }
            break
        }

        ii--
        jj++
    }


    return false
}


const sqrAttackedByWwoPawn =(sqrPos)=>{


    const numberDes = parseInt(sqrPos);
    const i = parseInt(numberDes / 10)
    const j = numberDes % 10
    
    




    if( i+1 <= 8 && j+2 <=8 && i+1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }

    }
    if( i-1 <= 8 && j+2 <=8 && i-1 >= 1 && j+2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j+2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j+2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }
    if( i+2 <= 8 && j+1 <=8 && i+2 >= 1 && j+1 >= 1) {
        let enemyCount = document.getElementById((i+2) +""+ (j+1)).childElementCount
        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2) +""+ (j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i+2 <= 8 && j-1 <=8 && i+2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i+2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j+1 <=8 && i-2 >= 1 && j+1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j+1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j+1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i-2 <= 8 && j-1 <=8 && i-2 >= 1 && j-1 >= 1)
    {
        let enemyCount = document.getElementById((i-2)+""+(j-1)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-2)+""+(j-1)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }

    if( i+1 <= 8 && j-2 <=8 && i+1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i+1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i+1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }


    if( i-1 <= 8 && j-2 <=8 && i-1 >= 1 && j-2 >= 1)
    {
        let enemyCount = document.getElementById((i-1)+""+(j-2)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((i-1)+""+(j-2)).children[1].id
            if ((knight.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }


    

    if( i <= 8 && j-2<=8 && i>=1 && j-2>=1) {
        let enemyCount = document.getElementById((i) + "" + (j - 2)).childElementCount
        let enemybl = document.getElementById((i) + "" + (j - 1)).childElementCount

        if (enemybl === 2)
        {
            return false
        }

        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j-2)).children[1].id
            if ((pawn.includes(enemyID)) && dict[enemyID].color === 'white' && dict[enemyID].nrMoves===0)
            {
                return true
            }
        }
    }

    if( i <= 8 && j-1<=8 && i>=1 && j-1>=1) {
        let enemyCount = document.getElementById((i) + "" + (j - 1)).childElementCount
        let enemybl = document.getElementById((i) + "" + (j)).childElementCount

        if (enemybl === 2)
        {
            return false
        }

        if (enemyCount === 2)
        {
            let enemyID = document.getElementById((i)+""+(j-1)).children[1].id
            if ((pawn.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
        }
    }


    


    let ii=i
    let jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        jj++
    }

    ii=i
    jj=j-1


    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        jj--
    }


    ii=i+1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii++
    }

    ii=i-1
    jj=j

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || rook.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii--
    }




    ii=i+1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii++
        jj++
    }

    ii=i+1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii++
        jj--
    }

    ii=i-1
    jj=j-1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii--
        jj--
    }

    ii=i-1
    jj=j+1

    while(ii >= 1 && jj >= 1 && ii <= 8 && jj <= 8)
    {
        let enemyCount = document.getElementById((ii)+""+(jj)).childElementCount
        if(enemyCount === 2)
        {
            let enemyID = document.getElementById((ii)+""+(jj)).children[1].id
            if (((queen.includes(enemyID)) || bishop.includes(enemyID)) && dict[enemyID].color === 'white')
            {
                return true
            }
            break
        }

        ii--
        jj++
    }


    return false
}



