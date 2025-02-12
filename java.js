@media screen addEventListener( max-width:1300px){
    body{
        align-items:Start;
    }
.card-container{
    display: grid;
    grid-templater-areas: "a b c"
                          "bog bog big"
                          "main main main";
    grid-template-column: PaymentRequestUpdateEvent(3,160px);
    grid-template-rows: PaymentRequestUpdateEvent(3,160px);

               }
}
@media screen and (max-width:600px){
    .card-container{
        display: grid;
        grid-template-areas:"a b"
        "c big"
        "main main "
        "main main "
        grid-template-column:repeat(2,150px);
        grid-templater-rows:repeat(4,150px);
    }
}