function openPopup(){
    var width=500;
    var height= 500;
    var left= (screen.width/2) - (width/2);
    var top = (screen.height /2) - (height/2);
    var popup = window.open('','popup', 'width =' + width+ ',height ='+ height + ',left=' + left + ',top=' +top);
    popup.document.write(`
    <html>
        <head>
            <title>Comentario</title>
        </head>
        <body>
            <h2>Faça a Sua Pergunta</h2>
            <form id="commentForm">
                <textarea class="box-comm" id="userComment" name="userComment" rows="4" cols="50"></textarea>
                <br>
                <input type="submit" value="Submit" class="inp-sub">

                <style>
                body{
                    backgound-color:black;
                    color:white;
                }

                .box-comm{
                    with:95%;
                    height:30%;
                    backgound-color:rgba(104, 103, 103, 0.315);
                }

                </style>
            </form>
        </body>
    </html> 

            `);
}