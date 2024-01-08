import React from "react";
function footer (){
    const d = new Date();
    let year = d.getFullYear();
    return( <footer><p>Copyright &copy; {year}</p></footer>);
}
export default footer;