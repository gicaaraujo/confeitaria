import Swal from "sweetalert2";

export default function useAlert() {
    function ConfirmAlert() {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }

    function doubleAlert() {
        Swal.fire({
            title: "Segundo alerta",
            text: "Textodo segundo alerta",
            icon: "question"
        }).then((result) => {
            Swal.fire({
                position: "top-end",
                toast: true,
                icon: "success",
                title: "Produto adicionado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        })
    };

    return { ConfirmAlert, doubleAlert };
}