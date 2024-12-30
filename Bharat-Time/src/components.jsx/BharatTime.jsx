function BharatTime() {
let bharatDate = Date();
let bharatTime = "10:38:17AM";

function PresentBharatDate(date){
  const year =String( date.getFullYear());
  const month =String(date.getMonth()+1).padStart(2,"0");
  const date =String(date.getDate()).padStart(2,"0");

  return '${year}/${month}/${date}'
}

  return <h2>This is the current time:{PresentBharatDate()}-{bharatTime}</h2>;
}

export default BharatTime;
