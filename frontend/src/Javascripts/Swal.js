import Swal from "sweetalert2"

function swal(icon, title, text) {

    return (
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        footer: '<a href="http://localhost:3000/home">Visit home page</a>'
    }
    ))}

    export default swal